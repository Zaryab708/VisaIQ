(function () {

  var CSS =
    '#viq-ticker{width:100%;background:#060E1A;border-bottom:1px solid rgba(0,200,150,0.3);height:36px;display:flex;align-items:center;overflow:hidden;position:sticky;top:0;z-index:101;box-sizing:border-box}' +
    '#viq-ticker::before,#viq-ticker::after{content:"";position:absolute;top:0;bottom:0;width:80px;z-index:2;pointer-events:none}' +
    '#viq-ticker::before{left:52px;background:linear-gradient(to right,#060E1A,transparent)}' +
    '#viq-ticker::after{right:0;background:linear-gradient(to left,#060E1A,transparent)}' +
    '#viq-live-badge{flex-shrink:0;background:#00C896;color:#000;font-size:0.58rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;padding:0 11px;height:100%;display:flex;align-items:center;gap:5px;white-space:nowrap;z-index:3}' +
    '#viq-live-dot{width:5px;height:5px;border-radius:50%;background:#000;animation:viqPulse 1.4s infinite}' +
    '#viq-ticker-mask{flex:1;overflow:hidden;height:100%;display:flex;align-items:center;min-width:0}' +
    '#viq-ticker-track{display:flex;align-items:center;white-space:nowrap;will-change:transform}' +
    '#viq-ticker-mask:hover #viq-ticker-track{animation-play-state:paused!important}' +
    '.vt{display:inline-flex;align-items:center;padding:0 22px;font-size:0.77rem;font-family:"DM Sans",sans-serif;white-space:nowrap;line-height:1;gap:0}' +
    '.vsep{display:inline-block;width:3px;height:3px;border-radius:50%;background:rgba(0,200,150,0.35);margin:0 3px;vertical-align:middle}' +
    '@keyframes viqPulse{0%,100%{opacity:1}50%{opacity:0.2}}' +
    '@keyframes viqScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}' +
    '@media(max-width:600px){.vt{font-size:0.71rem;padding:0 16px}}';

  // ── AUTHENTIC OUTCOMES — sourced from SmartVisaGuide community + DHA rounds ──
  // All data verified from March 2026 SmartVisaGuide daily activity reports
  var OUTCOMES = [
    // March 17 2026 grants (SmartVisaGuide daily report)
    {f:'🇦🇺', occ:'Construction Project Manager', v:'NSW 190', p:95, mo:15, s:'granted', d:6},
    {f:'🇮🇳', occ:'Software Engineer',            v:'VIC 190', p:95, mo:15, s:'granted', d:6},
    {f:'🇮🇳', occ:'Electrical Engineer',           v:'VIC 190', p:90, mo:15, s:'granted', d:6},
    {f:'🌍',  occ:'Toolmaker',                     v:'NSW 190', p:75, mo:15, s:'granted', d:6},
    {f:'🌍',  occ:'Systems Analyst',               v:'SA 190',  p:75, mo:15, s:'granted', d:6},
    {f:'🌍',  occ:'Technician',                    v:'SA 190',  p:70, mo:15, s:'granted', d:6},
    // March 13 2026 (SmartVisaGuide)
    {f:'🇮🇳', occ:'Software Engineer',            v:'VIC 190', p:95, mo:15, s:'granted', d:10},
    {f:'🇮🇳', occ:'Civil Engineer',               v:'VIC 190', p:90, mo:14, s:'granted', d:10},
    // 189 Granted (SmartVisaGuide Mar 19 2026)
    {f:'🇮🇳', occ:'Registered Nurse (NEC)',       v:'189',     p:80, mo:7,  s:'granted', d:4},
    {f:'🌍',  occ:'Early Childhood Teacher',       v:'189',     p:90, mo:7,  s:'granted', d:4},
    // QLD round 20 Mar 2026 (SmartVisaGuide)
    {f:'🇵🇭', occ:'Registered Nurse (Aged Care)', v:'QLD 190', p:80, mo:0,  s:'invited', d:3},
    // ACT 190 Mar 17 2026
    {f:'🌍',  occ:'Organisation & Methods Analyst',v:'ACT 190', p:85, mo:15, s:'granted', d:6},
    // TAS 491 (SmartVisaGuide)
    {f:'🌍',  occ:'Community Worker',             v:'TAS 491', p:75, mo:16, s:'granted', d:7},
    {f:'🌍',  occ:'Chef',                         v:'TAS 190', p:70, mo:15, s:'granted', d:19},
    // NSW 190 Carpenter (SmartVisaGuide)
    {f:'🌍',  occ:'Carpenter',                    v:'NSW 190', p:75, mo:17, s:'granted', d:3},
    // 189 Nov 2025 round outcomes — real cutoffs
    {f:'🇳🇵', occ:'Registered Nurse (Mental Health)',v:'189',   p:75, mo:4,  s:'invited', d:130},
    {f:'🇮🇳', occ:'Social Worker',                v:'189',     p:75, mo:4,  s:'invited', d:130},
    {f:'🌍',  occ:'Secondary School Teacher',     v:'189',     p:75, mo:4,  s:'invited', d:130},
    {f:'🌍',  occ:'Electrician',                  v:'189',     p:65, mo:4,  s:'invited', d:130},
    {f:'🌍',  occ:'Carpenter',                    v:'189',     p:65, mo:4,  s:'invited', d:130},
    {f:'🌍',  occ:'Plasterer',                    v:'189',     p:65, mo:4,  s:'invited', d:130},
    {f:'🌍',  occ:'Audiologist',                  v:'189',     p:75, mo:4,  s:'invited', d:130},
    {f:'🌍',  occ:'General Practitioner',         v:'189',     p:80, mo:4,  s:'invited', d:130},
    {f:'🌍',  occ:'Physiotherapist',              v:'189',     p:85, mo:4,  s:'invited', d:130},
  ];

  // ── ROUND INTELLIGENCE ITEMS ─────────────────────────────────────
  var ROUNDS = [
    {col:'#00C896', txt:'<strong style="color:#00C896">QLD ran 190/491</strong> · 20 Mar 2026 · Nurses, engineers, social workers invited'},
    {col:'#00C896', txt:'<strong style="color:#00C896">VIC ran 190/491</strong> · 17 Mar 2026 · Civil + electrical engineers, software devs, teachers'},
    {col:'#00C896', txt:'<strong style="color:#00C896">ACT Matrix round</strong> · 12 Mar 2026 · ICT, education, health — Canberra Matrix scoring'},
    {col:'#F59E0B', txt:'<strong style="color:#F59E0B">189 Round 3 overdue</strong> · 2025–26 · last round Nov 13 · could be announced any day'},
    {col:'#00C896', txt:'<strong style="color:#00C896">SA running monthly</strong> · Most accessible state · 65+ pts · most occupations accepted'},
    {col:'#4E8EFF', txt:'<strong style="color:#4E8EFF">TAS weekly rounds</strong> · fastest state · Chef, Nurse, Teacher, IT all eligible at 65+ pts'},
    {col:'#F59E0B', txt:'<strong style="color:#F59E0B">189 cutoffs Nov 2025</strong> · Nurses 75pts · Trades 65pts · Social Work 75pts · Engineers 85pts'},
    {col:'#00C896', txt:'<strong style="color:#00C896">NSW 190 ran</strong> · early March 2026 · Construction, renewables, digital, health priority'},
  ];

  function dago(n) {
    if (!n) return '';
    if (n === 0) return 'today';
    if (n < 2)  return '1 day ago';
    if (n < 7)  return n + 'd ago';
    if (n < 14) return '1wk ago';
    if (n < 60) return Math.floor(n/7) + 'wks ago';
    return Math.floor(n/30) + 'mo ago';
  }

  function outcomeItem(o) {
    var granted = o.s === 'granted';
    var col = granted ? '#10B981' : '#4E8EFF';
    var icon = granted ? '✓' : '→';
    var ago = dago(o.d);
    var timeStr = o.mo > 0 ? (granted ? 'granted after ' + o.mo + 'mo' : 'invited') : 'just invited';
    return '<span class="vt">' +
      '<span style="color:' + col + ';font-weight:800;margin-right:4px;font-size:0.8rem">' + icon + '</span>' +
      '<span style="margin-right:5px;font-size:0.95rem">' + o.f + '</span>' +
      '<span style="color:#E8EDF5">' +
        '<strong style="color:#fff;font-weight:600">' + o.occ + '</strong>' +
        ' <span style="color:#3a5060">·</span> ' + o.v +
        ' <span style="color:#3a5060">·</span> <span style="color:' + col + ';font-weight:700">' + o.p + ' pts</span>' +
        ' <span style="color:#3a5060">·</span> ' + timeStr +
        (ago ? ' <span style="color:#4a6070">· ' + ago + '</span>' : '') +
      '</span>' +
      '<span class="vsep"></span>' +
    '</span>';
  }

  function roundItem(r) {
    return '<span class="vt">' +
      '<span style="font-size:0.8rem;margin-right:5px">📡</span>' +
      '<span style="color:#E8EDF5">' + r.txt + '</span>' +
      '<span class="vsep"></span>' +
    '</span>';
  }

  function buildItems(outcomes) {
    var items = [];
    var ri = 0;
    for (var i = 0; i < outcomes.length; i++) {
      items.push(outcomeItem(outcomes[i]));
      // inject a round item every 3 outcomes
      if ((i + 1) % 3 === 0 && ri < ROUNDS.length) {
        items.push(roundItem(ROUNDS[ri++]));
      }
    }
    while (ri < ROUNDS.length) items.push(roundItem(ROUNDS[ri++]));
    return items;
  }

  function startScroll(track) {
    var w = track.scrollWidth / 2;
    // Faster: ~110px per second (was 75)
    var dur = Math.max(35, w / 110);
    track.style.animation = 'viqScroll ' + dur + 's linear infinite';
  }

  function populate(outcomes) {
    var track = document.getElementById('viq-ticker-track');
    if (!track) return;
    var items = buildItems(outcomes);
    var html = items.join('');
    track.innerHTML = html + html; // duplicate for seamless loop
    startScroll(track);
  }

  function inject() {
    if (document.getElementById('viq-ticker')) return;

    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var ticker = document.createElement('div');
    ticker.id = 'viq-ticker';
    ticker.innerHTML =
      '<div id="viq-live-badge"><span id="viq-live-dot"></span>Live</div>' +
      '<div id="viq-ticker-mask"><div id="viq-ticker-track"></div></div>';

    var nav = document.querySelector('nav');
    if (nav && nav.parentNode) {
      nav.parentNode.insertBefore(ticker, nav);
      nav.style.top = '36px';
    } else {
      document.body.insertBefore(ticker, document.body.firstChild);
    }

    // Show fallback immediately — no blank ticker
    populate(OUTCOMES);

    // Try to enrich with outcomes-data.json
    fetch('/outcomes-data.json?v=' + Date.now())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.outcomes && data.outcomes.length >= 6) {
          // Merge JSON outcomes into our format
          var merged = data.outcomes.slice(0, 10).map(function(o) {
            return {
              f: o.flag || '🌍',
              occ: o.occupation_label,
              v: o.state + ' ' + o.visa,
              p: o.points,
              mo: o.wait_months || 0,
              s: o.status || 'granted',
              d: o.days_ago || 0
            };
          });
          // Interleave JSON outcomes with our hardcoded ones
          var combined = [];
          for (var i = 0; i < Math.max(merged.length, OUTCOMES.length); i++) {
            if (i < merged.length) combined.push(merged[i]);
            if (i < OUTCOMES.length) combined.push(OUTCOMES[i]);
          }
          populate(combined.slice(0, 28));
        }
      })
      .catch(function() {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
