// Vercel Serverless Function — same-origin proxy to OpenAI's Chat Completions API.
//
// Why this file exists: compass.html can call ChatGPT in two ways —
//   1) each visitor pastes their own OpenAI key into the page (works anywhere, but the key
//      lives in that visitor's browser and every request goes straight from their browser to
//      OpenAI, which depends on OpenAI's CORS behavior actually allowing it)
//   2) this file: ONE shared key lives here, in Vercel's server-side environment variables,
//      never sent to or visible in any visitor's browser. The page just calls "/api/chat" on
//      its own origin, which forwards the request to OpenAI and returns the answer. No CORS
//      question at all, because the browser never talks to OpenAI directly.
//
// compass.html auto-detects whether this route exists (a GET to /api/chat that isn't a 404)
// and prefers it automatically the moment this function is deployed — nothing else to wire up
// on the HTML side.
//
// Deployment: place this file at api/chat.js in your project (Vercel maps any file under
// api/ to a serverless function at that path automatically — no extra config needed), then
// set the environment variable OPENAI_API_KEY in the Vercel project's Settings > Environment
// Variables and redeploy. See the deployment guide for the full walkthrough.
//
// This uses Vercel's current Web-standard Fetch handler shape (a single `fetch(request)`
// function handling every HTTP method) rather than the older Node-style (req, res) signature,
// per Vercel's own Functions API reference for non-framework ("other") projects.

export const config = { runtime: 'nodejs' };

export default {
  async fetch(request) {
    // A GET is used by compass.html purely to check "does this route exist at all" — it must
    // never reach OpenAI or spend any API quota, so it's rejected with 405 (not 404) before
    // anything else. A 404 would mean "no such route" to the page's probe; 405 correctly means
    // "route exists, but only accepts POST".
    if (request.method !== 'POST') {
      return Response.json({ error: { message: 'Method not allowed. Use POST.' } }, { status: 405 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      // This means the Vercel project is deployed but the environment variable hasn't been set
      // yet (or was set but the project hasn't been redeployed since) — a setup problem, not a
      // visitor-facing one. Surfaced as 401 so compass.html's error mapping shows it clearly.
      return Response.json(
        { error: { message: 'Server is missing OPENAI_API_KEY. Set it in Vercel Project Settings > Environment Variables, then redeploy.' } },
        { status: 401 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return Response.json({ error: { message: 'Invalid JSON body.' } }, { status: 400 });
    }

    const { messages, model, jsonMode } = body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: { message: 'Request must include a non-empty "messages" array.' } }, { status: 400 });
    }

    const payload = {
      model: model || 'gpt-4o-mini',
      messages,
      stream: false,
    };
    if (jsonMode) payload.response_format = { type: 'json_object' };

    let upstream;
    try {
      upstream = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      return Response.json({ error: { message: 'Could not reach OpenAI: ' + e.message } }, { status: 502 });
    }

    let data;
    try {
      data = await upstream.json();
    } catch (e) {
      return Response.json({ error: { message: 'OpenAI returned a non-JSON response.' } }, { status: 502 });
    }

    // Forward OpenAI's status code and body as-is — compass.html's serverProxyChat() already
    // knows how to read this exact shape (it's the same shape openaiChat() reads when calling
    // OpenAI directly), including {error:{message}} on failure.
    return Response.json(data, { status: upstream.status });
  },
};
