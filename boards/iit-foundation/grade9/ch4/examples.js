window.iitExamplesData = [
  {
    no: 1,
    question: String.raw`Differentiate the following with respect to \(x\):
<div class="ex-subparts">
  <div class="ex-sub"><span class="ex-subno">(i)</span><span class="ex-subtext">\( 2020\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(ii)</span><span class="ex-subtext">\( \pi^2\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(iii)</span><span class="ex-subtext">\( \pi e\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(iv)</span><span class="ex-subtext">\( e^{-5}\)</span></div>
</div>`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
A constant does not change with \(x\), so its derivative is zero.
<div class="sol-steps">
<div><b>(i)</b><span>\(\frac{d}{dx}(2020)=\boxed{0}\)</span></div>
<div><b>(ii)</b><span>\(\frac{d}{dx}(\pi^2)=\boxed{0}\)</span></div>
<div><b>(iii)</b><span>\(\frac{d}{dx}(\pi e)=\boxed{0}\)</span></div>
<div><b>(iv)</b><span>\(\frac{d}{dx}(e^{-5})=\boxed{0}\)</span></div>
</div>`
  },
  {
    no: 2,
    question: String.raw`Differentiate the following with respect to \(x\):
<div class="ex-subparts">
  <div class="ex-sub"><span class="ex-subno">(i)</span><span class="ex-subtext">\( 16x^8\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(ii)</span><span class="ex-subtext">\( x^{-4}\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(iii)</span><span class="ex-subtext">\( x^{5/2}\)</span></div>
</div>`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
Use the power rule:
\[
\frac{d}{dx}(x^n)=nx^{n-1}.
\]
<div class="sol-steps">
<div><b>(i)</b><span>\(\frac{d}{dx}(16x^8)=16(8x^7)=\boxed{128x^7}\)</span></div>
<div><b>(ii)</b><span>\(\frac{d}{dx}(x^{-4})=-4x^{-5}=\boxed{-\frac4{x^5}}\)</span></div>
<div><b>(iii)</b><span>\(\frac{d}{dx}(x^{5/2})=\boxed{\frac52x^{3/2}}\)</span></div>
</div>`
  },
  {
    no: 3,
    question: String.raw`Differentiate the following with respect to \(x\):
<div class="ex-subparts">
  <div class="ex-sub"><span class="ex-subno">(i)</span><span class="ex-subtext">\( 4x^3-10-6x^2\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(ii)</span><span class="ex-subtext">\( x^2+3x+\frac{3}{x}\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(iii)</span><span class="ex-subtext">\( \tan(3x+1)\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(iv)</span><span class="ex-subtext">\( \cos 3x\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(v)</span><span class="ex-subtext">\( \sqrt{\sin x}\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(vi)</span><span class="ex-subtext">\( 3x^2+12x-\frac{11}{x}\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(vii)</span><span class="ex-subtext">\( \tan x+2\sin x+3\cos x-\frac{1}{2}\log x-e^x\)</span></div>
</div>`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
Differentiate each term separately.
<div class="sol-steps">
<div><b>(i)</b><span>\(12x^2-12x=\boxed{12x^2-12x}\)</span></div>
<div><b>(ii)</b><span>\(2x+3-\frac3{x^2}=\boxed{2x+3-\frac3{x^2}}\)</span></div>
<div><b>(iii)</b><span>Let \(u=3x+1\). Then \(u'=3\). Hence \(\frac{d}{dx}(\tan u)=\sec^2u\,u'=\boxed{3\sec^2(3x+1)}\).</span></div>
<div><b>(iv)</b><span>\(\frac{d}{dx}(\cos3x)=-3\sin3x=\boxed{-3\sin3x}\)</span></div>
<div><b>(v)</b><span>\(\frac{d}{dx}(\sin x)^{1/2}=\frac12(\sin x)^{-1/2}\cos x=\boxed{\frac{\cos x}{2\sqrt{\sin x}}}\)</span></div>
<div><b>(vi)</b><span>\(6x+12+\frac{11}{x^2}=\boxed{6x+12+\frac{11}{x^2}}\)</span></div>
<div><b>(vii)</b><span>\(\boxed{\sec^2x+2\cos x-3\sin x-\frac1{2x}-e^x}\)</span></div>
</div>`
  },
  {
    no: 4,
    question: String.raw`Differentiate with respect to \(x\) using the product rule:
<div class="ex-subparts">
  <div class="ex-sub"><span class="ex-subno">(i)</span><span class="ex-subtext">\( (5x+2)(4-3x)\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(ii)</span><span class="ex-subtext">\( \sqrt{x}\,\sec x\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(iii)</span><span class="ex-subtext">\( (ax^2+bx+c)(x-d)\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(iv)</span><span class="ex-subtext">\( x^3\sin x\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(v)</span><span class="ex-subtext">\( x\sin x\log x\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(vi)</span><span class="ex-subtext">\( (1+2\tan x)(5+4\cos x)\)</span></div>
</div>`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
Use the product rule:
\[
(uv)'=u'v+uv'.
\]
<div class="sol-steps">
<div><b>(i)</b><span>\(5(4-3x)-3(5x+2)=\boxed{14-30x}\)</span></div>
<div><b>(ii)</b><span>\(\frac{\sec x}{2\sqrt{x}}+\sqrt{x}\sec x\tan x=\boxed{\frac{\sec x(1+2x\tan x)}{2\sqrt{x}}}\)</span></div>
<div><b>(iii)</b><span>\((2ax+b)(x-d)+(ax^2+bx+c)=\boxed{3ax^2+2(b-ad)x+c-bd}\)</span></div>
<div><b>(iv)</b><span>\(3x^2\sin x+x^3\cos x=\boxed{x^2(3\sin x+x\cos x)}\)</span></div>
<div><b>(v)</b><span>\(\sin x\log x+x\cos x\log x+\sin x=\boxed{\sin x(1+\log x)+x\log x\cos x}\)</span></div>
<div><b>(vi)</b><span>\(2\sec^2x(5+4\cos x)-4\sin x(1+2\tan x)\)</span></div>
</div>`
  },
  {
    no: 5,
    question: String.raw`Differentiate with respect to \(x\) using the quotient rule:
<div class="ex-subparts">
  <div class="ex-sub"><span class="ex-subno">(i)</span><span class="ex-subtext">\( \frac{e^x}{x}\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(ii)</span><span class="ex-subtext">\( \frac{x^3+3x+1}{x^2-x+1}\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(iii)</span><span class="ex-subtext">\( \frac{x^4+1}{x^2-1}\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(iv)</span><span class="ex-subtext">\( \frac{x}{1+\tan x}\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(v)</span><span class="ex-subtext">\( \frac{\log x}{x}\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(vi)</span><span class="ex-subtext">\( \frac{\sec x-1}{\sec x+1}\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(vii)</span><span class="ex-subtext">\( \frac{\sin x+\cos x}{\sin x-\cos x}\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(viii)</span><span class="ex-subtext">\( \frac{ax^2+bx+c}{px^2+qx+r}\)</span></div>
</div>`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
Use the quotient rule:
\[
\left(\frac uv\right)'=\frac{vu'-uv'}{v^2}.
\]
<div class="sol-steps">
<div><b>(i)</b><span>\(\frac{xe^x-e^x}{x^2}=\boxed{\frac{e^x(x-1)}{x^2}}\)</span></div>
<div><b>(ii)</b><span>\(\boxed{\frac{(3x^2+3)(x^2-x+1)-(x^3+3x+1)(2x-1)}{(x^2-x+1)^2}}\)</span></div>
<div><b>(iii)</b><span>\(\boxed{\frac{2x(x^4-2x^2-1)}{(x^2-1)^2}}\)</span></div>
<div><b>(iv)</b><span>\(\boxed{\frac{1+\tan x-x\sec^2x}{(1+\tan x)^2}}\)</span></div>
<div><b>(v)</b><span>\(\frac{1-\log x}{x^2}\)</span></div>
<div><b>(vi)</b><span>\(\frac{2\sec x\tan x}{(\sec x+1)^2}\)</span></div>
<div><b>(vii)</b><span>\(-\frac2{(\sin x-\cos x)^2}\)</span></div>
<div><b>(viii)</b><span>\(\frac{(2ax+b)(px^2+qx+r)-(ax^2+bx+c)(2px+q)}{(px^2+qx+r)^2}\)</span></div>
</div>`
  },
  {
    no: 6,
    question: String.raw`Differentiate with respect to \(x\):
<div class="ex-subparts">
  <div class="ex-sub"><span class="ex-subno">(i)</span><span class="ex-subtext">\( (x\sin x)^3\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(ii)</span><span class="ex-subtext">\( \sqrt{5-6x^2}\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(iii)</span><span class="ex-subtext">\( \tan\sqrt{x}\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(iv)</span><span class="ex-subtext">\( \sec(\sec x)\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(v)</span><span class="ex-subtext">\( \frac{1-\cos x}{1+\cos x}\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(vi)</span><span class="ex-subtext">\( e^x\log(\sin 2x)\)</span></div>
</div>`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
Apply the chain rule where one function occurs inside another.
<div class="sol-steps">
<div><b>(i)</b><span>Let \(u=x\sin x\). Then \(u'=\sin x+x\cos x\). Hence \(\boxed{3(x\sin x)^2(\sin x+x\cos x)}\).</span></div>
<div><b>(ii)</b><span>\(\frac12(5-6x^2)^{-1/2}(-12x)=\boxed{-\frac{6x}{\sqrt{5-6x^2}}}\)</span></div>
<div><b>(iii)</b><span>\(\sec^2\sqrt{x}\cdot\frac1{2\sqrt{x}}=\boxed{\frac{\sec^2\sqrt{x}}{2\sqrt{x}}}\)</span></div>
<div><b>(iv)</b><span>\(\boxed{\sec(\sec x)\tan(\sec x)\sec x\tan x}\)</span></div>
<div><b>(v)</b><span>By quotient rule, \(\boxed{\frac{2\sin x}{(1+\cos x)^2}}\).</span></div>
<div><b>(vi)</b><span>By product and chain rules, \(\boxed{e^x[\log(\sin2x)+2\cot2x]}\).</span></div>
</div>`
  },
  {
    no: 7,
    question: String.raw`Find the velocity of a particle moving on a line at \(t=3\,\mathrm{s}\), if its position \(s\) is measured in metres:
<div class="ex-subparts">
  <div class="ex-sub"><span class="ex-subno">(i)</span><span class="ex-subtext">\( s=\log t\)</span></div>
  <div class="ex-sub"><span class="ex-subno">(ii)</span><span class="ex-subtext">\( s=\sin\!\left(\frac{t}{9}\right)\)</span></div>
</div>`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
Velocity is
\[
v=\frac{ds}{dt}.
\]
<div class="sol-steps">
<div><b>(i)</b><span>\(v=\frac1t\). At \(t=3\,\mathrm s\), \(\boxed{v=\frac13\,\mathrm{m\,s^{-1}}}\).</span></div>
<div><b>(ii)</b><span>\(v=\frac19\cos(\frac t9)\). At \(t=3\,\mathrm s\), \(\boxed{v=\frac{\cos(1/3)}9\,\mathrm{m\,s^{-1}}}\).</span></div>
</div>`
  },
  {
    no: 8,
    question: String.raw`At time \(t\), the displacement of a particle moving in a straight line is given by\( x=-4t^2+2t\)
Find the velocity and acceleration when \( t=\frac{1}{2}\,\text{s}\).`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
Given \(x=-4t^2+2t\).
\[
v=\frac{dx}{dt}=-8t+2.
\]
At \(t=\frac12\,\mathrm s\),
\[
v=-8\left(\frac12\right)+2=\boxed{-2\,\mathrm{m\,s^{-1}}}.
\]
Also,
\[
a=\frac{dv}{dt}=\boxed{-8\,\mathrm{m\,s^{-2}}}.
\]`
  },
  {
    no: 9,
    question: String.raw`A car is running on a straight road. The distance travelled \(s\) and time \(t\) are connected by\( s=t^2-2t\)
where \(t\) is measured in hours and \(s\) in kilometres. When the odometer reading is \(15\,\text{km}\), what is the speedometer reading?<br>
[Odometer measures \(s\) and the speedometer measures velocity.]`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
The odometer gives \(s=15\,\mathrm{km}\):
\[
15=t^2-2t\Rightarrow t^2-2t-15=0
\Rightarrow(t-5)(t+3)=0.
\]
For positive time, \(t=5\,\mathrm h\).
\[
v=\frac{ds}{dt}=2t-2=2(5)-2=\boxed{8\,\mathrm{km\,h^{-1}}}.
\]`
  },
  {
    no: 10,
    question: String.raw`The side of a square sheet of metal is increasing at \(3\,\text{cm min}^{-1}\). At what rate is the area increasing when the side is \(10\,\text{cm}\) long?`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
For a square, \(A=x^2\). Therefore,
\[
\frac{dA}{dt}=2x\frac{dx}{dt}.
\]
Using \(x=10\,\mathrm{cm}\) and \(\frac{dx}{dt}=3\,\mathrm{cm\,min^{-1}}\),
\[
\frac{dA}{dt}=2(10)(3)=\boxed{60\,\mathrm{cm^2\,min^{-1}}}.
\]`
  },
  {
    no: 11,
    question: String.raw`A stone is dropped into a quiet pond and waves move in circles at a speed of \(4\,\text{cm s}^{-1}\). At the instant when the radius of the circular wave is \(10\,\text{cm}\), how fast is the enclosed area increasing?`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
For the circular wave, \(A=\pi r^2\). Hence,
\[
\frac{dA}{dt}=2\pi r\frac{dr}{dt}.
\]
At \(r=10\,\mathrm{cm}\) and \(\frac{dr}{dt}=4\,\mathrm{cm\,s^{-1}}\),
\[
\frac{dA}{dt}=2\pi(10)(4)=\boxed{80\pi\,\mathrm{cm^2\,s^{-1}}}.
\]`
  },
  {
    no: 12,
    question: String.raw`A particle starts rotating from rest according to the formula\( \theta=\frac{3t^2}{20}-\frac{t^2}{3}\)
Find the angular velocity and the acceleration at the end of \(5\,\text{s}\).`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
Using the equation visible in the supplied source,
\[
\theta=\frac{3t^2}{20}-\frac{t^2}{3}.
\]
\[
\omega=\frac{d\theta}{dt}=\frac{3t}{10}-\frac{2t}{3}.
\]
At \(t=5\,\mathrm s\),
\[
\omega=\frac32-\frac{10}{3}=\boxed{-\frac{11}{6}\,\mathrm{rad\,s^{-1}}}.
\]
\[
\alpha=\frac{d\omega}{dt}=\frac3{10}-\frac23=\boxed{-\frac{11}{30}\,\mathrm{rad\,s^{-2}}}.
\]
<div class="sol-note">The printed answer visible in the supplied photograph does not agree with the visible equation; this solution follows the displayed equation.</div>`
  },
  {
    no: 13,
    question: String.raw`The area \(A\) of a dot of ink, in \(\text{cm}^2\), is growing such that\( A=3t^2+\frac{t}{5}+7\)
Calculate the rate of increase of area after \(5\,\text{s}\).`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
Given
\[
A=3t^2+\frac t5+7.
\]
Therefore,
\[
\frac{dA}{dt}=6t+\frac15.
\]
At \(t=5\,\mathrm s\),
\[
\frac{dA}{dt}=30+\frac15=\boxed{30.2\,\mathrm{cm^2\,s^{-1}}}.
\]`
  },
  {
    no: 14,
    question: String.raw`A particle starts rotating from rest according to the formula\( \theta=\frac{t^2}{64}-\frac{t}{8}\)
where \(\theta\) is the angle in radians and \(t\) is in seconds. Find the angular velocity and angular acceleration at the end of \(4\,\text{s}\).`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
Using the equation visible in the supplied source,
\[
\theta=\frac{t^2}{64}-\frac t8.
\]
\[
\omega=\frac{d\theta}{dt}=\frac t{32}-\frac18.
\]
At \(t=4\,\mathrm s\), \(\boxed{\omega=0}\).
\[
\alpha=\frac{d\omega}{dt}=\boxed{\frac1{32}\,\mathrm{rad\,s^{-2}}}.
\]
<div class="sol-note">The printed answer visible in the supplied photograph does not agree with the visible equation; this solution follows the displayed equation.</div>`
  },
  {
    no: 16,
    question: String.raw`The displacement \(x\) of a particle varies with time \(t\) as\( x=4t^2-15t+25\)
Find:<div class="ex-subparts"><div class="ex-sub"><span class="ex-subno">(i)</span><span class="ex-subtext">the position, velocity and acceleration of the particle at \(t=0\),</span></div><div class="ex-sub"><span class="ex-subno">(ii)</span><span class="ex-subtext">when the velocity of the particle becomes zero, and</span></div><div class="ex-sub"><span class="ex-subno">(iii)</span><span class="ex-subtext">whether the motion has uniform acceleration.</span></div></div>`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
Given
\[
x=4t^2-15t+25.
\]
Thus,
\[
v=8t-15,\qquad a=8.
\]
<div class="sol-steps">
<div><b>(i)</b><span>At \(t=0\): \(x=25\,\mathrm m,\;v=-15\,\mathrm{m\,s^{-1}},\;a=8\,\mathrm{m\,s^{-2}}\).</span></div>
<div><b>(ii)</b><span>\(v=0\Rightarrow8t-15=0\Rightarrow\boxed{t=\frac{15}{8}=1.875\,\mathrm s}\).</span></div>
<div><b>(iii)</b><span>Since \(a=8\,\mathrm{m\,s^{-2}}\) is constant, the acceleration is uniform.</span></div>
</div>`
  },
  {
    no: 17,
    question: String.raw`The distance \(x\) of a particle moving in one dimension, under the action of a constant force, is related to time \(t\) by\( t=\sqrt{x}+3\)
where \(x\) is in metres and \(t\) is in seconds. Find the displacement of the particle when its velocity is zero.`,
    options: {},
    answer: String.raw`<div class="sol-title">Solution</div>
Given
\[
t=\sqrt{x}+3.
\]
So \(\sqrt{x}=t-3\), and
\[
x=(t-3)^2.
\]
Therefore,
\[
v=\frac{dx}{dt}=2(t-3).
\]
For \(v=0\), \(t=3\,\mathrm s\). Hence,
\[
x=(3-3)^2=\boxed{0\,\mathrm m}.
\]`
  }
];
window.examplesData = window.iitExamplesData;
