window.chapterNotes = {
  title: "Motion",
  grade: "9",
  icon: "🏃",
  sections: [
    {
      icon: "📍",
      heading: "Rest and Motion",
      content: `
        <p>An object is said to be in <strong>motion</strong> if its position changes with time relative to a reference point (observer). If its position does not change, it is at <strong>rest</strong>.</p>
        <div class="n-callout n-callout-blue"><span class="n-callout-icon">💡</span><span>Rest and motion are <strong>relative</strong> — a passenger is at rest with respect to the bus but in motion with respect to a person standing on the road.</span></div>
      `
    },
    {
      icon: "📏",
      heading: "Distance and Displacement",
      content: `
        <div class="n-two-col">
          <div class="n-term-card"><span class="n-term-label">Distance</span><span class="n-term-desc">Total path length covered by an object. Scalar quantity. Always positive.</span></div>
          <div class="n-term-card"><span class="n-term-label">Displacement</span><span class="n-term-desc">Shortest distance between initial and final position, with direction. Vector quantity. Can be zero, positive or negative.</span></div>
        </div>
        <div class="n-formula-banner"><span class="n-fb-label">KEY RELATION</span><span class="n-fb-eq">Distance ≥ |Displacement|</span></div>
        <div class="n-callout n-callout-yellow"><span class="n-callout-icon">⚠️</span><span>For a round trip (returns to start), displacement = 0 but distance ≠ 0.</span></div>
      `
    },
    {
      icon: "⏱️",
      heading: "Speed and Velocity",
      content: `
        <div class="n-two-col">
          <div class="n-term-card"><span class="n-term-label">Speed</span><span class="n-term-desc">Distance travelled per unit time. Scalar. SI unit: m/s.</span></div>
          <div class="n-term-card"><span class="n-term-label">Velocity</span><span class="n-term-desc">Displacement per unit time. Vector — has magnitude and direction. SI unit: m/s.</span></div>
        </div>
        <div class="n-formula-banner"><span class="n-fb-label">SPEED</span><span class="n-fb-eq">Speed = Distance / Time</span></div>
        <div class="n-formula-banner"><span class="n-fb-label">VELOCITY</span><span class="n-fb-eq">Velocity = Displacement / Time</span></div>
        <p><strong>Uniform velocity:</strong> equal displacements in equal time intervals, same direction.<br><strong>Average velocity</strong> = Total displacement / Total time. <strong>Average speed</strong> = Total distance / Total time.</p>
      `
    },
    {
      icon: "🚀",
      heading: "Acceleration",
      content: `
        <p>Acceleration is the rate of change of velocity with time.</p>
        <div class="n-formula-banner"><span class="n-fb-label">FORMULA</span><span class="n-fb-eq">a = (v − u) / t</span></div>
        <p>Where <em>u</em> = initial velocity, <em>v</em> = final velocity, <em>t</em> = time taken. SI unit: m/s².</p>
        <div class="n-callout n-callout-green"><span class="n-callout-icon">✅</span><span><strong>Positive acceleration:</strong> velocity increases. <strong>Negative acceleration (retardation):</strong> velocity decreases. <strong>Zero acceleration:</strong> uniform velocity.</span></div>
      `
    },
    {
      icon: "📈",
      heading: "Graphical Representation of Motion",
      content: `
        <div class="n-law-box">
          <div class="n-law-title">📊 Key Graph Facts</div>
          <div class="n-law-item"><strong>Distance–Time graph:</strong> Slope = speed. Straight line → uniform speed. Curved line → non-uniform speed. Horizontal line → object at rest.</div>
          <div class="n-law-item"><strong>Velocity–Time graph:</strong> Slope = acceleration. Area under the graph = displacement.</div>
        </div>
        <div class="n-callout n-callout-purple"><span class="n-callout-icon">📐</span><span>A straight, upward-sloping v-t graph shows uniform (constant) acceleration. A horizontal v-t line shows zero acceleration (uniform velocity).</span></div>
      `
    },
    {
      icon: "🧮",
      heading: "Equations of Motion (Uniform Acceleration)",
      content: `
        <div class="n-law-box">
          <div class="n-law-title">⚡ The Three Equations</div>
          <div class="n-law-item"><span class="n-law-num">1</span><strong>v = u + at</strong> — velocity-time relation</div>
          <div class="n-law-item"><span class="n-law-num">2</span><strong>s = ut + ½at²</strong> — position-time relation</div>
          <div class="n-law-item"><span class="n-law-num">3</span><strong>v² = u² + 2as</strong> — position-velocity relation</div>
        </div>
        <p>Where <em>u</em> = initial velocity, <em>v</em> = final velocity, <em>a</em> = acceleration, <em>t</em> = time, <em>s</em> = displacement.</p>
      `
    },
    {
      icon: "🔄",
      heading: "Uniform Circular Motion",
      content: `
        <p>When an object moves in a circular path at constant speed, its motion is called <strong>uniform circular motion</strong>. Even though speed is constant, velocity keeps changing because direction changes continuously — so the motion is <strong>accelerated</strong>.</p>
        <div class="n-chips-row">
          <span class="n-chip">Speed constant</span>
          <span class="n-chip">Direction changes</span>
          <span class="n-chip">Always accelerating</span>
          <span class="n-chip">Examples: Earth around Sun, tip of clock hands</span>
        </div>
      `
    }
  ]
};
