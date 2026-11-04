/* Equations of Motion - 2 Mark Proofs | Physics4Fun.in */
window.descriptiveData = [
  {
    question: "Derive the first equation of motion, v = u + at, using a velocity-time graph.",
    answer: `
For uniformly accelerated motion, the slope of the velocity-time graph gives acceleration.

$$
\\begin{aligned}
a  &= \\frac{v-u}{t} \\\\
at &= v-u \\\\
\\therefore\\quad v &= u+at
\\end{aligned}
$$
`,
    supportFormula: `
$$
a=\\frac{v-u}{t}
$$
`,
    diagramUrl: "YOUR-FIRST-EQUATION-IMAGE-URL",
    marks: 2,
    type: "case"
  },

  {
    question: "Derive the second equation of motion, s = ut + ½at², using a velocity-time graph.",
    answer: `
For uniformly accelerated motion, displacement is equal to the area under the velocity-time graph.

$$
\\begin{aligned}
s &= \\text{area of rectangle OACD + area of triangle ABC} \\\\
s &= ut+\\frac{1}{2}t(v-u) \\\\
s &= ut+\\frac{1}{2}t(at) \\\\
\\therefore\\quad s &= ut+\\frac{1}{2}at^2
\\end{aligned}
$$
`,
    supportFormula: `
$$
v-u=at
$$
`,
    diagramUrl: "https://raw.githubusercontent.com/sudarshanreddy22/physics4fun/c1c853d37b0686475075ef3983d54e995dd0c03a/images/cbse/class%2009/ch01/equation_2_velocity_time_graph.svg",
    marks: 2,
    type: "case"
  },

  {
    question: "Derive the third equation of motion, v² = u² + 2as, using a velocity-time graph.",
    answer: `
For uniformly accelerated motion, displacement is equal to the area of trapezium OABD.

$$
\\begin{aligned}
s &= \\frac{1}{2}(u+v)t \\\\
s &= \\frac{1}{2}(u+v)\\frac{v-u}{a} \\\\
2as &= (u+v)(v-u) \\\\
2as &= v^2-u^2 \\\\
\\therefore\\quad v^2 &= u^2+2as
\\end{aligned}
$$
`,
    supportFormula: `
$$
\\begin{aligned}
v &= u+at \\\\
t &= \\frac{v-u}{a}
\\end{aligned}
$$
`,
    diagramUrl: "https://raw.githubusercontent.com/sudarshanreddy22/physics4fun/YOUR-COMMIT/images/cbse/class%2009/ch01/equation_3_velocity_time_graph_colored.svg",
    marks: 2,
    type: "case"
  }
];