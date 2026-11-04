/* Descriptive Question - Third Equation of Motion | 2 Marks
   HTML/SVG proof designed for direct rendering in a browser.
*/
window.descriptiveData = [
  {
    question: "Derive the equation of motion v² = u² + 2as using a velocity-time graph.",
    answer: `
      <div class="proof-answer">
        <div class="proof-title">Derivation of the Third Equation of Motion</div>

        <div class="proof-layout">
          <div class="proof-steps">
            <div class="step">
              <span class="step-no">1</span>
              <div>
                <strong>Displacement = area under the velocity-time graph.</strong><br>
                Therefore, <span class="eq">s = area of trapezium OABD</span>.
              </div>
            </div>

            <div class="step">
              <span class="step-no">2</span>
              <div>
                Split the trapezium into a rectangle and a triangle:
                <div class="eq">s = ut + ½ × t × (v − u)</div>
              </div>
            </div>

            <div class="step">
              <span class="step-no">3</span>
              <div>
                From the first equation of motion:
                <div class="eq">v = u + at</div>
                <div class="eq">t = (v − u)/a</div>
              </div>
            </div>

            <div class="step final-step">
              <span class="step-no">4</span>
              <div>
                Substituting the value of <span class="eq">t</span>:
                <div class="eq">s = ½(u + v)(v − u)/a</div>
                <div class="eq">2as = (u + v)(v − u)</div>
                <div class="eq">2as = v² − u²</div>
                <div class="final-equation">∴ v² = u² + 2as</div>
              </div>
            </div>
          </div>

          <div class="graph-card">
            <div class="graph-heading">Velocity–Time Graph</div>
            <svg viewBox="0 0 560 410" width="100%" role="img"
                 aria-label="Velocity-time graph showing rectangle and triangle whose total area gives displacement">
              <defs>
                <marker id="arrowThirdEq" markerWidth="8" markerHeight="8"
                        refX="7" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#173b68"></path>
                </marker>
              </defs>

              <!-- Axes -->
              <line x1="75" y1="345" x2="520" y2="345"
                    stroke="#173b68" stroke-width="3"
                    marker-end="url(#arrowThirdEq)"/>
              <line x1="75" y1="345" x2="75" y2="35"
                    stroke="#173b68" stroke-width="3"
                    marker-end="url(#arrowThirdEq)"/>

              <!-- Rectangle OACD -->
              <polygon points="75,250 75,345 410,345 410,250"
                       fill="#bfe3f7" stroke="#3b82b0" stroke-width="2"/>

              <!-- Triangle ABC -->
              <polygon points="75,250 410,105 410,250"
                       fill="#f7c9c9" stroke="#d47777" stroke-width="2"/>

              <!-- Velocity-time line -->
              <line x1="75" y1="250" x2="410" y2="105"
                    stroke="#1769aa" stroke-width="5"/>

              <!-- Dashed construction lines -->
              <line x1="75" y1="250" x2="410" y2="250"
                    stroke="#333" stroke-width="2" stroke-dasharray="8,7"/>
              <line x1="410" y1="105" x2="410" y2="345"
                    stroke="#333" stroke-width="2" stroke-dasharray="8,7"/>
              <line x1="75" y1="105" x2="410" y2="105"
                    stroke="#333" stroke-width="2" stroke-dasharray="8,7"/>

              <!-- Points -->
              <circle cx="75" cy="345" r="5" fill="#173b68"/>
              <circle cx="75" cy="250" r="6" fill="#173b68"/>
              <circle cx="410" cy="105" r="6" fill="#173b68"/>
              <circle cx="410" cy="250" r="6" fill="#173b68"/>
              <circle cx="410" cy="345" r="5" fill="#173b68"/>

              <!-- Labels -->
              <g font-family="Georgia, 'Times New Roman', serif" fill="#111">
                <text x="58" y="365" font-size="22">O</text>
                <text x="55" y="244" font-size="22">A</text>
                <text x="420" y="100" font-size="22">B</text>
                <text x="420" y="256" font-size="22">C</text>
                <text x="420" y="365" font-size="22">D</text>

                <text x="45" y="257" font-size="22" font-style="italic">u</text>
                <text x="48" y="112" font-size="22" font-style="italic">v</text>
                <text x="405" y="375" font-size="22" font-style="italic">t</text>

                <text x="250" y="395" font-size="21">Time</text>
                <text transform="translate(23,270) rotate(-90)"
                      font-size="21">Velocity</text>

                <text x="185" y="305" font-size="20" font-weight="bold">Rectangle</text>
                <text x="240" y="328" font-size="21" font-style="italic">ut</text>

                <text x="245" y="170" font-size="20" font-weight="bold">Triangle</text>
                <text x="225" y="195" font-size="19">½ t(v − u)</text>
              </g>
            </svg>

            <div class="graph-note">
              <strong>Key idea:</strong> Area OABD = displacement <em>s</em>.
            </div>
          </div>
        </div>

        <style>
          .proof-answer {
            font-family: Arial, Helvetica, sans-serif;
            max-width: 1100px;
            margin: 0 auto;
            padding: 18px;
            color: #172033;
            background: #ffffff;
            border: 1px solid #d8e0ea;
            border-radius: 14px;
            box-sizing: border-box;
          }

          .proof-title {
            text-align: center;
            font-size: 24px;
            font-weight: 700;
            color: #173b68;
            margin-bottom: 18px;
            padding: 10px;
            border-radius: 9px;
            background: #eaf4fb;
          }

          .proof-layout {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(350px, 0.9fr);
            gap: 20px;
            align-items: start;
          }

          .proof-steps {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .step {
            display: flex;
            gap: 12px;
            align-items: flex-start;
            padding: 12px 14px;
            border: 1px solid #d9e3ed;
            border-radius: 10px;
            background: #fbfdff;
            line-height: 1.5;
            font-size: 17px;
          }

          .step-no {
            flex: 0 0 30px;
            height: 30px;
            border-radius: 50%;
            background: #dceefb;
            color: #173b68;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
          }

          .eq {
            font-family: Georgia, "Times New Roman", serif;
            font-size: 19px;
            margin-top: 5px;
            color: #111827;
          }

          .final-step {
            border: 2px solid #e2b53f;
            background: #fff9df;
          }

          .final-equation {
            margin-top: 10px;
            padding: 9px 12px;
            text-align: center;
            border: 2px solid #d99f13;
            border-radius: 8px;
            background: #fff2bd;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 25px;
            font-weight: 700;
            color: #111;
          }

          .graph-card {
            border: 1px solid #d9e3ed;
            border-radius: 12px;
            padding: 10px;
            background: #ffffff;
          }

          .graph-heading {
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            color: #173b68;
            margin-bottom: 4px;
          }

          .graph-card svg {
            display: block;
            width: 100%;
            height: auto;
          }

          .graph-note {
            text-align: center;
            padding: 9px;
            border-radius: 8px;
            background: #eef3fb;
            font-size: 15px;
          }

          @media (max-width: 800px) {
            .proof-layout {
              grid-template-columns: 1fr;
            }

            .proof-title {
              font-size: 20px;
            }

            .step {
              font-size: 16px;
            }
          }
        </style>
      </div>
    `,
    marks: 2,
    type: "case"
  }
];
