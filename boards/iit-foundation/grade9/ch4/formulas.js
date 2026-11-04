/* Physics4Fun — IIT Foundation Grade IX — Calculus (Differentiation + Integration)
 * Save to: boards/iit-foundation/grade9/ch4/formulas.js
 * Data shape compatible with topics_v24.html / renderIITFormulasView().
 * All mathematics is MathJax TeX, all formulas editable in this JS file.
 * Infographic styles are scoped to #iitFormulasBody.
 */
window.iitFormulasData = [
  {
    "title": "🧭 Differentiation • Meaning & Notation",
    "items": [
      {
        "name": "Derivative / first principle",
        "formula": "f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}",
        "note": "Instantaneous rate of change; limit must exist."
      },
      {
        "name": "Leibniz notation",
        "formula": "f'(x)=\\frac{dy}{dx}=\\frac{d}{dx}f(x)"
      },
      {
        "name": "Slope of tangent",
        "formula": "m=\\left.\\frac{dy}{dx}\\right|_{x=a}"
      },
      {
        "name": "Tangent equation",
        "formula": "y-y_1=m(x-x_1)"
      },
      {
        "name": "Normal slope",
        "formula": "m_n=-\\frac{1}{m_t}",
        "note": "For a nonzero, finite tangent slope."
      },
      {
        "name": "Second derivative",
        "formula": "f''(x)=\\frac{d^2y}{dx^2}"
      }
    ]
  },
  {
    "title": "⚡ Differentiation • Core Rules",
    "items": [
      {
        "name": "Constant",
        "formula": "\\frac{d}{dx}(c)=0"
      },
      {
        "name": "Identity",
        "formula": "\\frac{d}{dx}(x)=1"
      },
      {
        "name": "Power",
        "formula": "\\frac{d}{dx}(x^n)=nx^{n-1}"
      },
      {
        "name": "Constant multiple",
        "formula": "\\frac{d}{dx}[cu]=c\\,u'"
      },
      {
        "name": "Sum / difference",
        "formula": "(u\\pm v)'=u'\\pm v'"
      },
      {
        "name": "Product • UV",
        "formula": "(uv)'=u'v+uv'"
      },
      {
        "name": "Quotient • U/V",
        "formula": "\\left(\\frac{u}{v}\\right)'=\\frac{vu'-uv'}{v^2}",
        "note": "v ≠ 0"
      },
      {
        "name": "Chain rule",
        "formula": "\\frac{d}{dx}f(g(x))=f'(g(x))g'(x)"
      },
      {
        "name": "Power of a function",
        "formula": "\\frac{d}{dx}[u^n]=nu^{n-1}u'"
      }
    ]
  },
  {
    "title": "🌱 Differentiation • Algebraic & Radical",
    "items": [
      {
        "name": "Reciprocal",
        "formula": "\\frac{d}{dx}\\left(\\frac1x\\right)=-\\frac1{x^2}",
        "note": "x ≠ 0"
      },
      {
        "name": "Inverse powers",
        "formula": "\\frac{d}{dx}\\left(\\frac1{x^n}\\right)=-\\frac{n}{x^{n+1}}"
      },
      {
        "name": "Square root",
        "formula": "\\frac{d}{dx}(\\sqrt{x})=\\frac1{2\\sqrt{x}}",
        "note": "x > 0"
      },
      {
        "name": "Reciprocal root",
        "formula": "\\frac{d}{dx}\\left(\\frac1{\\sqrt{x}}\\right)=-\\frac1{2x^{3/2}}"
      },
      {
        "name": "Linear power",
        "formula": "\\frac{d}{dx}(ax+b)^n=na(ax+b)^{n-1}"
      }
    ]
  },
  {
    "title": "🌈 Differentiation • Trigonometric Table",
    "items": [
      {
        "name": "Sine",
        "formula": "\\frac{d}{dx}(\\sin x)=\\cos x"
      },
      {
        "name": "Cosine",
        "formula": "\\frac{d}{dx}(\\cos x)=-\\sin x"
      },
      {
        "name": "Tangent",
        "formula": "\\frac{d}{dx}(\\tan x)=\\sec^2x"
      },
      {
        "name": "Cotangent",
        "formula": "\\frac{d}{dx}(\\cot x)=-\\csc^2x"
      },
      {
        "name": "Secant",
        "formula": "\\frac{d}{dx}(\\sec x)=\\sec x\\tan x"
      },
      {
        "name": "Cosecant",
        "formula": "\\frac{d}{dx}(\\csc x)=-\\csc x\\cot x"
      },
      {
        "name": "Sine of u",
        "formula": "\\frac{d}{dx}(\\sin u)=\\cos u\\,u'"
      },
      {
        "name": "Cosine of u",
        "formula": "\\frac{d}{dx}(\\cos u)=-\\sin u\\,u'"
      },
      {
        "name": "Tangent of u",
        "formula": "\\frac{d}{dx}(\\tan u)=\\sec^2u\\,u'"
      }
    ]
  },
  {
    "title": "📈 Differentiation • Exponential & Logarithmic",
    "items": [
      {
        "name": "Natural exponential",
        "formula": "\\frac{d}{dx}(e^x)=e^x"
      },
      {
        "name": "General exponential",
        "formula": "\\frac{d}{dx}(a^x)=a^x\\ln a",
        "note": "a > 0, a ≠ 1"
      },
      {
        "name": "Exponential of u",
        "formula": "\\frac{d}{dx}(e^u)=e^u u'"
      },
      {
        "name": "Natural logarithm",
        "formula": "\\frac{d}{dx}(\\ln|x|)=\\frac1x",
        "note": "x ≠ 0"
      },
      {
        "name": "Logarithm base a",
        "formula": "\\frac{d}{dx}(\\log_a x)=\\frac1{x\\ln a}",
        "note": "x > 0, a > 0, a ≠ 1"
      },
      {
        "name": "Logarithm of u",
        "formula": "\\frac{d}{dx}\\ln|u|=\\frac{u'}u"
      }
    ]
  },
  {
    "title": "🚀 Differentiation • Physics & Graphs",
    "items": [
      {
        "name": "Velocity",
        "formula": "v=\\frac{ds}{dt}"
      },
      {
        "name": "Acceleration",
        "formula": "a=\\frac{dv}{dt}=\\frac{d^2s}{dt^2}"
      },
      {
        "name": "Increasing function",
        "formula": "f'(x)>0"
      },
      {
        "name": "Decreasing function",
        "formula": "f'(x)<0"
      },
      {
        "name": "Stationary point",
        "formula": "f'(a)=0"
      },
      {
        "name": "Local minimum test",
        "formula": "f'(a)=0,\\quad f''(a)>0",
        "note": "Sufficient second-derivative test."
      },
      {
        "name": "Local maximum test",
        "formula": "f'(a)=0,\\quad f''(a)<0",
        "note": "Sufficient second-derivative test."
      }
    ]
  },
  {
    "title": "🧩 Integration • Meaning & Properties",
    "items": [
      {
        "name": "Antiderivative",
        "formula": "\\int f(x)\\,dx=F(x)+C,\\quad F'(x)=f(x)"
      },
      {
        "name": "Constant of integration",
        "formula": "\\frac{d}{dx}(F(x)+C)=f(x)",
        "note": "Include +C in every indefinite integral."
      },
      {
        "name": "Sum / difference",
        "formula": "\\int(u\\pm v)\\,dx=\\int u\\,dx\\pm\\int v\\,dx"
      },
      {
        "name": "Constant multiple",
        "formula": "\\int kf(x)\\,dx=k\\int f(x)\\,dx"
      },
      {
        "name": "Derivative of an integral",
        "formula": "\\frac{d}{dx}\\left[\\int f(x)\\,dx\\right]=f(x)"
      },
      {
        "name": "Substitution rule",
        "formula": "\\int f(g(x))g'(x)\\,dx=F(g(x))+C"
      },
      {
        "name": "Integration by parts",
        "formula": "\\int u\\,dv=uv-\\int v\\,du"
      }
    ]
  },
  {
    "title": "🔢 Integration • Algebraic Table",
    "items": [
      {
        "name": "Zero",
        "formula": "\\int0\\,dx=C"
      },
      {
        "name": "Unity",
        "formula": "\\int1\\,dx=x+C"
      },
      {
        "name": "Constant",
        "formula": "\\int k\\,dx=kx+C"
      },
      {
        "name": "Power",
        "formula": "\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C",
        "note": "n ≠ −1"
      },
      {
        "name": "Coefficient & power",
        "formula": "\\int ax^n\\,dx=\\frac{ax^{n+1}}{n+1}+C",
        "note": "n ≠ −1"
      },
      {
        "name": "Reciprocal",
        "formula": "\\int\\frac{dx}{x}=\\ln|x|+C",
        "note": "x ≠ 0"
      },
      {
        "name": "Linear power",
        "formula": "\\int(ax+b)^n\\,dx=\\frac{(ax+b)^{n+1}}{a(n+1)}+C",
        "note": "a ≠ 0, n ≠ −1"
      },
      {
        "name": "Linear reciprocal",
        "formula": "\\int\\frac{dx}{ax+b}=\\frac1a\\ln|ax+b|+C",
        "note": "a ≠ 0"
      }
    ]
  },
  {
    "title": "🎨 Integration • Trigonometric Table",
    "items": [
      {
        "name": "Sine",
        "formula": "\\int\\sin x\\,dx=-\\cos x+C"
      },
      {
        "name": "Cosine",
        "formula": "\\int\\cos x\\,dx=\\sin x+C"
      },
      {
        "name": "Secant squared",
        "formula": "\\int\\sec^2x\\,dx=\\tan x+C"
      },
      {
        "name": "Cosecant squared",
        "formula": "\\int\\csc^2x\\,dx=-\\cot x+C"
      },
      {
        "name": "Secant × tangent",
        "formula": "\\int\\sec x\\tan x\\,dx=\\sec x+C"
      },
      {
        "name": "Cosecant × cotangent",
        "formula": "\\int\\csc x\\cot x\\,dx=-\\csc x+C"
      },
      {
        "name": "Tangent",
        "formula": "\\int\\tan x\\,dx=-\\ln|\\cos x|+C"
      },
      {
        "name": "Cotangent",
        "formula": "\\int\\cot x\\,dx=\\ln|\\sin x|+C"
      },
      {
        "name": "Secant",
        "formula": "\\int\\sec x\\,dx=\\ln|\\sec x+\\tan x|+C"
      },
      {
        "name": "Cosecant",
        "formula": "\\int\\csc x\\,dx=\\ln|\\csc x-\\cot x|+C"
      }
    ]
  },
  {
    "title": "💎 Integration • Exponential & Logarithmic",
    "items": [
      {
        "name": "Natural exponential",
        "formula": "\\int e^x\\,dx=e^x+C"
      },
      {
        "name": "General exponential",
        "formula": "\\int a^x\\,dx=\\frac{a^x}{\\ln a}+C",
        "note": "a > 0, a ≠ 1"
      },
      {
        "name": "Exponential with linear argument",
        "formula": "\\int e^{ax+b}\\,dx=\\frac1a e^{ax+b}+C",
        "note": "a ≠ 0"
      },
      {
        "name": "General exponential with linear argument",
        "formula": "\\int a^{kx+b}\\,dx=\\frac{a^{kx+b}}{k\\ln a}+C",
        "note": "k ≠ 0, a > 0, a ≠ 1"
      },
      {
        "name": "Natural logarithm",
        "formula": "\\int\\ln x\\,dx=x\\ln x-x+C",
        "note": "x > 0"
      }
    ]
  },
  {
    "title": "📐 Integration • Definite Integrals",
    "items": [
      {
        "name": "Fundamental theorem",
        "formula": "\\int_a^b f(x)\\,dx=F(b)-F(a)",
        "note": "F′(x) = f(x)"
      },
      {
        "name": "Same limits",
        "formula": "\\int_a^a f(x)\\,dx=0"
      },
      {
        "name": "Reverse limits",
        "formula": "\\int_a^b f(x)\\,dx=-\\int_b^a f(x)\\,dx"
      },
      {
        "name": "Split interval",
        "formula": "\\int_a^c f(x)\\,dx=\\int_a^b f(x)\\,dx+\\int_b^c f(x)\\,dx"
      },
      {
        "name": "Nonnegative area",
        "formula": "A=\\int_a^b f(x)\\,dx",
        "note": "Only if f(x) ≥ 0 on [a,b]."
      },
      {
        "name": "Total geometric area",
        "formula": "A=\\int_a^b|f(x)|\\,dx"
      }
    ]
  },
  {
    "title": "🛰️ Integration • Physics Applications",
    "items": [
      {
        "name": "Displacement from velocity",
        "formula": "s_2-s_1=\\int_{t_1}^{t_2}v(t)\\,dt"
      },
      {
        "name": "Distance travelled",
        "formula": "d=\\int_{t_1}^{t_2}|v(t)|\\,dt"
      },
      {
        "name": "Velocity change from acceleration",
        "formula": "v_2-v_1=\\int_{t_1}^{t_2}a(t)\\,dt"
      },
      {
        "name": "Impulse from force",
        "formula": "J=\\int_{t_1}^{t_2}F(t)\\,dt=\\Delta p"
      },
      {
        "name": "Work by variable force",
        "formula": "W=\\int_{x_1}^{x_2}F(x)\\,dx",
        "note": "Force along the displacement."
      },
      {
        "name": "Spring work",
        "formula": "W=\\frac12k(x_2^2-x_1^2)",
        "note": "Work needed to stretch an ideal spring from x₁ to x₂."
      },
      {
        "name": "Area under a–t graph",
        "formula": "\\Delta v=\\int_{t_1}^{t_2}a(t)\\,dt"
      }
    ]
  }
];

