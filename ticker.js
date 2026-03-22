/**
 * VisaIQ Live Intelligence Ticker
 * Add one line to any page: <script src="/ticker.js"></script>
 * Reads from /ticker-data.json — update that file to push new items to all pages
 */
(function() {
  const TICKER_STYLES = `
    #visaiq-ticker {
      position: relative;
      background: #070F1C;
      border-bottom: 1px solid rgba(0,200,150,0.2);
      overflow: hidden;
      height: 36px;
      display: flex;
      align-items: center;
      z-index: 99;
    }
    #visaiq-ticker::before,
    #visaiq-ticker::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 80px;
      z-index: 2;
      pointer-events: none;
    }
    #visaiq-ticker::before {
      left: 0;
      background: linear-gradient(to right, #070F1C 0%, transparent 100%);
    }
    #visaiq-ticker::after {
      right: 0;
      background: linear-gradient(to left, #070F1C 0%, transparent 100%);
    }
    #visaiq-ticker-label {
      flex-shrink: 0;
      background: #00C896;
      color: #000;
      font-family: 'Syne', sans-serif;
      font-size: 0.65rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 0 0.75rem;
      height: 100%;
      display: flex;
      align-items: center;
      white-space: nowrap;
      z-index: 3;
    }
    #visaiq-ticker-track {
      overflow: hidden;
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
    }
    #visaiq-ticker-inner {
      display: flex;
      align-items: center;
      gap: 0;
      white-space: nowrap;
      animation: tickerScroll 60s linear infinite;
      will-change: transform;
    }
    #visaiq-ticker-track:hover #visaiq-ticker-inner {
      animation-play-state: paused;
    }
    @keyframes tickerScroll {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .ticker-item {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0 2rem;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.78rem;
      color: #00C896;
      white-space: nowrap;
    }
    .ticker-item-icon {
      font-size: 0.8rem;
    }
    .ticker-item-text {
      color: #E8EDF5;
    }
    .ticker-item-text strong {
      color: #00C896;
    }
    .ticker-divider {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: rgba(0,200,150,0.4);
      margin: 0 0.5rem;
      flex-shrink: 0;
    }
    .ticker-item-grant .ticker-item-text strong { color: #10B981; }
    .ticker-item-round .ticker-item-text strong { color: #00C896; }
    .ticker-item-processing .ticker-item-text strong { color: #4E8EFF; }
    .ticker-item-queue .ticker-item-text strong { color: #7A8FA8; }
    .ticker-item-policy .ticker-item-text strong { color: #F59E0B; }
    @media (max-width: 480px) {
      .ticker-item { font-size: 0.72rem; padding: 0 1.5rem; }
      #visaiq-ticker-label { font-size: 0.6rem; padding: 0 0.5rem; }
    }
  `;

  function injectStyles() {
    if (document.getElementById('visaiq-ticker-styles')) return;
    const style = document.createElement('style');
    style.id = 'visaiq-ticker-styles';
    style.textContent = TICKER_STYLES;
    document.head.appendChild(style);
  }

  function buildTickerHTML(items) {
    // Double the items so the scroll loops seamlessly
    const allItems = [...items, ...items];
    return allItems.map((item, i) => `
      <span class="ticker-item ticker-item-${item.type}">
        <span class="ticker-item-icon">${item.icon}</span>
        <span class="ticker-item-text">${formatText(item.text)}</span>
      </span>
      <span class="ticker-divider"></span>
    `).join('');
  }

  function formatText(text) {
    // Bold the first segment (before the first ·)
    return text.replace(/^([^·]+)/, '<strong>$1</strong>');
  }

  function insertTicker(items) {
    // Find the nav element
    const nav = document.querySelector('nav');
    if (!nav) return;

    const ticker = document.createElement('div');
    ticker.id = 'visaiq-ticker';
    ticker.innerHTML = `
      <div id="visaiq-ticker-label">Live</div>
      <div id="visaiq-ticker-track">
        <div id="visaiq-ticker-inner">
          ${buildTickerHTML(items)}
        </div>
      </div>
    `;

    // Insert immediately after nav
    nav.insertAdjacentElement('afterend', ticker);

    // Adjust scroll speed based on number of items
    const inner = ticker.querySelector('#visaiq-ticker-inner');
    const duration = Math.max(40, items.length * 8);
    inner.style.animationDuration = duration + 's';
  }

  function init() {
    injectStyles();

    // Fetch ticker data
    fetch('/ticker-data.json?v=' + Date.now())
      .then(r => r.json())
      .then(data => {
        if (data && data.items && data.items.length > 0) {
          insertTicker(data.items);
        }
      })
      .catch(err => {
        // Fail silently — ticker is enhancement, not critical
        console.log('VisaIQ ticker: could not load ticker-data.json');
      });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
