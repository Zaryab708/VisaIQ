(function () {

  var CSS =
    '#viq-ticker{width:100%;background:#070F1C;border-bottom:1px solid rgba(0,200,150,0.25);height:36px;display:flex;align-items:center;overflow:hidden;position:sticky;top:0;z-index:101;box-sizing:border-box}' +
    '#viq-ticker::before,#viq-ticker::after{content:"";position:absolute;top:0;bottom:0;width:80px;z-index:2;pointer-events:none}' +
    '#viq-ticker::before{left:52px;background:linear-gradient(to right,#070F1C,transparent)}' +
    '#viq-ticker::after{right:0;background:linear-gradient(to left,#070F1C,transparent)}' +
    '#viq-live-badge{flex-shrink:0;background:#00C896;color:#000;font-size:0.58rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;padding:0 12px;height:100%;display:flex;align-items:center;gap:5px;white-space:nowrap;z-index:3}' +
    '#viq-live-dot{width:5px;height:5px;border-radius:50%;background:#000;animation:viqPulse 1.8s infinite}' +
    '#viq-ticker-mask{flex:1;overflow:hidden;height:100%;display:flex;align-items:center;min-width:0}' +
    '#viq-ticker-track{display:flex;align-items:center;white-space:nowrap;will-change:transform}' +
    '#viq-ticker-mask:hover #viq-ticker-track{animation-play-state:paused!important}' +
    '.viq-item{display:inline-flex;align-items:center;padding:0 28px;font-size:0.78rem;font-family:"DM Sans",sans-serif;white-space:nowrap;line-height:1}' +
    '.viq-sep{display:inline-block;width:4px;height:4px;border-radius:50%;background:rgba(0,200,150,0.3);margin:0 4px;vertical-align:middle}' +
    '@keyframes viqPulse{0%,100%{opacity:1}50%{opacity:0.3}}' +
    '@keyframes viqScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}' +
    '@media(max-width:600px){.viq-item{font-size:0.71rem;padding:0 18px}}';

  function daysAgoLabel(n) {
    if (n === 0) return 'today';
    if (n === 1) return '1 day ago';
    if (n < 7)  return n + ' days ago';
    if (n < 14) return '1 week ago';
    if (n < 30) return Math.floor(n / 7) + ' weeks ago';
    return Math.floor(n / 30) + ' months ago';
  }

  function outcomeItem(o) {
    var granted = o.status === 'granted';
    var col     = granted ? '#10B981' : '#4E8EFF';
    var icon    = granted ? '✓' : '→';
    var ago     = (o.days_ago !== undefined && o.days_ago !== null) ? daysAgoLabel(o.days_ago) : '';
    return '<span class="viq-item">' +
      '<span style="color:' + col + ';font-weight:800;margin-right:4px">' + icon + '</span>' +
      (o.flag ? '<span style="margin-right:4px">' + o.flag + '</span>' : '') +
      '<span style="color:#E8EDF5">' +
        '<strong style="color:#fff">' + o.occupation_label + '</strong>' +
        ' <span style="color:#4a6070">·</span> ' + o.state + ' ' + o.visa +
        ' <span style="color:#4a6070">·</span> ' +
        '<span style="color:' + col + '">' + o.points + ' pts</span>' +
        ' <span style="color:#4a6070">·</span> ' +
        (granted ? 'Granted' : 'Invited') + ' after ' + o.wait_months + 'mo' +
        (ago ? ' <span style="color:#506070">· ' + ago + '</span>' : '') +
      '</span>' +
      '<span class="viq-sep"></span>' +
    '</span>';
  }

  function roundItem(text) {
    return '<span class="viq-item">' +
      '<span style="font-size:0.75rem;margin-right:5px">📡</span>' +
      '<span style="color:#E8EDF5">' + text + '</span>' +
      '<span class="viq-sep"></span>' +
    '</span>';
  }

  var ROUNDS = [
    '<strong style="color:#00C896">VIC 190/491</strong> · 17 Mar 2026 · engineers, teachers, nurses invited',
    '<strong style="color:#00C896">QLD + ACT rounds</strong> · 12 Mar 2026 · healthcare and engineers',
    '<strong style="color:#F59E0B">SA Talent stream</strong> · reopened Mar 20 · limited places',
    '<strong style="color:#00C896">189 Round 3</strong> · 2025–26 overdue · expected any day',
    '<strong style="color:#4E8EFF">TAS weekly rounds</strong> · fastest state · most occupations eligible'
  ];

  function startScroll(track) {
    var w = track.scrollWidth / 2;
    var dur = Math.max(45, w / 75); // ~75px/sec
    track.style.animation = 'viqScroll ' + dur + 's linear infinite';
  }

  function populate(outcomes) {
    var track = document.getElementById('viq-ticker-track');
    if (!track) return;
    var items = [];
    var ri = 0;
    for (var i = 0; i < outcomes.length; i++) {
      items.push(outcomeItem(outcomes[i]));
      // Inject a round item every 2 outcomes
      if ((i + 1) % 2 === 0 && ri < ROUNDS.length) {
        items.push(roundItem(ROUNDS[ri++]));
      }
    }
    while (ri < ROUNDS.length) items.push(roundItem(ROUNDS[ri++]));

    var html = items.join('');
    track.innerHTML = html + html; // double for seamless loop
    startScroll(track);
  }

  var FALLBACK = [
    { flag:'🇮🇳', occupation_label:'Registered Nurse',  state:'SA',  visa:'190', points:75, wait_months:4, status:'granted', days_ago:3  },
    { flag:'🇵🇰', occupation_label:'Accountant',        state:'SA',  visa:'190', points:70, wait_months:6, status:'invited', days_ago:18 },
    { flag:'🇵🇭', occupation_label:'Software Engineer', state:'ACT', visa:'491', points:80, wait_months:5, status:'granted', days_ago:5  },
    { flag:'🇳🇵', occupation_label:'Cook / Chef',       state:'TAS', visa:'190', points:65, wait_months:3, status:'granted', days_ago:6  },
    { flag:'🇮🇳', occupation_label:'Civil Engineer',    state:'VIC', visa:'190', points:85, wait_months:7, status:'invited', days_ago:7  },
    { flag:'🇵🇭', occupation_label:'Physiotherapist',   state:'QLD', visa:'190', points:75, wait_months:2, status:'invited', days_ago:11 }
  ];

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

    // Show fallback immediately so ticker isn't empty
    populate(FALLBACK);

    // Then fetch real data and replace
    fetch('/outcomes-data.json?v=' + Date.now())
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var outcomes = (data.outcomes || []).slice(0, 12);
        if (outcomes.length > 0) populate(outcomes);
      })
      .catch(function() {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