(function installCalculusFormulaInfographic(){
  if (typeof document === 'undefined') return;
  const id = 'p4f-calculus-formula-infographic';
  let style = document.getElementById(id);
  if (!style) { style = document.createElement('style'); style.id=id; document.head.appendChild(style); }
  style.textContent = "\n/* Physics4Fun | Grade IX Calculus Formula Infographic */\n#iitFormulasBody .iit-formulas-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:16px;align-items:start}\n#iitFormulasBody .iit-formula-group{--accent:#7c3aed;--soft:#f3e8ff;position:relative;overflow:hidden;border:1px solid color-mix(in srgb,var(--accent) 22%,#e5e7eb);border-radius:18px;background:linear-gradient(145deg,#fff,var(--soft));box-shadow:0 8px 26px rgba(30,41,59,.075);padding:0 0 10px}\n#iitFormulasBody .iit-formula-group:nth-child(6n+2){--accent:#0891b2;--soft:#ecfeff}\n#iitFormulasBody .iit-formula-group:nth-child(6n+3){--accent:#ea580c;--soft:#fff7ed}\n#iitFormulasBody .iit-formula-group:nth-child(6n+4){--accent:#16a34a;--soft:#f0fdf4}\n#iitFormulasBody .iit-formula-group:nth-child(6n+5){--accent:#db2777;--soft:#fdf2f8}\n#iitFormulasBody .iit-formula-group:nth-child(6n+6){--accent:#2563eb;--soft:#eff6ff}\n#iitFormulasBody .iit-formula-group>h3{margin:0 0 10px;padding:14px 16px;background:var(--accent);color:white;font-size:1.05rem;line-height:1.3;letter-spacing:.01em}\n#iitFormulasBody .iit-formula-item{margin:7px 10px;padding:10px 12px;background:#fff;border:1px solid #e5e7eb;border-left:4px solid var(--accent);border-radius:11px;box-shadow:0 2px 5px #0f172a08;min-width:0}\n#iitFormulasBody .iit-formula-item strong{display:block;font-size:.84rem;letter-spacing:.01em;color:#334155;margin-bottom:6px}\n#iitFormulasBody .iit-formula-math{color:#0f172a;overflow-x:auto;overflow-y:hidden;padding:4px 0;line-height:1.65}\n#iitFormulasBody .iit-formula-item small{display:block;margin-top:5px;color:#64748b;font-size:.76rem;line-height:1.4}\n#iitFormulasBody .iit-formula-item mjx-container{max-width:100%}\n@media(min-width:1400px){#iitFormulasBody .iit-formulas-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}\n@media(max-width:700px){#iitFormulasBody .iit-formulas-grid{grid-template-columns:1fr;gap:11px}}\n@media print{#iitFormulasBody .iit-formula-group{break-inside:avoid;box-shadow:none}#iitFormulasBody .iit-formulas-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}\n";
})();
