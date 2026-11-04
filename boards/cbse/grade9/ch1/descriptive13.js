/* Equations of Motion - 2 Mark Proofs | Physics4Fun.in
   FIXED:
   1. 2nd and 3rd diagrams use LOCAL root-relative URLs.
   2. Entire proof column is CENTERED.
   3. Equations remain mathematically aligned.
   4. Supporting formulas remain separate from the proof.
*/

window.descriptiveData = [
  {
    question: "Derive the first equation of motion, v = u + at, using a velocity-time graph.",
    answer: `
<style>
.eq-proof{
  font-family:Arial,Helvetica,sans-serif;
  max-width:1050px;
  margin:auto;
  color:#172033;
  line-height:1.5;
}
.proof-grid{
  display:grid;
  grid-template-columns:minmax(0,1fr) 410px;
  gap:18px;
  align-items:center;
}
.proof-flow{
  padding:10px 16px;
  font-size:17px;
  text-align:center;
}
.proof-flow p{
  margin:0 0 12px;
  text-align:center;
}
.equation-stack{
  display:inline-flex;
  flex-direction:column;
  align-items:stretch;
  text-align:left;
  gap:4px;
  margin:8px auto 10px;
  font-family:"Times New Roman",Georgia,serif;
  font-size:21px;
  line-height:1.42;
}
.equation-stack > div{white-space:nowrap}
.graph-box{
  padding:8px;
  background:#fff;
  text-align:center;
}
.motion-graph{width:100%;height:auto;display:block}
@media(max-width:800px){
  .proof-grid{grid-template-columns:1fr}
}
</style>

<div class="eq-proof">
  <div class="proof-grid">
    <div class="proof-flow">
      <p>For uniformly accelerated motion, the slope of the velocity-time graph gives acceleration.</p>
      <div class="equation-stack">
        <div>a&nbsp;&nbsp;=&nbsp;&nbsp;(v − u) / t</div>
        <div>at&nbsp;&nbsp;=&nbsp;&nbsp;v − u</div>
        <div>∴&nbsp;&nbsp;v&nbsp;&nbsp;=&nbsp;&nbsp;u + at</div>
      </div>
    </div>

    <div class="graph-box">
      <svg viewBox="0 0 500 300" class="motion-graph" role="img"
           aria-label="Velocity-time graph for deriving v equals u plus at">
        <line x1="65" y1="250" x2="455" y2="250" stroke="#173b68" stroke-width="3"/>
        <line x1="65" y1="250" x2="65" y2="35" stroke="#173b68" stroke-width="3"/>
        <line x1="65" y1="190" x2="360" y2="75" stroke="#1769aa" stroke-width="4"/>
        <line x1="65" y1="190" x2="360" y2="190" stroke="#444" stroke-width="1.7" stroke-dasharray="7 6"/>
        <line x1="360" y1="75" x2="360" y2="250" stroke="#444" stroke-width="1.7" stroke-dasharray="7 6"/>
        <line x1="65" y1="75" x2="360" y2="75" stroke="#444" stroke-width="1.7" stroke-dasharray="7 6"/>
        <circle cx="65" cy="190" r="5" fill="#173b68"/>
        <circle cx="360" cy="75" r="5" fill="#173b68"/>
        <text x="50" y="268">O</text><text x="48" y="184">A</text><text x="370" y="70">B</text>
        <text x="45" y="198" font-style="italic">u</text><text x="45" y="80" font-style="italic">v</text>
        <text x="350" y="272" font-style="italic">t</text>
        <text x="230" y="292">Time</text>
        <text transform="translate(20 185) rotate(-90)">Velocity</text>
      </svg>
    </div>
  </div>
</div>
`,
    supportFormula: `
$$
a=\\frac{v-u}{t}
$$
`,
    marks: 2,
    type: "case"
  },

  {
    question: "Derive the second equation of motion, s = ut + ½at², using a velocity-time graph.",
    answer: `
<style>
.eq-proof{font-family:Arial,Helvetica,sans-serif;max-width:1050px;margin:auto;color:#172033;line-height:1.5}
.proof-grid{display:grid;grid-template-columns:minmax(0,1fr) 410px;gap:18px;align-items:center}
.proof-flow{padding:10px 16px;font-size:17px;text-align:center}
.proof-flow p{margin:0 0 12px;text-align:center}
.equation-stack{display:inline-flex;flex-direction:column;align-items:stretch;text-align:left;gap:4px;margin:8px auto 10px;font-family:"Times New Roman",Georgia,serif;font-size:21px;line-height:1.42}
.equation-stack > div{white-space:nowrap}
.graph-box{padding:8px;background:#fff;text-align:center}
.motion-graph{width:100%;height:auto;display:block}
@media(max-width:800px){.proof-grid{grid-template-columns:1fr}}
</style>

<div class="eq-proof">
  <div class="proof-grid">
    <div class="proof-flow">
      <p>For uniformly accelerated motion, displacement is equal to the area under the velocity-time graph.</p>
      <div class="equation-stack">
        <div>s = area of rectangle OACD + area of triangle ABC</div>
        <div>s = ut + ½t(v − u)</div>
        <div>s = ut + ½t(at)</div>
        <div>∴&nbsp;&nbsp;s = ut + ½at²</div>
      </div>
    </div>

    <div class="graph-box">
      <img
        src="/images/cbse/class%2009/ch01/equation_2_velocity_time_graph_colored.svg"
        alt="Colored velocity-time graph for the second equation of motion"
        class="motion-graph"
        loading="eager"
      >
    </div>
  </div>
</div>
`,
    supportFormula: `
$$
v-u=at
$$
`,
    diagramUrl: "/images/cbse/class%2009/ch01/equation_2_velocity_time_graph_colored.svg",
    marks: 2,
    type: "case"
  },

  {
    question: "Derive the third equation of motion, v² = u² + 2as, using a velocity-time graph.",
    answer: `
<style>
.eq-proof{font-family:Arial,Helvetica,sans-serif;max-width:1050px;margin:auto;color:#172033;line-height:1.5}
.proof-grid{display:grid;grid-template-columns:minmax(0,1fr) 410px;gap:18px;align-items:center}
.proof-flow{padding:10px 16px;font-size:17px;text-align:center}
.proof-flow p{margin:0 0 12px;text-align:center}
.equation-stack{display:inline-flex;flex-direction:column;align-items:stretch;text-align:left;gap:4px;margin:8px auto 10px;font-family:"Times New Roman",Georgia,serif;font-size:21px;line-height:1.42}
.equation-stack > div{white-space:nowrap}
.graph-box{padding:8px;background:#fff;text-align:center}
.motion-graph{width:100%;height:auto;display:block}
@media(max-width:800px){.proof-grid{grid-template-columns:1fr}}
</style>

<div class="eq-proof">
  <div class="proof-grid">
    <div class="proof-flow">
      <p>For uniformly accelerated motion, displacement is equal to the area of trapezium OABD.</p>
      <div class="equation-stack">
        <div>s&nbsp;&nbsp;=&nbsp;&nbsp;½(u + v)t</div>
        <div>s&nbsp;&nbsp;=&nbsp;&nbsp;½(u + v)(v − u)/a</div>
        <div>2as&nbsp;&nbsp;=&nbsp;&nbsp;(u + v)(v − u)</div>
        <div>2as&nbsp;&nbsp;=&nbsp;&nbsp;v² − u²</div>
        <div>∴&nbsp;&nbsp;v²&nbsp;&nbsp;=&nbsp;&nbsp;u² + 2as</div>
      </div>
    </div>

    <div class="graph-box">
      <img
        src="/images/cbse/class%2009/ch01/equation_3_velocity_time_graph_colored.svg"
        alt="Colored velocity-time graph for the third equation of motion"
        class="motion-graph"
        loading="eager"
      >
    </div>
  </div>
</div>
`,
    supportFormula: `
$$
\\begin{aligned}
v &= u+at \\\\
t &= \\frac{v-u}{a}
\\end{aligned}
$$
`,
    diagramUrl: "/images/cbse/class%2009/ch01/equation_3_velocity_time_graph_colored.svg",
    marks: 2,
    type: "case"
  }
];
