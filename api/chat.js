// Vercel Serverless Function — same-origin proxy to Anthropic's Claude Messages API.
export const config = { runtime: 'nodejs' };

const ANTHROPIC_VERSION = '2023-06-01';
const DEFAULT_MODEL = 'claude-sonnet-5';
const MAX_TOKENS = 64000;

function toAnthropicContent(content) {
  if (typeof content === 'string') return content;
  if (!Array.isArray(content)) return String(content == null ? '' : content);
  return content.map((part) => {
    if (part && part.type === 'text') return { type: 'text', text: part.text || '' };
    if (part && part.type === 'image_url') {
      const url = (part.image_url && part.image_url.url) || '';
      const dataUrlMatch = /^data:([^;]+);base64,(.*)$/s.exec(url);
      if (dataUrlMatch) {
        return { type: 'image', source: { type: 'base64', media_type: dataUrlMatch[1], data: dataUrlMatch[2] } };
      }
      return { type: 'image', source: { type: 'url', url } };
    }
    return { type: 'text', text: '' };
  });
}

export default {
  async fetch(request) {
    if (request.method !== 'POST') {
      return Response.json({ error: { message: 'Method not allowed. Use POST.' } }, { status: 405 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: { message: 'Server is missing ANTHROPIC_API_KEY. Set it in Vercel Project Settings > Environment Variables, then redeploy.' } },
        { status: 401 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return Response.json({ error: { message: 'Invalid JSON body.' } }, { status: 400 });
    }

    const { messages, jsonMode } = body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: { message: 'Request must include a non-empty "messages" array.' } }, { status: 400 });
    }

    let systemText = '';
    const anthropicMessages = [];
    for (const m of messages) {
      if (m && m.role === 'system') {
        systemText += (systemText ? '\n' : '') + (typeof m.content === 'string' ? m.content : JSON.stringify(m.content));
        continue;
      }
      anthropicMessages.push({ role: m && m.role === 'assistant' ? 'assistant' : 'user', content: toAnthropicContent(m && m.content) });
    }
    if (jsonMode) {
      systemText += (systemText ? '\n' : '') + 'Respond with ONLY valid JSON — no markdown code fences, no commentary before or after.';
    }

    const payload = {
      model: process.env.ANTHROPIC_MODEL || DEFAULT_MODEL,
      max_tokens: MAX_TOKENS,
      messages: anthropicMessages,
    };
    if (systemText) payload.system = systemText;

    let upstream;
    try {
      upstream = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': ANTHROPIC_VERSION,
        },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      return Response.json({ error: { message: 'Could not reach Anthropic: ' + e.message } }, { status: 502 });
    }

    let data;
    try {
      data = await upstream.json();
    } catch (e) {
      return Response.json({ error: { message: 'Anthropic returned a non-JSON response.' } }, { status: 502 });
    }

    if (!upstream.ok) {
      const msg = (data && data.error && data.error.message) || ('Anthropic error (' + upstream.status + ')');
      return Response.json({ error: { message: msg } }, { status: upstream.status });
    }

    const text = Array.isArray(data.content) ? data.content.filter((b) => b && b.type === 'text').map((b) => b.text).join('') : '';
    const finishReason = data.stop_reason === 'max_tokens' ? 'length' : 'stop';
    return Response.json(
      { choices: [{ message: { role: 'assistant', content: text }, finish_reason: finishReason }] },
      { status: 200 }
    );
  },
};
