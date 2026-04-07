/* Comprehensive Interactive Simulations for Light - Reflection & Refraction | Grade 10 */
window.simulationsData = [
  {
    title: "Mirror Reflection Simulator",
    icon: "🪞",
    description: "Explore how light reflects from plane, concave, and convex mirrors with real-time ray tracing",
    html: `<!DOCTYPE html>
<html><head><style>
body{margin:0;padding:20px;background:#0a0e1a;font-family:Arial,sans-serif;color:#fff;}
.controls{background:#1a1f35;padding:15px;border-radius:10px;margin-bottom:15px;}
.control-group{margin-bottom:12px;}
label{display:block;font-size:12px;margin-bottom:5px;color:#a0aec0;}
select,input[type="range"]{width:100%;padding:8px;background:#2d3748;border:1px solid #4a5568;border-radius:5px;color:#fff;}
input[type="range"]{padding:0;height:6px;}
.value-display{display:inline-block;margin-left:10px;color:#63b3ed;font-weight:bold;}
canvas{border:2px solid #4a5568;border-radius:10px;display:block;background:#fff;margin:0 auto;}
.info{background:#2d3748;padding:12px;border-radius:8px;margin-top:15px;font-size:13px;line-height:1.6;}
</style></head><body>
<div class="controls">
  <div class="control-group">
    <label>Mirror Type</label>
    <select id="mirrorType" onchange="updateSim()">
      <option value="plane">Plane Mirror</option>
      <option value="concave">Concave Mirror</option>
      <option value="convex">Convex Mirror</option>
    </select>
  </div>
  <div class="control-group">
    <label>Object Distance: <span class="value-display" id="objDistVal">30 cm</span></label>
    <input type="range" id="objDist" min="10" max="100" value="30" oninput="updateSim()">
  </div>
  <div class="control-group">
    <label>Focal Length: <span class="value-display" id="focalVal">20 cm</span></label>
    <input type="range" id="focal" min="10" max="50" value="20" oninput="updateSim()">
  </div>
</div>
<canvas id="mirrorCanvas" width="600" height="400"></canvas>
<div class="info" id="info"></div>
<script>
const canvas = document.getElementById('mirrorCanvas');
const ctx = canvas.getContext('2d');

function updateSim() {
  const type = document.getElementById('mirrorType').value;
  const u = parseInt(document.getElementById('objDist').value);
  const f = parseInt(document.getElementById('focal').value);
  
  document.getElementById('objDistVal').textContent = u + ' cm';
  document.getElementById('focalVal').textContent = f + ' cm';
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.strokeStyle = '#2d3748';
  ctx.lineWidth = 3;
  
  if(type === 'plane') {
    ctx.beginPath();
    ctx.moveTo(300, 50);
    ctx.lineTo(300, 350);
    ctx.stroke();
    drawPlane(u);
  } else if(type === 'concave') {
    ctx.beginPath();
    ctx.arc(350, 200, 150, Math.PI/2, 3*Math.PI/2);
    ctx.stroke();
    drawConcave(u, f);
  } else {
    ctx.beginPath();
    ctx.arc(250, 200, 150, -Math.PI/2, Math.PI/2);
    ctx.stroke();
    drawConvex(u, f);
  }
}

function drawPlane(u) {
  const scale = 2;
  const objX = 300 - u*scale;
  const imgX = 300 + u*scale;
  
  ctx.fillStyle = '#e74c3c';
  ctx.fillRect(objX-5, 150, 10, 100);
  drawArrow(objX, 150, objX, 100, '#e74c3c');
  
  ctx.fillStyle = '#3498db';
  ctx.fillRect(imgX-5, 150, 10, 100);
  drawArrow(imgX, 150, imgX, 100, '#3498db');
  
  ctx.strokeStyle = '#f39c12';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(objX, 150);
  ctx.lineTo(300, 150);
  ctx.lineTo(imgX, 150);
  ctx.stroke();
  ctx.setLineDash([]);
  
  document.getElementById('info').innerHTML = 
    '<strong>Plane Mirror</strong><br>Image Distance = ' + u + ' cm (behind mirror)<br>Nature: Virtual, Erect, Same Size';
}

function drawConcave(u, f) {
  const v = (f * u) / (u - f);
  const scale = 2;
  const objX = 300 - u*scale;
  
  ctx.fillStyle = '#e74c3c';
  ctx.fillRect(objX-5, 150, 10, 100);
  drawArrow(objX, 150, objX, 100, '#e74c3c');
  
  ctx.strokeStyle = '#95a5a6';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(50, 200);
  ctx.lineTo(550, 200);
  ctx.stroke();
  
  ctx.fillStyle = '#f39c12';
  ctx.beginPath();
  ctx.arc(300 - f*scale, 200, 5, 0, 2*Math.PI);
  ctx.fill();
  ctx.fillText('F', 300 - f*scale, 220);
  
  ctx.strokeStyle = '#3498db';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(objX, 150);
  ctx.lineTo(300, 150);
  ctx.stroke();
  
  let nature = 'Real, Inverted';
  if(v < 0) nature = 'Virtual, Erect';
  
  document.getElementById('info').innerHTML = 
    '<strong>Concave Mirror</strong><br>Object Distance (u) = -' + u + ' cm<br>Focal Length (f) = -' + f + 
    ' cm<br>Image Distance (v) = ' + v.toFixed(1) + ' cm<br>Magnification = ' + (v/u).toFixed(2) + 
    '<br>Nature: ' + nature;
}

function drawConvex(u, f) {
  const v = -(f * u) / (u + f);
  const scale = 2;
  const objX = 300 - u*scale;
  
  ctx.fillStyle = '#e74c3c';
  ctx.fillRect(objX-5, 150, 10, 100);
  drawArrow(objX, 150, objX, 100, '#e74c3c');
  
  ctx.strokeStyle = '#95a5a6';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(50, 200);
  ctx.lineTo(550, 200);
  ctx.stroke();
  
  ctx.fillStyle = '#f39c12';
  ctx.beginPath();
  ctx.arc(300 + f*scale, 200, 5, 0, 2*Math.PI);
  ctx.fill();
  ctx.fillText('F', 300 + f*scale, 220);
  
  document.getElementById('info').innerHTML = 
    '<strong>Convex Mirror</strong><br>Object Distance (u) = -' + u + ' cm<br>Focal Length (f) = +' + f + 
    ' cm<br>Image Distance (v) = ' + v.toFixed(1) + ' cm (behind mirror)<br>Magnification = ' + (v/(-u)).toFixed(2) + 
    '<br>Nature: Virtual, Erect, Diminished';
}

function drawArrow(x1, y1, x2, y2, color) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  
  const angle = Math.atan2(y2-y1, x2-x1);
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2-10*Math.cos(angle-Math.PI/6), y2-10*Math.sin(angle-Math.PI/6));
  ctx.lineTo(x2-10*Math.cos(angle+Math.PI/6), y2-10*Math.sin(angle+Math.PI/6));
  ctx.closePath();
  ctx.fill();
}

updateSim();
</script>
</body></html>`
  },
  {
    title: "Lens Refraction Simulator",
    icon: "🔍",
    description: "Interactive simulation of convex and concave lenses with complete ray diagram",
    html: `<!DOCTYPE html>
<html><head><style>
body{margin:0;padding:20px;background:#0a0e1a;font-family:Arial,sans-serif;color:#fff;}
.controls{background:#1a1f35;padding:15px;border-radius:10px;margin-bottom:15px;}
.control-group{margin-bottom:12px;}
label{display:block;font-size:12px;margin-bottom:5px;color:#a0aec0;}
select,input[type="range"]{width:100%;padding:8px;background:#2d3748;border:1px solid #4a5568;border-radius:5px;color:#fff;}
input[type="range"]{padding:0;height:6px;}
.value-display{display:inline-block;margin-left:10px;color:#63b3ed;font-weight:bold;}
canvas{border:2px solid #4a5568;border-radius:10px;display:block;background:#f0f0f0;margin:0 auto;}
.info{background:#2d3748;padding:12px;border-radius:8px;margin-top:15px;font-size:13px;line-height:1.6;}
</style></head><body>
<div class="controls">
  <div class="control-group">
    <label>Lens Type</label>
    <select id="lensType" onchange="updateLens()">
      <option value="convex">Convex Lens (Converging)</option>
      <option value="concave">Concave Lens (Diverging)</option>
    </select>
  </div>
  <div class="control-group">
    <label>Object Distance: <span class="value-display" id="objDistVal">40 cm</span></label>
    <input type="range" id="objDist" min="15" max="100" value="40" oninput="updateLens()">
  </div>
  <div class="control-group">
    <label>Focal Length: <span class="value-display" id="focalVal">20 cm</span></label>
    <input type="range" id="focal" min="10" max="40" value="20" oninput="updateLens()">
  </div>
</div>
<canvas id="lensCanvas" width="700" height="450"></canvas>
<div class="info" id="lensInfo"></div>
<script>
const canvas = document.getElementById('lensCanvas');
const ctx = canvas.getContext('2d');
const centerX = 350;
const centerY = 225;

function updateLens() {
  const type = document.getElementById('lensType').value;
  const u = parseInt(document.getElementById('objDist').value);
  const f = parseInt(document.getElementById('focal').value);
  
  document.getElementById('objDistVal').textContent = u + ' cm';
  document.getElementById('focalVal').textContent = f + ' cm';
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.strokeStyle = '#999';
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(50, centerY);
  ctx.lineTo(650, centerY);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.strokeStyle = '#2c3e50';
  ctx.lineWidth = 4;
  
  if(type === 'convex') {
    ctx.beginPath();
    ctx.arc(centerX - 30, centerY, 150, -Math.PI/3, Math.PI/3);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(centerX + 30, centerY, 150, 2*Math.PI/3, 4*Math.PI/3);
    ctx.stroke();
    drawConvexLens(u, f);
  } else {
    ctx.beginPath();
    ctx.arc(centerX + 30, centerY, 150, Math.PI/3, -Math.PI/3, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(centerX - 30, centerY, 150, -2*Math.PI/3, -4*Math.PI/3, true);
    ctx.stroke();
    drawConcaveLens(u, f);
  }
}

function drawConvexLens(u, f) {
  const v = (f * u) / (u - f);
  const scale = 3;
  const objX = centerX - u*scale;
  const objHeight = 80;
  
  ctx.fillStyle = '#e74c3c';
  ctx.fillRect(objX-3, centerY-objHeight, 6, objHeight);
  drawArrow(objX, centerY, objX, centerY-objHeight, '#e74c3c');
  
  ctx.fillStyle = '#f39c12';
  ctx.font = '14px Arial';
  
  ctx.beginPath();
  ctx.arc(centerX - f*scale, centerY, 5, 0, 2*Math.PI);
  ctx.fill();
  ctx.fillText('F₁', centerX - f*scale - 10, centerY + 20);
  
  ctx.beginPath();
  ctx.arc(centerX + f*scale, centerY, 5, 0, 2*Math.PI);
  ctx.fill();
  ctx.fillText('F₂', centerX + f*scale - 10, centerY + 20);
  
  ctx.beginPath();
  ctx.arc(centerX - 2*f*scale, centerY, 4, 0, 2*Math.PI);
  ctx.fill();
  ctx.fillText('2F₁', centerX - 2*f*scale - 15, centerY + 20);
  
  ctx.strokeStyle = '#3498db';
  ctx.lineWidth = 2;
  
  ctx.beginPath();
  ctx.moveTo(objX, centerY-objHeight);
  ctx.lineTo(centerX, centerY-objHeight);
  
  if(v > 0) {
    ctx.lineTo(centerX + v*scale, centerY);
  } else {
    ctx.lineTo(650, centerY-objHeight + (650-centerX)*(centerY-objHeight)/(v*scale-centerX));
  }
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(objX, centerY-objHeight);
  ctx.lineTo(centerX, centerY);
  if(v > 0) {
    ctx.lineTo(centerX + v*scale, centerY + (v*scale)*(objHeight)/u/scale);
  } else {
    ctx.lineTo(650, centerY + (650-centerX)*(objHeight)/u/scale);
  }
  ctx.stroke();
  
  let nature = '';
  let position = '';
  
  if(u > 2*f) {
    nature = 'Real, Inverted, Diminished';
    position = 'Between F₂ and 2F₂';
  } else if(u === 2*f) {
    nature = 'Real, Inverted, Same Size';
    position = 'At 2F₂';
  } else if(u > f && u < 2*f) {
    nature = 'Real, Inverted, Magnified';
    position = 'Beyond 2F₂';
  } else if(u === f) {
    nature = 'At Infinity';
    position = 'Infinity';
  } else {
    nature = 'Virtual, Erect, Magnified';
    position = 'Same side as object';
  }
  
  document.getElementById('lensInfo').innerHTML = 
    '<strong>Convex Lens</strong><br>' +
    'Object Distance (u) = -' + u + ' cm<br>' +
    'Focal Length (f) = +' + f + ' cm<br>' +
    'Image Distance (v) = ' + v.toFixed(1) + ' cm<br>' +
    'Magnification (m) = ' + (v/u).toFixed(2) + '<br>' +
    'Nature: ' + nature + '<br>' +
    'Position: ' + position;
}

function drawConcaveLens(u, f) {
  const v = -(f * u) / (u + f);
  const scale = 3;
  const objX = centerX - u*scale;
  const objHeight = 80;
  
  ctx.fillStyle = '#e74c3c';
  ctx.fillRect(objX-3, centerY-objHeight, 6, objHeight);
  drawArrow(objX, centerY, objX, centerY-objHeight, '#e74c3c');
  
  ctx.fillStyle = '#f39c12';
  ctx.font = '14px Arial';
  
  ctx.beginPath();
  ctx.arc(centerX - f*scale, centerY, 5, 0, 2*Math.PI);
  ctx.fill();
  ctx.fillText('F₁', centerX - f*scale - 10, centerY + 20);
  
  ctx.beginPath();
  ctx.arc(centerX + f*scale, centerY, 5, 0, 2*Math.PI);
  ctx.fill();
  ctx.fillText('F₂', centerX + f*scale - 10, centerY + 20);
  
  ctx.strokeStyle = '#3498db';
  ctx.lineWidth = 2;
  
  ctx.beginPath();
  ctx.moveTo(objX, centerY-objHeight);
  ctx.lineTo(centerX, centerY-objHeight);
  ctx.lineTo(650, centerY-objHeight + (650-centerX)*objHeight/(f*scale));
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(objX, centerY-objHeight);
  ctx.lineTo(centerX, centerY);
  ctx.lineTo(650, centerY + (650-centerX)*objHeight/(u*scale));
  ctx.stroke();
  
  document.getElementById('lensInfo').innerHTML = 
    '<strong>Concave Lens</strong><br>' +
    'Object Distance (u) = -' + u + ' cm<br>' +
    'Focal Length (f) = -' + f + ' cm<br>' +
    'Image Distance (v) = ' + v.toFixed(1) + ' cm<br>' +
    'Magnification (m) = ' + (v/(-u)).toFixed(2) + '<br>' +
    'Nature: Virtual, Erect, Diminished<br>' +
    'Position: Between object and lens (same side)';
}

function drawArrow(x1, y1, x2, y2, color) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  
  const angle = Math.atan2(y2-y1, x2-x1);
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2-10*Math.cos(angle-Math.PI/6), y2-10*Math.sin(angle-Math.PI/6));
  ctx.lineTo(x2-10*Math.cos(angle+Math.PI/6), y2-10*Math.sin(angle+Math.PI/6));
  ctx.closePath();
  ctx.fill();
}

updateLens();
</script>
</body></html>`
  },
  {
    title: "Refraction at Boundary",
    icon: "🌈",
    description: "Visualize Snell's law and refraction of light at media boundaries",
    html: `<!DOCTYPE html>
<html><head><style>
body{margin:0;padding:20px;background:#0a0e1a;font-family:Arial,sans-serif;color:#fff;}
.controls{background:#1a1f35;padding:15px;border-radius:10px;margin-bottom:15px;}
.control-group{margin-bottom:12px;}
label{display:block;font-size:12px;margin-bottom:5px;color:#a0aec0;}
select,input[type="range"]{width:100%;padding:8px;background:#2d3748;border:1px solid #4a5568;border-radius:5px;color:#fff;}
input[type="range"]{padding:0;height:6px;}
.value-display{display:inline-block;margin-left:10px;color:#63b3ed;font-weight:bold;}
canvas{border:2px solid #4a5568;border-radius:10px;display:block;background:#1a1f35;margin:0 auto;}
.info{background:#2d3748;padding:12px;border-radius:8px;margin-top:15px;font-size:13px;line-height:1.6;}
</style></head><body>
<div class="controls">
  <div class="control-group">
    <label>Media Transition</label>
    <select id="media" onchange="updateRefraction()">
      <option value="air-glass">Air → Glass (n₁=1.0, n₂=1.5)</option>
      <option value="air-water">Air → Water (n₁=1.0, n₂=1.33)</option>
      <option value="glass-air">Glass → Air (n₁=1.5, n₂=1.0)</option>
      <option value="water-air">Water → Air (n₁=1.33, n₂=1.0)</option>
    </select>
  </div>
  <div class="control-group">
    <label>Angle of Incidence: <span class="value-display" id="angleVal">30°</span></label>
    <input type="range" id="angle" min="0" max="89" value="30" oninput="updateRefraction()">
  </div>
</div>
<canvas id="refractionCanvas" width="600" height="500"></canvas>
<div class="info" id="refractionInfo"></div>
<script>
const canvas = document.getElementById('refractionCanvas');
const ctx = canvas.getContext('2d');
const centerX = 300;
const centerY = 250;

const mediaData = {
  'air-glass': {n1: 1.0, n2: 1.5, color1: '#87CEEB', color2: '#4682B4', name1: 'Air', name2: 'Glass'},
  'air-water': {n1: 1.0, n2: 1.33, color1: '#87CEEB', color2: '#1E90FF', name1: 'Air', name2: 'Water'},
  'glass-air': {n1: 1.5, n2: 1.0, color1: '#4682B4', color2: '#87CEEB', name1: 'Glass', name2: 'Air'},
  'water-air': {n1: 1.33, n2: 1.0, color1: '#1E90FF', color2: '#87CEEB', name1: 'Water', name2: 'Air'}
};

function updateRefraction() {
  const media = document.getElementById('media').value;
  const angle = parseInt(document.getElementById('angle').value);
  const data = mediaData[media];
  
  document.getElementById('angleVal').textContent = angle + '°';
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = data.color1;
  ctx.fillRect(0, 0, 600, centerY);
  ctx.fillStyle = data.color2;
  ctx.fillRect(0, centerY, 600, 250);
  
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.setLineDash([10, 5]);
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(600, centerY);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.strokeStyle = '#ffff00';
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(centerX, 50);
  ctx.lineTo(centerX, 450);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 14px Arial';
  ctx.fillText(data.name1 + ' (n=' + data.n1 + ')', 20, 30);
  ctx.fillText(data.name2 + ' (n=' + data.n2 + ')', 20, centerY + 30);
  ctx.fillText('Normal', centerX + 10, 70);
  
  const angleRad = angle * Math.PI / 180;
  const sinI = Math.sin(angleRad);
  const sinR = (data.n1 / data.n2) * sinI;
  
  const criticalAngle = data.n1 > data.n2 ? Math.asin(data.n2 / data.n1) * 180 / Math.PI : null;
  
  if(sinR > 1 && criticalAngle !== null) {
    const rayLength = 150;
    const incidentX = centerX - rayLength * Math.sin(angleRad);
    const incidentY = centerY - rayLength * Math.cos(angleRad);
    
    ctx.strokeStyle = '#ff6b6b';
    ctx.lineWidth = 3;
    drawRay(incidentX, incidentY, centerX, centerY, '#ff6b6b');
    
    const reflectedX = centerX + rayLength * Math.sin(angleRad);
    const reflectedY = centerY - rayLength * Math.cos(angleRad);
    drawRay(centerX, centerY, reflectedX, reflectedY, '#4ecdc4');
    
    document.getElementById('refractionInfo').innerHTML = 
      '<strong>⚠️ Total Internal Reflection</strong><br>' +
      'Angle of Incidence = ' + angle + '°<br>' +
      'Critical Angle = ' + criticalAngle.toFixed(1) + '°<br>' +
      'Since i > critical angle, light is totally reflected back!<br>' +
      '<em>This is how optical fibers work.</em>';
  } else {
    const angleRefraction = Math.asin(sinR);
    const angleDeg = angleRefraction * 180 / Math.PI;
    
    const rayLength = 150;
    const incidentX = centerX - rayLength * Math.sin(angleRad);
    const incidentY = centerY - rayLength * Math.cos(angleRad);
    const refractedX = centerX + rayLength * Math.sin(angleRefraction);
    const refractedY = centerY + rayLength * Math.cos(angleRefraction);
    
    drawRay(incidentX, incidentY, centerX, centerY, '#ff6b6b');
    drawRay(centerX, centerY, refractedX, refractedY, '#4ecdc4');
    
    drawAngle(centerX, centerY, angleRad, 50, true, angle + '°');
    drawAngle(centerX, centerY, angleRefraction, 60, false, angleDeg.toFixed(1) + '°');
    
    let behavior = data.n1 < data.n2 ? 'bends towards normal' : 'bends away from normal';
    
    document.getElementById('refractionInfo').innerHTML = 
      '<strong>Refraction Analysis</strong><br>' +
      'Angle of Incidence (i) = ' + angle + '°<br>' +
      'Angle of Refraction (r) = ' + angleDeg.toFixed(1) + '°<br>' +
      'Snell\\'s Law: n₁ sin(i) = n₂ sin(r)<br>' +
      data.n1 + ' × sin(' + angle + '°) = ' + data.n2 + ' × sin(' + angleDeg.toFixed(1) + '°)<br>' +
      (data.n1 * sinI).toFixed(3) + ' ≈ ' + (data.n2 * sinR).toFixed(3) + ' ✓<br>' +
      '<strong>Light ' + behavior + '</strong>' +
      (criticalAngle ? '<br>Critical Angle = ' + criticalAngle.toFixed(1) + '°' : '');
  }
}

function drawRay(x1, y1, x2, y2, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  
  const angle = Math.atan2(y2-y1, x2-x1);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2-10*Math.cos(angle-Math.PI/6), y2-10*Math.sin(angle-Math.PI/6));
  ctx.lineTo(x2-10*Math.cos(angle+Math.PI/6), y2-10*Math.sin(angle+Math.PI/6));
  ctx.closePath();
  ctx.fill();
}

function drawAngle(x, y, angle, radius, isTop, label) {
  ctx.strokeStyle = '#ffd700';
  ctx.lineWidth = 2;
  ctx.beginPath();
  if(isTop) {
    ctx.arc(x, y, radius, -Math.PI/2 - angle, -Math.PI/2);
  } else {
    ctx.arc(x, y, radius, Math.PI/2, Math.PI/2 + angle);
  }
  ctx.stroke();
  
  ctx.fillStyle = '#ffd700';
  ctx.font = '12px Arial';
  const textX = x + (isTop ? -radius-20 : radius+10) * Math.sin(angle/2);
  const textY = y + (isTop ? -radius : radius) * Math.cos(angle/2);
  ctx.fillText(label, textX, textY);
}

updateRefraction();
</script>
</body></html>`
  }
];
