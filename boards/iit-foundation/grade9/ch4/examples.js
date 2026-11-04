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
    answer: String.raw`
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
    answer: String.raw`
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
    answer: String.raw`
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
    answer: String.raw`
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
    answer: String.raw`
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
    answer: String.raw`
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
    answer: String.raw`
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
    answer: String.raw`
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
    answer: String.raw`
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
    answer: String.raw`
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
    answer: String.raw`
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
    answer: String.raw`
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
    answer: String.raw`
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
    answer: String.raw`
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
    answer: String.raw`
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
    answer: String.raw`
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

// Four independent Calculus tabs. Original supplied questions are retained unchanged.
window.calculusExamplesData = {
  "illustrations-1": [
    {no:1,question:String.raw`Differentiate (i) \(x^4\), (ii) \(x^{-2}\), (iii) \(5x^7\).`,options:{},answer:String.raw`\[\begin{aligned}\frac{d}{dx}(x^4)&=4x^3\\[4pt]\frac{d}{dx}(x^{-2})&=-2x^{-3}=-\frac{2}{x^3}\\[4pt]\frac{d}{dx}(5x^7)&=35x^6\end{aligned}\]`},
    {no:2,question:String.raw`Differentiate (i) \(3\sqrt{x}\), (ii) \(\frac4{x^2}\), (iii) \(6x^0\).`,options:{},answer:String.raw`\[\begin{aligned}\frac{d}{dx}(3\sqrt{x})&=\frac{3}{2\sqrt{x}}\\[4pt]\frac{d}{dx}\left(\frac4{x^2}\right)&=-\frac8{x^3}\\[4pt]\frac{d}{dx}(6x^0)&=0\end{aligned}\]`},
    {no:3,question:String.raw`Find the derivative of (i) \(\frac23x^4-\frac4{x^3}+9\), (ii) \(y=\frac{3x^3-5x}{2x}\).`,options:{},answer:String.raw`\[\begin{aligned}\frac{d}{dx}\left(\frac23x^4-4x^{-3}+9\right)&=\frac83x^3+12x^{-4}\\[4pt]&=\frac83x^3+\frac{12}{x^4}\\[8pt]y&=\frac32x^2-\frac52\\[4pt]\frac{dy}{dx}&=3x\end{aligned}\]`},
    {no:8,question:String.raw`If \(y=x^2\sin x\), find \(\frac{dy}{dx}\).`,options:{},answer:String.raw`\[\begin{aligned}\frac{dy}{dx}&=\sin x\frac{d(x^2)}{dx}+x^2\frac{d(\sin x)}{dx}\\[4pt]&=2x\sin x+x^2\cos x\end{aligned}\]`},
    {no:9,question:String.raw`Find the rate of change of \(y=3\sqrt{x}\ln(2x)\) with respect to \(x\).`,options:{},answer:String.raw`\[\begin{aligned}\frac{dy}{dx}&=3\ln(2x)\frac{d\sqrt{x}}{dx}+3\sqrt{x}\frac{d\ln(2x)}{dx}\\[4pt]&=\frac{3\ln(2x)}{2\sqrt{x}}+\frac{3}{\sqrt{x}}\\[4pt]&=\frac3{\sqrt{x}}\left(\frac12\ln(2x)+1\right)\end{aligned}\]`},
    {no:10,question:String.raw`If \(y=\frac{\sin x}{x}\), find \(\frac{dy}{dx}\).`,options:{},answer:String.raw`\[\begin{aligned}\frac{dy}{dx}&=\frac{x\frac{d(\sin x)}{dx}-\sin x\frac{d(x)}{dx}}{x^2}\\[4pt]&=\frac{x\cos x-\sin x}{x^2}\end{aligned}\]`},
    {no:11,question:String.raw`If \(y=\sin(x^2)\), find \(\frac{dy}{dx}\) using the chain rule.`,options:{},answer:String.raw`\[\begin{aligned}t&=x^2\\[4pt]\frac{dt}{dx}&=2x\\[4pt]\frac{dy}{dt}&=\cos t\\[4pt]\frac{dy}{dx}&=\frac{dy}{dt}\frac{dt}{dx}\\[4pt]&=2x\cos(x^2)\end{aligned}\]`},
    {no:15,question:String.raw`The height of a tree is \(h=3t^2+5t+2\) m. Find (i) the instantaneous rate at \(t=3\) s and (ii) the average rate from \(t=0\) to \(t=3\) s.`,options:{},answer:String.raw`\[\begin{aligned}\frac{dh}{dt}&=6t+5\\[4pt]\left.\frac{dh}{dt}\right|_{t=3}&=6(3)+5=23\ \mathrm{m/s}\\[6pt]h(3)&=44\ \mathrm m,\quad h(0)=2\ \mathrm m\\[4pt]\frac{\Delta h}{\Delta t}&=\frac{44-2}{3-0}=14\ \mathrm{m/s}\end{aligned}\]`},
    {no:16,question:String.raw`For \(x=3t^2+4t-1\), find initial velocity and initial acceleration.`,options:{},answer:String.raw`\[\begin{aligned}v&=\frac{dx}{dt}=6t+4\\[4pt]v_0&=4\ \mathrm{m/s}\\[4pt]a&=\frac{dv}{dt}=6\ \mathrm{m/s^2}\end{aligned}\]`},
    {no:17,question:String.raw`For a circle \(A=\pi r^2\), find \(\frac{dA}{dr}\) at \(r=10\) m.`,options:{},answer:String.raw`\[\begin{aligned}\frac{dA}{dr}&=2\pi r\\[4pt]\left.\frac{dA}{dr}\right|_{r=10}&=20\pi\ \mathrm m\end{aligned}\]`},
    {no:18,question:String.raw`Find the slope of the tangent to \(y=x^2+2x+4\) at \(x=0\) and \(x=-1\).`,options:{},answer:String.raw`\[\begin{aligned}m&=\frac{dy}{dx}=2x+2\\[4pt]m(0)&=2\\[4pt]m(-1)&=0\end{aligned}\]`},
    {no:19,question:String.raw`Find the minimum or maximum of \(y=x^2-4x+8\).`,options:{},answer:String.raw`\[\begin{aligned}\frac{dy}{dx}&=2x-4=0\\[4pt]x&=2\\[4pt]\frac{d^2y}{dx^2}&=2>0\quad\text{(minimum)}\\[4pt]y(2)&=4-8+8=4\end{aligned}\]`}
  ],
  "examples-1": window.iitExamplesData,
  "illustrations-2": [],
  "examples-2": []
};

