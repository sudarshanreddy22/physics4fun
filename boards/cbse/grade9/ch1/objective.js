/* Grade 9 Physics — Revision Club | Motion Graphs & Equations of Motion
   Exactly 40 questions: 30 general MCQs and 10 Assertion–Reason MCQs.
   Ordering: 30 general MCQs first, followed by 10 Assertion–Reason MCQs.
   Compatibility: window.objectiveData; type: "mcq"; options: four choices;
   answer: zero-based index (0=A, 1=B, 2=C, 3=D).
   HTML <br> puts Assertion (A) and Reason (R) on separate lines and also
   formats step-by-step solutions in the explanation panel.
   Mathematics uses readable Unicode symbols (², −, ×, ½) without requiring MathJax.
*/
window.objectiveData = [
  {
    question: "Which equation of uniformly accelerated motion does not contain time?",
    options: ["v = u + at", "s = ut + ½at²", "v² = u² + 2as", "s = (u + v)t/2"],
    answer: 2,
    type: "mcq",
    explanation: "The three equations of uniformly accelerated motion are v = u + at, s = ut + ½at² and v² = u² + 2as.<br>Only v² = u² + 2as has no time (t) term. Hence option C is correct."
  },
  {
    question: "A body travels at +4 m/s for 3 s and then at −2 m/s for 3 s. What is its total distance?",
    options: ["6 m", "12 m", "18 m", "0 m"],
    answer: 2,
    type: "mcq",
    explanation: "Distance is the total path length, irrespective of direction.<br>First part = |+4 × 3| = 12 m.<br>Second part = |−2 × 3| = 6 m.<br>Total distance = 12 + 6 = 18 m."
  },
  {
    question: "An object has uniform acceleration. Which statement is correct about its velocity–time graph?",
    options: ["It is always horizontal", "It is a straight line of constant slope", "It must be curved", "It must lie on the time axis"],
    answer: 1,
    type: "mcq",
    explanation: "Acceleration is the slope of a velocity–time graph: a = (v − u)/t.<br>When acceleration is uniform, the slope is constant; therefore the graph is a straight line (which may also be horizontal if a = 0)."
  },
  {
    question: "Velocity falls uniformly from 18 m/s to 6 m/s in 4 s. What is acceleration?",
    options: ["+3 m/s²", "−3 m/s²", "−6 m/s²", "+6 m/s²"],
    answer: 1,
    type: "mcq",
    explanation: "Given: u = 18 m/s, v = 6 m/s, t = 4 s.<br>Formula: a = (v − u)/t.<br>Substitute: a = (6 − 18)/4 = −12/4.<br>Answer: a = −3 m/s²."
  },
  {
    question: "A horizontal line at +6 m/s on a velocity–time graph indicates:",
    options: ["6 m/s² acceleration", "Zero velocity", "Constant positive velocity", "Constant negative acceleration"],
    answer: 2,
    type: "mcq",
    explanation: "The graph stays at +6 m/s for every instant shown.<br>Velocity is therefore constant and positive, and its slope (acceleration) is zero."
  },
  {
    question: "A car starts from rest with uniform acceleration 2 m/s². What distance does it cover in 5 s?",
    options: ["10 m", "20 m", "25 m", "50 m"],
    answer: 2,
    type: "mcq",
    explanation: "Given: u = 0 m/s, a = 2 m/s², t = 5 s.<br>Formula: s = ut + ½at².<br>Substitute: s = 0 × 5 + ½ × 2 × 5² = 25 m.<br>Answer: 25 m."
  },
  {
    question: "A distance–time graph is a straight line rising uniformly. What does this indicate?",
    options: ["Uniform speed", "Uniform acceleration", "Object at rest", "Decreasing speed"],
    answer: 0,
    type: "mcq",
    explanation: "For a distance–time graph, slope = change in distance ÷ change in time.<br>A straight line with a constant positive slope means the same distance is covered in each equal time interval: uniform speed."
  },
  {
    question: "A ball moving at 15 m/s stops uniformly after travelling 45 m. What is its acceleration?",
    options: ["−2.5 m/s²", "−5 m/s²", "+2.5 m/s²", "+5 m/s²"],
    answer: 0,
    type: "mcq",
    explanation: "Given: u = 15 m/s, v = 0 m/s, s = 45 m.<br>Formula: v² = u² + 2as.<br>Substitute: 0² = 15² + 2 × a × 45.<br>So 90a = −225, giving a = −225/90 = −2.5 m/s².<br>Answer: −2.5 m/s² (retardation)."
  },
  {
    question: "Which quantity is obtained from the slope of a velocity–time graph?",
    options: ["Displacement", "Acceleration", "Distance", "Momentum"],
    answer: 1,
    type: "mcq",
    explanation: "Slope of a velocity–time graph = change in velocity ÷ change in time.<br>Therefore a = (v − u)/t, so the slope represents acceleration."
  },
  {
    question: "A body moves at a constant velocity of +8 m/s for 5 s. Find its displacement from the velocity–time graph.",
    options: ["13 m", "40 m", "1.6 m", "80 m"],
    answer: 1,
    type: "mcq",
    explanation: "Given: constant velocity v = +8 m/s and t = 5 s.<br>Area under the velocity–time graph = rectangle area = velocity × time.<br>Displacement = (+8) × 5 = +40 m."
  },
  {
    question: "A straight displacement–time graph slopes downward as time increases. The velocity is:",
    options: ["Positive", "Negative", "Zero", "Increasing positively"],
    answer: 1,
    type: "mcq",
    explanation: "The slope of a displacement–time graph is velocity.<br>A downward straight line has a constant negative slope; therefore the object has constant negative velocity."
  },
  {
    question: "Two objects have straight distance–time graphs with slopes 2 m/s and 5 m/s. Which is faster?",
    options: ["The 2 m/s object", "Both are equally fast", "The 5 m/s object", "Cannot be determined"],
    answer: 2,
    type: "mcq",
    explanation: "For distance–time graphs, speed equals slope.<br>Object 1: 2 m/s; object 2: 5 m/s.<br>Since 5 > 2, the object with slope 5 m/s is faster."
  },
  {
    question: "An object moves with initial velocity 4 m/s, acceleration 2 m/s² for 3 s. Find displacement.",
    options: ["12 m", "18 m", "21 m", "30 m"],
    answer: 2,
    type: "mcq",
    explanation: "Given: u = 4 m/s, a = 2 m/s², t = 3 s.<br>Formula: s = ut + ½at².<br>Substitute: s = (4 × 3) + (½ × 2 × 3²) = 12 + 9.<br>Answer: s = 21 m."
  },
  {
    question: "A bicycle initially moves at 5 m/s and accelerates uniformly at 2 m/s² for 3 s. Its final velocity is:",
    options: ["7 m/s", "9 m/s", "11 m/s", "15 m/s"],
    answer: 2,
    type: "mcq",
    explanation: "Given: u = 5 m/s, a = 2 m/s², t = 3 s.<br>Formula: v = u + at.<br>Substitute: v = 5 + (2 × 3).<br>Answer: v = 11 m/s."
  },
  {
    question: "A velocity–time graph is a straight line rising from 0 m/s at 0 s to 20 m/s at 5 s. Find acceleration.",
    options: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
    answer: 1,
    type: "mcq",
    explanation: "From the velocity–time graph: u = 0 m/s, v = 20 m/s, t = 5 s.<br>Slope = a = (v − u)/t = (20 − 0)/5.<br>Answer: a = 4 m/s²."
  },
  {
    question: "A moving object slows uniformly from 20 m/s to rest in 5 s. Its acceleration is:",
    options: ["+4 m/s²", "−4 m/s²", "−5 m/s²", "+5 m/s²"],
    answer: 1,
    type: "mcq",
    explanation: "Given: u = 20 m/s, v = 0 m/s, t = 5 s.<br>Formula: a = (v − u)/t.<br>Substitute: a = (0 − 20)/5.<br>Answer: a = −4 m/s² (uniform retardation)."
  },
  {
    question: "A displacement–time graph is horizontal at −4 m. What is the object’s velocity?",
    options: ["−4 m/s", "4 m/s", "0 m/s", "Cannot be found"],
    answer: 2,
    type: "mcq",
    explanation: "The graph is horizontal, so its displacement is fixed at −4 m.<br>Velocity = change in displacement ÷ time = 0 ÷ time = 0 m/s."
  },
  {
    question: "Which graph has a zero slope when an object moves at uniform nonzero velocity?",
    options: ["Distance–time", "Displacement–time", "Velocity–time", "None of these"],
    answer: 2,
    type: "mcq",
    explanation: "With uniform nonzero velocity, the velocity does not change with time.<br>The velocity–time graph is horizontal and hence has zero slope (zero acceleration)."
  },
  {
    question: "A car starts from rest and accelerates uniformly at 3 m/s² for 4 s. Find its final velocity.",
    options: ["7 m/s", "12 m/s", "16 m/s", "24 m/s"],
    answer: 1,
    type: "mcq",
    explanation: "Given: u = 0 m/s, a = 3 m/s², t = 4 s.<br>Formula: v = u + at.<br>Substitute: v = 0 + (3 × 4).<br>Answer: v = 12 m/s."
  },
  {
    question: "A body moves from +8 m to −4 m along a line in 3 s. What is its average velocity?",
    options: ["+4 m/s", "−4 m/s", "−12 m/s", "+12 m/s"],
    answer: 1,
    type: "mcq",
    explanation: "Given: initial position x₁ = +8 m, final position x₂ = −4 m, t = 3 s.<br>Displacement Δx = x₂ − x₁ = −4 − 8 = −12 m.<br>Average velocity = Δx/t = −12/3 = −4 m/s."
  },
  {
    question: "The slope of a displacement–time graph gives:",
    options: ["Speed only", "Acceleration", "Velocity", "Distance"],
    answer: 2,
    type: "mcq",
    explanation: "Velocity measures the rate of change of displacement.<br>Slope of displacement–time graph = change in displacement ÷ change in time = velocity."
  },
  {
    question: "Velocity increases uniformly from 0 to 12 m/s in 4 s. What is the displacement?",
    options: ["12 m", "24 m", "48 m", "3 m"],
    answer: 1,
    type: "mcq",
    explanation: "Given: u = 0 m/s, v = 12 m/s, t = 4 s.<br>Displacement = signed area under the velocity–time graph.<br>Area of triangle = ½ × base × height = ½ × 4 × 12.<br>Answer: 24 m."
  },
  {
    question: "Which quantities are plotted on the horizontal and vertical axes, respectively, of a distance–time graph?",
    options: ["Distance and time", "Time and distance", "Speed and distance", "Time and acceleration"],
    answer: 1,
    type: "mcq",
    explanation: "On a distance–time graph, time is on the horizontal (X) axis, while distance is on the vertical (Y) axis.<br>Hence the correct order is time and distance."
  },
  {
    question: "For the motion +4 m/s for 3 s then −2 m/s for 3 s, what is the displacement?",
    options: ["+6 m", "+18 m", "−6 m", "0 m"],
    answer: 0,
    type: "mcq",
    explanation: "Displacement = signed area under the velocity–time graph.<br>First part: (+4) × 3 = +12 m.<br>Second part: (−2) × 3 = −6 m.<br>Net displacement = +12 − 6 = +6 m."
  },
  {
    question: "A horizontal distance–time graph represents an object that is:",
    options: ["Accelerating", "At rest", "Moving backwards", "Moving at constant nonzero speed"],
    answer: 1,
    type: "mcq",
    explanation: "A horizontal distance–time graph has zero slope.<br>The distance travelled does not increase as time passes, so the object is at rest."
  },
  {
    question: "What does the signed area between a velocity–time graph and the time axis represent?",
    options: ["Acceleration", "Speed", "Displacement", "Force"],
    answer: 2,
    type: "mcq",
    explanation: "Displacement = signed area under a velocity–time graph.<br>Areas above the time axis are positive; areas below it are negative. Add them algebraically to get net displacement."
  },
  {
    question: "A body travels at −3 m/s for 4 s. Its displacement is:",
    options: ["+12 m", "−12 m", "+7 m", "−7 m"],
    answer: 1,
    type: "mcq",
    explanation: "Given: velocity v = −3 m/s, time t = 4 s.<br>Formula: displacement s = vt.<br>Substitute: s = (−3) × 4.<br>Answer: s = −12 m."
  },
  {
    question: "What is the speed of an object whose distance increases from 20 m to 80 m in 12 s?",
    options: ["4 m/s", "5 m/s", "6 m/s", "12 m/s"],
    answer: 1,
    type: "mcq",
    explanation: "Given: distance changes from 20 m to 80 m during 12 s.<br>Distance travelled = 80 − 20 = 60 m.<br>Speed = change in distance ÷ time = 60/12 = 5 m/s."
  },
  {
    question: "A body initially at rest attains 10 m/s over a displacement of 25 m with constant acceleration. Find acceleration.",
    options: ["1 m/s²", "2 m/s²", "4 m/s²", "5 m/s²"],
    answer: 1,
    type: "mcq",
    explanation: "Given: u = 0 m/s, v = 10 m/s, s = 25 m.<br>Formula: v² = u² + 2as.<br>Substitute: 10² = 0² + 2 × a × 25.<br>So 100 = 50a, giving a = 2 m/s²."
  },
  {
    question: "A vehicle moves at a constant velocity of 12 m/s for 6 s. What is its displacement?",
    options: ["18 m", "72 m", "2 m", "144 m"],
    answer: 1,
    type: "mcq",
    explanation: "Given: constant velocity v = 12 m/s and time t = 6 s.<br>Formula: s = vt (because a = 0).<br>Substitute: s = 12 × 6.<br>Answer: displacement = 72 m."
  },
  {
    question: "Assertion (A): A horizontal velocity–time graph above the time axis represents zero acceleration.<br>Reason (R): The velocity of the body remains constant over time.",
    options: ["Both Assertion and Reason are true, and Reason correctly explains Assertion.", "Both Assertion and Reason are true, but Reason does not correctly explain Assertion.", "Assertion is true, but Reason is false.", "Assertion is false, but Reason is true."],
    answer: 0,
    type: "mcq",
    explanation: "Assertion: True. A horizontal velocity–time line has zero slope.<br>Reason: True. Its velocity remains constant.<br>Since acceleration = change in velocity ÷ time = 0, the Reason correctly explains the Assertion."
  },
  {
    question: "Assertion (A): An object can have zero displacement but nonzero distance travelled.<br>Reason (R): The object may return to its starting position after moving along a path.",
    options: ["Both Assertion and Reason are true, and Reason correctly explains Assertion.", "Both Assertion and Reason are true, but Reason does not correctly explain Assertion.", "Assertion is true, but Reason is false.", "Assertion is false, but Reason is true."],
    answer: 0,
    type: "mcq",
    explanation: "Assertion: True. Distance can be positive even when final displacement is zero.<br>Reason: True. Returning to the starting point makes final position equal to initial position.<br>The Reason correctly explains the Assertion."
  },
  {
    question: "Assertion (A): A steeper distance–time graph represents a greater speed.<br>Reason (R): Speed is numerically equal to the slope of a distance–time graph.",
    options: ["Both Assertion and Reason are true, and Reason correctly explains Assertion.", "Both Assertion and Reason are true, but Reason does not correctly explain Assertion.", "Assertion is true, but Reason is false.", "Assertion is false, but Reason is true."],
    answer: 0,
    type: "mcq",
    explanation: "Assertion: True. A steeper distance–time graph means greater speed.<br>Reason: True. Speed equals the slope of this graph.<br>The Reason correctly explains the Assertion."
  },
  {
    question: "Assertion (A): A body moving with negative velocity must have negative acceleration.<br>Reason (R): The sign of acceleration depends on how velocity changes with time.",
    options: ["Both Assertion and Reason are true, and Reason correctly explains Assertion.", "Both Assertion and Reason are true, but Reason does not correctly explain Assertion.", "Assertion is true, but Reason is false.", "Assertion is false, but Reason is true."],
    answer: 3,
    type: "mcq",
    explanation: "Assertion: False. Negative velocity can occur with negative, positive or zero acceleration.<br>Reason: True. Acceleration depends on the change in velocity, not merely on its sign.<br>Example: velocity changes from −8 m/s to −4 m/s in 2 s; a = [−4 − (−8)]/2 = +2 m/s², despite negative velocity."
  },
  {
    question: "Assertion (A): The equation v² = u² + 2as can be used without knowing the time of motion.<br>Reason (R): It contains initial velocity, final velocity, acceleration and displacement.",
    options: ["Both Assertion and Reason are true, and Reason correctly explains Assertion.", "Both Assertion and Reason are true, but Reason does not correctly explain Assertion.", "Assertion is true, but Reason is false.", "Assertion is false, but Reason is true."],
    answer: 0,
    type: "mcq",
    explanation: "Assertion: True. The equation v² = u² + 2as does not require time.<br>Reason: True. It relates initial and final velocities (u, v), acceleration (a) and displacement (s), with no t term.<br>The Reason correctly explains the Assertion."
  },
  {
    question: "Assertion (A): The equation v = u + at is applicable to motion with uniform acceleration.<br>Reason (R): Uniform acceleration means equal changes in velocity in equal time intervals.",
    options: ["Both Assertion and Reason are true, and Reason correctly explains Assertion.", "Both Assertion and Reason are true, but Reason does not correctly explain Assertion.", "Assertion is true, but Reason is false.", "Assertion is false, but Reason is true."],
    answer: 0,
    type: "mcq",
    explanation: "Assertion: True. v = u + at applies when acceleration is constant.<br>Reason: True. Uniform acceleration means equal velocity changes in equal time intervals.<br>Using a = (v − u)/t gives v = u + at. The Reason correctly explains the Assertion."
  },
  {
    question: "Assertion (A): The area under a velocity–time graph gives displacement.<br>Reason (R): Multiplying velocity by a time interval gives displacement when velocity is constant.",
    options: ["Both Assertion and Reason are true, and Reason correctly explains Assertion.", "Both Assertion and Reason are true, but Reason does not correctly explain Assertion.", "Assertion is true, but Reason is false.", "Assertion is false, but Reason is true."],
    answer: 0,
    type: "mcq",
    explanation: "Assertion: True. The signed area between a velocity–time graph and the time axis gives displacement.<br>Reason: True. For constant velocity, displacement = velocity × time (rectangular area).<br>For changing velocity, adding the signed areas of small time intervals gives total displacement; therefore the Reason explains the Assertion."
  },
  {
    question: "Assertion (A): The slope of a distance–time graph gives speed.<br>Reason (R): Slope represents change in distance divided by the corresponding change in time.",
    options: ["Both Assertion and Reason are true, and Reason correctly explains Assertion.", "Both Assertion and Reason are true, but Reason does not correctly explain Assertion.", "Assertion is true, but Reason is false.", "Assertion is false, but Reason is true."],
    answer: 0,
    type: "mcq",
    explanation: "Assertion: True. Slope of a distance–time graph represents speed.<br>Reason: True. Slope = change in distance ÷ change in time, which is the definition of speed.<br>The Reason correctly explains the Assertion."
  },
  {
    question: "Assertion (A): A negative slope of a displacement–time graph indicates motion in the negative direction.<br>Reason (R): The slope of a displacement–time graph gives velocity.",
    options: ["Both Assertion and Reason are true, and Reason correctly explains Assertion.", "Both Assertion and Reason are true, but Reason does not correctly explain Assertion.", "Assertion is true, but Reason is false.", "Assertion is false, but Reason is true."],
    answer: 0,
    type: "mcq",
    explanation: "Assertion: True. Negative slope on a displacement–time graph means negative velocity.<br>Reason: True. The slope of this graph represents velocity.<br>The Reason correctly explains the Assertion."
  },
  {
    question: "Assertion (A): The distance travelled always equals the magnitude of displacement.<br>Reason (R): Distance is the total length of the path travelled.",
    options: ["Both Assertion and Reason are true, and Reason correctly explains Assertion.", "Both Assertion and Reason are true, but Reason does not correctly explain Assertion.", "Assertion is true, but Reason is false.", "Assertion is false, but Reason is true."],
    answer: 3,
    type: "mcq",
    explanation: "Assertion: False. Distance is not always equal to the magnitude of displacement; for a round trip, displacement is zero but distance is positive.<br>Reason: True. Distance is the total length of the path travelled.<br>Hence the Assertion is false and the Reason is true."
  }
];
