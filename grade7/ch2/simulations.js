/* Simulations - Motion and Time | Grade 7 */
window.simulationsData = [
  {
    title: "Distance-Time Graph Plotter",
    icon: "📈",
    description: "Plot and visualize distance-time graphs for different motions",
    html: `<!DOCTYPE html>
<html><head><style>
body{margin:0;padding:15px;background:#0a0e1a;font-family:Arial,sans-serif;color:#fff;}
.controls{background:#1a1f35;padding:12px;border-radius:10px;margin-bottom:12px;}
button{padding:8px 16px;margin:4px;border-radius:8px;border:none;background:#4f46e5;color:#fff;cursor:pointer;font-weight:700;}
button.active{background:#22c55e;}
canvas{border:2px solid #4a5568;border-radius:10px;display:block;background:#fff;margin:0 auto;}
</style></head><body>
<div class="controls">
  <button onclick="setMotion('uniform')" id="btn1">Uniform Motion</button>
  <button onclick="setMotion('accelerated')" id="btn2">Accelerated</button>
  <button onclick="setMotion('rest')" id="btn3">At Rest</button>
</div>
<canvas id="graphCanvas" width="500" height="300"></canvas>
<script>
const canvas=document.getElementById('graphCanvas'),ctx=canvas.getContext('2d');
let motion='uniform',t=0;
function setMotion(m){motion=m;document.querySelectorAll('button').forEach(b=>b.classList.remove('active'));document.getElementById('btn'+(m==='uniform'?1:m==='accelerated'?2:3)).classList.add('active');}
function draw(){
  t+=0.5;ctx.clearRect(0,0,500,300);ctx.fillStyle='#fff';ctx.fillRect(0,0,500,300);
  ctx.strokeStyle='#000';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(50,20);ctx.lineTo(50,270);ctx.lineTo(480,270);ctx.stroke();
  ctx.fillStyle='#000';ctx.fillText('Distance',15,145);ctx.fillText('Time',265,290);
  ctx.strokeStyle='#e74c3c';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(50,270);
  if(motion==='uniform'){ctx.lineTo(450,50);}
  else if(motion==='accelerated'){for(let i=0;i<=400;i+=10){ctx.lineTo(50+i,270-i*i/800);}}
  else{ctx.lineTo(450,270);}
  ctx.stroke();
  ctx.fillStyle='#000';ctx.fillText(motion.toUpperCase()+' MOTION',180,20);
  requestAnimationFrame(draw);
}
draw();
</script></body></html>`
  }
];
