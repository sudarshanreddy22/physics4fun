window.iitFormulasData = [
 {title:'Differentiation — Fundamental Rules',items:[
  {name:'Definition of derivative',formula:String.raw`f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}`},
  {name:'Constant',formula:String.raw`\frac{d}{dx}(c)=0`},
  {name:'Power rule',formula:String.raw`\frac{d}{dx}(x^n)=nx^{n-1}`},
  {name:'Constant multiple',formula:String.raw`\frac{d}{dx}[cf(x)]=cf'(x)`},
  {name:'Sum / difference',formula:String.raw`\frac{d}{dx}[u\pm v]=u'\pm v'`},
  {name:'Product rule',formula:String.raw`(uv)'=u'v+uv'`},
  {name:'Quotient rule',formula:String.raw`\left(\frac uv\right)'=\frac{vu'-uv'}{v^2}`},
  {name:'Chain rule',formula:String.raw`\frac{dy}{dx}=\frac{dy}{du}\frac{du}{dx}`}]},
 {title:'Differentiation — Standard Functions',items:[
  {name:'Exponential',formula:String.raw`\frac{d}{dx}(e^x)=e^x`},
  {name:'General exponential',formula:String.raw`\frac{d}{dx}(a^x)=a^x\ln a`},
  {name:'Natural logarithm',formula:String.raw`\frac{d}{dx}(\ln|x|)=\frac1x`},
  {name:'Sine and cosine',formula:String.raw`\frac{d}{dx}(\sin x)=\cos x,\quad\frac{d}{dx}(\cos x)=-\sin x`},
  {name:'Tangent',formula:String.raw`\frac{d}{dx}(\tan x)=\sec^2x`},
  {name:'Second derivative',formula:String.raw`f''(x)=\frac{d^2y}{dx^2}`}]},
 {title:'Integration — Basic Rules',items:[
  {name:'Power rule',formula:String.raw`\int x^n\,dx=\frac{x^{n+1}}{n+1}+C`,note:'For n ≠ −1'},
  {name:'Constant',formula:String.raw`\int k\,dx=kx+C`},
  {name:'Linearity',formula:String.raw`\int(af+bg)\,dx=a\int f\,dx+b\int g\,dx`},
  {name:'Reciprocal',formula:String.raw`\int\frac1x\,dx=\ln|x|+C`},
  {name:'Exponential',formula:String.raw`\int e^x\,dx=e^x+C`},
  {name:'General exponential',formula:String.raw`\int a^x\,dx=\frac{a^x}{\ln a}+C`,note:'a > 0, a ≠ 1'}]},
 {title:'Integration — Trigonometric and Definite Integrals',items:[
  {name:'Sine',formula:String.raw`\int\sin x\,dx=-\cos x+C`},
  {name:'Cosine',formula:String.raw`\int\cos x\,dx=\sin x+C`},
  {name:'Secant squared',formula:String.raw`\int\sec^2x\,dx=\tan x+C`},
  {name:'Definite integral',formula:String.raw`\int_a^b f(x)\,dx=F(b)-F(a)`,note:'Where F′(x) = f(x)'},
  {name:'Area under velocity–time graph',formula:String.raw`\Delta x=\int_{t_1}^{t_2}v(t)\,dt`},
  {name:'Velocity and acceleration',formula:String.raw`v=\frac{dx}{dt},\qquad a=\frac{dv}{dt}`}]}
];
