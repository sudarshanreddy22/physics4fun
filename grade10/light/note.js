/* =====================================================
   Light – Reflection & Refraction | Grade 10 Notes
   ===================================================== */

window.chapterNotes = {
  title: "Light – Reflection and Refraction",
  grade: "10",
  icon: "💡",
  sections: [
    {
      icon: "🌟",
      heading: "Introduction to Light",
      content: `
        <div class="n-callout n-callout-blue">
          <span class="n-callout-icon">⚡</span>
          <span>Light is a form of <strong>electromagnetic energy</strong> that causes a sensation of vision in our eyes. It travels through vacuum at <strong>3 × 10<sup>8</sup> m/s</strong> — the fastest speed in the universe.</span>
        </div>
        <div class="n-chips-row">
          <span class="n-chip">Rectilinear Propagation</span>
          <span class="n-chip">Reflection</span>
          <span class="n-chip">Refraction</span>
          <span class="n-chip">Dispersion</span>
          <span class="n-chip">Scattering</span>
          <span class="n-chip">Interference</span>
          <span class="n-chip">Polarization</span>
          <span class="n-chip">Diffraction</span>
        </div>
      `
    },
    {
      icon: "🪞",
      heading: "Reflection of Light",
      content: `
        <p class="n-def">The <strong>bouncing back</strong> of light into the same medium after striking a surface is called <strong>Reflection of Light</strong>.</p>
        <div class="n-img-card">
          <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun/refs/heads/main/images/notes/10-light/reflection.png" alt="Reflection of Light" class="n-img n-img-md">
          <div class="n-img-caption">Fig 1 — Reflection of Light showing incident ray, normal and reflected ray</div>
        </div>
        <div class="n-two-col">
          <div class="n-term-card">
            <div class="n-term-label">Incident Ray</div>
            <div class="n-term-desc">Ray of light that falls on the reflecting surface</div>
          </div>
          <div class="n-term-card">
            <div class="n-term-label">Reflected Ray</div>
            <div class="n-term-desc">Ray that bounces back from the reflecting surface</div>
          </div>
          <div class="n-term-card">
            <div class="n-term-label">Normal</div>
            <div class="n-term-desc">Imaginary line perpendicular to the surface at the point of incidence</div>
          </div>
          <div class="n-term-card">
            <div class="n-term-label">Angle of Incidence <em>(i)</em></div>
            <div class="n-term-desc">Angle between the incident ray and the normal</div>
          </div>
          <div class="n-term-card">
            <div class="n-term-label">Angle of Reflection <em>(r)</em></div>
            <div class="n-term-desc">Angle between the reflected ray and the normal</div>
          </div>
        </div>
        <div class="n-law-box">
          <div class="n-law-title">📜 Laws of Reflection</div>
          <div class="n-law-item"><span class="n-law-num">I</span><span>The incident ray, the normal, and the reflected ray at the point of incidence all lie in the <strong>same plane</strong>.</span></div>
          <div class="n-law-item"><span class="n-law-num">II</span><span>The <strong>angle of incidence = angle of reflection</strong> &nbsp;( i = r )</span></div>
        </div>
        <div class="n-callout n-callout-yellow">
          <span class="n-callout-icon">⚠️</span>
          <span>For <strong>normal incidence</strong>, both angles are <strong>0°</strong> — not 90°. Laws of Reflection hold for <em>both</em> plane mirrors and spherical mirrors.</span>
        </div>
      `
    },
    {
      icon: "🔁",
      heading: "Real Image vs Virtual Image",
      content: `
        <div class="n-compare-grid">
          <div class="n-compare-header">Aspect</div>
          <div class="n-compare-header n-compare-real">🎯 Real Image</div>
          <div class="n-compare-header n-compare-virtual">👻 Virtual Image</div>

          <div class="n-compare-label">Light Rays</div>
          <div class="n-compare-real-cell">Reflected / refracted rays <strong>actually meet</strong> (actual convergence)</div>
          <div class="n-compare-virtual-cell">Rays <strong>appear to meet</strong> after extension (apparent convergence)</div>

          <div class="n-compare-label">On Screen</div>
          <div class="n-compare-real-cell">✅ <strong>Can</strong> be obtained on a screen</div>
          <div class="n-compare-virtual-cell">❌ <strong>Cannot</strong> be obtained on a screen</div>

          <div class="n-compare-label">Orientation</div>
          <div class="n-compare-real-cell">Always <strong>Inverted</strong></div>
          <div class="n-compare-virtual-cell">Always <strong>Erect</strong> (upright)</div>

          <div class="n-compare-label">Example</div>
          <div class="n-compare-real-cell">Projector, Pinhole Camera</div>
          <div class="n-compare-virtual-cell">Plane Mirror</div>
        </div>
      `
    },
    {
      icon: "🔲",
      heading: "Plane Mirror – Image Characteristics",
      content: `
        <div class="n-checklist">
          <div class="n-check-item"><span class="n-check-icon">📐</span><span>Size of image = Size of object <strong>(same size)</strong></span></div>
          <div class="n-check-item"><span class="n-check-icon">📏</span><span>Distance of object in front of mirror = Distance of image behind mirror</span></div>
          <div class="n-check-item"><span class="n-check-icon">👁️</span><span>Image is <strong>Virtual and Erect</strong></span></div>
          <div class="n-check-item"><span class="n-check-icon">🔄</span><span>Image is <strong>Laterally Inverted</strong> (left–right swapped)</span></div>
        </div>
      `
    },
    {
      icon: "🌐",
      heading: "Spherical Mirrors",
      content: `
        <p class="n-def">A mirror with a <strong>spherical reflecting surface</strong> is called a Spherical Mirror. There are two types:</p>
        <div class="n-two-col">
          <div class="n-highlight-card n-card-blue">
            <div class="n-hcard-title">🪺 Concave Mirror</div>
            <div class="n-hcard-body">Reflecting surface curves <strong>inward</strong> (like the inside of a cave). Converges light rays.</div>
            <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun/refs/heads/main/images/notes/10-light/concave_mirror.png" alt="Concave Mirror" class="n-img n-img-sm" style="margin-top:10px;">
          </div>
          <div class="n-highlight-card n-card-purple">
            <div class="n-hcard-title">🔵 Convex Mirror</div>
            <div class="n-hcard-body">Reflecting surface curves <strong>outward</strong>. Diverges light rays.</div>
            <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun/refs/heads/main/images/notes/10-light/convex_mirror.PNG" alt="Convex Mirror" class="n-img n-img-sm" style="margin-top:10px;">
          </div>
        </div>
        <div class="n-section-sub">Terms related to Spherical Mirrors</div>
        <div class="n-img-card">
          <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light5.jpg" alt="Terms of Spherical Mirror" class="n-img n-img-lg">
          <div class="n-img-caption">Fig 4 — Parts of a Spherical Mirror</div>
        </div>
        <div class="n-term-list">
          <div class="n-tl-item"><span class="n-tl-key">Pole (P)</span><span class="n-tl-val">Geometric centre of the mirror</span></div>
          <div class="n-tl-item"><span class="n-tl-key">Centre of Curvature (C)</span><span class="n-tl-val">Centre of the sphere of which the mirror is a part</span></div>
          <div class="n-tl-item"><span class="n-tl-key">Radius of Curvature (R)</span><span class="n-tl-val">Radius of the sphere of which the mirror is a part</span></div>
          <div class="n-tl-item"><span class="n-tl-key">Principal Axis</span><span class="n-tl-val">Line joining the Pole and the Centre of Curvature</span></div>
          <div class="n-tl-item"><span class="n-tl-key">Focus / Focal Point (F)</span><span class="n-tl-val">Point where parallel rays meet (concave) or appear to diverge from (convex) after reflection</span></div>
          <div class="n-tl-item"><span class="n-tl-key">Focal Length (f)</span><span class="n-tl-val">Distance between Pole and Focus</span></div>
        </div>
        <div class="n-formula-banner">
          <span class="n-fb-label">Key Relation</span>
          <span class="n-fb-eq">R = 2f &nbsp;&nbsp;|&nbsp;&nbsp; f = R / 2</span>
        </div>
      `
    },
    {
      icon: "✏️",
      heading: "Rules for Drawing Ray Diagrams (Mirrors)",
      content: `
        <div class="n-rule-card">
          <div class="n-rule-badge">Rule 1</div>
          <div class="n-rule-text">A ray <strong>parallel to the principal axis</strong> → passes through <strong>F</strong> after reflection (concave) or appears to diverge from <strong>F</strong> (convex).</div>
          <div class="n-img-card" style="margin-top:10px;">
            <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light6.jpg" alt="Rule 1" class="n-img n-img-lg">
            <div class="n-img-caption">Fig 5 & 6 — Rule 1 for Concave and Convex mirrors</div>
          </div>
        </div>
        <div class="n-rule-card">
          <div class="n-rule-badge">Rule 2</div>
          <div class="n-rule-text">A ray passing through <strong>F</strong> (concave) or directed towards <strong>F</strong> (convex) → emerges <strong>parallel to the principal axis</strong> after reflection.</div>
          <div class="n-img-card" style="margin-top:10px;">
            <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light7.jpg" alt="Rule 2" class="n-img n-img-lg">
            <div class="n-img-caption">Fig 7 — Rule 2</div>
          </div>
        </div>
        <div class="n-rule-card">
          <div class="n-rule-badge">Rule 3</div>
          <div class="n-rule-text">A ray passing through <strong>C</strong> (concave) or directed towards <strong>C</strong> (convex) → reflected back <strong>along the same path</strong>.</div>
          <div class="n-img-card" style="margin-top:10px;">
            <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light8.jpg" alt="Rule 3" class="n-img n-img-lg">
            <div class="n-img-caption">Fig 8 — Rule 3</div>
          </div>
        </div>
        <div class="n-rule-card">
          <div class="n-rule-badge">Rule 4</div>
          <div class="n-rule-text">A ray incident <strong>obliquely at the pole</strong> → follows laws of reflection (makes equal angles with the principal axis).</div>
          <div class="n-img-card" style="margin-top:10px;">
            <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light9.jpg" alt="Rule 4" class="n-img n-img-lg">
            <div class="n-img-caption">Fig 9 — Rule 4</div>
          </div>
        </div>
      `
    },
    {
      icon: "🔵",
      heading: "Image Formation by Concave Mirror",
      content: `
        <div class="n-callout n-callout-blue">
          <span class="n-callout-icon">📌</span>
          <span>Concave mirror produces <strong>5 Real-Inverted cases</strong> and <strong>1 Virtual-Erect case</strong>.</span>
        </div>
        <div class="n-case-grid">
          <div class="n-case-card n-case-real">
            <div class="n-case-num">Case 1</div>
            <div class="n-case-obj">Object at <strong>Infinity</strong></div>
            <div class="n-case-img-pos">At <strong>F</strong></div>
            <div class="n-case-size">Highly Diminished (Point)</div>
            <div class="n-case-nature real">Real · Inverted</div>
            <div class="n-img-card" style="margin-top:8px;">
              <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light10.jpg" alt="Case 1" class="n-img n-img-case">
            </div>
          </div>
          <div class="n-case-card n-case-real">
            <div class="n-case-num">Case 2</div>
            <div class="n-case-obj">Object <strong>Beyond C</strong></div>
            <div class="n-case-img-pos">Between <strong>C & F</strong></div>
            <div class="n-case-size">Diminished</div>
            <div class="n-case-nature real">Real · Inverted</div>
            <div class="n-img-card" style="margin-top:8px;">
              <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light11.jpg" alt="Case 2" class="n-img n-img-case">
            </div>
          </div>
          <div class="n-case-card n-case-real">
            <div class="n-case-num">Case 3</div>
            <div class="n-case-obj">Object <strong>At C</strong></div>
            <div class="n-case-img-pos">At <strong>C</strong></div>
            <div class="n-case-size">Same Size</div>
            <div class="n-case-nature real">Real · Inverted</div>
            <div class="n-img-card" style="margin-top:8px;">
              <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light12.jpg" alt="Case 3" class="n-img n-img-case">
            </div>
          </div>
          <div class="n-case-card n-case-real">
            <div class="n-case-num">Case 4</div>
            <div class="n-case-obj">Between <strong>C & F</strong></div>
            <div class="n-case-img-pos">Beyond <strong>C</strong></div>
            <div class="n-case-size">Magnified</div>
            <div class="n-case-nature real">Real · Inverted</div>
            <div class="n-img-card" style="margin-top:8px;">
              <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light13.jpg" alt="Case 4" class="n-img n-img-case">
            </div>
          </div>
          <div class="n-case-card n-case-real">
            <div class="n-case-num">Case 5</div>
            <div class="n-case-obj">Object <strong>At F</strong></div>
            <div class="n-case-img-pos">At <strong>Infinity</strong></div>
            <div class="n-case-size">Highly Magnified</div>
            <div class="n-case-nature real">Real · Inverted</div>
            <div class="n-img-card" style="margin-top:8px;">
              <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light14.jpg" alt="Case 5" class="n-img n-img-case">
            </div>
          </div>
          <div class="n-case-card n-case-virtual">
            <div class="n-case-num">Case 6</div>
            <div class="n-case-obj">Between <strong>F & P</strong></div>
            <div class="n-case-img-pos"><strong>Behind</strong> the mirror</div>
            <div class="n-case-size">Magnified</div>
            <div class="n-case-nature virtual">Virtual · Erect</div>
            <div class="n-img-card" style="margin-top:8px;">
              <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light15.jpg" alt="Case 6" class="n-img n-img-case">
            </div>
          </div>
        </div>
      `
    },
    {
      icon: "🔴",
      heading: "Image Formation by Convex Mirror",
      content: `
        <div class="n-callout n-callout-purple">
          <span class="n-callout-icon">📌</span>
          <span>Convex mirror <strong>always</strong> forms a <strong>Virtual, Erect, Diminished</strong> image — for all positions of the object.</span>
        </div>
        <div class="n-case-grid">
          <div class="n-case-card n-case-virtual">
            <div class="n-case-num">Case 1</div>
            <div class="n-case-obj">Object at <strong>Infinity</strong></div>
            <div class="n-case-img-pos">At <strong>F</strong> (behind mirror)</div>
            <div class="n-case-size">Highly Diminished (Point)</div>
            <div class="n-case-nature virtual">Virtual · Erect</div>
            <div class="n-img-card" style="margin-top:8px;">
              <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light16.jpg" alt="Convex Case 1" class="n-img n-img-case">
            </div>
          </div>
          <div class="n-case-card n-case-virtual">
            <div class="n-case-num">Case 2</div>
            <div class="n-case-obj">Between <strong>P & Infinity</strong></div>
            <div class="n-case-img-pos">Between <strong>P & F</strong> (behind mirror)</div>
            <div class="n-case-size">Diminished</div>
            <div class="n-case-nature virtual">Virtual · Erect</div>
            <div class="n-img-card" style="margin-top:8px;">
              <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light17.jpg" alt="Convex Case 2" class="n-img n-img-case">
            </div>
          </div>
        </div>
        <div class="n-callout n-callout-green" style="margin-top:10px;">
          <span class="n-callout-icon">🚗</span>
          <span><strong>Why convex mirrors are used as rear-view mirrors:</strong> They give a wider field of view and always form an upright, diminished image — helping drivers see more of the road behind them.</span>
        </div>
      `
    },
    {
      icon: "🛠️",
      heading: "Applications of Mirrors",
      content: `
        <div class="n-two-col">
          <div class="n-app-card n-app-concave">
            <div class="n-app-title">🪺 Concave Mirror</div>
            <ul class="n-app-list">
              <li>🔦 Torches & searchlights — to produce parallel beam</li>
              <li>🦷 Dentist's mirror — examine teeth cavities</li>
              <li>🪒 Shaving / makeup mirror — magnified view</li>
              <li>☀️ Solar furnaces — concentrate sunlight</li>
            </ul>
          </div>
          <div class="n-app-card n-app-convex">
            <div class="n-app-title">🔵 Convex Mirror</div>
            <ul class="n-app-list">
              <li>🚗 Rear-view mirror — wider field of view</li>
              <li>🏪 Security mirrors in shops</li>
              <li>💡 Street light reflectors</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      icon: "📐",
      heading: "Sign Convention (New Cartesian)",
      content: `
        <div class="n-img-card">
          <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light18.jpg" alt="Sign Convention" class="n-img n-img-lg">
          <div class="n-img-caption">Fig 18 — New Cartesian Sign Convention for mirrors</div>
        </div>
        <div class="n-sign-grid">
          <div class="n-sign-item n-sign-neg"><span class="n-sign-sym">−</span><span>Object always placed to the <strong>left</strong></span></div>
          <div class="n-sign-item n-sign-pos"><span class="n-sign-sym">+</span><span>Distances to the <strong>right</strong> of Pole</span></div>
          <div class="n-sign-item n-sign-neg"><span class="n-sign-sym">−</span><span>Distances to the <strong>left</strong> of Pole</span></div>
          <div class="n-sign-item n-sign-pos"><span class="n-sign-sym">+</span><span>Distances <strong>above</strong> principal axis</span></div>
          <div class="n-sign-item n-sign-neg"><span class="n-sign-sym">−</span><span>Distances <strong>below</strong> principal axis</span></div>
        </div>
      `
    },
    {
      icon: "🧮",
      heading: "Mirror Formula & Magnification",
      content: `
        <div class="n-formula-grid">
          <div class="n-formula-card">
            <div class="n-fc-label">Mirror Formula</div>
            <div class="n-fc-eq">1/f = 1/u + 1/v</div>
            <div class="n-fc-note">f = focal length &nbsp;|&nbsp; u = object distance &nbsp;|&nbsp; v = image distance</div>
          </div>
          <div class="n-formula-card">
            <div class="n-fc-label">Magnification</div>
            <div class="n-fc-eq">m = h<sub>i</sub> / h<sub>o</sub> = −v / u</div>
            <div class="n-fc-note">h<sub>i</sub> = image height &nbsp;|&nbsp; h<sub>o</sub> = object height</div>
          </div>
        </div>
        <div class="n-mag-table">
          <div class="n-mt-row n-mt-head"><span>Value of m</span><span>Nature of Image</span></div>
          <div class="n-mt-row"><span>m &gt; 0 (positive)</span><span>Virtual, Erect</span></div>
          <div class="n-mt-row"><span>m &lt; 0 (negative)</span><span>Real, Inverted</span></div>
          <div class="n-mt-row"><span>|m| &gt; 1</span><span>Magnified</span></div>
          <div class="n-mt-row"><span>|m| = 1</span><span>Same Size</span></div>
          <div class="n-mt-row"><span>|m| &lt; 1</span><span>Diminished</span></div>
        </div>
      `
    },
    {
      icon: "⚡",
      heading: "Quick Memory Tips – Mirrors",
      content: `
        <div class="n-tip-banner">
          <span class="n-tip-icon">💡</span>
          <span class="n-tip-title">Exam Tip</span>
        </div>
        <table class="n-clean-table">
          <thead>
            <tr><th>Image Type</th><th>Mirror(s) that form it</th></tr>
          </thead>
          <tbody>
            <tr><td>Virtual · Erect · <strong>Same Size</strong></td><td>🔲 Plane Mirror <em>only</em></td></tr>
            <tr><td>Virtual · Erect · <strong>Magnified</strong></td><td>🪺 Concave Mirror <em>only</em></td></tr>
            <tr><td>Virtual · Erect · <strong>Diminished</strong></td><td>🔵 Convex Mirror <em>only</em></td></tr>
            <tr><td>Both Real-Inverted <em>and</em> Virtual-Erect</td><td>🪺 Concave Mirror <em>only</em></td></tr>
            <tr><td>Only Virtual-Erect (always)</td><td>🔲 Plane + 🔵 Convex</td></tr>
            <tr><td>Laws of Reflection apply to</td><td>🔲 Plane + 🌐 Spherical mirrors</td></tr>
          </tbody>
        </table>
      `
    },
    {
      icon: "🌊",
      heading: "Refraction of Light",
      content: `
        <p class="n-def">The <strong>bending of light</strong> when it passes from one transparent medium to another due to a change in speed is called <strong>Refraction</strong>.</p>
        <div class="n-callout n-callout-green">
          <span class="n-callout-icon">📝</span>
          <span>Light does <strong>not bend</strong> if it is incident <strong>normally</strong> (perpendicular to the surface, i.e., at 0°).</span>
        </div>
        <div class="n-section-sub">Daily Life Examples</div>
        <div class="n-example-row">
          <div class="n-eg-item">🪙 Coin at bottom of water appears raised</div>
          <div class="n-eg-item">🍋 Lemon in water appears bigger</div>
          <div class="n-eg-item">🔤 Letters appear raised through glass slab</div>
          <div class="n-eg-item">✏️ Pencil in water appears bent</div>
        </div>
        <div class="n-section-sub">Rarer vs Denser Medium</div>
        <div class="n-compare-grid n-compare-2col">
          <div class="n-compare-header n-compare-real">Optically Rarer</div>
          <div class="n-compare-header n-compare-virtual">Optically Denser</div>
          <div class="n-compare-real-cell">Light travels <strong>faster</strong></div>
          <div class="n-compare-virtual-cell">Light travels <strong>slower</strong></div>
          <div class="n-compare-real-cell">Lower refractive index</div>
          <div class="n-compare-virtual-cell">Higher refractive index</div>
          <div class="n-compare-real-cell">e.g., Air, Vacuum</div>
          <div class="n-compare-virtual-cell">e.g., Glass, Water</div>
        </div>
        <div class="n-callout n-callout-blue" style="margin-top:12px;">
          <span class="n-callout-icon">↗️</span>
          <span>Rarer → Denser: light bends <strong>towards</strong> the normal &nbsp;|&nbsp; Denser → Rarer: bends <strong>away</strong> from normal</span>
        </div>
        <div class="n-two-col" style="margin-top:12px;">
          <div class="n-term-card">
            <div class="n-term-label">Angle of Incidence (i)</div>
            <div class="n-term-desc">Angle between incident ray and normal at the interface</div>
          </div>
          <div class="n-term-card">
            <div class="n-term-label">Angle of Refraction (r)</div>
            <div class="n-term-desc">Angle between refracted ray and normal at the interface</div>
          </div>
          <div class="n-term-card">
            <div class="n-term-label">Angle of Deviation</div>
            <div class="n-term-desc">Angle between the original path of incident ray and the refracted ray</div>
          </div>
        </div>
      `
    },
    {
      icon: "🔢",
      heading: "Refractive Index",
      content: `
        <div class="n-callout n-callout-blue">
          <span class="n-callout-icon">ℹ️</span>
          <span>Refractive Index is a <strong>dimensionless quantity</strong> (no units). It depends on the <em>nature of the medium</em> and the <em>wavelength of light</em>. Higher n → slower light.</span>
        </div>
        <div class="n-formula-grid">
          <div class="n-formula-card">
            <div class="n-fc-label">Absolute Refractive Index</div>
            <div class="n-fc-eq">n = c / v</div>
            <div class="n-fc-note">c = speed in vacuum &nbsp;|&nbsp; v = speed in medium</div>
          </div>
          <div class="n-formula-card">
            <div class="n-fc-label">Relative Refractive Index</div>
            <div class="n-fc-eq">n<sub>21</sub> = n<sub>2</sub> / n<sub>1</sub> = v<sub>1</sub> / v<sub>2</sub></div>
            <div class="n-fc-note">Speed of light in medium 1 ÷ speed in medium 2</div>
          </div>
        </div>
        <div class="n-callout n-callout-yellow">
          <span class="n-callout-icon">🔁</span>
          <span>If n(glass w.r.t water) = 9/8, then n(water w.r.t glass) = <strong>8/9</strong> &nbsp;— they are reciprocals of each other.</span>
        </div>
      `
    },
    {
      icon: "📜",
      heading: "Laws of Refraction (Snell's Law)",
      content: `
        <div class="n-law-box">
          <div class="n-law-title">📜 Laws of Refraction</div>
          <div class="n-law-item"><span class="n-law-num">I</span><span>The incident ray, the refracted ray, and the normal to the interface at the point of incidence all lie in the <strong>same plane</strong>.</span></div>
          <div class="n-law-item"><span class="n-law-num">II</span><span><strong>Snell's Law:</strong> The ratio of sin of angle of incidence to sin of angle of refraction is a constant for a given pair of media.</span></div>
        </div>
        <div class="n-formula-banner">
          <span class="n-fb-label">Snell's Law</span>
          <span class="n-fb-eq">sin i / sin r = n<sub>21</sub> = constant</span>
        </div>
      `
    },
    {
      icon: "🟦",
      heading: "Refraction through a Glass Slab",
      content: `
        <div class="n-img-card">
          <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light19.jpg" alt="Glass Slab" class="n-img n-img-md">
          <div class="n-img-caption">Fig 19 — Refraction through a rectangular glass slab showing lateral shift</div>
        </div>
        <div class="n-term-list">
          <div class="n-tl-item"><span class="n-tl-key">Lateral Shift</span><span class="n-tl-val">Perpendicular distance between the direction of the incident ray and the emergent ray</span></div>
          <div class="n-tl-item"><span class="n-tl-key">Vertical Shift</span><span class="n-tl-val">The emergent ray is parallel to the incident ray but displaced laterally</span></div>
          <div class="n-tl-item"><span class="n-tl-key">Angle of Deviation</span><span class="n-tl-val"><strong>0°</strong> — the incident and emergent rays are always parallel</span></div>
        </div>
        <div class="n-formula-banner">
          <span class="n-fb-label">Key Fact</span>
          <span class="n-fb-eq">Incident ray ∥ Emergent ray &nbsp;|&nbsp; Deviation = 0°</span>
        </div>
      `
    },
    {
      icon: "🔭",
      heading: "Lenses",
      content: `
        <p class="n-def">A <strong>lens</strong> is a transparent material bounded by two spherical surfaces (or one spherical + one plane).</p>
        <div class="n-img-card">
          <img src="https://raw.githubusercontent.com/sudarshanreddy22/physics4fun-images/refs/heads/main/light20.jpg" alt="Types of Lenses" class="n-img n-img-xl">
          <div class="n-img-caption">Fig 20 — Different types of lenses</div>
        </div>
        <div class="n-two-col" style="margin-top:12px;">
          <div class="n-highlight-card n-card-blue">
            <div class="n-hcard-title">🔎 Convex Lens</div>
            <div class="n-hcard-body">Thicker at centre. <strong>Converges</strong> light. Positive focal length. Also called <em>converging lens</em>.</div>
          </div>
          <div class="n-highlight-card n-card-purple">
            <div class="n-hcard-title">🔍 Concave Lens</div>
            <div class="n-hcard-body">Thinner at centre. <strong>Diverges</strong> light. Negative focal length. Also called <em>diverging lens</em>.</div>
          </div>
        </div>
        <div class="n-section-sub">Terms related to Lenses</div>
        <div class="n-term-list">
          <div class="n-tl-item"><span class="n-tl-key">Optic Centre (O)</span><span class="n-tl-val">Central point of the lens; rays passing through it go undeviated</span></div>
          <div class="n-tl-item"><span class="n-tl-key">Focus (F)</span><span class="n-tl-val">Point where parallel rays converge (convex) or appear to diverge from (concave) after refraction</span></div>
          <div class="n-tl-item"><span class="n-tl-key">Focal Length (f)</span><span class="n-tl-val">Distance from Optic Centre to Focus</span></div>
          <div class="n-tl-item"><span class="n-tl-key">Focal Plane</span><span class="n-tl-val">Plane perpendicular to the principal axis passing through the focus</span></div>
          <div class="n-tl-item"><span class="n-tl-key">Aperture</span><span class="n-tl-val">Effective diameter of the lens's light-transmitting area</span></div>
        </div>
        <div class="n-section-sub">Rules for Drawing Ray Diagrams (Lenses)</div>
        <div class="n-rule-card">
          <div class="n-rule-badge">Rule 1</div>
          <div class="n-rule-text">Ray parallel to principal axis → passes through F (convex) or appears to diverge from F (concave) after refraction.</div>
        </div>
        <div class="n-rule-card">
          <div class="n-rule-badge">Rule 2</div>
          <div class="n-rule-text">Ray passing through F (convex) or directed towards F (concave) → emerges parallel to the principal axis after refraction.</div>
        </div>
        <div class="n-rule-card">
          <div class="n-rule-badge">Rule 3</div>
          <div class="n-rule-text">Ray passing through the Optic Centre → travels <strong>undeviated</strong> (no bending).</div>
        </div>
      `
    },
    {
      icon: "🧪",
      heading: "Lens Formula, Magnification & Power",
      content: `
        <div class="n-formula-grid">
          <div class="n-formula-card">
            <div class="n-fc-label">Lens Formula</div>
            <div class="n-fc-eq">1/f = 1/v − 1/u</div>
            <div class="n-fc-note">f = focal length &nbsp;|&nbsp; u = object distance &nbsp;|&nbsp; v = image distance</div>
          </div>
          <div class="n-formula-card">
            <div class="n-fc-label">Magnification</div>
            <div class="n-fc-eq">m = h<sub>i</sub> / h<sub>o</sub> = v / u</div>
            <div class="n-fc-note">Note: for lenses m = v/u (no negative sign, unlike mirrors)</div>
          </div>
          <div class="n-formula-card">
            <div class="n-fc-label">Power of a Lens</div>
            <div class="n-fc-eq">P = 1 / f &nbsp;&nbsp; (f in metres)</div>
            <div class="n-fc-note">Unit: <strong>Dioptre (D)</strong></div>
          </div>
          <div class="n-formula-card">
            <div class="n-fc-label">Combination of Lenses</div>
            <div class="n-fc-eq">P = P<sub>1</sub> + P<sub>2</sub> + P<sub>3</sub> + ...</div>
            <div class="n-fc-note">Powers simply add up when lenses are in contact</div>
          </div>
        </div>
        <div class="n-mag-table">
          <div class="n-mt-row n-mt-head"><span>Lens Type</span><span>Focal Length</span><span>Power</span></div>
          <div class="n-mt-row"><span>🔎 Convex (Converging)</span><span>Positive (+f)</span><span>Positive (+P)</span></div>
          <div class="n-mt-row"><span>🔍 Concave (Diverging)</span><span>Negative (−f)</span><span>Negative (−P)</span></div>
        </div>
      `
    }
  ]
};
