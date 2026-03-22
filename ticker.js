(function () {

  var ITEMS = [
    { icon: "✓",  color: "#10B981", text: "3 Registered Nurses · SA 190 · 75 pts · granted this week" },
    { icon: "✓",  color: "#10B981", text: "Civil Engineer · VIC 190 · 85 pts · offshore · granted 6 Mar 2026" },
    { icon: "📡", color: "#00C896", text: "VIC ran a 190/491 round · 17 March 2026 · Engineers, teachers, nurses invited" },
    { icon: "✓",  color: "#10B981", text: "Chef · TAS 190 · 65 pts · granted 17 Mar 2026 · no s59" },
    { icon: "📡", color: "#00C896", text: "QLD + ACT ran rounds · 12 March 2026 · healthcare and engineers invited" },
    { icon: "✓",  color: "#10B981", text: "Software Developer · VIC 190 · 90 pts · offshore · granted this week" },
    { icon: "⚠️", color: "#F59E0B", text: "SA Talent stream · reopened March 20 · limited places remaining" },
    { icon: "✓",  color: "#10B981", text: "Physiotherapist · QLD 190 · 75 pts · invited March round" },
    { icon: "📡", color: "#00C896", text: "189 Round 3 · 2025-26 overdue · expected any day · keep EOI current" },
    { icon: "⏱",  color: "#4E8EFF", text: "190 SA processing · currently 5-8 months · fastest state" },
    { icon: "✓",  color: "#10B981", text: "Secondary Teacher · VIC 190 · 75 pts · offshore · granted this week" },
    { icon: "📊", color: "#7A8FA8", text: "Accountant EOI pool · 15,240 active EOIs · 189 not invited 2025-26" },
    { icon: "✓",  color: "#10B981", text: "Electrician · NSW 491 · 80 pts · granted this week" },
    { icon: "⏱",  color: "#4E8EFF", text: "485 visa fee · $4,600 from 1 March 2026 · applies to new applications" },
    { icon: "✓",  color: "#10B981", text: "Early Childhood Teacher · SA 190 · 80 pts · invited Feb round" }
  ];

  var css =
    '#viq-ticker{width:100%;background:#070F1C;border-bottom:1px solid rgba(0,200,150,0.25);height:34px;display:flex;align-items:center;overflow:hidden;position:sticky;top:0;z-index:101;box-sizing:border-box;}' +
    '#viq-ticker::before,#viq-ticker::after{content:"";position:absolute;top:0;bottom:0;width:60px;z-index:2;pointer-events:none;}' +
    '#viq-ticker::before{left:42px;background:linear-gradient(to right,#070F1C,transparent);}' +
    '#viq-ticker::after{right:0;background:linear-gradient(to left,#070F1C,transparent);}' +
    '#viq-ticker-badge{flex-shrink:0;background:#00C896;color:#000;font-size:0.6rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:0 10px;height:100%;display:flex;align-items:center;white-space:nowrap;z-index:3;}' +
    '#viq-ticker-mask{flex:1;overflow:hidden;height:100%;display:flex;align-items:center;min-width:0;}' +
    '#viq-ticker-track{display:flex;align-items:center;white-space:nowrap;animation:viqScroll 60s linear infinite;}' +
    '#viq-ticker-mask:hover #viq-ticker-track{animation-play-state:paused;}' +
    '@keyframes viqScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}' +
    '.viq-item{display:inline-flex;align-items:center;gap:6px;padding:0 26px;font-size:0.76rem;font-family:"DM Sans",sans-serif;white-space:nowrap;line-height:1;}' +
    '.viq-dot{display:inline-block;width:3px;height:3px;border-radius:50%;background:rgba(0,200,150,0.4);margin:0 2px;}' +
    '@media(max-width:600px){.viq-item{font-size:0.7rem;padding:0 18px;}}';

  function buildItems(items) {
    return items.map(function(item) {
      var text = item.text.replace(/^([^·]+)/, '<b style="color:' + item.color + '">$1</b>');
      return '<span class="viq-item"><span>' + item.icon + '</span>&nbsp;<span style="color:#E8EDF5">' + text + '</span><span class="viq-dot"></span></span>';
    }).join('');
  }

  function inject() {
    if (document.getElementById('viq-ticker')) return;
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    var inner = buildItems(ITEMS) + buildItems(ITEMS);
    var ticker = document.createElement('div');
    ticker.id = 'viq-ticker';
    ticker.innerHTML = '<div id="viq-ticker-badge">Live</div><div id="viq-ticker-mask"><div id="viq-ticker-track">' + inner + '</div></div>';
    var nav = document.querySelector('nav');
    if (nav && nav.parentNode) {
      nav.parentNode.insertBefore(ticker, nav);
    } else {
      document.body.insertBefore(ticker, document.body.firstChild);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
