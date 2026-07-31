/* Games & Puzzles - Electric Current and its Effects | Grade 7 */
window.gamesData = [
  {
    title: "Circuit Symbols Match",
    icon: "🔌",
    description: "Match circuit components with their symbols",
    type: "Matching",
    html: `<div style="padding:10px;"><div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;" id="grid"></div><div id="msg" style="text-align:center;margin-top:15px;font-weight:700;"></div></div>`,
    init: function(area) {
      const items = [{n:'Battery',s:'🔋'},{n:'Bulb',s:'💡'},{n:'Switch',s:'🔘'},{n:'Wire',s:'➖'}];
      let left=[...items],right=[...items].sort(()=>Math.random()-0.5),sel=null,matched=0;
      const grid=area.querySelector('#grid');
      left.forEach((it,i)=>{const d=document.createElement('div');d.textContent=it.n;d.style.cssText='padding:12px;border-radius:8px;background:#4f46e5;color:#fff;text-align:center;cursor:pointer;';d.onclick=()=>{if(sel)return;sel={t:'l',i};d.style.background='#22c55e';check(d);};grid.appendChild(d);});
      right.forEach((it,i)=>{const d=document.createElement('div');d.textContent=it.s;d.style.cssText='padding:12px;border-radius:8px;background:#4f46e5;color:#fff;text-align:center;cursor:pointer;font-size:24px;';d.onclick=()=>{if(sel)return;sel={t:'r',i,el:d};d.style.background='#22c55e';check(d);};grid.appendChild(d);});
      function check(el){if(!sel)return;if(sel.t===(sel.el===el?'r':'l')){if(items[sel.i].n===items[sel.i].n){el.style.background='#22c55e';matched++;area.querySelector('#msg').textContent='✅ Match!';setTimeout(()=>{sel=null;area.querySelector('#msg').textContent='';},500);}else{el.style.background='#ef4444';area.querySelector('#msg').textContent='❌ Try again!';setTimeout(()=>{el.style.background='#4f46e5';sel=null;area.querySelector('#msg').textContent='';},800);}}}
    }
  }
];
