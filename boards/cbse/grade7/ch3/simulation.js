/* Simulations - Electric Current and its Effects | Grade 7 */
window.simulationData = [
  {
    title: "Electromagnet Simulator",
    icon: "🧲",
    description: "Build an electromagnet and see how it attracts iron objects",
    html: `<!DOCTYPE html>
<html><head><style>
body{margin:0;padding:15px;background:#0a0e1a;font-family:Arial,sans-serif;color:#fff;}
.controls{background:#1a1f35;padding:12px;border-radius:10px;margin-bottom:12px;}
button{padding:8px 16px;margin:4px;border-radius:8px;border:none;background:#4f46e5;color:#fff;cursor:pointer;font-weight:700;}
canvas{border:2px solid #4a5568;border-radius:10px;display:block;background:#1a1f35;margin:0 auto;}
</style></head><body>
<div class="controls"><button onclick="toggle()" id="btn">Turn ON</button></div>
<canvas id="canvas" width="500" height="300"></canvas>
<script>
const canvas=document.getElementById('canvas'),ctx=canvas.getContext('2d');
let on=false,items=[];
for(let i=0;i<10;i++)items.push({x:Math.random()*400+50,y:Math.random()*50+230,vx:0,vy:0});
function toggle(){on=!on;document.getElementById('btn').textContent=on?'Turn OFF':'Turn ON';}
function draw(){
  ctx.clearRect(0,0,500,300);ctx.fillStyle='#1a1f35';ctx.fillRect(0,0,500,300);
  // Coil
  ctx.strokeStyle='#fbbf24';ctx.lineWidth=4;
  for(let i=0;i<8;i++){ctx.beginPath();ctx.arc(250,100+i*12,20,0,Math.PI*2);ctx.stroke();}
  // Core
  ctx.fillStyle='#7c3aed';ctx.fillRect(230,80,40,120);
  // Magnetic field
  if(on){ctx.strokeStyle='rgba(124,58,237,0.3)';ctx.lineWidth=2;for(let i=0;i<5;i++){ctx.beginPath();ctx.arc(250,140,60+i*15,0,Math.PI*2);ctx.stroke();}}
  // Iron pieces
  items.forEach(it=>{
    if(on&&Math.abs(it.x-250)<100&&it.y>180){it.vy-=0.5;it.vx+=(250-it.x)*0.02;}
    it.vy+=0.2;it.vx*=0.95;it.vy*=0.9;it.x+=it.vx;it.y+=it.vy;
    if(it.y>275){it.y=275;it.vy=0;}
    ctx.fillStyle='#94a3b8';ctx.beginPath();ctx.arc(it.x,it.y,8,0,Math.PI*2);ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw();
</script></body></html>`
  }
];
