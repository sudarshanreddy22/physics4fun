/* Simulations - Friction | Grade 8 */
window.simulationData = [
  {
    title: "Friction Force Visualizer",
    icon: "🔄",
    description: "See how friction affects moving objects on different surfaces",
    html: `<!DOCTYPE html>
<html><head><style>
body{margin:0;padding:15px;background:#0a0e1a;font-family:Arial,sans-serif;color:#fff;}
.controls{background:#1a1f35;padding:12px;border-radius:10px;margin-bottom:12px;}
button{padding:8px 16px;margin:4px;border-radius:8px;border:none;background:#4f46e5;color:#fff;cursor:pointer;font-weight:700;}
button.active{background:#22c55e;}
canvas{border:2px solid #4a5568;border-radius:10px;display:block;background:#1a1f35;margin:0 auto;}
</style></head><body>
<div class="controls">
  <button onclick="setSurface('ice')" id="btn1">Ice (Low)</button>
  <button onclick="setSurface('wood')" id="btn2">Wood (Med)</button>
  <button onclick="setSurface('sand')" id="btn3">Sand (High)</button>
  <button onclick="push()" id="pushBtn">PUSH ➡️</button>
</div>
<canvas id="canvas" width="500" height="200"></canvas>
<script>
const canvas=document.getElementById('canvas'),ctx=canvas.getContext('2d');
let surface='wood',friction={ice:0.02,wood:0.1,sand:0.3};
let box={x:50,vx:0};
function setSurface(s){surface=s;document.querySelectorAll('button').forEach(b=>b.classList.remove('active'));document.getElementById('btn'+(s==='ice'?1:s==='wood'?2:3)).classList.add('active');}
function push(){box.vx+=5;}
function draw(){
  ctx.clearRect(0,0,500,200);ctx.fillStyle='#1a1f35';ctx.fillRect(0,0,500,200);
  // Surface
  ctx.fillStyle=surface==='ice'?'#a5f3fc':surface==='wood'?'#92400e':'#d4a574';ctx.fillRect(0,170,500,30);
  // Box
  ctx.fillStyle='#4f46e5';ctx.fillRect(box.x,140,50,30);
  // Friction arrow
  if(box.vx>0){ctx.strokeStyle='#ef4444';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(box.x+25,155);ctx.lineTo(box.x+25-box.vx*friction[surface]*20,155);ctx.stroke();}
  // Physics
  box.vx-=box.vx*friction[surface]*0.1;box.x+=box.vx;
  if(box.x>450){box.x=450;box.vx=0;}if(box.x<0){box.x=0;box.vx=0;}
  ctx.fillStyle='#fff';ctx.fillText('Surface: '+surface.toUpperCase()+' | Velocity: '+box.vx.toFixed(2),150,30);
  requestAnimationFrame(draw);
}
draw();
</script></body></html>`
  }
];
