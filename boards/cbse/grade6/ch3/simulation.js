/* Simulations - Electricity and Circuits | Grade 6 */
window.simulationData = [
  {
    title: "Simple Circuit Builder",
    icon: "🔌",
    description: "Build your own circuit with battery, bulb, and switch",
    html: `<!DOCTYPE html>
<html><head><style>
body{margin:0;padding:15px;background:#0a0e1a;font-family:Arial,sans-serif;color:#fff;}
.controls{background:#1a1f35;padding:12px;border-radius:10px;margin-bottom:12px;}
button{padding:8px 16px;margin:4px;border-radius:8px;border:none;background:#4f46e5;color:#fff;cursor:pointer;font-weight:700;}
button.active{background:#22c55e;}
canvas{border:2px solid #4a5568;border-radius:10px;display:block;background:#1a1f35;margin:0 auto;}
</style></head><body>
<div class="controls">
  <button onclick="toggleSwitch()" id="switchBtn">Toggle Switch: OFF</button>
  <button onclick="addBattery()" id="batBtn">Add Battery</button>
</div>
<canvas id="circuitCanvas" width="500" height="300"></canvas>
<script>
const canvas=document.getElementById('circuitCanvas'),ctx=canvas.getContext('2d');
let switchOn=false,batteries=1;
function toggleSwitch(){switchOn=!switchOn;document.getElementById('switchBtn').textContent='Toggle Switch: '+(switchOn?'ON':'OFF');draw();}
function addBattery(){batteries++;draw();}
function draw(){
  ctx.clearRect(0,0,500,300);ctx.fillStyle='#1a1f35';ctx.fillRect(0,0,500,300);
  // Battery
  ctx.fillStyle='#fbbf24';ctx.fillRect(50,125,60,50);
  ctx.fillStyle='#fff';ctx.font='12px Arial';ctx.fillText('Battery',55,155);
  // Wires
  ctx.strokeStyle=switchOn?'#fbbf24':'#4a5568';ctx.lineWidth=4;
  ctx.beginPath();ctx.moveTo(110,150);ctx.lineTo(200,150);ctx.lineTo(200,100);ctx.lineTo(300,100);ctx.stroke();
  ctx.beginPath();ctx.moveTo(200,200);ctx.lineTo(300,200);ctx.lineTo(110,200);ctx.lineTo(50,175);ctx.stroke();
  // Bulb
  ctx.fillStyle=switchOn?'#fbbf24':'#4a5568';ctx.beginPath();ctx.arc(300,150,30,0,Math.PI*2);ctx.fill();
  if(switchOn){ctx.fillStyle='#fbbf24';ctx.globalAlpha=0.5;ctx.beginPath();ctx.arc(300,150,50,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;}
  ctx.fillStyle='#fff';ctx.font='12px Arial';ctx.fillText('Bulb',285,155);
  // Switch
  ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(350,150);ctx.lineTo(400,150);ctx.stroke();
  ctx.strokeStyle=switchOn?'#22c55e':'#ef4444';ctx.beginPath();ctx.moveTo(350,150);ctx.lineTo(400,switchOn?150:120);ctx.stroke();
  ctx.fillStyle='#fff';ctx.font='14px Arial';ctx.fillText('Circuit: '+(switchOn?'CLOSED (Bulb ON)':'OPEN (Bulb OFF)'),150,280);
}
draw();
</script></body></html>`
  }
];
