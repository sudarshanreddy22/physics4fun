/* Games & Puzzles - Friction | Grade 8 */
window.gamesData = [
  {
    title: "Friction Facts Quiz",
    icon: "🧠",
    description: "Test your knowledge about friction",
    type: "Quiz",
    html: `<div style="padding:10px;"><div id="q" style="font-size:14px;margin-bottom:15px;color:#fff;"></div><div id="opts" style="display:grid;gap:8px;"></div><div id="res" style="margin-top:15px;font-weight:700;"></div></div>`,
    init: function(area) {
      const qs = [
        { q: "Friction is caused by:", opts: ["Surface roughness", "Gravity", "Magnetism", "Electricity"], ans: 0 },
        { q: "Fluid friction is also called:", opts: ["Viscosity", "Density", "Pressure", "Tension"], ans: 0 },
        { q: "Ball bearings reduce friction by:", opts: ["Changing sliding to rolling", "Making surfaces smooth", "Adding lubricant", "Increasing weight"], ans: 0 }
      ];
      let qi = 0, score = 0;
      function showQ() {
        if (qi >= qs.length) { area.querySelector('#res').innerHTML = '🎉 Complete! Score: ' + score + '/' + qs.length; return; }
        area.querySelector('#q').textContent = (qi+1) + '. ' + qs[qi].q;
        const optsDiv = area.querySelector('#opts'); optsDiv.innerHTML = '';
        qs[qi].opts.forEach((opt, i) => {
          const btn = document.createElement('button');
          btn.textContent = opt;
          btn.style.cssText = 'padding:10px;border-radius:8px;border:none;background:#4f46e5;color:#fff;cursor:pointer;';
          btn.onclick = () => { if(i===qs[qi].ans){score++;area.querySelector('#res').textContent='✅ Correct!';}else area.querySelector('#res').textContent='❌ Wrong!'; setTimeout(()=>{area.querySelector('#res').textContent='';qi++;showQ();},800); };
          optsDiv.appendChild(btn);
        });
      }
      showQ();
    }
  }
];
