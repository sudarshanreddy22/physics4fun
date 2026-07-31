/* Simulations - Light, Shadows and Reflections | Grade 6 */
window.simulationData = [
  {
    title: "Shadow Formation Simulator",
    icon: "🌑",
    description: "Explore how shadows are formed by moving objects and light sources",
    html: `<!DOCTYPE html>
<html><head><style>
body{margin:0;padding:15px;background:#0a0e1a;font-family:Arial,sans-serif;color:#fff;}
.controls{background:#1a1f35;padding:12px;border-radius:10px;margin-bottom:12px;display:flex;gap:10px;align-items:center;}
input[type="range"]{width:150px;}
canvas{border:2px solid #4a5568;border-radius:10px;display:block;background:#1a1f35;margin:0 auto;}
</style></head><body>
<div class="controls">
  <label>Light Position: <input type="range" id="lightPos" min="50" max="450" value="250"></label>
  <label>Object Position: <input type="range" id="objPos" min="100" max="400" value="250"></label>
</div>
<canvas id="simCanvas" width="500" height="300"></canvas>
<script>
const canvas=document.getElementById('simCanvas'),ctx=canvas.getContext('2d');
const lightInput=document.getElementById('lightPos'),objInput=document.getElementById('objPos');
function draw(){
  const lightX=parseInt(lightInput.value),objX=parseInt(objInput.value);
  ctx.clearRect(0,0,500,300);
  ctx.fillStyle='#1a1f35';ctx.fillRect(0,0,500,300);
  // Light source
  ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(lightX,50,20,0,Math.PI*2);ctx.fill();
  ctx.fillStyle='#fbbf24';ctx.globalAlpha=0.3;ctx.beginPath();ctx.moveTo(lightX,50);ctx.lineTo(objX-25,150);ctx.lineTo(objX-25,250);ctx.lineTo(lightX,300);ctx.fill();
  ctx.beginPath();ctx.moveTo(lightX,50);ctx.lineTo(objX+25,150);ctx.lineTo(objX+25,250);ctx.lineTo(lightX,300);ctx.fill();
  ctx.globalAlpha=1;
  // Object
  ctx.fillStyle='#7c3aed';ctx.fillRect(objX-25,100,50,100);
  // Shadow
  ctx.fillStyle='rgba(0,0,0,0.5)';
  const shadowWidth=25+(lightX<objX?(objX-lightX)*0.3:(lightX-objX)*0.3);
  ctx.fillRect(objX-shadowWidth,200,shadowWidth*2,100);
  ctx.fillStyle='#fff';ctx.font='14px Arial';ctx.fillText('Shadow Formation',200,280);
  requestAnimationFrame(draw);
}
lightInput.oninput=objInput.oninput=draw;
draw();
</script></body></html>`
  }
];
