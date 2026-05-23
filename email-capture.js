(function(){
  var ML_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMzI1ZDc5Mzg4MmU0YWJiM2NlNzM4ZGY3YmM0ZWM0NGQ2MmVhODJmMWY2NDdmMjVkODA3ZTZhNWVhMjQzOTgxYTUwNDFlM2ZmMWNkZmRjODYiLCJpYXQiOjE3Nzk1MTEyNzUuMzc1MzE5LCJuYmYiOjE3Nzk1MTEyNzUuMzc1MzIxLCJleHAiOjQ5MzUxODQ4NzUuMzcwNDEyLCJzdWIiOiIyMzMwODQzIiwic2NvcGVzIjpbXX0.jpxG4jxmbcpeu5A6VeB9Dqvp90tBzurSMCv2S_Je-EUrtz25Wa3bKPqLQfPScaTOm2cTbEp4AioN24ubXmJepFdhefkT2qcNxkbTuFo0thDQd9J7kayP5zlRiI2KdTuaFOJ7rZGdw-vSaDDmzFbUPKaQVIpQwBg_uftIRytJuS9bUVGUSUqQ6QOKFqIvxjgRp-q0RyhcMN7cN2F5KOzzGn9s5RwC8SF8i1mMVWg_ixeoUktq0uAXtqgLDyF4bUko4k13VNV_284V7ZP-D3YGbuaV34c_hLCgh-dVKIeHanfPxlMYn7oBfRd0sU0rQAC51gl7QJD1UeVlCb-ZreZXJYazZVtzCxIVYJvBy8MOjd30M8cxJJH2hlo4eyDp31X15rSP9ZSx91QL5nM2b7HzRkRqOoIJm73SpLvz9ZdMS0s6O8jS9fVXOLprCkIkWyaBj4DmxEWpRJTiEABWeFiQ_PKIXyQW9IU2DT4JsuVTU_IPHMyNd-dyaJgDuCqdsOAIqcXZiu1P4jGQa7LSOoVx4NEododvgrmY9R2UoljSNHZCq44n572uf6f6sJAjsznvconLdpA6pzeNNvdK0HlSKnTvjCV3oNnI9TbcajXnanYo1DWiwfaZ98yvhhTHAGeEHr0LdyODtbtNLm11dtHMVOFvpJ9yrgwk3QPIsvNHezE';

  // Don't show on report-success (they already paid)
  if(window.location.pathname.includes('report-success')) return;
  // Don't show if already subscribed
  if(localStorage.getItem('viq_subscribed')) return;

  var style = document.createElement('style');
  style.innerHTML = `
    #viq-bar{
      position:fixed;bottom:0;left:0;right:0;z-index:9999;
      background:var(--navy,#0B1C2E);
      border-top:1px solid rgba(200,145,58,0.3);
      padding:0.75rem 5%;
      display:flex;align-items:center;gap:1rem;flex-wrap:wrap;
      box-shadow:0 -4px 24px rgba(0,0,0,0.15);
      animation:viqSlideUp 0.4s ease;
    }
    @keyframes viqSlideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
    #viq-bar .viq-left{display:flex;align-items:center;gap:0.75rem;flex:1;min-width:200px}
    #viq-bar .viq-pulse{width:8px;height:8px;border-radius:50%;background:#34D399;flex-shrink:0;animation:viqPulse 2s infinite}
    @keyframes viqPulse{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(52,211,153,0.4)}70%{opacity:0.8;box-shadow:0 0 0 6px rgba(52,211,153,0)}}
    #viq-bar .viq-text{font-family:'Outfit',sans-serif;font-size:0.84rem;color:rgba(255,255,255,0.85);line-height:1.4}
    #viq-bar .viq-text strong{color:#fff;font-weight:600}
    #viq-bar .viq-text span{color:rgba(255,255,255,0.45);font-size:0.75rem;display:block;margin-top:1px}
    #viq-bar .viq-right{display:flex;align-items:center;gap:8px}
    #viq-bar .viq-input{
      padding:0.55rem 0.9rem;
      background:rgba(255,255,255,0.09);
      border:1.5px solid rgba(255,255,255,0.15);
      border-radius:8px;
      font-family:'Outfit',sans-serif;font-size:0.84rem;
      color:#fff;outline:none;width:220px;
      transition:border-color 0.2s;
    }
    #viq-bar .viq-input:focus{border-color:rgba(200,145,58,0.6)}
    #viq-bar .viq-input::placeholder{color:rgba(255,255,255,0.3)}
    #viq-bar .viq-btn{
      padding:0.55rem 1.1rem;
      background:#C8913A;color:#0B1C2E;
      border:none;border-radius:8px;
      font-family:'Outfit',sans-serif;font-size:0.84rem;font-weight:700;
      cursor:pointer;transition:all 0.2s;white-space:nowrap;
    }
    #viq-bar .viq-btn:hover{background:#E0A94E}
    #viq-bar .viq-btn:disabled{opacity:0.5;cursor:not-allowed}
    #viq-bar .viq-dismiss{
      background:none;border:none;color:rgba(255,255,255,0.25);
      font-size:18px;cursor:pointer;padding:0 0.25rem;line-height:1;
      transition:color 0.2s;flex-shrink:0;font-family:sans-serif;
    }
    #viq-bar .viq-dismiss:hover{color:rgba(255,255,255,0.6)}
    #viq-bar .viq-success{
      font-family:'Outfit',sans-serif;font-size:0.84rem;
      color:#34D399;font-weight:600;display:none;
    }
    @media(max-width:600px){
      #viq-bar{padding:0.75rem 1rem;gap:0.65rem}
      #viq-bar .viq-input{width:100%}
      #viq-bar .viq-right{width:100%;flex-wrap:wrap}
      #viq-bar .viq-btn{flex:1}
    }
  `;
  document.head.appendChild(style);

  var bar = document.createElement('div');
  bar.id = 'viq-bar';
  bar.innerHTML = `
    <div class="viq-left">
      <span class="viq-pulse"></span>
      <div class="viq-text">
        <strong>Get DHA round alerts for your occupation</strong>
        <span>No spam · Only when something changes · Free · Unsubscribe anytime</span>
      </div>
    </div>
    <div class="viq-right">
      <input class="viq-input" id="viq-email" type="email" placeholder="your@email.com">
      <button class="viq-btn" id="viq-sub-btn" onclick="viqSubscribe()">Get alerts →</button>
      <div class="viq-success" id="viq-ok">✓ You're in!</div>
    </div>
    <button class="viq-dismiss" onclick="viqDismiss()" title="Dismiss">×</button>
  `;
  document.body.appendChild(bar);

  // Add bottom padding to body so content isn't hidden behind bar
  document.body.style.paddingBottom = '72px';

  window.viqSubscribe = function(){
    var email = document.getElementById('viq-email').value.trim();
    if(!email || !email.includes('@')){
      document.getElementById('viq-email').style.borderColor='#F87171';
      document.getElementById('viq-email').placeholder='Enter a valid email';
      return;
    }
    var btn = document.getElementById('viq-sub-btn');
    btn.disabled = true; btn.textContent = '…';

    fetch('https://connect.mailerlite.com/api/subscribers',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer '+ML_KEY
      },
      body:JSON.stringify({
        email:email,
        fields:{source:'sticky_bar', page:window.location.pathname},
        status:'active'
      })
    })
    .then(function(r){return r.json();})
    .then(function(d){
      localStorage.setItem('viq_subscribed','1');
      btn.style.display='none';
      document.getElementById('viq-email').style.display='none';
      document.getElementById('viq-ok').style.display='block';
      setTimeout(function(){
        var b=document.getElementById('viq-bar');
        if(b){b.style.animation='viqSlideUp 0.3s ease reverse';setTimeout(function(){b.remove();document.body.style.paddingBottom='';},300);}
      },2500);
    })
    .catch(function(){
      btn.disabled=false;btn.textContent='Get alerts →';
    });
  };

  window.viqDismiss = function(){
    var b=document.getElementById('viq-bar');
    if(b){
      b.style.transform='translateY(100%)';
      b.style.transition='transform 0.3s ease';
      setTimeout(function(){b.remove();document.body.style.paddingBottom='';},300);
    }
    // Show again next visit (sessionStorage not localStorage so it comes back)
    sessionStorage.setItem('viq_dismissed','1');
  };

  // Also expose inline embed for result pages
  window.viqShowInline = function(container, source){
    if(localStorage.getItem('viq_subscribed')) return;
    var div = document.createElement('div');
    div.style.cssText='background:linear-gradient(135deg,#0B1C2E,#12263D);border-radius:14px;padding:1.25rem 1.5rem;margin:1.5rem 0;border:1px solid rgba(200,145,58,0.2)';
    div.innerHTML=`
      <div style="font-family:'Playfair Display',Georgia,serif;font-size:1rem;color:#fff;margin-bottom:0.25rem">
        Stay ahead of <em style="color:#E0A94E;font-style:italic">every round.</em>
      </div>
      <div style="font-size:0.78rem;color:rgba(255,255,255,0.4);margin-bottom:0.85rem;line-height:1.5">
        We'll alert you within 24hrs of every DHA invitation round for your occupation. Free.
      </div>
      <div id="viq-il-form" style="display:flex;gap:8px;flex-wrap:wrap">
        <input id="viq-il-email" type="email" placeholder="your@email.com"
          style="flex:1;min-width:180px;padding:0.6rem 0.9rem;background:rgba(255,255,255,0.08);border:1.5px solid rgba(255,255,255,0.15);border-radius:8px;font-family:'Outfit',sans-serif;font-size:0.84rem;color:#fff;outline:none">
        <button onclick="viqIlSubmit('${source}')"
          style="padding:0.6rem 1.1rem;background:#C8913A;color:#0B1C2E;border:none;border-radius:8px;font-family:'Outfit',sans-serif;font-size:0.84rem;font-weight:700;cursor:pointer;white-space:nowrap">
          Get alerts →
        </button>
      </div>
      <div id="viq-il-ok" style="display:none;color:#34D399;font-size:0.84rem;font-weight:600;margin-top:0.5rem">✓ You're subscribed — we'll alert you next round</div>
      <div style="font-size:10px;color:rgba(255,255,255,0.2);margin-top:0.5rem">No spam. Unsubscribe anytime.</div>
    `;
    container.appendChild(div);
  };

  window.viqIlSubmit = function(source){
    var email=document.getElementById('viq-il-email').value.trim();
    if(!email||!email.includes('@')) return;
    fetch('https://connect.mailerlite.com/api/subscribers',{
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json','Authorization':'Bearer '+ML_KEY},
      body:JSON.stringify({email:email,fields:{source:source||'inline',page:window.location.pathname},status:'active'})
    }).then(function(){
      localStorage.setItem('viq_subscribed','1');
      document.getElementById('viq-il-form').style.display='none';
      document.getElementById('viq-il-ok').style.display='block';
      // Also hide the sticky bar
      var b=document.getElementById('viq-bar');
      if(b){b.remove();document.body.style.paddingBottom='';}
    }).catch(function(){});
  };

})();
