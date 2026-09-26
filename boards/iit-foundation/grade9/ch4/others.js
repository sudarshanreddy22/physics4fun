/* Grade 9 IIT Foundation — Calculus: Differentiation | Worksheet 1 | pp. 16–18
   Q8 is missing from provided images and is intentionally not invented.
   Q17/Q18 wording clarified; Q22/Q23 original answer options contain misprints.
   Q22/Q23 digital option D is corrected for a single-answer quiz; originals preserved in originalOptions.
   Q5/Q7 graphs are embedded as SVG data URIs, so the JS works without external image hosting.
*/
window.iitOthersData = {
  "worksheets": [
    {
      "name": "WS-1",
      "core": [
        {
          "sourceNumber": 1,
          "question": "Find the derivative of y = 8 with respect to x.",
          "options": {
            "A": "8x",
            "B": "0",
            "C": "Cannot be found",
            "D": "None"
          },
          "answer": "B",
          "explanation": "8 is a constant; the derivative of any constant with respect to x is zero: d(8)/dx = 0.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 2,
          "question": "Differentiate with respect to x: 4/x³.",
          "options": {
            "A": "x⁻²/(-2)",
            "B": "12x⁴",
            "C": "−12/x⁴",
            "D": "4/x²"
          },
          "answer": "C",
          "explanation": "Rewrite 4/x³ as 4x⁻³. Apply the power rule: 4(−3)x⁻⁴ = −12/x⁴.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 3,
          "question": "If y = ln x + sin x + eˣ, find dy/dx.",
          "options": {
            "A": "1/x + sin x + eˣ",
            "B": "1/x − cos x + eˣ",
            "C": "1/x + cos x + eˣ",
            "D": "1/x − sin x"
          },
          "answer": "C",
          "explanation": "Differentiate term by term: d(ln x)/dx = 1/x, d(sin x)/dx = cos x, and d(eˣ)/dx = eˣ. Thus dy/dx = 1/x + cos x + eˣ.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 4,
          "question": "Find the derivative of y = x³ + (4/3)x² − 5x + 1.",
          "options": {
            "A": "x⁴/4 + 4x³/9 − 5x²/2 + x",
            "B": "3x² + (8/3)x − 5",
            "C": "x² + x − 5",
            "D": "None"
          },
          "answer": "B",
          "explanation": "Using the power rule on each term: 3x² + (4/3)(2x) − 5 + 0 = 3x² + (8/3)x − 5.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 5,
          "question": "In the graph, the slopes of the curve at points A, B and C are mₐ, mᵦ and m꜀, respectively. Select the correct relation.",
          "options": {
            "A": "mₐ > mᵦ > m꜀",
            "B": "mₐ < mᵦ < m꜀",
            "C": "mₐ = mᵦ = m꜀",
            "D": "mₐ = m꜀ < mᵦ"
          },
          "answer": "B",
          "explanation": "The curve decreases throughout: the tangent at A has a large negative slope, at B a smaller negative slope and at C a slope close to zero. Therefore mₐ < mᵦ < m꜀.",
          "paper": "WS-1",
          "marks": 1,
          "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NDAiIGhlaWdodD0iMzE1IiB2aWV3Qm94PSIwIDAgNTQwIDMxNSIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJEZWNyZWFzaW5nIGN1cnZlIHdpdGggc2xvcGUgaW5jcmVhc2luZyBmcm9tIEEgdGhyb3VnaCBCIHRvIEMiPgo8cmVjdCB3aWR0aD0iNTQwIiBoZWlnaHQ9IjMxNSIgZmlsbD0id2hpdGUiLz4KPGRlZnM+PG1hcmtlciBpZD0iYXJyb3ciIG1hcmtlcldpZHRoPSI4IiBtYXJrZXJIZWlnaHQ9IjgiIHJlZlg9IjUiIHJlZlk9IjMiIG9yaWVudD0iYXV0byI+PHBhdGggZD0iTTAgMCBMNiAzIEwwIDYgWiIgZmlsbD0iIzM0M2Y1MiIvPjwvbWFya2VyPjwvZGVmcz4KPHBhdGggZD0iTTY1IDI0NVYzNSBNNDUgMjMzSDQ4NSIgc3Ryb2tlPSIjMzQzZjUyIiBzdHJva2Utd2lkdGg9IjIuNSIgZmlsbD0ibm9uZSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KPHRleHQgeD0iNDg1IiB5PSIyNTkiIGZvbnQtc2l6ZT0iMjEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmaWxsPSIjMzQzZjUyIj54PC90ZXh0Pjx0ZXh0IHg9IjQ4IiB5PSIzMiIgZm9udC1zaXplPSIyMSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZpbGw9IiMzNDNmNTIiPnk8L3RleHQ+CjxwYXRoIGQ9Ik0xMDggNjIgQzExMSAxMTIgMTQ5IDE2OSAyMDkgMTk5IEMyNTMgMjIxIDMyNyAyMjQgMzgzIDIyMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTg2NGFhIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8ZyBmaWxsPSIjZDk0ODBmIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPjxjaXJjbGUgY3g9IjEwOSIgY3k9IjY2IiByPSI3Ii8+PGNpcmNsZSBjeD0iMTY2IiBjeT0iMTc0IiByPSI3Ii8+PGNpcmNsZSBjeD0iMzU4IiBjeT0iMjIzIiByPSI3Ii8+PC9nPgo8ZyBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMxODMxNTMiPjx0ZXh0IHg9IjEyMyIgeT0iNzIiPkE8L3RleHQ+PHRleHQgeD0iMTgwIiB5PSIxNjciPkI8L3RleHQ+PHRleHQgeD0iMzcwIiB5PSIyMTUiPkM8L3RleHQ+PC9nPgo8L3N2Zz4=",
          "imageWidth": "38%"
        },
        {
          "sourceNumber": 6,
          "question": "If y = a sin x + b cos x, then y² + (dy/dx)² is a _____.",
          "options": {
            "A": "Function of x",
            "B": "Function of y",
            "C": "Function of both x and y",
            "D": "Constant"
          },
          "answer": "D",
          "explanation": "dy/dx = a cos x − b sin x. Adding the squares gives a²(sin²x + cos²x) + b²(sin²x + cos²x); the cross-terms cancel. Result = a² + b², a constant.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 7,
          "question": "Which statement is true about the slope of the given y-versus-x graph at x₀?",
          "options": {
            "A": "Slope at x₀ is positive and non-zero",
            "B": "Slope is constant throughout the graph",
            "C": "Slope at x₀ is negative",
            "D": "None of these"
          },
          "answer": "A",
          "explanation": "At x₀ the curve is still rising as x increases, so its tangent has a positive, non-zero slope. The graph is curved and its slope is changing.",
          "paper": "WS-1",
          "marks": 1,
          "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NDAiIGhlaWdodD0iMzE1IiB2aWV3Qm94PSIwIDAgNTQwIDMxNSIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJJbmNyZWFzaW5nIGNvbmNhdmUtZG93biBjdXJ2ZSB3aXRoIHBvc2l0aXZlIG5vbnplcm8gc2xvcGUgYXQgeCBuYXVnaHQiPgo8cmVjdCB3aWR0aD0iNTQwIiBoZWlnaHQ9IjMxNSIgZmlsbD0id2hpdGUiLz4KPGRlZnM+PG1hcmtlciBpZD0iYXJyb3ciIG1hcmtlcldpZHRoPSI4IiBtYXJrZXJIZWlnaHQ9IjgiIHJlZlg9IjUiIHJlZlk9IjMiIG9yaWVudD0iYXV0byI+PHBhdGggZD0iTTAgMCBMNiAzIEwwIDYgWiIgZmlsbD0iIzM0M2Y1MiIvPjwvbWFya2VyPjwvZGVmcz4KPHBhdGggZD0iTTc1IDI0NVY0MCBNNTUgMjMxSDQ3NiIgc3Ryb2tlPSIjMzQzZjUyIiBzdHJva2Utd2lkdGg9IjIuNSIgZmlsbD0ibm9uZSIgbWFya2VyLWVuZD0idXJsKCNhcnJvdykiLz4KPHRleHQgeD0iNDc5IiB5PSIyNTEiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjIxIj54PC90ZXh0Pjx0ZXh0IHg9IjU4IiB5PSIzOSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjEiPnk8L3RleHQ+CjxwYXRoIGQ9Ik0xMTUgMTgwIEMxNTMgOTQgMjI1IDc1IDI5MSA3NSBDMzM1IDc1IDM2OCA3OCAzOTAgODMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE4NjRhYSIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTIyNyAxMDhWMjMxIiBzdHJva2U9IiM3Yzg1OTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNSA1Ii8+Cjx0ZXh0IHg9IjIxNSIgeT0iMjU5IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMyIgZmlsbD0iIzE4MzE1MyI+eOKCgDwvdGV4dD4KPGNpcmNsZSBjeD0iMjI3IiBjeT0iOTEiIHI9IjQiIGZpbGw9IiNkOTQ4MGYiLz4KPC9zdmc+",
          "imageWidth": "38%"
        },
        {
          "sourceNumber": 9,
          "question": "If y = (x − 1)(2x + 5), find dy/dx.",
          "options": {
            "A": "4x + 5",
            "B": "3",
            "C": "4x + 3",
            "D": "x + 3"
          },
          "answer": "C",
          "explanation": "Expand y = 2x² + 3x − 5; differentiation gives dy/dx = 4x + 3. Equivalently apply the product rule.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 10,
          "question": "Find the derivative of y = (3x + 4)/(4x + 5).",
          "options": {
            "A": "−1/(4x + 5)",
            "B": "−1/(4x + 5)²",
            "C": "(24x + 31)/(4x + 5)²",
            "D": "(−24x − 31)/(4x + 5)²"
          },
          "answer": "B",
          "explanation": "Apply the quotient rule: dy/dx = [3(4x + 5) − 4(3x + 4)]/(4x + 5)² = (15 − 16)/(4x + 5)² = −1/(4x + 5)².",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 11,
          "question": "Find the first derivative of y = x sin x.",
          "options": {
            "A": "−x cos x + sin x",
            "B": "−x cos x + sin²x",
            "C": "x sin x + cos x",
            "D": "x cos x + sin x"
          },
          "answer": "D",
          "explanation": "By the product rule, dy/dx = x·(cos x) + (sin x)·1 = x cos x + sin x.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 12,
          "question": "Find dy/dx if y = 2 cos(√x).",
          "options": {
            "A": "−sin(√x)/(2√x)",
            "B": "sin(√x)/√x",
            "C": "sin(√x)/(2√x)",
            "D": "−sin(√x)/√x"
          },
          "answer": "D",
          "explanation": "By the chain rule, dy/dx = 2[−sin(√x)]·[1/(2√x)] = −sin(√x)/√x.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 13,
          "question": "Evaluate d(e¹⁰⁰)/dx.",
          "options": {
            "A": "e¹⁰⁰",
            "B": "0",
            "C": "100e⁹⁹⁹",
            "D": "None of these"
          },
          "answer": "B",
          "explanation": "e¹⁰⁰ is independent of x, so it is a constant. Its derivative with respect to x is 0.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 14,
          "question": "If y = x³ cos x, find dy/dx.",
          "options": {
            "A": "x²(3 cos x − x sin x)",
            "B": "x²(3 cos x + x sin x)",
            "C": "3x² cos x + x³ sin x",
            "D": "None of these"
          },
          "answer": "A",
          "explanation": "Product rule: dy/dx = (3x²)cos x + x³(−sin x) = x²(3 cos x − x sin x).",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 15,
          "question": "If y = sin x and x = 3t, find dy/dt.",
          "options": {
            "A": "3 cos x",
            "B": "cos x",
            "C": "−3 cos x",
            "D": "−cos x"
          },
          "answer": "A",
          "explanation": "Use the chain rule: dy/dt = (dy/dx)(dx/dt) = (cos x)(3) = 3 cos x, with x = 3t.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 16,
          "question": "If y = 3x/tan x, find dy/dx.",
          "options": {
            "A": "3/sec²x",
            "B": "(3 tan x − 3x sec²x)/tan²x",
            "C": "(3 tan x + 3x sec²x)/tan²x",
            "D": "(3x sec²x − 3 tan x)/tan²x"
          },
          "answer": "B",
          "explanation": "Quotient rule with u = 3x and v = tan x gives dy/dx = [tan x·3 − 3x·sec²x]/tan²x.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 17,
          "question": "If y = 2 sin(ωt + φ), where ω and φ are constants, find dy/dt.",
          "options": {
            "A": "2 cos(ωt + φ)",
            "B": "2ω sin(ωt + φ)",
            "C": "2ω cos(ωt + φ)",
            "D": "−2ω cos(ωt + φ)"
          },
          "answer": "C",
          "explanation": "By the chain rule d/dt[sin(ωt + φ)] = ω cos(ωt + φ). Hence dy/dt = 2ω cos(ωt + φ). The source prints dy/dx although the independent variable is t.",
          "paper": "WS-1",
          "marks": 1,
          "sourceNote": "Printed source says dy/dx, but y is given as a function of t. Corrected to dy/dt for a well-posed question.",
          "originalQuestion": "If y = 2 sin(ωt + φ), where ω and φ are constants, find dy/dx."
        },
        {
          "sourceNumber": 18,
          "question": "If y = tan x × cos²x, find dy/dx.",
          "options": {
            "A": "1 + 2sin²x",
            "B": "sin²x − cos²x",
            "C": "sin²x + cos²x",
            "D": "1 − 2sin²x"
          },
          "answer": "D",
          "explanation": "Simplify first: tan x·cos²x = sin x·cos x. Differentiate: cos²x − sin²x = 1 − 2sin²x.",
          "paper": "WS-1",
          "marks": 1,
          "sourceNote": "The source uses a comma between tan x and cos²x; interpreted as multiplication, which is consistent with the listed options."
        },
        {
          "sourceNumber": 19,
          "question": "If y = 4e^(x² − 2x), find dy/dx.",
          "options": {
            "A": "(8x − 8)e^(x² − 2x)",
            "B": "(2x − 2)e^(x² − 2x)",
            "C": "(8x − 8)e^(2x − 2)",
            "D": "4e^(x² − 2x)"
          },
          "answer": "A",
          "explanation": "Chain rule: d(eᵘ)/dx = eᵘu′, with u = x² − 2x and u′ = 2x − 2. Thus dy/dx = 4eᵘ(2x − 2) = (8x − 8)e^(x² − 2x).",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 20,
          "question": "Find the derivative of y = 4 sin(3x).",
          "options": {
            "A": "4 cos(3x)",
            "B": "12 cos(3x)",
            "C": "(4/3) cos(3x)",
            "D": "None of these"
          },
          "answer": "B",
          "explanation": "Differentiate by the chain rule: d[4 sin(3x)]/dx = 4·3 cos(3x) = 12 cos(3x).",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 21,
          "question": "Find dy/dt if y = ln(t² + t).",
          "options": {
            "A": "1/(t² + t)",
            "B": "1/(2t + 1)",
            "C": "(2t + 1)/(t² + t)",
            "D": "1/[(2t + 1)(t² + t)]"
          },
          "answer": "C",
          "explanation": "Let u = t² + t. Then dy/dt = u′/u = (2t + 1)/(t² + t).",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 22,
          "question": "Find the derivative of y = (x² + 1)².",
          "options": {
            "A": "(x³ + 1)(3x²)",
            "B": "2(x³ + 1)",
            "C": "2(3x²)",
            "D": "4x(x² + 1)"
          },
          "answer": "D",
          "explanation": "Chain rule: dy/dx = 2(x² + 1)·2x = 4x(x² + 1). None of the four original printed options matches. For a single-answer digital quiz, option D has been explicitly corrected; the original option D was 2(x³ + 1)(3x²).",
          "paper": "WS-1",
          "marks": 1,
          "sourceNote": "SOURCE MISPRINT: No original option is correct. Digital option D replaced to make the question usable. Original D: 2(x³ + 1)(3x²).",
          "originalOptions": {
            "A": "(x³ + 1)(3x²)",
            "B": "2(x³ + 1)",
            "C": "2(3x²)",
            "D": "2(x³ + 1)(3x²)"
          }
        },
        {
          "sourceNumber": 23,
          "question": "For the straight line 3y = √3 x + 3, choose the correct alternative.",
          "options": {
            "A": "dy/dx = tan 30°",
            "B": "dy/dx = cot 30°",
            "C": "y-intercept is 1",
            "D": "Both A and C"
          },
          "answer": "D",
          "explanation": "Rearrange: y = (1/√3)x + 1. The slope is 1/√3 = tan 30° (A), and the y-intercept is 1 (C). cot 30° = √3, so B is false. The printed source says D: “All correct”, which is false. Digital option D is corrected to “Both A and C” for the single-choice format.",
          "paper": "WS-1",
          "marks": 1,
          "sourceNote": "SOURCE MISPRINT: Original options A and C are both true, but D reads “All correct” (false). Digital D changed to “Both A and C”; original alternatives preserved in originalOptions.",
          "originalOptions": {
            "A": "dy/dx = tan 30°",
            "B": "dy/dx = cot 30°",
            "C": "y-intercept is 1",
            "D": "All correct"
          }
        },
        {
          "sourceNumber": 24,
          "question": "If the radius of a spherical bubble increases with time according to r = 0.5t, find the rate of change of its volume at t = 4 s.",
          "options": {
            "A": "8π units/s",
            "B": "4π units/s",
            "C": "2π units/s",
            "D": "π units/s"
          },
          "answer": "A",
          "explanation": "V = (4/3)πr³, so dV/dt = 4πr²(dr/dt). At t = 4 s, r = 2 and dr/dt = 0.5, giving dV/dt = 4π(2²)(0.5) = 8π volume-units/s. If radius is in metres, the correct unit is m³/s; the source options print only “units/s”.",
          "paper": "WS-1",
          "marks": 1,
          "sourceNote": "The source options write “units/s”. The rate of volume change has dimensions of length cubed per time."
        },
        {
          "sourceNumber": 25,
          "question": "Find the slope of the tangent to y = ln(sin x) at x = 3π/4.",
          "options": {
            "A": "1",
            "B": "−1",
            "C": "ln √2",
            "D": "1/√2"
          },
          "answer": "B",
          "explanation": "dy/dx = cos x/sin x = cot x. At x = 3π/4, cot x = (−√2/2)/(√2/2) = −1.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 26,
          "question": "Charge through a conductor is q = 2t² + 3t + 1 coulombs. Find the current i = dq/dt at the end of the 5th second.",
          "options": {
            "A": "23",
            "B": "66",
            "C": "31/6",
            "D": "5"
          },
          "answer": "A",
          "explanation": "i = dq/dt = 4t + 3 amperes. At t = 5 s, i = 4×5 + 3 = 23 A.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 27,
          "question": "A heated metallic disc has area A = 4t² + 2t square metres (t in seconds). Find dA/dt at t = 4 s.",
          "options": {
            "A": "72 m²/s",
            "B": "72 m²",
            "C": "34 m²/s",
            "D": "34 m²"
          },
          "answer": "C",
          "explanation": "dA/dt = 8t + 2. Substituting t = 4 s gives 8×4 + 2 = 34 m²/s.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 28,
          "question": "A car moves in a straight line with s = 12t + 3t² − 2t³ (s in metres, t in seconds). Find its velocity at the start.",
          "options": {
            "A": "7 m/s",
            "B": "9 m/s",
            "C": "12 m/s",
            "D": "16 m/s"
          },
          "answer": "C",
          "explanation": "Velocity is ds/dt = 12 + 6t − 6t². Initially t = 0, so v(0) = 12 m/s.",
          "paper": "WS-1",
          "marks": 1
        },
        {
          "sourceNumber": 29,
          "question": "If y = sin x + cos x, find d²y/dx².",
          "options": {
            "A": "sin x − cos x",
            "B": "cos x − sin x",
            "C": "−(sin x + cos x)",
            "D": "None of these"
          },
          "answer": "C",
          "explanation": "First derivative: dy/dx = cos x − sin x. Differentiate again: d²y/dx² = −sin x − cos x = −(sin x + cos x).",
          "paper": "WS-1",
          "marks": 1
        }
      ],
      "optimal": [],
      "achiever": []
    }
  ]
};
