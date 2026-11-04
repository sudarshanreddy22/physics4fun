/* Equations of Motion - 2 Mark Proofs | Physics4Fun.in */
window.descriptiveData = [
  {
    question: "1. Derive the first equation of motion, v = u + at, using a velocity-time graph.",
    answer: `
<style>
.eq-proof{font-family:Arial,Helvetica,sans-serif;max-width:1050px;margin:auto;padding:18px;background:#fff;border:1px solid #d9e2ec;border-radius:14px;color:#172033;line-height:1.5}
.eq-proof h3{text-align:center;margin:0 0 14px;color:#173b68;font-size:22px}
.proof-grid{display:grid;grid-template-columns:minmax(0,1fr) 410px;gap:18px;align-items:start}
.proof-step{display:flex;gap:10px;padding:11px 12px;margin-bottom:10px;border:1px solid #dbe4ed;border-radius:9px;background:#fbfdff}
.num{flex:0 0 28px;height:28px;border-radius:50%;background:#dceefb;color:#173b68;font-weight:700;text-align:center;line-height:28px}
.math{font-family:Georgia,"Times New Roman",serif;font-size:19px;margin:5px 0}
.final{padding:9px 12px;background:#fff5c9;border:2px solid #d9a51b;border-radius:8px;text-align:center;font-family:Georgia,"Times New Roman",serif;font-size:24px;font-weight:700}
.graph-box{border:1px solid #dbe4ed;border-radius:10px;padding:8px;background:#fff}
.motion-graph{width:100%;height:auto}
.axis{stroke:#173b68;stroke-width:3}
.motion-line{stroke:#1769aa;stroke-width:4}
.guide{stroke:#444;stroke-width:1.7;stroke-dasharray:7 6}
.point{fill:#173b68}
.rectangle{fill:#bfe3f7;stroke:#4a91bd;stroke-width:1.5}
.triangle{fill:#f6cccc;stroke:#c87878;stroke-width:1.5}
.motion-graph text{font-family:Georgia,"Times New Roman",serif;font-size:17px;fill:#111}
@media(max-width:800px){.proof-grid{grid-template-columns:1fr}.graph-box{order:-1}}
</style>

<div class="eq-proof">
<h3>Proof of the First Equation of Motion</h3>
<div class="proof-grid">
<div>
<div class="proof-step"><span class="num">1</span><div>Acceleration = slope of velocity-time graph.<div class="math">a = (v − u) / t</div></div></div>
<div class="proof-step"><span class="num">2</span><div>Multiply both sides by <em>t</em>.<div class="math">at = v − u</div></div></div>
<div class="proof-step"><span class="num">3</span><div>Rearranging,<div class="final">v = u + at</div></div></div>
</div>
<div class="graph-box">
<svg viewBox="0 0 500 300" class="motion-graph" role="img" aria-label="Velocity-time graph for deriving v equals u plus at">
  <line x1="65" y1="250" x2="455" y2="250" class="axis"/>
  <line x1="65" y1="250" x2="65" y2="35" class="axis"/>
  <line x1="65" y1="190" x2="360" y2="75" class="motion-line"/>
  <line x1="65" y1="190" x2="360" y2="190" class="guide"/>
  <line x1="360" y1="75" x2="360" y2="250" class="guide"/>
  <line x1="65" y1="75" x2="360" y2="75" class="guide"/>
  <circle cx="65" cy="190" r="5" class="point"/><circle cx="360" cy="75" r="5" class="point"/>
  <text x="50" y="268">O</text><text x="48" y="184">A</text><text x="370" y="70">B</text>
  <text x="45" y="198" font-style="italic">u</text><text x="45" y="80" font-style="italic">v</text>
  <text x="350" y="272" font-style="italic">t</text>
  <text x="230" y="292">Time</text><text transform="translate(20 185) rotate(-90)">Velocity</text>
</svg><div style="text-align:center;font-size:14px">Slope of AB = acceleration</div></div>
</div></div>`,
    marks: 2,
    type: "case"
  },

  {
    question: "2. Derive the second equation of motion, s = ut + ½at², using a velocity-time graph.",
    answer: `
<style>
.eq-proof{font-family:Arial,Helvetica,sans-serif;max-width:1050px;margin:auto;padding:18px;background:#fff;border:1px solid #d9e2ec;border-radius:14px;color:#172033;line-height:1.5}
.eq-proof h3{text-align:center;margin:0 0 14px;color:#173b68;font-size:22px}
.proof-grid{display:grid;grid-template-columns:minmax(0,1fr) 410px;gap:18px;align-items:start}
.proof-step{display:flex;gap:10px;padding:11px 12px;margin-bottom:10px;border:1px solid #dbe4ed;border-radius:9px;background:#fbfdff}
.num{flex:0 0 28px;height:28px;border-radius:50%;background:#dceefb;color:#173b68;font-weight:700;text-align:center;line-height:28px}
.math{font-family:Georgia,"Times New Roman",serif;font-size:19px;margin:5px 0}
.final{padding:9px 12px;background:#fff5c9;border:2px solid #d9a51b;border-radius:8px;text-align:center;font-family:Georgia,"Times New Roman",serif;font-size:24px;font-weight:700}
.graph-box{border:1px solid #dbe4ed;border-radius:10px;padding:8px;background:#fff}
.motion-graph{width:100%;height:auto}
.axis{stroke:#173b68;stroke-width:3}
.motion-line{stroke:#1769aa;stroke-width:4}
.guide{stroke:#444;stroke-width:1.7;stroke-dasharray:7 6}
.point{fill:#173b68}
.rectangle{fill:#bfe3f7;stroke:#4a91bd;stroke-width:1.5}
.triangle{fill:#f6cccc;stroke:#c87878;stroke-width:1.5}
.motion-graph text{font-family:Georgia,"Times New Roman",serif;font-size:17px;fill:#111}
@media(max-width:800px){.proof-grid{grid-template-columns:1fr}.graph-box{order:-1}}
</style>

<div class="eq-proof">
<h3>Proof of the Second Equation of Motion</h3>
<div class="proof-grid">
<div>
<div class="proof-step"><span class="num">1</span><div>Displacement = area under the velocity-time graph.<div class="math">s = area of rectangle OACD + area of triangle ABC</div></div></div>
<div class="proof-step"><span class="num">2</span><div>Calculate the two areas.<div class="math">s = ut + ½ × t × (v − u)</div></div></div>
<div class="proof-step"><span class="num">3</span><div>From the first equation, <span class="math">v − u = at</span>.<div class="math">s = ut + ½ × t × at</div></div></div>
<div class="proof-step"><span class="num">4</span><div><div class="final">∴ s = ut + ½at²</div></div></div>
</div>
<div class="graph-box">
<svg viewBox="0 0 500 300" class="motion-graph" role="img">
  <line x1="65" y1="250" x2="455" y2="250" class="axis"/>
  <line x1="65" y1="250" x2="65" y2="35" class="axis"/>
  <polygon points="65,190 360,75 360,190" class="triangle"/>
  <polygon points="65,190 65,250 360,250 360,190" class="rectangle"/>
  <line x1="65" y1="190" x2="360" y2="75" class="motion-line"/>
  <line x1="65" y1="190" x2="360" y2="190" class="guide"/>
  <line x1="360" y1="75" x2="360" y2="250" class="guide"/>
  <circle cx="65" cy="250" r="4" class="point"/><circle cx="65" cy="190" r="5" class="point"/>
  <circle cx="360" cy="75" r="5" class="point"/><circle cx="360" cy="190" r="5" class="point"/>
  <text x="50" y="268">O</text><text x="48" y="184">A</text><text x="370" y="70">B</text>
  <text x="370" y="195">C</text><text x="370" y="268">D</text>
  <text x="45" y="198" font-style="italic">u</text><text x="45" y="80" font-style="italic">v</text>
  <text x="350" y="272" font-style="italic">t</text>
  <text x="205" y="225">ut</text><text x="215" y="145">½t(v−u)</text>
  <text x="230" y="292">Time</text><text transform="translate(20 185) rotate(-90)">Velocity</text>
</svg><div style="text-align:center;font-size:14px">Rectangle area = ut &nbsp; | &nbsp; Triangle area = ½t(v−u)</div></div>
</div></div>`,
    marks: 2,
    type: "case"
  },

  {
    question: "3. Derive the third equation of motion, v² = u² + 2as, using a velocity-time graph.",
    answer: `
<style>
.eq-proof{font-family:Arial,Helvetica,sans-serif;max-width:1050px;margin:auto;padding:18px;background:#fff;border:1px solid #d9e2ec;border-radius:14px;color:#172033;line-height:1.5}
.eq-proof h3{text-align:center;margin:0 0 14px;color:#173b68;font-size:22px}
.proof-grid{display:grid;grid-template-columns:minmax(0,1fr) 410px;gap:18px;align-items:start}
.proof-step{display:flex;gap:10px;padding:11px 12px;margin-bottom:10px;border:1px solid #dbe4ed;border-radius:9px;background:#fbfdff}
.num{flex:0 0 28px;height:28px;border-radius:50%;background:#dceefb;color:#173b68;font-weight:700;text-align:center;line-height:28px}
.math{font-family:Georgia,"Times New Roman",serif;font-size:19px;margin:5px 0}
.final{padding:9px 12px;background:#fff5c9;border:2px solid #d9a51b;border-radius:8px;text-align:center;font-family:Georgia,"Times New Roman",serif;font-size:24px;font-weight:700}
.graph-box{border:1px solid #dbe4ed;border-radius:10px;padding:8px;background:#fff}
.motion-graph{width:100%;height:auto}
.axis{stroke:#173b68;stroke-width:3}
.motion-line{stroke:#1769aa;stroke-width:4}
.guide{stroke:#444;stroke-width:1.7;stroke-dasharray:7 6}
.point{fill:#173b68}
.rectangle{fill:#bfe3f7;stroke:#4a91bd;stroke-width:1.5}
.triangle{fill:#f6cccc;stroke:#c87878;stroke-width:1.5}
.motion-graph text{font-family:Georgia,"Times New Roman",serif;font-size:17px;fill:#111}
@media(max-width:800px){.proof-grid{grid-template-columns:1fr}.graph-box{order:-1}}
</style>

<div class="eq-proof">
<h3>Proof of the Third Equation of Motion</h3>
<div class="proof-grid">
<div>
<div class="proof-step"><span class="num">1</span><div>Displacement = area of trapezium OABD.<div class="math">s = ½(u + v)t</div></div></div>
<div class="proof-step"><span class="num">2</span><div>From the first equation of motion,<div class="math">v = u + at &nbsp; ⇒ &nbsp; t = (v − u)/a</div></div></div>
<div class="proof-step"><span class="num">3</span><div>Substitute the value of <em>t</em>.<div class="math">s = ½(u + v)(v − u)/a</div><div class="math">2as = (u + v)(v − u)</div></div></div>
<div class="proof-step"><span class="num">4</span><div>Using (u + v)(v − u) = v² − u²,<div class="final">∴ v² = u² + 2as</div></div></div>
</div>
<div class="graph-box">
<svg viewBox="0 0 500 300" class="motion-graph" role="img">
  <line x1="65" y1="250" x2="455" y2="250" class="axis"/>
  <line x1="65" y1="250" x2="65" y2="35" class="axis"/>
  <polygon points="65,190 360,75 360,190" class="triangle"/>
  <polygon points="65,190 65,250 360,250 360,190" class="rectangle"/>
  <line x1="65" y1="190" x2="360" y2="75" class="motion-line"/>
  <line x1="65" y1="190" x2="360" y2="190" class="guide"/>
  <line x1="360" y1="75" x2="360" y2="250" class="guide"/>
  <circle cx="65" cy="250" r="4" class="point"/><circle cx="65" cy="190" r="5" class="point"/>
  <circle cx="360" cy="75" r="5" class="point"/><circle cx="360" cy="190" r="5" class="point"/>
  <text x="50" y="268">O</text><text x="48" y="184">A</text><text x="370" y="70">B</text>
  <text x="370" y="195">C</text><text x="370" y="268">D</text>
  <text x="45" y="198" font-style="italic">u</text><text x="45" y="80" font-style="italic">v</text>
  <text x="350" y="272" font-style="italic">t</text>
  <text x="205" y="225">ut</text><text x="215" y="145">½t(v−u)</text>
  <text x="230" y="292">Time</text><text transform="translate(20 185) rotate(-90)">Velocity</text>
</svg><div style="text-align:center;font-size:14px">Area OABD represents displacement <em>s</em></div></div>
</div></div>`,
    marks: 2,
    type: "case"
  }
];
