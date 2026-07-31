/* Simulations - Heat and Temperature | Grade 7 */
window.simulationData = [
  {
    title: "Heat Transfer Visualizer",
    icon: "🔥",
    description: "Visualize conduction, convection, and radiation modes of heat transfer",
    html: `<!DOCTYPE html>
<html><head><style>
body{margin:0;padding:15px;background:#0a0e1a;font-family:Arial,sans-serif;color:#fff;}
.controls{background:#1a1f35;padding:12px;border-radius:10px;margin-bottom:12px;}
button{padding:8px 16px;margin:4px;border-radius:8px;border:none;background:#4f46e5;color:#fff;cursor:pointer;font-weight:700;}
button.active{background:#ef4444;}
canvas{border:2px solid #4a5568;border-radius:10px;display:block;background:#1a1f35;margin:0 auto;}
</style></head><body>
<div class="controls">
  <button onclick="showMode('conduction')" id="btn1">Conduction</button>
  <button onclick="showMode('convection')" id="btn2">Convection</button>
  <button onclick="showMode('radiation')" id="btn3">Radiation</button>
</div>
<canvas id="simCanvas" width="500" height="300"></canvas>
<script>
const canvas=document.getElementById('simCanvas'),ctx=canvas.getContext('2d');
let mode='conduction',time=0;
function showMode(m){mode=m;document.querySelectorAll('button').forEach(b=>b.classList.remove('active'));document.getElementById('btn'+(m==='conduction'?1:m==='convection'?2:3)).classList.add('active');}
function draw(){
  time+=0.02;ctx.clearRect(0,0,500,300);ctx.fillStyle='#1a1f35';ctx.fillRect(0,0,500,300);
  if(mode==='conduction'){
    ctx.fillStyle='#ef4444';ctx.fillRect(50,100,80,100);ctx.fillStyle='#fff';ctx.fillText('Hot End',60,220);
    ctx.fillStyle='#3b82f6';ctx.fillRect(370,100,80,100);ctx.fillStyle='#fff';ctx.fillText('Cold End',380,220);
    for(let i=0;i<5;i++){let x=150+i*50,h=100-Math.sin(time+i)*20;ctx.fillStyle='#fbbf24';ctx.fillRect(x,150+h,30,50-h);}
    ctx.fillStyle='#fff';ctx.fillText('Heat Flow →',200,80);
  }else if(mode==='convection'){
    ctx.fillStyle='#ef4444';ctx.fillRect(200,250,100,30);ctx.fillStyle='#fff';ctx.fillText('Heat Source',210,295);
    for(let i=0;i<6;i++){let x=250+Math.cos(time+i*Math.PI/3)*60,y=150+Math.sin(time+i*Math.PI/3)*80;ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(x,y,8,0,Math.PI*2);ctx.fill();}
    ctx.strokeStyle='#fbbf24';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(250,250);ctx.lineTo(250,100);ctx.stroke();
  }else{
    ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(250,150,40,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#fff';ctx.fillText('Heat Source',220,155);
    for(let i=0;i<8;i++){let angle=time*2+i*Math.PI/4,x=250+Math.cos(angle)*80,y=150+Math.sin(angle)*80;ctx.strokeStyle='#ef4444';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(290,150);ctx.lineTo(x,y);ctx.stroke();}
  }
  ctx.fillStyle='#fff';ctx.font='14px Arial';ctx.fillText(mode.toUpperCase(),220,280);
  requestAnimationFrame(draw);
}
draw();
</script></body></html>`
  }
];
