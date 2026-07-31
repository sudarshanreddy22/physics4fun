/* Simulations - Sound | Grade 8 */
window.simulationData = [
  {
    title: "Sound Wave Visualizer",
    icon: "🌊",
    description: "Visualize sound waves and understand frequency, amplitude",
    html: `<!DOCTYPE html>
<html><head><style>
body{margin:0;padding:15px;background:#0a0e1a;font-family:Arial,sans-serif;color:#fff;}
.controls{background:#1a1f35;padding:12px;border-radius:10px;margin-bottom:12px;}
input[type="range"]{width:150px;}
canvas{border:2px solid #4a5568;border-radius:10px;display:block;background:#1a1f35;margin:0 auto;}
</style></head><body>
<div class="controls">
  <label>Frequency: <input type="range" id="freq" min="1" max="10" value="3"></label>
  <label>Amplitude: <input type="range" id="amp" min="1" max="5" value="3"></label>
</div>
<canvas id="canvas" width="500" height="200"></canvas>
<script>
const canvas=document.getElementById('canvas'),ctx=canvas.getContext('2d');
const freqIn=document.getElementById('freq'),ampIn=document.getElementById('amp');
let time=0;
function draw(){
  time+=0.05;const freq=freqIn.value*0.1,amp=ampIn.value*15;
  ctx.clearRect(0,0,500,200);ctx.fillStyle='#1a1f35';ctx.fillRect(0,0,500,200);
  // Wave
  ctx.strokeStyle='#22c55e';ctx.lineWidth=3;ctx.beginPath();
  for(let x=0;x<500;x++){let y=100+Math.sin(x*freq+time)*amp;ctx.lineTo(x,y);}
  ctx.stroke();
  // Labels
  ctx.fillStyle='#fff';ctx.fillText('Frequency: '+freqIn.value,20,30);
  ctx.fillText('Amplitude: '+ampIn.value,150,30);
  ctx.fillText('Sound Wave Simulation',180,180);
  requestAnimationFrame(draw);
}
draw();
</script></body></html>`
  }
];