// Integration content from supplied textbook photographs.
window.calculusExamplesData["illustrations-2"] = [
  {
    "no": 1,
    "question": "Integrate with respect to \\(x\\): (i) \\(x^{10}\\), (ii) \\(x^{-10}\\), (iii) \\(\\sqrt{x}\\), (iv) \\(1/\\sqrt{x}\\).",
    "options": {},
    "answer": "(i) \\(\\frac{x^{11}}{11}+C\\); (ii) \\(-\\frac1{9x^9}+C\\); (iii) \\(\\frac23x^{3/2}+C\\); (iv) \\(2\\sqrt{x}+C\\)."
  },
  {
    "no": 2,
    "question": "Integrate: (i) \\(\\frac1{\\cos^2x}\\), (ii) \\(\\frac{\\cot x}{\\sin x}\\), (iii) \\(\\frac{\\sin x}{\\cos^2x}\\), (iv) \\(\\tan^2x\\).",
    "options": {},
    "answer": "(i) \\(\\tan x+C\\); (ii) \\(-\\csc x+C\\); (iii) \\(\\sec x+C\\); (iv) \\(\\tan x-x+C\\)."
  },
  {
    "no": 3,
    "question": "Integrate: (i) \\(1/e^{-x}\\), (ii) \\(x^2/x^3\\), (iii) \\(4^x\\), (iv) \\(2^x3^{-x}\\).",
    "options": {},
    "answer": "(i) \\(e^x+C\\); (ii) \\(\\ln|x|+C\\); (iii) \\(\\frac{4^x}{\\ln4}+C\\); (iv) \\(\\frac{(2/3)^x}{\\ln(2/3)}+C\\)."
  },
  {
    "no": 4,
    "question": "Integrate: (i) \\(\\sin x+\\cos x\\), (ii) \\((x^2+1)/x^3\\), (iii) \\((1-x)/\\sqrt{x}\\).",
    "options": {},
    "answer": "(i) \\(-\\cos x+\\sin x+C\\); (ii) \\(\\ln|x|-\\frac1{2x^2}+C\\); (iii) \\(2\\sqrt{x}-\\frac23x^{3/2}+C\\)."
  },
  {
    "no": 5,
    "question": "Find \\(\\int_3^4 6x\\,dx\\).",
    "options": {},
    "answer": "\\([3x^2]_3^4=3(16-9)=\\boxed{21}\\)."
  },
  {
    "no": 6,
    "question": "Find \\(\\int_1^2(10x^2-4x+4)\\,dx\\).",
    "options": {},
    "answer": "\\([\\frac{10x^3}3-2x^2+4x]_1^2=\\boxed{\\frac{128}{6}}\\)."
  },
  {
    "no": 7,
    "question": "Find \\(\\int_0^{\\pi/3}\\cos x\\,dx\\).",
    "options": {},
    "answer": "\\([\\sin x]_0^{\\pi/3}=\\boxed{\\frac{\\sqrt3}{2}}\\)."
  },
  {
    "no": 8,
    "question": "Find \\(\\int_0^{\\pi/6}\\sin2\\theta\\,d\\theta\\).",
    "options": {},
    "answer": "\\([-\\frac12\\cos2\\theta]_0^{\\pi/6}=\\boxed{\\frac14}\\)."
  },
  {
    "no": 9,
    "question": "Find \\(\\int_{-\\infty}^0 e^{-2t}\\,dt\\).",
    "options": {},
    "answer": "This improper integral diverges: \\(e^{-2t}\\to\\infty\\) as \\(t\\to-\\infty\\). (The photographed source shows an inconsistent result; this is corrected.)"
  },
  {
    "no": 10,
    "question": "A particle has \\(v=2t^2-4t\\) m/s. Find its displacement from \\(t=0\\) to \\(t=3\\) s.",
    "options": {},
    "answer": "\\(\\int_0^3(2t^2-4t)\\,dt=[\\frac23t^3-2t^2]_0^3=0\\ \\mathrm m\\)."
  },
  {
    "no": 11,
    "question": "Find change in momentum for \\(F=4t^2-6\\) N from \\(t=1\\) to \\(t=2\\) s.",
    "options": {},
    "answer": "\\(\\int_1^2(4t^2-6)\\,dt=[\\frac43t^3-6t]_1^2=\\frac{10}{3}\\ \\mathrm{N\\,s}\\)."
  }
];
window.calculusExamplesData["examples-2"] = [
  {
    "no": 1,
    "question": "Integrate (i) \\(x(x+1)(x+2)\\), (ii) \\(\\frac{x^4-5x^3+3x}{x^2}\\), (iii) \\(\\frac1{1-\\sin x}\\).",
    "options": {},
    "answer": "(i) \\(\\frac{x^4}{4}+x^3+x^2+C\\); (ii) \\(\\frac{x^3}{3}-\\frac52x^2+3\\ln|x|+C\\); (iii) \\(\\tan x+\\sec x+C\\)."
  },
  {
    "no": 2,
    "question": "Evaluate \\(\\int(4x^2-6x+2)\\,dx\\).",
    "options": {},
    "answer": "\\(\\frac43x^3-3x^2+2x+C\\)."
  },
  {
    "no": 3,
    "question": "Evaluate \\(\\int(\\cos\\theta-\\sin\\theta+3)\\,d\\theta\\).",
    "options": {},
    "answer": "\\(\\sin\\theta+\\cos\\theta+3\\theta+C\\)."
  },
  {
    "no": 4,
    "question": "Evaluate \\(\\int(e^x+x^e+e^e)\\,dx\\).",
    "options": {},
    "answer": "\\(e^x+\\frac{x^{e+1}}{e+1}+e^e x+C\\)."
  },
  {
    "no": 5,
    "question": "Evaluate \\(\\int\\cos(2x+4)\\,dx\\).",
    "options": {},
    "answer": "\\(\\frac12\\sin(2x+4)+C\\)."
  },
  {
    "no": 6,
    "question": "Evaluate \\(\\int\\frac{dx}{4x-2}\\).",
    "options": {},
    "answer": "\\(\\frac14\\ln|4x-2|+C\\)."
  },
  {
    "no": 7,
    "question": "Evaluate \\(\\int(3x-4)^4\\,dx\\).",
    "options": {},
    "answer": "\\(\\frac1{15}(3x-4)^5+C\\)."
  },
  {
    "no": 8,
    "question": "Evaluate \\(\\int\\sin(at)\\,dt\\).",
    "options": {},
    "answer": "\\(-\\frac{\\cos(at)}a+C\\), \\(a\\ne0\\)."
  },
  {
    "no": 9,
    "question": "Evaluate \\(\\int\\frac{-5}{9\\sqrt[3]{t^2}}\\,dt\\).",
    "options": {},
    "answer": "\\(-\\frac53t^{1/3}+C\\)."
  },
  {
    "no": 10,
    "question": "Evaluate \\(\\int\\frac{2x^2+1}{x}\\,dx\\).",
    "options": {},
    "answer": "\\(x^2+\\ln|x|+C\\)."
  }
];

