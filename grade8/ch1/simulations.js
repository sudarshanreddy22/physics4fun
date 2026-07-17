/* Simulations - Force and Pressure | Grade 8 */
window.simulationsData = [
  {
    title: "Force Vector Simulator",
    icon: "➡️",
    description: "Visualize how forces act on objects and their effects",
    html: `<!DOCTYPE html>
<html><head><style>
body{margin:0;padding:15px;background:#0a0e1a;font-family:Arial,sans-serif;color:#fff;}
.controls{background:#1a1f35;padding:12px;border-radius:10px;margin-bottom:12px;}
input[type="range"]{width:150px;}
canvas{border:2px solid #4a5568;border-radius:10px;display:block;background:#1a1f35;margin:0 auto;}
</style></head><body>
<div class="controls">
  <label>Force: <input type="range" id="force" min="1" max="10" value="5"></label>
  <label>Angle: <input type="range" id="angle" min="0" max="360" value="0"></label>
</div>
<canvas id="canvas" width="500" height="300"></canvas>
<script>
const canvas=document.getElementById('canvas'),ctx=canvas.getContext('2d');
const forceIn=document.getElementById('force'),angleIn=document.getElementById('angle');
let box={x:50,y:250,vx:0,vy:0};
function draw(){
  const force=parseInt(forceIn.value),angle=parseInt(angleIn.value)*Math.PI/180;
  ctx.clearRect(0,0,500,300);ctx.fillStyle='#1a1f35';ctx.fillRect(0,0,500,300);
  // Ground
  ctx.strokeStyle='#4a5568';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,270);ctx.lineTo(500,270);ctx.stroke();
  // Box
  ctx.fillStyle='#4f46e5';ctx.fillRect(box.x,box.y-30,40,30);
  // Force arrow
  ctx.strokeStyle='#ef4444';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(box.x+20,box.y-15);ctx.lineTo(box.x+20+Math.cos(angle)*force*15,box.y-15+Math.sin(angle)*force*15);ctx.stroke();
  // Physics
  box.vx+=Math.cos(angle)*force*0.1;box.vy+=Math.sin(angle)*force*0.1;
  box.x+=box.vx;box.y+=box.vy;
  if(box.x>460){box.x=460;box.vx*=-0.5;}if(box.x<0){box.x=0;box.vx*=-0.5;}
  if(box.y>270){box.y=270;box.vy=0;}
  box.vx*=0.98;box.vy*=0.98;
  ctx.fillStyle='#fff';ctx.fillText('Force: '+force+'N, Angle: '+angleIn.value+'°',170,280);
  requestAnimationFrame(draw);
}
draw();
</script></body></html>`
  }
];
