javascript:(function(){if(window._funGuiOpen){document.getElementById('_funGui')?.remove();window._funGuiOpen=false;window._funGuiRemoveMode&&deactivateRemoveMode();return}window._funGuiOpen=true;const style=document.createElement('style');style.id='_funGuiStyle';style.textContent=`

@keyframes _fgSpin{0%{transform:rotate(0)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}

@keyframes _fgFadeOut{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.95)}}

@keyframes _fgPulse{0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)}}

._fgFadeOut{animation:_fgFadeOut 0.3s ease forwards;pointer-events:none!important;}

._fgHighlight{outline:3px dashed rgba(69,170,255,0.7)!important;background-color:rgba(69,170,255,0.1)!important;animation:_fgPulse 1.5s infinite!important;}

#_funGui{position:fixed;right:20px;top:20px;width:320px;z-index:2147483647;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.2);font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#333;transition:all 0.3s ease}

#_funGui header{background:linear-gradient(135deg,#4facfe 0%,#00f2fe 100%);color:white;padding:12px;text-align:center;font-weight:600;font-size:16px;position:relative}

#_funGui .content{padding:15px}

#_funGui h3{margin:12px 0 8px;font-size:14px;color:#444;font-weight:500}

#_funGui input,#_funGui button{width:100%;margin:5px 0;padding:9px 12px;font-size:14px;border-radius:6px;border:1px solid #ddd;box-sizing:border-box}

#_funGui button{background:#f8f9fa;cursor:pointer;transition:all 0.2s;font-weight:500;border:1px solid #e1e5e9}

#_funGui button:hover{background:#e9ecef;transform:translateY(-1px)}

#_funGui button:active{transform:translateY(0)}

#_funGui .active{background:#4facfe!important;color:white!important;border-color:#4facfe!important}

#_funGui .crazy{background:linear-gradient(135deg,#ff6b6b,#feca57);color:white;font-weight:600;border:none;box-shadow:0 2px 8px rgba(255,107,107,0.3)}

#_funGui .row{display:flex;gap:10px;margin-bottom:10px}

#_funGui .row input{flex:1}

#_funGui .closeBtn{position:absolute;right:8px;top:8px;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;background:rgba(0,0,0,0.1);color:white;border:none;cursor:pointer;transition:all 0.2s}

#_funGui .closeBtn:hover{background:rgba(0,0,0,0.2);transform:scale(1.1)}

#_funGui .hint{font-size:12px;color:#6c757d;margin:10px 0;text-align:center;opacity:0.8}

._fgConfirmDialog{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:20px;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,0.2);z-index:2147483648;width:300px;max-width:90%;text-align:center;font-family:'Segoe UI',system-ui,-apple-system,sans-serif}

._fgConfirmDialog h3{margin-top:0;color:#333;font-size:16px}

._fgConfirmDialog .buttons{display:flex;justify-content:center;gap:10px;margin-top:15px}

._fgConfirmDialog button{padding:8px 16px;border-radius:6px;border:none;cursor:pointer;font-weight:500;transition:all 0.2s}

._fgConfirmDialog #_fgConfirmRemove{background:#ff4757;color:white}

._fgConfirmDialog #_fgConfirmRemove:hover{background:#ff6b81}

._fgConfirmDialog #_fgCancelRemove{background:#f1f3f5;color:#333}

._fgConfirmDialog #_fgCancelRemove:hover{background:#e9ecef}

._fgAnim *{transition:all 0.3s ease}

`;document.head.appendChild(style);const panel=document.createElement('div');panel.id='_funGui';panel.innerHTML=`

<header>🎨 Fun GUI Controls

<button class="closeBtn" id="_fgClose">×</button>

</header>

<div class="content">

<div class="section">

<h3>📝 Text Styling</h3>

<input id="_fgFont" placeholder="Font family (e.g., Comic Sans MS)">

<button id="_fgApplyFont">Apply Font</button>

</div>



<div class="section">

<h3>🎨 Colors</h3>

<div class="row">

<input type="color" id="_fgBg" value="#ffffff">

<input type="color" id="_fgText" value="#333333">

</div>

<button id="_fgApplyColors">Apply Colors</button>

</div>



<div class="section">

<h3>✨ Effects</h3>

<button id="_fgToggleAnim">Toggle Animations</button>

<button id="_fgCrazy" class="crazy">🤪 CRAZY MODE</button>

<button id="_fgToggleRemoveMode">🗑️ Remove Elements Mode</button>

<div class="hint">Click elements to remove them (with confirmation)</div>

</div>

</div>

`;document.body.appendChild(panel);let removeModeActive=false,clickedElement=null,highlightTimeout=null;function applyFont(f){f&&(document.documentElement.style.fontFamily=f)}function applyColors(bg,txt){bg&&(document.body.style.background=bg);txt&&(document.body.style.color=txt)}function toggleAnim(){document.documentElement.classList.toggle('_fgAnim')}function randomChoice(a){return a[Math.floor(Math.random()*a.length)]}function crazyMode(){const fonts=['Comic Sans MS','Impact','Georgia','Papyrus','Courier New','Times New Roman','Arial Black','Verdana','Consolas','Segoe UI','Arial Narrow','Fantasy','Cursive'];const colors=['#ffadad','#ffd6a5','#fdffb6','#caffbf','#9bf6ff','#a0c4ff','#bdb2ff','#ffc6ff','#ffff99','#98fb98'];applyFont(randomChoice(fonts));applyColors(randomChoice(colors),randomChoice(colors));toggleAnim();document.querySelectorAll('*').forEach(el=>{el.style.transition='all 0.5s ease';el.style.transform=`rotate(${Math.random()*20-10}deg) translate(${Math.random()*20-10}px,${Math.random()*20-10}px)`;el.style.filter=`hue-rotate(${Math.random()*360}deg) saturate(${1+Math.random()*2})`;if(Math.random()>0.7)el.style.animation='_fgSpin 2s linear infinite';if(el.tagName==='IMG')el.style.filter='invert(1) sepia(1) saturate(5) hue-rotate(200deg)'})}function activateRemoveMode(){if(removeModeActive)return;removeModeActive=true;document.getElementById('_fgToggleRemoveMode').classList.add('active');document.getElementById('_fgToggleRemoveMode').innerHTML='🔴 Remove Mode ON';document.addEventListener('mouseover',highlightElement,true);document.addEventListener('click',handleElementClick,true)}function deactivateRemoveMode(){if(!removeModeActive)return;removeModeActive=false;document.getElementById('_fgToggleRemoveMode').classList.remove('active');document.getElementById('_fgToggleRemoveMode').innerHTML='🗑️ Remove Elements Mode';document.removeEventListener('mouseover',highlightElement,true);document.removeEventListener('click',handleElementClick,true);clearTimeout(highlightTimeout);document.querySelectorAll('._fgHighlight').forEach(el=>el.classList.remove('_fgHighlight'))}function highlightElement(e){if(e.target.closest('#_funGui')||e.target===document.body||e.target===document.documentElement)return;clearTimeout(highlightTimeout);document.querySelectorAll('._fgHighlight').forEach(el=>el.classList.remove('_fgHighlight'));e.target.classList.add('_fgHighlight');highlightTimeout=setTimeout(()=>{e.target.classList.remove('_fgHighlight')},1000)}function handleElementClick(e){if(e.target.closest('#_funGui')||e.target===document.body||e.target===document.documentElement)return;e.preventDefault();e.stopPropagation();clickedElement=e.target;showConfirmationDialog()}function showConfirmationDialog(){const existingDialog=document.getElementById('_fgConfirmDialog');if(existingDialog)existingDialog.remove();const dialog=document.createElement('div');dialog.id='_fgConfirmDialog';dialog.className='_fgConfirmDialog';dialog.innerHTML=`

<h3>Remove Element</h3>

<p>Are you sure you want to remove this element?</p>

<div class="buttons">

<button id="_fgConfirmRemove">Remove</button>

<button id="_fgCancelRemove">Cancel</button>

</div>

`;document.body.appendChild(dialog);document.getElementById('_fgConfirmRemove').onclick=function(){removeElement(clickedElement);dialog.remove()};document.getElementById('_fgCancelRemove').onclick=function(){dialog.remove()}}function removeElement(element){if(!element)return;element.classList.add('_fgFadeOut');setTimeout(()=>{if(element&&element.parentNode)element.parentNode.removeChild(element)},300)}document.getElementById('_fgClose').onclick=function(){panel.remove();style.remove();window._funGuiOpen=false;deactivateRemoveMode()};document.getElementById('_fgApplyFont').onclick=function(){applyFont(document.getElementById('_fgFont').value.trim())};document.getElementById('_fgApplyColors').onclick=function(){applyColors(document.getElementById('_fgBg').value,document.getElementById('_fgText').value)};document.getElementById('_fgToggleAnim').onclick=toggleAnim;document.getElementById('_fgCrazy').onclick=crazyMode;document.getElementById('_fgToggleRemoveMode').onclick=function(){removeModeActive?deactivateRemoveMode():activateRemoveMode()};window.addEventListener('beforeunload',function(){removeModeActive&&deactivateRemoveMode()})})();