/* v27: presentation only. Preserve every question, worked step, formula and answer. */
(function(){
  'use strict';
  const style=document.createElement('style');
  style.id='p4f-calculus-solutions-v27';
  style.textContent=`
    #iitExamplesBody .sol-steps, #iitExamplesBody .sol-steps>div {text-align:left!important;}
    #iitExamplesBody .sol-steps>div {display:flex!important;align-items:baseline!important;justify-content:flex-start!important;gap:12px!important;margin:8px 0!important;}
    #iitExamplesBody .sol-steps>div>b {flex:0 0 34px!important;}
    #iitExamplesBody .sol-steps>div>span {flex:1!important;min-width:0!important;text-align:left!important;}
    #iitExamplesBody mjx-container[display="true"] {text-align:left!important;margin:9px 0!important;}
    #iitExamplesBody mjx-container[display="true"] mjx-math {margin-left:0!important;margin-right:auto!important;}
    #iitExamplesBody .p4f-answer-line {display:block!important;text-align:left!important;margin:7px 0!important;line-height:1.65!important;}
    #iitExamplesBody .p4f-answer-line mjx-container {text-align:left!important;}
  `;
  (document.head||document.documentElement).appendChild(style);
  const d=window.calculusExamplesData;
  if(!d)return;
  // Existing integration answers are semicolon-separated; put each intact
  // answer on its own line without changing the wording or mathematics.
  for(const key of ['illustrations-2','examples-2']){
    for(const q of (d[key]||[])){
      if(typeof q.answer!=='string'||!q.answer.includes(';'))continue;
      const parts=q.answer.split(/;\s*(?=\([ivx]+\)|\\\([ivx]+\))/i);
      if(parts.length<2)continue;
      q.answer=parts.map(x=>'<div class="p4f-answer-line">'+x.trim()+'</div>').join('');
    }
  }
})();


