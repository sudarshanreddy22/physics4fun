/* Physics4Fun — CBSE Grade 9 | How Forces Affect Motion
   Questions 1–16 from the supplied textbook pages: Revise, Reflect, Refine.
   Like the preceding Motion chapter, these textbook exercises are kept
   separate from descriptiveData, not auto-categorised into 2-/3-mark sets.
   Marks shown below are suggested UI values, NOT textbook-assigned marks.
   Self-contained: diagrams use embedded SVG data URLs. Individual editable
   SVG files are also provided in the companion images/ch02/ directory.
*/

window.descriptiveData = []; // No separate descriptive questions supplied.

// Keep the drawings self-contained so this JS works without external assets.
window.forceMotionDiagrams = {
  "fig_6_36_blocks": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 300" role="img" aria-label="Two blocks P and Q; opposite forces of 5 N and 4 N act on P while Q moves at constant velocity">
<defs>
 <marker id="arrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#196bd0"/></marker>
 <marker id="redarrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#e45557"/></marker>
 <pattern id="graphgrid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="#dbe8f6" stroke-width="1"/></pattern>
 <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#d0f4ff"/><stop offset="1" stop-color="#83d3f4"/></linearGradient>
</defs>
<style>text{font-family:Inter,'Segoe UI',Arial,sans-serif;fill:#213650}.heading{font-size:23px;font-weight:750}.caption{font-size:16px}.axis{font-size:16px;font-weight:650}.small{font-size:14px}.panel{fill:#f8fbff;stroke:#c4d9f1;stroke-width:2}</style>

<rect x="10" y="14" width="800" height="270" rx="16" fill="#f7fbff" stroke="#c9daef"/>
<text x="400" y="48" text-anchor="middle" class="heading">Net force on blocks P and Q</text>
<path d="M35 223H785" stroke="#647e9b" stroke-width="4"/>
<rect x="250" y="118" width="145" height="103" rx="8" fill="#d4e8ff" stroke="#3c78ca" stroke-width="3"/><text x="322" y="181" text-anchor="middle" font-size="34" font-weight="800">P</text>
<path d="M100 153H239" stroke="#196bd0" stroke-width="5" marker-end="url(#arrow)"/><text x="170" y="136" text-anchor="middle" font-size="21" font-weight="750" fill="#196bd0">5 N</text>
<path d="M548 172H408" stroke="#e45557" stroke-width="5" marker-end="url(#redarrow)"/><text x="483" y="154" text-anchor="middle" font-size="21" font-weight="750" fill="#e45557">4 N</text>
<text x="324" y="258" text-anchor="middle" class="caption">(a) Block P</text>
<rect x="625" y="118" width="125" height="103" rx="8" fill="#d7f4e8" stroke="#29a97a" stroke-width="3"/><text x="687" y="181" text-anchor="middle" font-size="34" font-weight="800">Q</text>
<text x="690" y="258" text-anchor="middle" class="caption">(b) Block Q</text>
</svg>`,
  "fig_6_37_position_time": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 330" role="img" aria-label="Four position time plots A rising line B flat line C upward curved line D falling line">
<defs>
 <marker id="arrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#196bd0"/></marker>
 <marker id="redarrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#e45557"/></marker>
 <pattern id="graphgrid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="#dbe8f6" stroke-width="1"/></pattern>
 <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#d0f4ff"/><stop offset="1" stop-color="#83d3f4"/></linearGradient>
</defs>
<style>text{font-family:Inter,'Segoe UI',Arial,sans-serif;fill:#213650}.heading{font-size:23px;font-weight:750}.caption{font-size:16px}.axis{font-size:16px;font-weight:650}.small{font-size:14px}.panel{fill:#f8fbff;stroke:#c4d9f1;stroke-width:2}</style>

<rect x="4" y="4" width="972" height="322" rx="16" fill="#f7fbff" stroke="#c9daef"/>
<text x="490" y="35" text-anchor="middle" class="heading">Position–time graphs</text>
<g transform="translate(30 65)"><rect class="panel" width="220" height="240" rx="10"/><path d="M44 176V29M44 176H198" stroke="#385b82" stroke-width="2.5" marker-end="url(#arrow)"/><path d="M44 176V29" stroke="#385b82" stroke-width="2.5" marker-end="url(#arrow)"/><text x="30" y="87" transform="rotate(-90 30 87)" class="small">Position</text><text x="114" y="201" class="small">Time</text><path d="M47 171L179 48" stroke="#1786db" stroke-width="4" stroke-linecap="round"/><text x="110" y="230" text-anchor="middle" class="heading">A</text></g>
<g transform="translate(270 65)"><rect class="panel" width="220" height="240" rx="10"/><path d="M44 176V29M44 176H198" stroke="#385b82" stroke-width="2.5" marker-end="url(#arrow)"/><path d="M44 176V29" stroke="#385b82" stroke-width="2.5" marker-end="url(#arrow)"/><text x="30" y="87" transform="rotate(-90 30 87)" class="small">Position</text><text x="114" y="201" class="small">Time</text><path d="M48 94H188" stroke="#159d82" stroke-width="4" stroke-linecap="round"/><text x="110" y="230" text-anchor="middle" class="heading">B</text></g>
<g transform="translate(510 65)"><rect class="panel" width="220" height="240" rx="10"/><path d="M44 176V29M44 176H198" stroke="#385b82" stroke-width="2.5" marker-end="url(#arrow)"/><path d="M44 176V29" stroke="#385b82" stroke-width="2.5" marker-end="url(#arrow)"/><text x="30" y="87" transform="rotate(-90 30 87)" class="small">Position</text><text x="114" y="201" class="small">Time</text><path d="M48 170Q127 160 173 42" stroke="#8d65d4" stroke-width="4" fill="none" stroke-linecap="round"/><text x="110" y="230" text-anchor="middle" class="heading">C</text></g>
<g transform="translate(750 65)"><rect class="panel" width="200" height="240" rx="10"/><path d="M44 176V29M44 176H181" stroke="#385b82" stroke-width="2.5" marker-end="url(#arrow)"/><path d="M44 176V29" stroke="#385b82" stroke-width="2.5" marker-end="url(#arrow)"/><text x="30" y="87" transform="rotate(-90 30 87)" class="small">Position</text><text x="105" y="201" class="small">Time</text><path d="M48 46L162 167" stroke="#dd704e" stroke-width="4" stroke-linecap="round"/><text x="100" y="230" text-anchor="middle" class="heading">D</text></g>
</svg>`,
  "fig_6_38_sailor_boat": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 310" role="img" aria-label="Sailor jumps left toward shore and boat recoils right">
<defs>
 <marker id="arrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#196bd0"/></marker>
 <marker id="redarrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#e45557"/></marker>
 <pattern id="graphgrid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="#dbe8f6" stroke-width="1"/></pattern>
 <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#d0f4ff"/><stop offset="1" stop-color="#83d3f4"/></linearGradient>
</defs>
<style>text{font-family:Inter,'Segoe UI',Arial,sans-serif;fill:#213650}.heading{font-size:23px;font-weight:750}.caption{font-size:16px}.axis{font-size:16px;font-weight:650}.small{font-size:14px}.panel{fill:#f8fbff;stroke:#c4d9f1;stroke-width:2}</style>

<rect x="4" y="4" width="812" height="302" rx="16" fill="#f8fbff" stroke="#c9daef"/>
<text x="412" y="35" text-anchor="middle" class="heading">Sailor jumps from a boat</text>
<path d="M0 212Q44 202 87 214T174 214T260 212T350 214T450 214T540 214T630 214T730 214T820 214V298H0Z" fill="url(#sea)"/>
<path d="M0 163H171V215H0Z" fill="#bb7a61" stroke="#8d4e40" stroke-width="3"/>
<path d="M0 188H171M52 163V188M105 188V215" stroke="#e1b5a5" stroke-width="3"/>
<text x="84" y="151" text-anchor="middle" class="caption">Shore</text>
<path d="M340 197Q520 239 686 197L656 234Q519 270 373 236Z" fill="#dca66d" stroke="#965b38" stroke-width="4"/>
<path d="M460 175L448 118L415 100" fill="none" stroke="#2a5376" stroke-width="12" stroke-linecap="round"/>
<circle cx="420" cy="77" r="18" fill="#e5ad8f" stroke="#a8785c" stroke-width="2"/>
<path d="M417 101L377 149L349 177M445 118L475 156L512 168" stroke="#2a5376" stroke-width="13" stroke-linecap="round"/>
<path d="M394 116L352 91L321 106" stroke="#e5ad8f" stroke-width="11" fill="none" stroke-linecap="round"/>
<path d="M384 56H225" stroke="#e45557" stroke-width="4" marker-end="url(#redarrow)"/><text x="288" y="83" text-anchor="middle" font-weight="750" font-size="17" fill="#d6464c">Jump toward shore</text>
<path d="M486 283H689" stroke="#196bd0" stroke-width="4" marker-end="url(#arrow)"/><text x="592" y="277" text-anchor="middle" font-weight="750" font-size="18" fill="#196bd0">Boat recoils</text>
</svg>`,
  "fig_6_39_landing_mat": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 320" role="img" aria-label="Athlete falling onto a compressible landing mat which increases stopping time">
<defs>
 <marker id="arrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#196bd0"/></marker>
 <marker id="redarrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#e45557"/></marker>
 <pattern id="graphgrid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="#dbe8f6" stroke-width="1"/></pattern>
 <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#d0f4ff"/><stop offset="1" stop-color="#83d3f4"/></linearGradient>
</defs>
<style>text{font-family:Inter,'Segoe UI',Arial,sans-serif;fill:#213650}.heading{font-size:23px;font-weight:750}.caption{font-size:16px}.axis{font-size:16px;font-weight:650}.small{font-size:14px}.panel{fill:#f8fbff;stroke:#c4d9f1;stroke-width:2}</style>

<rect x="4" y="4" width="812" height="312" rx="16" fill="#f7fbff" stroke="#c9daef"/>
<text x="410" y="39" text-anchor="middle" class="heading">Soft landing increases stopping time</text>
<path d="M58 273H763" stroke="#68829c" stroke-width="4"/>
<rect x="186" y="230" width="460" height="42" rx="18" fill="#89cfe9" stroke="#2485ac" stroke-width="3"/>
<path d="M218 244Q247 258 279 245T341 245T404 245T467 245T529 245T591 245" fill="none" stroke="#c6f0fa" stroke-width="5"/>
<circle cx="387" cy="74" r="20" fill="#e7b291" stroke="#ac7e67" stroke-width="2"/>
<path d="M388 97L397 148L370 184M395 148L449 188M390 119L349 143M394 121L437 132" stroke="#355b83" stroke-width="15" stroke-linecap="round" fill="none"/>
<path d="M511 89V200" stroke="#196bd0" stroke-width="5" marker-end="url(#arrow)"/>
<text x="532" y="142" class="caption">Downward motion</text>
<text x="418" y="302" text-anchor="middle" font-size="18" font-weight="750">Landing mat / sand bed</text>
</svg>`,
  "fig_6_40_acceleration_mass": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 490" role="img" aria-label="Acceleration in metres per second squared versus mass in kilograms, data follows a=10/m">
<defs>
 <marker id="arrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#196bd0"/></marker>
 <marker id="redarrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#e45557"/></marker>
 <pattern id="graphgrid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="#dbe8f6" stroke-width="1"/></pattern>
 <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#d0f4ff"/><stop offset="1" stop-color="#83d3f4"/></linearGradient>
</defs>
<style>text{font-family:Inter,'Segoe UI',Arial,sans-serif;fill:#213650}.heading{font-size:23px;font-weight:750}.caption{font-size:16px}.axis{font-size:16px;font-weight:650}.small{font-size:14px}.panel{fill:#f8fbff;stroke:#c4d9f1;stroke-width:2}</style>

<rect x="4" y="4" width="752" height="482" rx="16" fill="#f8fbff" stroke="#c9daef"/>
<text x="380" y="42" text-anchor="middle" class="heading">Acceleration–mass graph (Fig. 6.40)</text>
<rect x="130" y="81" width="510" height="332" fill="url(#graphgrid)" stroke="#c5dcf2"/>
<path d="M130 412H671M130 412V70" stroke="#304f70" stroke-width="3" marker-end="url(#arrow)"/>
<g font-size="17" text-anchor="middle"><text x="130" y="438">0</text><text x="232" y="438">1</text><text x="334" y="438">2</text><text x="436" y="438">3</text><text x="538" y="438">4</text><text x="640" y="438">5</text></g>
<g font-size="17" text-anchor="end"><text x="115" y="416">0</text><text x="115" y="347">2.5</text><text x="115" y="281">5.0</text><text x="115" y="215">7.5</text><text x="115" y="149">10.0</text></g>
<path d="M232 148C250 230 284 270 334 280C390 322 494 342 640 359" fill="none" stroke="#177fca" stroke-width="4"/>
<g fill="#177fca"><circle cx="232" cy="148" r="5"/><circle cx="334" cy="280" r="5"/><circle cx="436" cy="324" r="5"/><circle cx="538" cy="346" r="5"/><circle cx="640" cy="359" r="5"/></g>
<path d="M640 359V412M130 359H640" stroke="#476783" stroke-dasharray="8 7" stroke-width="2"/>
<text x="385" y="477" text-anchor="middle" class="axis">Mass (kg)</text>
<text x="35" y="248" text-anchor="middle" transform="rotate(-90 35 248)" class="axis">Acceleration (m/s²)</text>
</svg>`,
  "fig_6_40_force_mass_answer": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 490" role="img" aria-label="Horizontal force mass graph of 10 newtons for masses one to five kilograms">
<defs>
 <marker id="arrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#196bd0"/></marker>
 <marker id="redarrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#e45557"/></marker>
 <pattern id="graphgrid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="#dbe8f6" stroke-width="1"/></pattern>
 <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#d0f4ff"/><stop offset="1" stop-color="#83d3f4"/></linearGradient>
</defs>
<style>text{font-family:Inter,'Segoe UI',Arial,sans-serif;fill:#213650}.heading{font-size:23px;font-weight:750}.caption{font-size:16px}.axis{font-size:16px;font-weight:650}.small{font-size:14px}.panel{fill:#f8fbff;stroke:#c4d9f1;stroke-width:2}</style>

<rect x="4" y="4" width="752" height="482" rx="16" fill="#f8fbff" stroke="#c9daef"/>
<text x="380" y="42" text-anchor="middle" class="heading">Force–mass graph</text>
<rect x="130" y="81" width="510" height="332" fill="url(#graphgrid)" stroke="#c5dcf2"/>
<path d="M130 412H671M130 412V70" stroke="#304f70" stroke-width="3" marker-end="url(#arrow)"/>
<g font-size="17" text-anchor="middle"><text x="130" y="438">0</text><text x="232" y="438">1</text><text x="334" y="438">2</text><text x="436" y="438">3</text><text x="538" y="438">4</text><text x="640" y="438">5</text></g>
<g font-size="17" text-anchor="end"><text x="115" y="416">0</text><text x="115" y="282">5</text><text x="115" y="149">10</text></g>
<path d="M130 146H642" stroke="#188b6b" stroke-width="5" stroke-linecap="round"/>
<path d="M640 146V412" stroke="#476783" stroke-dasharray="8 7" stroke-width="2"/>
<text x="387" y="477" text-anchor="middle" class="axis">Mass (kg)</text>
<text x="35" y="248" text-anchor="middle" transform="rotate(-90 35 248)" class="axis">Force (N)</text><text x="390" y="130" text-anchor="middle" font-size="18" fill="#188b6b" font-weight="750">F = 10 N (constant)</text>
</svg>`,
  "fig_6_41_velocity_time": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 490" role="img" aria-label="Velocity against time straight line from 10 metres per second at 0 seconds to 30 metres per second at 8 seconds">
<defs>
 <marker id="arrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#196bd0"/></marker>
 <marker id="redarrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#e45557"/></marker>
 <pattern id="graphgrid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="#dbe8f6" stroke-width="1"/></pattern>
 <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#d0f4ff"/><stop offset="1" stop-color="#83d3f4"/></linearGradient>
</defs>
<style>text{font-family:Inter,'Segoe UI',Arial,sans-serif;fill:#213650}.heading{font-size:23px;font-weight:750}.caption{font-size:16px}.axis{font-size:16px;font-weight:650}.small{font-size:14px}.panel{fill:#f8fbff;stroke:#c4d9f1;stroke-width:2}</style>

<rect x="4" y="4" width="752" height="482" rx="16" fill="#f8fbff" stroke="#c9daef"/>
<text x="380" y="42" text-anchor="middle" class="heading">Velocity–time graph (Fig. 6.41)</text>
<rect x="130" y="81" width="510" height="332" fill="url(#graphgrid)" stroke="#c5dcf2"/>
<path d="M130 412H671M130 412V70" stroke="#304f70" stroke-width="3" marker-end="url(#arrow)"/>
<g font-size="18" text-anchor="middle"><text x="130" y="438">0</text><text x="385" y="438">4</text><text x="640" y="438">8</text></g>
<g font-size="18" text-anchor="end"><text x="115" y="416">0</text><text x="115" y="312">10</text><text x="115" y="208">20</text><text x="115" y="104">30</text></g>
<path d="M130 308L640 100" stroke="#1587cd" stroke-width="4.5" fill="none"/>
<path d="M385 204V412M130 204H385M640 100V412M130 100H640" stroke="#617993" stroke-dasharray="7 7" stroke-width="2"/>
<circle cx="130" cy="308" r="6" fill="#1587cd"/><circle cx="385" cy="204" r="6" fill="#1587cd"/><circle cx="640" cy="100" r="6" fill="#1587cd"/>
<text x="390" y="477" text-anchor="middle" class="axis">Time (s)</text><text x="34" y="246" text-anchor="middle" transform="rotate(-90 34 246)" class="axis">Velocity (m/s)</text>
</svg>`,
  "fig_6_42_magnet_compass": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 810 320" role="img" aria-label="A bar magnet close to a pivoted magnetic compass needle">
<defs>
 <marker id="arrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#196bd0"/></marker>
 <marker id="redarrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#e45557"/></marker>
 <pattern id="graphgrid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="#dbe8f6" stroke-width="1"/></pattern>
 <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#d0f4ff"/><stop offset="1" stop-color="#83d3f4"/></linearGradient>
</defs>
<style>text{font-family:Inter,'Segoe UI',Arial,sans-serif;fill:#213650}.heading{font-size:23px;font-weight:750}.caption{font-size:16px}.axis{font-size:16px;font-weight:650}.small{font-size:14px}.panel{fill:#f8fbff;stroke:#c4d9f1;stroke-width:2}</style>

<rect x="4" y="4" width="802" height="312" rx="16" fill="#f8fbff" stroke="#c9daef"/>
<text x="404" y="39" text-anchor="middle" class="heading">Bar magnet near a compass</text>
<rect x="57" y="123" width="180" height="66" rx="7" fill="#4b8bd0" stroke="#375875" stroke-width="3"/>
<path d="M147 123H237V189H147Z" fill="#ed6864" stroke="#375875" stroke-width="3"/>
<text x="102" y="167" font-size="30" font-weight="750" fill="#fff">S</text><text x="182" y="167" font-size="30" font-weight="750" fill="#fff">N</text>
<circle cx="546" cy="155" r="104" fill="white" stroke="#7fa7c8" stroke-width="6"/>
<circle cx="546" cy="155" r="86" fill="none" stroke="#d4e4f2" stroke-width="2"/>
<text x="546" y="78" text-anchor="middle" font-size="18" font-weight="750">N</text><text x="546" y="251" text-anchor="middle" font-size="18" font-weight="750">S</text><text x="460" y="161" text-anchor="middle" font-size="18" font-weight="750">W</text><text x="631" y="161" text-anchor="middle" font-size="18" font-weight="750">E</text>
<path d="M477 196L546 154L611 111L564 169Z" fill="#ed6864" stroke="#4e6179" stroke-width="2"/><path d="M477 196L546 154L564 169L524 183Z" fill="#4b8bd0" stroke="#4e6179" stroke-width="2"/>
<circle cx="546" cy="155" r="7" fill="#253e59"/>
<text x="147" y="224" text-anchor="middle" class="caption">Bar magnet</text><text x="547" y="288" text-anchor="middle" class="caption">Pivoted compass needle</text>
</svg>`,
  "fig_6_40_force_examples": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 260" role="img" aria-label="Loaded and empty carts exert equal opposite collision forces">
<defs>
 <marker id="arrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#196bd0"/></marker>
 <marker id="redarrow" viewBox="0 0 10 10" refX="8.7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#e45557"/></marker>
 <pattern id="graphgrid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="#dbe8f6" stroke-width="1"/></pattern>
 <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#d0f4ff"/><stop offset="1" stop-color="#83d3f4"/></linearGradient>
</defs>
<style>text{font-family:Inter,'Segoe UI',Arial,sans-serif;fill:#213650}.heading{font-size:23px;font-weight:750}.caption{font-size:16px}.axis{font-size:16px;font-weight:650}.small{font-size:14px}.panel{fill:#f8fbff;stroke:#c4d9f1;stroke-width:2}</style>

<rect x="4" y="4" width="792" height="252" rx="16" fill="#f8fbff" stroke="#c9daef"/>
<text x="397" y="36" text-anchor="middle" class="heading">Forces during a collision</text>
<path d="M40 203H758" stroke="#647e9b" stroke-width="4"/>
<g><path d="M95 116H288L269 180H121Z" fill="#a1cfec" stroke="#3b7ca2" stroke-width="3"/><rect x="118" y="85" width="50" height="31" fill="#96cb74"/><rect x="174" y="83" width="43" height="33" fill="#88b955"/><rect x="223" y="88" width="42" height="28" fill="#a3d780"/><circle cx="147" cy="188" r="17" fill="#3f536b"/><circle cx="244" cy="188" r="17" fill="#3f536b"/></g>
<g><path d="M511 116H705L685 180H535Z" fill="#d6e7f3" stroke="#3b7ca2" stroke-width="3"/><circle cx="560" cy="188" r="17" fill="#3f536b"/><circle cx="655" cy="188" r="17" fill="#3f536b"/></g>
<path d="M307 151H483" stroke="#e45557" stroke-width="4" marker-end="url(#redarrow)"/><path d="M483 165H308" stroke="#196bd0" stroke-width="4" marker-end="url(#arrow)"/>
<text x="200" y="232" text-anchor="middle" class="caption">Loaded cart</text><text x="612" y="232" text-anchor="middle" class="caption">Empty cart</text><text x="396" y="113" text-anchor="middle" font-size="17" font-weight="750">Equal forces</text>
</svg>`
};
function forceMotionDiagramUrl(name) {
  if (!Object.prototype.hasOwnProperty.call(window.forceMotionDiagrams, name)) return '';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(window.forceMotionDiagrams[name]);
}
function forceMotionAnswerImage(name, alt) {
  return '\n\n<figure style="margin:14px auto;max-width:640px;text-align:center">' +
    '<img src="' + forceMotionDiagramUrl(name) + '" alt="' + alt +
    '" style="width:100%;height:auto;display:block;margin:auto"/></figure>';
}

/* ════════════════════════════════════════════════════════════
   REVISE, REFLECT, REFINE — QUESTIONS 1–16
   Render from window.reviseReflectRefineData.
   ════════════════════════════════════════════════════════════ */
window.reviseReflectRefineData = [
  {
    type: 'revise-reflect-refine',
    marks: 2,
    question: `Using a horizontal force F, a table is moved across the floor at a constant velocity. How much is the frictional force exerted by the floor on the table?`,
    answer: `The table moves with **constant velocity**, so its acceleration and the net horizontal force are zero.

By Newton's first law, friction balances the applied force and acts in the opposite direction.

$$\\boxed{f=F\\quad\\text{(opposite to the applied force)}}$$`
  },
  {
    type: 'revise-reflect-refine',
    marks: 2,
    question: `For a ball moving on a smooth frictionless surface, choose the appropriate option to make the following statements physically correct.

(i) If no net force is applied on the ball, the velocity of the ball will remain the same/increase/decrease.
(ii) If a net force is applied on the ball in the direction of its motion, the magnitude of the velocity of the ball will remain the same/increase/decrease.
(iii) If a net force is applied on the ball in a direction opposite to the direction of its motion, the magnitude of the velocity of the ball will remain the same/increase/decrease.`,
    answer: `**(i) Remain the same.** With zero net force, there is no acceleration.

**(ii) Increase.** A force along the direction of motion increases speed.

**(iii) Decrease.** A force opposite to the direction of motion reduces speed while the ball is moving in its original direction.`
  },
  {
    type: 'revise-reflect-refine',
    marks: 2,
    question: `Two blocks P and Q on a smooth horizontal surface are shown in Fig. 6.36. Two forces of magnitudes 4 N and 5 N act in opposite directions on block P, while block Q is moving with a constant velocity. Which statement is correct?

(i) P experiences a net force and Q does not experience a net force.
(ii) P does not experience a net force and Q experiences a net force.
(iii) Both P and Q experience a net force.
(iv) Neither P nor Q experiences a net force.`,
    answer: `**Correct option: (i).**

For block P, the forces oppose one another:
$$F_{\\text{net},P}=5-4=\\boxed{1\\;\\text{N to the right}}$$
Block Q moves at constant velocity on a smooth surface, so:
$$\\boxed{F_{\\text{net},Q}=0}$$`,
    diagramUrl: forceMotionDiagramUrl("fig_6_36_blocks")
  },
  {
    type: 'revise-reflect-refine',
    marks: 3,
    question: `While practising for the snake boat race (Vallum kali in Kerala), 100 oarsmen are rowing a boat together. Out of these, 95 row backwards to propel the boat forward. But by mistake, 5 oarsmen row in the opposite direction. If each oarsman applies a horizontal force of 200 N, what is the net force on the snake boat? (Ignore drags, air friction, etc.)`,
    answer: `The 95 oarsmen produce a forward force and the remaining 5 produce a backward force.

$$F_{\\text{forward}}=95\\times200=19\\,000\\;\\text{N}$$
$$F_{\\text{backward}}=5\\times200=1\\,000\\;\\text{N}$$
$$F_{\\text{net}}=19\\,000-1\\,000=\\boxed{18\\,000\\;\\text{N forward}}$$`
  },
  {
    type: 'revise-reflect-refine',
    marks: 2,
    question: `When a net force acts on an object, we observe that the object accelerates: 

(i) opposite to the direction of force, with acceleration proportional to the force acting on the object.
(ii) opposite to the direction of force, with acceleration proportional to the mass of the object.
(iii) in the direction of force, with acceleration inversely proportional to the force acting on the object.
(iv) in the direction of force, with acceleration proportional to the force acting on the object.`,
    answer: `**Correct option: (iv).**

From Newton's second law, $$a=\\frac{F_{\\text{net}}}{m}$$
For a fixed mass, acceleration is directly proportional to the net force and points in the same direction.`
  },
  {
    type: 'revise-reflect-refine',
    marks: 2,
    question: `The position-time graphs for four objects A, B, C and D moving along a straight line are given in Fig. 6.37. A net force acts on which object?

(i) Object A
(ii) Object B
(iii) Object C
(iv) Object D`,
    answer: `**Correct option: (iii), object C.**

The slope of a position–time graph gives velocity. Only C has a **changing slope**, indicating acceleration, which requires a net force.

A and D have constant slopes (constant velocities). B has zero slope (at rest).`,
    diagramUrl: forceMotionDiagramUrl("fig_6_37_position_time")
  },
  {
    type: 'revise-reflect-refine',
    marks: 2,
    question: `A sailor jumps out from a small boat to the shore (Fig. 6.38). As the sailor jumps forward, will the boat move? If yes, in which direction and why?`,
    answer: `**Yes. The boat moves backward, away from the shore.**

The sailor pushes the boat backward with their feet. By Newton's third law, the boat pushes the sailor forward with an equal and opposite force. Since the boat is free to move, it recoils backward.`,
    diagramUrl: forceMotionDiagramUrl("fig_6_38_sailor_boat")
  },
  {
    type: 'revise-reflect-refine',
    marks: 2,
    question: `During a high jump event, a landing mat or sand bed is placed for the athlete to fall upon (Fig. 6.39). Explain the reason behind it.`,
    answer: `A soft landing mat or sand bed **increases the time taken to stop** the athlete's motion.

For the same change in momentum, the average impact force becomes smaller when stopping time increases:

$$F_{\\text{avg}}=\\frac{|\\Delta p|}{\\Delta t}$$

Therefore, the mat reduces the risk of injury.`,
    diagramUrl: forceMotionDiagramUrl("fig_6_39_landing_mat")
  },
  {
    type: 'revise-reflect-refine',
    marks: 2,
    question: `A hand cart loaded with vegetables collides with an identical but empty hand cart. During the collision:

(i) the loaded cart exerts a force of larger magnitude on the empty cart.
(ii) the empty cart exerts a force of larger magnitude on the loaded cart.
(iii) neither cart exerts a force on the other.
(iv) the loaded cart and the empty cart both exert an equal magnitude of force on each other.`,
    answer: `**Correct option: (iv).**

According to Newton's third law, the two carts exert **equal-magnitude forces in opposite directions** on each other. Their different masses may cause different accelerations, but do not change this force equality.`,
    diagramUrl: forceMotionDiagramUrl("fig_6_40_force_examples")
  },
  {
    type: 'revise-reflect-refine',
    marks: 3,
    question: `The acceleration-mass graph for the acceleration produced by a force on objects of different masses is plotted in Fig. 6.40. Plot the force-mass graph for this case.`,
    answer: `Use Newton's second law, $$F=ma$$

Read points from the given graph:

| Mass (kg) | Acceleration (m/s²) | Force (N) |
|---:|---:|---:|
| 1 | 10 | 10 |
| 2 | 5 | 10 |
| 4 | 2.5 | 10 |
| 5 | 2 | 10 |

Since the force is the same for every mass, **plot mass (kg) on the x-axis and force (N) on the y-axis**. Draw a horizontal line at $$\\boxed{F=10\\;\\text{N}}$$` + forceMotionAnswerImage("fig_6_40_force_mass_answer", 'Horizontal force–mass graph at 10 N'),
    diagramUrl: forceMotionDiagramUrl("fig_6_40_acceleration_mass")
  },
  {
    type: 'revise-reflect-refine',
    marks: 3,
    question: `The velocity-time graph of an object of mass 10 kg moving along a straight line is shown in Fig. 6.41. Calculate the force acting on the object by using the graph.`,
    answer: `From the velocity–time graph: $$u=10\\;\\text{m/s},\\quad v=30\\;\\text{m/s},\\quad t=8\\;\\text{s}$$

The slope of the graph gives acceleration:
$$a=\\frac{v-u}{t}=\\frac{30-10}{8}=2.5\\;\\text{m/s}^2$$

By Newton's second law:
$$F=ma=10\\times2.5=\\boxed{25\\;\\text{N}}$$`,
    diagramUrl: forceMotionDiagramUrl("fig_6_41_velocity_time")
  },
  {
    type: 'revise-reflect-refine',
    marks: 3,
    question: `A bullet of mass 50 g moving with a speed of 100 m s⁻¹ enters a heavy stationary wooden block and stops after penetrating a distance of 50 cm. Estimate the stopping force acting on the bullet (assume that the bullet undergoes constant acceleration within the block).`,
    answer: `Given: $$m=0.05\\;\\text{kg},\\quad u=100\\;\\text{m/s},\\quad v=0,\\quad s=0.50\\;\\text{m}$$

Using $$v^2=u^2+2as:$$
$$0=100^2+2a(0.5)\\implies a=-10\\,000\\;\\text{m/s}^2$$

$$F=ma=0.05(-10\\,000)=\\boxed{-500\\;\\text{N}}$$

The **stopping force has magnitude 500 N** and acts opposite to the bullet's motion.`
  },
  {
    type: 'revise-reflect-refine',
    marks: 3,
    question: `An ace footballer converted a penalty shot by kicking the football with a speed of 108 km h⁻¹. The estimated force they imparted was 800 N. The mass of the football was 0.4 kg. Calculate the time of contact between their foot and the ball.`,
    answer: `Assuming the ball was initially at rest:

$$u=0,\\quad v=108\\times\\frac{5}{18}=30\\;\\text{m/s}$$

The impulse equals the change in momentum:
$$Ft=m(v-u)$$
$$800t=0.4(30-0)=12$$
$$\\boxed{t=\\frac{12}{800}=0.015\\;\\text{s}=15\\;\\text{ms}}$$`
  },
  {
    type: 'revise-reflect-refine',
    marks: 3,
    question: `An object of mass 2 kg moving with a constant velocity of 10 m s⁻¹ encounters a rough patch where the force of friction on the object is 7 N. At the same time, an additional constant force of 3 N opposing the motion is applied on the object. After entering the rough patch, how much distance does the object travel before coming to rest?`,
    answer: `Both forces oppose the motion:
$$F_{\\text{net}}=-(7+3)=-10\\;\\text{N}$$

$$a=\\frac{F_{\\text{net}}}{m}=\\frac{-10}{2}=-5\\;\\text{m/s}^2$$

Using $$v^2=u^2+2as$$ with $$v=0$$:
$$0=10^2+2(-5)s$$
$$\\boxed{s=10\\;\\text{m}}$$`
  },
  {
    type: 'revise-reflect-refine',
    marks: 3,
    question: `A tractor pulls a harrow (a ploughing tool) of mass m₁ with a net force F resulting in an acceleration of a₁. The same tractor pulls a trolley of mass m₂ with a force F producing an acceleration of a₂. If the tractor now pulls the trolley with the harrow placed on it (with the same force F), then obtain an expression for the resulting acceleration in terms of a₁ and a₂. Ignore friction.`,
    answer: `By Newton's second law:
$$m_1=\\frac{F}{a_1},\\qquad m_2=\\frac{F}{a_2}$$

When the trolley carries the harrow, the combined mass is $$m_1+m_2$$. Therefore:
$$a=\\frac{F}{m_1+m_2}=\\frac{F}{\\frac{F}{a_1}+\\frac{F}{a_2}}$$

$$\\boxed{a=\\frac{a_1a_2}{a_1+a_2}}$$`
  },
  {
    type: 'revise-reflect-refine',
    marks: 2,
    question: `When the pole of a bar magnet is brought close to a magnetic compass, the bar magnet and the compass needle (which is also a magnet) exert a magnetic force on each other. As per Newton's third law of motion, both forces are equal in magnitude and opposite in direction. However, the compass needle moves, whereas the bar magnet does not move (Fig. 6.42). Explain why.`,
    answer: `The forces are equal and opposite but **act on different objects**. Equal forces do not guarantee equal motions.

The compass needle is light and free to turn on its pivot, so the magnetic interaction produces a torque and the needle rotates. The bar magnet is usually held in place (and has much greater inertia), so its motion is not noticeable.

If the bar magnet were also freely suspended, it could move or rotate as well.`,
    diagramUrl: forceMotionDiagramUrl("fig_6_42_magnet_compass")
  }
];
