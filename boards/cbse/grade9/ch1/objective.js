/* Objective Questions - Motion | CBSE Grade 9 */
window.objectiveData = [
  { question: "What is the SI unit of velocity?", options: ["m/s", "m/s²", "kg/m", "N/m"], answer: 0, type: "mcq", explanation: "Velocity = displacement/time, so its SI unit is metre per second (m/s)." },
  { question: "Which equation of motion relates displacement directly to velocity and acceleration (without time)?", options: ["v = u + at", "s = ut + ½at²", "v² = u² + 2as", "a = (v-u)/t"], answer: 2, type: "mcq", explanation: "v² = u² + 2as connects final velocity, initial velocity, acceleration and displacement without involving time." },
  { question: "The area under a velocity-time graph represents:", options: ["Acceleration", "Displacement", "Speed", "Force"], answer: 1, type: "mcq", explanation: "The area enclosed between the v-t graph and the time axis gives the displacement of the object." },
  { question: "A body moving in a circle at constant speed has:", options: ["Zero acceleration", "Constant velocity", "Acceleration directed towards the centre", "No force acting on it"], answer: 2, type: "mcq", explanation: "Even at constant speed, the changing direction in circular motion produces acceleration directed toward the centre (centripetal acceleration)." },
  { question: "The slope of a distance-time graph gives:", options: ["Displacement", "Acceleration", "Speed", "Force"], answer: 2, type: "mcq", explanation: "Slope of a distance-time graph = distance/time = speed." },

  { question: "Velocity is a scalar quantity.", answer: false, type: "tof", explanation: "Velocity is a vector quantity — it has both magnitude and direction, unlike speed which is scalar." },
  { question: "Acceleration can have a negative value.", answer: true, type: "tof", explanation: "Negative acceleration (retardation/deceleration) occurs when velocity decreases with time." },
  { question: "For an object in uniform motion, the distance-time graph is always a straight line.", answer: true, type: "tof", explanation: "Uniform motion means equal distances in equal time intervals, which produces a straight-line distance-time graph." },
  { question: "Displacement can never be greater than distance.", answer: true, type: "tof", explanation: "Displacement is the shortest path between two points, so it can never exceed the actual distance travelled." },
  { question: "An object moving with uniform velocity has non-zero acceleration.", answer: false, type: "tof", explanation: "Uniform velocity means constant speed and direction, so the change in velocity is zero — hence acceleration is zero." },

  { question: "The rate of change of velocity with time is called ___.", answer: "acceleration", type: "fib", explanation: "By definition, acceleration = (change in velocity) / time." },
  { question: "The SI unit of acceleration is ___.", answer: "m/s²", type: "fib", explanation: "Since acceleration = velocity/time, its unit is (m/s)/s = m/s²." },
  { question: "In the equation v = u + at, the term 'u' represents the ___ velocity.", answer: "initial", type: "fib", explanation: "u denotes the initial (starting) velocity of the object before acceleration acts over time t." },
  { question: "A motion in which an object moves in a circular path at constant speed is called ___ circular motion.", answer: "uniform", type: "fib", explanation: "This is called uniform circular motion, since the speed remains constant throughout the path." },
  { question: "The shortest distance between the initial and final position of an object is called ___.", answer: "displacement", type: "fib", explanation: "Displacement is defined precisely as this shortest, directed distance." },

  { question: "Match the physics term with its correct formula or description", type: "match",
    pairs: [
      ["Speed", "Distance / Time"],
      ["Velocity", "Displacement / Time"],
      ["Acceleration", "(v − u) / t"],
      ["Displacement (eqn.)", "ut + ½at²"]
    ]
  },
  { question: "Match the motion graph feature with what it represents", type: "match",
    pairs: [
      ["Slope of distance-time graph", "Speed"],
      ["Slope of velocity-time graph", "Acceleration"],
      ["Area under velocity-time graph", "Displacement"],
      ["Horizontal line on distance-time graph", "Object at rest"]
    ]
  }
];
