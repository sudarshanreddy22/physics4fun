/* Equations of Motion - 2 Mark Proofs | Physics4Fun.in */
window.descriptiveData = [
  {
    question: "Derive the first equation of motion, v = u + at, using a velocity-time graph.",
    answer: `
For uniformly accelerated motion, the slope of the velocity-time graph gives acceleration.

a = (v − u) / t
at = v − u
∴ v = u + at

Diagram:
https://physics4fun.in/images/equations/first-equation-vt-graph.svg
`,
    marks: 2,
    type: "case",
    diagramUrl: "https://physics4fun.in/images/equations/first-equation-vt-graph.svg"
  },

  {
    question: "Derive the second equation of motion, s = ut + ½at², using a velocity-time graph.",
    answer: `
For uniformly accelerated motion, displacement is equal to the area under the velocity-time graph.

s = area of rectangle OACD + area of triangle ABC
s = ut + ½t(v − u)
s = ut + ½t(at)
∴ s = ut + ½at²

v − u = at

Diagram:
https://physics4fun.in/images/equations/second-equation-vt-graph.svg
`,
    marks: 2,
    type: "case",
    diagramUrl: "https://physics4fun.in/images/equations/second-equation-vt-graph.svg"
  },

  {
    question: "Derive the third equation of motion, v² = u² + 2as, using a velocity-time graph.",
    answer: `
For uniformly accelerated motion, displacement is equal to the area of trapezium OABD.

s = ½(u + v)t
s = ½(u + v)(v − u)/a
2as = (u + v)(v − u)
2as = v² − u²
∴ v² = u² + 2as

v = u + at
t = (v − u)/a

Diagram:
https://physics4fun.in/images/equations/third-equation-vt-graph.svg
`,
    marks: 2,
    type: "case",
    diagramUrl: "https://physics4fun.in/images/equations/third-equation-vt-graph.svg"
  }
];
