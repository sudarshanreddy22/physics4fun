/* Simulations - Motion and Measurement | Grade 6 */
window.simulationData = [
  {
    title: "Types of Motion Visualizer",
    icon: "🔄",
    description: "Explore rectilinear, circular, and periodic motion with interactive animations",
    html: `<!DOCTYPE html>
<html><head><style>
body{margin:0;padding:15px;background:#0a0e1a;font-family:Arial,sans-serif;color:#fff;}
.controls{background:#1a1f35;padding:12px;border-radius:10px;margin-bottom:12px;}
button{padding:8px 16px;margin:4px;border-radius:8px;border:none;background:#4f46e5;color:#fff;cursor:pointer;font-weight:700;}
button:hover{background:#6366f1;}
button.active{background:#22c55e;}
canvas{border:2px solid #4a5568;border-radius:10px;display:block;background:#1a1f35;margin:0 auto;}
</style></head><body>
<div class="controls">
  <button onclick="showType('rectilinear')" id="btn1">Rectilinear</button>
  <button onclick="showType('circular')" id="btn2">Circular</button>
  <button onclick="showType('periodic')" id="btn3">Periodic</button>
</div>
<canvas id="simCanvas" width="500" height="300"></canvas>
<script>
const canvas=document.getElementById('simCanvas'),ctx=canvas.getContext('2d');
let type='rectilinear',pos=50,angle=0,dir=1;
function showType(t){type=t;document.querySelectorAll('button').forEach(b=>b.classList.remove('active'));document.getElementById('btn'+(t==='rectilinear'?1:t==='circular'?2:3)).classList.add('active');}
function draw(){
  ctx.clearRect(0,0,500,300);
  ctx.fillStyle='#1a1f35';ctx.fillRect(0,0,500,300);
  if(type==='rectilinear'){
    ctx.fillStyle='#e74c3c';ctx.fillRect(pos,125,50,50);
    pos+=2*dir;if(pos>450||pos<50)dir*=-1;
    ctx.fillStyle='#fff';ctx.font='14px Arial';ctx.fillText('Rectilinear Motion (Straight Line)',150,280);
  }else if(type==='circular'){
    ctx.strokeStyle='#4a5568';ctx.lineWidth=2;ctx.beginPath();ctx.arc(250,150,100,0,Math.PI*2);ctx.stroke();
    ctx.fillStyle='#3498db';ctx.beginPath();ctx.arc(250+Math.cos(angle)*100,150+Math.sin(angle)*100,15,0,Math.PI*2);ctx.fill();
    angle+=0.03;
    ctx.fillStyle='#fff';ctx.font='14px Arial';ctx.fillText('Circular Motion',200,280);
  }else{
    ctx.strokeStyle='#4a5568';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(100,100);ctx.lineTo(100,250);ctx.stroke();
    ctx.fillStyle='#22c55e';ctx.beginPath();ctx.arc(100,175+Math.sin(angle)*60,15,0,Math.PI*2);ctx.fill();
    angle+=0.05;
    ctx.fillStyle='#fff';ctx.font='14px Arial';ctx.fillText('Periodic Motion (Pendulum)',180,280);
  }
  requestAnimationFrame(draw);
}
draw();
</script></body></html>`
  }
];
