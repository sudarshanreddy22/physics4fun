/* Games & Puzzles - Light, Shadows and Reflections | Grade 6 */
window.gamesData = [
  {
    title: "Light Sources Quiz",
    icon: "💡",
    description: "Identify natural and artificial sources of light",
    type: "Quiz",
    html: `<div class="quiz-container" style="padding:10px;">
      <div id="quiz-q" style="font-size:14px;margin-bottom:15px;color:#fff;"></div>
      <div id="quiz-opts" style="display:grid;gap:8px;"></div>
      <div id="quiz-result" style="margin-top:15px;font-weight:700;color:#22c55e;"></div>
    </div>`,
    init: function(area) {
      const questions = [
        { q: "Which is a NATURAL light source?", opts: ["Bulb", "Sun", "Candle", "Torch"], ans: 1 },
        { q: "Which is an ARTIFICIAL light source?", opts: ["Firefly", "Sun", "LED", "Stars"], ans: 2 },
        { q: "Moon is a:", opts: ["Light source", "Non-luminous object", "Star", "Sun"], ans: 1 }
      ];
      let qi = 0, score = 0;
      function showQ() {
        if (qi >= questions.length) {
          area.querySelector('#quiz-result').innerHTML = '🎉 Quiz Complete! Score: ' + score + '/' + questions.length;
          return;
        }
        area.querySelector('#quiz-q').textContent = (qi+1) + '. ' + questions[qi].q;
        const optsDiv = area.querySelector('#quiz-opts');
        optsDiv.innerHTML = '';
        questions[qi].opts.forEach((opt, i) => {
          const btn = document.createElement('button');
          btn.textContent = opt;
          btn.style.cssText = 'padding:10px;border-radius:8px;border:none;background:#4f46e5;color:#fff;cursor:pointer;font-size:13px;';
          btn.onclick = () => {
            if (i === questions[qi].ans) { score++; area.querySelector('#quiz-result').textContent = '✅ Correct!'; }
            else area.querySelector('#quiz-result').textContent = '❌ Wrong!';
            setTimeout(() => { area.querySelector('#quiz-result').textContent = ''; qi++; showQ(); }, 800);
          };
          optsDiv.appendChild(btn);
        });
      }
      showQ();
    }
  }
];
