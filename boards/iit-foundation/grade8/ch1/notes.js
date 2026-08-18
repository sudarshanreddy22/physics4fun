/* =====================================================
   Units and Dimensions | Grade 8 IIT Foundation Notes
   ===================================================== */

window.chapterNotes = {
  title: "Units and Dimensions",
  grade: "8",
  icon: "📏",
  sections: [

    {
      icon: "🌟",
      heading: "Introduction to Physical Quantities",
      content: `
        <div class="n-callout n-callout-blue">
          <span class="n-callout-icon">📌</span>
          <span>
            Physics deals with measurable quantities such as
            <strong>length, mass, time, area, volume, density</strong> and many others.
          </span>
        </div>

        <div class="n-chips-row">
          <span class="n-chip">Physical Quantity</span>
          <span class="n-chip">Measurement</span>
          <span class="n-chip">Unit</span>
          <span class="n-chip">Fundamental Quantity</span>
          <span class="n-chip">Derived Quantity</span>
          <span class="n-chip">SI Units</span>
          <span class="n-chip">Prefixes</span>
          <span class="n-chip">Dimensions</span>
        </div>
      `
    },

    {
      icon: "📌",
      heading: "Physical Quantity",
      content: `
        <p class="n-def">
          Any quantity which is <strong>measurable</strong> is called a
          <strong>physical quantity</strong>.
        </p>

        <div class="n-section-sub">Examples</div>

        <div class="n-two-col">
          <div class="n-term-card">
            <div class="n-term-label">Length</div>
            <div class="n-term-desc">Measured in metre (m)</div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Mass</div>
            <div class="n-term-desc">Measured in kilogram (kg)</div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Time</div>
            <div class="n-term-desc">Measured in second (s)</div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Area</div>
            <div class="n-term-desc">Measured in square metre (m²)</div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Volume</div>
            <div class="n-term-desc">Measured in cubic metre (m³)</div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Density</div>
            <div class="n-term-desc">Measured in kg/m³ in SI system</div>
          </div>
        </div>
      `
    },

    {
      icon: "📐",
      heading: "Measurement",
      content: `
        <p class="n-def">
          <strong>Measurement</strong> is the comparison of an unknown quantity
          with a known or <strong>standard quantity</strong>.
        </p>

        <div class="n-example-row">
          <div class="n-eg-item">
            📏 To measure the length of a room, the actual length is the
            unknown quantity.
          </div>

          <div class="n-eg-item">
            📏 A known quantity such as metre is chosen for comparison.
          </div>
        </div>

        <div class="n-callout n-callout-yellow">
          <span class="n-callout-icon">💡</span>
          <span>
            A known standard quantity used for comparison of an unknown
            quantity is called a <strong>unit of measurement</strong>.
          </span>
        </div>
      `
    },

    {
      icon: "🔹",
      heading: "Unit",
      content: `
        <p class="n-def">
          The <strong>standard quantity</strong> used for comparison of an
          unknown quantity is called a <strong>unit</strong>.
        </p>

        <div class="n-highlight-card n-card-blue">
          <div class="n-hcard-title">📏 Example</div>
          <div class="n-hcard-body">
            Metre is used as a standard unit for measuring length.
          </div>
        </div>
      `
    },

    {
      icon: "🧮",
      heading: "Expression for Physical Quantity",
      content: `
        <p>Any physical quantity needs two parts:</p>

        <div class="n-two-col">
          <div class="n-highlight-card n-card-blue">
            <div class="n-hcard-title">1️⃣ Numerical Value</div>
            <div class="n-hcard-body">
              It tells how many times the chosen unit is contained in the
              physical quantity.
            </div>
          </div>

          <div class="n-highlight-card n-card-purple">
            <div class="n-hcard-title">2️⃣ Unit</div>
            <div class="n-hcard-body">
              It is the standard quantity used for comparison.
            </div>
          </div>
        </div>

        <div class="n-formula-banner">
          <span class="n-fb-label">Physical Quantity</span>
          <span class="n-fb-eq">P = nu</span>
        </div>

        <div class="n-term-list">
          <div class="n-tl-item">
            <span class="n-tl-key">P</span>
            <span class="n-tl-val">Physical quantity</span>
          </div>

          <div class="n-tl-item">
            <span class="n-tl-key">n</span>
            <span class="n-tl-val">Numerical value</span>
          </div>

          <div class="n-tl-item">
            <span class="n-tl-key">u</span>
            <span class="n-tl-val">Unit</span>
          </div>
        </div>

        <div class="n-formula-banner">
          <span class="n-fb-label">Same Physical Quantity</span>
          <span class="n-fb-eq">P = n₁u₁ = n₂u₂</span>
        </div>

        <div class="n-term-list">
          <div class="n-tl-item">
            <span class="n-tl-key">u₁</span>
            <span class="n-tl-val">Unit in one system</span>
          </div>

          <div class="n-tl-item">
            <span class="n-tl-key">u₂</span>
            <span class="n-tl-val">Unit in another system</span>
          </div>

          <div class="n-tl-item">
            <span class="n-tl-key">n₁</span>
            <span class="n-tl-val">Numerical value in one system</span>
          </div>

          <div class="n-tl-item">
            <span class="n-tl-key">n₂</span>
            <span class="n-tl-val">Numerical value in another system</span>
          </div>
        </div>
      `
    },

    {
      icon: "🔄",
      heading: "Relation Between Numerical Value and Unit",
      content: `
        <div class="n-callout n-callout-blue">
          <span class="n-callout-icon">📌</span>
          <span>
            The physical quantity does not change when the unit is changed,
            but its numerical value changes.
          </span>
        </div>

        <div class="n-formula-banner">
          <span class="n-fb-label">Important Relation</span>
          <span class="n-fb-eq">n ∝ 1/u</span>
        </div>

        <div class="n-two-col">
          <div class="n-term-card">
            <div class="n-term-label">Large Unit</div>
            <div class="n-term-desc">
              Numerical value is smaller.
            </div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Small Unit</div>
            <div class="n-term-desc">
              Numerical value is larger.
            </div>
          </div>
        </div>

        <div class="n-callout n-callout-yellow">
          <span class="n-callout-icon">🧠</span>
          <span>
            Remember: <strong>Numerical value is inversely proportional to
            the size of the unit.</strong>
          </span>
        </div>
      `
    },

    {
      icon: "📏",
      heading: "Types of Units",
      content: `
        <p>Units are of two types:</p>

        <div class="n-two-col">
          <div class="n-highlight-card n-card-blue">
            <div class="n-hcard-title">1️⃣ Traditional Units</div>
            <div class="n-hcard-body">
              Units used traditionally, often based on body parts or local
              standards.
            </div>
          </div>

          <div class="n-highlight-card n-card-purple">
            <div class="n-hcard-title">2️⃣ Standard Units</div>
            <div class="n-hcard-body">
              Units accepted and used as standard units of measurement.
            </div>
          </div>
        </div>
      `
    },

    {
      icon: "🖐️",
      heading: "Traditional Units",
      content: `
        <p>
          In ancient times, people used their body parts to measure length,
          such as the <strong>hand</strong> and <strong>foot</strong>.
        </p>

        <p>
          Measurements taken using such units vary from person to person.
        </p>

        <div class="n-callout n-callout-yellow">
          <span class="n-callout-icon">⚠️</span>
          <span>
            Units which are not clearly defined and do not have the same value
            everywhere are called <strong>non-standard units</strong> or
            <strong>traditional units</strong>.
          </span>
        </div>
      `
    },

    {
      icon: "🌍",
      heading: "Standard Unit",
      content: `
        <p class="n-def">
          A unit which is acceptable to the majority of people as a basic
          unit of measurement is called a <strong>standard unit</strong>.
        </p>

        <p>
          A standard unit should have <strong>international acceptance</strong>.
        </p>

        <div class="n-highlight-card n-card-blue">
          <div class="n-hcard-title">
            🌐 CGPM
          </div>
          <div class="n-hcard-body">
            <strong>Conference Generale des poids et mesures (CGPM)</strong>,
            also known as the General Conference on Weights and Measures,
            has been given authority to decide units by international
            agreement.
          </div>
        </div>
      `
    },

    {
      icon: "✅",
      heading: "Characteristics of Standard Unit",
      content: `
        <div class="n-checklist">

          <div class="n-check-item">
            <span class="n-check-icon">1️⃣</span>
            <span>It should be <strong>precisely defined</strong>.</span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">2️⃣</span>
            <span>
              It should not depend on the <strong>time and place</strong>
              of measurement.
            </span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">3️⃣</span>
            <span>
              It should not be <strong>perishable</strong>
              (spoil or decay).
            </span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">4️⃣</span>
            <span>
              It should be <strong>easily reproducible</strong>.
            </span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">5️⃣</span>
            <span>
              It should represent a <strong>fixed value universally</strong>.
            </span>
          </div>

        </div>
      `
    },

    {
      icon: "🔬",
      heading: "Types of Physical Quantities",
      content: `
        <div class="n-two-col">

          <div class="n-highlight-card n-card-blue">
            <div class="n-hcard-title">
              📌 Fundamental Quantities
            </div>
            <div class="n-hcard-body">
              Quantities which do not depend on other physical quantities
              are called <strong>fundamental quantities</strong>.
            </div>
          </div>

          <div class="n-highlight-card n-card-purple">
            <div class="n-hcard-title">
              🔗 Derived Quantities
            </div>
            <div class="n-hcard-body">
              Quantities which are defined in terms of fundamental quantities
              are called <strong>derived quantities</strong>.
            </div>
          </div>

        </div>
      `
    },

    {
      icon: "📌",
      heading: "Fundamental Quantities",
      content: `
        <p class="n-def">
          Quantities which do not depend on other physical quantities,
          i.e. the quantities which are absolute, are called
          <strong>fundamental quantities</strong>.
        </p>

        <div class="n-section-sub">Examples</div>

        <div class="n-chips-row">
          <span class="n-chip">Mass</span>
          <span class="n-chip">Length</span>
          <span class="n-chip">Time</span>
          <span class="n-chip">Temperature</span>
          <span class="n-chip">Electric Current</span>
          <span class="n-chip">Luminous Intensity</span>
          <span class="n-chip">Amount of Substance</span>
        </div>

        <div class="n-callout n-callout-blue">
          <span class="n-callout-icon">📏</span>
          <span>
            The units of fundamental quantities are called
            <strong>fundamental units</strong>.
          </span>
        </div>
      `
    },

    {
      icon: "🔗",
      heading: "Derived Quantities",
      content: `
        <p class="n-def">
          Quantities which are defined in terms of fundamental quantities
          are called <strong>derived quantities</strong>.
        </p>

        <div class="n-section-sub">Examples</div>

        <div class="n-two-col">

          <div class="n-term-card">
            <div class="n-term-label">Area</div>
            <div class="n-term-desc">Length × Length → m²</div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Volume</div>
            <div class="n-term-desc">Length³ → m³</div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Speed</div>
            <div class="n-term-desc">Length / Time → m/s</div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Density</div>
            <div class="n-term-desc">Mass / Volume → kg/m³</div>
          </div>

        </div>

        <div class="n-callout n-callout-purple">
          <span class="n-callout-icon">📌</span>
          <span>
            Units of derived quantities are called
            <strong>derived units</strong>.
          </span>
        </div>
      `
    },

    {
      icon: "🌐",
      heading: "Systems of Units",
      content: `
        <p>
          Different systems of units have been used for measuring physical
          quantities.
        </p>

        <div class="n-clean-table-wrap">
          <table class="n-clean-table">
            <thead>
              <tr>
                <th>System</th>
                <th>Full Form</th>
                <th>Basic Units</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CGS</td>
                <td>Centimetre–Gram–Second</td>
                <td>cm, g, s</td>
              </tr>
              <tr>
                <td>MKS</td>
                <td>Metre–Kilogram–Second</td>
                <td>m, kg, s</td>
              </tr>
              <tr>
                <td>FPS</td>
                <td>Foot–Pound–Second</td>
                <td>ft, lb, s</td>
              </tr>
              <tr>
                <td>SI</td>
                <td>International System of Units</td>
                <td>SI units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="n-callout n-callout-blue">
          <span class="n-callout-icon">🌍</span>
          <span>
            The <strong>SI system</strong> is the internationally accepted
            system of units.
          </span>
        </div>
      `
    },

    {
      icon: "🔢",
      heading: "SI Base Units",
      content: `
        <p>
          The SI system contains <strong>seven base units</strong>.
        </p>

        <table class="n-clean-table">
          <thead>
            <tr>
              <th>Physical Quantity</th>
              <th>SI Unit</th>
              <th>Symbol</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Length</td>
              <td>metre</td>
              <td>m</td>
            </tr>

            <tr>
              <td>Mass</td>
              <td>kilogram</td>
              <td>kg</td>
            </tr>

            <tr>
              <td>Time</td>
              <td>second</td>
              <td>s</td>
            </tr>

            <tr>
              <td>Temperature</td>
              <td>kelvin</td>
              <td>K</td>
            </tr>

            <tr>
              <td>Electric current</td>
              <td>ampere</td>
              <td>A</td>
            </tr>

            <tr>
              <td>Luminous intensity</td>
              <td>candela</td>
              <td>cd</td>
            </tr>

            <tr>
              <td>Amount of substance</td>
              <td>mole</td>
              <td>mol</td>
            </tr>
          </tbody>
        </table>
      `
    },

    {
      icon: "📐",
      heading: "Supplementary Quantities",
      content: `
        <div class="n-two-col">

          <div class="n-highlight-card n-card-blue">
            <div class="n-hcard-title">Plane Angle</div>
            <div class="n-hcard-body">
              SI unit: <strong>radian (rad)</strong>
            </div>
          </div>

          <div class="n-highlight-card n-card-purple">
            <div class="n-hcard-title">Solid Angle</div>
            <div class="n-hcard-body">
              SI unit: <strong>steradian (sr)</strong>
            </div>
          </div>

        </div>

        <div class="n-callout n-callout-yellow">
          <span class="n-callout-icon">📌</span>
          <span>
            Plane angle and solid angle are <strong>dimensionless
            quantities</strong>, although they have units.
          </span>
        </div>
      `
    },

    {
      icon: "🔢",
      heading: "SI Prefixes",
      content: `
        <p>
          Prefixes are used to express very large or very small quantities
          conveniently.
        </p>

        <table class="n-clean-table">
          <thead>
            <tr>
              <th>Prefix</th>
              <th>Symbol</th>
              <th>Power of 10</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Kilo</td>
              <td>k</td>
              <td>10³</td>
            </tr>

            <tr>
              <td>Mega</td>
              <td>M</td>
              <td>10⁶</td>
            </tr>

            <tr>
              <td>Giga</td>
              <td>G</td>
              <td>10⁹</td>
            </tr>

            <tr>
              <td>Centi</td>
              <td>c</td>
              <td>10⁻²</td>
            </tr>

            <tr>
              <td>Milli</td>
              <td>m</td>
              <td>10⁻³</td>
            </tr>

            <tr>
              <td>Micro</td>
              <td>μ</td>
              <td>10⁻⁶</td>
            </tr>

            <tr>
              <td>Nano</td>
              <td>n</td>
              <td>10⁻⁹</td>
            </tr>

            <tr>
              <td>Pico</td>
              <td>p</td>
              <td>10⁻¹²</td>
            </tr>

            <tr>
              <td>Femto</td>
              <td>f</td>
              <td>10⁻¹⁵</td>
            </tr>
          </tbody>
        </table>
      `
    },

    {
      icon: "🔄",
      heading: "Unit Conversion",
      content: `
        <p>
          A physical quantity remains unchanged when its unit is changed.
          Only its numerical value changes.
        </p>

        <div class="n-formula-banner">
          <span class="n-fb-label">Basic Principle</span>
          <span class="n-fb-eq">n₁u₁ = n₂u₂</span>
        </div>

        <div class="n-example-row">

          <div class="n-eg-item">
            <strong>Length:</strong>
            1 m = 100 cm
          </div>

          <div class="n-eg-item">
            <strong>Length:</strong>
            1 km = 10³ m
          </div>

          <div class="n-eg-item">
            <strong>Length:</strong>
            1 mm = 10⁻³ m
          </div>

          <div class="n-eg-item">
            <strong>Length:</strong>
            1 μm = 10⁻⁶ m
          </div>

        </div>
      `
    },

    {
      icon: "🧮",
      heading: "Important Unit Conversions",
      content: `
        <table class="n-clean-table">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Conversion</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Length</td>
              <td>1 m = 10² cm</td>
            </tr>

            <tr>
              <td>Length</td>
              <td>1 km = 10³ m</td>
            </tr>

            <tr>
              <td>Area</td>
              <td>1 m² = 10⁴ cm²</td>
            </tr>

            <tr>
              <td>Volume</td>
              <td>1 m³ = 10⁶ cm³</td>
            </tr>

            <tr>
              <td>Force</td>
              <td>1 N = 10⁵ dyne</td>
            </tr>

            <tr>
              <td>Energy</td>
              <td>1 J = 10⁷ erg</td>
            </tr>

            <tr>
              <td>Power</td>
              <td>1 W = 10⁷ erg/s</td>
            </tr>
          </tbody>
        </table>
      `
    },

    {
      icon: "📊",
      heading: "Dimensions of a Physical Quantity",
      content: `
        <p class="n-def">
          The dimensions of a physical quantity represent the powers to which
          the fundamental quantities are raised in order to represent that
          physical quantity.
        </p>

        <div class="n-callout n-callout-blue">
          <span class="n-callout-icon">📌</span>
          <span>
            In mechanics, the fundamental quantities commonly used for
            dimensions are <strong>mass (M), length (L)</strong> and
            <strong>time (T)</strong>.
          </span>
        </div>

        <div class="n-formula-banner">
          <span class="n-fb-label">Dimensional Formula</span>
          <span class="n-fb-eq">[Q] = MᵃLᵇTᶜ</span>
        </div>

        <div class="n-term-list">

          <div class="n-tl-item">
            <span class="n-tl-key">M</span>
            <span class="n-tl-val">Dimension of mass</span>
          </div>

          <div class="n-tl-item">
            <span class="n-tl-key">L</span>
            <span class="n-tl-val">Dimension of length</span>
          </div>

          <div class="n-tl-item">
            <span class="n-tl-key">T</span>
            <span class="n-tl-val">Dimension of time</span>
          </div>

        </div>
      `
    },

    {
      icon: "📐",
      heading: "Dimensions of Common Physical Quantities",
      content: `
        <table class="n-clean-table">
          <thead>
            <tr>
              <th>Physical Quantity</th>
              <th>Relation</th>
              <th>Dimensional Formula</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Length</td>
              <td>—</td>
              <td>[L]</td>
            </tr>

            <tr>
              <td>Mass</td>
              <td>—</td>
              <td>[M]</td>
            </tr>

            <tr>
              <td>Time</td>
              <td>—</td>
              <td>[T]</td>
            </tr>

            <tr>
              <td>Area</td>
              <td>L × L</td>
              <td>[L²]</td>
            </tr>

            <tr>
              <td>Volume</td>
              <td>L × L × L</td>
              <td>[L³]</td>
            </tr>

            <tr>
              <td>Speed</td>
              <td>Distance / Time</td>
              <td>[LT⁻¹]</td>
            </tr>

            <tr>
              <td>Acceleration</td>
              <td>Speed / Time</td>
              <td>[LT⁻²]</td>
            </tr>

            <tr>
              <td>Density</td>
              <td>Mass / Volume</td>
              <td>[ML⁻³]</td>
            </tr>

            <tr>
              <td>Force</td>
              <td>Mass × Acceleration</td>
              <td>[MLT⁻²]</td>
            </tr>

            <tr>
              <td>Work / Energy</td>
              <td>Force × Distance</td>
              <td>[ML²T⁻²]</td>
            </tr>

            <tr>
              <td>Power</td>
              <td>Work / Time</td>
              <td>[ML²T⁻³]</td>
            </tr>

            <tr>
              <td>Pressure</td>
              <td>Force / Area</td>
              <td>[ML⁻¹T⁻²]</td>
            </tr>
          </tbody>
        </table>
      `
    },



    {
      icon: "🔢",
      heading: "Multiples and Sub-multiples of SI Units",
      content: `
        <p>
          To express very low (or very high) values of physical quantities,
          <strong>prefixes</strong> are used to represent them.
        </p>

        <div class="n-callout n-callout-blue">
          <span class="n-callout-icon">📌</span>
          <span>
            Prefixes are added before SI units to represent their multiples
            and sub-multiples conveniently.
          </span>
        </div>

        <div class="n-section-sub">Examples</div>

        <div class="n-example-row">
          <div class="n-eg-item">
            <strong>10⁻³ m</strong> = 1 mm (1 millimetre)
          </div>

          <div class="n-eg-item">
            <strong>10⁻⁹ s</strong> = 1 ns (1 nanosecond)
          </div>

          <div class="n-eg-item">
            <strong>10⁶ W</strong> = 1 MW (1 megawatt)
          </div>
        </div>

        <div class="n-section-sub">SI Prefixes</div>

        <div class="n-clean-table-wrap">
          <table class="n-clean-table">
            <thead>
              <tr>
                <th>Factor</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Factor</th>
                <th>Name</th>
                <th>Symbol</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>10¹</td>
                <td>deca</td>
                <td>da</td>
                <td>10⁻¹</td>
                <td>deci</td>
                <td>d</td>
              </tr>

              <tr>
                <td>10²</td>
                <td>hecto</td>
                <td>h</td>
                <td>10⁻²</td>
                <td>centi</td>
                <td>c</td>
              </tr>

              <tr>
                <td>10³</td>
                <td>kilo</td>
                <td>k</td>
                <td>10⁻³</td>
                <td>milli</td>
                <td>m</td>
              </tr>

              <tr>
                <td>10⁶</td>
                <td>mega</td>
                <td>M</td>
                <td>10⁻⁶</td>
                <td>micro</td>
                <td>μ</td>
              </tr>

              <tr>
                <td>10⁹</td>
                <td>giga</td>
                <td>G</td>
                <td>10⁻⁹</td>
                <td>nano</td>
                <td>n</td>
              </tr>

              <tr>
                <td>10¹²</td>
                <td>tera</td>
                <td>T</td>
                <td>10⁻¹²</td>
                <td>pico</td>
                <td>p</td>
              </tr>

              <tr>
                <td>10¹⁵</td>
                <td>peta</td>
                <td>P</td>
                <td>10⁻¹⁵</td>
                <td>femto</td>
                <td>f</td>
              </tr>

              <tr>
                <td>10¹⁸</td>
                <td>exa</td>
                <td>E</td>
                <td>10⁻¹⁸</td>
                <td>atto</td>
                <td>a</td>
              </tr>

              <tr>
                <td>10²¹</td>
                <td>zetta</td>
                <td>Z</td>
                <td>10⁻²¹</td>
                <td>zepto</td>
                <td>z</td>
              </tr>

              <tr>
                <td>10²⁴</td>
                <td>yotta</td>
                <td>Y</td>
                <td>10⁻²⁴</td>
                <td>yocto</td>
                <td>y</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="n-callout n-callout-yellow">
          <span class="n-callout-icon">🧠</span>
          <span>
            <strong>Remember:</strong> Positive powers represent multiples
            of SI units, while negative powers represent sub-multiples of SI units.
          </span>
        </div>
      `
    },








    {
      icon: "🧠",
      heading: "Quick Memory Tips",
      content: `
        <div class="n-tip-banner">
          <span class="n-tip-icon">💡</span>
          <span class="n-tip-title">Exam Tips</span>
        </div>

        <div class="n-checklist">

          <div class="n-check-item">
            <span class="n-check-icon">1</span>
            <span>
              <strong>Physical quantity = Numerical value × Unit</strong>
            </span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">2</span>
            <span>
              Numerical value is <strong>inversely proportional</strong>
              to the unit.
            </span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">3</span>
            <span>
              <strong>Fundamental quantities</strong> are independent
              quantities.
            </span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">4</span>
            <span>
              <strong>Derived quantities</strong> are expressed in terms
              of fundamental quantities.
            </span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">5</span>
            <span>
              SI system has <strong>seven base units</strong>.
            </span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">6</span>
            <span>
              <strong>Radian</strong> is the unit of plane angle and
              <strong>steradian</strong> is the unit of solid angle.
            </span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">7</span>
            <span>
              <strong>1 N = 10⁵ dyne</strong>
            </span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">8</span>
            <span>
              <strong>1 J = 10⁷ erg</strong>
            </span>
          </div>

        </div>
      `
    },
	
	
	
	
	    {
      icon: "📏",
      heading: "Measurement of Length",
      content: `
        <p>
          The SI unit of length is <strong>meter (m)</strong>.
        </p>

        <div class="n-section-sub">Meter Definition</div>

        <p class="n-def">
          The standard meter is defined as the length of the path travelled by
          light in a vacuum during a time interval of
          <strong>1/299792458 of a second</strong>.
        </p>

        <div class="n-section-sub">Smaller Units of Length</div>

        <div class="n-two-col">

          <div class="n-term-card">
            <div class="n-term-label">Planck length</div>
            <div class="n-term-desc">
              The fundamental quantum of length equal to
              <strong>10⁻³⁵ m</strong>.
            </div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Fermi (f) / Femtometre</div>
            <div class="n-term-desc">
              <strong>10⁻¹⁵ m</strong>. Used to measure nuclear dimensions.
            </div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Angstrom (Å)</div>
            <div class="n-term-desc">
              <strong>10⁻¹⁰ m</strong> or <strong>10⁻⁸ cm</strong>.
              Used to measure atomic dimensions.
              <br><strong>1 Å = 10⁻¹⁰ m</strong>
            </div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Nanometre (nm)</div>
            <div class="n-term-desc">
              Used to express the size of molecules.
              <br><strong>1 nm = 10⁻⁹ m</strong>
            </div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Micron (μm)</div>
            <div class="n-term-desc">
              Used to express the size of cells, bacteria, etc.
              <br><strong>1 μm = 10⁻⁶ m</strong>
            </div>
          </div>

        </div>

        <div class="n-section-sub">Bigger Units of Length</div>

        <div class="n-two-col">

          <div class="n-highlight-card n-card-blue">
            <div class="n-hcard-title">🌌 Light Year (ly)</div>
            <div class="n-hcard-body">
              The distance travelled by light in vacuum in one year is called
              one light year. It is used to measure intergalactic distance as
              well as stellar distances.
              <br><br>
              <strong>1 ly = 9.46 × 10¹⁵ m</strong>
            </div>
          </div>

          <div class="n-highlight-card n-card-purple">
            <div class="n-hcard-title">🌠 Parallactic Second (Par sec)</div>
            <div class="n-hcard-body">
              3.26 light years is called a par sec.
              <br><br>
              <strong>1 par sec = 3.0857 × 10¹⁶ m</strong>
            </div>
          </div>

          <div class="n-highlight-card n-card-blue">
            <div class="n-hcard-title">☀️ Astronomical Unit (AU)</div>
            <div class="n-hcard-body">
              One astronomical unit is the mean distance between the sun
              and earth.
              <br><br>
              <strong>1 AU = 1.496 × 10¹¹ m</strong>
            </div>
          </div>

        </div>

        <div class="n-callout n-callout-yellow">
          <span class="n-callout-icon">🧠</span>
          <span>
            <strong>Quick Recall:</strong>
            Planck → nuclear → atomic → molecular → cellular dimensions
            correspond to increasingly larger length scales.
          </span>
        </div>
      `
    },


    {
      icon: "⚖️",
      heading: "Measurement of Mass",
      content: `
        <p>
          The SI unit of mass is <strong>kilogram (kg)</strong>.
        </p>

        <div class="n-section-sub">Other Units of Mass</div>

        <div class="n-highlight-card n-card-blue">
          <div class="n-hcard-title">⚛️ Atomic Mass Unit (amu)</div>
          <div class="n-hcard-body">
            It is the practical unit of mass used in atomic and nuclear physics.
            <br><br>
            <strong>1 amu = 1.67 × 10⁻²⁷ kg</strong>
          </div>
        </div>

        <div class="n-section-sub">Commercial Units of Mass</div>

        <div class="n-clean-table-wrap">
          <table class="n-clean-table">
            <thead>
              <tr>
                <th>Unit</th>
                <th>Equivalent Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1 metric ton</td>
                <td>1000 kg</td>
              </tr>

              <tr>
                <td>1 quintal</td>
                <td>100 kg</td>
              </tr>

              <tr>
                <td>1 pound</td>
                <td>0.4537 kg = 453.4 gm</td>
              </tr>

              <tr>
                <td>1 slug</td>
                <td>14.59 kg</td>
              </tr>

              <tr>
                <td>1 microgram</td>
                <td>1 μg = 10⁻⁹ kg</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="n-two-col">

          <div class="n-highlight-card n-card-purple">
            <div class="n-hcard-title">☀️ Astronomical Unit of Mass</div>
            <div class="n-hcard-body">
              Also called <strong>solar mass</strong>.
              <br><br>
              <strong>Mass = 2 × 10³⁰ kg</strong>
            </div>
          </div>

          <div class="n-highlight-card n-card-blue">
            <div class="n-hcard-title">⭐ Chandrasekhar Limit (C.S.L.)</div>
            <div class="n-hcard-body">
              It is the largest practical of mass.
              <br><br>
              <strong>1 C.S.L. = 1.4 times the mass of the sun</strong>
            </div>
          </div>

        </div>

        <div class="n-section-sub">Masses of Some Objects</div>

        <div class="n-clean-table-wrap">
          <table class="n-clean-table">
            <thead>
              <tr>
                <th>Object</th>
                <th>Mass (kg)</th>
              </tr>
            </thead>

            <tbody>
              <tr><td>Electron</td><td>10⁻³⁰</td></tr>
              <tr><td>Proton</td><td>10⁻²⁷</td></tr>
              <tr><td>Uranium atom</td><td>10⁻²⁵</td></tr>
              <tr><td>Red blood cell</td><td>10⁻¹³</td></tr>
              <tr><td>Dust particle</td><td>10⁻⁹</td></tr>
              <tr><td>Rain drop</td><td>10⁻⁶</td></tr>
              <tr><td>Mosquito</td><td>10⁻⁵</td></tr>
              <tr><td>Grape</td><td>10⁻³</td></tr>
              <tr><td>Human</td><td>10²</td></tr>
              <tr><td>Automobile</td><td>10³</td></tr>
              <tr><td>Boeing 747 aircraft</td><td>10⁸</td></tr>
              <tr><td>Moon</td><td>10²³</td></tr>
              <tr><td>Earth</td><td>10²⁵</td></tr>
              <tr><td>Sun</td><td>10³⁰</td></tr>
              <tr><td>Milky Way galaxy</td><td>10⁴¹</td></tr>
              <tr><td>Observable Universe</td><td>10⁵⁵</td></tr>
            </tbody>
          </table>
        </div>
      `
    },


    {
      icon: "⏱️",
      heading: "Measurement of Time",
      content: `
        <p>
          The SI unit of time is <strong>second</strong>.
          It is denoted by <strong>s</strong>.
        </p>

        <div class="n-section-sub">Practical Units of Time</div>

        <div class="n-two-col">

          <div class="n-term-card">
            <div class="n-term-label">Century</div>
            <div class="n-term-desc">
              It is a unit of time and is equal to
              <strong>100 years</strong>.
            </div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Year</div>
            <div class="n-term-desc">
              The time taken by the earth to complete one revolution around
              the sun in its orbit is called year.
              <br><br>
              <strong>1 year = 365.25 solar days</strong>
            </div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Leap Year</div>
            <div class="n-term-desc">
              The year in which the month of February is of
              <strong>29 days</strong>.
            </div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Lunar Month</div>
            <div class="n-term-desc">
              The time taken by the moon to complete one revolution around
              earth is called lunar month.
              <br><br>
              <strong>1 lunar month = 27.3 days</strong>
            </div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Solar Day</div>
            <div class="n-term-desc">
              The time taken by the earth to complete one rotation about its
              axis with respect to sun.
              <br><br>
              <strong>1 solar day = 86,400 s</strong>
            </div>
          </div>

          <div class="n-term-card">
            <div class="n-term-label">Average Solar Day</div>
            <div class="n-term-desc">
              It is time taken by the earth to complete one revolution,
              the average being taken over a year.
              <br><br>
              <strong>1 solar year = 365.25 average solar day</strong>
            </div>
          </div>

        </div>

        <div class="n-callout n-callout-yellow">
          <span class="n-callout-icon">🧠</span>
          <span>
            <strong>Quick Recall:</strong>
            Century = 100 years,
            Year = 365.25 solar days,
            Lunar month = 27.3 days,
            Solar day = 86,400 s.
          </span>
        </div>
      `
    },
	
	
	    {
      icon: "✍️",
      heading: "Rules for Writing SI Units",
      content: `
        <div class="n-checklist">

          <div class="n-check-item">
            <span class="n-check-icon">1️⃣</span>
            <span>
              <strong>Symbol for units should not take plural form.</strong>
              <br><br>
              <strong>Example:</strong> 50 meters is written as
              <strong>50 m</strong> but not <strong>50 ms</strong>.
            </span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">2️⃣</span>
            <span>
              <strong>
                Full stop (or) punctuation mark should not be used at the
                end of symbol of unit.
              </strong>
              <br><br>
              <strong>Examples:</strong>
              <br>
              10 kg but not 10 kg.
              <br>
              10 kg but not 10 kg,
              <br>
              10 m but not 10m.
            </span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">3️⃣</span>
            <span>
              <strong>
                Full names of units even if they are named in the honor of
                scientists should not be written with initial capital.
              </strong>
              <br><br>
              <strong>Examples:</strong>
              <br>
              Unit of length is <strong>metre</strong> but not
              <strong>Metre</strong>.
              <br>
              Unit of force is <strong>newton</strong> but not
              <strong>Newton</strong>.
              <br>
              Unit of Energy is <strong>joule</strong> but not
              <strong>Joule</strong>.
            </span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">4️⃣</span>
            <span>
              <strong>
                The symbols for a unit named after a scientist should have
                a capital letter.
              </strong>
              <br><br>
              <strong>Examples:</strong>
              <br>
              <strong>N</strong> for newton but not <strong>n</strong>.
              <br>
              <strong>A</strong> for ampere but not <strong>a</strong>.
            </span>
          </div>

          <div class="n-check-item">
            <span class="n-check-icon">5️⃣</span>
            <span>
              <strong>
                Symbols of other units must be represented with small letters.
              </strong>
              <br><br>
              <strong>Example:</strong>
              <br>
              <strong>m</strong> for metre.
            </span>
          </div>

        </div>

        <div class="n-callout n-callout-yellow">
          <span class="n-callout-icon">🧠</span>
          <span>
            <strong>Remember:</strong>
            Unit symbols are written without plural forms or full stops.
            Unit names are generally written in lowercase, while symbols of
            units named after scientists begin with a capital letter.
          </span>
        </div>
      `
    },
	
	
	    {
      icon: "🔄",
      heading: "Prefix Conversions",
      content: `
        <p>
          Metric prefix conversions are used to convert a physical quantity
          from one SI prefix to another.
        </p>

        <div class="n-section-sub">Illustrations on Metric Prefix Conversions</div>

        <div class="n-highlight-card n-card-blue">
          <div class="n-hcard-title">
            1. How many centimeters (cm) are in a nanometer (1 nm)?
          </div>

          <div class="n-hcard-body">
            Let x be the unknown value.
            <br><br>

            Let 1 nm = x cm
            <br><br>

            Since,
            <strong>1 nm = 10⁻⁹ m</strong>
            and
            <strong>1 cm = 10⁻² m</strong>
            <br><br>

            x =
            <strong>
              10⁻⁹ m / 10⁻² m
            </strong>
            = 10⁻⁷
            <br><br>

            Therefore,
            <strong>1 nm = 10⁻⁷ cm = 0.0000001 cm</strong>
          </div>
        </div>


        <div class="n-highlight-card n-card-purple">
          <div class="n-hcard-title">
            2. The micrometer (1 μm) often called as a micron
          </div>

          <div class="n-hcard-body">

            <strong>(a) How many microns make up 1.0 km?</strong>

            <br><br>

            Let x be the number of microns.
            <br><br>

            x μm = 1 km
            <br><br>

            x =
            <strong>
              1 km / 1 μm
            </strong>
            =
            <strong>
              10³ m / 10⁻⁶ m
            </strong>
            = 10⁹
            <br><br>

            Therefore,
            <strong>1 km = 10⁹ μm</strong>

            <br><br><hr><br>

            <strong>(b) What fraction of centimeter equals 1 μm?</strong>

            <br><br>

            Let x be the fraction of centimeter.
            <br><br>

            x cm = 1 μm
            <br><br>

            x =
            <strong>
              1 μm / 1 cm
            </strong>
            =
            <strong>
              10⁻⁶ m / 10⁻² m
            </strong>
            = 10⁻⁴
            <br><br>

            Therefore,
            <strong>1 μm = 10⁻⁴ cm</strong>

          </div>
        </div>


        <div class="n-section-sub">Subjective Questions (tap a question to reveal its solution)</div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">1</span>Express one angstrom (1 Å) in terms of fermi (1 fm).<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">1 Å = 10⁻¹⁰ m and 1 fm = 10⁻¹⁵ m.<br><br>
            1 Å = (10⁻¹⁰ / 10⁻¹⁵) fm = 10⁵ fm<br><br>
            <strong>1 Å = 10⁵ fm</strong></div>
        </div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">2</span>How many centimeters (cm) are in 18.2 nm?<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">18.2 nm = 18.2 × 10⁻⁹ m<br><br>
            = (18.2 × 10⁻⁹ / 10⁻²) cm = 18.2 × 10⁻⁷ cm<br><br>
            <strong>18.2 nm = 18.2 × 10⁻⁷ cm</strong></div>
        </div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">3</span>100 km = ? nm<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">100 km = 10⁵ m<br><br>
            = (10⁵ / 10⁻⁹) nm = 10¹⁴ nm<br><br>
            <strong>100 km = 10¹⁴ nm</strong></div>
        </div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">4</span>1 μm = ? nm<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">1 μm = 10⁻⁶ m<br><br>
            = (10⁻⁶ / 10⁻⁹) nm = 10³ nm<br><br>
            <strong>1 μm = 10³ nm</strong></div>
        </div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">5</span>The wavelength of a light is of the order of 6400 Å. Express this in micron and centimeter.<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">6400 Å = 6400 × 10⁻¹⁰ m = 6.4 × 10⁻⁷ m<br><br>
            In micron: (6.4 × 10⁻⁷ / 10⁻⁶) μm = 0.64 μm<br><br>
            In cm: (6.4 × 10⁻⁷ / 10⁻²) cm = 6.4 × 10⁻⁵ cm<br><br>
            <strong>6400 Å = 0.64 μm = 6.4 × 10⁻⁵ cm</strong></div>
        </div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">6</span>How many microns are there in 1 light year?<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">1 light year ≈ 9.46 × 10¹⁵ m<br><br>
            = (9.46 × 10¹⁵ / 10⁻⁶) μm = 9.46 × 10²¹ μm<br><br>
            <strong>1 ly = 9.46 × 10²¹ μm</strong></div>
        </div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">7</span>How many microseconds are there in 10 minutes?<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">10 minutes = 600 s<br><br>
            = 600 × 10⁶ μs = 6 × 10⁸ μs<br><br>
            <strong>10 min = 6 × 10⁸ μs</strong></div>
        </div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">8</span>The wave length of light is 1.05 × 10⁻⁴ m. Express this value in microns.<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">1.05 × 10⁻⁴ m = (1.05 × 10⁻⁴ / 10⁻⁶) μm<br><br>
            = 1.05 × 10² μm<br><br>
            <strong>1.05 × 10⁻⁴ m = 1.05 × 10² μm</strong></div>
        </div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">9</span>If 1 eV = 1.602 × 10⁻¹⁹ J, express this value in multiples of meV, keV, MeV, GeV and TeV.<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">Divide the value 1.602 × 10⁻¹⁹ by each prefix factor (n = N / prefix-factor):<br><br>
            milli (10⁻³): 1.602 × 10⁻¹⁹ / 10⁻³ = 1.602 × 10⁻¹⁶ meV<br>
            kilo (10³): 1.602 × 10⁻¹⁹ / 10³ = 1.602 × 10⁻²² keV<br>
            mega (10⁶): 1.602 × 10⁻¹⁹ / 10⁶ = 1.602 × 10⁻²⁵ MeV<br>
            giga (10⁹): 1.602 × 10⁻¹⁹ / 10⁹ = 1.602 × 10⁻²⁸ GeV<br>
            tera (10¹²): 1.602 × 10⁻¹⁹ / 10¹² = 1.602 × 10⁻³¹ TeV</div>
        </div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">10</span>1 kg = ? μg<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">1 kg = 10³ g<br><br>
            = (10³ / 10⁻⁶) μg = 10⁹ μg<br><br>
            <strong>1 kg = 10⁹ μg</strong></div>
        </div>

        <div class="n-callout n-callout-yellow">
          <span class="n-callout-icon">🧠</span>
          <span>
            <strong>Conversion Tip:</strong>
            Write both units in terms of the same basic SI unit
            (usually metre, gram or second), then compare the powers of 10.
          </span>
        </div>
      `
    },
	
	
	    {
      icon: "🔄",
      heading: "Conversion of Units of Derived Quantities",
      content: `
        <p>
          We convert one system of units into other system using the following
          equation:
        </p>

        <div class="n-formula-banner">
          <span class="n-fb-label">Conversion Equation</span>
          <span class="n-fb-eq">P = n₁u₁ = n₂u₂</span>
        </div>

        <div class="n-callout n-callout-blue">
          <span class="n-callout-icon">📌</span>
          <span>
            A physical quantity remains unchanged when its system of unit
            is changed.
          </span>
        </div>

        <div class="n-section-sub">Solved Examples</div>

        <div class="n-highlight-card n-card-blue">
          <div class="n-hcard-title">
            (a) Convert 20 cm³ into m³
          </div>

          <div class="n-hcard-body">

            <strong>Solution:</strong>

            <br><br>

            CGS unit of volume (V) is <strong>cm³</strong> and SI unit is
            <strong>m³</strong>.

            <br><br>

            <strong>V = 20 cm³ = ? m³</strong>

            <br><br>

            Using,
            <strong>P = n₁u₁ = n₂u₂</strong>

            <br><br>

            Therefore,

            <br><br>

            n₂ =
            <strong>
              (n₁u₁) / u₂
            </strong>

            <br><br>

            =
            <strong>
              (20 cm³) / m³
            </strong>

            <br><br>

            =
            <strong>
              20(10⁻² m)³ / m³
            </strong>

            <br><br>

            =
            <strong>
              20 × 10⁻⁶
            </strong>

            <br><br>

            Therefore,

            <br>

            <strong>
              20 cm³ = 20 × 10⁻⁶ m³
            </strong>

            <br>

            <strong>
              20 cm³ = 2.0 × 10⁻⁵ m³
            </strong>

          </div>
        </div>


        <div class="n-highlight-card n-card-purple">
          <div class="n-hcard-title">
            (b) Convert 50 kgm⁻³ into gcm⁻³
          </div>

          <div class="n-hcard-body">

            <strong>SI unit of density (d) is kgm⁻³ and gcm⁻³.</strong>

            <br><br>

            <strong>d = 50 kgm⁻³ = ? gcm⁻³</strong>

            <br><br>

            Using,
            <strong>P = n₁u₁ = n₂u₂</strong>

            <br><br>

            Therefore,

            <br><br>

            n₂ =
            <strong>
              (n₁u₁) / u₂
            </strong>

            <br><br>

            =
            <strong>
              50 kgm⁻³ / gcm⁻³
            </strong>

            <br><br>

            =
            <strong>
              50 kgm⁻³ /
              [10⁻³ kg × (10⁻² m)⁻³]
            </strong>

            <br><br>

            =
            <strong>
              50 kgm⁻³ /
              [10⁻³ kg × (10⁶ m⁻³)]
            </strong>

            <br><br>

            =
            <strong>
              50 × 10⁻³
            </strong>

            <br><br>

            =
            <strong>
              5.0 × 10⁻² gcm⁻³
            </strong>

          </div>
        </div>


        <div class="n-section-sub">Subjective Questions (tap a question to reveal its proof)</div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">1</span>Prove that 1 gcm⁻³ = 1000 kgm⁻³<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">1 g = 10⁻³ kg and 1 cm = 10⁻² m, so 1 cm³ = 10⁻⁶ m³<br><br>
            1 gcm⁻³ = 10⁻³ kg / 10⁻⁶ m³ = 10³ kgm⁻³<br><br>
            <strong>1 gcm⁻³ = 1000 kgm⁻³</strong></div>
        </div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">2</span>Prove that 1 km/h = 5/18 m/s<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">1 km/h = 1000 m / 3600 s<br><br>
            = 1000/3600 m/s = 5/18 m/s<br><br>
            <strong>1 km/h = 5/18 m/s</strong></div>
        </div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">3</span>Prove that 1 N = 10⁵ dyne<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">1 N = 1 kg·m/s² and 1 dyne = 1 g·cm/s²<br><br>
            1 kg = 10³ g and 1 m = 10² cm<br><br>
            1 N = 10³ g × 10² cm/s² = 10⁵ g·cm/s²<br><br>
            <strong>1 N = 10⁵ dyne</strong></div>
        </div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">4</span>Prove that 1 J = 10⁷ erg<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">1 J = 1 kg·m²/s² and 1 erg = 1 g·cm²/s²<br><br>
            1 kg = 10³ g and 1 m² = 10⁴ cm²<br><br>
            1 J = 10³ g × 10⁴ cm²/s² = 10⁷ g·cm²/s²<br><br>
            <strong>1 J = 10⁷ erg</strong></div>
        </div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">5</span>Prove that 1 m/s² = 100 cm/s²<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">Since 1 m = 100 cm, and time (s²) is unchanged:<br><br>
            1 m/s² = 100 cm/s²<br><br>
            <strong>1 m/s² = 100 cm/s²</strong></div>
        </div>

        <div class="n-qa-card" onclick="toggleNoteQA(this)">
          <div class="n-qa-q"><span class="n-qa-q-num">6</span>Prove that 1 N/m² = 10 dyne/cm²<span class="n-qa-arrow">▼</span></div>
          <div class="n-qa-answer">1 N = 10⁵ dyne and 1 m² = 10⁴ cm²<br><br>
            1 N/m² = 10⁵ dyne / 10⁴ cm² = 10 dyne/cm²<br><br>
            <strong>1 N/m² = 10 dyne/cm²</strong></div>
        </div>

        <div class="n-callout n-callout-yellow">
          <span class="n-callout-icon">🧠</span>
          <span>
            <strong>Remember:</strong>
            For conversion of derived quantities, first express the units
            in terms of fundamental SI units and then use
            <strong>P = n₁u₁ = n₂u₂</strong>.
          </span>
        </div>
      `
    },
	
	

  ]
};