/* v30 — visibly pair every Differentiation Example sub-question with its solution.
   Question wording, answer maths, and all other tabs are unchanged. */
(function(){
  'use strict';
  if(typeof document==='undefined')return;
  const id='p4f-differentiation-subpart-solutions-v30';
  if(document.getElementById(id))return;
  const style=document.createElement('style');style.id=id;
  style.textContent=`
    #iitExamplesBody .sol-steps {display:flex!important;flex-direction:column!important;gap:10px!important;text-align:left!important;}
    #iitExamplesBody .sol-steps > div {display:grid!important;grid-template-columns:42px minmax(0,1fr)!important;align-items:start!important;gap:10px!important;width:100%!important;text-align:left!important;margin:0!important;}
    #iitExamplesBody .sol-steps > div > b {display:block!important;position:static!important;visibility:visible!important;opacity:1!important;flex:none!important;min-width:0!important;width:auto!important;padding:6px 3px!important;text-align:center!important;font-size:1em!important;font-weight:800!important;line-height:1.3!important;color:#1d4ed8!important;background:#dbeafe!important;border:1px solid #93c5fd!important;border-radius:7px!important;}
    #iitExamplesBody .sol-steps > div > span {display:block!important;min-width:0!important;flex:none!important;width:auto!important;overflow-wrap:anywhere!important;text-align:left!important;line-height:1.7!important;padding:4px 0!important;}
    #iitExamplesBody .sol-steps mjx-container[display=true] {text-align:left!important;margin:7px 0!important;}
    #iitExamplesBody .ex-subparts .ex-subno {font-weight:800!important;}
  `;
  (document.head||document.documentElement).appendChild(style);
})();
