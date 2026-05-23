// VisaIQ Email Capture — Universal
// Paste this script tag on every page:
// <script src="/email-capture.js"></script>

(function(){
  var ML_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMzI1ZDc5Mzg4MmU0YWJiM2NlNzM4ZGY3YmM0ZWM0NGQ2MmVhODJmMWY2NDdmMjVkODA3ZTZhNWVhMjQzOTgxYTUwNDFlM2ZmMWNkZmRjODYiLCJpYXQiOjE3Nzk1MTEyNzUuMzc1MzE5LCJuYmYiOjE3Nzk1MTEyNzUuMzc1MzIxLCJleHAiOjQ5MzUxODQ4NzUuMzcwNDEyLCJzdWIiOiIyMzMwODQzIiwic2NvcGVzIjpbXX0.jpxG4jxmbcpeu5A6VeB9Dqvp90tBzurSMCv2S_Je-EUrtz25Wa3bKPqLQfPScaTOm2cTbEp4AioN24ubXmJepFdhefkT2qcNxkbTuFo0thDQd9J7kayP5zlRiI2KdTuaFOJ7rZGdw-vSaDDmzFbUPKaQVIpQwBg_uftIRytJuS9bUVGUSUqQ6QOKFqIvxjgRp-q0RyhcMN7cN2F5KOzzGn9s5RwC8SF8i1mMVWg_ixeoUktq0uAXtqgLDyF4bUko4k13VNV_284V7ZP-D3YGbuaV34c_hLCgh-dVKIeHanfPxlMYn7oBfRd0sU0rQAC51gl7QJD1UeVlCb-ZreZXJYazZVtzCxIVYJvBy8MOjd30M8cxJJH2hlo4eyDp31X15rSP9ZSx91QL5nM2b7HzRkRqOoIJm73SpLvz9ZdMS0s6O8jS9fVXOLprCkIkWyaBj4DmxEWpRJTiEABWeFiQ_PKIXyQW9IU2DT4JsuVTU_IPHMyNd-dyaJgDuCqdsOAIqcXZiu1P4jGQa7LSOoVx4NEododvgrmY9R2UoljSNHZCq44n572uf6f6sJAjsznvconLdpA6pzeNNvdK0HlSKnTvjCV3oNnI9TbcajXnanYo1DWiwfaZ98yvhhTHAGeEHr0LdyODtbtNLm11dtHMVOFvpJ9yrgwk3QPIsvNHezE';

  // Page context detection
  var page = window.location.pathname;
  var pageLabel = page.includes('eoi') ? 'EOI Queue Tool'
    : page.includes('student') ? 'Student Visa Tool'
    : page.includes('partner') ? 'Partner Visa Tool'
    : page.includes('482') ? '482 Visa Tool'
    : page.includes('report-success') ? 'Paid Report'
    : page.includes('report') ? 'Report Landing'
    : page.includes('points') ? 'Points Calculator'
    : 'Homepage';

  // Context-specific messaging
  var MESSAGES = {
    'EOI Queue Tool':   {icon:'📊', title:'Get round alerts for your occupation', sub:'We\'ll email you within 24 hours of every DHA invitation round — with the cutoff and how it affects your queue position.'},
    'Student Visa Tool':{icon:'🎓', title:'Stay updated on student visa changes', sub:'Fee increases, GSR policy updates, work rights changes — straight to your inbox as they happen.'},
    'Partner Visa Tool':{icon:'💑', title:'Track partner visa processing times', sub:'Get notified when DHA processing times change for the 820/801 and when policy updates affect your application.'},
    '482 Visa Tool':    {icon:'🏢', title:'482 TSMIT & policy alerts', sub:'The TSMIT rises to $79,499 on 1 Jul 2026. Get notified of salary threshold changes and 186 TRT updates.'},
    'Paid Report':      {icon:'✅', title:'Your report is saved', sub:'Enter your email to access your report anytime and get alerted when your occupation\'s cutoff changes.'},
    'Report Landing':   {icon:'📋', title:'Free queue update for your occupation', sub:'Enter your occupation and email — we\'ll send you the latest SkillSelect pool data and cutoff for your next round.'},
    'Points Calculator':{icon:'🧮', title:'Get notified when cutoffs change', sub:'Your points score matters most when cutoffs shift. We\'ll alert you the moment DHA changes invitation thresholds.'},
    'Homepage':         {icon:'🇦🇺', title:'Australia visa updates — straight to you', sub:'DHA round alerts, policy changes, state nomination openings. One email, only when something changes that affects you.'},
  };

  var msg = MESSAGES[pageLabel] || MESSAGES['Homepage'];

  // ── STYLES ──
  var style = document.createElement('style');
  style.innerHTML = `
    #viq-overlay{position:fixed;inset:0;background:rgba(11,28,46,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:1rem;backdrop-filter:blur(4px);animation:viqFadeIn 0.3s ease}
    @keyframes viqFadeIn{from{opacity:0}to{opacity:1}}
    #viq-modal{background:#F8F7F3;border-radius:20px;max-width:420px;width:100%;box-shadow:0 24px 64px rgba(0,0,0,0.2);animation:viqSlideUp 0.35s ease;overflow:hidden;position:relative}
    @keyframes viqSlideUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
    #viq-modal-top{background:#0B1C2E;padding:1.5rem 1.5rem 1.25rem;position:relative}
    #viq-modal-top::before{content:'';position:absolute;top:-40px;right:-40px;width:150px;height:150px;background:radial-gradient(circle,rgba(200,145,58,0.2),transparent 70%);pointer-events:none}
    .viq-close{position:absolute;top:0.85rem;right:0.85rem;background:rgba(255,255,255,0.1);border:none;color:rgba(255,255,255,0.5);width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all 0.2s;font-family:sans-serif}
    .viq-close:hover{background:rgba(255,255,255,0.2);color:#fff}
    .viq-icon{font-size:1.75rem;margin-bottom:0.65rem;display:block}
    .viq-title{font-family:'Playfair Display',Georgia,serif;font-size:1.2rem;font-weight:400;color:#fff;line-height:1.2;margin-bottom:0.35rem}
    .viq-title em{font-style:italic;color:#E0A94E}
    .viq-sub{font-size:0.8rem;color:rgba(255,255,255,0.45);line-height:1.6}
    #viq-modal-body{padding:1.25rem 1.5rem 1.5rem}
    .viq-what{background:#fff;border:1px solid #E2DFD6;border-radius:10px;padding:0.85rem;margin-bottom:1rem}
    .viq-what-label{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#6B7280;margin-bottom:0.5rem}
    .viq-tick{display:flex;align-items:center;gap:7px;font-size:0.78rem;color:#1A1A1A;margin-bottom:5px}
    .viq-tick::before{content:'✓';color:#0A8F67;font-weight:700;font-size:11px;flex-shrink:0}
    .viq-tick:last-child{margin-bottom:0}
    .viq-input-row{display:flex;gap:8px;margin-bottom:0.65rem}
    .viq-input{flex:1;padding:0.7rem 0.9rem;border:1.5px solid #E2DFD6;border-radius:9px;font-family:'Outfit',sans-serif;font-size:0.9rem;color:#0B1C2E;outline:none;transition:border-color 0.2s;background:#fff}
    .viq-input:focus{border-color:#C8913A}
    .viq-btn{padding:0.7rem 1.1rem;background:#C8913A;color:#0B1C2E;border:none;border-radius:9px;font-family:'Outfit',sans-serif;font-size:0.88rem;font-weight:700;cursor:pointer;transition:all 0.2s;white-space:nowrap}
    .viq-btn:hover{background:#E0A94E}
    .viq-btn:disabled{opacity:0.5;cursor:not-allowed}
    .viq-fine{font-size:10px;color:#9CA3AF;text-align:center;line-height:1.5}
    .viq-success{text-align:center;padding:0.5rem 0}
    .viq-success-icon{font-size:2.5rem;margin-bottom:0.5rem}
    .viq-success-title{font-family:'Playfair Display',Georgia,serif;font-size:1.1rem;color:#0B1C2E;margin-bottom:0.35rem}
    .viq-success-sub{font-size:0.82rem;color:#6B7280;line-height:1.6}

    /* Inline bar (shown on pages after result) */
    #viq-inline{background:linear-gradient(135deg,#0B1C2E,#12263D);border-radius:14px;padding:1.25rem 1.5rem;margin:1.5rem 0;display:none}
    #viq-inline .viq-inline-title{font-family:'Playfair Display',Georgia,serif;font-size:1rem;color:#fff;margin-bottom:0.25rem}
    #viq-inline .viq-inline-title em{color:#E0A94E;font-style:italic}
    #viq-inline .viq-inline-sub{font-size:0.78rem;color:rgba(255,255,255,0.4);margin-bottom:0.85rem;line-height:1.5}
    #viq-inline .viq-input-row{margin-bottom:0}

    /* Floating tab (desktop, right side) */
    #viq-tab{position:fixed;right:-180px;top:50%;transform:translateY(-50%);z-index:999;transition:right 0.4s ease;display:none}
    #viq-tab.show{right:0}
    #viq-tab-inner{background:#0B1C2E;border-radius:12px 0 0 12px;padding:1rem 0.85rem;cursor:pointer;border:1px solid rgba(200,145,58,0.3);border-right:none;box-shadow:-4px 0 20px rgba(0,0,0,0.15)}
    #viq-tab-trigger{writing-mode:vertical-rl;text-orientation:mixed;transform:rotate(180deg);font-size:11px;font-weight:700;color:#E0A94E;letter-spacing:0.06em;text-transform:uppercase;display:flex;align-items:center;gap:6px;white-space:nowrap}
    #viq-tab-dot{width:8px;height:8px;border-radius:50%;background:#0A8F67;animation:viqPulse 2s infinite;flex-shrink:0}
    @keyframes viqPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(0.8)}}

    @media(max-width:480px){
      #viq-modal{border-radius:16px}
      #viq-modal-top{padding:1.25rem 1.25rem 1rem}
      #viq-modal-body{padding:1rem 1.25rem 1.25rem}
      #viq-tab{display:none!important}
    }
  `;
  document.head.appendChild(style);

  // ── SUBSCRIBE TO MAILERLITE ──
  function subscribe(email, source, cb){
    if(!email || !email.includes('@')){cb(false,'Please enter a valid email address.');return;}
    fetch('https://connect.mailerlite.com/api/subscribers',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer '+ML_KEY
      },
      body:JSON.stringify({
        email:email,
        fields:{source:source, page:pageLabel},
        status:'active'
      })
    })
    .then(function(r){
      if(r.status===200||r.status===201){cb(true);}
      else{r.json().then(function(d){cb(false,d.message||'Something went wrong — try again.');});}
    })
    .catch(function(){cb(false,'Network error — please try again.');});
  }

  // ── POPUP MODAL ──
  function buildModal(){
    var overlay = document.createElement('div');
    overlay.id = 'viq-overlay';
    overlay.innerHTML = `
      <div id="viq-modal">
        <div id="viq-modal-top">
          <button class="viq-close" onclick="document.getElementById('viq-overlay').remove();localStorage.setItem('viq_dismissed','1')">×</button>
          <span class="viq-icon">${msg.icon}</span>
          <div class="viq-title">Stay ahead of<br><em>every round.</em></div>
          <div class="viq-sub">${msg.sub}</div>
        </div>
        <div id="viq-modal-body">
          <div class="viq-what">
            <div class="viq-what-label">What you'll get</div>
            <div class="viq-tick">DHA invitation round alerts — within 24hrs</div>
            <div class="viq-tick">Cutoff changes for your occupation</div>
            <div class="viq-tick">State nomination open/close alerts</div>
            <div class="viq-tick">Policy updates that affect your visa</div>
          </div>
          <div id="viq-modal-form">
            <div class="viq-input-row">
              <input class="viq-input" id="viq-modal-email" type="email" placeholder="your@email.com">
              <button class="viq-btn" id="viq-modal-btn" onclick="viqModalSubmit()">Get alerts →</button>
            </div>
            <div class="viq-fine">No spam. Unsubscribe anytime. Free.</div>
          </div>
          <div id="viq-modal-success" style="display:none" class="viq-success">
            <div class="viq-success-icon">✅</div>
            <div class="viq-success-title">You're on the list</div>
            <div class="viq-success-sub">We'll alert you the moment something changes for your occupation or visa type.</div>
          </div>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click',function(e){if(e.target===overlay){overlay.remove();localStorage.setItem('viq_dismissed','1');}});
  }

  window.viqModalSubmit = function(){
    var email = document.getElementById('viq-modal-email').value.trim();
    var btn = document.getElementById('viq-modal-btn');
    btn.disabled = true;
    btn.textContent = '…';
    subscribe(email,'popup_modal',function(ok,err){
      if(ok){
        document.getElementById('viq-modal-form').style.display='none';
        document.getElementById('viq-modal-success').style.display='block';
        localStorage.setItem('viq_subscribed','1');
        setTimeout(function(){var o=document.getElementById('viq-overlay');if(o)o.remove();},3000);
      } else {
        btn.disabled=false;
        btn.textContent='Get alerts →';
        document.getElementById('viq-modal-email').style.borderColor='#B91C1C';
        document.getElementById('viq-modal-email').placeholder=err||'Try again';
      }
    });
  };

  // ── FLOATING TAB (desktop) ──
  function buildTab(){
    if(window.innerWidth < 768) return;
    var tab = document.createElement('div');
    tab.id = 'viq-tab';
    tab.innerHTML = `<div id="viq-tab-inner" onclick="viqOpenPopup()"><div id="viq-tab-trigger"><span id="viq-tab-dot"></span>Get round alerts</div></div>`;
    document.body.appendChild(tab);
    setTimeout(function(){tab.classList.add('show');},2000);
  }

  window.viqOpenPopup = function(){
    if(document.getElementById('viq-overlay')) return;
    buildModal();
    var tab=document.getElementById('viq-tab');
    if(tab) tab.style.display='none';
  };

  // ── INLINE CAPTURE (call this from any page after results load) ──
  // Usage: viqShowInline(containerEl, 'EOI result')
  window.viqShowInline = function(container, source){
    if(localStorage.getItem('viq_subscribed')) return;
    var div = document.createElement('div');
    div.id = 'viq-inline';
    div.style.display = 'block';
    div.innerHTML = `
      <div class="viq-inline-title">${msg.icon} ${msg.title}.<br><em>We'll alert you.</em></div>
      <div class="viq-inline-sub">${msg.sub}</div>
      <div id="viq-inline-form">
        <div class="viq-input-row">
          <input class="viq-input" id="viq-inline-email" type="email" placeholder="your@email.com" style="background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.15);color:#fff">
          <button class="viq-btn" id="viq-inline-btn" onclick="viqInlineSubmit('${source}')">Subscribe →</button>
        </div>
      </div>
      <div id="viq-inline-success" style="display:none;text-align:center;color:#34D399;font-size:0.88rem;font-weight:600;padding:0.5rem 0">✓ You're subscribed — we'll alert you next round</div>`;
    container.appendChild(div);
  };

  window.viqInlineSubmit = function(source){
    var email = document.getElementById('viq-inline-email').value.trim();
    var btn = document.getElementById('viq-inline-btn');
    btn.disabled=true; btn.textContent='…';
    subscribe(email, source||'inline', function(ok,err){
      if(ok){
        document.getElementById('viq-inline-form').style.display='none';
        document.getElementById('viq-inline-success').style.display='block';
        localStorage.setItem('viq_subscribed','1');
      } else {
        btn.disabled=false; btn.textContent='Subscribe →';
        document.getElementById('viq-inline-email').placeholder=err||'Try again';
        document.getElementById('viq-inline-email').style.borderColor='#F87171';
      }
    });
  };

  // ── TRIGGER LOGIC ──
  // Don't show popup if already subscribed or dismissed in this session
  function shouldShow(){
    if(localStorage.getItem('viq_subscribed')) return false;
    if(sessionStorage.getItem('viq_shown')) return false;
    return true;
  }

  function init(){
    buildTab();

    if(!shouldShow()) return;

    // Report success page — show inline after report generates, not popup
    if(page.includes('report-success')) return;

    // All other pages — show popup after delay
    // Exit intent on desktop
    if(window.innerWidth >= 768){
      document.addEventListener('mouseleave', function handler(e){
        if(e.clientY <= 0 && shouldShow()){
          document.removeEventListener('mouseleave', handler);
          sessionStorage.setItem('viq_shown','1');
          buildModal();
        }
      });
    }

    // Mobile — show after 25 seconds of engagement
    if(window.innerWidth < 768){
      setTimeout(function(){
        if(shouldShow()){
          sessionStorage.setItem('viq_shown','1');
          buildModal();
        }
      }, 25000);
    }

    // Scroll trigger — show after 60% scroll on any page
    window.addEventListener('scroll', function handler(){
      var scrollPct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if(scrollPct > 60 && shouldShow()){
        window.removeEventListener('scroll', handler);
        sessionStorage.setItem('viq_shown','1');
        setTimeout(function(){buildModal();}, 800);
      }
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
