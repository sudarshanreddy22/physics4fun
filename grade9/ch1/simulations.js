/* Simulations - Motion | Grade 9 */
window.simulationsData = [
  {
    title: "Motion Graph Plotter",
    icon: "📈",
    description: "Plot distance-time and velocity-time graphs for different motions",
    html: `<!DOCTYPE html>
<html><head><style>
body{margin:0;padding:15px;background:#0a0e1a;font-family:Arial,sans-serif;color:#fff;}
.controls{background:#1a1f35;padding:12px;border-radius:10px;margin-bottom:12px;}
button{padding:8px 16px;margin:4px;border-radius:8px;border:none;background:#4f46e5;color:#fff;cursor:pointer;font-weight:700;}
button.active{background:#22c55e;}
canvas{border:2px solid #4a5568;border-radius:10px;display:block;background:#fff;margin:0 auto;width:100%;}
</style></head><body>
<div class="controls">
  <button onclick="setGraph('dt')" id="btn1">Distance-Time</button>
  <button onclick="setGraph('vt')" id="btn2">Velocity-Time</button>
  <button onclick="setMotion('uniform')" id="btn3">Uniform</button>
  <button onclick="setMotion('accelerated')" id="btn4">Accelerated</button>
</div>
<canvas id="canvas" width="500" height="250"></canvas>
<script>
const canvas=document.getElementById('canvas'),ctx=canvas.getContext('2d');
let graphType='dt',motion='uniform',t=0;
function setGraph(g){graphType=g;document.querySelectorAll('button').forEach(b=>b.classList.remove('active'));document.getElementById('btn'+(g==='dt'?1:2)).classList.add('active');}
function setMotion(m){motion=m;document.querySelectorAll('button').forEach(b=>b.classList.remove('active'));document.getElementById('btn'+(m==='uniform'?3:4)).classList.add('active');}
function draw(){
  t+=0.5;ctx.clearRect(0,0,500,250);ctx.fillStyle='#fff';ctx.fillRect(0,0,500,250);
  ctx.strokeStyle='#000';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(50,20);ctx.lineTo(50,220);ctx.lineTo(480,220);ctx.stroke();
  ctx.fillStyle='#000';ctx.fillText(graphType==='dt'?'Distance':'Velocity',15,120);ctx.fillText('Time',265,240);
  ctx.strokeStyle='#e74c3c';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(50,220);
  if(graphType==='dt'){if(motion==='uniform'){ctx.lineTo(450,50);}else{for(let i=0;i<=430;i+=10){ctx.lineTo(50+i,220-i*i/400);}}}
  else{if(motion==='uniform'){ctx.lineTo(450,220);}else{ctx.lineTo(450,50);}}
  ctx.stroke();
  ctx.fillStyle='#000';ctx.fillText('t='+t.toFixed(1)+'s',400,40);
  requestAnimationFrame(draw);
}
draw();
</script></body></html>`
  }
];
