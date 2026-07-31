/* Games & Puzzles for Light - Reflection & Refraction | Grade 10 */
window.gamesData = [
  {
    title: "Mirror Match Challenge",
    icon: "🪞",
    type: "Interactive Quiz",
    description: "Match mirror types with their characteristics and uses",
    html: `
      <style>
        .match-game{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;}
        .match-card{padding:12px;background:var(--bg3);border:2px solid var(--divider);border-radius:10px;cursor:pointer;transition:all .2s;text-align:center;font-size:12px;}
        .match-card:hover{border-color:var(--col-games);background:var(--sbg-games);}
        .match-card.selected{border-color:var(--col-games);background:var(--sbg-games);}
        .match-card.correct{border-color:#34d399;background:rgba(52,211,153,.1);}
        .game-status{margin-top:15px;padding:10px;background:var(--sbg-notes);border-radius:8px;text-align:center;font-size:13px;font-weight:700;color:var(--col-notes);}
      </style>
      <div class="match-game" id="mirrorMatch">
        <div class="match-card" data-type="concave" onclick="selectMatchCard(this)">
          <div style="font-weight:700;margin-bottom:5px;">Concave Mirror</div>
        </div>
        <div class="match-card" data-use="dentist" onclick="selectMatchCard(this)">
          Used by dentists to see magnified view
        </div>
        <div class="match-card" data-type="convex" onclick="selectMatchCard(this)">
          <div style="font-weight:700;margin-bottom:5px;">Convex Mirror</div>
        </div>
        <div class="match-card" data-use="rearview" onclick="selectMatchCard(this)">
          Used as rear-view mirror in vehicles
        </div>
        <div class="match-card" data-type="plane" onclick="selectMatchCard(this)">
          <div style="font-weight:700;margin-bottom:5px;">Plane Mirror</div>
        </div>
        <div class="match-card" data-use="bathroom" onclick="selectMatchCard(this)">
          Common bathroom mirror
        </div>
      </div>
      <div class="game-status" id="matchStatus">Select matching pairs!</div>
      <script>
        let selected = null;
        const pairs = {concave:'dentist', convex:'rearview', plane:'bathroom'};
        let matched = 0;
        function selectMatchCard(el) {
          if (el.classList.contains('correct')) return;
          if (!selected) {
            document.querySelectorAll('.match-card').forEach(c => c.classList.remove('selected'));
            el.classList.add('selected');
            selected = el;
          } else {
            const type = selected.dataset.type || selected.dataset.use;
            const use = el.dataset.type || el.dataset.use;
            if ((selected.dataset.type && el.dataset.use && pairs[selected.dataset.type] === el.dataset.use) ||
                (selected.dataset.use && el.dataset.type && pairs[el.dataset.type] === selected.dataset.use)) {
              selected.classList.add('correct');
              el.classList.add('correct');
              matched++;
              document.getElementById('matchStatus').textContent = matched === 3 ? '🎉 Perfect! All matched!' : 'Correct! Keep going...';
            } else {
              document.getElementById('matchStatus').textContent = '❌ Wrong match! Try again.';
            }
            selected.classList.remove('selected');
            selected = null;
          }
        }
      </script>
    `
  },
  {
    title: "Ray Diagram Builder",
    icon: "📐",
    type: "Drag & Drop",
    description: "Build correct ray diagrams for different mirror scenarios",
    html: `
      <style>
        .ray-builder{padding:15px;background:var(--bg3);border-radius:10px;text-align:center;}
        .scenario-btn{padding:8px 15px;margin:5px;background:var(--sbg-notes);color:var(--col-notes);border:1px solid var(--col-notes);border-radius:8px;cursor:pointer;font-size:12px;font-weight:700;}
        .scenario-btn:hover{background:var(--col-notes);color:white;}
        .canvas-area{margin-top:15px;padding:20px;background:white;border-radius:10px;min-height:200px;}
      </style>
      <div class="ray-builder">
        <div>Choose a scenario:</div>
        <button class="scenario-btn" onclick="showScenario('concave-focal')">Concave - Object at F</button>
        <button class="scenario-btn" onclick="showScenario('concave-beyond')">Concave - Beyond 2F</button>
        <button class="scenario-btn" onclick="showScenario('convex')">Convex Mirror</button>
        <div class="canvas-area" id="rayCanvas">
          <div style="color:#666;">Select a scenario to start</div>
        </div>
      </div>
      <script>
        function showScenario(type) {
          const canvas = document.getElementById('rayCanvas');
          const scenarios = {
            'concave-focal': '<div style="color:#333;"><strong>Concave Mirror - Object at Focus</strong><br><br>📍 Image forms at: <span style="color:#059669;font-weight:700;">Infinity (highly magnified)</span><br><br>✨ Nature: Real, Inverted, Highly Magnified</div>',
            'concave-beyond': '<div style="color:#333;"><strong>Concave - Object Beyond 2F</strong><br><br>📍 Image forms: <span style="color:#059669;font-weight:700;">Between F and 2F</span><br><br>✨ Nature: Real, Inverted, Diminished</div>',
            'convex': '<div style="color:#333;"><strong>Convex Mirror</strong><br><br>📍 Image always forms: <span style="color:#059669;font-weight:700;">Behind the mirror</span><br><br>✨ Nature: Virtual, Erect, Diminished</div>'
          };
          canvas.innerHTML = scenarios[type] || scenarios['concave-focal'];
        }
      </script>
    `
  },
  {
    title: "Refraction Quiz",
    icon: "🌈",
    type: "True/False",
    description: "Test your knowledge about refraction and optical density",
    html: `
      <style>
        .quiz-q{padding:12px;background:var(--bg3);border-radius:10px;margin-bottom:10px;}
        .quiz-text{font-size:13px;margin-bottom:10px;line-height:1.6;}
        .quiz-options{display:flex;gap:8px;}
        .quiz-opt{flex:1;padding:10px;background:var(--sbg-notes);border:2px solid var(--col-notes);border-radius:8px;cursor:pointer;text-align:center;font-weight:700;font-size:12px;transition:all .2s;}
        .quiz-opt:hover{background:var(--col-notes);color:white;}
        .quiz-opt.correct{background:#34d399;border-color:#34d399;color:white;}
        .quiz-opt.wrong{background:#f87171;border-color:#f87171;color:white;}
      </style>
      <div class="quiz-q">
        <div class="quiz-text">1. Light bends towards the normal when moving from rarer to denser medium</div>
        <div class="quiz-options">
          <div class="quiz-opt" onclick="checkQuiz(this, true)">✅ True</div>
          <div class="quiz-opt" onclick="checkQuiz(this, false)">❌ False</div>
        </div>
      </div>
      <div class="quiz-q">
        <div class="quiz-text">2. The refractive index of water is less than air</div>
        <div class="quiz-options">
          <div class="quiz-opt" onclick="checkQuiz(this, false)">✅ True</div>
          <div class="quiz-opt" onclick="checkQuiz(this, true)">❌ False</div>
        </div>
      </div>
      <div class="quiz-q">
        <div class="quiz-text">3. A convex lens converges light rays</div>
        <div class="quiz-options">
          <div class="quiz-opt" onclick="checkQuiz(this, true)">✅ True</div>
          <div class="quiz-opt" onclick="checkQuiz(this, false)">❌ False</div>
        </div>
      </div>
      <script>
        function checkQuiz(el, isCorrect) {
          const opts = el.parentElement.querySelectorAll('.quiz-opt');
          opts.forEach(o => o.style.pointerEvents = 'none');
          if (isCorrect) {
            el.classList.add('correct');
          } else {
            el.classList.add('wrong');
            opts.forEach(o => { if (o !== el && !o.classList.contains('wrong')) o.classList.add('correct'); });
          }
        }
      </script>
    `
  },
  {
    title: "Lens Formula Calculator",
    icon: "🧮",
    type: "Interactive Tool",
    description: "Calculate image distance using lens formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$",
    html: `
      <style>
        .calc-tool{padding:15px;background:var(--bg3);border-radius:10px;}
        .calc-input-group{margin-bottom:12px;}
        .calc-label{font-size:11px;font-weight:700;color:var(--text-muted);margin-bottom:5px;}
        .calc-input{width:100%;padding:10px;background:var(--card-bg);border:2px solid var(--divider);border-radius:8px;color:var(--text);font-size:14px;font-family:'Space Grotesk',sans-serif;}
        .calc-btn{width:100%;padding:12px;background:var(--col-games);color:white;border:none;border-radius:10px;font-weight:700;cursor:pointer;font-size:13px;margin-top:10px;}
        .calc-btn:hover{opacity:0.9;}
        .calc-result{margin-top:15px;padding:12px;background:var(--sbg-notes);border-radius:10px;font-size:13px;line-height:1.8;}
      </style>
      <div class="calc-tool">
        <div class="calc-input-group">
          <div class="calc-label">Focal Length (f) in cm</div>
          <input type="number" class="calc-input" id="focalLength" placeholder="e.g., 10">
        </div>
        <div class="calc-input-group">
          <div class="calc-label">Object Distance (u) in cm (enter as negative)</div>
          <input type="number" class="calc-input" id="objectDist" placeholder="e.g., -30">
        </div>
        <button class="calc-btn" onclick="calculateLens()">Calculate Image Distance (v)</button>
        <div class="calc-result" id="lensResult" style="display:none;"></div>
      </div>
      <script>
        function calculateLens() {
          const f = parseFloat(document.getElementById('focalLength').value);
          const u = parseFloat(document.getElementById('objectDist').value);
          const result = document.getElementById('lensResult');
          if (isNaN(f) || isNaN(u)) {
            result.innerHTML = '⚠️ Please enter valid numbers';
            result.style.display = 'block';
            return;
          }
          const v = (f * u) / (u - f);
          const m = v / u;
          let nature = v > 0 ? 'Real' : 'Virtual';
          let position = v > 0 ? 'opposite side' : 'same side';
          let size = Math.abs(m) > 1 ? 'Magnified' : (Math.abs(m) < 1 ? 'Diminished' : 'Same size');
          result.innerHTML = \`<strong>Results:</strong><br>
            📍 Image Distance (v) = <strong>\${v.toFixed(2)} cm</strong><br>
            🔍 Magnification (m) = <strong>\${m.toFixed(2)}</strong><br>
            ✨ Nature: <strong>\${nature}, \${size}</strong><br>
            📌 Position: <strong>\${position} of lens</strong>\`;
          result.style.display = 'block';
        }
      </script>
    `
  }
];
