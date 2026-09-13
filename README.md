[index.html](https://github.com/user-attachments/files/32163472/index.html)
<img width="715" height="530" alt="image" src="https://github.com/user-attachments/assets/98b7a2e8-403d-47b6-b93c-1924ea2ec3de" /><title>프로그램 설문 분석기</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap">
<style>
  :root{
    --paper:#F5F7FB;
    --surface:#FFFFFF;
    --surface-sunken:#EDF0F7;
    --ink:#12151F;
    --ink-secondary:#4C5568;
    --ink-muted:#848DA1;
    --line:#E1E4EF;
    --line-strong:#C9CEDE;
    --pre:#0E93B4;
    --pre-soft:#DCF0F6;
    --post:#189A6D;
    --post-soft:#DCF2E9;
    --accent:#3457E0;
    --accent-strong:#22399E;
    --accent-soft:#E2E7FC;
    --good:#189A6D;
    --warn:#C17D0F;
    --warn-soft:#FAEBD2;
    --critical:#D1483F;
    --critical-soft:#FADEDB;
    --shadow-1:0 1px 2px rgba(18,21,40,.06);
    --shadow-2:0 12px 32px rgba(18,21,40,.10);
    --radius-card:14px;
    --radius-pill:999px;
    color-scheme: light;
  }
  @media (prefers-color-scheme: dark){
    :root:not([data-theme="light"]){
      --paper:#0D1017;
      --surface:#151926;
      --surface-sunken:#0A0D14;
      --ink:#E7E9F2;
      --ink-secondary:#AFB6C9;
      --ink-muted:#737C93;
      --line:#262B3B;
      --line-strong:#363D52;
      --pre:#35B5D9;
      --pre-soft:#12303A;
      --post:#2FC190;
      --post-soft:#0F2E24;
      --accent:#5B78F0;
      --accent-strong:#8CA0F5;
      --accent-soft:#1D2547;
      --good:#2FC190;
      --warn:#E0A83C;
      --warn-soft:#3A2C10;
      --critical:#E8746A;
      --critical-soft:#3A1A18;
      --shadow-1:0 1px 2px rgba(0,0,0,.4);
      --shadow-2:0 12px 34px rgba(0,0,0,.5);
      color-scheme: dark;
    }
  }
  :root[data-theme="dark"]{
    --paper:#0D1017;
    --surface:#151926;
    --surface-sunken:#0A0D14;
    --ink:#E7E9F2;
    --ink-secondary:#AFB6C9;
    --ink-muted:#737C93;
    --line:#262B3B;
    --line-strong:#363D52;
    --pre:#35B5D9;
    --pre-soft:#12303A;
    --post:#2FC190;
    --post-soft:#0F2E24;
    --accent:#5B78F0;
    --accent-strong:#8CA0F5;
    --accent-soft:#1D2547;
    --good:#2FC190;
    --warn:#E0A83C;
    --warn-soft:#3A2C10;
    --critical:#E8746A;
    --critical-soft:#3A1A18;
    --shadow-1:0 1px 2px rgba(0,0,0,.4);
    --shadow-2:0 12px 34px rgba(0,0,0,.5);
    color-scheme: dark;
  }

  *{box-sizing:border-box;}
  body{
    margin:0; background:var(--paper); color:var(--ink);
    font-family:"IBM Plex Sans KR", "Malgun Gothic", sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  h1,h2,h3,h4{
    font-family:"IBM Plex Sans KR", "Malgun Gothic", sans-serif; font-weight:700; margin:0;
    text-wrap:balance; color:var(--ink);
  }
  .mono{ font-family:"IBM Plex Mono", ui-monospace, monospace; font-variant-numeric:tabular-nums; }
  ::selection{ background:var(--post-soft); }
  :focus-visible{ outline:2px solid var(--accent); outline-offset:2px; border-radius:4px; }
  @media (prefers-reduced-motion: reduce){ *{ animation-duration:.01ms !important; transition-duration:.01ms !important; } html{ scroll-behavior:auto; } }
  html{ scroll-behavior:smooth; }
  #bulkTiles, #bulkEffRankSection, #bulkEffNarrativeCard, #bulkSatBreakdownCard, #bulkSatNarrativeCard,
  #bulkEffTableCard, #bulkSatTableCard, #bulkClusterCard, #bulkInsightCard{ scroll-margin-top:16px; }
  .quick-nav-wrap{ background:var(--surface-sunken); border-radius:12px; padding:14px; }
  .quick-nav-label{
    display:flex; align-items:center; gap:6px; font-size:11.5px; font-weight:700;
    text-transform:uppercase; letter-spacing:.05em; color:var(--ink-muted); margin-bottom:10px;
  }
  .quick-nav{ display:grid; grid-template-columns:repeat(auto-fit, minmax(104px, 1fr)); gap:8px; }
  .quicknav-btn{
    font:600 12px "IBM Plex Sans KR",sans-serif; padding:10px 6px; border-radius:10px;
    background:var(--surface); border:1px solid var(--line); color:var(--ink-secondary);
    text-decoration:none; display:flex; flex-direction:column; align-items:center; justify-content:center;
    text-align:center; gap:4px; line-height:1.3; min-height:58px;
  }
  .quicknav-btn .qn-icon{ font-size:17px; line-height:1; }
  .quicknav-btn:hover{ border-color:var(--accent); color:var(--accent); }

  .app{ max-width:1180px; margin:0 auto; padding:28px 24px 64px; }

  /* ---------- Header ---------- */
  .topbar{
    display:flex; align-items:flex-end; justify-content:space-between; gap:20px;
    flex-wrap:wrap; padding-bottom:20px; margin-bottom:24px; border-bottom:1px solid var(--line);
  }
  .brand{ display:flex; align-items:center; gap:14px; }
  .brand-mark{
    font-size:30px; width:52px; height:52px; border-radius:14px; display:flex; align-items:center; justify-content:center;
    background:linear-gradient(155deg,var(--post-soft),var(--pre-soft)); box-shadow:var(--shadow-1);
  }
  .brand h1{ font-size:24px; letter-spacing:-.01em; }
  .brand p{ margin:2px 0 0; font-size:13px; color:var(--ink-muted); }
  .tabs{ display:flex; gap:4px; background:var(--surface-sunken); padding:4px; border-radius:var(--radius-pill); flex-wrap:wrap; }
  .subtab-btn{
    appearance:none; border:none; background:transparent; color:var(--ink-secondary);
    font:600 12.5px "IBM Plex Sans KR",sans-serif; padding:8px 14px; border-radius:var(--radius-pill); cursor:pointer; white-space:nowrap;
  }
  .subtab-btn.active{ background:var(--surface); color:var(--ink); box-shadow:var(--shadow-1); }

  .panel{ display:none; flex-direction:column; gap:20px; }
  .panel.active{ display:flex; }

  /* ---------- Toolbar / data source ---------- */
  .toolbar{ display:flex; flex-wrap:wrap; align-items:center; gap:10px; }
  .data-source{ display:flex; flex-wrap:wrap; align-items:center; gap:10px; }
  .data-status{
    font-size:12.5px; color:var(--ink-muted); background:var(--surface-sunken);
    padding:6px 12px; border-radius:var(--radius-pill);
  }
  .file-btn, .ghost-btn, .primary-btn{
    font:600 13px "IBM Plex Sans KR",sans-serif; padding:9px 16px; border-radius:10px; cursor:pointer;
    border:1px solid var(--line-strong); background:var(--surface); color:var(--ink); display:inline-flex; align-items:center; gap:6px;
  }
  .file-btn:hover, .ghost-btn:hover{ border-color:var(--post); color:var(--post); }
  .primary-btn{ background:var(--post); border-color:var(--post); color:#fff; }
  .primary-btn:hover{ background:var(--accent-strong); border-color:var(--accent-strong); }
  .primary-btn:disabled, .ghost-btn:disabled{ opacity:.45; cursor:not-allowed; border-color:var(--line); color:var(--ink-muted); background:var(--surface); }
  select.sheet-select, select.key-select{ font:600 12.5px "IBM Plex Sans KR",sans-serif; padding:7px 10px; border-radius:9px; border:1px solid var(--line-strong); background:var(--surface); color:var(--ink); }
  .field-label{ font-size:12.5px; font-weight:600; color:var(--ink-secondary); }

  /* ---------- Cards ---------- */
  .card{
    background:var(--surface); border:1px solid var(--line); border-radius:var(--radius-card);
    padding:20px 22px; box-shadow:var(--shadow-1);
  }
  .card h2{ font-size:16.5px; margin-bottom:4px; }
  .card .card-sub{ font-size:12.5px; color:var(--ink-muted); margin:0 0 14px; }

  /* ---------- Mapping table (effectiveness) ---------- */
  .mapping-card .mrow{
    display:grid; grid-template-columns: 1.1fr 1fr 1fr 32px; gap:10px; align-items:center; padding:7px 0;
    border-bottom:1px solid var(--line);
  }
  .mapping-card .mrow.mhead{ font-size:11.5px; text-transform:uppercase; letter-spacing:.04em; color:var(--ink-muted); border-bottom:1px solid var(--line-strong); }
  .mapping-card input[type=text], .mapping-card select,
  .col-card select, .col-card input[type=text]{
    width:100%; font:500 13px "IBM Plex Sans KR",sans-serif; padding:7px 9px; border-radius:8px;
    border:1px solid var(--line); background:var(--surface); color:var(--ink);
  }
  .mrow-del{ border:none; background:transparent; color:var(--ink-muted); font-size:16px; cursor:pointer; border-radius:6px; width:28px; height:28px; }
  .mrow-del:hover{ color:var(--critical); background:var(--surface-sunken); }
  .mapping-foot{ display:flex; align-items:center; justify-content:space-between; gap:12px; margin-top:12px; flex-wrap:wrap; }
  .unmapped-hint{ font-size:12px; color:var(--ink-muted); }

  /* ---------- Column-role table (satisfaction) ---------- */
  .col-card .crow{
    display:grid; grid-template-columns: 1.3fr 1fr 110px 1.4fr; gap:10px; align-items:center; padding:7px 0;
    border-bottom:1px solid var(--line);
  }
  .col-card .crow.chead{ font-size:11px; text-transform:uppercase; letter-spacing:.04em; color:var(--ink-muted); border-bottom:1px solid var(--line-strong); }
  .safety-check{ display:flex; align-items:center; gap:6px; font-size:12.5px; color:var(--ink-secondary); }
  .safety-check input{ accent-color:var(--accent); }
  .col-preview{ font-size:12px; color:var(--ink-muted); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }

  /* ---------- Stat tiles ---------- */
  .stat-tiles{ display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
  .tile{ background:var(--surface); border:1px solid var(--line); border-radius:var(--radius-card); padding:16px 18px; box-shadow:var(--shadow-1); }
  .tile .t-label{ font-size:12px; color:var(--ink-muted); font-weight:600; }
  .tile .t-value{ font-family:"IBM Plex Mono",monospace; font-variant-numeric:tabular-nums; font-size:24px; font-weight:600; margin-top:6px; color:var(--ink); }
  .tile .t-value small{ font-size:12.5px; color:var(--ink-muted); font-family:"IBM Plex Sans KR",sans-serif; }
  .tile.accent .t-value{ color:var(--post); }

  /* ---------- Charts ---------- */
  .grid-2{ display:grid; grid-template-columns:1.25fr 1fr; gap:20px; align-items:start; }
  .grid-3{ display:grid; grid-template-columns:1fr 1fr 1fr; gap:20px; align-items:start; margin-bottom:20px; }
  .upload-card textarea{ font-size:13px; padding:8px; border-radius:8px; border:1px solid var(--line); }
  .drop-zone{
    display:flex; flex-wrap:wrap; align-items:center; gap:10px; padding:14px; border-radius:12px;
    border:2px dashed var(--line-strong); transition:border-color .15s, background .15s;
  }
  .drop-zone.drag-over{ border-color:var(--post); background:var(--post-soft); }
  .drop-zone-hint{ font-size:12.5px; color:var(--ink-muted); }
  .saved-camp-row{ display:flex; align-items:center; gap:8px; padding:8px 4px; border-bottom:1px solid var(--line); }
  .saved-camp-row:last-child{ border-bottom:none; }
  .saved-camp-row input[type="checkbox"]{ width:16px; height:16px; flex-shrink:0; }
  .saved-camp-name{ font-size:13px; }
  .saved-camp-current .saved-camp-name{ font-weight:600; }
  .modal-overlay{
    position:fixed; inset:0; background:rgba(20,24,18,.45); display:flex; align-items:center; justify-content:center;
    z-index:9999; padding:20px;
  }
  .modal-box{
    background:var(--surface); border:1px solid var(--line); border-radius:14px; box-shadow:var(--shadow-2);
    padding:22px 24px; max-width:420px; width:100%;
  }
  .modal-msg{ font-size:14px; line-height:1.6; color:var(--ink); white-space:pre-wrap; }
  .modal-input{
    width:100%; margin-top:14px; font:500 13.5px "IBM Plex Sans KR",sans-serif; padding:9px 11px; border-radius:9px;
    border:1px solid var(--line-strong); background:var(--surface); color:var(--ink); box-sizing:border-box;
  }
  .modal-btns{ display:flex; justify-content:flex-end; gap:8px; margin-top:18px; }
  .file-status-line{ font-size:12.5px; color:var(--ink-secondary); margin-top:8px; line-height:1.6; }
  .file-status-line.pending{ color:var(--ink-muted); }
  .file-status-line.ok{ color:var(--post); }
  #bulkResultsWrap{ display:flex; flex-direction:column; gap:20px; }
  .chart-card svg{ width:100%; height:auto; display:block; }
  .legend{ display:flex; gap:16px; flex-wrap:wrap; margin-top:10px; font-size:12px; color:var(--ink-secondary); }
  .legend span{ display:inline-flex; align-items:center; gap:6px; }
  .swatch{ width:10px; height:10px; border-radius:3px; display:inline-block; }
  .chart-footnote{ margin:10px 0 0; font-size:11.5px; color:var(--ink-muted); }

  /* ---------- Table ---------- */
  .table-scroll{ overflow-x:auto; }
  table.stats{ border-collapse:collapse; width:100%; min-width:680px; font-size:13px; }
  table.stats th, table.stats td{ padding:10px 12px; text-align:right; border-bottom:1px solid var(--line); white-space:nowrap; }
  table.stats th:first-child, table.stats td:first-child{ text-align:left; }
  table.stats thead th{ font-size:11px; text-transform:uppercase; letter-spacing:.03em; color:var(--ink-muted); font-weight:700; }
  table.stats td.num{ font-family:"IBM Plex Mono",monospace; font-variant-numeric:tabular-nums; }
  .score100{ font-size:11px; color:var(--ink-muted); font-family:"IBM Plex Mono",monospace; }
  /* Satisfaction breakdown — mirrors the official report's own category → item layout */
  table.stats tr.sat-overall td{ background:var(--surface-sunken); font-weight:700; font-size:14px; }
  table.stats tr.sat-cat td{ background:var(--surface-sunken); font-weight:700; }
  table.stats tr.sat-cat td:first-child{ padding-left:14px; }
  table.stats tr.sat-item td:first-child{ padding-left:30px; color:var(--ink-secondary); }
  table.stats td.sat-low{ color:var(--critical); font-weight:700; }
  .sat-breakdown-block{ margin-bottom:22px; }
  .sat-breakdown-block:last-child{ margin-bottom:0; }
  .sat-breakdown-title{ font-size:13.5px; font-weight:700; margin-bottom:8px; color:var(--ink); }
  .item-breakdown-block{ margin-bottom:18px; }
  .item-breakdown-block:last-child{ margin-bottom:0; }
  .item-breakdown-title{ font-size:14px; margin-bottom:8px; }
  .pill{ display:inline-block; padding:3px 9px; border-radius:var(--radius-pill); font-size:11.5px; font-weight:600; white-space:nowrap; }
  .pill.big{ background:var(--post-soft); color:var(--post); }
  .pill.mid{ background:var(--post-soft); color:var(--post); opacity:.85; }
  .pill.small{ background:var(--surface-sunken); color:var(--ink-secondary); }
  .pill.negligible{ background:var(--surface-sunken); color:var(--ink-muted); }
  .pill.sig{ background:var(--accent-soft); color:var(--accent-strong); }
  .pill.ns{ background:var(--surface-sunken); color:var(--ink-muted); }
  .pill.safety{ background:var(--accent-soft); color:var(--accent-strong); }
  .pill.tone-긍정{ background:var(--post-soft); color:var(--post); }
  .pill.tone-부정{ background:var(--critical-soft); color:var(--critical); }
  .pill.tone-중립{ background:var(--surface-sunken); color:var(--ink-muted); }
  .pill.tone-혼합{ background:var(--warn-soft); color:var(--warn); }

  /* ---------- callouts ---------- */
  .callout{
    display:flex; gap:10px; align-items:flex-start; padding:12px 14px; border-radius:10px;
    background:var(--surface-sunken); font-size:12.5px; color:var(--ink-secondary); line-height:1.6;
  }
  .callout b{ color:var(--ink); }
  .callout.warn{ background:var(--warn-soft); color:var(--ink); }
  .callout.critical{ background:var(--critical-soft); color:var(--ink); }

  /* ---------- AI report ---------- */
  .ai-card-head{ display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; margin-bottom:14px; }
  .ai-card-head h2{ margin-bottom:0; }
  .ai-actions{ display:flex; gap:8px; }
  .report-output{ font-size:14px; line-height:1.75; color:var(--ink-secondary); }
  .report-output.empty{ color:var(--ink-muted); font-style:normal; }
  .report-output h4{ font-size:15px; margin:16px 0 6px; color:var(--ink); }
  .report-output h4:first-child{ margin-top:0; }
  .report-output ul, .report-output ol{ margin:6px 0; padding-left:20px; }
  .report-output li{ margin:4px 0; }
  .report-output table{ border-collapse:collapse; margin:10px 0; font-size:12.5px; width:100%; }
  .report-output table th, .report-output table td{ border:1px solid var(--line); padding:6px 9px; text-align:left; }
  .report-output strong{ color:var(--ink); }
  .report-output p{ margin:8px 0; }

  /* ---------- Satisfaction distribution chart ---------- */
  .dist-rows{ display:flex; flex-direction:column; gap:14px; }
  .dist-row .dist-label{ display:flex; justify-content:space-between; font-size:12.5px; font-weight:600; margin-bottom:5px; }
  .dist-row .dist-label .n{ font-weight:400; color:var(--ink-muted); font-family:"IBM Plex Mono",monospace; }
  .dist-bar{ display:flex; height:20px; border-radius:5px; overflow:hidden; background:var(--surface-sunken); }
  .dist-seg{ height:100%; }
  .dist-legend{ display:flex; gap:14px; flex-wrap:wrap; margin-top:12px; font-size:11.5px; color:var(--ink-secondary); }
  .dist-legend span{ display:inline-flex; align-items:center; gap:5px; }

  /* ---------- Rank list (open-text clusters) ---------- */
  .rank-list{ display:flex; flex-direction:column; gap:10px; }
  .rank-item{ display:grid; grid-template-columns:28px 1fr; gap:12px; padding:12px 0; border-bottom:1px solid var(--line); }
  .rank-item:last-child{ border-bottom:none; }
  .rank-num{ font-family:"IBM Plex Mono",monospace; font-weight:700; color:var(--ink-muted); font-size:15px; }
  .rank-body .rank-top{ display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:4px; }
  .rank-body .rank-theme{ font-weight:700; font-size:14.5px; }
  .rank-body .rank-count{ font-family:"IBM Plex Mono",monospace; font-size:12.5px; color:var(--ink-muted); }
  .rank-bar-track{ height:6px; border-radius:3px; background:var(--surface-sunken); margin:6px 0 8px; overflow:hidden; }
  .rank-bar-fill{ height:100%; background:var(--post); border-radius:3px; }
  .rank-examples{ font-size:12.5px; color:var(--ink-secondary); line-height:1.6; }
  .rank-examples q{ color:var(--ink-secondary); }

  /* ---------- incident list ---------- */
  .incident-block{ margin-bottom:16px; }
  .incident-block:last-child{ margin-bottom:0; }
  .incident-head{ display:flex; align-items:center; gap:10px; margin-bottom:8px; flex-wrap:wrap; }
  .incident-head .name{ font-weight:700; font-size:13.5px; }
  .incident-list{ margin:6px 0 0; padding-left:20px; font-size:13px; color:var(--ink-secondary); line-height:1.7; }

  .foot-note{ margin-top:36px; font-size:12px; color:var(--ink-muted); text-align:center; }

  /* ---------- Tab: bulk multi-activity analysis ---------- */
  .bulk-name-input{
    width:100%; min-width:150px; font:500 12.5px "IBM Plex Sans KR",sans-serif; padding:6px 8px; border-radius:7px;
    border:1px solid var(--line); background:var(--surface); color:var(--ink); display:block;
  }
  table.stats th.sortable{ cursor:pointer; user-select:none; }
  table.stats th.sortable:hover{ color:var(--ink); }
  .activity-accordion{ margin-top:4px; }
  .activity-accordion details{ border-bottom:1px solid var(--line); padding:10px 0; }
  .activity-accordion details:last-child{ border-bottom:none; }
  .activity-accordion summary{ cursor:pointer; font-weight:700; font-size:13.5px; padding:2px 0; color:var(--ink); }
  .activity-accordion summary .muted{ font-weight:400; color:var(--ink-muted); font-size:12px; margin-left:6px; }
  .activity-accordion .rank-list{ margin-top:10px; padding-left:4px; }

  @media (max-width:900px){
    .grid-2, .grid-3{ grid-template-columns:1fr; }
    .stat-tiles{ grid-template-columns:repeat(2,1fr); }
    .topbar{ align-items:flex-start; }
    .col-card .crow{ grid-template-columns:1fr 1fr; }
  }
  @media (max-width:520px){
    .stat-tiles{ grid-template-columns:1fr 1fr; }
    .mapping-card .mrow{ grid-template-columns:1fr; }
    .col-card .crow{ grid-template-columns:1fr; }
  }
</style>

<div class="app">
  <header class="topbar">
    <div class="brand">
      <span class="brand-mark">📋</span>
      <div>
        <h1>프로그램 설문 분석기</h1>
        <p>효과성(사전·사후)·만족도·주관식 의견을 파일 업로드 한 번으로 분석합니다</p>
      </div>
    </div>
  </header>

  <main>
    <!-- ============ BULK MULTI-ACTIVITY ANALYSIS ============ -->
    <section id="panel-bulk" class="panel active">
      <div class="callout">📦 <span>캠프의 <b>모든 파일</b>을 <b>zip으로 묶거나 여러 개를 한 번에 선택</b>해서 올려주세요. 파일 형식과 내용을 보고 효과성·만족도·설문양식을 자동으로 구분합니다. <button id="useBulkSampleBtn" class="ghost-btn" type="button" style="margin-left:8px;">샘플 데이터로 미리보기</button> <span id="bulkStatus" class="data-status">파일을 업로드해주세요</span></span></div>

      <div class="card" id="aiSettingsCard">
        <h2>🤖 AI 설정</h2>
        <p class="card-sub" style="margin:0 0 10px;">주관식 그룹핑 · 종합 인사이트 · 설문지 캡처본 인식에 쓰이는 AI 연동 상태입니다.</p>
        <div id="aiSettingsBox"></div>
      </div>

      <div class="card" id="savedCampCard">
        <h2>캠프별 저장 &amp; 통합 보기</h2>
        <p class="card-sub">한 캠프를 분석했으면 <b>저장</b>으로 남겨두고 <b>초기화</b>로 다음 캠프를 시작하세요. 아래 목록에서 체크한 캠프들만 골라 합쳐 보거나 하나씩 따로 볼 수 있습니다. 저장되는 것은 분석이 끝난 결과뿐이며, 원본 파일은 저장되지 않습니다.</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
          <button id="saveCampBtn" class="ghost-btn" type="button">💾 이 캠프 저장</button>
          <button id="resetWorkspaceBtn" class="ghost-btn" type="button">🔄 초기화 (새 캠프 시작)</button>
        </div>
        <div id="savedCampList" class="report-output empty">저장된 캠프 기록을 불러오는 중…</div>
      </div>

      <div class="card upload-card">
        <h2>파일 업로드</h2>
        <p class="card-sub">효과성·만족도 리포트, 원본 응답, 설문양식(.hwpx/.docx/.txt) 등 캠프 관련 파일을 zip으로 묶거나 여러 개를 한 번에 올려주세요. 파일 종류는 내용을 보고 자동으로 구분합니다.</p>
        <div id="bulkDropZone" class="drop-zone">
          <label id="bulkAllFileLabel" class="file-btn">파일/zip 업로드<input type="file" id="bulkAllFileInput" accept=".zip,.xls,.xlsx,.hwpx,.docx,.txt" multiple hidden></label>
          <span class="drop-zone-hint">또는 zip/파일을 여기로 드래그해서 놓으세요</span>
          <span id="bulkUploadStatus" class="file-status-line">아직 업로드하지 않았습니다.</span>
        </div>
        <details style="margin-top:10px;">
          <summary style="cursor:pointer;color:var(--ink-muted);font-size:13px;">설문양식 문항이 "Q1"처럼 표시되나요? 텍스트나 캡처본으로 다시 인식시키기</summary>
          <p class="card-sub" style="margin-top:8px;">위 zip 안에 .hwpx/.docx/.txt 설문지 파일이 있으면 자동으로 인식을 시도하지만, 문서 구조에 따라 실패할 수 있습니다. 그럴 때는 설문 문항 부분을 복사해 아래에 붙여넣거나, 설문지 캡처본(사진/스크린샷)을 올려주세요 — 실제 문항 내용을 보고 역량명을 정리합니다.</p>
          <textarea id="surveyPasteArea" rows="5" style="width:100%;box-sizing:border-box;font-family:inherit;" placeholder="예: 1. 나는 팀 활동에서 다른 사람과 협력했다. ①매우그렇다 ②그렇다 ③보통이다 ④그렇지않다 ⑤전혀그렇지않다ㅁ..."></textarea>
          <button id="surveyPasteBtn" class="ghost-btn" type="button" style="margin-top:6px;">붙여넣은 내용 분석</button>
          <div id="surveyImageSection" hidden style="margin-top:10px;">
            <label class="file-btn">캡처본(이미지) 업로드<input type="file" id="surveyImageInput" accept="image/*" multiple hidden></label>
            <p class="card-sub" style="margin-top:6px;margin-bottom:0;">여러 페이지라면 여러 장을 한 번에 선택하세요. AI가 이미지를 직접 읽어 문항과 역량명을 정리합니다.</p>
          </div>
        </details>
        <span id="surveyFormStatus" class="data-status" style="display:block;margin-top:10px;">설문양식 아직 인식되지 않음 (건너뛰어도 분석은 진행됩니다)</span>
        <div id="surveyBatteriesPreview" class="report-output empty" style="margin-top:10px;">설문 양식을 업로드하거나 붙여넣으면, 문항을 자동으로 읽어 묶음(역량군)별로 정리해 보여줍니다.</div>
      </div>

      <div class="callout" id="bulkEmptyState">📊 <span>파일을 업로드하면(또는 샘플 데이터로 미리보기를 누르면) 이 아래에 분석 결과가 표시됩니다.</span></div>

      <div id="bulkResultsWrap" hidden>
        <div class="card" id="bulkFileListCard" hidden>
          <h2>업로드된 파일 인식 결과</h2>
          <p class="card-sub">자동 인식이 틀린 경우 활동명을 직접 고치거나, 어느 활동에 속하는지 목록에서 골라주세요. 효과성 원본 응답 파일은 사전/사후 여부를 직접 지정해야 자동 계산됩니다.</p>
          <div class="table-scroll">
            <table class="stats" id="bulkFileTable"></table>
          </div>
        </div>

        <div class="stat-tiles" id="bulkTiles"></div>

        <div class="quick-nav-wrap">
          <div class="quick-nav-label">⚡ 바로가기 — 눌러서 아래 결과로 바로 이동</div>
          <nav class="quick-nav" id="bulkQuickNav" aria-label="결과 섹션 바로가기">
            <a href="#bulkEffRankSection" class="quicknav-btn"><span class="qn-icon">📈</span><span>효과성 순위</span></a>
            <a href="#bulkEffNarrativeCard" class="quicknav-btn"><span class="qn-icon">📈</span><span>효과성 상세</span></a>
            <a href="#bulkSatBreakdownCard" class="quicknav-btn"><span class="qn-icon">😊</span><span>만족도 상세</span></a>
            <a href="#bulkSatNarrativeCard" class="quicknav-btn"><span class="qn-icon">😊</span><span>만족도 항목별</span></a>
            <a href="#bulkEffTableCard" class="quicknav-btn"><span class="qn-icon">📋</span><span>효과성 전체표</span></a>
            <a href="#bulkSatTableCard" class="quicknav-btn"><span class="qn-icon">📋</span><span>만족도 전체표</span></a>
            <a href="#bulkClusterCard" class="quicknav-btn"><span class="qn-icon">💬</span><span>주관식 의견</span></a>
            <a href="#bulkInsightCard" class="quicknav-btn"><span class="qn-icon">✨</span><span>AI 인사이트</span></a>
          </nav>
        </div>

        <div class="card" id="satAudienceCard">
          <h2>😊 만족도 집계 대상</h2>
          <p class="card-sub" style="margin:0 0 10px;">청소년과 인솔자는 서로 다른 응답 집단이라 만족도 숫자가 다를 수 있습니다. 아래에서 고른 기준으로 이 화면의 만족도 관련 수치·표·서술이 전부 함께 바뀝니다 (효과성·주관식에는 영향 없음).</p>
          <nav class="tabs" id="satAudienceTabs">
            <button class="subtab-btn active" data-audience="youth" type="button">청소년</button>
            <button class="subtab-btn" data-audience="leader" type="button">인솔자</button>
            <button class="subtab-btn" data-audience="combined" type="button">청소년+인솔자 합산</button>
          </nav>
        </div>

        <div class="grid-2" id="bulkEffRankSection">
          <div class="card" id="bulkTopCard">
            <h2>효과 개선 상위 활동</h2>
            <p class="card-sub">사전 대비 사후 점수 변화(0-100 환산)가 큰 순서입니다.</p>
            <div id="bulkTopList" class="rank-list"></div>
          </div>
          <div class="card" id="bulkBottomCard">
            <h2>확인이 필요한 활동</h2>
            <p class="card-sub">점수 변화가 작거나 뒷걸음질한 활동입니다. 유의확률(p)도 함께 확인하세요.</p>
            <div id="bulkBottomList" class="rank-list"></div>
          </div>
        </div>

        <div class="card" id="bulkEffNarrativeCard">
          <h2>효과성 — 구체적으로 무엇이 좋았고 부족했나</h2>
          <p class="card-sub">모든 활동 × 역량 지표를 한꺼번에 놓고 순위를 매겨, 특히 효과가 좋았던 부분과 부족했던 부분을 구체적으로 짚어줍니다.</p>
          <div id="bulkEffNarrative" class="report-output empty"></div>
        </div>

        <div class="card table-card" id="bulkSatBreakdownCard">
          <h2>만족도 상세 (공식 집계표 기준)</h2>
          <p class="card-sub">만족도 집계 리포트에 있는 그대로 카테고리 → 세부 항목 구조로 정리했습니다. 굵게 표시된 행이 카테고리 소계이고, <span class="sat-low" style="font-weight:700;">빨간 글씨</span>는 80점 미만으로 낮게 평가된 항목입니다.</p>
          <div id="bulkSatBreakdown" class="report-output empty"></div>
        </div>

        <div class="card" id="bulkSatNarrativeCard">
          <h2>만족도 — 구체적으로 무엇이 좋았고 부족했나</h2>
          <p class="card-sub">프로그램 내용, 강사·진행, 숙소·시설, 안전관리 등 세부 항목별로 순위를 매겨, 긍정적인 부분과 (안전·시설 등) 확인이 필요한 부분을 구체적으로 짚어줍니다.</p>
          <div id="bulkSatNarrative" class="report-output empty"></div>
        </div>

        <div class="card table-card" id="bulkEffTableCard">
          <h2>활동별 효과성 비교 (전체 표)</h2>
          <p class="card-sub">공식 사전·사후 리포트 또는 원본 응답에서 계산한 수치(0-100 환산된 점수)입니다. 열 제목을 클릭하면 정렬됩니다.</p>
          <div class="table-scroll">
            <table class="stats" id="bulkEffTable"></table>
          </div>
        </div>

        <div class="card table-card" id="bulkSatTableCard">
          <h2>활동별 만족도 비교 (전체 표)</h2>
          <p class="card-sub">공식 만족도 집계 리포트 또는 원본 응답에서 계산한 "전반적 만족도"(0-100 환산) 기준입니다. 열 제목을 클릭하면 정렬됩니다.</p>
          <div class="table-scroll">
            <table class="stats" id="bulkSatTable"></table>
          </div>
        </div>

        <div class="card ai-card" id="bulkClusterCard">
          <div class="ai-card-head">
            <h2>주관식 자유의견 — 전체 통합 · 활동별 랭킹</h2>
            <div class="ai-actions">
              <button id="bulkClusterBtn" class="primary-btn" type="button" disabled>AI 확인 중…</button>
              <button id="saveBulkClusterBtn" class="ghost-btn" type="button" disabled>결과 저장</button>
            </div>
          </div>
          <p class="card-sub" id="bulkClusterMeta">주관식 원본 응답 파일을 찾는 중…</p>
          <nav class="tabs" style="margin-bottom:12px;">
            <button class="subtab-btn active" data-bulk-view="overall" type="button">전체 통합 순위</button>
            <button class="subtab-btn" data-bulk-view="byActivity" type="button">활동별 순위</button>
          </nav>
          <div id="bulkClusterOverall" class="report-output empty">위 버튼을 누르면 모든 활동의 주관식 응답을 주제별로 묶어 빈도순으로 정리합니다. 실제 응답 텍스트만 근거로 사용되며, 새로운 내용은 만들어내지 않습니다.</div>
          <div id="bulkClusterByActivity" class="report-output empty" hidden>위 버튼을 누르면 활동별로 각각 상위 주제를 정리해 목록으로 펼쳐 보여줍니다.</div>
        </div>

        <div class="card ai-card" id="bulkInsightCard">
          <div class="ai-card-head">
            <h2>AI 종합 인사이트 (전체 활동)</h2>
            <div class="ai-actions">
              <button id="bulkInsightBtn" class="primary-btn" type="button" disabled>AI 확인 중…</button>
              <button id="saveBulkInsightBtn" class="ghost-btn" type="button" disabled>저장</button>
            </div>
          </div>
          <p class="card-sub">위에서 집계된 활동별 효과성·만족도·주관식 랭킹만을 근거로, 전체 사업 차원의 경향과 개선 우선순위를 정리합니다. 개별 원자료는 AI에 전달되지 않습니다.</p>
          <div id="bulkInsightOutput" class="report-output empty">활동을 분석한 뒤 버튼을 눌러주세요.</div>
        </div>
      </div>
    </section>
  </main>

  <p class="foot-note">모든 통계는 업로드된 데이터에서 브라우저 내에서 직접 계산되며, AI 리포트는 화면에 계산된 결과만을 근거로 생성됩니다 · 프로토타입 v0.3</p>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<script>
(function(){
  "use strict";

  /* ===================== small utils ===================== */
  function $(sel, root){ return (root||document).querySelector(sel); }
  function $all(sel, root){ return Array.from((root||document).querySelectorAll(sel)); }
  function svgEl(tag, attrs){
    const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    if(attrs) for(const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  function htmlEl(tag, attrs, text){
    const e = document.createElement(tag);
    if(attrs) for(const k in attrs) e.setAttribute(k, attrs[k]);
    if(text!=null) e.textContent = text;
    return e;
  }
  /* ===================== in-page modal (native alert/confirm/prompt can be blocked when this
     page runs inside a sandboxed viewer frame, so every user-facing dialog goes through this
     instead of window.alert/confirm/prompt) ===================== */
  function closeAppModal(){
    const overlay = $('#appModalOverlay');
    if(overlay) overlay.remove();
  }
  function showAppModal(opts){
    closeAppModal();
    const overlay = htmlEl('div', { id:'appModalOverlay', class:'modal-overlay' });
    const box = htmlEl('div', { class:'modal-box' });
    const msg = htmlEl('div', { class:'modal-msg' });
    msg.textContent = opts.message;
    box.appendChild(msg);
    let input = null;
    if(opts.mode === 'prompt'){
      input = htmlEl('input', { type:'text', class:'modal-input' });
      input.value = opts.defaultValue || '';
      box.appendChild(input);
    }
    const btnRow = htmlEl('div', { class:'modal-btns' });
    function finish(result){ closeAppModal(); opts.onResolve(result); }
    if(opts.mode === 'confirm'){
      const cancelBtn = htmlEl('button', { type:'button', class:'ghost-btn' }, '취소');
      cancelBtn.addEventListener('click', ()=>finish(false));
      const okBtn = htmlEl('button', { type:'button', class:'primary-btn' }, '확인');
      okBtn.addEventListener('click', ()=>finish(true));
      btnRow.append(cancelBtn, okBtn);
    } else if(opts.mode === 'prompt'){
      const cancelBtn = htmlEl('button', { type:'button', class:'ghost-btn' }, '취소');
      cancelBtn.addEventListener('click', ()=>finish(null));
      const okBtn = htmlEl('button', { type:'button', class:'primary-btn' }, '저장');
      okBtn.addEventListener('click', ()=>finish(input.value));
      input.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ e.preventDefault(); finish(input.value); } });
      btnRow.append(cancelBtn, okBtn);
    } else {
      const okBtn = htmlEl('button', { type:'button', class:'primary-btn' }, '확인');
      okBtn.addEventListener('click', ()=>finish(true));
      btnRow.appendChild(okBtn);
    }
    box.appendChild(btnRow);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    if(input) setTimeout(()=>input.focus(), 30);
  }
  function showAlertModal(message){
    return new Promise(res=>showAppModal({ message, mode:'alert', onResolve:()=>res() }));
  }
  function showConfirmModal(message){
    return new Promise(res=>showAppModal({ message, mode:'confirm', onResolve:res }));
  }
  function showPromptModal(message, defaultValue){
    return new Promise(res=>showAppModal({ message, mode:'prompt', defaultValue, onResolve:res }));
  }

  function clamp(v,lo,hi){ return Math.min(hi, Math.max(lo, v)); }
  function fmt(v, d){ if(v==null || isNaN(v)) return '–'; return v.toFixed(d==null?2:d); }
  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  function mean(a){ return a.reduce((s,x)=>s+x,0) / a.length; }
  function sd(a){
    if(a.length < 2) return 0;
    const m = mean(a);
    const v = a.reduce((s,x)=>s+(x-m)*(x-m),0) / (a.length - 1);
    return Math.sqrt(v);
  }

  /* ===================== seeded RNG ===================== */
  function mulberry32(seed){
    return function(){
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function randNorm(rng){
    let u = 0, v = 0;
    while(u === 0) u = rng();
    while(v === 0) v = rng();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }
  function weightedPick(rng, weights){
    const total = weights.reduce((a,b)=>a+b,0);
    let r = rng()*total;
    for(let i=0;i<weights.length;i++){ r -= weights[i]; if(r<=0) return i+1; }
    return weights.length;
  }

  /* ===================== sample data: effectiveness (2 separate anonymous files) ===================== */
  // 8 sub-items (Q4_M1..M8) that together make up ONE targeted core competency for this camp
  // (e.g. "협업" for 하자고 캠프) — they are NOT 8 separate competencies. See detectIndicatorGroups().
  const INDICATOR_DEFS = [
    { key:'Q4_M1', preMean:3.35, preSD:0.50, deltaMean:0.25, deltaSD:0.45 },
    { key:'Q4_M2', preMean:2.95, preSD:0.50, deltaMean:0.50, deltaSD:0.45 },
    { key:'Q4_M3', preMean:3.10, preSD:0.50, deltaMean:0.45, deltaSD:0.45 },
    { key:'Q4_M4', preMean:3.70, preSD:0.50, deltaMean:0.10, deltaSD:0.40 },
    { key:'Q4_M5', preMean:3.60, preSD:0.50, deltaMean:0.22, deltaSD:0.40 },
    { key:'Q4_M6', preMean:3.80, preSD:0.50, deltaMean:0.08, deltaSD:0.40 },
    { key:'Q4_M7', preMean:3.70, preSD:0.50, deltaMean:0.15, deltaSD:0.40 },
    { key:'Q4_M8', preMean:3.70, preSD:0.50, deltaMean:0.20, deltaSD:0.40 }
  ];
  function generateEffSample(){
    const rng = mulberry32(20260905);
    const N = 34;
    const dates = [];
    for(let i=0;i<N;i++){
      const month = 1+Math.floor(rng()*12), day = 1+Math.floor(rng()*27);
      dates.push('2010-'+String(month).padStart(2,'0')+'-'+String(day).padStart(2,'0'));
    }
    dates[5]=dates[1]; dates[10]=dates[1]; dates[20]=dates[7]; // simulate real-world birthdate collisions
    const preRows = dates.map(d=>{
      const row = { 생년월일: d };
      INDICATOR_DEFS.forEach(def=>{ row[def.key] = Math.round(clamp(def.preMean+randNorm(rng)*def.preSD,1,5)*10)/10; });
      return row;
    });
    const dropIdx = new Set([3,15,25,30]); // simulate absentees at post-test
    const postDates = dates.filter((_,i)=>!dropIdx.has(i));
    const postSourceIdx = dates.map((_,i)=>i).filter(i=>!dropIdx.has(i));
    postDates.push('2010-08-19','2010-02-02'); // late joiners with no pre-survey
    postSourceIdx.push(-1,-1);
    postDates[2] = postDates[0]; postSourceIdx[2] = postSourceIdx[0]; // one more collision on the post side
    const postRows = postDates.map((d,i)=>{
      const row = { 생년월일: d };
      const srcIdx = postSourceIdx[i];
      INDICATOR_DEFS.forEach(def=>{
        const preVal = srcIdx>=0 ? preRows[srcIdx][def.key] : clamp(def.preMean+randNorm(rng)*def.preSD,1,5);
        row[def.key] = Math.round(clamp(preVal + def.deltaMean + randNorm(rng)*def.deltaSD,1,5)*10)/10;
      });
      return row;
    });
    return { preRows, postRows };
  }

  /* ===================== sample data: satisfaction ===================== */
  const SAT_ITEM_DEFS = [
    { key:'전반적 만족도', weights:[62,25,8,4,1] },
    { key:'진행자(강사) 만족도', weights:[70,20,6,3,1] },
    { key:'프로그램 구성 만족도', weights:[40,30,18,8,4] },
    { key:'안전관리 만족도', weights:[75,17,5,2,1], safety:true },
    { key:'시설·환경 만족도', weights:[32,28,22,12,6] }
  ];
  const OPEN_COMMENT_POOL = [
    '친구들과 함께 팀 활동을 해서 정말 즐거웠어요.', '새로운 친구들을 사귈 수 있어서 좋았습니다.',
    '조원들과 협동하는 과정이 재미있었어요.', '팀원들과 친해질 수 있는 시간이 많아서 좋았다.',
    '함께한 활동들 덕분에 캠프가 더 즐거웠습니다.', '친구들과의 활동이 가장 기억에 남아요.',
    '선생님이 친절하게 잘 알려주셔서 좋았어요.', '강사님들이 열정적으로 지도해주셔서 감사했습니다.',
    '진행자분들이 세심하게 챙겨주셔서 편했어요.', '멘토 선생님 덕분에 발표 준비를 잘 할 수 있었어요.',
    '선생님들이 친근하게 대해주셔서 편안했습니다.', '강사님 설명이 이해하기 쉬웠어요.',
    '일정이 너무 빡빡해서 조금 힘들었어요.', '하루 일정이 길어서 피곤함을 느꼈습니다.',
    '쉬는 시간이 부족했던 것 같아요.', '활동 사이 이동 시간이 너무 짧았어요.',
    '전체적으로 일정이 촘촘해서 여유가 없었습니다.',
    '안전요원분들이 항상 지켜봐 주셔서 안심이 됐어요.', '안전 교육을 미리 해줘서 활동할 때 걱정이 덜했습니다.',
    '위험한 활동에서도 안전 관리가 철저했던 것 같아요.', '안전 관련 안내가 꼼꼼해서 좋았습니다.',
    '숙소 시설이 조금 낡아서 아쉬웠어요.', '식사 메뉴가 다양하지 않아 아쉬웠습니다.',
    '숙소 방이 좁아서 불편했어요.', '식사량이 부족하다고 느꼈어요.',
    '발표 준비 시간이 너무 짧았어요.', '팀 프로젝트 시간이 조금 더 있었으면 좋겠습니다.',
    '자료 조사할 시간이 부족했던 것 같아요.',
    '', '', '다음에 기회가 되면 또 참여하고 싶어요.'
  ];
  const INCIDENT_TEXTS = ['담당 선생님이 예정보다 늦게 오셔서 대기시간이 있었습니다.', '팀 활동 중 다른 참가자와 사소한 다툼이 있었습니다.'];
  function generateSatSample(){
    const rng = mulberry32(20260906);
    const N = 32;
    const rows = [];
    for(let i=1;i<=N;i++){
      const row = { 참가자ID: 'P' + String(i).padStart(2,'0') };
      SAT_ITEM_DEFS.forEach(def=>{ row[def.key] = weightedPick(rng, def.weights); });
      row['자유의견'] = OPEN_COMMENT_POOL[(i-1) % OPEN_COMMENT_POOL.length];
      row['안전·인권 신고'] = (rng() < 0.94) ? '1' : ('2(' + INCIDENT_TEXTS[Math.floor(rng()*INCIDENT_TEXTS.length)] + ')');
      rows.push(row);
    }
    return rows;
  }

  /* ===================== stats engine ===================== */
  function gammaln(x){
    const cof = [76.18009172947146,-86.50532032941677,24.01409824083091,
                 -1.231739572450155,0.1208650973866179e-2,-0.5395239384953e-5];
    let y = x, tmp = x + 5.5;
    tmp -= (x + 0.5) * Math.log(tmp);
    let ser = 1.000000000190015;
    for(let j=0;j<6;j++){ y += 1; ser += cof[j] / y; }
    return -tmp + Math.log(2.5066282746310005 * ser / x);
  }
  function betacf(x,a,b){
    const MAXIT=200, EPS=3e-14, FPMIN=1e-300;
    let qab=a+b, qap=a+1, qam=a-1;
    let c=1, d=1-qab*x/qap;
    if(Math.abs(d)<FPMIN) d=FPMIN;
    d=1/d; let h=d;
    for(let m=1;m<=MAXIT;m++){
      const m2=2*m;
      let aa = m*(b-m)*x/((qam+m2)*(a+m2));
      d = 1+aa*d; if(Math.abs(d)<FPMIN) d=FPMIN;
      c = 1+aa/c; if(Math.abs(c)<FPMIN) c=FPMIN;
      d = 1/d; h *= d*c;
      aa = -(a+m)*(qab+m)*x/((a+m2)*(qap+m2));
      d = 1+aa*d; if(Math.abs(d)<FPMIN) d=FPMIN;
      c = 1+aa/c; if(Math.abs(c)<FPMIN) c=FPMIN;
      d = 1/d; const del = d*c; h *= del;
      if(Math.abs(del-1)<EPS) break;
    }
    return h;
  }
  function betai(a,b,x){
    if(x<=0) return 0;
    if(x>=1) return 1;
    const bt = Math.exp(gammaln(a+b)-gammaln(a)-gammaln(b)+a*Math.log(x)+b*Math.log(1-x));
    if(x < (a+1)/(a+b+2)) return bt*betacf(x,a,b)/a;
    return 1 - bt*betacf(1-x,b,a)/b;
  }
  function tTwoTailedP(t, df){
    if(!isFinite(t) || df<=0) return 1;
    const x = df/(df+t*t);
    return clamp(betai(df/2, 0.5, x), 0, 1);
  }
  function dLabel(d){
    const a = Math.abs(d);
    if(a < 0.2) return { text:'미미', cls:'negligible' };
    if(a < 0.5) return { text:'작음', cls:'small' };
    if(a < 0.8) return { text:'중간', cls:'mid' };
    return { text:'큼', cls:'big' };
  }
  function sigLabel(p){
    if(p < 0.001) return '***';
    if(p < 0.01) return '**';
    if(p < 0.05) return '*';
    return 'n.s.';
  }
  // paired (matched) samples — Cohen's dz
  function computeStatsPaired(preArr, postArr){
    const pairs = [];
    for(let i=0;i<Math.min(preArr.length, postArr.length);i++){
      const a = Number(preArr[i]), b = Number(postArr[i]);
      if(isFinite(a) && isFinite(b)) pairs.push([a,b]);
    }
    const n = pairs.length;
    if(n < 2) return null;
    const pre = pairs.map(p=>p[0]), post = pairs.map(p=>p[1]);
    const diffs = pairs.map(p=>p[1]-p[0]);
    const preMean = mean(pre), postMean = mean(post);
    const preSD = sd(pre), postSD = sd(post);
    const meanDiff = mean(diffs), sdDiff = sd(diffs);
    const se = sdDiff / Math.sqrt(n);
    const t = se === 0 ? 0 : meanDiff / se;
    const df = n - 1;
    const p = sdDiff === 0 ? (meanDiff === 0 ? 1 : 0) : tTwoTailedP(t, df);
    const d = sdDiff === 0 ? 0 : meanDiff / sdDiff;
    const pctImproved = diffs.filter(x=>x>0).length / n * 100;
    return { n, preMean, preSD, postMean, postSD, meanDiff, sdDiff, t, df, p, d, pctImproved };
  }
  // independent samples — Welch's t-test, pooled-SD Cohen's d
  function welchTTest(a, b){
    const nA=a.length, nB=b.length;
    if(nA<2||nB<2) return null;
    const mA=mean(a), mB=mean(b), sA=sd(a), sB=sd(b);
    const se = Math.sqrt(sA*sA/nA + sB*sB/nB);
    const t = se===0?0:(mB-mA)/se;
    const df = se===0 ? (nA+nB-2) : Math.pow(sA*sA/nA+sB*sB/nB,2) / ( Math.pow(sA*sA/nA,2)/(nA-1) + Math.pow(sB*sB/nB,2)/(nB-1) );
    const p = tTwoTailedP(t, df);
    const pooledSD = Math.sqrt(((nA-1)*sA*sA + (nB-1)*sB*sB)/(nA+nB-2));
    const d = pooledSD===0?0:(mB-mA)/pooledSD;
    return { n:nA, n2:nB, preMean:mA, postMean:mB, preSD:sA, postSD:sB, meanDiff:mB-mA, t, df, p, d };
  }
  function likertStats(values){
    const nums = values.map(Number).filter(v=>isFinite(v));
    const n = nums.length;
    if(!n) return null;
    const m = mean(nums), s = sd(nums);
    const maxLevel = Math.max(5, Math.round(Math.max(...nums)));
    const dist = {};
    for(let lv=1; lv<=maxLevel; lv++) dist[lv] = 0;
    nums.forEach(v=>{ const r = Math.round(v); dist[r] = (dist[r]||0) + 1; });
    return { n, mean:m, sd:s, dist, maxLevel };
  }
  function goodnessScore(rawMean, scaleMax, direction){
    return direction === 'reversed' ? (scaleMax + 1 - rawMean) : rawMean;
  }
  // Convert a 1-5 raw Likert mean to a 0-100 scale (matches how the official KYWA
  // survey-system reports present composite scores, e.g. "64.835점").
  const EFF_SCALE_MAX = 5, EFF_SCALE_MIN = 1;
  function toScore100(rawMean, scaleMax){
    if(rawMean==null || !isFinite(rawMean)) return null;
    const mx = scaleMax || EFF_SCALE_MAX;
    return (rawMean - EFF_SCALE_MIN) / (mx - EFF_SCALE_MIN) * 100;
  }
  // Different question batteries in the same real-world survey can use different Likert widths
  // (e.g. a 5-point competency scale alongside a 7-point satisfaction scale) — infer the actual
  // scale per item-group from the observed data rather than assuming everything is 1-5.
  function inferLikertScaleMax(values){
    const nums = values.map(Number).filter(isFinite);
    if(!nums.length) return EFF_SCALE_MAX;
    const mx = Math.max(...nums);
    if(mx <= 5) return 5;
    if(mx <= 7) return 7;
    return 10;
  }
  // Many real Korean survey forms print response options in the order "①매우그렇다 ②그렇다 ③보통이다
  // ④그렇지않다 ⑤전혀그렇지않다" and the raw export stores the SELECTED CIRCLE NUMBER as-is — meaning
  // 1 is the most POSITIVE answer, the reverse of the plain "bigger raw number = better" assumption
  // toScore100 makes for already-scored KYWA report figures. Getting this backwards silently turns a
  // genuinely well-rated item ("직원 친절도" at ~92.5점 in the official report) into an apparently
  // terrible one (~6점) when recomputed from a raw-response export with no official report to check
  // against — exactly the kind of confidently-wrong number this tool must never show. Since one
  // printed form uses ONE consistent option order throughout, direction is detected ONCE per raw
  // file (by majority vote across all of that file's Likert items/indicator groups — genuine
  // 만족도/역량 data is almost always skewed toward the positive end, so whichever end most items
  // cluster at is trusted as "positive") rather than per item, so a single unusually low-rated item
  // can't get flipped on its own and read as the best-rated one.
  function detectItemDirection(values, scaleMax){
    const nums = values.map(Number).filter(isFinite).map(v=>Math.round(v));
    if(!nums.length) return null;
    const counts = {};
    nums.forEach(v=>{ counts[v] = (counts[v]||0) + 1; });
    let modeVal = null, modeCount = -1;
    Object.keys(counts).forEach(k=>{ const c = counts[k]; if(c > modeCount){ modeCount = c; modeVal = Number(k); } });
    const mid = (1 + scaleMax) / 2;
    if(modeVal == null || modeVal === mid) return null;
    return modeVal < mid ? 'reversed' : 'standard';
  }
  function detectGroupDirection(groups){
    let reversedVotes = 0, standardVotes = 0;
    groups.forEach(g=>{
      const d = detectItemDirection(g.values, g.scaleMax);
      if(d === 'reversed') reversedVotes++;
      else if(d === 'standard') standardVotes++;
    });
    return reversedVotes > standardVotes ? 'reversed' : 'standard';
  }
  function positionColor(pos){ // pos in [0,1], 1 = best
    if(pos >= 0.8) return { color:'var(--post)', opacity:1 };
    if(pos >= 0.55) return { color:'var(--post)', opacity:0.55 };
    if(pos > 0.45) return { color:'var(--ink-muted)', opacity:1 };
    if(pos >= 0.25) return { color:'var(--warn)', opacity:1 };
    return { color:'var(--critical)', opacity:1 };
  }

  /* ===================== column / key detection ===================== */
  const META_COLS = ['uid','name','email','start_time','end_time','ip'];
  function isMetaColumn(h){ return META_COLS.indexOf(String(h).toLowerCase()) !== -1; }
  function commonColumns(a,b){ return a.filter(h=>b.indexOf(h)!==-1 && !isMetaColumn(h)); }
  function normalizeKeyVal(v){
    if(v==null) return '';
    if(v instanceof Date) return v.getFullYear()+'-'+String(v.getMonth()+1).padStart(2,'0')+'-'+String(v.getDate()).padStart(2,'0');
    return String(v).trim();
  }
  function looksLikeLikertCombined(preRows, postRows, col){
    const vals = preRows.map(r=>r[col]).concat(postRows.map(r=>r[col])).filter(v=>v!=null && String(v).trim()!=='');
    if(!vals.length) return false;
    const nums = vals.map(Number).filter(n=>isFinite(n));
    if(nums.length < vals.length*0.8) return false;
    const uniq = new Set(nums.map(n=>Math.round(n)));
    const mx = Math.max(...nums);
    return uniq.size >= 3 && mx <= 10;
  }
  function detectIndicatorGroups(preHeaders, postHeaders, preRows, postRows, excludeCol){
    const common = commonColumns(preHeaders, postHeaders).filter(h=>h!==excludeCol);
    const groups = new Map();
    const singles = [];
    common.forEach(h=>{
      const m = h.match(/^(.+)_M(\d+)$/i);
      if(m){
        const prefix = m[1], idx = parseInt(m[2],10);
        if(!groups.has(prefix)) groups.set(prefix, []);
        groups.get(prefix).push({ h, idx });
      } else {
        singles.push(h);
      }
    });
    const mappings = [];
    let counter = 0;
    // A "Q4_M1..M8"-style group is usually NOT 8 separate competencies — it's one targeted
    // core competency (e.g. "협업") measured through several sub-behavior items. So we build
    // ONE composite indicator per group (average across its items) plus keep the item list
    // for a item-level diagnostic breakdown, rather than 8 separately-labeled indicators.
    groups.forEach((items, prefix)=>{
      items.sort((a,b)=>a.idx-b.idx);
      const validItems = items.filter(it=>looksLikeLikertCombined(preRows,postRows,it.h));
      if(!validItems.length) return;
      counter++;
      if(validItems.length === 1){
        mappings.push({ id:'m'+counter+'_'+Date.now(), prefix, label: prefix + ' 문항', preCol: validItems[0].h, postCol: validItems[0].h, itemCols:[validItems[0].h] });
      } else {
        mappings.push({
          id:'m'+counter+'_'+Date.now(),
          prefix,
          label: prefix + ' 종합점수 (핵심역량명 입력)',
          itemCols: validItems.map(it=>it.h)
        });
      }
    });
    singles.forEach(h=>{
      if(looksLikeLikertCombined(preRows,postRows,h)){
        counter++;
        mappings.push({ id:'m'+counter+'_'+Date.now(), prefix:h, label: h, preCol: h, postCol: h, itemCols:[h] });
      }
    });
    return mappings;
  }
  // Flatten every battery's items into one list. Each item carries the NUMBER actually printed
  // next to it in the source document when one could be found (see parseSurveyFormText /
  // analyzeSurveyWithAI) — that printed number, not array position, is what a raw data column like
  // "Q9" refers to. Position-based guessing was tried here previously and was reverted: a real
  // camp's survey had a few un-numbered/lead-in questions that never made it into any battery, so
  // "the 9th parsed item" was actually a different, later question than the platform's real "Q9" —
  // which silently attached a wrong (and misleadingly plausible) question's text to another
  // item's score. Only an exact match on the document's own printed number is trusted now.
  function flattenSurveyItems(batteries){
    const flat = [];
    (batteries||[]).forEach(b=>{
      (b.items||[]).forEach(item=>{
        const text = surveyItemText(item).trim();
        if(text) flat.push({ text, batteryName: b.name, index: surveyItemIndex(item) });
      });
    });
    return flat;
  }
  // Match survey-form-declared indicator "batteries" (from the actual questionnaire text) to
  // detected data column-groups so raw platform codes like "Q3"/"Q9" never have to be shown to a
  // reader as-is — replaced either by the real indicator/역량 name (e.g. "협업", for a multi-item
  // composite, matched by item count) or by the literal question text (for a single standalone
  // item, matched only by its own printed question number — see flattenSurveyItems above for why
  // position-based guessing is not used here).
  function matchSurveyBatteries(groups, batteries){
    const labelMap = new Map();
    if(!batteries || !batteries.length || !groups.length) return labelMap;
    const flat = flattenSurveyItems(batteries);
    const byNumber = new Map();
    flat.forEach(it=>{ if(it.index != null && !byNumber.has(it.index)) byNumber.set(it.index, it.text); });
    // Pass 1: a bare "Q<n>" standalone column (no "_M" sub-item grouping) is the platform's own
    // sequential question number — resolve it directly to whichever parsed item was printed with
    // that exact number in the source document. Takes priority; matched groups are excluded from
    // the pass-2 size-based queue below.
    const directResolved = new Set();
    groups.forEach(g=>{
      const size = (g.itemCols||[]).length || 1;
      if(size !== 1) return;
      const m = String(g.prefix).match(/^Q\.?\s*0*(\d+)$/i);
      if(!m) return;
      const n = parseInt(m[1], 10);
      if(byNumber.has(n)){
        labelMap.set(g.prefix, byNumber.get(n));
        directResolved.add(g.prefix);
      }
    });
    // Pass 2: match a multi-item GROUPED composite (e.g. "Q4_M1".."Q4_M8") to a battery with the
    // same item count. Restricted to size > 1 on purpose — a size-1 battery gives no real
    // distinguishing signal at all (any unrelated single-item column would match it just as well
    // by "count"), which is exactly how a standalone column silently inherited a wrong single-item
    // battery's name in practice. Single-item columns are only ever resolved via Pass 1 above,
    // which checks the document's own printed question number instead of guessing by count.
    const bySize = new Map();
    batteries.forEach(b=>{
      const sz = (b.items||[]).length;
      if(sz <= 1) return;
      if(!bySize.has(sz)) bySize.set(sz, []);
      bySize.get(sz).push(b);
    });
    groups.forEach(g=>{
      if(directResolved.has(g.prefix)) return;
      const size = (g.itemCols||[]).length || 1;
      if(size <= 1) return;
      const queue = bySize.get(size);
      if(queue && queue.length){
        const b = queue.shift();
        labelMap.set(g.prefix, b.name);
      }
    });
    return labelMap;
  }
  function guessMatchKey(preHeaders, postHeaders, preRows){
    const common = commonColumns(preHeaders, postHeaders).filter(h => !/_M\d+$/i.test(h));
    function dateScore(h){
      const vals = preRows.slice(0,50).map(r=>r[h]).filter(v=>v!=null && String(v).trim()!=='');
      if(!vals.length) return 0;
      const dateLike = vals.filter(v=>/^\d{4}-\d{1,2}-\d{1,2}/.test(String(v).trim())).length;
      return dateLike/vals.length;
    }
    let best=null, bestScore=-1;
    common.forEach(h=>{ const score = dateScore(h); if(score>bestScore){ bestScore=score; best=h; } });
    return bestScore>0.5 ? best : null;
  }
  function buildMatchedPairs(preRows, postRows, key){
    if(!key) return { pairs:[], preN:preRows.length, postN:postRows.length, preDup:0, postDup:0, preOnly:0, postOnly:0 };
    const preGroups = new Map(), postGroups = new Map();
    preRows.forEach(r=>{ const k=normalizeKeyVal(r[key]); if(!k) return; if(!preGroups.has(k)) preGroups.set(k,[]); preGroups.get(k).push(r); });
    postRows.forEach(r=>{ const k=normalizeKeyVal(r[key]); if(!k) return; if(!postGroups.has(k)) postGroups.set(k,[]); postGroups.get(k).push(r); });
    let preDup=0, postDup=0, preOnly=0, postOnly=0;
    const pairs=[];
    preGroups.forEach((arr,k)=>{
      if(arr.length>1){ preDup+=arr.length; return; }
      const pArr = postGroups.get(k);
      if(!pArr){ preOnly++; return; }
      if(pArr.length>1){ postDup+=pArr.length; return; }
      pairs.push({ pre:arr[0], post:pArr[0] });
    });
    postGroups.forEach((arr,k)=>{ if(arr.length===1 && !preGroups.has(k)) postOnly++; });
    return { pairs, preN:preRows.length, postN:postRows.length, preDup, postDup, preOnly, postOnly };
  }
  function guessColumnRole(header, values){
    if(isMetaColumn(header)) return 'ignore';
    const nonNull = values.filter(v=>v!=null && String(v).trim()!=='');
    if(!nonNull.length) return 'ignore';
    const incidentLike = nonNull.filter(v=>/^\d+\s*\(.+\)\s*$/.test(String(v).trim())).length;
    const plainDigit = nonNull.filter(v=>/^\d+$/.test(String(v).trim())).length;
    if(incidentLike > 0 && (incidentLike+plainDigit)/nonNull.length > 0.9) return 'incident';
    const numericCount = nonNull.filter(v=>typeof v==='number' || (String(v).trim()!=='' && isFinite(Number(v)))).length;
    const numericRatio = numericCount / nonNull.length;
    if(numericRatio > 0.8){
      const nums = nonNull.map(Number).filter(n=>isFinite(n));
      const uniq = new Set(nums.map(n=>Math.round(n)));
      const mx = Math.max(...nums), mn = Math.min(...nums);
      if(uniq.size >= 3 && mx <= 10 && mn >= 0) return 'likert';
      return 'ignore';
    }
    const uniqStr = new Set(nonNull.map(v=>String(v).trim()));
    const uniqRatio = uniqStr.size / nonNull.length;
    const avgLen = nonNull.reduce((s,v)=>s+String(v).length,0) / nonNull.length;
    if(avgLen >= 6 && uniqRatio > 0.5) return 'text';
    return 'ignore';
  }
  function parseIncidentValue(v){
    const s = String(v==null?'':v).trim();
    const m = s.match(/^(\d+)\s*\((.*)\)\s*$/);
    if(m) return { code:m[1], note:m[2].trim(), flagged:true };
    if(/^\d+$/.test(s)) return { code:s, note:'', flagged:false };
    return { code:s, note:'', flagged: s!=='' };
  }

  /* ===================== workbook loading (xlsx/xls/csv) ===================== */
  async function loadWorkbook(file){
    const buf = await file.arrayBuffer();
    return XLSX.read(buf, { type:'array', cellDates:true });
  }
  function rowsFromSheet(wb, sheetName){
    const ws = wb.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(ws, { defval:null, raw:true });
  }
  // Row-level composite score across a group of sub-items (e.g. Q4_M1..M8) — requires every
  // sub-item to have a valid value so every respondent is scored on the same basis.
  function compositeRowValue(row, cols){
    let sum = 0, count = 0;
    for(const c of cols){
      const v = row[c];
      if(v==null || String(v).trim()==='') return null;
      const n = Number(v);
      if(!isFinite(n)) return null;
      sum += n; count++;
    }
    return count ? sum / count : null;
  }
  function collectValues(rows, colOrCols){
    const cols = Array.isArray(colOrCols) ? colOrCols : [colOrCols];
    return rows.map(r=>compositeRowValue(r, cols)).filter(v=>v!=null);
  }
  // Descriptive (non-inferential) pre/post breakdown per sub-item, for diagnostic drill-down
  // ("which specific part was good / lacking") under a composite indicator.
  function computeItemBreakdown(preRows, postRows, itemCols, itemLabels){
    return itemCols.map((col,i)=>{
      const preVals = preRows.map(r=>r[col]).filter(v=>v!=null && String(v).trim()!=='').map(Number).filter(isFinite);
      const postVals = postRows.map(r=>r[col]).filter(v=>v!=null && String(v).trim()!=='').map(Number).filter(isFinite);
      const preMean = preVals.length ? mean(preVals) : null;
      const postMean = postVals.length ? mean(postVals) : null;
      const delta = (preMean!=null && postMean!=null) ? postMean - preMean : null;
      const label = (itemLabels && itemLabels[i]) ? itemLabels[i] : col;
      return { col, label, preMean, postMean, delta, preN:preVals.length, postN:postVals.length };
    });
  }

  /* ===================== app state ===================== */
  const state = {
    survey: { batteries: [], raw: '' },
    bulk: { files: [], labelOverrides: new Map(), roleOverrides: new Map(), itemNameOverrides: new Map(), activities: new Map(), clusterResult: null, insight: null, isSample: true },
    // Saved camps: each camp/round can have its own 교급·핵심역량 set, so uploads for the camp
    // currently being reviewed live in `bulk` above, and are only merged into a shared pool of
    // saved records when the user explicitly clicks 저장 — never automatically on every upload.
    saved: [],           // [{ id, name, savedAt, activities: [...] }, ...] loaded from the shared db
    savedLoading: true,  // true until the first db read/snapshot resolves
    dbNs: null,           // the resolved db capability namespace, or null if unavailable
    view: { includeCurrent: true, selectedSavedIds: new Set(), satAudience: 'youth' }, // which camps feed the analysis views below; satAudience: 'youth' | 'leader' | 'combined'
    ai: { serverProxyAvailable: null } // null = not checked yet; see probeServerProxy()
  };

  /* ===================== markdown-lite renderer ===================== */
  function renderMarkdownLite(md){
    const lines = escapeHtml(md).split('\n');
    let html = '';
    let inList = null;
    let tableBuf = [];
    function flushList(){ if(inList){ html += '</' + inList + '>'; inList = null; } }
    function flushTable(){
      if(!tableBuf.length) return;
      const rows = tableBuf.filter(r => !/^\|?\s*:?-{2,}/.test(r));
      html += '<table>';
      rows.forEach((r, idx)=>{
        const cells = r.replace(/^\||\|$/g,'').split('|').map(c=>c.trim());
        const tag = idx === 0 ? 'th' : 'td';
        html += '<tr>' + cells.map(c=>'<'+tag+'>'+inline(c)+'</'+tag+'>').join('') + '</tr>';
      });
      html += '</table>';
      tableBuf = [];
    }
    function inline(s){ return s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); }
    lines.forEach(line=>{
      const t = line.trim();
      if(/^\|.*\|$/.test(t)){ tableBuf.push(t); return; }
      flushTable();
      if(/^##\s+/.test(t)){ flushList(); html += '<h4>' + inline(t.replace(/^##\s+/,'')) + '</h4>'; return; }
      if(/^###\s+/.test(t)){ flushList(); html += '<h4>' + inline(t.replace(/^###\s+/,'')) + '</h4>'; return; }
      if(/^[-*]\s+/.test(t)){
        if(inList !== 'ul'){ flushList(); html += '<ul>'; inList = 'ul'; }
        html += '<li>' + inline(t.replace(/^[-*]\s+/,'')) + '</li>'; return;
      }
      if(/^\d+\.\s+/.test(t)){
        if(inList !== 'ol'){ flushList(); html += '<ol>'; inList = 'ol'; }
        html += '<li>' + inline(t.replace(/^\d+\.\s+/,'')) + '</li>'; return;
      }
      flushList();
      if(t === ''){ return; }
      html += '<p>' + inline(t) + '</p>';
    });
    flushList(); flushTable();
    return html;
  }

  /* ===================== AI capabilities ===================== */
  let sampleFn = null, downloadsFn = null;
  /* ---- OpenAI (ChatGPT) API integration — used when this page is NOT running inside the Claude
     Artifact platform (window.claude.use unavailable), e.g. downloaded and hosted as a plain HTML
     file. Each viewer pastes THEIR OWN OpenAI API key; it is kept only in this browser's
     localStorage and sent only to api.openai.com — never anywhere else, and never bundled into the
     page itself. This is a client-only integration: on a page other people also load, anyone
     could open dev tools and read whatever key is currently entered there, so a key should only
     ever be entered by the person who owns it, on their own device — never a shared/organization
     key pasted in for everyone to use from a page you don't control. If a proper multi-user
     deployment is needed later, the key belongs behind a small backend instead (see the chat
     reply for that option); this path trades that safety for "works with zero server". ---- */
  const OPENAI_KEY_STORAGE = 'promptSurveyAnalyzer.openaiApiKey';
  const OPENAI_MODEL_STORAGE = 'promptSurveyAnalyzer.openaiModel';
  const OPENAI_MODEL_OPTIONS = ['gpt-4o-mini', 'gpt-4o', 'gpt-4.1-mini', 'gpt-4.1'];
  function getOpenAiKey(){ try{ return localStorage.getItem(OPENAI_KEY_STORAGE) || ''; }catch(e){ return ''; } }
  function setOpenAiKey(key){
    try{ if(key) localStorage.setItem(OPENAI_KEY_STORAGE, key); else localStorage.removeItem(OPENAI_KEY_STORAGE); }
    catch(e){ /* private browsing / storage blocked — key just won't persist across reloads */ }
  }
  function getOpenAiModel(){ try{ return localStorage.getItem(OPENAI_MODEL_STORAGE) || OPENAI_MODEL_OPTIONS[0]; }catch(e){ return OPENAI_MODEL_OPTIONS[0]; } }
  function setOpenAiModel(model){ try{ localStorage.setItem(OPENAI_MODEL_STORAGE, model); }catch(e){} }
  function fileToDataUrl(file){
    return new Promise((resolve, reject)=>{
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }
  // Mirrors the sample() capability's own call shape as closely as possible — a string or a
  // [{role,content}] turns array in, {text, truncated} out, with an optional streaming onText —
  // so every existing call site can switch backends by swapping which function it calls, not by
  // restructuring how it calls it.
  async function openaiChat(input, opts){
    opts = opts || {};
    const key = getOpenAiKey();
    if(!key) throw Object.assign(new Error('OpenAI API 키가 설정되지 않았습니다.'), { code:'not_granted' });
    const messages = typeof input === 'string' ? [{ role:'user', content: input }] : input.map(m=>({ role:m.role, content:m.content }));
    if(opts.images && opts.images.length){
      const last = messages[messages.length-1];
      const parts = [{ type:'text', text: String(last.content||'') }];
      for(const img of opts.images){ parts.push({ type:'image_url', image_url:{ url: await fileToDataUrl(img) } }); }
      last.content = parts;
    }
    const body = { model: opts.model || getOpenAiModel(), messages, stream: !!opts.onText };
    if(opts.jsonMode) body.response_format = { type:'json_object' };
    let resp;
    try{
      resp = await fetch('https://api.openai.com/v1/chat/completions', {
        method:'POST',
        headers: { 'Content-Type':'application/json', 'Authorization':'Bearer ' + key },
        body: JSON.stringify(body),
        signal: opts.signal
      });
    }catch(e){
      throw Object.assign(new Error('OpenAI API 호출에 실패했습니다 (네트워크/CORS 확인 필요).'), { code:'network_error' });
    }
    if(!resp.ok){
      let msg = 'OpenAI API 오류 (' + resp.status + ')';
      try{ const errBody = await resp.json(); if(errBody && errBody.error && errBody.error.message) msg = errBody.error.message; }catch(e){}
      const code = resp.status === 401 ? 'not_granted' : (resp.status === 429 ? 'rate_limited' : 'api_error');
      throw Object.assign(new Error(msg), { code });
    }
    if(!opts.onText){
      const json = await resp.json();
      const choice = json.choices && json.choices[0];
      const text = (choice && choice.message && choice.message.content) || '';
      if(!text) throw Object.assign(new Error('AI로부터 응답을 받지 못했습니다.'), { code:'empty_completion' });
      return { text, truncated: choice && choice.finish_reason === 'length' };
    }
    // Streaming (SSE): accumulate content and call onText with the WHOLE answer so far, matching
    // the sample() capability's own onText({text, delta}) contract.
    const reader = resp.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let full = '', buf = '', truncated = false;
    while(true){
      const { done, value } = await reader.read();
      if(done) break;
      buf += decoder.decode(value, { stream:true });
      const lines = buf.split('\n');
      buf = lines.pop();
      for(const line of lines){
        const trimmed = line.trim();
        if(!trimmed.startsWith('data:')) continue;
        const payload = trimmed.slice(5).trim();
        if(!payload || payload === '[DONE]') continue;
        try{
          const evt = JSON.parse(payload);
          const choice = evt.choices && evt.choices[0];
          const delta = choice && choice.delta && choice.delta.content;
          if(delta){ full += delta; opts.onText({ text: full, delta }); }
          if(choice && choice.finish_reason === 'length') truncated = true;
        }catch(e){ /* ignore keepalive/partial lines */ }
      }
    }
    if(!full) throw Object.assign(new Error('AI로부터 응답을 받지 못했습니다.'), { code:'empty_completion' });
    return { text: full, truncated };
  }
  async function openaiChatJson(input, opts){
    const { text } = await openaiChat(input, Object.assign({}, opts||{}, { jsonMode:true, onText:null }));
    try{ return JSON.parse(text); }
    catch(e){ throw Object.assign(new Error('AI 응답 형식을 해석하지 못했습니다.'), { code:'invalid_json' }); }
  }
  // Picks whichever AI backend is actually usable right now: the Claude Artifact platform's own
  // `sample` capability when this page is running there (sampleFn, set in initCapabilities), else
  // the viewer's own OpenAI key when one has been entered (see the AI 설정 panel). Every call site
  // below goes through this instead of touching sampleFn/openaiChat directly, so adding a backend
  // never means re-plumbing every feature that uses AI.
  /* ---- Optional server proxy (/api/chat) — for a deployment (e.g. Vercel) that hosts this same
     HTML alongside a small serverless function holding the OpenAI key in an environment variable
     server-side. This is the "real" way to add ChatGPT to this tool: the key is never sent to or
     visible in any viewer's browser, and there's no OpenAI CORS question at all since the call
     stays on the same origin. It's entirely optional — a deployment with no such route just
     behaves as if this tier doesn't exist and falls through to the viewer's own key below. ---- */
  function probeServerProxy(){
    // A GET is deliberately used here (never a real chat request) — the accompanying api/chat.js
    // rejects non-POST with 405 *before* it ever calls OpenAI, so this check never spends any API
    // quota. A 404 means there's no such route at all (plain static hosting, or this file opened
    // directly from disk); anything else (405 included) means the route exists.
    return fetch('/api/chat', { method:'GET' }).then(r=>r.status !== 404).catch(()=>false);
  }
  async function serverProxyChat(input, opts){
    opts = opts || {};
    const messages = typeof input === 'string' ? [{ role:'user', content: input }] : input.map(m=>({ role:m.role, content:m.content }));
    if(opts.images && opts.images.length){
      // The proxy (api/chat.js) forwards `messages` to OpenAI byte-for-byte — it has no special
      // awareness of images — so building the same {type:'image_url'} content parts here as
      // openaiChat does is all that's needed for 캡처본 인식 to also work through the server proxy.
      const last = messages[messages.length-1];
      const parts = [{ type:'text', text: String(last.content||'') }];
      for(const img of opts.images){ parts.push({ type:'image_url', image_url:{ url: await fileToDataUrl(img) } }); }
      last.content = parts;
    }
    let resp;
    try{
      resp = await fetch('/api/chat', {
        method:'POST', headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ messages, model: opts.model, jsonMode: !!opts.jsonMode }),
        signal: opts.signal
      });
    }catch(e){ throw Object.assign(new Error('서버 프록시 호출에 실패했습니다.'), { code:'proxy_unavailable' }); }
    if(resp.status === 404) throw Object.assign(new Error('서버 프록시(/api/chat)가 없습니다.'), { code:'proxy_unavailable' });
    let json;
    try{ json = await resp.json(); }
    catch(e){ throw Object.assign(new Error('서버 응답을 해석하지 못했습니다.'), { code:'invalid_json' }); }
    if(!resp.ok){
      const msg = (json && json.error && json.error.message) || ('서버 오류 (' + resp.status + ')');
      const code = resp.status === 401 ? 'not_granted' : (resp.status === 429 ? 'rate_limited' : 'api_error');
      throw Object.assign(new Error(msg), { code });
    }
    const choice = json.choices && json.choices[0];
    const text = (choice && choice.message && choice.message.content) || '';
    if(!text) throw Object.assign(new Error('AI로부터 응답을 받지 못했습니다.'), { code:'empty_completion' });
    // The simple proxy (api/chat.js) always answers in one shot rather than streaming, so onText
    // — used for the "AI 종합 인사이트" live-typing effect — is still honored, just called once
    // with the whole answer instead of growing incrementally. Everything downstream that reads
    // onText's argument shape works unchanged either way.
    if(opts.onText) opts.onText({ text, delta: text });
    return { text, truncated: choice && choice.finish_reason === 'length' };
  }
  async function serverProxyChatJson(input, opts){
    const { text } = await serverProxyChat(input, Object.assign({}, opts||{}, { jsonMode:true, onText:null }));
    try{ return JSON.parse(text); }
    catch(e){ throw Object.assign(new Error('AI 응답 형식을 해석하지 못했습니다.'), { code:'invalid_json' }); }
  }
  // Tries the server proxy first (when one has been detected — see probeServerProxy, called once
  // at startup), and only falls back to the viewer's own OpenAI key when the proxy genuinely
  // doesn't exist (proxy_unavailable) — any OTHER error from an existing proxy (bad/missing key on
  // the server, rate limit, etc.) surfaces as-is rather than being masked by a fallback attempt,
  // so whoever deployed the proxy can see and fix the real problem.
  async function aiCallServerThenKey(input, opts){
    if(state.ai.serverProxyAvailable !== false){
      try{ return await serverProxyChat(input, opts); }
      catch(e){ if(e.code !== 'proxy_unavailable') throw e; }
    }
    if(getOpenAiKey()) return openaiChat(input, opts);
    throw Object.assign(new Error('AI를 사용할 수 없습니다.'), { code:'not_granted' });
  }
  async function aiCallServerThenKeyJson(input, opts){
    if(state.ai.serverProxyAvailable !== false){
      try{ return await serverProxyChatJson(input, opts); }
      catch(e){ if(e.code !== 'proxy_unavailable') throw e; }
    }
    if(getOpenAiKey()) return openaiChatJson(input, opts);
    throw Object.assign(new Error('AI를 사용할 수 없습니다.'), { code:'not_granted' });
  }
  function activeAiBackend(){
    if(sampleFn) return { call: sampleFn, json: sampleFn.json ? sampleFn.json.bind(sampleFn) : null, kind:'claude' };
    if(state.ai.serverProxyAvailable || getOpenAiKey()){
      return { call: aiCallServerThenKey, json: aiCallServerThenKeyJson, kind: state.ai.serverProxyAvailable ? 'server' : 'openai' };
    }
    return null;
  }
  // Save a text file to the viewer's computer. Prefers the Claude Artifact platform's own
  // `downloads` capability (a confirmation dialog inside claude.ai); when that isn't available —
  // e.g. this page was downloaded and is being run as a plain HTML file — falls back to a normal
  // browser download (Blob + a temporary <a download> click), which works in any regular browser
  // tab. That fallback does NOT work while this page is still embedded in the Claude Artifact
  // viewer's own sandboxed frame (such downloads are intentionally blocked there), which is fine
  // since in that situation `downloadsFn` above is normally already available anyway.
  async function saveTextFile(filename, data){
    if(downloadsFn){ try{ await downloadsFn.save({ filename, data }); return true; }catch(e){ /* fall through to browser download */ } }
    try{
      const blob = new Blob([data], { type:'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(()=>URL.revokeObjectURL(url), 1000);
      return true;
    }catch(e){ return false; }
  }
  function aiErrorMessage(err){
    const code = err && err.code;
    const map = {
      not_granted: 'AI 기능을 사용할 수 없습니다. 이 화면에서 허용되지 않았거나(Claude), OpenAI API 키가 없거나 잘못되었습니다 — 위쪽 "AI 설정"에서 확인해주세요.',
      rate_limited: '요청이 많습니다. 잠시 후 다시 시도해주세요.',
      refused: 'AI가 이 요청을 처리하지 못했습니다. 데이터를 확인 후 다시 시도해주세요.',
      empty_completion: 'AI로부터 응답을 받지 못했습니다. 다시 시도해주세요.',
      invalid_json: 'AI 응답 형식을 해석하지 못했습니다. 다시 시도해주세요.',
      network_error: 'OpenAI API 호출에 실패했습니다. 인터넷 연결과 API 키를 확인해주세요.',
      api_error: 'OpenAI API 오류가 발생했습니다. API 키와 사용량 한도를 확인해주세요.',
      cancelled: '요청이 취소되었습니다.'
    };
    return map[code] || 'AI 처리 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.';
  }
  // Ask Claude (via the `sample` capability) to read a survey form — pasted text or captured
  // images of the questionnaire — and return the same {name, items:[...]} battery shape that
  // parseSurveyFormText() produces from an .hwpx/.docx extraction, so both paths feed the same
  // matchSurveyBatteries() logic downstream. Used when the automatic hwpx/docx text extraction
  // either isn't available (legacy .hwp, a scanned form) or didn't parse cleanly — this is more
  // robust than the regex parser for arbitrary layouts, since it reads for MEANING rather than
  // pattern-matching bullet/heading punctuation.
  async function analyzeSurveyWithAI({ text, images }){
    const ai = activeAiBackend();
    if(!ai) throw { code:'not_granted', message:'AI 사용 불가' };
    const instruction =
      '당신은 설문지를 분석하는 도우미입니다. 아래 ' + (images ? '설문지 캡처본 이미지' : '설문지 텍스트') + '에서 ' +
      '응답 척도(매우 그렇다~전혀 그렇지 않다 등 리커트 척도)가 있는 문항들을 실제 순서대로 찾아주세요. ' +
      '같은 역량/주제를 측정하는 문항끼리 하나의 묶음으로 묶고, 설문지에 실제로 적힌 이름(예: "협업", "자기주도성" 같은 역량명이나 소제목)을 각 묶음에 붙여주세요. ' +
      '이름이 명시되어 있지 않으면 문항 내용을 보고 적절한 한국어 이름을 붙이세요. 문항 텍스트는 지어내지 말고 실제 내용 그대로 옮겨 적으세요. ' +
      '각 문항 앞에 "1.", "9)", "(12)" 같은 고유 번호가 원래 문서에 적혀 있으면 그 번호를 number 필드에 숫자로 넣어주세요 (설문 전체를 통틀어 매겨진 일련번호이며, 이 묶음 안에서의 순번이 아닙니다). 번호가 안 보이면 number를 null로 두세요. ' +
      '리커트 척도가 없는 문항(인적사항, 서술형 질문 등)은 제외하세요.\n\n' +
      (text ? ('[설문지 텍스트]\n' + String(text).slice(0, 8000) + '\n\n') : '') +
      '다음 JSON 형식으로만 답하세요, 다른 설명 없이:\n' +
      '{"batteries":[{"name":"묶음 이름(역량명 등)","items":[{"number":1,"text":"문항 원문 1"},{"number":null,"text":"문항 원문 2"}]}]}';
    const opts = { modelTier:'default' };
    if(images) opts.images = images;
    const data = ai.json ? await ai.json(instruction, opts) : JSON.parse((await ai.call(instruction, opts)).text);
    if(!data || !Array.isArray(data.batteries)) throw { code:'invalid_json', message:'형식을 해석하지 못했습니다.' };
    // Normalize items to the same { index, text } shape parseSurveyFormText() produces (accepting
    // a plain string item too, in case the model didn't follow the {number,text} schema exactly).
    const batteries = data.batteries
      .map(b=>({
        name: String((b && b.name) || '').trim() || '(이름 없음)',
        items: Array.isArray(b && b.items) ? b.items.map(raw=>{
          if(raw && typeof raw === 'object'){
            const text = String(raw.text||'').trim();
            const idx = (raw.number!=null && isFinite(raw.number)) ? Math.round(Number(raw.number)) : null;
            return text ? { index: idx, text } : null;
          }
          const text = String(raw||'').trim();
          return text ? { index:null, text } : null;
        }).filter(Boolean) : []
      }))
      .filter(b=>b.items.length);
    if(!batteries.length) throw { code:'empty_completion', message:'문항을 인식하지 못했습니다.' };
    return batteries;
  }

  /* ===================== bulk multi-activity analysis =====================
     Handles a zip (or a batch of individual files) covering 50+ activities/camps at once.
     Three real-world file shapes get auto-detected per entry:
       - "eff"    : effectiveness official report — an HTML table saved with a .xls extension,
                    title like "[캠프명][사후]대상,교급,날짜,기관명(활동명)", one row per targeted
                    competency, numbers already on a 0-100 scale.
       - "satAgg" : satisfaction official aggregate report — a real binary workbook, same bracketed
                    title pattern in cell A1, sections "1. 일반적 특성 / 2. 종합 만족도 / 3. 요인 만족도",
                    usually one sheet per respondent group (참가자/인솔교사).
       - "satRaw" : raw individual-response export (UID/NAME/EMAIL/... + Q columns) — some Q columns
                    are open-ended free text (e.g. "Q8"), used for the subjective-opinion ranking.
     Files with matching bracketed titles (after stripping the report-type tag) are grouped into the
     same activity automatically; raw-response files carry no such title, so their activity name is
     guessed from the most repeated short text value in a row (typically a school/org name field),
     and can be reassigned to an existing activity from a dropdown in the review table. */
  const BULK_TITLE_RE = /^\[(.+?)\]\[(.+?)\](.*)$/;
  // `rest` packs several comma-separated fields together ("대상,교급,날짜,기관명(활동명)"), and
  // showing the whole raw string as the activity name (as before) buries the one thing a reader
  // actually recognizes the camp by (e.g. "온택트캠프 2차") under a region code, a target-audience
  // code, and a date range. Pick out just the recognizable name: the "(활동명)" parenthetical when
  // the title follows the documented "기관명(활동명)" convention, otherwise the longest
  // non-date-like comma-separated segment (the short 1-2 syllable codes like "취" for 대상, or a
  // bare date range, are exactly what should NOT end up as the displayed name).
  function pickCampDisplayName(rest, campFallback){
    const raw = String(rest||'');
    const paren = raw.match(/\(([^()]{2,30})\)/);
    if(paren && paren[1].trim()) return paren[1].trim();
    const isDateLike = s => /^[\d.\-~\/]{4,}$/.test(s);
    const meaningful = raw.split(',').map(s=>s.trim()).filter(p => p.length >= 2 && !isDateLike(p));
    if(meaningful.length) return meaningful.slice().sort((a,b)=>b.length-a.length)[0];
    return campFallback;
  }
  function parseActivityTitle(raw){
    if(!raw) return null;
    const s = String(raw).trim();
    const m = s.match(BULK_TITLE_RE);
    if(!m) return null;
    const camp = m[1].trim(), reportType = m[2].trim(), rest = m[3].replace(/^,\s*/, '').trim();
    // The grouping key still uses the full camp+rest string, unchanged — only the DISPLAYED label
    // is simplified, so files still merge into the same activity exactly as before. A guess that
    // doesn't fit a particular camp's own naming convention can always be corrected by hand (the
    // "활동명 직접 고치기" rename already available in the uploaded-files review table).
    const key = camp + '__' + rest;
    const label = pickCampDisplayName(rest, camp) || camp;
    return { key, label, camp, reportType, rest };
  }
  function bytesStartWith(buf, sig){
    if(buf.byteLength < sig.length) return false;
    const u = new Uint8Array(buf, 0, sig.length);
    for(let i=0;i<sig.length;i++) if(u[i]!==sig[i]) return false;
    return true;
  }
  function wordCount(s){ return String(s).trim().split(/\s+/).filter(Boolean).length; }

  /* ===================== survey-form (설문 양식) text parser =====================
     Reconstructs indicator "batteries" (composite question groups) and item text from the
     RAW TEXT of an actual questionnaire document, with zero reliance on the survey platform's
     internal Q-code numbering. Validated against a real government-style hwpx questionnaire. */
  const SURVEY_MARKER_RE = /(?:○\s*){3,10}|(?:[①②③④⑤⑥⑦⑧⑨⑩]\s*){3,10}/g;
  function surveyExtractItemCandidates(str){
    const parts = [];
    let lastIndex = 0, m;
    SURVEY_MARKER_RE.lastIndex = 0;
    while((m = SURVEY_MARKER_RE.exec(str))){
      parts.push(str.slice(lastIndex, m.index));
      lastIndex = m.index + m[0].length;
    }
    return parts;
  }
  function surveyEscapeRegex(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  const SURVEY_JUNK_TOKENS = [
    '구분','하위요소','문항','연번','평가항목','프로그램명',
    '전혀그렇지않다','매우그렇지않다','조금그렇지않다','그렇지않다',
    '매우그렇다','조금그렇다','그렇다','보통이다','보통'
  ];
  const SURVEY_JUNK_RE = new RegExp(SURVEY_JUNK_TOKENS
    .slice().sort((a,b)=>b.length-a.length)
    .map(t=>t.split('').map(ch=>surveyEscapeRegex(ch)+'\\s*').join(''))
    .join('|'), 'g');
  function surveyCutAfterLastJunk(s){
    let lastEnd = -1, jm;
    SURVEY_JUNK_RE.lastIndex = 0;
    while((jm = SURVEY_JUNK_RE.exec(s))){ lastEnd = jm.index + jm[0].length; }
    return lastEnd >= 0 ? s.slice(lastEnd) : s;
  }
  function surveyCleanLabel(s){ return surveyCutAfterLastJunk(s).trim().replace(/^[·\-\s]+/, ''); }
  const SURVEY_BATTERY_RE = /([가-힣·]{1,14}?)\((\d{1,2})\s*문항\)/g;
  const SURVEY_BULLET_RE = /(?:^|[^가-힣0-9])[ㅇ○□▪ㅁ]\s*([가-힣][가-힣0-9\s()~·\-]{1,22}?(?:설문|조사|항목))/;
  const SURVEY_SUBHEAD_RE = /^([가-힣][가-힣0-9\s()~·\-]{1,22}?)(\d{1,2})(?=[\[가-힣])/;
  // A printed item number can be followed by NOTHING before the item text (an hwpx XML-run
  // extraction artifact seen in the original sample document), or — far more commonly in normal
  // documents/pasted text — by a single punctuation mark such as ". " / ")" / ": " / "·", with or
  // without trailing whitespace (e.g. "9. ", "9)", "9："). Whatever separator (or none) is used,
  // still require the number to be immediately followed by Korean text or "[" so a number that's
  // genuinely part of the question's own wording (e.g. "5점 척도로") is never mistaken for an index.
  const SURVEY_LEADIDX_RE = /^(\d{1,2})[.)\]:：·]?\s*(?=[\[가-힣])/;
  function surveyCleanCandidate(raw){
    let s = raw;
    const explicitBatteries = [];
    let m;
    SURVEY_BATTERY_RE.lastIndex = 0;
    while((m = SURVEY_BATTERY_RE.exec(s))) explicitBatteries.push(surveyCleanLabel(m[1]));
    s = s.replace(SURVEY_BATTERY_RE, '');
    let bulletBattery = null;
    const bm = s.match(SURVEY_BULLET_RE);
    if(bm){ bulletBattery = surveyCleanLabel(bm[1]); s = s.slice(0, bm.index) + s.slice(bm.index + bm[0].length); }
    s = surveyCutAfterLastJunk(s).trim();
    let subHead = null, index = null;
    const sm = s.match(SURVEY_SUBHEAD_RE);
    if(sm){ subHead = surveyCleanLabel(sm[1]); index = parseInt(sm[2],10); s = s.slice(sm[0].length); }
    else {
      const im = s.match(SURVEY_LEADIDX_RE);
      if(im){ index = parseInt(im[1],10); s = s.slice(im[0].length); }
    }
    s = s.trim();
    return { text: s, explicitBatteries: explicitBatteries.filter(Boolean), bulletBattery, subHead, index };
  }
  // Parses raw questionnaire text into a list of { name, items:[text,...] } batteries, in the
  // order they appear in the document (order matters for matchSurveyBatteries()).
  function parseSurveyFormText(text){
    const candidates = surveyExtractItemCandidates(String(text||''));
    let battery = null, sub = null;
    const items = [];
    candidates.forEach((raw)=>{
      const r = surveyCleanCandidate(raw);
      if(r.bulletBattery){ battery = r.bulletBattery; sub = null; }
      if(r.explicitBatteries.length >= 2){ battery = r.explicitBatteries[0]; sub = r.explicitBatteries[1]; }
      else if(r.explicitBatteries.length === 1){
        if(!battery) battery = r.explicitBatteries[0];
        else sub = r.explicitBatteries[0];
      } else if(r.subHead){ sub = r.subHead; }
      if(r.text.length >= 4) items.push({ index: r.index, battery, sub, text: r.text });
    });
    const map = new Map(); const order = [];
    items.forEach(it=>{
      const key = it.battery || '(제목 없음)';
      if(!map.has(key)){ map.set(key, []); order.push(key); }
      // Keep the item's own printed number (it.index) alongside its text — this is the ONLY safe
      // way to later resolve a raw data column like "Q9" back to its real question text (see
      // matchSurveyBatteries): a data platform's "Q9" is the document's own 9th-numbered question,
      // which is NOT necessarily the 9th item in this battery list (leading demographic/consent
      // questions that never made it into any battery would otherwise silently shift every
      // downstream item by however many were skipped).
      map.get(key).push({ index: it.index, text: it.text });
    });
    return order.map(name=>({ name, items: map.get(name) }));
  }
  // hwpx (Hancom Office .hwpx) is a plain zip/XML container — unlike legacy binary .hwp, it can
  // be parsed entirely client-side: extract every <hp:t> text-run from Contents/section*.xml.
  async function extractHwpxText(file){
    if(typeof JSZip === 'undefined') throw new Error('zip 처리 라이브러리를 불러오지 못했습니다.');
    const zip = await JSZip.loadAsync(file);
    const sectionFiles = Object.keys(zip.files)
      .filter(n=>/^Contents\/section\d+\.xml$/i.test(n))
      .sort();
    if(!sectionFiles.length) throw new Error('hwpx 파일 안에서 본문(section*.xml)을 찾지 못했습니다.');
    let joined = '';
    for(const name of sectionFiles){
      const xml = await zip.files[name].async('text');
      // NOTE: the tag-name pattern requires "hp:t" to be followed by '>' or whitespace — a plain
      // [^>]* after "hp:t" would also match sibling tags like <hp:tbl>, <hp:tab/>, <hp:tc>,
      // <hp:title> (anything starting with "t"), swallowing entire embedded table/object XML.
      const matches = xml.match(/<hp:t(?:\s[^>]*)?>([\s\S]*?)<\/hp:t>/g) || [];
      matches.forEach(tag=>{
        const inner = tag.replace(/^<hp:t(?:\s[^>]*)?>/, '').replace(/<\/hp:t>$/, '');
        joined += inner.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&apos;/g,"'");
      });
    }
    return joined;
  }
  // .docx is also a zip container (word/document.xml holds the body) — same extraction approach
  // as hwpx above, just a different internal path and tag name (<w:t> instead of <hp:t>).
  async function extractDocxText(file){
    if(typeof JSZip === 'undefined') throw new Error('zip 처리 라이브러리를 불러오지 못했습니다.');
    const zip = await JSZip.loadAsync(file);
    const docXml = zip.file('word/document.xml');
    if(!docXml) throw new Error('docx 파일 안에서 본문(word/document.xml)을 찾지 못했습니다.');
    const xml = await docXml.async('text');
    const matches = xml.match(/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g) || [];
    let joined = '';
    matches.forEach(tag=>{
      const inner = tag.replace(/^<w:t(?:\s[^>]*)?>/, '').replace(/<\/w:t>$/, '');
      joined += inner.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&apos;/g,"'") + '\n';
    });
    return joined;
  }
  // Item entries are normally { index, text } (index = the question's own printed number in the
  // source document, when one could be found — used by matchSurveyBatteries() to safely resolve a
  // raw "Q9" data column; null when no number was detected). Older/legacy plain-string items are
  // also accepted everywhere for safety.
  function surveyItemText(it){ return (it && typeof it === 'object') ? String(it.text||'') : String(it||''); }
  function surveyItemIndex(it){ return (it && typeof it === 'object' && it.index != null && isFinite(it.index)) ? Math.round(it.index) : null; }
  function renderSurveyBatteries(){
    const box = $('#surveyBatteriesPreview');
    if(!box) return;
    const batteries = state.survey.batteries;
    if(!batteries.length){ box.className = 'report-output empty'; box.textContent = '설문 양식을 업로드하거나 붙여넣으면, 문항을 자동으로 읽어 묶음(역량군)별로 정리해 보여줍니다.'; return; }
    box.className = 'report-output';
    let html = '<p class="card-sub" style="margin:0 0 10px;">설문 양식에서 총 <b>' + batteries.length + '개 묶음</b>, <b>' + batteries.reduce((s,b)=>s+b.items.length,0) + '개 문항</b>을 인식했습니다. 효과성/만족도 데이터의 "Qn" 항목은 문항 번호가 확인되는 경우에만 이 문항 내용으로 자동 치환됩니다.</p>';
    batteries.forEach(b=>{
      html += '<details><summary>' + escapeHtml(b.name) + ' <span class="muted">(' + b.items.length + '문항)</span></summary><ol style="margin:6px 0 10px 20px;padding:0;">';
      b.items.forEach(it=>{
        const num = surveyItemIndex(it);
        html += '<li style="margin-bottom:4px;">' + (num!=null ? '<span class="muted">(' + num + '번)</span> ' : '') + escapeHtml(surveyItemText(it)) + '</li>';
      });
      html += '</ol></details>';
    });
    box.innerHTML = html;
  }

  // ---- "eff" : HTML-table-as-.xls effectiveness report (same shape as the single-file uploader) ----
  function parseEffHtmlReportText(text){
    const doc = new DOMParser().parseFromString(text, 'text/html');
    const table = doc.querySelector('table');
    if(!table) return null;
    const trs = Array.from(table.querySelectorAll('tr'));
    let caption = '';
    const dataRows = [];
    trs.forEach(tr=>{
      const dataCells = Array.from(tr.querySelectorAll('td.td_white_left'));
      if(dataCells.length){ dataRows.push(dataCells.map(td=>td.textContent.trim())); return; }
      const cells = Array.from(tr.querySelectorAll('td'));
      if(!caption && cells.length === 1 && cells[0].hasAttribute('colspan')) caption = cells[0].textContent.trim();
    });
    const rows = dataRows.filter(c=>c.length===14).map(cells=>({
      label: cells[0], preMean:Number(cells[1]), preSD:Number(cells[2]),
      postMean:Number(cells[3]), postSD:Number(cells[4]), n:Number(cells[5]),
      t:Number(cells[6]), p:Number(cells[7]), meanDiff:Number(cells[8]), effective: cells[13]
    })).filter(r=>isFinite(r.n));
    if(!rows.length) return null;
    return { caption, rows };
  }

  // ---- "satAgg" : official satisfaction aggregate sheet, title in A1, numbered sections ----
  // The real report splits satisfaction into TWO separate numbered sections, not one flat list:
  // "2. 종합 만족도" is a SUMMARY table holding only the grand-total and per-category SUBTOTAL rows
  // (every label here ends in "만족도" — "전반적 만족도 86.8", "교육전달 만족도 92.0", ...), while
  // "3. 요인 만족도" holds the actual DETAILED items ("직원 친절도 92.5", "지도자 전문성 91.7", ...)
  // grouped under bracketed category headers ("[교육전달]") that Excel stores as a MERGED cell —
  // so the header text appears only on the first row of its group and is blank on the rows below it
  // (fill-down is needed to know which category a later row belongs to). An earlier version of this
  // parser only ever read section "2." and stopped the moment it saw "3.", so every item-level
  // satisfaction figure (직원 친절도, 지도자 전문성, ...) never actually reached the app at all —
  // those never lived in section "2." to begin with. That is also why the "overall" pick was wrong:
  // the first "…만족도"-labeled row it saw ("전반적 만족도") got treated as the grand total instead
  // of the real "종합 만족도" row, which lives among the SAME section-2 rows, not before them.
  function parseSatAggregateSheet(aoa){
    const title = aoa[0] && aoa[0][0] ? String(aoa[0][0]).trim() : '';
    let sec2Start=-1, sec2End=-1, sec3Start=-1, sec3End=aoa.length;
    for(let i=0;i<aoa.length;i++){
      const c0 = aoa[i] ? aoa[i][0] : null;
      const s = c0!=null ? String(c0).trim() : '';
      if(sec2Start<0 && /^2\./.test(s)){ sec2Start=i+1; continue; }
      if(sec2Start>=0 && sec2End<0 && /^3\./.test(s)){ sec2End=i; sec3Start=i+1; continue; }
      if(sec3Start>=0 && /^4\./.test(s)){ sec3End=i; break; }
    }
    if(sec2End<0) sec2End = aoa.length;
    // ---- Section 2: flat [label, mean, n] summary rows ----
    const summaryItems = [];
    if(sec2Start>=0){
      for(let i=sec2Start;i<sec2End;i++){
        const row = aoa[i];
        if(!row) continue;
        const label = row[0];
        const meanV = Number(row[1]);
        const n = Number(row[2]);
        if(label!=null && String(label).trim()!=='' && isFinite(meanV) && !/^평가항목$/.test(String(label).trim())){
          summaryItems.push({ label:String(label).trim(), mean:meanV, n: isFinite(n)?n:null });
        }
      }
    }
    let overall = null;
    const subtotalByName = new Map();
    summaryItems.forEach(it=>{
      if(!/만족도$/.test(it.label)) return;
      const bare = it.label.replace(/\s*만족도$/,'').replace(/^\[|\]$/g,'').trim();
      if(!bare || /^종합$/.test(bare)){
        if(!overall) overall = it;
      } else if(!subtotalByName.has(bare)){
        subtotalByName.set(bare, it);
      }
    });
    // ---- Section 3: detailed items grouped under bracketed (possibly merged-cell) category
    // headers, with fill-down so every item row knows its current category ----
    const categories = [];
    function ensureCategory(name){
      let cat = categories.find(c=>c.name===name);
      if(!cat){ cat = { name, mean:null, n:null, items:[] }; categories.push(cat); }
      return cat;
    }
    let current = null;
    if(sec3Start>=0){
      for(let i=sec3Start;i<sec3End;i++){
        const row = aoa[i];
        if(!row) continue;
        const c0 = row[0]!=null ? String(row[0]).trim() : '';
        const c1 = row[1]!=null ? String(row[1]).trim() : '';
        if(/^평가항목$/.test(c0) || /^평가항목$/.test(c1)) continue;
        const bracketMatch = c0.match(/^\[(.+)\]$/);
        if(bracketMatch){
          current = bracketMatch[1].trim();
          if(c1 && isFinite(Number(row[2]))) ensureCategory(current).items.push({ label:c1, mean:Number(row[2]), n:null });
          continue;
        }
        let label=null, meanV=null;
        if(c1 && isFinite(Number(row[2]))){ label=c1; meanV=Number(row[2]); }
        else if(c0 && isFinite(Number(row[1]))){ label=c0; meanV=Number(row[1]); }
        if(label && isFinite(meanV)) ensureCategory(current || '기타').items.push({ label, mean:meanV, n:null });
      }
    }
    if(!categories.length && summaryItems.some(it=>!/만족도$/.test(it.label))){
      // Legacy/simpler layout: no separate "3." breakout at all — the report puts subtotal rows
      // and their items in one flat list under "2.", each subtotal row closing out the items seen
      // since the previous one. Group on that basis instead, so a simpler real-world file still
      // parses rather than being treated as having no detail at all.
      let bucket = [];
      summaryItems.forEach(it=>{
        if(/만족도$/.test(it.label)){
          const bare = it.label.replace(/\s*만족도$/,'').replace(/^\[|\]$/g,'').trim();
          if(bare && !/^종합$/.test(bare)) categories.push({ name:bare, mean:it.mean, n:it.n, items:bucket });
          bucket = [];
        } else {
          bucket.push(it);
        }
      });
      if(bucket.length) categories.push({ name:'기타', mean:null, n:null, items:bucket });
    } else {
      // Attach each category's authoritative subtotal (mean/N) from section 2, matched by name.
      categories.forEach(cat=>{
        const sub = subtotalByName.get(cat.name);
        if(sub){ cat.mean = sub.mean; cat.n = sub.n; subtotalByName.delete(cat.name); }
        else if(cat.items.length){ cat.mean = mean(cat.items.map(it=>it.mean)); }
      });
      // A section-2 subtotal whose category never showed up in section 3 (rare) still surfaces as
      // its own category with no items, rather than being silently dropped.
      subtotalByName.forEach((sub, name)=>{ categories.push({ name, mean:sub.mean, n:sub.n, items:[] }); });
    }
    if(!overall){
      // No explicit "종합 만족도" row found — estimate from the category subtotals rather than
      // leaving the whole-camp figure blank, but label it clearly as an estimate, not the report's
      // own number.
      const withMean = categories.filter(c=>isFinite(c.mean));
      if(withMean.length) overall = { label:'종합 만족도(추정)', mean: mean(withMean.map(c=>c.mean)), n: null };
    }
    const items = categories.flatMap(c=>c.items).concat(summaryItems);
    return { title, items, overall, categories };
  }

  // ---- "effAgg" : official KYWA-style effectiveness (사전/사후) aggregate sheet — same file-name
  // prefix as satAgg but a different section layout ("3. 청소년활동 역량효과의 변화" instead of "2. 만족도").
  function detectAggKind(aoa){
    for(let i=0;i<aoa.length;i++){
      const c0 = aoa[i] && aoa[i][0] != null ? String(aoa[i][0]).trim() : '';
      if(/^3\./.test(c0) && /(역량|효과|변화)/.test(c0)) return 'eff';
      if(/^2\./.test(c0) && /만족/.test(c0)) return 'sat';
    }
    return null;
  }
  function parseEffAggregateSheet(aoa){
    const title = aoa[0] && aoa[0][0] ? String(aoa[0][0]).trim() : '';
    let start=-1, end=aoa.length;
    for(let i=0;i<aoa.length;i++){
      const c0 = aoa[i] ? aoa[i][0] : null;
      if(c0!=null && /^3\./.test(String(c0).trim())){ start=i+1; continue; }
      if(start>=0 && c0!=null && /^4\./.test(String(c0).trim())){ end=i; break; }
    }
    const rows = [];
    if(start>=0){
      for(let i=start;i<end;i++){
        const row = aoa[i];
        if(!row) continue;
        const label = row[0];
        const preMean=Number(row[1]), preSD=Number(row[2]), postMean=Number(row[3]), postSD=Number(row[4]), t=Number(row[5]), p=Number(row[6]);
        if(label!=null && String(label).trim()!=='' && isFinite(preMean) && isFinite(postMean) && !/^(구분|영역|역량명|하위요소)$/.test(String(label).trim())){
          rows.push({ label:String(label).trim(), preMean, preSD, postMean, postSD, n:null,
            t: isFinite(t)?t:null, p: isFinite(p)?p:null, effective: isFinite(p) ? (p<0.05?'Y':'N') : null });
        }
      }
    }
    return { title, rows };
  }

  // ---- "satRaw" : raw per-respondent export — detect open-text columns + guess the activity name ----
  function isRawResponseHeader(headerRow){
    if(!headerRow) return false;
    const norm = headerRow.map(h=>String(h||'').trim().toUpperCase());
    return norm.includes('UID') && norm.includes('NAME') && norm.includes('EMAIL');
  }
  // Some open-ended answers carry no real content — a respondent skipped the question and an
  // export/annotation step filled the cell with a placeholder note ("날짜만 기재", "무응답") or just
  // wrote a bare date. These add nothing to the subjective-opinion grouping and would otherwise
  // show up as a meaningless "cluster", so filter them out before they ever reach that feature.
  const FREE_TEXT_FILLER_RE = /^(날짜만\s*기재|무응답|응답\s*없음|해당\s*없음|없음|해당사항\s*없음|특이사항\s*없음|미기재|미응답|기재\s*안\s*함|n\/?a)$/i;
  const BARE_DATE_RE = /^\d{1,4}[.\-\/]\d{1,2}([.\-\/]\d{1,4})?\.?$/;
  function isGenuineFreeText(v){
    const s = String(v==null?'':v).trim();
    if(s.length < 2) return false;
    if(FREE_TEXT_FILLER_RE.test(s)) return false;
    if(BARE_DATE_RE.test(s)) return false;
    return true;
  }
  function analyzeRawResponseSheet(rows, headers){
    const metaSet = new Set(['UID','NAME','EMAIL','START_TIME','END_TIME','IP']);
    const cols = headers.filter(h=>!metaSet.has(String(h).toUpperCase())).map(h=>{
      const values = rows.map(r=>r[h]);
      return { key:h, role: guessColumnRole(h, values), values };
    });
    // grouped Likert columns (e.g. Q6_M1..M12) become one composite "per-respondent-mean" item
    // each — this lets us compute per-item satisfaction/effectiveness stats directly from a raw
    // response export even when there is no separate official aggregate report at all.
    const likertCols = cols.filter(c=>c.role==='likert');
    const groups = new Map(); const singleLikert = [];
    likertCols.forEach(c=>{
      const m = String(c.key).match(/^(.+)_M(\d+)$/i);
      if(m){ const prefix=m[1]; if(!groups.has(prefix)) groups.set(prefix, []); groups.get(prefix).push(c); }
      else singleLikert.push(c);
    });
    // Collect every likert item/group's raw values first so this sheet's answer-option direction
    // (see detectGroupDirection above) can be voted on across ALL of them before any item's score
    // is computed, then apply that one direction consistently to every item below.
    const likertGroupDefs = [];
    groups.forEach((colsInGroup, prefix)=>{
      likertGroupDefs.push({ prefix, cols: colsInGroup, values: colsInGroup.flatMap(c=>c.values), scaleMax: inferLikertScaleMax(colsInGroup.flatMap(c=>c.values)) });
    });
    singleLikert.forEach(c=>{
      likertGroupDefs.push({ prefix: String(c.key), cols:[c], values: c.values, scaleMax: inferLikertScaleMax(c.values) });
    });
    const sheetDirection = detectGroupDirection(likertGroupDefs);
    const likertItems = [];
    likertGroupDefs.forEach(def=>{
      const vals = def.cols.length > 1
        ? rows.map(r=>compositeRowValue(r, def.cols.map(c=>c.key))).filter(v=>v!=null)
        : def.cols[0].values.map(Number).filter(isFinite);
      // A "_M#"-suffixed column group is ambiguous from the raw codes alone: it's usually several
      // sub-items of ONE construct (e.g. an effectiveness competency's behavior items, which
      // genuinely should be averaged into one composite score) but can also be a "여러 대상을 각각
      // 평가" matrix question — e.g. "이 캠프의 각 프로그램에 얼마나 만족하십니까" with one row per
      // program (WORK:ON, TRY:ON, ...), where each _M column is a COMPLETELY DIFFERENT target, not
      // a sub-item of the same thing. Averaging those together (72.1점 WORK:ON blended with 97.1점
      // TRY:ON into one "Q9=87점") would silently erase exactly the per-item variance a report
      // needs to show. Since this function can't tell the two cases apart from anonymized codes
      // alone, every sub-column's own score is preserved here (subItems) alongside the composite,
      // so a consumer that later can't resolve the composite to a single real name can fall back to
      // showing the disaggregated per-column breakdown instead of a misleadingly blended number.
      const subItems = def.cols.length > 1 ? def.cols.map(c=>{
        const colVals = c.values.map(Number).filter(isFinite);
        return colVals.length ? { key:c.key, mean: toScore100(goodnessScore(mean(colVals), def.scaleMax, sheetDirection), def.scaleMax), n: colVals.length } : null;
      }).filter(Boolean) : null;
      if(vals.length) likertItems.push({ label: def.prefix, mean: toScore100(goodnessScore(mean(vals), def.scaleMax, sheetDirection), def.scaleMax), n: vals.length, itemCols: def.cols.map(c=>c.key), _prefix: def.prefix, _direction: sheetDirection, subItems });
    });
    const incidentCols = cols.filter(c=>c.role==='incident');
    const incidents = [];
    incidentCols.forEach(c=>{
      c.values.forEach(v=>{
        const parsed = parseIncidentValue(v);
        if(parsed.flagged && parsed.note) incidents.push('[' + c.key + '] ' + parsed.note);
      });
    });
    const textCols = cols.filter(c=>c.role==='text');
    textCols.forEach(c=>{
      // Korean short answers ("감사합니다", "다 좋았습니다.") aren't space-delimited into many
      // tokens the way English sentences are, so word count under-detects genuine feedback —
      // use character length (already >=6 to be classified 'text' at all) as the signal instead.
      // Filler placeholders ("날짜만 기재", a bare date) are excluded from this average too, so a
      // column that's mostly genuine feedback isn't dragged under the threshold by a few blanks.
      const nonNull = c.values.filter(v=>v!=null && isGenuineFreeText(v));
      c.sentenceLike = nonNull.length ? mean(nonNull.map(v=>String(v).trim().length)) >= 8 : false;
    });
    const sentenceCols = textCols.filter(c=>c.sentenceLike);
    // activity-name guess: any non-Likert column dominated by one repeated short value (e.g. school name)
    let guessedName = null, bestShare = 0;
    cols.forEach(c=>{
      if(c.role === 'likert' || c.role === 'incident') return;
      const nonNull = c.values.filter(v=>v!=null && String(v).trim()!=='').map(v=>String(v).trim());
      if(nonNull.length < rows.length*0.3) return;
      const numericRatio = nonNull.filter(v=>isFinite(Number(v))).length / nonNull.length;
      if(numericRatio > 0.5) return;
      const freq = new Map();
      nonNull.forEach(v=>freq.set(v, (freq.get(v)||0)+1));
      if(freq.size > nonNull.length*0.5) return; // too many distinct values -> genuine free text, not a label
      let topVal=null, topCount=0;
      freq.forEach((cnt,val)=>{ if(cnt>topCount){ topCount=cnt; topVal=val; } });
      const share = topCount/nonNull.length;
      if(share > bestShare){ bestShare = share; guessedName = topVal; }
    });
    const texts = [];
    sentenceCols.forEach(c=>{ c.values.forEach(v=>{ if(v!=null && isGenuineFreeText(v)) texts.push(String(v).trim()); }); });
    return { n: rows.length, texts, guessedName: bestShare>0.3 ? guessedName : null, likertItems, incidents, rows, headers };
  }

  // ---- classify one unzipped entry into 0+ bulk file records ----
  // Everything now comes through ONE unified upload (a zip of mixed files, or several files
  // picked at once), so there is no upload-slot context to lean on any more — every file must be
  // classified purely from its name/extension and content:
  //   .hwpx/.docx/.txt              -> survey form text (battery/문항 extraction)
  //   HTML-table-in-.xls            -> official 효과성 리포트 (eff)
  //   aggregate sheet (제목 "1./2./3.") -> effAgg vs satAgg via detectAggKind() (content-based)
  //   raw per-respondent export     -> effRaw (Likert only) vs satRaw (has genuine free-text answers)
  async function classifyBulkEntry(name, arrayBuffer){
    if(/\.hwpx$/i.test(name)){
      try{
        const raw = await extractHwpxText(arrayBuffer);
        return [{ name, kind:'surveyForm', raw }];
      }catch(e){ return [{ name, kind:'unknown', error:String(e && e.message || e) }]; }
    }
    if(/\.docx$/i.test(name)){
      try{
        const raw = await extractDocxText(arrayBuffer);
        return [{ name, kind:'surveyForm', raw }];
      }catch(e){ return [{ name, kind:'unknown', error:String(e && e.message || e) }]; }
    }
    if(/\.txt$/i.test(name)){
      let raw = '';
      try{ raw = new TextDecoder('utf-8').decode(arrayBuffer); }catch(e){}
      return [{ name, kind:'surveyForm', raw }];
    }
    const isOle = bytesStartWith(arrayBuffer, [0xD0,0xCF,0x11,0xE0]);
    if(!isOle){
      let text = null;
      try{ text = new TextDecoder('utf-8').decode(arrayBuffer); }catch(e){}
      if(text && /<table/i.test(text)){
        const parsed = parseEffHtmlReportText(text);
        if(parsed){
          const activity = parseActivityTitle(parsed.caption) || { key:'file:'+name, label:name };
          return [{ name, kind:'eff', parsed, activityKey:activity.key, activityLabel:activity.label, activityCamp:activity.camp||activity.label, activityReportType:activity.reportType }];
        }
      }
    }
    try{
      const wb = XLSX.read(arrayBuffer, { type:'array', cellDates:true });
      const aggEntries = [];
      let rawEntry = null;
      for(const sheetName of wb.SheetNames){
        const ws = wb.Sheets[sheetName];
        const aoa = XLSX.utils.sheet_to_json(ws, { header:1, defval:null });
        if(!aoa.length) continue;
        const titleGuess = aoa[0][0];
        if(typeof titleGuess === 'string' && BULK_TITLE_RE.test(titleGuess.trim())){
          const detected = detectAggKind(aoa) || 'sat';
          if(detected === 'eff'){
            const parsed = parseEffAggregateSheet(aoa);
            const activity = parseActivityTitle(parsed.title) || { key:'file:'+name+':'+sheetName, label:name };
            if(parsed.rows.length) aggEntries.push({ name: name + ' · ' + sheetName, kind:'effAgg', sheetName, parsed, activityKey:activity.key, activityLabel:activity.label, activityCamp:activity.camp||activity.label, activityReportType:activity.reportType });
          } else {
            const parsed = parseSatAggregateSheet(aoa);
            const activity = parseActivityTitle(parsed.title) || { key:'file:'+name+':'+sheetName, label:name };
            if(parsed.items.length) aggEntries.push({ name: name + ' · ' + sheetName, kind:'satAgg', sheetName, parsed, activityKey:activity.key, activityLabel:activity.label, activityCamp:activity.camp||activity.label, activityReportType:activity.reportType });
          }
          continue;
        }
        if(!rawEntry && isRawResponseHeader(aoa[0])){
          const rows = XLSX.utils.sheet_to_json(ws, { defval:null, raw:true });
          const headers = aoa[0].map(h=>String(h));
          const analyzed = analyzeRawResponseSheet(rows, headers);
          const label = analyzed.guessedName || name.replace(/\.(xlsx?|csv)$/i,'');
          // No upload-slot context any more — tell effectiveness (효과성) raw exports apart from
          // satisfaction (만족도) raw exports by whether they carry genuine open-ended answers:
          // satisfaction surveys almost always have free-text feedback, pre/post competency
          // exports almost never do.
          const kind = analyzed.texts.length > 0 ? 'satRaw' : 'effRaw';
          let guessedRole = null;
          if(kind === 'effRaw'){
            if(/사전|pre/i.test(name)) guessedRole = 'pre';
            else if(/사후|post/i.test(name)) guessedRole = 'post';
          }
          rawEntry = { name, kind, sheetName, parsed:analyzed, activityKey: kind+':'+label, activityLabel:label, guessedRole };
        }
      }
      if(aggEntries.length) return aggEntries;
      if(rawEntry) return [rawEntry];
      return [{ name, kind:'unknown' }];
    }catch(e){
      return [{ name, kind:'unknown', error:String(e && e.message || e) }];
    }
  }

  async function unzipToEntries(fileList){
    const extRe = /\.(xlsx?|htm|html|hwpx|docx|txt)$/i;
    const entries = [];
    for(const f of fileList){
      if(/\.zip$/i.test(f.name)){
        if(typeof JSZip === 'undefined'){ await showAlertModal('zip 처리 라이브러리를 불러오지 못했습니다. 새로고침 후 다시 시도해주세요.'); continue; }
        try{
          const zip = await JSZip.loadAsync(f);
          const inner = Object.values(zip.files).filter(zf=>
            !zf.dir && extRe.test(zf.name) &&
            !/^__MACOSX\//.test(zf.name) && !/^\./.test(zf.name.split('/').pop())
          );
          for(const zf of inner){
            const buf = await zf.async('arraybuffer');
            entries.push({ name: zf.name.split('/').pop(), arrayBuffer: buf });
          }
        }catch(e){ await showAlertModal('zip 파일을 여는 중 문제가 발생했습니다: ' + f.name); }
      } else {
        const buf = await f.arrayBuffer();
        entries.push({ name: f.name, arrayBuffer: buf });
      }
    }
    return entries;
  }

  // Unified upload: one input takes a zip (mixed files) or several files at once — no more
  // separate 설문양식/효과성/만족도 slots. Every extracted entry is classified purely from its
  // own name/content (classifyBulkEntry) and either folded into state.survey (설문 양식) or
  // appended to state.bulk.files (데이터 파일). Ends with an explicit modal summarizing exactly
  // what was recognized, since silently updating a status line was easy to miss.
  async function handleAllBulkFiles(fileList){
    const entries = await unzipToEntries(fileList);
    if(!entries.length){
      await showAlertModal('zip 또는 파일 안에서 처리할 수 있는 항목(.xls/.xlsx/.hwpx/.docx/.txt)을 찾지 못했습니다.');
      return;
    }
    $('#bulkStatus').textContent = entries.length + '개 파일 분석 중…';
    const results = [];
    let surveyFound = null;
    for(const e of entries){
      try{
        const rs = await classifyBulkEntry(e.name, e.arrayBuffer);
        rs.forEach(r=>{
          if(r.kind === 'surveyForm'){
            if(!surveyFound && r.raw){
              const batteries = parseSurveyFormText(r.raw);
              if(batteries.length) surveyFound = { name:r.name, batteries, raw:r.raw };
            }
          } else {
            results.push(r);
          }
        });
      }catch(err){ results.push({ name:e.name, kind:'unknown', error:String(err && err.message || err) }); }
    }
    results.forEach((r,i)=>{ r.id = 'f'+i+'_'+Date.now()+'_'+Math.floor(Math.random()*1e4); });
    state.bulk.files = state.bulk.files.concat(results);
    state.bulk.isSample = false;
    if(surveyFound){
      state.survey = { batteries: surveyFound.batteries, raw: surveyFound.raw };
      $('#surveyFormStatus').textContent = surveyFound.name + ' — 묶음 ' + surveyFound.batteries.length + '개 인식됨';
    }
    autoMergeRawEntries(state.bulk.files);
    rebuildBulkActivities();
    renderBulkAll();

    const counts = {};
    results.forEach(r=>{ counts[r.kind] = (counts[r.kind]||0) + 1; });
    const kindLabels = { eff:'효과성 리포트', effAgg:'효과성 집계', satAgg:'만족도 집계', effRaw:'효과성 원본 응답', satRaw:'만족도 원본 응답', unknown:'인식 실패' };
    const parts = [];
    if(surveyFound) parts.push('설문양식 인식됨 (' + surveyFound.batteries.length + '개 묶음)');
    Object.keys(counts).forEach(k=>{ if(k !== 'unknown') parts.push((kindLabels[k]||k) + ' ' + counts[k] + '개'); });
    const unknownCount = counts.unknown || 0;
    let summary = entries.length + '개 파일 업로드 완료\n\n' + (parts.length ? parts.join('\n') : '인식된 항목이 없습니다.');
    if(unknownCount) summary += '\n인식 실패 ' + unknownCount + '개 (아래 파일 목록에서 확인해주세요)';
    await showAlertModal(summary);
  }
  // If a raw response file's auto-guessed activity name (e.g. a venue/organization name from
  // the response data) doesn't match any official report by KEY, it used to stay as its own
  // separate, unmerged "activity" UNLESS the whole batch covered exactly one camp — so with
  // several camps uploaded together (the normal case for this tool), a raw file's satisfaction
  // data would silently end up in a second, disconnected activity entry instead of being deduped
  // against that camp's official aggregate report. Since the official entry's simplified display
  // label (see pickCampDisplayName) is often just the bare camp name, and the raw file's guessed
  // name is also typically that same organization/venue name, the two entries could go on to
  // render under an IDENTICAL-looking activity name while actually holding independently
  // computed (and possibly conflicting) numbers for the same item — exactly what produced two
  // different "지도자 전문성" scores under what looked like one activity. Now every camp/activity
  // known from an official report is a candidate match, not just a single overall anchor: a raw
  // file is merged into whichever known camp its guessed name matches (normalized, exact match
  // only — an ambiguous or absent match is left alone rather than guessed, so it can still be
  // corrected by hand from the uploaded-files review table).
  function normalizeCampName(s){
    return String(s==null?'':s).toLowerCase().replace(/[\s,._\-()（）·]/g,'');
  }
  function autoMergeRawEntries(allFiles){
    const anchors = []; const seen = new Set();
    allFiles.forEach(f=>{
      if((f.kind==='eff'||f.kind==='effAgg'||f.kind==='satAgg') && !seen.has(f.activityKey)){
        seen.add(f.activityKey);
        anchors.push({ key: f.activityKey, label: f.activityLabel, camp: f.activityCamp || f.activityLabel });
      }
    });
    if(!anchors.length) return;
    allFiles.forEach(f=>{
      if((f.kind!=='satRaw' && f.kind!=='effRaw') || f.userAssigned) return;
      if(anchors.length === 1){
        f.activityKey = anchors[0].key;
        f.activityLabel = anchors[0].label;
        return;
      }
      const guess = normalizeCampName(f.activityLabel);
      if(!guess) return;
      const matches = anchors.filter(a => normalizeCampName(a.camp) === guess || normalizeCampName(a.label) === guess);
      if(matches.length === 1){
        f.activityKey = matches[0].key;
        f.activityLabel = matches[0].label;
      }
    });
  }

  function activityLabelFor(key, autoLabel){
    return state.bulk.labelOverrides.has(key) ? state.bulk.labelOverrides.get(key) : autoLabel;
  }
  // Builds the display-ready satisfaction item list for one satRaw file: resolves each raw
  // column/group against the uploaded survey form (matchSurveyBatteries), then against any manual
  // name the user typed in for it (state.bulk.itemNameOverrides — see renderBulkFileTable), and
  // falls back to per-column disaggregation for a still-unresolved multi-column group so real
  // per-item variance isn't silently averaged away. Shared by rebuildBulkActivities (to build the
  // actual displayed numbers) and renderBulkFileTable (to know which items still need a name typed
  // in) so the two never disagree about what counts as "unresolved".
  function buildSatRawDisplayItems(f){
    if(!f || !f.parsed || !f.parsed.likertItems || !f.parsed.likertItems.length) return [];
    const matched = matchSurveyBatteries(f.parsed.likertItems.map(it=>({ prefix: it._prefix, itemCols: it.itemCols })), state.survey.batteries);
    const items = [];
    f.parsed.likertItems.forEach(it=>{
      const resolved = matched.get(it._prefix);
      const overrideKey = f.id + '::' + it._prefix;
      const manualName = state.bulk.itemNameOverrides.get(overrideKey);
      if(!resolved && !manualName && it.subItems && it.subItems.length > 1){
        // Multi-column group we couldn't resolve to one real name — rather than average several
        // possibly-unrelated targets into one misleading composite (see the comment in
        // analyzeRawResponseSheet), surface each raw column's own score so at least the real
        // spread between items is visible, and each can be named individually.
        it.subItems.forEach((sub, idx)=>{
          const subKey = f.id + '::' + sub.key;
          const subManual = state.bulk.itemNameOverrides.get(subKey);
          items.push({ label: subManual || (it._prefix + '-' + (idx+1)), mean: sub.mean, n: sub.n, unresolved: !subManual, _overrideKey: subKey });
        });
        return;
      }
      items.push({ label: manualName || resolved || it.label, mean: it.mean, n: it.n, unresolved: !resolved && !manualName, _overrideKey: overrideKey });
    });
    return items;
  }
  function rebuildBulkActivities(){
    const map = new Map();
    function getActivity(key, label){
      if(!map.has(key)) map.set(key, { label, eff:[], satAgg:[], texts:[], rawN:0, files:[], incidents:[], effRawFiles:[] });
      const a = map.get(key); a.label = label; return a;
    }
    state.bulk.files.forEach(f=>{
      if(f.kind==='unknown') return;
      const label = activityLabelFor(f.activityKey, f.activityLabel);
      const a = getActivity(f.activityKey, label);
      a.files.push(f);
      if(f.kind==='eff' && f.parsed) f.parsed.rows.forEach(r=>a.eff.push({ ...r, sourceFile:f.name, _src:'eff' }));
      if(f.kind==='effAgg' && f.parsed) f.parsed.rows.forEach(r=>a.eff.push({ ...r, sourceFile:f.name, _src:'effAgg' }));
      if(f.kind==='satAgg' && f.parsed) a.satAgg.push({ sheet:f.sheetName, reportType:f.activityReportType, items:f.parsed.items, overall:f.parsed.overall, categories:f.parsed.categories, sourceFile:f.name, _src:'satAgg' });
      if(f.kind==='satRaw' && f.parsed){
        a.texts.push(...f.parsed.texts);
        a.rawN += f.parsed.n;
        if(f.parsed.likertItems && f.parsed.likertItems.length){
          const items = buildSatRawDisplayItems(f);
          // Held back from a.satAgg for now — see the dedup pass just below, which only keeps this
          // best-effort raw-response-derived reconstruction when NO official aggregate report
          // exists for this activity at all. Pushing it unconditionally previously caused an
          // official "92.0점" and a rough raw-derived "100.0점" to both show up labeled as the same
          // metric side by side — the official report is always the authoritative number.
          a._satRawDerived = a._satRawDerived || [];
          a._satRawDerived.push({ sheet:'만족도(원본 응답 기반, 공식 집계표 없음)', items, sourceFile:f.name, _src:'satRaw' });
        }
        if(f.parsed.incidents && f.parsed.incidents.length) a.incidents.push(...f.parsed.incidents.map(note=>({ note, sourceFile:f.name })));
      }
      if(f.kind==='effRaw' && f.parsed) a.effRawFiles.push(f);
    });
    // Only fall back to raw-response-derived satisfaction items when this activity has NO official
    // aggregate report at all — an official report's numbers are the ones camp staff actually use,
    // so a rough per-column average computed from the raw export must never be shown alongside it
    // as if it were an equally-authoritative second reading of the same thing.
    map.forEach(a=>{
      const hasOfficial = a.satAgg.some(s=>s._src==='satAgg');
      if(!hasOfficial && a._satRawDerived && a._satRawDerived.length) a.satAgg.push(...a._satRawDerived);
      delete a._satRawDerived;
    });
    // dedupe eff rows per activity by indicator label — prefer the richer 'eff' (HTML report,
    // has N/CI/effective flag) source over 'effAgg' (KYWA summary sheet, no N) when both exist.
    map.forEach(a=>{
      const byLabel = new Map();
      a.eff.forEach(r=>{
        const key = r.label;
        const existing = byLabel.get(key);
        if(!existing || (existing._src==='effAgg' && r._src!=='effAgg')) byLabel.set(key, r);
      });
      a.eff = Array.from(byLabel.values());
    });
    // pair up 사전/사후 effRaw raw-response files per activity and compute composite indicators
    // directly from the grouped Likert columns (Q4_M1..M8 style), then rename via the parsed
    // survey-form batteries instead of the meaningless "Qn 종합점수 (핵심역량명 입력)" placeholder.
    map.forEach(a=>{
      if(!a.effRawFiles.length) return;
      const roleOf = f => state.bulk.roleOverrides.get(f.id) || f.guessedRole || null;
      const preFiles = a.effRawFiles.filter(f=>roleOf(f)==='pre');
      const postFiles = a.effRawFiles.filter(f=>roleOf(f)==='post');
      if(!preFiles.length || !postFiles.length) return;
      const preRows = preFiles.flatMap(f=>f.parsed.rows);
      const postRows = postFiles.flatMap(f=>f.parsed.rows);
      const preHeaders = preFiles[0].parsed.headers, postHeaders = postFiles[0].parsed.headers;
      const groups = detectIndicatorGroups(preHeaders, postHeaders, preRows, postRows);
      const matched = matchSurveyBatteries(groups, state.survey.batteries);
      // Same answer-option-direction risk as the satisfaction raw-response path above (see
      // detectGroupDirection): detect this file's own circle-number convention once, from all of
      // its indicator groups together, so a genuine improvement doesn't get displayed backwards.
      const groupDefs = groups.map(g=>{
        const preVals = collectValues(preRows, g.itemCols || g.preCol);
        const postVals = collectValues(postRows, g.itemCols || g.postCol);
        return { g, preVals, postVals, values: preVals.concat(postVals), scaleMax: inferLikertScaleMax(preVals.concat(postVals)) };
      });
      const fileDirection = detectGroupDirection(groupDefs);
      groupDefs.forEach(def=>{
        const { g, preVals, postVals, scaleMax } = def;
        if(preVals.length < 2 || postVals.length < 2) return;
        const stat = welchTTest(preVals, postVals);
        if(!stat) return;
        const label = matched.get(g.prefix) || g.label;
        if(a.eff.some(r=>r.label===label)) return; // already covered by an official report
        a.eff.push({
          label,
          preMean: toScore100(goodnessScore(stat.preMean, scaleMax, fileDirection), scaleMax),
          postMean: toScore100(goodnessScore(stat.postMean, scaleMax, fileDirection), scaleMax),
          n: stat.n, t: stat.t, p: stat.p, effective: stat.p<0.05?'Y':'N',
          sourceFile: preFiles.map(f=>f.name).join('+') + ' / ' + postFiles.map(f=>f.name).join('+'), _src:'effRaw'
        });
      });
    });
    state.bulk.activities = map;
  }

  /* ===================== saved camps (shared db) =====================
     A "camp" here is a fully-computed snapshot of one activity set: the resolved eff/satisfaction
     indicators, comments and incident notes — NOT the raw uploaded files (those can't usefully be
     re-parsed later and would blow past the per-document size limit). Saving is an explicit action
     so different camps (different 교급, different 핵심역량 sets) never get silently merged together;
     the analysis views below draw from whichever combination of saved camps + the current in-progress
     workspace the user has selected via state.view. */
  function serializeActivitiesForSave(map){
    return Array.from(map.entries()).map(([key,a])=>({
      key, label:a.label,
      eff:(a.eff||[]).map(r=>({ label:r.label, preMean:r.preMean, postMean:r.postMean, n:r.n, t:r.t, p:r.p, effective:r.effective })),
      satAgg:(a.satAgg||[]).map(s=>({ sheet:s.sheet, items:(s.items||[]).map(it=>({ label:it.label, mean:it.mean, n:it.n })) })),
      texts:(a.texts||[]).slice(0,2000),
      rawN:a.rawN||0,
      incidents:(a.incidents||[]).map(inc=>(inc&&inc.note)!=null?inc.note:inc)
    }));
  }
  function deserializeSavedActivities(campDoc, namespacePrefix){
    const map = new Map();
    (campDoc.activities||[]).forEach(a=>{
      map.set(namespacePrefix+a.key, {
        label:a.label, eff:a.eff||[], satAgg:a.satAgg||[], texts:a.texts||[], rawN:a.rawN||0,
        incidents:(a.incidents||[]).map(note=>({ note })), files:[], effRawFiles:[]
      });
    });
    return map;
  }
  // The single source of truth every analysis view below reads from: the current in-progress
  // workspace (if included) plus every saved camp the user has ticked on, merged into one map.
  function combinedActivities(){
    const map = new Map();
    if(state.view.includeCurrent){
      state.bulk.activities.forEach((a,k)=>map.set('cur::'+k, a));
    }
    state.saved.forEach(camp=>{
      if(!state.view.selectedSavedIds.has(camp.id)) return;
      deserializeSavedActivities(camp, 'saved:'+camp.id+'::').forEach((a,k)=>map.set(k,a));
    });
    return map;
  }
  async function initSavedCamps(){
    try{
      state.dbNs = (window.claude && typeof window.claude.use === 'function') ? await window.claude.use('db') : null;
    }catch(e){ state.dbNs = null; }
    if(!state.dbNs){ state.savedLoading = false; renderSavedList(); return; }
    try{
      state.dbNs.collection('camps').orderBy('savedAt','desc').onSnapshot(
        (snap)=>{
          state.saved = snap.docs.map(d=>({ id:d.id, ...(d.data()||{}) }));
          state.savedLoading = false;
          // drop selections for camps that no longer exist
          const liveIds = new Set(state.saved.map(c=>c.id));
          Array.from(state.view.selectedSavedIds).forEach(id=>{ if(!liveIds.has(id)) state.view.selectedSavedIds.delete(id); });
          renderSavedList();
          renderBulkAll();
        },
        ()=>{ state.savedLoading = false; renderSavedList(); }
      );
    }catch(e){ state.savedLoading = false; renderSavedList(); }
  }
  async function saveCurrentCamp(){
    if(!state.dbNs){ await showAlertModal('저장 기능을 사용할 수 없는 화면입니다.'); return; }
    if(!state.bulk.activities.size){ await showAlertModal('저장할 분석 결과가 없습니다. 먼저 파일을 업로드해주세요.'); return; }
    const defaultName = Array.from(state.bulk.activities.values()).map(a=>a.label).slice(0,2).join(', ') || '새 캠프 기록';
    const name = await showPromptModal('저장할 캠프/차수의 이름을 입력하세요 (예: 온택트 캠프 2차 · 초등부):', defaultName);
    if(name == null) return; // cancelled
    const btn = $('#saveCampBtn');
    if(btn) btn.disabled = true;
    try{
      await state.dbNs.collection('camps').add({
        name: name.trim() || defaultName,
        savedAt: new Date().toISOString(),
        activities: serializeActivitiesForSave(state.bulk.activities)
      });
      renderSavedList();
      const listCard = $('#savedCampList');
      if(listCard && listCard.scrollIntoView) listCard.scrollIntoView({ behavior:'smooth', block:'nearest' });
      await showAlertModal('"' + (name.trim() || defaultName) + '" 캠프로 저장되었습니다. 아래 저장된 캠프 목록에서 확인할 수 있습니다.');
    }catch(e){
      await showAlertModal('저장 중 문제가 발생했습니다: ' + (e && e.message ? e.message : e));
    }finally{
      if(btn) btn.disabled = false;
    }
  }
  async function deleteSavedCamp(id){
    if(!state.dbNs) return;
    if(!(await showConfirmModal('이 저장된 캠프 기록을 삭제할까요? 되돌릴 수 없습니다.'))) return;
    try{ await state.dbNs.collection('camps').doc(id).delete(); }
    catch(e){ await showAlertModal('삭제 중 문제가 발생했습니다: ' + (e && e.message ? e.message : e)); }
  }
  async function resetCurrentWorkspace(){
    if(!(await showConfirmModal('현재 업로드한 파일과 분석 결과를 모두 지우고 초기화하겠습니까?\n(저장된 캠프 기록은 지워지지 않습니다)'))) return;
    state.bulk = { files: [], labelOverrides: new Map(), roleOverrides: new Map(), itemNameOverrides: new Map(), activities: new Map(), clusterResult: null, insight: null, isSample: false };
    state.survey = { batteries: [], raw: '' };
    $('#bulkClusterOverall').className = 'report-output empty';
    $('#bulkClusterOverall').textContent = '위 버튼을 누르면 모든 활동의 주관식 응답을 주제별로 묶어 빈도순으로 정리합니다. 실제 응답 텍스트만 근거로 사용되며, 새로운 내용은 만들어내지 않습니다.';
    $('#bulkClusterByActivity').innerHTML = ''; $('#bulkClusterByActivity').className = 'report-output empty';
    $('#saveBulkClusterBtn').disabled = true;
    $('#bulkFileListCard').hidden = true;
    renderBulkAll();
  }
  function renderSavedList(){
    const box = $('#savedCampList');
    if(!box) return;
    if(!state.dbNs){
      box.className = 'report-output empty';
      box.textContent = '이 화면에서는 저장 기능을 사용할 수 없습니다 (캠프별로 나눠 분석한 뒤 나중에 다시 볼 수는 없지만, 지금 업로드한 데이터로 분석은 계속 사용할 수 있습니다).';
      return;
    }
    if(state.savedLoading){ box.className = 'report-output empty'; box.textContent = '저장된 캠프 기록을 불러오는 중…'; return; }
    if(!state.saved.length){ box.className = 'report-output empty'; box.textContent = '아직 저장된 캠프가 없습니다. 위에서 파일을 업로드해 분석한 뒤 "이 캠프 저장" 버튼을 눌러보세요.'; return; }
    box.className = '';
    box.innerHTML = '';
    const curRow = htmlEl('label', { class:'saved-camp-row saved-camp-current' });
    const curCb = htmlEl('input', { type:'checkbox' });
    curCb.checked = state.view.includeCurrent;
    curCb.addEventListener('change', ()=>{ state.view.includeCurrent = curCb.checked; renderBulkAll(); });
    curRow.appendChild(curCb);
    curRow.appendChild(htmlEl('span', { class:'saved-camp-name' }, '현재 작업 중인 내용 (' + state.bulk.activities.size + '개 활동, 아직 저장 안 함)'));
    box.appendChild(curRow);
    state.saved.forEach(camp=>{
      const row = htmlEl('div', { class:'saved-camp-row' });
      const label = htmlEl('label', { style:'display:flex;align-items:center;gap:8px;flex:1;min-width:0;cursor:pointer;' });
      const cb = htmlEl('input', { type:'checkbox' });
      cb.checked = state.view.selectedSavedIds.has(camp.id);
      cb.addEventListener('change', ()=>{
        if(cb.checked) state.view.selectedSavedIds.add(camp.id); else state.view.selectedSavedIds.delete(camp.id);
        renderBulkAll();
      });
      label.appendChild(cb);
      const savedDate = camp.savedAt ? new Date(camp.savedAt).toLocaleString('ko-KR') : '';
      label.appendChild(htmlEl('span', { class:'saved-camp-name' }, (camp.name||'(이름 없음)') + ' · ' + (camp.activities?camp.activities.length:0) + '개 활동 · ' + savedDate));
      row.appendChild(label);
      const delBtn = htmlEl('button', { type:'button', class:'mrow-del', title:'삭제' }, '✕');
      delBtn.addEventListener('click', ()=>deleteSavedCamp(camp.id));
      row.appendChild(delBtn);
      box.appendChild(row);
    });
  }

  function renderBulkFileTable(){
    const card = $('#bulkFileListCard');
    const files = state.bulk.files;
    if(!files.length){ card.hidden = true; return; }
    card.hidden = false;
    const table = $('#bulkFileTable');
    table.innerHTML = '';
    const thead = htmlEl('thead'); const hr = htmlEl('tr');
    ['파일명','인식된 유형','활동명','사전/사후','상세',''].forEach(h=>hr.appendChild(htmlEl('th', { style:'text-align:left;' }, h)));
    thead.appendChild(hr); table.appendChild(thead);
    const tbody = htmlEl('tbody');
    const kindLabel = { eff:'효과성 리포트', effAgg:'효과성 집계(KYWA)', effRaw:'효과성 원본 응답', satAgg:'만족도 집계 리포트', satRaw:'만족도/주관식 원본 응답', unknown:'인식 안 됨' };
    const rawKinds = new Set(['satRaw','effRaw']);
    files.forEach(f=>{
      const tr = htmlEl('tr');
      tr.appendChild(htmlEl('td', { style:'text-align:left;' }, f.name));
      const kindTd = htmlEl('td', { style:'text-align:left;' });
      kindTd.innerHTML = '<span class="pill ' + (f.kind==='unknown'?'ns':'sig') + '">' + (kindLabel[f.kind]||f.kind) + '</span>';
      tr.appendChild(kindTd);
      const nameTd = htmlEl('td', { style:'text-align:left;' });
      if(rawKinds.has(f.kind)){
        const ownKey = f.activityKey, ownLabel = activityLabelFor(f.activityKey, f.activityLabel);
        const knownKeys = new Set();
        const opts = [];
        state.bulk.files.forEach(other=>{
          // A raw response file's auto-guessed name (e.g. a venue name) very often needs to be
          // merged into the camp activity that an effectiveness/satisfaction report already
          // established, so every known activity should be selectable here.
          if((other.kind==='eff'||other.kind==='effAgg'||other.kind==='satAgg') && !knownKeys.has(other.activityKey)){
            knownKeys.add(other.activityKey);
            opts.push({ key: other.activityKey, label: activityLabelFor(other.activityKey, other.activityLabel) });
          }
        });
        const select = htmlEl('select', { class:'bulk-name-input' });
        select.appendChild(htmlEl('option', { value: ownKey }, '(별도 활동) ' + ownLabel));
        opts.forEach(o=>{
          const opt = htmlEl('option', { value:o.key }, o.label);
          if(o.key === f.activityKey) opt.setAttribute('selected','selected');
          select.appendChild(opt);
        });
        select.value = f.activityKey;
        select.addEventListener('change', ()=>{
          const chosen = opts.find(o=>o.key===select.value);
          f.activityKey = select.value;
          f.activityLabel = chosen ? chosen.label : ownLabel;
          f.userAssigned = true;
          rebuildBulkActivities(); renderBulkAll();
        });
        nameTd.appendChild(select);
        const renameInput = htmlEl('input', { type:'text', class:'bulk-name-input', style:'margin-top:4px;', placeholder:'별도 활동명 수정' });
        renameInput.value = ownLabel;
        renameInput.addEventListener('change', ()=>{
          if(select.value === ownKey){
            const v = renameInput.value.trim() || ownLabel;
            state.bulk.labelOverrides.set(f.activityKey, v);
            f.activityLabel = v;
            rebuildBulkActivities(); renderBulkAll();
          }
        });
        nameTd.appendChild(renameInput);
      } else if(f.kind !== 'unknown'){
        const input = htmlEl('input', { type:'text', class:'bulk-name-input' });
        input.value = activityLabelFor(f.activityKey, f.activityLabel) || '';
        input.addEventListener('change', ()=>{
          state.bulk.labelOverrides.set(f.activityKey, input.value);
          f.activityLabel = input.value;
          rebuildBulkActivities(); renderBulkAll();
        });
        nameTd.appendChild(input);
      } else {
        nameTd.textContent = '–';
      }
      tr.appendChild(nameTd);
      const roleTd = htmlEl('td', { style:'text-align:left;' });
      if(f.kind === 'effRaw'){
        const roleSelect = htmlEl('select', { class:'bulk-name-input' });
        const roleVal = state.bulk.roleOverrides.get(f.id) || f.guessedRole || '';
        [['','선택 안 함'],['pre','사전'],['post','사후']].forEach(([v,l])=>{
          const opt = htmlEl('option', { value:v }, l);
          if(v===roleVal) opt.setAttribute('selected','selected');
          roleSelect.appendChild(opt);
        });
        roleSelect.value = roleVal;
        roleSelect.addEventListener('change', ()=>{
          if(roleSelect.value) state.bulk.roleOverrides.set(f.id, roleSelect.value);
          else state.bulk.roleOverrides.delete(f.id);
          rebuildBulkActivities(); renderBulkAll();
        });
        roleTd.appendChild(roleSelect);
        if(!roleVal) roleTd.appendChild(htmlEl('div', { class:'muted', style:'font-size:11px;margin-top:2px;' }, '⚠ 지정 필요'));
      } else {
        roleTd.textContent = '–';
      }
      tr.appendChild(roleTd);
      const detailTd = htmlEl('td', { style:'text-align:left;font-size:12px;color:var(--ink-muted);' });
      if(f.kind==='eff' || f.kind==='effAgg') detailTd.textContent = (f.parsed.rows||[]).map(r=>r.label+(r.n!=null?' N='+r.n:'')).join(', ');
      else if(f.kind==='satAgg') detailTd.textContent = (f.parsed.items||[]).length + '개 항목';
      else if(f.kind==='satRaw'){
        detailTd.textContent = '응답 ' + f.parsed.n + '명 · 주관식 ' + f.parsed.texts.length + '건' + (f.parsed.likertItems&&f.parsed.likertItems.length?' · 만족도 문항 '+f.parsed.likertItems.length+'개':'') + (f.parsed.incidents&&f.parsed.incidents.length?' · 안전/인권 신고 '+f.parsed.incidents.length+'건':'');
        // "Q9"처럼 원본 코드 그대로인 문항은 설문양식을 올려도 매칭이 안 될 수 있다 (예: 문항지가
        // 캠프마다 다른 프로그램명을 채워 넣는 빈 서식이라 실제 이름이 문서 자체에는 없는 경우).
        // 그럴 때 여기서 실제 문항명을 직접 입력하면 바로 위 만족도 결과 전체에 반영된다.
        const unresolvedItems = buildSatRawDisplayItems(f).filter(it=>it.unresolved);
        if(unresolvedItems.length){
          const details = htmlEl('details', { style:'margin-top:6px;' });
          const summary = htmlEl('summary', { style:'cursor:pointer;color:var(--critical);font-weight:600;' }, '⚠️ 이름 확인 필요한 문항 ' + unresolvedItems.length + '개 — 직접 입력하기');
          details.appendChild(summary);
          const list = htmlEl('div', { style:'margin-top:6px;display:flex;flex-direction:column;gap:5px;' });
          unresolvedItems.forEach(it=>{
            const row = htmlEl('div', { style:'display:flex;align-items:center;gap:6px;' });
            row.appendChild(htmlEl('span', { class:'mono', style:'min-width:70px;color:var(--ink-muted);' }, it.label));
            const input = htmlEl('input', { type:'text', class:'bulk-name-input', style:'flex:1;', placeholder:'실제 문항명 입력 (예: 직원 친절도)' });
            input.addEventListener('change', ()=>{
              const v = input.value.trim();
              if(v) state.bulk.itemNameOverrides.set(it._overrideKey, v);
              else state.bulk.itemNameOverrides.delete(it._overrideKey);
              rebuildBulkActivities(); renderBulkAll();
            });
            row.appendChild(input);
            list.appendChild(row);
          });
          details.appendChild(list);
          detailTd.appendChild(details);
        }
      }
      else if(f.kind==='effRaw') detailTd.textContent = '응답 ' + f.parsed.n + '명 · 역량 문항군 ' + (f.parsed.likertItems||[]).length + '개 (사전/사후 지정 후 자동 계산)';
      else detailTd.textContent = f.error || '형식을 인식하지 못했습니다';
      tr.appendChild(detailTd);
      const delTd = htmlEl('td');
      const delBtn = htmlEl('button', { type:'button', class:'mrow-del', title:'이 파일 제거' }, '✕');
      delBtn.addEventListener('click', ()=>{
        state.bulk.files = state.bulk.files.filter(x=>x.id !== f.id);
        rebuildBulkActivities();
        renderBulkAll();
      });
      delTd.appendChild(delBtn);
      tr.appendChild(delTd);
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
  }

  function renderBulkTiles(){
    const wrap = $('#bulkTiles');
    wrap.innerHTML = '';
    const acts = Array.from(combinedActivities().values());
    const withEff = acts.filter(a=>a.eff.length);
    const sigCount = withEff.filter(a=>a.eff.some(r=>r.effective==='Y')).length;
    const withSat = acts.filter(a=>satAggForView(a).length);
    const overallSatVals = [];
    withSat.forEach(a=>{ satAggForView(a).forEach(s=>{
      // Prefer the official report's own "종합 만족도" row (s.overall) when this sheet has one;
      // only fall back to guessing from a loose "전반적" label match for older/raw-derived sheets
      // that never had a structured overall row at all.
      if(s.overall && isFinite(s.overall.mean)){ overallSatVals.push(s.overall.mean); return; }
      const o = s.items.find(it=>/전반적/.test(it.label));
      if(o) overallSatVals.push(o.mean);
    }); });
    const totalTexts = acts.reduce((s,a)=>s+a.texts.length,0);
    const audienceLabel = { youth:'청소년 기준', leader:'인솔자 기준', combined:'청소년+인솔자 합산' }[state.view.satAudience||'youth'];
    const tiles = [
      { label:'인식된 활동 수', value: acts.length, suffix:'개' },
      { label:'효과성 분석 가능', value: withEff.length, suffix:'개 활동' },
      { label:'효과 있음(Y) 활동', value: sigCount, suffix:'개 / ' + withEff.length + '개', accent:true },
      { label:'평균 종합 만족도 (' + audienceLabel + ')', value: overallSatVals.length ? fmt(mean(overallSatVals),1) : '–', suffix:'점 (100점 환산)' }
    ];
    tiles.forEach(t=>{
      const tile = htmlEl('div', { class:'tile' + (t.accent?' accent':'') });
      const v = htmlEl('div', { class:'t-value' });
      v.innerHTML = escapeHtml(String(t.value)) + ' <small>' + escapeHtml(t.suffix) + '</small>';
      tile.append(htmlEl('div', { class:'t-label' }, t.label), v);
      wrap.appendChild(tile);
    });
  }

  function bulkEffRows(){
    const rows = [];
    combinedActivities().forEach(a=>{
      a.eff.forEach(r=>{
        rows.push({
          activity: a.label, competency: r.label, n: r.n, pre: r.preMean, post: r.postMean,
          diff: (isFinite(r.postMean) && isFinite(r.preMean)) ? r.postMean - r.preMean : null,
          t: r.t, p: r.p, effective: r.effective
        });
      });
    });
    return rows;
  }
  let bulkEffSort = { key:'diff', dir:'desc' };
  function sortRowsBy(rows, sortState){
    return rows.slice().sort((a,b)=>{
      const k = sortState.key, dir = sortState.dir==='asc'?1:-1;
      let av=a[k], bv=b[k];
      if(av==null) av = -Infinity; if(bv==null) bv = -Infinity;
      if(typeof av === 'string') return av.localeCompare(bv) * dir;
      return (av-bv) * dir;
    });
  }
  function buildSortableHead(cols, sortState, onSort){
    const hr = htmlEl('tr');
    cols.forEach(c=>{
      const th = htmlEl('th', { class:'sortable', style: c.align==='left' ? 'text-align:left;' : '' });
      th.textContent = c.label + (sortState.key===c.key ? (sortState.dir==='asc'?' ▲':' ▼') : '');
      th.addEventListener('click', ()=>{
        if(sortState.key===c.key) sortState.dir = sortState.dir==='asc'?'desc':'asc';
        else { sortState.key=c.key; sortState.dir='desc'; }
        onSort();
      });
      hr.appendChild(th);
    });
    return hr;
  }
  function renderBulkEffTable(){
    const rows = bulkEffRows();
    const table = $('#bulkEffTable');
    table.innerHTML = '';
    if(!rows.length){ table.innerHTML = '<tbody><tr><td>효과성 리포트를 인식하지 못했습니다.</td></tr></tbody>'; return; }
    const cols = [
      { key:'activity', label:'활동명', align:'left' }, { key:'competency', label:'대상역량', align:'left' },
      { key:'n', label:'N' }, { key:'pre', label:'사전(0-100)' }, { key:'post', label:'사후(0-100)' },
      { key:'diff', label:'변화' }, { key:'p', label:'p' }, { key:'effective', label:'효과성', align:'left' }
    ];
    const thead = htmlEl('thead');
    thead.appendChild(buildSortableHead(cols, bulkEffSort, renderBulkEffTable));
    table.appendChild(thead);
    const tbody = htmlEl('tbody');
    sortRowsBy(rows, bulkEffSort).forEach(r=>{
      const sig = isFinite(r.p) && r.p<0.05;
      const tr = htmlEl('tr');
      tr.innerHTML =
        '<td style="text-align:left;">' + escapeHtml(r.activity) + '</td>' +
        '<td style="text-align:left;">' + escapeHtml(r.competency||'–') + '</td>' +
        '<td class="num">' + (r.n??'–') + '</td>' +
        '<td class="num">' + fmt(r.pre,1) + '</td>' +
        '<td class="num">' + fmt(r.post,1) + '</td>' +
        '<td class="num">' + (r.diff!=null ? ((r.diff>=0?'+':'')+fmt(r.diff,1)) : '–') + '</td>' +
        '<td class="num">' + (isFinite(r.p) ? (r.p<0.001?'&lt;.001':fmt(r.p,3)) : '–') + (sig?' <span class="pill sig">*</span>':'') + '</td>' +
        '<td style="text-align:left;">' + (r.effective==='Y' ? '<span class="pill big">Y</span>' : (r.effective? escapeHtml(r.effective) : '–')) + '</td>';
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
  }
  function bulkSatRows(){
    const rows = [];
    combinedActivities().forEach(a=>{
      satAggForView(a).forEach(s=>{
        // Prefer the official report's own "종합 만족도" row; only guess from a loose "전반적"
        // label (or just the first item) for sheets with no structured overall row at all.
        const overall = (s.overall && isFinite(s.overall.mean)) ? s.overall
          : (s.items.find(it=>/전반적/.test(it.label)) || s.items[0] || null);
        // Count only leaf items (via categories) when available, since s.items still
        // includes subtotal/overall rows like "종합 만족도"/"교육전달 만족도".
        const itemCount = (s.categories && s.categories.length)
          ? s.categories.reduce((sum,c)=>sum+(c.items||[]).length, 0)
          : (s.items||[]).length;
        rows.push({ activity:a.label, group:sheetGroupLabel(s), overall: overall?overall.mean:null, n: overall?overall.n:null, itemCount });
      });
    });
    return rows;
  }
  let bulkSatSort = { key:'overall', dir:'desc' };
  function renderBulkSatTable(){
    const rows = bulkSatRows();
    const table = $('#bulkSatTable');
    table.innerHTML = '';
    if(!rows.length){ table.innerHTML = '<tbody><tr><td>만족도 집계 리포트를 인식하지 못했습니다.</td></tr></tbody>'; return; }
    const cols = [
      { key:'activity', label:'활동명', align:'left' }, { key:'group', label:'응답군', align:'left' },
      { key:'overall', label:'전반적 만족도(100점)' }, { key:'n', label:'N' }, { key:'itemCount', label:'세부 항목 수' }
    ];
    const thead = htmlEl('thead');
    thead.appendChild(buildSortableHead(cols, bulkSatSort, renderBulkSatTable));
    table.appendChild(thead);
    const tbody = htmlEl('tbody');
    sortRowsBy(rows, bulkSatSort).forEach(r=>{
      const tr = htmlEl('tr');
      tr.innerHTML =
        '<td style="text-align:left;">' + escapeHtml(r.activity) + '</td>' +
        '<td style="text-align:left;">' + escapeHtml(r.group) + '</td>' +
        '<td class="num">' + fmt(r.overall,1) + '</td>' +
        '<td class="num">' + (r.n??'–') + '</td>' +
        '<td class="num">' + r.itemCount + '</td>';
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
  }
  const SAT_LOW_SCORE_THRESHOLD = 80;
  // A camp's satisfaction survey is often run as TWO separate questionnaires with their own
  // aggregate sheet/tab each — one for the youth participants (청소년/참가자) and one for the
  // accompanying leaders (인솔자/지도교사) — and these measure different populations' experience,
  // not the same thing twice. Blending them into one number (e.g. averaging a 87.0 youth score
  // with an 83.2 leader score into "85.1") produces a figure that doesn't actually describe either
  // group, which is exactly the kind of "confidently wrong composite" this tool must avoid — so any
  // place that combines satisfaction scores ACROSS an activity's sheets must keep leader-group
  // sheets out of that blend (or label them) rather than average them in unmarked.
  // The 인솔자/청소년 split can show up in either of two places depending on how the source file
  // is put together: the Excel TAB name (s.sheet, e.g. a "인솔자" tab), or — mirroring the
  // "[캠프][사전/사후]..." bracket the same report filenames use for effectiveness data — the
  // second bracket of the title row itself (parseActivityTitle's `reportType`, e.g.
  // "[조종청소년문화의집][인솔자]..."). Check both rather than guessing which one a given file uses.
  const LEADER_GROUP_RE = /인솔자|인솔\s*교사|지도\s*교사|지도자|보호자|성인|스탭|staff/i;
  function isLeaderGroupSheet(s){
    if(!s) return false;
    return LEADER_GROUP_RE.test(String(s.sheet||'')) || LEADER_GROUP_RE.test(String(s.reportType||''));
  }
  function sheetGroupLabel(s){
    return (s && (s.reportType || s.sheet)) || '';
  }
  // N-weighted merge of several {mean, n} readings of the SAME thing (e.g. youth's and the
  // leader's own score for "직원 친절도") into one combined reading — weighted by respondent count
  // when every reading has one, otherwise a plain average (still better than silently dropping a
  // reading just because its N wasn't recorded). Returns null when there is nothing to merge.
  function weightedMeanMerge(list){
    const usable = (list||[]).filter(x=>x && isFinite(x.mean));
    if(!usable.length) return null;
    const withN = usable.filter(x=>isFinite(x.n) && x.n > 0);
    if(withN.length === usable.length){
      const totalN = withN.reduce((s,x)=>s+x.n,0);
      return { mean: withN.reduce((s,x)=>s+x.mean*x.n,0)/totalN, n: totalN };
    }
    return { mean: mean(usable.map(x=>x.mean)), n: usable.reduce((s,x)=>s+(x.n||0),0) || null };
  }
  // Combines several satAgg-shaped entries (typically one 청소년 sheet + one 인솔자 sheet for the
  // same activity) into ONE merged entry with the same {overall, categories, items} shape, so
  // "합산" mode still renders as a single number per activity/category/item rather than two rows
  // side by side. Categories/items are matched by name across entries; anything that only appears
  // in one entry is kept as-is (nothing to combine it with). This is the DELIBERATE, user-chosen
  // counterpart to the bug fixed earlier in this project (silently blending 청소년+인솔자 into one
  // "평균 종합 만족도" tile) — here it only happens when the viewer explicitly selects the
  // "청소년+인솔자 합산" view, and the resulting numbers are clearly labeled as a combination.
  function combineSatAggEntries(entries){
    if(entries.length <= 1) return entries[0] || null;
    const overall = weightedMeanMerge(entries.map(e=>e.overall).filter(Boolean));
    const catOrder = [], catBuckets = new Map();
    entries.forEach(e=>{
      (e.categories||[]).forEach(cat=>{
        if(!catBuckets.has(cat.name)){ catBuckets.set(cat.name, { name:cat.name, subtotals:[], itemsByLabel:new Map(), itemOrder:[] }); catOrder.push(cat.name); }
        const bucket = catBuckets.get(cat.name);
        bucket.subtotals.push({ mean:cat.mean, n:cat.n });
        (cat.items||[]).forEach(it=>{
          if(!bucket.itemsByLabel.has(it.label)){ bucket.itemsByLabel.set(it.label, []); bucket.itemOrder.push(it.label); }
          bucket.itemsByLabel.get(it.label).push({ mean:it.mean, n:it.n });
        });
      });
    });
    const categories = catOrder.map(name=>{
      const bucket = catBuckets.get(name);
      const merged = weightedMeanMerge(bucket.subtotals);
      const items = bucket.itemOrder.map(label=>{
        const m = weightedMeanMerge(bucket.itemsByLabel.get(label));
        return m ? { label, mean:m.mean, n:m.n } : null;
      }).filter(Boolean);
      return { name, mean: merged?merged.mean:null, n: merged?merged.n:null, items };
    });
    const items = categories.flatMap(c=>c.items);
    return {
      sheet: '청소년+인솔자 합산', reportType: '합산',
      overall: overall ? { label:'종합 만족도(청소년+인솔자 합산)', mean:overall.mean, n:overall.n } : null,
      categories, items, _combined:true
    };
  }
  // Every rendering function should read an activity's satisfaction data through this — never
  // through a.satAgg directly — so all of them agree on what the current 청소년/인솔자/합산 toggle
  // (state.view.satAudience) means. 'youth'/'leader' just filter which sheets count; 'combined'
  // additionally merges them into one entry per activity (see combineSatAggEntries above).
  function satAggForView(a){
    const all = a.satAgg || [];
    const mode = state.view.satAudience || 'youth';
    if(mode === 'leader') return all.filter(s=>isLeaderGroupSheet(s));
    if(mode === 'combined'){
      const merged = combineSatAggEntries(all);
      return merged ? [merged] : [];
    }
    return all.filter(s=>!isLeaderGroupSheet(s));
  }
  // Renders each activity's official satisfaction aggregate report as one category → item table,
  // matching the source report's own layout (a bold "종합 만족도" row, then per category a bold
  // subtotal row with its items above it) instead of the flat "one number per activity" table
  // above — this is the "한눈에 보기 쉬운" breakdown, straight from parseSatAggregateSheet's
  // structured categories/overall (raw-response-only activities have neither, so are skipped here;
  // they still appear in the flat table and in the narrative ranking below).
  function renderBulkSatBreakdown(){
    const box = $('#bulkSatBreakdown');
    if(!box) return;
    const blocks = [];
    combinedActivities().forEach(a=>{
      satAggForView(a).forEach(s=>{
        if(s.categories && s.categories.length) blocks.push({ activity:a.label, sheet:sheetGroupLabel(s), overall:s.overall, categories:s.categories });
      });
    });
    if(!blocks.length){
      box.className = 'report-output empty';
      box.textContent = '공식 만족도 집계 리포트가 인식된 활동이 아직 없습니다. (원본 응답에서 계산한 값은 아래 "구체적으로 무엇이 좋았고 부족했나"와 전체 표에서 확인할 수 있습니다.)';
      return;
    }
    box.className = '';
    box.innerHTML = '';
    function scoreCell(mean){
      const low = isFinite(mean) && mean < SAT_LOW_SCORE_THRESHOLD;
      return '<td class="num' + (low?' sat-low':'') + '">' + fmt(mean,1) + '</td>';
    }
    blocks.forEach(blk=>{
      const wrap = htmlEl('div', { class:'sat-breakdown-block' });
      const title = htmlEl('div', { class:'sat-breakdown-title' }, blk.activity + (blk.sheet ? ' · ' + blk.sheet : ''));
      wrap.appendChild(title);
      const scroll = htmlEl('div', { class:'table-scroll' });
      const table = htmlEl('table', { class:'stats' });
      table.innerHTML = '<thead><tr><th style="text-align:left;">평가항목</th><th>점수(100점)</th></tr></thead>';
      const tbody = htmlEl('tbody');
      if(blk.overall && isFinite(blk.overall.mean)){
        const tr = htmlEl('tr', { class:'sat-overall' });
        tr.innerHTML = '<td>' + escapeHtml(blk.overall.label) + '</td>' + scoreCell(blk.overall.mean);
        tbody.appendChild(tr);
      }
      blk.categories.forEach(cat=>{
        (cat.items||[]).forEach(it=>{
          const tr = htmlEl('tr', { class:'sat-item' });
          tr.innerHTML = '<td>' + escapeHtml(it.label) + '</td>' + scoreCell(it.mean);
          tbody.appendChild(tr);
        });
        if(cat.mean!=null && isFinite(cat.mean)){
          const tr = htmlEl('tr', { class:'sat-cat' });
          tr.innerHTML = '<td>' + escapeHtml(cat.name) + ' 만족도</td>' + scoreCell(cat.mean);
          tbody.appendChild(tr);
        }
      });
      table.appendChild(tbody);
      scroll.appendChild(table);
      wrap.appendChild(scroll);
      box.appendChild(wrap);
    });
  }
  function renderBulkTopBottom(){
    const rows = bulkEffRows().filter(r=>r.diff!=null);
    function renderList(el, list){
      el.innerHTML = '';
      if(!list.length){ el.innerHTML = '<p class="chart-footnote">표시할 데이터가 없습니다.</p>'; return; }
      list.forEach((r,i)=>{
        const item = htmlEl('div', { class:'rank-item' });
        item.appendChild(htmlEl('div', { class:'rank-num' }, String(i+1)));
        const body = htmlEl('div', { class:'rank-body' });
        const top2 = htmlEl('div', { class:'rank-top' });
        top2.appendChild(htmlEl('span', { class:'rank-theme' }, r.activity));
        if(r.competency) top2.appendChild(htmlEl('span', { class:'rank-count' }, r.competency));
        body.appendChild(top2);
        body.appendChild(htmlEl('div', { class:'rank-examples' },
          (r.diff>=0?'+':'') + fmt(r.diff,1) + '점 변화 (사전 ' + fmt(r.pre,1) + ' → 사후 ' + fmt(r.post,1) + '), p=' + (isFinite(r.p)?fmt(r.p,3):'–')));
        item.appendChild(body);
        el.appendChild(item);
      });
    }
    renderList($('#bulkTopList'), rows.slice().sort((a,b)=>b.diff-a.diff).slice(0,5));
    renderList($('#bulkBottomList'), rows.slice().sort((a,b)=>a.diff-b.diff).slice(0,5));
  }

  // Item-level satisfaction rows (one row per activity × satisfaction item) — flattened across ALL
  // satAgg entries (official aggregate sheets AND, only where no official sheet exists for that
  // activity, per-item stats computed from satRaw), so specific areas like "시설", "안전관리",
  // "프로그램 내용" can be ranked individually rather than only a single collapsed number.
  //
  // For a sheet with structured categories (s.categories, from the official report), only LEAF
  // items are included here — never a category subtotal row like "교육전달 만족도" itself, which
  // would otherwise rank alongside its own constituent items as if it were an unrelated extra
  // item. Each leaf item carries its category name so a bare label like "직원 친절도" reads clearly
  // out of context ("교육전달 · 직원 친절도") instead of needing a separate lookup.
  function bulkSatItemRows(){
    const rows = [];
    combinedActivities().forEach(a=>{
      satAggForView(a).forEach(s=>{
        const isLeader = isLeaderGroupSheet(s);
        if(s.categories && s.categories.length){
          s.categories.forEach(cat=>{
            (cat.items||[]).forEach(it=>{
              if(it.mean==null || !isFinite(it.mean)) return;
              rows.push({ activity:a.label, label: it.label, category: cat.name, mean: it.mean, n: it.n, isLeader });
            });
          });
          return;
        }
        (s.items||[]).forEach(it=>{
          if(it.mean==null || !isFinite(it.mean)) return;
          rows.push({ activity:a.label, label: it.label, category: null, mean: it.mean, n: it.n, isLeader, unresolved: !!it.unresolved });
        });
      });
    });
    return rows;
  }
  const SAFETY_ITEM_RE = /안전|시설|위생|인권|보건|숙소|식사|급식|이동|차량/;
  function renderBulkNarrative(){
    const effBox = $('#bulkEffNarrative'), satBox = $('#bulkSatNarrative');
    if(effBox){
      const effRows = bulkEffRows().filter(r=>r.diff!=null);
      if(!effRows.length){
        effBox.className = 'report-output empty';
        effBox.textContent = '효과성(사전,사후) 데이터가 아직 없습니다. 업로드하면 어떤 역량이 특히 좋아졌고, 어떤 역량은 부족했는지 구체적으로 짚어드립니다.';
      } else {
        const sorted = effRows.slice().sort((a,b)=>b.diff-a.diff);
        const top = sorted.slice(0,3), bottom = sorted.slice(-3).reverse().filter(r=>!top.includes(r));
        let html = '<p><b>✅ 특히 효과가 좋았던 부분</b></p><ul>';
        top.forEach(r=>{
          const changeWord = r.diff > 0 ? '상승' : (r.diff < 0 ? '하락' : '변화 없음');
          html += '<li><b>' + escapeHtml(r.activity) + '</b> · ' + escapeHtml(r.competency||'') + ' — 사전 ' + fmt(r.pre,1) + '점 → 사후 ' + fmt(r.post,1) + '점 (' + (r.diff>=0?'+':'') + fmt(r.diff,1) + '점 ' + changeWord + (isFinite(r.p)&&r.p<0.05?', 통계적으로 유의':'') + ')</li>';
        });
        html += '</ul><p><b>⚠️ 효과가 부족했던 부분</b></p><ul>';
        if(!bottom.length) html += '<li>확인이 필요한 항목이 없습니다.</li>';
        bottom.forEach(r=>{
          const tone = r.diff<0 ? '오히려 낮아짐' : '변화가 거의 없음';
          html += '<li><b>' + escapeHtml(r.activity) + '</b> · ' + escapeHtml(r.competency||'') + ' — 사전 ' + fmt(r.pre,1) + '점 → 사후 ' + fmt(r.post,1) + '점 (' + tone + (isFinite(r.p)?', p=' + fmt(r.p,3):'') + ')</li>';
        });
        html += '</ul>';
        effBox.className = 'report-output'; effBox.innerHTML = html;
      }
    }
    if(satBox){
      const satRows = bulkSatItemRows();
      // Show every leaf item with its category for context (e.g. "교육전달 · 직원 친절도") instead
      // of a bare item name that means nothing to someone seeing this for the first time. Also flag
      // 인솔자(리더) 응답 항목 so it's never mistaken for the 청소년 응답 on the same-named item —
      // the two are different respondent groups and can legitimately score very differently.
      // 설문양식(문항지)이 업로드되지 않아 "Q9"처럼 원본 컬럼 코드 그대로 표시되는 항목은
      // 무엇을 묻는 문항인지 알 수 없으므로, 숫자만 조용히 보여주는 대신 눈에 띄게 경고한다.
      const unresolvedWarn = ' <span class="pill" style="background:var(--critical-soft);color:var(--critical);">⚠️ 문항 내용 확인 필요</span>';
      const satItemDisplay = r => (r.isLeader ? '<span class="pill" style="background:var(--surface-sunken);color:var(--ink-secondary);">인솔자</span> ' : '') + (r.category ? escapeHtml(r.category) + ' · ' : '') + escapeHtml(r.label) + (r.unresolved ? unresolvedWarn : '');
      if(!satRows.length){
        satBox.className = 'report-output empty';
        satBox.textContent = '만족도 데이터가 아직 없습니다. 업로드하면 프로그램/시설/안전 등 세부 항목별로 무엇이 좋았고 무엇이 부족했는지 짚어드립니다.';
      } else {
        const unresolvedCount = satRows.filter(r=>r.unresolved).length;
        const sorted = satRows.slice().sort((a,b)=>b.mean-a.mean);
        const top = sorted.slice(0,3), bottom = sorted.slice(-3).reverse().filter(r=>!top.includes(r));
        let html = '';
        if(unresolvedCount){
          html += '<p style="padding:10px 12px;border-radius:8px;background:var(--critical-soft);color:var(--critical);"><b>⚠️ 문항 내용을 확인할 수 없는 항목이 ' + unresolvedCount + '개 있습니다.</b> 원본 파일의 컬럼 코드(예: Q9)만으로는 실제로 무엇을 물어본 문항인지 알 수 없습니다. 해당 설문의 <b>설문양식(문항지) 파일</b>을 함께 업로드하면 문항명을 자동으로 매칭해서 보여드립니다.</p>';
        }
        html += '<p><b>✅ 긍정적으로 평가된 부분</b></p><ul>';
        top.forEach(r=>{ html += '<li><b>' + escapeHtml(r.activity) + '</b> · ' + satItemDisplay(r) + ' — ' + fmt(r.mean,1) + '점 (100점 환산' + (r.n?', N=' + r.n:'') + ')</li>'; });
        html += '</ul><p><b>⚠️ 낮게 평가되어 확인이 필요한 부분</b></p><ul>';
        if(!bottom.length) html += '<li>확인이 필요한 항목이 없습니다.</li>';
        bottom.forEach(r=>{
          const flag = SAFETY_ITEM_RE.test(r.label) ? ' <span class="pill" style="background:var(--critical-soft);color:var(--critical);">안전·시설 관련</span>' : '';
          html += '<li><b>' + escapeHtml(r.activity) + '</b> · ' + satItemDisplay(r) + ' — ' + fmt(r.mean,1) + '점' + flag + '</li>';
        });
        html += '</ul>';
        const safetyRows = satRows.filter(r=>SAFETY_ITEM_RE.test(r.label)).sort((a,b)=>a.mean-b.mean);
        if(safetyRows.length){
          html += '<p><b>🛟 안전·시설 관련 항목 (전체, 낮은 순)</b></p><ul>';
          safetyRows.slice(0,6).forEach(r=>{ html += '<li>' + escapeHtml(r.activity) + ' · ' + satItemDisplay(r) + ' — ' + fmt(r.mean,1) + '점</li>'; });
          html += '</ul>';
        }
        satBox.className = 'report-output'; satBox.innerHTML = html;
      }
    }
  }

  function updateBulkClusterMeta(){
    const meta = $('#bulkClusterMeta');
    const acts = Array.from(combinedActivities().values()).filter(a=>a.texts.length);
    const total = acts.reduce((s,a)=>s+a.texts.length,0);
    meta.textContent = total
      ? (acts.length + '개 활동에서 주관식 응답 ' + total + '건을 찾았습니다' + (total>600?' (AI 분석 시 최대 600건만 사용됩니다)':'') + '.')
      : '주관식 원본 응답 파일이 아직 없습니다. (해당 파일 안의 서술형 답변 컬럼을 자동으로 찾습니다)';
  }
  function buildClusterListEl(clusters, total){
    const list = htmlEl('div', { class:'rank-list' });
    const maxCount = Math.max(...clusters.map(c=>c.count||0), 1);
    clusters.forEach((c,i)=>{
      const item = htmlEl('div', { class:'rank-item' });
      item.appendChild(htmlEl('div', { class:'rank-num' }, String(i+1)));
      const body = htmlEl('div', { class:'rank-body' });
      const top = htmlEl('div', { class:'rank-top' });
      top.appendChild(htmlEl('span', { class:'rank-theme' }, c.theme || '기타'));
      const tone = c.tone && ['긍정','부정','중립','혼합'].includes(c.tone) ? c.tone : '중립';
      top.appendChild(htmlEl('span', { class:'pill tone-'+tone }, tone));
      const pct = total ? Math.round((c.count||0)/total*100) : 0;
      top.appendChild(htmlEl('span', { class:'rank-count' }, (c.count||0) + '건' + (total?(' · '+pct+'%'):'')));
      body.appendChild(top);
      const track = htmlEl('div', { class:'rank-bar-track' });
      const fillPct = maxCount ? (c.count||0)/maxCount*100 : 0;
      track.appendChild(htmlEl('div', { class:'rank-bar-fill', style:'width:'+fillPct+'%;' }));
      body.appendChild(track);
      if(Array.isArray(c.examples) && c.examples.length){
        const ex = htmlEl('div', { class:'rank-examples' });
        ex.innerHTML = c.examples.map(e=>'<q>' + escapeHtml(e) + '</q>').join(' &nbsp;·&nbsp; ');
        body.appendChild(ex);
      }
      item.appendChild(body);
      list.appendChild(item);
    });
    return list;
  }
  function renderBulkClusterOverall(data, total){
    const out = $('#bulkClusterOverall');
    out.className = 'report-output'; out.innerHTML = '';
    const clusters = (data.overall_clusters||[]).slice().sort((a,b)=>(b.count||0)-(a.count||0));
    if(!clusters.length){ out.textContent = '분류된 주제가 없습니다.'; return; }
    out.appendChild(buildClusterListEl(clusters, total));
  }
  function renderBulkClusterByActivity(data){
    const wrap = $('#bulkClusterByActivity');
    wrap.className = 'report-output'; wrap.innerHTML = '';
    const byAct = data.by_activity || [];
    if(!byAct.length){ wrap.textContent = '활동별로 분류된 결과가 없습니다.'; return; }
    const accordion = htmlEl('div', { class:'activity-accordion' });
    byAct.forEach(entry=>{
      const clusters = (entry.clusters||[]).slice().sort((a,b)=>(b.count||0)-(a.count||0));
      const total = clusters.reduce((s,c)=>s+(c.count||0),0);
      const details = htmlEl('details');
      const summary = htmlEl('summary');
      summary.innerHTML = escapeHtml(entry.activity||'(활동명 없음)') + ' <span class="muted">' + clusters.length + '개 주제 · 응답 ' + total + '건</span>';
      details.appendChild(summary);
      details.appendChild(buildClusterListEl(clusters, total));
      accordion.appendChild(details);
    });
    wrap.appendChild(accordion);
  }
  $all('[data-bulk-view]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      $all('[data-bulk-view]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.bulkView;
      $('#bulkClusterOverall').hidden = view !== 'overall';
      $('#bulkClusterByActivity').hidden = view !== 'byActivity';
    });
  });
  // 청소년 / 인솔자 / 청소년+인솔자 합산 — like clicking between tabs at the bottom of an Excel
  // workbook, this switches which sheets satAggForView() hands to every satisfaction-related
  // render function (tile, breakdown, item narrative, full table) at once.
  $all('[data-audience]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      $all('[data-audience]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      state.view.satAudience = btn.dataset.audience;
      renderBulkAll();
    });
  });
  $('#bulkClusterBtn').addEventListener('click', async ()=>{
    const ai = activeAiBackend();
    if(!ai) return;
    const acts = Array.from(combinedActivities().values()).filter(a=>a.texts.length);
    if(!acts.length){ await showAlertModal('분석할 주관식 응답이 없습니다.'); return; }
    const perActCap = 40;
    const tagged = [];
    acts.forEach(a=>{ a.texts.slice(0, perActCap).forEach(t=>tagged.push({ activity:a.label, text:t })); });
    const capped = tagged.slice(0, 600);
    const list = capped.map((t,i)=>(i+1)+'. [' + t.activity + '] ' + t.text).join('\n');
    const btn = $('#bulkClusterBtn');
    btn.disabled = true;
    $('#bulkClusterOverall').className = 'report-output'; $('#bulkClusterOverall').textContent = 'Thinking…';
    const prompt =
      '당신은 여러 청소년활동(캠프)의 만족도 주관식(자유의견) 응답을 분석하는 리서처입니다. 아래는 서로 다른 활동 참가자들의 실제 자유의견 응답 ' + capped.length + '건이며, 각 줄 앞 [활동명]은 그 응답이 속한 활동입니다.\n\n' +
      list +
      '\n\n다음 두 가지를 실제 응답만 근거로, 없는 내용을 지어내지 말고 정리하세요.\n' +
      '1) overall_clusters: 활동 구분 없이 전체를 통틀어 내용이 비슷한 응답끼리 주제별로 묶어 빈도가 높은 순서대로 정리\n' +
      '2) by_activity: 활동별로 각각 상위 주제를 빈도순으로 정리 (활동마다 최대 5개 주제)\n\n' +
      '아래 JSON 형식으로만 답하세요:\n' +
      '{"overall_clusters":[{"theme":"10자 내외 요약","count":정수,"tone":"긍정"|"부정"|"중립"|"혼합","examples":["실제 응답 그대로 1~2개"]}],' +
      '"by_activity":[{"activity":"활동명","clusters":[{"theme":"...","count":정수,"tone":"...","examples":["..."]}]}]}';
    try{
      const data = ai.json ? await ai.json(prompt, { modelTier:'default' }) : JSON.parse((await ai.call(prompt, { modelTier:'default' })).text);
      state.bulk.clusterResult = data;
      renderBulkClusterOverall(data, capped.length);
      renderBulkClusterByActivity(data);
      $('#saveBulkClusterBtn').disabled = false;
    }catch(err){
      $('#bulkClusterOverall').className = 'report-output empty';
      $('#bulkClusterOverall').textContent = aiErrorMessage(err);
    }finally{ btn.disabled = false; }
  });
  $('#saveBulkClusterBtn').addEventListener('click', async ()=>{
    if(!state.bulk.clusterResult) return;
    const d = state.bulk.clusterResult;
    let md = '# 전체 활동 주관식 자유의견 그룹핑 결과\n\n## 전체 통합 순위\n';
    (d.overall_clusters||[]).slice().sort((a,b)=>(b.count||0)-(a.count||0)).forEach((c,i)=>{
      md += (i+1)+'. **'+(c.theme||'기타')+'** ('+(c.count||0)+'건, '+(c.tone||'중립')+')\n';
      (c.examples||[]).forEach(e=>{ md += '   - "'+e+'"\n'; });
    });
    md += '\n## 활동별 순위\n';
    (d.by_activity||[]).forEach(entry=>{
      md += '\n### ' + (entry.activity||'') + '\n';
      (entry.clusters||[]).slice().sort((a,b)=>(b.count||0)-(a.count||0)).forEach((c,i)=>{ md += (i+1)+'. **'+(c.theme||'기타')+'** ('+(c.count||0)+'건, '+(c.tone||'중립')+')\n'; });
    });
    await saveTextFile('전체활동_주관식_그룹핑결과.md', md);
  });

  function buildBulkEffPromptTable(){
    const rows = bulkEffRows();
    if(!rows.length) return '(효과성 데이터 없음)';
    let t = '| 활동 | 대상역량 | N | 사전 | 사후 | 변화 | p | 효과성 |\n|---|---|---|---|---|---|---|---|\n';
    rows.forEach(r=>{ t += '| '+r.activity+' | '+(r.competency||'')+' | '+(r.n??'')+' | '+fmt(r.pre,1)+' | '+fmt(r.post,1)+' | '+(r.diff!=null?((r.diff>=0?'+':'')+fmt(r.diff,1)):'')+' | '+(isFinite(r.p)?fmt(r.p,3):'')+' | '+(r.effective||'')+' |\n'; });
    return t;
  }
  function buildBulkSatPromptTable(){
    const rows = bulkSatRows();
    if(!rows.length) return '(만족도 데이터 없음)';
    let t = '| 활동 | 응답군 | 전반적 만족도(100점) | N |\n|---|---|---|---|\n';
    rows.forEach(r=>{ t += '| '+r.activity+' | '+r.group+' | '+fmt(r.overall,1)+' | '+(r.n??'')+' |\n'; });
    return t;
  }
  function buildBulkClusterPromptBlock(){
    const d = state.bulk.clusterResult;
    if(!d) return '(주관식 그룹핑 결과 없음 — 먼저 위에서 생성하세요)';
    let block = '전체 통합 상위 주제:\n';
    (d.overall_clusters||[]).slice(0,8).forEach(c=>{ block += '- '+(c.theme||'')+' ('+(c.count||0)+'건, '+(c.tone||'')+')\n'; });
    return block;
  }
  $('#bulkInsightBtn').addEventListener('click', async ()=>{
    const ai = activeAiBackend();
    if(!ai) return;
    const btn = $('#bulkInsightBtn'), out = $('#bulkInsightOutput');
    btn.disabled = true; out.className = 'report-output'; out.textContent = 'Thinking…';
    const prompt =
      '당신은 청소년활동 사업 전체를 관리하는 평가 담당자입니다. 아래는 여러 활동(캠프)을 한꺼번에 집계한 결과입니다. 개별 활동의 원자료는 없고 아래 요약 수치만 근거로 사용하세요. 없는 내용을 지어내지 마세요.\n\n' +
      '[활동별 효과성 요약]\n' + buildBulkEffPromptTable() + '\n' +
      '[활동별 만족도 요약]\n' + buildBulkSatPromptTable() + '\n' +
      '[주관식 자유의견 전체 통합 순위]\n' + buildBulkClusterPromptBlock() + '\n' +
      '다음 형식의 한국어 마크다운으로 작성하세요.\n\n' +
      '## 전체 경향 요약\n(2~4문장)\n\n' +
      '## 효과가 특히 좋은 활동 / 유형\n(구체적 활동명 언급)\n\n' +
      '## 개선이 필요한 활동 / 공통 이슈\n(효과가 낮거나 유의하지 않은 활동, 만족도 낮은 활동, 부정적 주관식 주제를 근거로)\n\n' +
      '## 사업 전체 차원의 개선 제안\n(우선순위 순 3~5개, 번호 목록)\n';
    try{
      const { text } = await ai.call(prompt, { modelTier:'default', onText: ({text})=>{ out.innerHTML = renderMarkdownLite(text); } });
      out.innerHTML = renderMarkdownLite(text);
      state.bulk.insight = '# AI 종합 인사이트 — 전체 활동\n\n' + text;
      $('#saveBulkInsightBtn').disabled = false;
    }catch(err){
      out.className = 'report-output empty'; out.textContent = aiErrorMessage(err);
    }finally{ btn.disabled = false; }
  });
  $('#saveBulkInsightBtn').addEventListener('click', async ()=>{
    if(!state.bulk.insight) return;
    await saveTextFile('전체활동_AI인사이트.md', state.bulk.insight);
  });

  function renderBulkAll(){
    renderBulkFileTable();
    renderBulkTiles();
    renderBulkTopBottom();
    renderBulkNarrative();
    renderBulkEffTable();
    renderBulkSatBreakdown();
    renderBulkSatTable();
    updateBulkClusterMeta();
    renderSurveyBatteries();
    renderSavedList();
    const combined = combinedActivities();
    const usingCurrent = state.bulk.files.length > 0 && state.view.includeCurrent;
    const savedCount = state.view.selectedSavedIds.size;
    const hasData = combined.size > 0;
    const resultsWrap = $('#bulkResultsWrap'), emptyState = $('#bulkEmptyState');
    if(resultsWrap) resultsWrap.hidden = !hasData;
    if(emptyState) emptyState.hidden = hasData;
    if(!hasData){
      $('#bulkStatus').textContent = '파일을 업로드해주세요';
    } else if(state.bulk.isSample && !state.bulk.files.length && !savedCount){
      $('#bulkStatus').textContent = '샘플 데이터를 보고 있습니다 — 위에서 파일을 업로드하거나 아래 저장된 캠프를 선택하면 실제 데이터로 바뀝니다';
    } else {
      const parts = [];
      if(usingCurrent) parts.push('현재 작업 파일 ' + state.bulk.files.length + '개');
      if(savedCount) parts.push('저장된 캠프 ' + savedCount + '개 선택');
      $('#bulkStatus').textContent = (parts.length?parts.join(' + '):'선택된 데이터 없음') + ' · 통합 활동 ' + combined.size + '개 인식됨';
    }
  }
  function generateBulkSample(){
    const camps = ['평창 여름캠프','설악 도전캠프','제주 진로캠프','지리산 리더십캠프','한강 프로젝트캠프','태백 팀빌딩캠프'];
    const competencies = ['협업','자기주도성','문제해결력'];
    const rng = mulberry32(20260908);
    const map = new Map();
    camps.forEach(camp=>{
      const key = 'sample:'+camp;
      const n = 40 + Math.floor(rng()*120);
      const eff = competencies.map(label=>{
        const preM = 55 + rng()*20;
        const postM = clamp(preM + (rng()*24 - 6), 0, 100);
        const se = 2 + rng()*3;
        const t = (postM-preM) / se;
        const p = clamp(1 - Math.min(0.999, Math.abs(t)/6), 0.001, 0.9);
        return { label, preMean:preM, postMean:postM, n, t, p, meanDiff:postM-preM, effective: p<0.05 ? 'Y':'N' };
      });
      // Build the same category -> item -> subtotal shape a real official aggregate report
      // produces (see parseSatAggregateSheet), so the sample preview demonstrates the "만족도
      // 상세 (공식 집계표 기준)" breakdown card too, not just the flat ranking.
      const catDefs = [
        { name:'전반적 만족도', items:['전반적 만족','활동 효과성','재참가 의사'] },
        { name:'교육전달', items:['직원 친절도','관계 동등성','지도자 전문성'] },
        { name:'교육환경', items:['시설 적합성','시설 청결성','이용 편리성','식당 구성 및 맛'] }
      ];
      const categories = catDefs.map(def=>{
        const catItems = def.items.map(label=>{
          const low = /이용 편리성|식당|안전/.test(label);
          return { label, mean: low ? 55+rng()*25 : 78+rng()*20, n };
        });
        return { name: def.name.replace(/\s*만족도$/,''), mean: mean(catItems.map(i=>i.mean)), n, items: catItems };
      });
      const overall = { label:'종합 만족도', mean: mean(categories.map(c=>c.mean)), n };
      const flatItems = [overall, ...categories.flatMap(c=>c.items.concat([{ label:c.name+' 만족도', mean:c.mean, n }]))];
      const texts = OPEN_COMMENT_POOL.filter(Boolean).filter(()=>rng()>0.5).slice(0, 4+Math.floor(rng()*5));
      map.set(key, {
        label: camp,
        eff,
        satAgg: [{ sheet:'만족도', items: flatItems, overall, categories }],
        texts, rawN:n, files:[], incidents:[], effRawFiles:[]
      });
    });
    return map;
  }
  $('#surveyPasteBtn').addEventListener('click', async ()=>{
    const text = $('#surveyPasteArea').value;
    if(!text || !text.trim()){ await showAlertModal('설문 문항 텍스트를 먼저 붙여넣어 주세요.'); return; }
    const btn = $('#surveyPasteBtn');
    btn.disabled = true;
    const prevLabel = btn.textContent;
    let batteries = null, viaAI = false;
    if(activeAiBackend()){
      btn.textContent = 'AI가 읽는 중…';
      $('#surveyFormStatus').textContent = 'AI가 문항을 읽는 중…';
      try{
        batteries = await analyzeSurveyWithAI({ text });
        viaAI = true;
      }catch(err){
        // fall through to the regex parser below
      }
    }
    if(!batteries || !batteries.length) batteries = parseSurveyFormText(text);
    btn.disabled = false;
    btn.textContent = prevLabel;
    if(!batteries.length){
      $('#surveyFormStatus').textContent = '문항을 인식하지 못했습니다.';
      await showAlertModal('문항을 인식하지 못했습니다. 응답 척도(매우 그렇다 ~ 전혀 그렇지 않다 등)를 포함해 문항 전체를 붙여넣어 보세요.');
      return;
    }
    state.survey = { batteries, raw: text };
    $('#surveyFormStatus').textContent = '붙여넣은 텍스트' + (viaAI?' (AI 분석)':'') + ' — 묶음 ' + batteries.length + '개 인식됨';
    if(state.bulk.files.length) rebuildBulkActivities();
    renderBulkAll();
  });
  $('#surveyImageInput').addEventListener('change', async (e)=>{
    const files = Array.from(e.target.files||[]);
    e.target.value = '';
    if(!files.length) return;
    if(!activeAiBackend()){ await showAlertModal('AI 기능을 사용할 수 없습니다. 위쪽 "AI 설정"에서 OpenAI API 키를 입력해주세요.'); return; }
    $('#surveyFormStatus').textContent = 'AI가 캡처본을 읽는 중… (' + files.length + '장)';
    try{
      const batteries = await analyzeSurveyWithAI({ images: files });
      state.survey = { batteries, raw:'(캡처본 이미지에서 AI로 추출)' };
      $('#surveyFormStatus').textContent = '캡처본 이미지 (AI 분석) — 묶음 ' + batteries.length + '개 인식됨';
      if(state.bulk.files.length) rebuildBulkActivities();
      renderBulkAll();
    }catch(err){
      $('#surveyFormStatus').textContent = '캡처본 분석에 실패했습니다.';
      await showAlertModal(aiErrorMessage(err));
    }
  });
  async function runBulkUpload(files){
    const label = $('#bulkAllFileLabel');
    const statusEl = $('#bulkUploadStatus');
    if(!files.length) return;
    if(statusEl){ statusEl.textContent = '업로드 중…'; statusEl.className = 'file-status-line pending'; }
    if(label) label.setAttribute('aria-busy','true');
    try{
      await handleAllBulkFiles(files);
      if(statusEl){
        const n = state.bulk.files.length;
        statusEl.textContent = '지금까지 총 ' + n + '개 파일이 업로드되어 있습니다.';
        statusEl.className = 'file-status-line ok';
      }
    } finally {
      if(label) label.removeAttribute('aria-busy');
    }
  }
  $('#bulkAllFileInput').addEventListener('change', async (e)=>{
    const files = Array.from(e.target.files||[]);
    await runBulkUpload(files);
    e.target.value = '';
  });
  // Drag-and-drop: let a zip or a batch of files be dropped straight onto the upload card instead
  // of always going through the file picker dialog.
  (function initDropZone(){
    const zone = $('#bulkDropZone');
    if(!zone) return;
    let dragDepth = 0;
    zone.addEventListener('dragenter', (e)=>{
      e.preventDefault();
      dragDepth++;
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragover', (e)=>{ e.preventDefault(); });
    zone.addEventListener('dragleave', (e)=>{
      e.preventDefault();
      dragDepth = Math.max(0, dragDepth-1);
      if(dragDepth===0) zone.classList.remove('drag-over');
    });
    zone.addEventListener('drop', async (e)=>{
      e.preventDefault();
      dragDepth = 0;
      zone.classList.remove('drag-over');
      const files = Array.from((e.dataTransfer && e.dataTransfer.files) || []);
      if(!files.length) return;
      await runBulkUpload(files);
    });
  })();
  $('#useBulkSampleBtn').addEventListener('click', ()=>{
    state.bulk.files = [];
    state.bulk.labelOverrides = new Map();
    state.bulk.roleOverrides = new Map();
    state.bulk.itemNameOverrides = new Map();
    state.bulk.activities = generateBulkSample();
    state.bulk.clusterResult = null;
    state.bulk.isSample = true;
    $('#bulkClusterOverall').className = 'report-output empty';
    $('#bulkClusterOverall').textContent = '위 버튼을 누르면 모든 활동의 주관식 응답을 주제별로 묶어 빈도순으로 정리합니다. 실제 응답 텍스트만 근거로 사용되며, 새로운 내용은 만들어내지 않습니다.';
    $('#bulkClusterByActivity').innerHTML = ''; $('#bulkClusterByActivity').className = 'report-output empty';
    $('#saveBulkClusterBtn').disabled = true;
    $('#bulkFileListCard').hidden = true;
    renderBulkAll();
    $('#bulkStatus').textContent = '샘플 데이터(실제 파일 아님) · 활동 ' + state.bulk.activities.size + '개';
  });

  /* ===================== init ===================== */
  // Start empty — only the upload card (and saved-camp card) show until the user uploads a file
  // or explicitly asks for the sample preview, so the first screen isn't cluttered with results
  // for data that doesn't exist yet.
  (function initEmpty(){
    renderBulkAll();
  })();

  // Re-run whenever the available AI backend could have changed: once at page load (after
  // checking for the Claude Artifact `sample` capability) and again every time the viewer
  // saves/clears their OpenAI API key in the "AI 설정" panel below.
  async function refreshAiUiState(){
    const ai = activeAiBackend();
    const buttons = [$('#bulkClusterBtn'), $('#bulkInsightBtn')].filter(Boolean);
    const labels = { bulkClusterBtn:'AI로 전체/활동별 그룹핑', bulkInsightBtn:'AI 종합 인사이트 생성' };
    buttons.forEach(btn=>{
      if(ai){ btn.disabled = false; btn.textContent = labels[btn.id]; btn.title = ''; }
      else { btn.disabled = true; btn.textContent = 'AI 사용 불가'; btn.title = 'AI 설정에서 OpenAI API 키를 입력하거나, Claude 아티팩트로 열어주세요.'; }
    });
    // The image-capture survey path needs a backend that can actually read images. Claude's
    // `sample` capability declares this itself (limits().images); every OpenAI model this page
    // offers (see OPENAI_MODEL_OPTIONS) supports image input, so it's always shown for that
    // backend. Design for absence rather than showing a control that will just fail.
    const imgSection = $('#surveyImageSection');
    if(!imgSection) return;
    if(ai && (ai.kind === 'openai' || ai.kind === 'server')){
      imgSection.hidden = false;
      const input = $('#surveyImageInput');
      if(input) input.setAttribute('accept', 'image/*');
      return;
    }
    if(ai && ai.kind === 'claude' && sampleFn.limits){
      try{
        const limits = await sampleFn.limits();
        if(limits && limits.images){
          imgSection.hidden = false;
          const input = $('#surveyImageInput');
          if(input && limits.images.mediaTypes && limits.images.mediaTypes.length) input.setAttribute('accept', limits.images.mediaTypes.join(','));
          return;
        }
      }catch(e){ /* fall through to hidden */ }
    }
    imgSection.hidden = true;
  }
  function renderAiSettings(){
    const box = $('#aiSettingsBox');
    if(!box) return;
    const claudeAvailable = !!sampleFn;
    const serverAvailable = !!state.ai.serverProxyAvailable;
    const key = getOpenAiKey();
    let html = '';
    if(claudeAvailable){
      html += '<p class="card-sub" style="margin:0;">이 화면은 Claude 아티팩트로 열려 있어 별도 설정 없이 AI 기능을 사용할 수 있습니다. 이 HTML을 다운로드해 다른 곳에서 열면, 서버 프록시(/api/chat)가 있으면 자동으로 그걸 쓰고, 없으면 아래에 OpenAI API 키를 입력해 계속 쓸 수 있습니다.</p>';
    } else if(serverAvailable){
      html += '<p class="card-sub" style="margin:0;">✅ 이 사이트의 서버 프록시(/api/chat)가 감지되어, 별도 설정 없이 모든 사용자가 AI 기능을 쓸 수 있습니다. API 키는 서버에만 있고 이 브라우저로는 전달되지 않습니다.</p>';
    } else {
      html += '<p class="card-sub" style="margin:0 0 10px;">서버 프록시(/api/chat)가 감지되지 않았습니다. AI 기능(주관식 그룹핑 · 종합 인사이트 · 캡처본 문항 인식)을 쓰려면 아래에 OpenAI API 키를 직접 입력해주세요. 키는 이 브라우저에만 저장되며(localStorage), OpenAI 서버로만 전송됩니다. <b>다른 사람과 공유되는 화면에 자신의 키를 입력하지 마세요.</b></p>';
    }
    box.innerHTML = html;
    if(claudeAvailable || serverAvailable) return;
    const row = htmlEl('div', { style:'display:flex;flex-wrap:wrap;gap:8px;align-items:center;' });
    const input = htmlEl('input', { type:'password', class:'bulk-name-input', style:'flex:1;min-width:220px;', placeholder:'sk-... (OpenAI API 키)' });
    input.value = key;
    const modelSelect = htmlEl('select', { class:'sheet-select' });
    OPENAI_MODEL_OPTIONS.forEach(m=>{
      const opt = htmlEl('option', { value:m }, m);
      if(m === getOpenAiModel()) opt.setAttribute('selected','selected');
      modelSelect.appendChild(opt);
    });
    const saveBtn = htmlEl('button', { type:'button', class:'primary-btn' }, '저장');
    const clearBtn = htmlEl('button', { type:'button', class:'ghost-btn' }, '삭제');
    const status = htmlEl('span', { class:'data-status' }, key ? 'API 키 저장됨 ('+getOpenAiModel()+')' : 'API 키 없음');
    saveBtn.addEventListener('click', async ()=>{
      setOpenAiKey(input.value.trim());
      setOpenAiModel(modelSelect.value);
      status.textContent = getOpenAiKey() ? 'API 키 저장됨 ('+getOpenAiModel()+')' : 'API 키 없음';
      await refreshAiUiState();
    });
    clearBtn.addEventListener('click', async ()=>{
      input.value = '';
      setOpenAiKey('');
      status.textContent = 'API 키 없음';
      await refreshAiUiState();
    });
    row.append(input, modelSelect, saveBtn, clearBtn);
    box.appendChild(row);
    box.appendChild(status);
  }
  (async function initCapabilities(){
    try{ sampleFn = (window.claude && typeof window.claude.use === 'function') ? await window.claude.use('sample') : null; }
    catch(e){ sampleFn = null; }
    try{ downloadsFn = (window.claude && typeof window.claude.use === 'function') ? await window.claude.use('downloads') : null; }
    catch(e){ downloadsFn = null; }
    // Only worth checking for a server proxy when this page ISN'T already inside the Claude
    // Artifact platform (which never serves a same-origin /api/chat route anyway).
    if(!sampleFn) state.ai.serverProxyAvailable = await probeServerProxy();
    renderAiSettings();
    await refreshAiUiState();
  })();

  initSavedCamps();

  const resetBtn = $('#resetWorkspaceBtn');
  if(resetBtn) resetBtn.addEventListener('click', resetCurrentWorkspace);
  const saveBtn = $('#saveCampBtn');
  if(saveBtn) saveBtn.addEventListener('click', saveCurrentCamp);
})();
</script>
