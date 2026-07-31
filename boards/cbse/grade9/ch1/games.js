/* Games & Puzzles - Motion | Grade 9 */
window.gamesData = [
  {
    title: "Motion Equations Quiz",
    icon: "📐",
    description: "Test your knowledge about equations of motion",
    type: "Quiz",
    html: `<div style="padding:10px;"><div id="q" style="font-size:14px;margin-bottom:15px;color:#fff;"></div><div id="opts" style="display:grid;gap:8px;"></div><div id="res" style="margin-top:15px;font-weight:700;"></div></div>`,
    init: function(area) {
      const qs = [
        { q: "v = u + at is which equation of motion?", opts: ["First", "Second", "Third", "Fourth"], ans: 0 },
        { q: "s = ut + ½at² is which equation?", opts: ["First", "Second", "Third", "Fourth"], ans: 1 },
        { q: "v² = u² + 2as is which equation?", opts: ["First", "Second", "Third", "Fourth"], ans: 2 }
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
