/* Grade 9 IIT Foundation | Calculus: Differentiation
 * Notes based on the supplied textbook photographs (pp. 2–6, 8–9, 11–13).
 * pp. 7 and 10 were not supplied. Worksheet questions and numbered exercises
 * on pp. 14–16 are deliberately EXCLUDED. Illustration 19 is included.
 * Layout API matches the supplied Grade 9 reference: window.chapterNotes.
 * Four self-contained SVG diagrams require no external image files.
 */
window.chapterNotes = {
  title: "Calculus – Differentiation",
  grade: "9",
  icon: "📈",
  sections: [
    {
      icon: "🚗", heading: "Differentiation: What Does It Mean?",
      content: `
      <div class="n-callout n-callout-blue"><span class="n-callout-icon">💡</span><span><strong>Differentiation</strong> is the mathematical process of finding the derivative of a function: its <strong>instantaneous rate of change</strong> with respect to a variable.</span></div>
      <div class="n-two-col">
        <div class="n-highlight-card n-card-blue"><div class="n-hcard-title">🚗 Moving car</div><div class="n-hcard-body">The instantaneous rate of change of displacement with respect to time is <strong>velocity</strong>: v = dx/dt.</div></div>
        <div class="n-highlight-card n-card-purple"><div class="n-hcard-title">🌱 Growing plant</div><div class="n-hcard-body">If plant height is h(t), then dh/dt is its growth rate at a given instant.</div></div>
      </div><div class="n-chips-row"><span class="n-chip">Slope</span><span class="n-chip">Secant</span><span class="n-chip">Tangent</span><span class="n-chip">Derivative</span></div>`
    },
    {
      icon: "📐", heading: "Slope of a Straight Line",
      content: `
      <p class="n-def">The <strong>slope</strong> of a line measures its steepness and direction. Between P(x₁, y₁) and Q(x₂, y₂), slope is vertical change (rise) divided by horizontal change (run).</p>
      <div class="n-formula-grid"><div class="n-formula-card"><div class="n-fc-label">Slope</div><div class="n-fc-eq">m = (y₂ − y₁)/(x₂ − x₁)</div><div class="n-fc-note">Defined when x₂ ≠ x₁</div></div><div class="n-formula-card"><div class="n-fc-label">Slope and angle</div><div class="n-fc-eq">m = tan θ</div><div class="n-fc-note">θ: inclination from positive x-axis</div></div></div>
      <div class="n-img-card"><svg viewBox="0 0 650 305" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line rising from left to right, showing slope as rise divided by run" class="n-img n-img-lg" style="width:100%;max-width:650px;height:auto">
      <defs><marker id="calc-arrow1" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#475569"/></marker></defs>
      <path d="M52 267 H615 M65 283 V20" stroke="#475569" stroke-width="2.5" fill="none" marker-end="url(#calc-arrow1)"/>
      <path d="M72 264 L515 36" stroke="#2563eb" stroke-width="4"/><path d="M175 211 H413 V88 M175 211 V267 M413 88 V267" stroke="#64748b" stroke-dasharray="6 5" stroke-width="1.8" fill="none"/>
      <circle cx="175" cy="211" r="6" fill="#2563eb"/><circle cx="413" cy="88" r="6" fill="#2563eb"/>
      <path d="M390 211 V187 H413" stroke="#dc2626" fill="none" stroke-width="2"/><path d="M74 263A57 57 0 0 1 127 234" fill="none" stroke="#9333ea" stroke-width="2"/>
      <g fill="#172554" font-family="Arial,sans-serif" font-size="16"><text x="134" y="201">P(x₁,y₁)</text><text x="426" y="84">Q(x₂,y₂)</text><text x="242" y="235" fill="#0f766e">Run = x₂ − x₁</text><text x="422" y="157" fill="#be123c">Rise = y₂ − y₁</text><text x="126" y="255" fill="#7e22ce">θ</text><text x="601" y="290">x</text><text x="49" y="23">y</text></g>
      </svg><div class="n-img-caption">Fig. 1: Slope of a line = rise ÷ run.</div></div>
      <div class="n-two-col"><div class="n-term-card"><div class="n-term-label">Positive slope</div><div class="n-term-desc">0° &lt; θ &lt; 90°: line rises to the right.</div></div><div class="n-term-card"><div class="n-term-label">Negative slope</div><div class="n-term-desc">90° &lt; θ &lt; 180°: line falls to the right.</div></div><div class="n-term-card"><div class="n-term-label">Zero slope</div><div class="n-term-desc">Horizontal line: m = 0.</div></div><div class="n-term-card"><div class="n-term-label">Undefined slope</div><div class="n-term-desc">Vertical line: change in x is zero.</div></div></div>`
    },
    {
      icon: "〰️", heading: "Secant, Tangent and the Geometrical Meaning",
      content: `
      <div class="n-two-col"><div class="n-highlight-card n-card-blue"><div class="n-hcard-title">Secant or chord</div><div class="n-hcard-body">A line joining two distinct points on a curve. Its slope gives the <strong>average rate of change</strong>.</div></div><div class="n-highlight-card n-card-purple"><div class="n-hcard-title">Tangent</div><div class="n-hcard-body">The limiting position of the secant when its second point approaches the first. Its slope gives the <strong>instantaneous rate of change</strong>.</div></div></div>
      <div class="n-img-card"><svg viewBox="0 0 650 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Secant PQ approaches the tangent at P as Q approaches P" class="n-img n-img-lg" style="width:100%;max-width:650px;height:auto">
      <defs><marker id="calc-arrow2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#475569"/></marker></defs>
      <path d="M50 277 H612 M60 295 V18" stroke="#475569" stroke-width="2.5" fill="none" marker-end="url(#calc-arrow2)"/>
      <path d="M75 248 C165 245 237 218 302 177 S429 67 530 29" fill="none" stroke="#2563eb" stroke-width="4"/>
      <path d="M95 308 L525 22" fill="none" stroke="#e8791a" stroke-width="3"/><path d="M95 271L560 78" fill="none" stroke="#059669" stroke-width="2.5" stroke-dasharray="7 5"/>
      <circle cx="215" cy="226" r="6" fill="#1d4ed8"/><circle cx="403" cy="105" r="6" fill="#ea580c"/>
      <path d="M215 226V277M403 105V277M215 226H403M403 105V226" stroke="#64748b" stroke-dasharray="5 4" fill="none"/>
      <g font-family="Arial,sans-serif" font-size="16" fill="#0f172a"><text x="195" y="213">P</text><text x="416" y="99">Q</text><text x="510" y="42" fill="#c2410c">Secant</text><text x="511" y="102" fill="#047857">Tangent</text><text x="286" y="246">Δx</text><text x="412" y="181">Δy</text><text x="600" y="299">x</text><text x="41" y="22">y</text></g>
      </svg><div class="n-img-caption">Fig. 2: The slope of a secant approaches the tangent slope as Q approaches P.</div></div>
      <p class="n-def">For a curve y = f(x), take P(x, y) and Q(x + Δx, y + Δy). The secant slope is Δy/Δx. If the limit exists as Δx approaches 0, it is the derivative at P.</p>
      <div class="n-formula-grid"><div class="n-formula-card"><div class="n-fc-label">Average rate</div><div class="n-fc-eq">m<sub>sec</sub> = Δy/Δx</div></div><div class="n-formula-card"><div class="n-fc-label">Instantaneous rate</div><div class="n-fc-eq">m<sub>tan</sub> = lim<sub>Δx→0</sub> Δy/Δx</div></div></div>
      <div class="n-formula-banner"><span class="n-fb-label">First principle of differentiation</span><span class="n-fb-eq">f′(x) = lim<sub>h→0</sub> [f(x+h) − f(x)]/h</span></div>
      <div class="n-callout n-callout-yellow"><span class="n-callout-icon">⚠️</span><span>Take the limit as h approaches zero. Substituting h = 0 directly in the fraction would give division by zero.</span></div>`
    },
    {
      icon: "🔣", heading: "Derivative / Differential Coefficient",
      content: `
      <p class="n-def">If <strong>y = f(x)</strong>, the differential coefficient of y with respect to x is written as <strong>dy/dx</strong> or <strong>f′(x)</strong>.</p>
      <div class="n-formula-grid"><div class="n-formula-card"><div class="n-fc-label">First derivative</div><div class="n-fc-eq">dy/dx = df(x)/dx = f′(x)</div><div class="n-fc-note">Rate of change of y with respect to x.</div></div><div class="n-formula-card"><div class="n-fc-label">Differential operator</div><div class="n-fc-eq">d/dx</div><div class="n-fc-note">Instruction to differentiate with respect to x.</div></div></div>
      <div class="n-callout n-callout-blue"><span class="n-callout-icon">🧠</span><span><strong>dy/dx</strong> represents a derivative defined through a limit; it should not be treated as simply dividing two ordinary finite differences.</span></div>`
    },
    {
      icon: "🔢", heading: "Derivatives of Constants and Algebraic Functions",
      content: `
      <div class="n-formula-grid"><div class="n-formula-card"><div class="n-fc-label">Constant function</div><div class="n-fc-eq">d(C)/dx = 0</div></div><div class="n-formula-card"><div class="n-fc-label">Power rule</div><div class="n-fc-eq">d(x<sup>n</sup>)/dx = nx<sup>n−1</sup></div></div><div class="n-formula-card"><div class="n-fc-label">Constant multiple</div><div class="n-fc-eq">d[af(x)]/dx = a f′(x)</div></div><div class="n-formula-card"><div class="n-fc-label">Addition/subtraction</div><div class="n-fc-eq">(u ± v)′ = u′ ± v′</div></div></div>
      <table class="n-clean-table"><thead><tr><th>Function</th><th>Derivative</th></tr></thead><tbody><tr><td>C (constant)</td><td>0</td></tr><tr><td>x</td><td>1</td></tr><tr><td>x<sup>2</sup></td><td>2x</td></tr><tr><td>x<sup>3</sup></td><td>3x<sup>2</sup></td></tr><tr><td>ax<sup>n</sup></td><td>anx<sup>n−1</sup></td></tr><tr><td>1/x = x<sup>−1</sup></td><td>−1/x<sup>2</sup></td></tr><tr><td>√x = x<sup>1/2</sup></td><td>1/(2√x)</td></tr></tbody></table>
      <div class="n-callout n-callout-yellow"><span class="n-callout-icon">💡</span><span>Convert roots and reciprocals into fractional or negative powers before applying the power rule.</span></div>`
    },
    {
      icon: "✍️", heading: "Worked Examples: Basic Differentiation (Illustrations 1–3)",
      content: `
      <div class="n-section-sub">Illustration 1 — Power rule</div>
      <div class="n-two-col"><div class="n-term-card"><div class="n-term-label">y = x<sup>4</sup></div><div class="n-term-desc">dy/dx = <strong>4x<sup>3</sup></strong></div></div><div class="n-term-card"><div class="n-term-label">y = x<sup>−2</sup></div><div class="n-term-desc">dy/dx = −2x<sup>−3</sup> = <strong>−2/x<sup>3</sup></strong></div></div><div class="n-term-card"><div class="n-term-label">y = 5x<sup>7</sup></div><div class="n-term-desc">dy/dx = <strong>35x<sup>6</sup></strong></div></div></div>
      <div class="n-section-sub">Illustration 2 — Roots, fractions and constants</div>
      <div class="n-two-col"><div class="n-term-card"><div class="n-term-label">y = 3√x</div><div class="n-term-desc">dy/dx = <strong>3/(2√x)</strong></div></div><div class="n-term-card"><div class="n-term-label">y = 4/x<sup>2</sup></div><div class="n-term-desc">dy/dx = <strong>−8/x<sup>3</sup></strong></div></div><div class="n-term-card"><div class="n-term-label">y = 6x<sup>0</sup> = 6</div><div class="n-term-desc">dy/dx = <strong>0</strong></div></div></div>
      <div class="n-section-sub">Illustration 3 — Differentiate term by term</div>
      <div class="n-rule-card"><div class="n-rule-badge">1</div><div class="n-rule-text">y = (2/3)x<sup>4</sup> − 4/x<sup>3</sup> + 9<br>dy/dx = (8/3)x<sup>3</sup> + 12/x<sup>4</sup></div></div>
      <div class="n-rule-card"><div class="n-rule-badge">2</div><div class="n-rule-text">y = (3x<sup>3</sup> − 5x)/(2x) = (3/2)x<sup>2</sup> − 5/2<br>dy/dx = <strong>3x</strong>, for x ≠ 0.</div></div>`
    },
    {
      icon: "📊", heading: "Trigonometric Derivatives",
      content: `
      <p class="n-def">The standard trigonometric derivative formulas assume angles are measured in <strong>radians</strong>. Differentiate the inner expression as well whenever the argument is ax + α.</p>
      <table class="n-clean-table"><thead><tr><th>Function y</th><th>dy/dx</th></tr></thead><tbody><tr><td>sin x</td><td>cos x</td></tr><tr><td>cos x</td><td>−sin x</td></tr><tr><td>tan x</td><td>sec<sup>2</sup>x</td></tr><tr><td>sec x</td><td>sec x tan x</td></tr><tr><td>cot x</td><td>−cosec<sup>2</sup>x</td></tr><tr><td>cosec x</td><td>−cosec x cot x</td></tr></tbody></table>
      <div class="n-section-sub">For an argument ax + α</div>
      <table class="n-clean-table"><thead><tr><th>Function</th><th>Derivative</th></tr></thead><tbody><tr><td>sin(ax + α)</td><td>a cos(ax + α)</td></tr><tr><td>cos(ax + α)</td><td>−a sin(ax + α)</td></tr><tr><td>tan(ax + α)</td><td>a sec<sup>2</sup>(ax + α)</td></tr><tr><td>sec(ax + α)</td><td>a sec(ax + α) tan(ax + α)</td></tr><tr><td>cot(ax + α)</td><td>−a cosec<sup>2</sup>(ax + α)</td></tr><tr><td>cosec(ax + α)</td><td>−a cosec(ax + α) cot(ax + α)</td></tr></tbody></table>
      <div class="n-callout n-callout-green"><span class="n-callout-icon">🧠</span><span>Sin becomes +cos; cos becomes −sin. Derivatives of cot and cosec also carry minus signs.</span></div>`
    },
    {
      icon: "📈", heading: "Exponential and Logarithmic Derivatives",
      content: `
      <div class="n-formula-grid"><div class="n-formula-card"><div class="n-fc-label">Exponential</div><div class="n-fc-eq">d(e<sup>ax</sup>)/dx = ae<sup>ax</sup></div></div><div class="n-formula-card"><div class="n-fc-label">Natural logarithm</div><div class="n-fc-eq">d(ln x)/dx = 1/x</div></div><div class="n-formula-card"><div class="n-fc-label">Logarithm of ax</div><div class="n-fc-eq">d[ln(ax)]/dx = 1/x</div></div><div class="n-formula-card"><div class="n-fc-label">General exponential</div><div class="n-fc-eq">d(a<sup>x</sup>)/dx = a<sup>x</sup> ln a</div></div></div>
      <div class="n-section-sub">Illustration 7</div><div class="n-two-col"><div class="n-term-card"><div class="n-term-label">y = 3e<sup>2x</sup></div><div class="n-term-desc">dy/dx = <strong>6e<sup>2x</sup></strong></div></div><div class="n-term-card"><div class="n-term-label">f(t) = 4/(3e<sup>5t</sup>)</div><div class="n-term-desc">df/dt = <strong>−20/(3e<sup>5t</sup>)</strong></div></div></div>`
    },
    {
      icon: "✖️", heading: "Product Rule (Illustrations 8–9)",
      content: `
      <p class="n-def">Use the product rule when a function is formed by multiplying two functions of the same variable.</p>
      <div class="n-formula-banner"><span class="n-fb-label">Product rule</span><span class="n-fb-eq">If y = uv, then dy/dx = v (du/dx) + u (dv/dx)</span></div>
      <div class="n-law-box"><div class="n-law-title">Illustration 8: y = x<sup>2</sup>sin x</div><div class="n-law-item"><span class="n-law-num">1</span><span>u = x<sup>2</sup>, v = sin x.</span></div><div class="n-law-item"><span class="n-law-num">2</span><span>u′ = 2x, v′ = cos x.</span></div><div class="n-law-item"><span class="n-law-num">3</span><span><strong>dy/dx = 2x sin x + x<sup>2</sup>cos x.</strong></span></div></div>
      <div class="n-rule-card"><div class="n-rule-badge">Illustration 9</div><div class="n-rule-text">y = 3√x ln(2x).<br>dy/dx = [3/(2√x)] ln(2x) + 3√x/x<br><strong>dy/dx = (3/√x)[½ ln(2x) + 1].</strong></div></div>`
    },
    {
      icon: "➗", heading: "Quotient Rule (Illustration 10)",
      content: `
      <p class="n-def">When one differentiable function is divided by another non-zero differentiable function, apply the quotient rule.</p>
      <div class="n-formula-banner"><span class="n-fb-label">Quotient rule</span><span class="n-fb-eq">If y = u/v, then dy/dx = (v·u′ − u·v′)/v<sup>2</sup></span></div>
      <div class="n-law-box"><div class="n-law-title">Illustration 10: y = sin x/x</div><div class="n-law-item"><span class="n-law-num">1</span><span>u = sin x and v = x.</span></div><div class="n-law-item"><span class="n-law-num">2</span><span>u′ = cos x and v′ = 1.</span></div><div class="n-law-item"><span class="n-law-num">3</span><span><strong>dy/dx = (x cos x − sin x)/x<sup>2</sup></strong>, x ≠ 0.</span></div></div>`
    },
    {
      icon: "🔗", heading: "Chain Rule (Illustration 11)",
      content: `
      <p class="n-def">Use the chain rule for a <strong>function within a function</strong> (composite function).</p>
      <div class="n-formula-grid"><div class="n-formula-card"><div class="n-fc-label">Composite function</div><div class="n-fc-eq">[f(g(x))]′ = f′(g(x))·g′(x)</div></div><div class="n-formula-card"><div class="n-fc-label">Intermediate variable</div><div class="n-fc-eq">dy/dx = (dy/dt)(dt/dx)</div></div></div>
      <div class="n-law-box"><div class="n-law-title">Illustration 11: y = sin(x<sup>2</sup>)</div><div class="n-law-item"><span class="n-law-num">1</span><span>Let t = x<sup>2</sup>. Then dt/dx = 2x.</span></div><div class="n-law-item"><span class="n-law-num">2</span><span>y = sin t. Then dy/dt = cos t.</span></div><div class="n-law-item"><span class="n-law-num">3</span><span>dy/dx = (cos t)2x = <strong>2x cos(x<sup>2</sup>)</strong>.</span></div></div>
      <div class="n-callout n-callout-yellow"><span class="n-callout-icon">💡</span><span>Differentiate the outside function, keeping the inside unchanged, then multiply by the derivative of the inside.</span></div>`
    },
    {
      icon: "🏎️", heading: "Applications of Derivatives in Physics",
      content: `
      <p class="n-def">A derivative measures how fast a dependent quantity changes with respect to another quantity.</p>
      <table class="n-clean-table"><thead><tr><th>Changing quantity</th><th>With respect to</th><th>Rate / physical meaning</th></tr></thead><tbody><tr><td>Displacement x</td><td>Time t</td><td>Velocity v = dx/dt</td></tr><tr><td>Velocity v</td><td>Time t</td><td>Acceleration a = dv/dt</td></tr><tr><td>Momentum p</td><td>Time t</td><td>Net force F = dp/dt</td></tr><tr><td>Electric charge q</td><td>Time t</td><td>Current I = dq/dt</td></tr><tr><td>Pressure P</td><td>Height h</td><td>Pressure gradient dP/dh</td></tr><tr><td>Temperature θ</td><td>Time t</td><td>dθ/dt</td></tr></tbody></table>
      <div class="n-callout n-callout-green"><span class="n-callout-icon">🎯</span><span>Displacement → <strong>first derivative</strong> → velocity → <strong>second derivative</strong> → acceleration.</span></div>`
    },
    {
      icon: "🌳", heading: "Average vs Instantaneous Rate (Illustration 15)",
      content: `
      <p class="n-def">A hypothetical tree’s height is h(t) = 3t<sup>2</sup> + 5t + 2 metres. Compare its growth rate at t = 3 s with the average growth rate from 0 to 3 s.</p>
      <div class="n-two-col"><div class="n-highlight-card n-card-blue"><div class="n-hcard-title">Instantaneous</div><div class="n-hcard-body">dh/dt = 6t + 5.<br>At t = 3 s: <strong>23 m/s</strong>.</div></div><div class="n-highlight-card n-card-purple"><div class="n-hcard-title">Average</div><div class="n-hcard-body">h(3) = 44 m and h(0) = 2 m.<br>Δh/Δt = (44 − 2)/3 = <strong>14 m/s</strong>.</div></div></div>
      <div class="n-callout n-callout-blue"><span class="n-callout-icon">📌</span><span>Instantaneous rate is the tangent slope; average rate is the secant slope over an interval. Since height changes with time, both rates have units of m/s.</span></div>`
    },
    {
      icon: "🚀", heading: "Worked Physics Applications (Illustrations 16–17)",
      content: `
      <div class="n-section-sub">Illustration 16 — Initial velocity and acceleration</div>
      <div class="n-law-box"><div class="n-law-title">Given position x(t) = 3t<sup>2</sup> + 4t − 1</div><div class="n-law-item"><span class="n-law-num">1</span><span>Velocity: v = dx/dt = 6t + 4.</span></div><div class="n-law-item"><span class="n-law-num">2</span><span>At t = 0, initial velocity = <strong>4 m/s</strong>.</span></div><div class="n-law-item"><span class="n-law-num">3</span><span>Acceleration: a = dv/dt = <strong>6 m/s²</strong>.</span></div></div>
      <div class="n-callout n-callout-yellow"><span class="n-callout-icon">⚠️</span><span>The photographed textbook prints initial velocity 10 m/s, which conflicts with its given expression and derivative. Substituting t = 0 into v = 6t + 4 gives 4 m/s.</span></div>
      <div class="n-section-sub">Illustration 17 — Area of a circle</div><div class="n-rule-card"><div class="n-rule-badge">Area</div><div class="n-rule-text">A = πr<sup>2</sup>.<br>dA/dr = 2πr.<br>At r = 10 m: <strong>dA/dr = 20π m</strong>.</div></div>
      <div class="n-callout n-callout-blue"><span class="n-callout-icon">📏</span><span>The units of dA/dr are m²/m = m. A rate with respect to time would instead have units m²/s.</span></div>`
    },
    {
      icon: "📍", heading: "Slope of a Curve at a Point (Illustration 18)",
      content: `
      <p class="n-def">The derivative at a point is the slope or gradient of the tangent to the curve there.</p>
      <div class="n-formula-banner"><span class="n-fb-label">At x = a</span><span class="n-fb-eq">Slope = [dy/dx]<sub>x=a</sub></span></div>
      <div class="n-law-box"><div class="n-law-title">y = x<sup>2</sup> + 2x + 4</div><div class="n-law-item"><span class="n-law-num">1</span><span>dy/dx = 2x + 2.</span></div><div class="n-law-item"><span class="n-law-num">2</span><span>At x = 0: slope = <strong>2</strong>.</span></div><div class="n-law-item"><span class="n-law-num">3</span><span>At x = −1: slope = <strong>0</strong>; tangent is horizontal.</span></div></div>`
    },
    {
      icon: "🔁", heading: "First Derivative and Second Derivative",
      content: `
      <div class="n-two-col"><div class="n-highlight-card n-card-blue"><div class="n-hcard-title">First derivative</div><div class="n-hcard-body"><strong>dy/dx</strong> = rate of change of y with respect to x = <strong>slope</strong> of the curve.</div></div><div class="n-highlight-card n-card-purple"><div class="n-hcard-title">Second derivative</div><div class="n-hcard-body"><strong>d²y/dx²</strong> = derivative of the slope = <strong>rate of change of slope</strong>.</div></div></div>
      <div class="n-img-card"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 170" role="img" aria-label="Differentiate function to find first derivative, then again to find second derivative" class="n-img n-img-lg" style="width:100%;max-width:660px;height:auto">
      <defs><marker id="calc-arrow3" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#64748b"/></marker></defs><rect x="15" y="35" width="170" height="94" rx="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.7"/><rect x="244" y="35" width="170" height="94" rx="14" fill="#ede9fe" stroke="#8b5cf6" stroke-width="1.7"/><rect x="473" y="35" width="170" height="94" rx="14" fill="#dcfce7" stroke="#22c55e" stroke-width="1.7"/><path d="M189 82H235M418 82H464" stroke="#64748b" stroke-width="2.4" marker-end="url(#calc-arrow3)"/>
      <g text-anchor="middle" font-family="Arial,sans-serif" fill="#0f172a"><text x="100" y="74" font-size="21" font-weight="bold">y = f(x)</text><text x="100" y="105" font-size="15">Function</text><text x="329" y="74" font-size="21" font-weight="bold">dy/dx</text><text x="329" y="105" font-size="15">First derivative</text><text x="558" y="74" font-size="21" font-weight="bold">d²y/dx²</text><text x="558" y="105" font-size="15">Second derivative</text><text x="212" y="65" font-size="13">d/dx</text><text x="441" y="65" font-size="13">d/dx</text></g></svg><div class="n-img-caption">Fig. 3: Double differentiation—differentiate the derivative again.</div></div>
      <div class="n-formula-banner"><span class="n-fb-label">Relation</span><span class="n-fb-eq">d²y/dx² = d/dx (dy/dx)</span></div>`
    },
    {
      icon: "🏔️", heading: "Concept of Maxima and Minima",
      content: `
      <p class="n-def">A <strong>local maximum</strong> is a peak compared with nearby points. A <strong>local minimum</strong> is a valley compared with nearby points. In the smooth turning-point examples in the textbook, the tangent at each peak or valley is horizontal.</p>
      <div class="n-img-card"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 690 330" role="img" aria-label="Curve with local maximum A and local minimum B, horizontal tangents at each" class="n-img n-img-lg" style="width:100%;max-width:690px;height:auto">
      <defs><marker id="calc-arrow4" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#64748b"/></marker></defs>
      <path d="M52 258 H640 M63 292 V18" fill="none" stroke="#64748b" stroke-width="2.4" marker-end="url(#calc-arrow4)"/>
      <path d="M79 210 C150 158 155 75 240 75 S357 231 450 235 S561 151 610 83" fill="none" stroke="#2563eb" stroke-width="4.3"/>
      <path d="M157 75 H323 M373 235 H528" stroke="#e8791a" stroke-width="2.6" stroke-dasharray="7 5"/>
      <circle cx="240" cy="75" r="7" fill="#be123c"/><circle cx="450" cy="235" r="7" fill="#059669"/>
      <path d="M240 75 V258 M450 235 V258" stroke="#94a3b8" stroke-dasharray="5 5" stroke-width="1.5"/>
      <g font-family="Arial,sans-serif" font-size="18" fill="#0f172a"><text x="155" y="43" fill="#be123c">A · Maximum</text><text x="438" y="286" fill="#047857">B · Minimum</text><text x="250" y="103" font-size="15">y′ = 0</text><text x="449" y="214" font-size="15">y′ = 0</text><text x="624" y="281">x</text><text x="45" y="20">y</text></g>
      </svg><div class="n-img-caption">Fig. 4: At A and B the first derivative is zero. At A the curve is concave down; at B it is concave up.</div></div>
      <div class="n-two-col"><div class="n-highlight-card n-card-blue"><div class="n-hcard-title">🔴 Local maximum</div><div class="n-hcard-body">At a smooth stationary point, <strong>dy/dx = 0</strong> and <strong>d²y/dx² &lt; 0</strong> confirms a local maximum.</div></div><div class="n-highlight-card n-card-purple"><div class="n-hcard-title">🟢 Local minimum</div><div class="n-hcard-body">At a smooth stationary point, <strong>dy/dx = 0</strong> and <strong>d²y/dx² &gt; 0</strong> confirms a local minimum.</div></div></div>
      <div class="n-callout n-callout-yellow"><span class="n-callout-icon">⚠️</span><span>When <strong>d²y/dx² = 0</strong>, the second-derivative test is <strong>inconclusive</strong>, not proof that neither a maximum nor a minimum exists. For example, y = x⁴ has a minimum at x = 0 even though its second derivative there is zero.</span></div>`
    },
    {
      icon: "🪜", heading: "How to Check Maxima and Minima: Three Steps",
      content: `
      <div class="n-law-box"><div class="n-law-title">Second-derivative test for smooth stationary points</div><div class="n-law-item"><span class="n-law-num">1</span><span><strong>Differentiate:</strong> Find dy/dx and set it equal to zero.</span></div><div class="n-law-item"><span class="n-law-num">2</span><span><strong>Locate:</strong> Solve dy/dx = 0 for possible stationary points x = a.</span></div><div class="n-law-item"><span class="n-law-num">3</span><span><strong>Classify:</strong> Find d²y/dx² and evaluate it at each stationary point.</span></div></div>
      <table class="n-clean-table"><thead><tr><th>At x = a, where y′(a) = 0</th><th>Conclusion</th></tr></thead><tbody><tr><td>y″(a) &lt; 0</td><td>Local maximum</td></tr><tr><td>y″(a) &gt; 0</td><td>Local minimum</td></tr><tr><td>y″(a) = 0</td><td>Test inconclusive: inspect sign of y′ or use a higher-order test</td></tr></tbody></table>
      <div class="n-callout n-callout-blue"><span class="n-callout-icon">📌</span><span>The printed page’s rule “if second derivative is zero, neither maxima nor minima” is incomplete. A zero second derivative requires further examination.</span></div>`
    },
    {
      icon: "✅", heading: "Illustration 19: Find the Minimum Value",
      content: `
      <div class="n-formula-banner"><span class="n-fb-label">Given</span><span class="n-fb-eq">y = x<sup>2</sup> − 4x + 8</span></div>
      <div class="n-law-box"><div class="n-law-title">Find the minimum, step by step</div><div class="n-law-item"><span class="n-law-num">1</span><span>First derivative: <strong>dy/dx = 2x − 4</strong>.</span></div><div class="n-law-item"><span class="n-law-num">2</span><span>Set dy/dx = 0: 2x − 4 = 0; hence <strong>x = 2</strong>.</span></div><div class="n-law-item"><span class="n-law-num">3</span><span>Second derivative: <strong>d²y/dx² = 2 &gt; 0</strong>; therefore x = 2 is a minimum.</span></div><div class="n-law-item"><span class="n-law-num">4</span><span>Substitute x = 2: y = 2² − 4(2) + 8 = <strong>4</strong>.</span></div></div>
      <div class="n-two-col"><div class="n-highlight-card n-card-blue"><div class="n-hcard-title">Stationary point</div><div class="n-hcard-body"><strong>x = 2</strong></div></div><div class="n-highlight-card n-card-purple"><div class="n-hcard-title">Minimum value</div><div class="n-hcard-body"><strong>y<sub>min</sub> = 4</strong></div></div></div>
      <div class="n-callout n-callout-green"><span class="n-callout-icon">🔎</span><span>Cross-check by completing the square: y = (x − 2)<sup>2</sup> + 4. Because the squared term is never negative, the global minimum is 4 at x = 2.</span></div>`
    },
    {
      icon: "🧠", heading: "Formula Recap for Quick Revision",
      content: `
      <table class="n-clean-table"><thead><tr><th>Concept</th><th>Formula</th></tr></thead><tbody><tr><td>Slope between two points</td><td>(y₂ − y₁)/(x₂ − x₁)</td></tr><tr><td>First-principle derivative</td><td>f′(x) = lim<sub>h→0</sub> [f(x+h) − f(x)]/h</td></tr><tr><td>Power rule</td><td>d(x<sup>n</sup>)/dx = nx<sup>n−1</sup></td></tr><tr><td>Constant</td><td>d(C)/dx = 0</td></tr><tr><td>Product</td><td>(uv)′ = u′v + uv′</td></tr><tr><td>Quotient</td><td>(u/v)′ = (vu′ − uv′)/v<sup>2</sup></td></tr><tr><td>Chain</td><td>[f(g(x))]′ = f′(g(x))g′(x)</td></tr><tr><td>Exponential</td><td>(e<sup>ax</sup>)′ = ae<sup>ax</sup></td></tr><tr><td>Natural logarithm</td><td>(ln x)′ = 1/x</td></tr><tr><td>Physics</td><td>v = dx/dt; a = dv/dt; F = dp/dt</td></tr><tr><td>First derivative</td><td>dy/dx = slope at a point</td></tr><tr><td>Second derivative</td><td>d²y/dx² = rate of change of slope</td></tr><tr><td>Max / min at stationary point</td><td>y′ = 0; classify with sign of y″</td></tr></tbody></table>
      <div class="n-callout n-callout-yellow"><span class="n-callout-icon">📄</span><span>Based on the supplied textbook photographs: pages 2–6, 8–9 and 11–13. Missing textbook pages 7 and 10 are not reproduced. No numbered exercises or Worksheet/Core Level questions from pages 14–16 are included.</span></div>`
    }
  ]
};
