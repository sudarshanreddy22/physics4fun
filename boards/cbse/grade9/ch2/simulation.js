/* Simulations - Force and Laws of Motion | Grade 9 */
window.simulationData = [
  {
    title: "Newton's Laws Visualizer",
    icon: "⚙️",
    description: "Visualize Newton's laws with interactive force demonstrations",
    html: `<!DOCTYPE html>
<html><head><style>
body{margin:0;padding:15px;background:#0a0e1a;font-family:Arial,sans-serif;color:#fff;}
.controls{background:#1a1f35;padding:12px;border-radius:10px;margin-bottom:12px;}
button{padding:8px 16px;margin:4px;border-radius:8px;border:none;background:#4f46e5;color:#fff;cursor:pointer;font-weight:700;}
button.active{background:#22c55e;}
canvas{border:2px solid #4a5568;border-radius:10px;display:block;background:#1a1f35;margin:0 auto;}
</style></head><body>
<div class="controls">
  <button onclick="setLaw(1)" id="btn1">1st Law</button>
  <button onclick="setLaw(2)" id="btn2">2nd Law</button>
  <button onclick="setLaw(3)" id="btn3">3rd Law</button>
</div>
<canvas id="canvas" width="500" height="250"></canvas>
<script>
const canvas=document.getElementById('canvas'),ctx=canvas.getContext('2d');
let law=1,t=0,obj={x:50,vx:0.5,m:10};
function setLaw(l){law=l;document.querySelectorAll('button').forEach(b=>b.classList.remove('active'));document.getElementById('btn'+l).classList.add('active');}
function draw(){
  t+=0.02;ctx.clearRect(0,0,500,250);ctx.fillStyle='#1a1f35';ctx.fillRect(0,0,500,250);
  ctx.fillStyle='#fff';ctx.fillText('Newton\'s '+['','First','Second','Third'][law]+' Law',180,30);
  if(law===1){ctx.fillStyle='#4f46e5';ctx.fillRect(obj.x,200,40,30);obj.x+=obj.vx;if(obj.x>460||obj.x<0)obj.vx*=-1;ctx.fillText('Object continues motion unless force acts',120,220);}
  else if(law===2){ctx.fillStyle='#ef4444';ctx.beginPath();ctx.arc(250,125,20+obj.m,0,Math.PI*2);ctx.fill();ctx.fillText('F=ma (larger mass needs more force)',150,220);}
  else{ctx.fillStyle='#22c55e';ctx.fillRect(200,100,40,40);ctx.fillStyle='#fbbf24';ctx.fillRect(260,100,40,40);ctx.fillText('Action ← → Reaction',180,220);}
  requestAnimationFrame(draw);
}
draw();
</script></body></html>`
  }
];
