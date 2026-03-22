(function () {

  var ITEMS = [
    { icon: "✓",  color: "#10B981", text: "Registered Nurse · SA 190 · 75 pts · granted 3 days ago" },
    { icon: "📡", color: "#00C896", text: "TAS ran a 491 round · Chefs invited · cutoff 65 pts · March 18" },
    { icon: "⏱",  color: "#4E8EFF", text: "190 visa processing · NSW · now averaging 11 months · updated March 2026" },
    { icon: "📊", color: "#7A8FA8", text: "Accountant EOI pool · 15,240 active EOIs · up 340 this month" },
    { icon: "⚠️", color: "#F59E0B", text: "SA Talent and Innovation stream · reopened March 20 · limited places" },
    { icon: "✓",  color: "#10B981", text: "Software Engineer · ACT 491 · 80 pts · granted 5 days ago" },
    { icon: "📡", color: "#00C896", text: "189 Round 3 · 2025-26 · expected Jan-Mar 2026 · prepare your EOI now" },
    { icon: "⏱",  color: "#4E8EFF", text: "485 visa · new DHA target 25 days · current average 83 days" },
    { icon: "📊", color: "#7A8FA8", text: "Civil Engineer EOI pool · 5,200 active EOIs · 85 pt cutoff Nov 2025" },
    { icon: "⚠️", color: "#F59E0B", text: "485 visa fee increase · $4,600 from 1 March 2026 · applies now" },
    { icon: "✓",  color: "#10B981", text: "Electrician · QLD 190 · 65 pts · granted 1 week ago" },
    { icon: "📡", color: "#00C896", text: "NSW 190 round · March 2026 · Construction and Digital sectors priority" },
    { icon: "⏱",  color: "#4E8EFF", text: "186 TRT Standard · currently processing March 2024 lodgements" },
    { icon: "📊", color: "#7A8FA8", text: "Registered Nurse EOI pool · 2,100 active EOIs · Tier 1 priority" },
    { icon: "⚠️", color: "#F59E0B", text: "189 quarterly rounds · 2 of 4 complete · 16,887 invitations issued 2025-26" }
  ];

  var css =
    /* Ticker sits ABOVE nav in normal document flow — no sticky, no z-index conflict */
    '#viq-ticker{' +
      'width:100%;' +
      'background:#070F1C;' +
      'border-bottom:1px solid rgba(0,200,150,0.25);' +
      'height:34px;' +
      'display:flex !important;' +
      'align-items:center;' +
      'overflow:hidden;' +
      'position:relative;' +   /* NOT sticky — sits in flow above nav */
      'z-index:1;' +
      'box-sizing:border-box;' +
    '}' +
    '#viq-ticker::before,#viq-ticker::after{content:"";position:absolute;top:0;bottom:0;width:60px;z-index:2;pointer-events:none;}' +
    '#viq-ticker::before{left:42px;background:linear-gradient(to right,#070F1C 0%,transparent 100%);}' +
    '#viq-ticker::after{right:0;background:linear-gradient(to left,#070F1C 0%,transparent 100%);}' +
    '#viq-ticker-badge{' +
      'flex-shrink:0;background:#00C896;color:#000;' +
      'font-size:0.6rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;' +
      'padding:0 10px;height:100%;display:flex;align-items:center;white-space:nowrap;z-index:3;' +
    '}' +
    '#viq-ticker-mask{flex:1;overflow:hidden;height:100%;display:flex;align-items:center;min-width:0;}' +
    '#viq-ticker-track{display:flex;align-items:center;white-space:nowrap;will-change:transform;animation:viqScroll 55s linear infinite;}' +
    '#viq-ticker-mask:hover #viq-ticker-track{animation-play-state:paused;}' +
    '@keyframes viqScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}' +
    '.viq-item{display:inline-flex;align-items:center;gap:6px;padding:0 26px;font-size:0.76rem;font-family:"DM Sans",sans-serif;white-space:nowrap;line-height:1;}' +
    '.viq-icon{font-size:0.78rem;line-height:1;flex-shrink:0;}' +
    '.viq-text{color:#E8EDF5;line-height:1;}' +
    '.viq-text b{font-weight:700;}' +
    '.viq-dot{display:inline-block;width:3px;height:3px;border-radius:50%;background:rgba(0,200,150,0.4);margin:0 2px;flex-shrink:0;}' +
    '@media(max-width:600px){.viq-item{font-size:0.7rem;padding:0 18px;}}';

  function buildItems(items) {
    return items.map(function(item) {
      var text = item.text.replace(/^([^·]+)/, '<b style="color:' + item.color + '">$1</b>');
      return (
        '<span class="viq-item">' +
          '<span class="viq-icon">' + item.icon + '</span>' +
          '<span class="viq-text">' + text + '</span>' +
          '<span class="viq-dot"></span>' +
        '</span>'
      );
    }).join('');
  }

  function inject() {
    if (document.getElementById('viq-ticker')) return;

    /* Styles */
    var style = document.createElement('style');
    style.id = 'viq-ticker-css';
    style.textContent = css;
    document.head.appendChild(style);

    /* Ticker element */
    var inner = buildItems(ITEMS) + buildItems(ITEMS);
    var ticker = document.createElement('div');
    ticker.id = 'viq-ticker';
    ticker.setAttribute('role', 'marquee');
    ticker.innerHTML =
      '<div id="viq-ticker-badge">Live</div>' +
      '<div id="viq-ticker-mask">' +
        '<div id="viq-ticker-track">' + inner + '</div>' +
      '</div>';

    /* Insert BEFORE the nav — ticker shows above, nav sticky below */
    var nav = document.querySelector('nav');
    if (nav && nav.parentNode) {
      nav.parentNode.insertBefore(ticker, nav);
    } else {
      /* Fallback: top of body */
      var body = document.body;
      body.insertBefore(ticker, body.firstChild);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
