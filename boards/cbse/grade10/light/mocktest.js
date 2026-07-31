/* Mock Test — Light: Reflection & Refraction | Grade 10
   Add/edit questions below. Each question needs: question, options A-D, answer, explanation */

window.mockTestData = {
  title: "Light – Reflection and Refraction",
  duration: 30, // minutes
  totalMarks: 20,
  questions: [
    {
      question: "A ray of light strikes a plane mirror at 30° to the mirror surface. What is the angle of reflection?",
      options: { A: "30°", B: "60°", C: "90°", D: "45°" },
      answer: "B",
      explanation: "Angle of incidence = 90° − 30° = 60° (measured from normal). By law of reflection, angle of reflection = 60°."
    },
    {
      question: "An object is placed between the focus and the pole of a concave mirror. The image formed is:",
      options: { A: "Real, inverted, magnified", B: "Virtual, erect, magnified", C: "Real, inverted, diminished", D: "Virtual, inverted, magnified" },
      answer: "B",
      explanation: "When object is between F and P of a concave mirror, image is virtual, erect and magnified (behind the mirror)."
    },
    {
      question: "The refractive index of glass with respect to water is 9/8. If the speed of light in water is 2.25 × 10⁸ m/s, what is the speed of light in glass?",
      options: { A: "3 × 10⁸ m/s", B: "2 × 10⁸ m/s", C: "2.25 × 10⁸ m/s", D: "1.5 × 10⁸ m/s" },
      answer: "B",
      explanation: "n_gw = v_w / v_g → 9/8 = 2.25×10⁸ / v_g → v_g = 2×10⁸ m/s"
    },
    {
      question: "A convex lens of focal length 20 cm is used to form an image of an object placed at 60 cm. The image distance is:",
      options: { A: "30 cm", B: "60 cm", C: "40 cm", D: "20 cm" },
      answer: "A",
      explanation: "1/v − 1/u = 1/f → 1/v = 1/20 + 1/(−60) = 3/60 − 1/60 = 2/60 → v = 30 cm"
    },
    {
      question: "Which type of mirror is used as a rear-view mirror in vehicles?",
      options: { A: "Concave mirror", B: "Plane mirror", C: "Convex mirror", D: "Parabolic mirror" },
      answer: "C",
      explanation: "Convex mirrors give a wider field of view and always form virtual, erect, diminished images — ideal for rear-view mirrors."
    }
  ]
};
