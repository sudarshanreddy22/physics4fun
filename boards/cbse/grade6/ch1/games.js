/* Games & Puzzles - Motion and Measurement | Grade 6 */
window.gamesData = [
  {
    title: "Motion Type Quiz",
    icon: "🎯",
    description: "Test your knowledge about different types of motion",
    type: "Quiz",
    html: `<div class="quiz-container" style="padding:10px;">
      <div id="quiz-q" style="font-size:14px;margin-bottom:15px;color:#fff;"></div>
      <div id="quiz-opts" style="display:grid;gap:8px;"></div>
      <div id="quiz-result" style="margin-top:15px;font-weight:700;color:#22c55e;"></div>
    </div>`,
    init: function(area) {
      const questions = [
        { q: "Motion of a car on a straight road is:", opts: ["Circular", "Rectilinear", "Periodic", "Random"], ans: 1 },
        { q: "Swinging of a pendulum is:", opts: ["Rectilinear", "Circular", "Periodic", "None"], ans: 2 },
        { q: "Motion of fan blades is:", opts: ["Rectilinear", "Circular", "Periodic", "Linear"], ans: 1 }
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
  },
  {
    title: "Match the Motion",
    icon: "🔗",
    description: "Match objects with their type of motion",
    type: "Matching",
    html: `<div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;padding:10px;">
      <div id="match-left" style="display:flex;flex-direction:column;gap:8px;"></div>
      <div id="match-right" style="display:flex;flex-direction:column;gap:8px;"></div>
    </div><div id="match-msg" style="text-align:center;margin-top:15px;font-weight:700;"></div>`
  }
];
