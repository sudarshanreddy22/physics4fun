/* Equations of Motion - 2 Mark Proofs | Physics4Fun.in */
window.descriptiveData = [
  {
    question: "Derive the first equation of motion, v = u + at, using a velocity-time graph.",
    answer: `
<style>
.eq-proof{font-family:Arial,Helvetica,sans-serif;max-width:1050px;margin:auto;padding:18px;background:#fff;border:1px solid #d9e2ec;border-radius:14px;color:#172033;line-height:1.5}
.eq-proof h3{text-align:center;margin:0 0 14px;color:#173b68;font-size:22px}
.proof-grid{display:grid;grid-template-columns:minmax(0,1fr) 410px;gap:18px;align-items:start}
.proof-flow{padding:14px 16px;border:1px solid #dbe4ed;border-radius:10px;background:#fbfdff;font-size:17px}
.proof-flow p{margin:0 0 9px}
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
<div class="proof-grid">
<div class="proof-flow">
<p>For uniformly accelerated motion, the slope of the velocity-time graph gives acceleration.</p>
<math class="pure-math" display="block" aria-label="a equals v minus u over t; at equals v minus u; therefore v equals u plus at">
<mtable columnalign="right center left" rowspacing="6pt">
<mtr><mtd><mi>a</mi></mtd><mtd><mo>=</mo></mtd><mtd><mfrac><mrow><mi>v</mi><mo>−</mo><mi>u</mi></mrow><mi>t</mi></mfrac></mtd></mtr>
<mtr><mtd><mi>a</mi><mi>t</mi></mtd><mtd><mo>=</mo></mtd><mtd><mi>v</mi><mo>−</mo><mi>u</mi></mtd></mtr>
<mtr><mtd><mo>∴</mo><mi>v</mi></mtd><mtd><mo>=</mo></mtd><mtd><mi>u</mi><mo>+</mo><mi>a</mi><mi>t</mi></mtd></mtr>
</mtable></math>
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
    question: "Derive the second equation of motion, s = ut + ½at², using a velocity-time graph.",
    answer: `
<style>
.eq-proof{font-family:Arial,Helvetica,sans-serif;max-width:1050px;margin:auto;padding:18px;background:#fff;border:1px solid #d9e2ec;border-radius:14px;color:#172033;line-height:1.5}
.eq-proof h3{text-align:center;margin:0 0 14px;color:#173b68;font-size:22px}
.proof-grid{display:grid;grid-template-columns:minmax(0,1fr) 410px;gap:18px;align-items:start}
.proof-flow{padding:14px 16px;border:1px solid #dbe4ed;border-radius:10px;background:#fbfdff;font-size:17px}
.proof-flow p{margin:0 0 9px}
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
<div class="proof-grid">
<div class="proof-flow">
<p>For uniformly accelerated motion, displacement is equal to the area under the velocity-time graph.</p>
<div class="math">s = area of rectangle OACD + area of triangle ABC</div>
<math class="pure-math" display="block" aria-label="s equals ut plus one half t times v minus u; v minus u equals at; s equals ut plus one half t times at; therefore s equals ut plus one half at squared">
<mtable columnalign="right center left" rowspacing="6pt">
<mtr><mtd><mi>s</mi></mtd><mtd><mo>=</mo></mtd><mtd><mi>u</mi><mi>t</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>t</mi><mo>×</mo><mo stretchy="false">(</mo><mi>v</mi><mo>−</mo><mi>u</mi><mo stretchy="false">)</mo></mtd></mtr>
<mtr><mtd><mi>v</mi><mo>−</mo><mi>u</mi></mtd><mtd><mo>=</mo></mtd><mtd><mi>a</mi><mi>t</mi></mtd></mtr>
<mtr><mtd><mi>s</mi></mtd><mtd><mo>=</mo></mtd><mtd><mi>u</mi><mi>t</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>t</mi><mo>×</mo><mi>a</mi><mi>t</mi></mtd></mtr>
<mtr><mtd><mo>∴</mo><mi>s</mi></mtd><mtd><mo>=</mo></mtd><mtd><mi>u</mi><mi>t</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><msup><mi>t</mi><mn>2</mn></msup></mtd></mtr>
</mtable></math>
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
    question: "Derive the third equation of motion, v² = u² + 2as, using a velocity-time graph.",
    answer: `
<style>
.eq-proof{font-family:Arial,Helvetica,sans-serif;max-width:1050px;margin:auto;padding:18px;background:#fff;border:1px solid #d9e2ec;border-radius:14px;color:#172033;line-height:1.5}
.eq-proof h3{text-align:center;margin:0 0 14px;color:#173b68;font-size:22px}
.proof-grid{display:grid;grid-template-columns:minmax(0,1fr) 410px;gap:18px;align-items:start}
.proof-flow{padding:14px 16px;border:1px solid #dbe4ed;border-radius:10px;background:#fbfdff;font-size:17px}
.proof-flow p{margin:0 0 9px}
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
<div class="proof-flow">
<p>For uniformly accelerated motion, displacement is equal to the area of trapezium OABD.</p>
<math class="pure-math" display="block" aria-label="s equals one half u plus v times t; v equals u plus at; t equals v minus u over a; s equals one half u plus v times v minus u over a; 2as equals u plus v times v minus u; 2as equals v squared minus u squared; therefore v squared equals u squared plus 2as">
<mtable columnalign="right center left" rowspacing="6pt">
<mtr><mtd><mi>s</mi></mtd><mtd><mo>=</mo></mtd><mtd><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mi>u</mi><mo>+</mo><mi>v</mi><mo stretchy="false">)</mo><mi>t</mi></mtd></mtr>
<mtr><mtd><mi>v</mi></mtd><mtd><mo>=</mo></mtd><mtd><mi>u</mi><mo>+</mo><mi>a</mi><mi>t</mi></mtd></mtr>
<mtr><mtd><mi>t</mi></mtd><mtd><mo>=</mo></mtd><mtd><mfrac><mrow><mi>v</mi><mo>−</mo><mi>u</mi></mrow><mi>a</mi></mfrac></mtd></mtr>
<mtr><mtd><mi>s</mi></mtd><mtd><mo>=</mo></mtd><mtd><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mi>u</mi><mo>+</mo><mi>v</mi><mo stretchy="false">)</mo><mfrac><mrow><mo stretchy="false">(</mo><mi>v</mi><mo>−</mo><mi>u</mi><mo stretchy="false">)</mo></mrow><mi>a</mi></mfrac></mtd></mtr>
<mtr><mtd><mn>2</mn><mi>a</mi><mi>s</mi></mtd><mtd><mo>=</mo></mtd><mtd><mo stretchy="false">(</mo><mi>u</mi><mo>+</mo><mi>v</mi><mo stretchy="false">)(</mo><mi>v</mi><mo>−</mo><mi>u</mi><mo stretchy="false">)</mo></mtd></mtr>
<mtr><mtd><mn>2</mn><mi>a</mi><mi>s</mi></mtd><mtd><mo>=</mo></mtd><mtd><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mtd></mtr>
<mtr><mtd><mo>∴</mo><msup><mi>v</mi><mn>2</mn></msup></mtd><mtd><mo>=</mo></mtd><mtd><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>a</mi><mi>s</mi></mtd></mtr>
</mtable></math>
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
