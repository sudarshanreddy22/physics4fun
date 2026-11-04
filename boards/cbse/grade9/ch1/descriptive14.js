/* Equations of Motion - 2 Mark Questions | Physics4Fun.in */

window.descriptiveData = [

  {
    question: "Derive the first equation of motion, v = u + at, using a velocity-time graph.",
    answer: `
<style>
.motion-proof-layout{
  display:grid;
  grid-template-columns:minmax(0,1fr) 330px;
  gap:18px;
  align-items:center;
  width:100%;
}
.motion-proof-text{
  text-align:center;
}
.motion-proof-text p{
  text-align:center;
}
.motion-proof-image{
  width:330px;
  max-width:100%;
  height:auto;
  display:block;
  margin:auto;
}
@media(max-width:800px){
  .motion-proof-layout{
    grid-template-columns:1fr;
  }
  .motion-proof-image{
    width:300px;
  }
}
</style>

<div class="motion-proof-layout">
  <div class="motion-proof-text">
    <p>For uniformly accelerated motion, the slope of the velocity-time graph gives acceleration.</p>

    $$
    \\begin{aligned}
    a  &= \\frac{v-u}{t} \\\\
    at &= v-u \\\\
    \\therefore\\quad v &= u+at
    \\end{aligned}
    $$
  </div>

  <div>
    <img class="motion-proof-image"
      src="https://physics4fun.in/images/equations/first-equation-vt-graph.svg"
      alt="Velocity-time graph for first equation of motion">
  </div>
</div>
`,
    supportFormula: `
$$
a=\\frac{v-u}{t}
$$
`,
    diagramUrl: "https://physics4fun.in/images/equations/first-equation-vt-graph.svg",
    marks: 2
  },


  {
    question: "Derive the second equation of motion, s = ut + ½at², using a velocity-time graph.",
    answer: `
<div class="motion-proof-layout">
  <div class="motion-proof-text">
    <p>For uniformly accelerated motion, displacement is equal to the area under the velocity-time graph.</p>

    $$
    \\begin{aligned}
    s &= \\text{area of rectangle OACD + area of triangle ABC} \\\\
    s &= ut+\\frac{1}{2}t(v-u) \\\\
    s &= ut+\\frac{1}{2}t(at) \\\\
    \\therefore\\quad s &= ut+\\frac{1}{2}at^2
    \\end{aligned}
    $$
  </div>

  <div>
    <img class="motion-proof-image"
      src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun/c1c853d37b0686475075ef3983d54e995dd0c03a/images/cbse/class%2009/ch01/equation_2_velocity_time_graph.svg"
      alt="Velocity-time graph for second equation of motion">
  </div>
</div>
`,
    supportFormula: `
$$
v-u=at
$$
`,
    diagramUrl: "https://raw.githubusercontent.com/sudarshanreddy22/physics4fun/c1c853d37b0686475075ef3983d54e995dd0c03a/images/cbse/class%2009/ch01/equation_2_velocity_time_graph.svg",
    marks: 2
  },


  {
    question: "Derive the third equation of motion, v² = u² + 2as, using a velocity-time graph.",
    answer: `
<div class="motion-proof-layout">
  <div class="motion-proof-text">
    <p>For uniformly accelerated motion, displacement is equal to the area of trapezium OABD.</p>

    $$
    \\begin{aligned}
    s &= \\frac{1}{2}(u+v)t \\\\
    s &= \\frac{1}{2}(u+v)\\frac{v-u}{a} \\\\
    2as &= (u+v)(v-u) \\\\
    2as &= v^2-u^2 \\\\
    \\therefore\\quad v^2 &= u^2+2as
    \\end{aligned}
    $$
  </div>

  <div>
    <img class="motion-proof-image"
      src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun/c1c853d37b0686475075ef3983d54e995dd0c03a/images/cbse/class%2009/ch01/equation_3_velocity_time_graph.svg"
      alt="Velocity-time graph for third equation of motion">
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
    diagramUrl: "https://raw.githubusercontent.com/sudarshanreddy22/physics4fun/c1c853d37b0686475075ef3983d54e995dd0c03a/images/cbse/class%2009/ch01/equation_3_velocity_time_graph.svg",
    marks: 2
  }

];
