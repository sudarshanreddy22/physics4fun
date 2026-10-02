/* =====================================================
   The Human Eye and the Colourful World | Grade 10 Notes
   Continuous single-page v17 HTML rendering
   ===================================================== */
window.chapterNotes = {
  title: "The Human Eye and the Colourful World",
  grade: "10",
  icon: "👁️",
  exactHtmlMode: true,
  continuousMode: true,
  exactStyle: `

:root{
  --ink:#203040;--muted:#5b6d7b;--purple:#7b3f80;--purple2:#b04e9f;
  --cyan:#49b6d2;--cyan-soft:#e4f6fb;--green:#68b64e;--green-soft:#ebf7df;
  --amber:#d89a1f;--amber-soft:#fff6d4;--peach:#e17a54;--peach-soft:#fdebe2;
  --pink:#a74d9f;--pink-soft:#f8ebf6;--line:#d7dfe6;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:#e8edf1;color:var(--ink);font-family:"Segoe UI",Arial,sans-serif}
body{-webkit-print-color-adjust:exact;print-color-adjust:exact}
@page{size:A4;margin:0}
.page{width:210mm;height:297mm;margin:3mm auto;background:#fff;position:relative;overflow:hidden;box-shadow:0 5px 20px rgba(20,32,45,.13);page-break-after:always;break-after:page}
.page:last-child{page-break-after:auto;break-after:auto}
.inner{height:100%;padding:8.5mm 8.5mm 18mm}
.page1 .inner{height:calc(100% - 20mm);padding-top:2mm}
.chapter-title{height:13mm;margin:7mm 8.5mm 0;display:flex;align-items:center;justify-content:center;background:linear-gradient(110deg,#63336d,#8d448d 55%,#a7529f);color:#fff;font-weight:900;font-size:15pt;letter-spacing:.25px;text-transform:uppercase;border-radius:2.4mm}
.footer{position:absolute;left:8mm;right:7mm;bottom:6.5mm;display:flex;align-items:center;justify-content:flex-start;color:#5f6974;font-size:7.2pt;font-weight:800;z-index:5;padding-right:15mm;min-height:8mm}
.page-badge{position:absolute;right:0;bottom:-1.2mm;width:12mm;height:9mm;border-radius:4.5mm 0 0 4.5mm;display:flex;align-items:center;justify-content:center;color:#fff;font-size:8.8pt;font-weight:900;letter-spacing:.25px;background:linear-gradient(145deg,#713577,#9b4d9a 72%,#b65aa9);box-shadow:0 1mm 2mm rgba(71,37,78,.20),inset 0 0 0 1px rgba(255,255,255,.20)}
.block{margin:.8mm 0 0;border-radius:2.1mm;overflow:hidden;break-inside:avoid;max-width:100%}
.block .head{display:inline-block;margin-left:3.4mm;transform:translateY(-.7mm);padding:.9mm 2.8mm;border-radius:1.7mm;color:#fff;font-size:9.7pt;line-height:1.08;font-weight:800;letter-spacing:.05px}
.block .body{padding:0 3.1mm 1.7mm;font-size:8.8pt;line-height:1.38;overflow-wrap:break-word}
.block.blue{background:var(--cyan-soft)} .block.blue .head{background:var(--cyan)}
.block.pink{background:var(--pink-soft)} .block.pink .head{background:var(--pink)}
.block.green{background:var(--green-soft)} .block.green .head{background:var(--green)}
.block.yellow{background:var(--amber-soft)} .block.yellow .head{background:var(--amber)}
.block.peach{background:var(--peach-soft)} .block.peach .head{background:var(--peach)}
p{margin:.5mm 0;line-height:1.38}
ul.clean,ol.clean{margin:.2mm 0 0;padding-left:4.5mm}
ul.clean li,ol.clean li{margin:.32mm 0;line-height:1.37}
b{font-weight:800}
.small{font-size:8.25pt}.tiny{font-size:7.65pt}
.media-row{display:grid;grid-template-columns:minmax(0,1.62fr) minmax(48mm,.78fr);gap:2.3mm;align-items:center}
.media-row.equal{grid-template-columns:1fr 1fr}
.media-row.eye{grid-template-columns:minmax(0,1.38fr) minmax(65mm,.9fr)}
.media-row.defect{grid-template-columns:minmax(0,1.35fr) minmax(64mm,.9fr)}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:2mm;align-items:start}
.three-col{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5mm;align-items:stretch}
.figure{padding:0;text-align:center;line-height:1}
.figure img{display:block;margin:0 auto;max-width:100%;height:auto;object-fit:contain;filter:drop-shadow(0 1.1px 1.6px rgba(30,40,55,.12))}
.figcap{margin-top:.35mm;font-size:7.35pt;color:#536572;line-height:1.24;font-weight:700}
.img-eye{max-height:62mm}.img-accom{max-height:48mm}.img-defect{max-height:38mm}.img-prism{max-height:42mm}.img-disp{max-height:48mm}.img-newton{max-height:42mm}.img-rainbow{max-height:48mm}.img-atm{max-height:43mm}.img-scatter{max-height:43mm}
.callout{margin:.45mm 0 0;border-left:2.5px solid var(--purple);background:rgba(255,255,255,.9);padding:.7mm 1.3mm;border-radius:0 1.4mm 1.4mm 0;font-size:8.15pt;line-height:1.34}
.note-box{border:1px dashed #c08568;background:rgba(255,255,255,.76);border-radius:1.4mm;padding:.7mm 1.3mm;font-size:8.05pt;line-height:1.33;margin-top:.45mm}
.rule-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:1mm;margin-top:.55mm}
.rule-pill{background:#fff;border:1px solid #d2d8df;border-radius:1.5mm;padding:.65mm .5mm;text-align:center;font-size:7.6pt;font-weight:800;line-height:1.22}
.rule-pill em{display:block;font-style:normal;font-size:8.6pt;color:#6a3c73;margin-bottom:.1mm}
table{width:100%;border-collapse:separate;border-spacing:0;border:1px solid #d4dadd;border-radius:1.6mm;overflow:hidden;font-size:8.05pt}
th{background:#ead3e9;color:#522f55;font-weight:800;padding:.85mm 1.05mm;text-align:left}
td{padding:.68mm 1.05mm;border-top:1px solid #e2d9e1;background:#fff;vertical-align:top;line-height:1.30}
tr:nth-child(even) td{background:#fcf8fc}
.vibgyor{display:flex;gap:.8mm;align-items:center;justify-content:center;margin-top:.7mm;flex-wrap:wrap}
.vibgyor span{min-width:12mm;padding:.8mm .9mm;border-radius:1.4mm;text-align:center;font-size:7.7pt;font-weight:900;border:1px solid rgba(0,0,0,.12);background:#fff}
.sequence{display:grid;grid-template-columns:repeat(3,1fr);gap:1mm;margin-top:.7mm}
.sequence div{background:#fff;border:1px solid #d8dfe4;border-radius:1.5mm;padding:.8mm 1mm;text-align:center;font-size:7.8pt;font-weight:800;line-height:1.25}
.qbox{background:#fff;border:1px solid #d2d9de;border-radius:1.6mm;padding:.8mm 1.2mm;margin-top:.55mm}
.qbox b{color:#7b3f80}
.p2 .block,.p3 .block,.p4 .block,.p5 .block{margin-top:.72mm}
.p2 .block .body,.p3 .block .body,.p4 .block .body,.p5 .block .body{padding-bottom:1.55mm}

.number-chip{display:inline-flex;align-items:center;justify-content:center;width:5.3mm;height:5.3mm;border-radius:50%;background:var(--purple);color:#fff;font-weight:900;margin-right:1mm;font-size:7.5pt;vertical-align:middle;flex:0 0 auto}
.defect-name-row{display:grid;grid-template-columns:repeat(3,1fr);gap:1.2mm;margin-top:.65mm}
.defect-name-card{background:rgba(255,255,255,.92);border:1px solid #d3dbe1;border-radius:1.7mm;padding:.85mm 1.1mm;display:flex;align-items:center;justify-content:flex-start;font-size:8pt;font-weight:800;line-height:1.22;min-height:10mm}
.defect-compare{display:grid;grid-template-columns:13mm minmax(0,1fr) minmax(0,1fr);gap:1px;background:#b9dce7;border:1px solid #b9dce7;border-radius:1.8mm;overflow:hidden;margin-top:.25mm}
.defect-compare>div{background:#eef9fc;padding:.9mm 1mm;min-width:0}
.defect-compare .corner{background:#d9f0f7}
.defect-compare .col-title{display:flex;align-items:center;justify-content:center;text-align:center;background:#d8eff6;color:#2d6072;font-size:8.6pt;font-weight:900;line-height:1.18;min-height:8.2mm}
.defect-compare .row-head{display:flex;align-items:center;justify-content:center;text-align:center;background:#d8eff6;color:#2d6072;font-size:7.7pt;font-weight:900;letter-spacing:.05px;padding:.7mm .4mm}
.defect-compare .cell{font-size:7.65pt;line-height:1.25;display:flex;flex-direction:column;background:#eef9fc}
.defect-compare .cell ul.clean,.defect-compare .cell ol.clean{margin:0;padding-left:3.6mm}
.defect-compare .cell ul.clean li,.defect-compare .cell ol.clean li{margin:.18mm 0;line-height:1.25}
.defect-compare .figure{margin:.28mm 0 0;margin-top:auto;display:flex;align-items:flex-end;justify-content:center;min-height:21mm}
.defect-compare .img-defect{max-height:21mm}
.defect-compare .correction-img{max-height:19mm}
.parts-row{display:grid;grid-template-columns:1fr 1fr;gap:1.2mm;margin-top:.65mm}
.part-card{background:#fff;border:1px solid #d3dae0;border-radius:1.6mm;padding:.8mm 1.1mm;font-size:8pt;line-height:1.28}
.part-card .title{display:flex;align-items:center;color:var(--purple);font-weight:900;margin-bottom:.25mm}
.rainbow-layout{display:grid;grid-template-columns:1.05fr .95fr;gap:1.1mm;align-items:start;margin-top:.55mm}
.rainbow-panel,.conditions-panel{background:rgba(255,255,255,.92);border:1px solid #d8dfe4;border-radius:1.7mm;padding:.8mm 1mm}
.rainbow-seq-head,.conditions-head{margin:0 0 .35mm;color:var(--purple);font-size:8pt;font-weight:900}
.sequence-vertical{display:flex;flex-direction:column;align-items:center;gap:.4mm}
.seq-box{display:flex;align-items:center;justify-content:center;width:100%;min-height:8.5mm;background:#fff;border:1px solid #d8dfe4;border-radius:1.4mm;padding:.55mm .75mm;text-align:center;font-size:7.35pt;font-weight:800;line-height:1.2}
.down-arrow{font-size:10pt;line-height:1;color:#7b3f80;font-weight:900}
.conditions-list{display:flex;flex-direction:column;gap:.55mm}
.condition-item{display:flex;align-items:flex-start;background:#fff;border:1px solid #d8dfe4;border-radius:1.4mm;padding:.55mm .65mm;font-size:7.55pt;font-weight:700;line-height:1.22}
.condition-item .number-chip{width:4.7mm;height:4.7mm;font-size:7pt;margin-top:.1mm}
.example-image-row{display:grid;grid-template-columns:1fr 1fr;gap:1.1mm;margin-top:.8mm}
.example-card{background:rgba(255,255,255,.94);border:1px solid #d8dfe4;border-radius:1.7mm;padding:.75mm .8mm;text-align:center}
.example-card img{display:block;width:100%;height:auto;max-height:26mm;object-fit:cover;border-radius:1.2mm}
.example-cap{margin-top:.45mm;font-size:7.1pt;font-weight:700;line-height:1.2;color:#445662;text-align:left;display:flex;align-items:flex-start}
.example-cap .number-chip{width:4.7mm;height:4.7mm;font-size:7pt;margin-right:.8mm;flex:0 0 auto}
.atm-apps{display:grid;grid-template-columns:1fr 1fr;gap:1.15mm;margin-top:.65mm}
.atm-app{background:linear-gradient(180deg,#ffffff 0%,#f6fbfd 100%);border:1px solid #cfe0e7;border-radius:1.9mm;padding:1mm 1.1mm;text-align:center;font-size:7.75pt;font-weight:800;line-height:1.24;min-height:11mm;display:flex;align-items:center;justify-content:center;box-shadow:inset 0 0 0 1px rgba(255,255,255,.4)}

@media print{
  html,body{background:#fff}
  .page{margin:0;box-shadow:none}
  .chapter-title{margin-top:7mm}
}

/* ===== v7 layout refinements ===== */
.eye-parts-table td:first-child,.eye-parts-table th:first-child{width:29mm;white-space:nowrap}
.eye-parts-table td{vertical-align:top}
.img-bifocal{max-height:34mm;max-width:100%}
.bifocal-figure{margin-top:.7mm}
.refraction-compare th:first-child,.refraction-compare td:first-child{width:31mm}
.refraction-compare th{text-align:center}
.refraction-compare td:first-child{font-weight:800;color:#5a3261;background:#faf4fa}

/* ===== v7 alignment + image-retention refinements ===== */
.human-eye-intro{display:grid;grid-template-columns:minmax(0,1fr) 53mm;gap:2mm;align-items:center}
.human-eye-intro .figure{align-self:center}
.human-eye-intro .img-eye{max-height:29mm;width:auto}

.rainbow-layout{display:grid;grid-template-columns:1fr 1fr;gap:1.25mm;align-items:stretch;margin-top:.55mm}
.rainbow-panel,.conditions-panel{min-height:31mm;display:grid;grid-template-rows:auto 1fr;align-items:stretch;background:rgba(255,255,255,.92);border:1px solid #d8dfe4;border-radius:1.7mm;padding:.75mm .9mm}
.rainbow-seq-head,.conditions-head{display:flex;align-items:center;margin:0 0 .45mm;color:var(--purple);font-size:8pt;font-weight:900;line-height:1.15}
.sequence-vertical{display:grid;grid-template-rows:auto auto auto auto auto;align-content:center;justify-items:center;gap:.2mm}
.seq-box{width:100%;min-height:6.8mm;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #d8dfe4;border-radius:1.3mm;padding:.45mm .65mm;text-align:center;font-size:7.3pt;font-weight:800;line-height:1.18}
.down-arrow{font-size:9pt;line-height:1;color:#7b3f80;font-weight:900}
.conditions-list{display:grid;grid-template-rows:1fr 1fr;gap:.55mm;align-content:stretch}
.condition-item{min-height:10mm;height:100%;display:flex;align-items:center;background:#fff;border:1px solid #d8dfe4;border-radius:1.3mm;padding:.55mm .65mm;font-size:7.5pt;font-weight:700;line-height:1.2}

.atm-apps{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:9mm 9mm;gap:1.1mm;margin-top:.65mm;align-items:stretch}
.atm-app{height:9mm;min-height:9mm;padding:.7mm 1mm;border:1px solid #cfe0e7;border-left:2.2px solid var(--cyan);border-radius:1.8mm;background:rgba(255,255,255,.95);box-shadow:none;display:flex;align-items:center;justify-content:center;text-align:center;font-size:7.6pt;font-weight:800;line-height:1.18}

.tyndall-examples-title{display:inline-block;margin:.7mm 0 .55mm;padding:.45mm 1.4mm;border-radius:1.2mm;background:#5fae43;color:#fff;font-size:7.8pt;font-weight:900;line-height:1.15}
.example-image-row{display:grid;grid-template-columns:1fr 1fr;gap:1.2mm;margin-top:0;align-items:start}
.example-card{padding:.7mm .75mm;background:rgba(255,255,255,.92)}
.example-card img{width:100%;height:29mm;max-height:29mm;object-fit:contain;border-radius:1.1mm;background:#fff}
.example-cap{margin-top:.45mm;display:block;text-align:center;font-size:7.15pt;line-height:1.22;font-weight:700;color:#344955}
.tyndall-main-img{max-height:39mm}


.p3 .img-atm{max-height:25mm}


/* ===== v8 refinements ===== */
.defects-main.block.blue,.presbyopia-block.block.blue{background:var(--cyan-soft)}
.defects-main.block.blue .head,.presbyopia-block.block.blue .head{background:var(--cyan)}
.defect-name-row{gap:1mm}
.defect-name-card{min-height:8.5mm;padding:.75mm 1mm;background:#fff;border:1px solid #cfe0e7;font-size:7.95pt}
.defect-compare{margin-top:.35mm;grid-template-columns:12.5mm minmax(0,1fr) minmax(0,1fr);background:#9fd7e6;border:1px solid #9fd7e6;border-radius:1.9mm;box-shadow:inset 0 0 0 1px rgba(255,255,255,.25)}
.defect-compare>div{background:#f7fdff;padding:.82mm .95mm}
.defect-compare .corner,.defect-compare .row-head,.defect-compare .col-title{background:#d8eff6}
.defect-compare .col-title{min-height:8mm;font-size:8.35pt;color:#22586a}
.defect-compare .row-head{font-size:7.75pt;color:#22586a;padding:.65mm .35mm}
.defect-compare .cell{font-size:7.78pt;line-height:1.24;background:#f7fdff}
.defect-compare .figure{min-height:20mm}
.defect-compare .img-defect{max-height:20mm}
.defect-compare .correction-img{max-height:18.5mm}

.presbyopia-note{margin:.1mm 0 .65mm;font-size:8.2pt;line-height:1.32}
.presbyopia-layout{display:grid;grid-template-columns:44mm 1fr;gap:1.9mm;align-items:start}
.presbyopia-layout .figure{background:rgba(255,255,255,.96);border:1px solid #cfe0e7;border-radius:1.8mm;padding:1mm .7mm}
.presbyopia-layout .img-bifocal{max-height:42mm;width:auto;max-width:100%}
.presbyopia-stack{display:grid;gap:.85mm}
.pres-box{background:#fff;border:1px solid #cfe0e7;border-radius:1.6mm;padding:.75mm 1mm;font-size:8.05pt;line-height:1.3}
.pres-box .box-title{display:flex;align-items:center;color:#22586a;font-weight:900;margin-bottom:.35mm;font-size:8.05pt;line-height:1.2}
.pres-box .number-chip{background:var(--cyan);width:4.9mm;height:4.9mm;font-size:7pt}
.pres-structure{display:grid;gap:.55mm;margin-top:.15mm}
.pres-part{background:#f7fdff;border:1px solid #dbeaf0;border-radius:1.35mm;padding:.55mm .8mm;font-size:8.05pt;line-height:1.28}
.pres-part .title{display:flex;align-items:center;color:#22586a;font-weight:900;margin-bottom:.15mm}
.pres-part .number-chip{background:var(--cyan);width:4.5mm;height:4.5mm;font-size:6.9pt}

.rainbow-layout{grid-template-columns:1fr 1fr;gap:.85mm;align-items:stretch;margin-top:.45mm}
.rainbow-panel,.conditions-panel{min-height:28mm;padding:.65mm .8mm}
.rainbow-seq-head,.conditions-head{margin:0 0 .25mm;font-size:8.35pt;line-height:1.14}
.sequence-vertical{gap:0;align-content:start}
.seq-box{min-height:7.2mm;padding:.45mm .65mm;font-size:8.05pt;line-height:1.18}
.down-arrow{font-size:7.6pt;line-height:.8;margin:-.1mm 0;color:var(--purple)}
.conditions-list{gap:.35mm}
.condition-item{min-height:8.2mm;padding:.45mm .6mm;font-size:8.05pt;line-height:1.18}
.condition-item .number-chip{background:var(--pink);width:4.55mm;height:4.55mm;font-size:6.8pt;margin-right:.7mm}

.atm-apps{gap:.65mm;margin-top:.5mm;align-items:stretch}
.atm-app{height:auto;min-height:8.1mm;padding:.55mm .9mm .55mm 1.1mm;justify-content:flex-start;text-align:left;font-size:7.75pt;line-height:1.16;gap:.5mm;border-left:2.6px solid var(--cyan);border-radius:1.45mm}

.tyndall-examples-title{margin:.55mm 0 .45mm;padding:.4mm 1.2mm;font-size:7.8pt}
.example-image-row{grid-template-columns:1fr 1fr;gap:1mm;align-items:start}
.example-card{padding:.6mm .65mm}
.example-card img{width:100%;height:24mm;max-height:24mm;object-fit:contain;border-radius:1mm;background:#fff}
.example-cap{margin-top:.35mm;display:flex;align-items:flex-start;text-align:left;font-size:7.2pt;line-height:1.2;font-weight:700;color:#344955}
.example-cap .number-chip{display:inline-flex;width:4.5mm;height:4.5mm;font-size:6.9pt;margin-right:.7mm;background:var(--green);color:#fff;flex:0 0 auto}



/* ===== v9 Tyndall layout ===== */
.tyndall-text{width:100%;}
.tyndall-bottom-row{
  display:grid;
  grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);
  gap:1.2mm;
  align-items:start;
  margin-top:.7mm;
}
.tyndall-main-card{
  min-width:0;
  background:rgba(255,255,255,.94);
  border:1px solid #cfe3c8;
  border-radius:1.7mm;
  padding:.65mm;
  display:flex;
  align-items:center;
  justify-content:center;
}
.tyndall-main-card img{
  display:block;
  width:100% !important;
  max-width:100% !important;
  height:auto !important;
  max-height:42mm !important;
  object-fit:contain !important;
  margin:0 auto;
}
.tyndall-examples-wrap{
  min-width:0;
}
.tyndall-examples-title{
  display:inline-block;
  margin:0 0 .45mm;
  padding:.38mm 1.15mm;
  border-radius:1.15mm;
  background:var(--green);
  color:#fff;
  font-size:7.8pt;
  font-weight:900;
  line-height:1.15;
}
.tyndall-examples-wrap .example-image-row{
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(0,1fr);
  gap:.8mm;
  width:100%;
  margin:0;
  align-items:start;
}
.tyndall-examples-wrap .example-card{
  min-width:0;
  width:100%;
  background:rgba(255,255,255,.94);
  border:1px solid #d6e5d0;
  border-radius:1.5mm;
  padding:.45mm;
  overflow:hidden;
}
.tyndall-examples-wrap .example-card img{
  display:block;
  width:100% !important;
  max-width:100% !important;
  height:23mm !important;
  max-height:23mm !important;
  object-fit:contain !important;
  object-position:center;
  margin:0 auto;
  border-radius:1mm;
  background:#fff;
}
.tyndall-examples-wrap .example-cap{
  margin-top:.35mm;
  display:flex;
  align-items:flex-start;
  text-align:left;
  font-size:7.05pt;
  line-height:1.18;
  font-weight:700;
  color:#344955;
}
.tyndall-examples-wrap .example-cap .number-chip{
  width:4.4mm;
  height:4.4mm;
  min-width:4.4mm;
  font-size:6.8pt;
  margin-right:.55mm;
  background:var(--green);
  color:#fff;
  flex:0 0 auto;
}



/* ===== v10 Tyndall alignment refinements ===== */
.tyndall-bottom-row{
  display:grid;
  grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr);
  gap:1.4mm;
  align-items:start;
  margin-top:.65mm;
}

/* Main Tyndall PNG: no card, border, white box, or forced background */
.tyndall-main-card{
  min-width:0;
  background:transparent !important;
  border:none !important;
  border-radius:0 !important;
  padding:0 !important;
  box-shadow:none !important;
  display:flex;
  align-items:flex-start;
  justify-content:center;
}
.tyndall-main-card img{
  display:block;
  width:100% !important;
  max-width:100% !important;
  height:auto !important;
  max-height:38mm !important;
  object-fit:contain !important;
  object-position:center top;
  margin:0 auto;
  background:transparent !important;
  filter:none;
}

.tyndall-examples-wrap{
  min-width:0;
  width:100%;
}
.tyndall-examples-wrap .example-image-row{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:1mm;
  width:100%;
  margin:0;
  align-items:stretch;
}
.tyndall-examples-wrap .example-card{
  min-width:0;
  width:100%;
  background:rgba(255,255,255,.94);
  border:1px solid #cfe0ca;
  border-radius:1.5mm;
  padding:.45mm;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  align-items:stretch;
}
.tyndall-examples-wrap .example-card img{
  display:block;
  width:100% !important;
  max-width:100% !important;
  height:auto !important;
  max-height:none !important;
  aspect-ratio:4 / 3;
  object-fit:contain !important;
  object-position:center;
  margin:0 auto;
  border-radius:1mm;
  background:transparent !important;
}
.tyndall-examples-wrap .example-cap{
  margin-top:.4mm;
  min-height:10.5mm;
  display:flex;
  align-items:flex-start;
  text-align:left;
  font-size:7.05pt;
  line-height:1.18;
  font-weight:700;
  color:#344955;
}
.tyndall-examples-wrap .example-cap .number-chip{
  width:4.4mm;
  height:4.4mm;
  min-width:4.4mm;
  font-size:6.8pt;
  margin-right:.55mm;
  background:var(--green);
  color:#fff;
  flex:0 0 auto;
}



/* ===== v11 Presbyopia + Tyndall refinements ===== */
.presbyopia-note{margin:.05mm 0 .55mm;font-size:8.2pt;line-height:1.32}
.presbyopia-layout{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:1.4mm;
  align-items:stretch;
}
.presbyopia-layout .figure{
  background:transparent;
  border:none;
  border-radius:0;
  padding:0;
  display:flex;
  align-items:center;
  justify-content:center;
  min-height:52mm;
}
.presbyopia-layout .img-bifocal{
  display:block;
  width:100%;
  max-width:100%;
  height:auto;
  max-height:52mm;
  object-fit:contain;
  margin:auto;
}
.presbyopia-stack{
  display:grid;
  grid-template-rows:auto auto auto;
  gap:.7mm;
  align-content:start;
}
.pres-box{
  background:#fff;
  border:1px solid #bcdde8;
  border-radius:1.6mm;
  padding:.7mm .9mm;
  font-size:8.05pt;
  line-height:1.28;
}
.pres-box .box-title{
  display:block;
  color:#22586a;
  font-weight:900;
  margin:0 0 .35mm;
  font-size:8.2pt;
  line-height:1.2;
}
.pres-list{
  display:grid;
  gap:.45mm;
}
.pres-item{
  display:flex;
  align-items:flex-start;
  gap:.15mm;
  background:#f7fdff;
  border:1px solid #dbeaf0;
  border-radius:1.25mm;
  padding:.45mm .6mm;
  font-size:8.05pt;
  line-height:1.25;
}
.pres-item .number-chip{
  background:var(--cyan);
  width:4.6mm;
  height:4.6mm;
  font-size:6.9pt;
  margin-right:.6mm;
  flex:0 0 auto;
}
.pres-structure{display:grid;gap:.45mm;margin-top:0}
.pres-part{
  background:#f7fdff;
  border:1px solid #dbeaf0;
  border-radius:1.25mm;
  padding:.45mm .6mm;
  font-size:8.05pt;
  line-height:1.25;
}
.pres-part .title{
  display:flex;
  align-items:flex-start;
  color:#22586a;
  font-weight:900;
  margin-bottom:.1mm;
}
.pres-part .number-chip{
  background:var(--cyan);
  width:4.6mm;
  height:4.6mm;
  font-size:6.9pt;
  margin-right:.6mm;
  flex:0 0 auto;
}

.tyndall-bottom-row{
  display:grid;
  grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);
  gap:1.2mm;
  align-items:start;
  margin-top:.55mm;
}
.tyndall-main-card{
  min-width:0;
  background:transparent;
  border:none;
  border-radius:0;
  padding:0;
  display:flex;
  align-items:center;
  justify-content:center;
}
.tyndall-main-card img{
  display:block;
  width:100% !important;
  max-width:100% !important;
  height:auto !important;
  max-height:41mm !important;
  object-fit:contain !important;
  margin:0 auto;
}
.tyndall-examples-wrap .example-image-row{
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(0,1fr);
  gap:.75mm;
  width:100%;
  margin:0;
  align-items:start;
}
.tyndall-examples-wrap .example-card{
  min-width:0;
  width:100%;
  background:rgba(255,255,255,.94);
  border:1px solid #d6e5d0;
  border-radius:1.45mm;
  padding:.4mm .4mm .25mm;
  overflow:hidden;
  display:flex;
  flex-direction:column;
}
.tyndall-examples-wrap .example-card img{
  display:block;
  width:100% !important;
  max-width:100% !important;
  height:22mm !important;
  max-height:22mm !important;
  object-fit:contain !important;
  object-position:center;
  margin:0;
  border-radius:1mm;
  background:#fff;
}
.tyndall-examples-wrap .example-cap{
  margin:.28mm 0 0 !important;
  padding:0 !important;
  display:flex;
  align-items:flex-start;
  text-align:left;
  font-size:7.05pt;
  line-height:1.18;
  font-weight:700;
  color:#344955;
  min-height:0 !important;
}
.tyndall-examples-wrap .example-cap span:last-child{
  margin:0;
  padding:0;
}
.tyndall-examples-wrap .example-card::after{content:none !important;display:none !important}



/* ===== v12: repaired Presbyopia + restored comparison section ===== */
.presbyopia-block{background:var(--cyan-soft) !important}
.presbyopia-block>.head{background:var(--cyan) !important}
.presbyopia-block>.body{padding-bottom:1.25mm !important}
.presbyopia-note{
  margin:.05mm 0 .55mm;
  font-size:8.15pt;
  line-height:1.30;
}
.presbyopia-layout{
  display:grid !important;
  grid-template-columns:minmax(0,1fr) minmax(0,1fr) !important;
  gap:1.35mm !important;
  align-items:stretch !important;
  width:100%;
}
.presbyopia-layout .bifocal-figure{
  min-width:0;
  min-height:45mm !important;
  height:100%;
  margin:0 !important;
  padding:.5mm !important;
  background:transparent !important;
  border:none !important;
  border-radius:0 !important;
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  overflow:hidden;
}
.presbyopia-layout .img-bifocal{
  display:block !important;
  width:100% !important;
  max-width:100% !important;
  height:auto !important;
  max-height:45mm !important;
  object-fit:contain !important;
  object-position:center !important;
  margin:auto !important;
}
.presbyopia-stack{
  min-width:0;
  display:flex !important;
  flex-direction:column !important;
  gap:.65mm !important;
  justify-content:flex-start;
}
.pres-box{
  background:rgba(255,255,255,.97) !important;
  border:1px solid #b8dbe6 !important;
  border-radius:1.55mm !important;
  padding:.62mm .8mm !important;
  font-size:8.05pt !important;
  line-height:1.26 !important;
  box-shadow:0 .35mm .7mm rgba(49,113,132,.06);
}
.pres-box .box-title{
  margin:0 0 .28mm !important;
  padding:0 !important;
  color:#23677b !important;
  font-size:8.15pt !important;
  font-weight:900 !important;
  line-height:1.18 !important;
}
.pres-list{
  display:flex !important;
  flex-direction:column !important;
  gap:.35mm !important;
}
.pres-item,
.pres-part{
  min-width:0;
  background:#f7fdff !important;
  border:1px solid #d8eaf0 !important;
  border-radius:1.2mm !important;
  padding:.42mm .55mm !important;
  font-size:7.9pt !important;
  line-height:1.22 !important;
}
.pres-item{
  display:flex !important;
  align-items:flex-start !important;
}
.pres-item .number-chip,
.pres-part .number-chip{
  width:4.45mm !important;
  height:4.45mm !important;
  min-width:4.45mm !important;
  margin-right:.55mm !important;
  background:var(--cyan) !important;
  color:#fff !important;
  font-size:6.7pt !important;
}
.pres-structure{display:flex !important;flex-direction:column !important;gap:.35mm !important;margin:0 !important}
.pres-part .title{display:flex !important;align-items:flex-start !important;color:#23677b !important;font-weight:900 !important;margin-bottom:.12mm !important}

/* Keep the board-exam comparison table visible and compact on page 2 */
.refraction-compare{font-size:7.75pt !important}
.refraction-compare th{padding:.65mm .8mm !important}
.refraction-compare td{padding:.52mm .8mm !important;line-height:1.24 !important}



/* ===== v13: full-width defect table + rainbow arrows + Tyndall layout ===== */
/* 1. Myopia / Hypermetropia comparison — use the printable width more effectively */
.p2 > .inner > .block:first-child{
  overflow:visible;
}
.p2 > .inner > .block:first-child > .body{
  padding-left:0 !important;
  padding-right:0 !important;
}
.p2 .defect-compare{
  width:100% !important;
  margin-left:0 !important;
  margin-right:0 !important;
  grid-template-columns:17mm minmax(0,1fr) minmax(0,1fr) !important;
  gap:1px !important;
}
.p2 .defect-compare .row-head{
  padding:.75mm .7mm !important;
  font-size:7.9pt !important;
  line-height:1.18 !important;
  white-space:normal !important;
}
.p2 .defect-compare .col-title{
  padding:.75mm 1.1mm !important;
  font-size:8.45pt !important;
  line-height:1.16 !important;
}
.p2 .defect-compare .cell{
  padding:.9mm 1.15mm !important;
  font-size:7.8pt !important;
  line-height:1.24 !important;
}
.p2 .defect-compare .cell ul.clean,
.p2 .defect-compare .cell ol.clean{
  padding-left:4mm !important;
}

/* 2. Rainbow sequence — thicker arrows without changing the existing spacing */
.rainbow-panel .down-arrow{
  font-size:7.6pt !important;
  line-height:.8 !important;
  margin:-.1mm 0 !important;
  font-weight:900 !important;
  -webkit-text-stroke:.45px currentColor;
  text-shadow:.3px 0 currentColor,-.3px 0 currentColor,0 .3px currentColor,0 -.3px currentColor;
}

/* 3. Tyndall Effect — left diagram + two large square example boxes on the right */
.tyndall-bottom-row{
  display:grid !important;
  grid-template-columns:minmax(0,1fr) minmax(0,1fr) !important;
  gap:1.25mm !important;
  align-items:start !important;
  margin-top:.55mm !important;
  width:100% !important;
}
.tyndall-main-card{
  min-width:0 !important;
  min-height:0 !important;
  background:transparent !important;
  border:none !important;
  border-radius:0 !important;
  padding:0 !important;
  display:flex !important;
  align-items:flex-start !important;
  justify-content:center !important;
}
.tyndall-main-card img{
  display:block !important;
  width:88% !important;
  max-width:88% !important;
  height:auto !important;
  max-height:31mm !important;
  object-fit:contain !important;
  object-position:center top !important;
  margin:0 auto !important;
  background:transparent !important;
  filter:none !important;
}
.tyndall-examples-wrap{
  min-width:0 !important;
  width:100% !important;
}
.tyndall-examples-title{
  margin:0 0 .4mm !important;
}
.tyndall-examples-wrap .example-image-row{
  display:grid !important;
  grid-template-columns:repeat(2,minmax(0,1fr)) !important;
  gap:.8mm !important;
  width:100% !important;
  margin:0 !important;
  align-items:start !important;
}
.tyndall-examples-wrap .example-card{
  min-width:0 !important;
  width:100% !important;
  background:transparent !important;
  border:none !important;
  border-radius:0 !important;
  padding:0 !important;
  overflow:visible !important;
  display:flex !important;
  flex-direction:column !important;
  align-items:stretch !important;
}
.tyndall-examples-wrap .example-card img{
  display:block !important;
  width:100% !important;
  max-width:100% !important;
  aspect-ratio:1 / 1 !important;
  height:auto !important;
  max-height:none !important;
  object-fit:contain !important;
  object-position:center !important;
  margin:0 auto !important;
  padding:.3mm !important;
  border:1px solid #cfe0ca !important;
  border-radius:1.35mm !important;
  background:rgba(255,255,255,.96) !important;
}
.tyndall-examples-wrap .example-cap{
  margin:.38mm 0 0 !important;
  padding:0 .15mm !important;
  min-height:0 !important;
  display:flex !important;
  align-items:flex-start !important;
  justify-content:center !important;
  text-align:center !important;
  font-size:7pt !important;
  line-height:1.18 !important;
  font-weight:700 !important;
  color:#344955 !important;
}
.tyndall-examples-wrap .example-cap .number-chip{
  width:4.35mm !important;
  height:4.35mm !important;
  min-width:4.35mm !important;
  margin-right:.5mm !important;
  margin-top:0 !important;
  background:var(--green) !important;
  color:#fff !important;
  font-size:6.7pt !important;
  flex:0 0 auto !important;
}
.tyndall-examples-wrap .example-cap span:last-child{
  display:block !important;
  flex:1 1 auto !important;
  text-align:center !important;
}



/* ===== v14: Tyndall section visual balance ===== */
.p4 .block.green .body{padding-bottom:1.25mm !important;}
.tyndall-bottom-row{
  display:grid !important;
  grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr) !important;
  gap:1.8mm !important;
  align-items:start !important;
  width:100% !important;
  margin-top:.45mm !important;
}
.tyndall-main-card{
  min-width:0 !important;
  background:transparent !important;
  border:none !important;
  padding:0 !important;
  display:flex !important;
  align-items:flex-start !important;
  justify-content:center !important;
}
.tyndall-main-card img{
  display:block !important;
  width:92% !important;
  max-width:92% !important;
  height:auto !important;
  max-height:34mm !important;
  object-fit:contain !important;
  object-position:center center !important;
  margin:.4mm auto 0 !important;
  background:transparent !important;
  filter:none !important;
}
.tyndall-examples-wrap{
  min-width:0 !important;
  width:100% !important;
  display:grid !important;
  grid-template-rows:auto auto !important;
  align-content:start !important;
}
.tyndall-examples-title{
  justify-self:start !important;
  margin:0 0 .45mm !important;
  padding:.38mm 1.2mm !important;
  border-radius:1.1mm !important;
  background:var(--green) !important;
  color:#fff !important;
  font-size:7.8pt !important;
  font-weight:900 !important;
  line-height:1.1 !important;
}
.tyndall-examples-wrap .example-image-row{
  display:grid !important;
  grid-template-columns:repeat(2,minmax(0,1fr)) !important;
  gap:1mm !important;
  width:100% !important;
  margin:0 !important;
  align-items:start !important;
}
.tyndall-examples-wrap .example-card{
  min-width:0 !important;
  width:100% !important;
  background:transparent !important;
  border:none !important;
  border-radius:0 !important;
  padding:0 !important;
  overflow:visible !important;
  display:grid !important;
  grid-template-rows:32mm auto !important;
  align-items:start !important;
}
.tyndall-examples-wrap .example-card img{
  display:block !important;
  width:100% !important;
  height:32mm !important;
  max-width:100% !important;
  max-height:32mm !important;
  aspect-ratio:auto !important;
  object-fit:contain !important;
  object-position:center center !important;
  margin:0 auto !important;
  padding:.35mm !important;
  border:1px solid #cfe0ca !important;
  border-radius:1.45mm !important;
  background:rgba(255,255,255,.96) !important;
}
.tyndall-examples-wrap .example-cap{
  margin:.45mm 0 0 !important;
  padding:0 .35mm !important;
  min-height:0 !important;
  display:flex !important;
  align-items:flex-start !important;
  justify-content:center !important;
  text-align:center !important;
  font-size:7.05pt !important;
  line-height:1.18 !important;
  font-weight:700 !important;
  color:#344955 !important;
}
.tyndall-examples-wrap .example-cap .number-chip{
  display:inline-flex !important;
  width:4.45mm !important;
  height:4.45mm !important;
  min-width:4.45mm !important;
  margin:0 .55mm 0 0 !important;
  background:var(--green) !important;
  color:#fff !important;
  font-size:6.8pt !important;
  flex:0 0 auto !important;
}
.tyndall-examples-wrap .example-cap span:last-child{
  display:block !important;
  flex:1 1 auto !important;
  text-align:center !important;
}



/* ===== v15: final Tyndall section alignment fix ===== */
.tyndall-bottom-row{
  display:grid !important;
  grid-template-columns:minmax(0,1fr) minmax(0,1fr) !important;
  gap:1.4mm !important;
  align-items:start !important;
  width:100% !important;
  margin-top:.35mm !important;
}
.tyndall-main-card{
  min-width:0 !important;
  width:100% !important;
  min-height:44mm !important;
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  background:transparent !important;
  border:none !important;
  padding:0 !important;
}
.tyndall-main-card img{
  display:block !important;
  width:80% !important;
  max-width:80% !important;
  height:auto !important;
  max-height:33mm !important;
  object-fit:contain !important;
  object-position:center center !important;
  margin:0 auto !important;
  background:transparent !important;
  border:none !important;
}
.tyndall-examples-wrap{
  min-width:0 !important;
  width:100% !important;
  display:block !important;
}
.tyndall-examples-title{
  margin:0 0 .4mm !important;
  padding:.35mm 1.15mm !important;
}
.tyndall-examples-wrap .example-image-row{
  display:grid !important;
  grid-template-columns:repeat(2,minmax(0,1fr)) !important;
  gap:1mm !important;
  width:100% !important;
  margin:0 !important;
  align-items:start !important;
}
.tyndall-examples-wrap .example-card{
  min-width:0 !important;
  width:100% !important;
  display:grid !important;
  grid-template-rows:35mm auto !important;
  align-items:start !important;
  justify-items:stretch !important;
  background:transparent !important;
  border:none !important;
  border-radius:0 !important;
  padding:0 !important;
  overflow:visible !important;
}
.tyndall-examples-wrap .example-card img{
  display:block !important;
  width:100% !important;
  max-width:100% !important;
  height:35mm !important;
  max-height:35mm !important;
  object-fit:contain !important;
  object-position:center center !important;
  margin:0 auto !important;
  padding:.45mm !important;
  border:1px solid #cfe0ca !important;
  border-radius:1.5mm !important;
  background:rgba(255,255,255,.98) !important;
}
.tyndall-examples-wrap .example-cap{
  margin:.32mm 0 0 !important;
  padding:0 .2mm !important;
  display:flex !important;
  align-items:flex-start !important;
  justify-content:center !important;
  text-align:center !important;
  font-size:7.05pt !important;
  line-height:1.16 !important;
  font-weight:700 !important;
  color:#344955 !important;
}
.tyndall-examples-wrap .example-cap .number-chip{
  display:inline-flex !important;
  width:4.35mm !important;
  height:4.35mm !important;
  min-width:4.35mm !important;
  margin:0 .45mm 0 0 !important;
  align-items:center !important;
  justify-content:center !important;
  background:var(--green) !important;
  color:#fff !important;
  font-size:6.8pt !important;
  flex:0 0 auto !important;
}
.tyndall-examples-wrap .example-cap span:last-child{
  flex:1 1 auto !important;
  text-align:center !important;
}



/* ===== v16: dispersion section enhancement ===== */
.vibgyor.colourful-spectrum{justify-content:flex-start;gap:.65mm;margin:.5mm 0 .65mm;}
.vibgyor.colourful-spectrum span{min-width:9.8mm;padding:.65mm .7mm;border-radius:1.25mm;font-size:7.25pt;font-weight:900;color:#fff;border:none;box-shadow:0 .5mm 1.2mm rgba(0,0,0,.14)}
.violet-pill{background:#7c3fb8}.indigo-pill{background:#4c49b9}.blue-pill{background:#1d84dd}.green-pill{background:#21a85a}.yellow-pill{background:#d6b114;color:#263238 !important}.orange-pill{background:#ef8c24}.red-pill{background:#d94a43}
.dispersion-notes{display:grid;gap:.6mm;margin-top:.4mm}
.dispersion-notes .pres-box{padding:.75mm .95mm;border-color:#cae6ce;background:rgba(255,255,255,.96)}
.dispersion-notes .box-title{color:#2f7d44;font-size:8pt;margin-bottom:.22mm}
.dispersion-notes .number-chip{background:var(--green);width:4.55mm;height:4.55mm;font-size:6.9pt;margin-right:.65mm}
.dispersion-notes .small-note{font-size:8.05pt;line-height:1.28}



/* ===== v17: simplified dispersion notes ===== */
.dispersion-bend-row{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:.8mm;
  margin-top:.5mm;
}
.dispersion-bend-box{
  background:#fff;
  border:1px solid #cae6ce;
  border-radius:1.35mm;
  padding:.55mm .75mm;
  font-size:8pt;
  line-height:1.24;
  text-align:center;
}
.dispersion-bend-box b{color:#2f7d44}


/* ===== Continuous web-notes mode: preserve original v17 block design ===== */
.he-continuous-shell{
  width:100%;
  max-width:none;
  overflow-x:hidden;
  background:#fff;
  color:var(--ink);
  padding:5px 8px 24px;
  margin:0;
  font-family:"Segoe UI",Arial,sans-serif;
}
.he-continuous-notes{
  width:100%;
  max-width:none;
  margin:0;
  padding:0;
}
.he-continuous-notes .block{
  margin:8px 0 10px;
  max-width:100%;
}
.he-continuous-notes .block .body{
  overflow:visible;
}
.he-continuous-notes .figure img{
  max-width:100%;
  height:auto;
}
.he-continuous-notes table{
  max-width:100%;
}
.he-continuous-notes .block[id]{
  scroll-margin-top:105px;
}
@media(max-width:700px){
  .he-continuous-shell{padding:4px 4px 18px;}
  .he-continuous-notes{width:100%;}
  .he-continuous-notes .media-row,
  .he-continuous-notes .media-row.eye,
  .he-continuous-notes .media-row.defect,
  .he-continuous-notes .two-col,
  .he-continuous-notes .three-col,
  .he-continuous-notes .rainbow-layout,
  .he-continuous-notes .tyndall-bottom-row,
  .he-continuous-notes .presbyopia-layout{
    grid-template-columns:1fr !important;
  }
}


/* ===== Full-screen-width notes override ===== */
.he-continuous-shell,
.he-continuous-notes{
  width:100% !important;
  max-width:none !important;
  min-width:0 !important;
  margin-left:0 !important;
  margin-right:0 !important;
}
.he-continuous-notes .block{
  width:100% !important;
  max-width:none !important;
}
.he-continuous-notes .block .body{
  width:100% !important;
  max-width:none !important;
}
.he-continuous-notes .media-row,
.he-continuous-notes .two-col,
.he-continuous-notes .three-col,
.he-continuous-notes .rainbow-layout,
.he-continuous-notes .tyndall-bottom-row,
.he-continuous-notes .presbyopia-layout,
.he-continuous-notes .defect-compare{
  width:100% !important;
  max-width:none !important;
}
.he-continuous-notes table{
  width:100% !important;
  max-width:none !important;
}
@media(min-width:1200px){
  .he-continuous-shell{padding-left:12px;padding-right:12px;}
}

  `,
  rawHtml: `

<div class="he-continuous-shell">
  <div class="he-continuous-notes" id="heContinuousNotes">
    <div class="block pink" id="he-topic-0">
<div class="head">The Human Eye</div>
<div class="body">
<ul class="clean">
<li>The human eye is like a <b>camera</b>. It has a lens in its structure.</li>
<li>The eyeball is approximately spherical in shape with a diameter of about <b>2.3 cm</b>.</li>
<li>Its lens system forms an image on a light-sensitive screen called the <b>retina</b>.</li>
<li>The eye lens forms an <b>inverted real image</b> of the object on the retina.</li>
</ul>
<img alt="Human Eye - Parts and Functions" src="images/cbse/class 10/human-eye/human_eye.png" style="display:block; margin:0 auto; width:100%; max-width:300px; height:auto;"/>
<table class="eye-parts-table" style="margin-top:.65mm">
<tr><th>Part</th><th>CBSE textbook terminology / function</th></tr>
<tr><td><b>Cornea</b></td><td>Light enters the eye through a thin membrane called the <b>cornea</b>. Most of the refraction for the light rays entering the eye occurs at the outer surface of the cornea. It forms the transparent bulge on the front surface of the eyeball.</td></tr>
<tr><td><b>Crystalline lens</b></td><td>The crystalline lens merely provides the finer adjustment of focal length required to focus objects at different distances on the retina.</td></tr>
<tr><td><b>Iris</b></td><td>Behind the cornea is the <b>iris</b>. Iris is a dark muscular diaphragm that controls the size of the pupil.</td></tr>
<tr><td><b>Pupil</b></td><td>The pupil regulates and controls the amount of light entering the eye.</td></tr>
<tr><td><b>Ciliary muscles</b></td><td>The curvature of eye lens is adjusted by the ciliary muscles. The change in curvature of the eye lens can thus change its focal length.</td></tr>
<tr><td><b>Retina</b></td><td>The retina is a delicate membrane having enormous number of light-sensitive cells. The light-sensitive cells get activated upon illumination and generate electrical signals. These signals are sent to the brain via the optic nerves.</td></tr>
</table>
</div>
</div><div class="block green" id="he-topic-1">
<div class="head">Near Point, Far Point &amp; Range of Human Eye</div>
<div class="body">
<table>
<tr><th>Term</th><th>Meaning</th><th>Normal eye</th></tr>
<tr><td><b>Near Point</b><br/>(Least Distance of Distinct Vision)</td><td>Minimum distance at which an object can be seen most distinctly without strain.</td><td><b>25 cm</b></td></tr>
<tr><td><b>Far Point</b></td><td>Farthest point up to which the eye can see objects clearly.</td><td><b>Infinity</b></td></tr>
<tr><td><b>Range</b></td><td>Range over which a normal eye sees objects clearly.</td><td><b>25 cm to infinity</b></td></tr>
</table>
</div>
</div><div class="block blue" id="he-topic-2">
<div class="head">Power of Accommodation</div>
<div class="body">
<div>
<div class="callout"><b>Power of accommodation:</b> The ability of the eye lens to adjust its focal length</div>
<ul class="clean">
<li>The curvature of the eye lens is adjusted by the <b>ciliary muscles</b>. A change in curvature changes the focal length of the eye lens</li>
<li>The focal length of the eye lens cannot be decreased below a certain minimum limit</li>
</ul>
<div class="two-col" style="margin-top:.6mm">
<div class="qbox"><b>Ciliary muscles relaxed</b><br/>Lens becomes thin → focal length increases → distant objects are seen clearly</div>
<div class="qbox"><b>Ciliary muscles contracted</b><br/>Lens becomes thicker → focal length decreases → nearby objects are seen clearly</div>
</div>
</div>
</div>
</div><div class="block yellow" id="he-topic-3">
<div class="head">Cataract</div>
<div class="body">
<ul class="clean">
<li>Sometimes, the crystalline lens of people at old age becomes <b>milky and cloudy</b>. This condition is called <b>cataract</b></li>
<li>It may cause partial or complete loss of vision. Vision can be restored through <b>cataract surgery</b></li>
</ul>
</div>
</div><div class="block blue defects-main" id="he-topic-4">
<div class="head">Refractive Defects of Vision</div>
<div class="body">
<ul class="clean">
<li>The eye may gradually lose its power of accommodation. Objects may not be seen distinctly and comfortably; vision becomes blurred due to refractive defects.</li>
<li>The three common refractive defects are <b>Myopia</b>, <b>Hypermetropia</b> and <b>Presbyopia</b>.</li>
<li><b>Correction of refractive defects:</b> suitable spherical lenses; these days, contact lenses or surgical interventions may also be used.</li>
</ul>
<div class="defect-name-row">
<div class="defect-name-card"><span class="number-chip">1</span>Myopia</div>
<div class="defect-name-card"><span class="number-chip">2</span>Hypermetropia</div>
<div class="defect-name-card"><span class="number-chip">3</span>Presbyopia</div>
</div>
</div>
</div><div class="block blue">
<div class="body">
<div class="defect-compare">
<div class="corner"></div>
<div class="col-title"><span class="number-chip">1</span>Myopia (Near-sightedness)</div>
<div class="col-title"><span class="number-chip">2</span>Hypermetropia (Far-sightedness)</div>
<div class="row-head">Defect</div>
<div class="cell">
<ul class="clean">
<li>Nearby objects are seen <b>clearly</b>, but distant objects are not seen distinctly.</li>
<li>The far point is <b>nearer than infinity</b>.</li>
<li>The image of a distant object is formed <b>in front of the retina</b>.</li>
</ul>
<div class="figure"><img alt="Myopic eye" class="img-defect" src="images/cbse/class 10/human-eye/myopia_uncorrected.png"/></div>
</div>
<div class="cell">
<ul class="clean">
<li>Distant objects are seen <b>clearly</b>, but nearby objects are not seen distinctly.</li>
<li>The near point is farther away than the normal near point of <b>25 cm</b>.</li>
<li>Light rays from a nearby object are focused <b>behind the retina</b>.</li>
</ul>
<div class="figure"><img alt="Hypermetropic eye" class="img-defect" src="images/cbse/class 10/human-eye/hypermetropia_uncorrected.png"/></div>
</div>
<div class="row-head">Causes</div>
<div class="cell">
<ol class="clean">
<li>Excessive curvature of the eye lens.</li>
<li>Elongation of the eyeball.</li>
</ol>
</div>
<div class="cell">
<ol class="clean">
<li>The focal length of the eye lens is too long.</li>
<li>The eyeball has become too small.</li>
</ol>
</div>
<div class="row-head">Correction</div>
<div class="cell">
            Use a <b>concave lens</b> of suitable power. It brings the image back on to the retina.
            <div class="figure"><img alt="Correction of myopia using concave lens" class="img-defect correction-img" src="images/cbse/class 10/human-eye/myopia_corrected.png"/></div>
</div>
<div class="cell">
            Use a <b>convex lens</b> of appropriate power. It provides the additional focusing power required to form the image on the retina.
            <div class="figure"><img alt="Correction of hypermetropia using convex lens" class="img-defect correction-img" src="images/cbse/class 10/human-eye/hypermetropia_corrected.png"/></div>
</div>
</div>
</div>
</div><div class="block blue presbyopia-block" id="he-topic-5">
<div class="head"><span class="number-chip">3</span>Presbyopia</div>
<div class="body">
<p class="presbyopia-note">In old age, the power of accommodation decreases. As a result, the near point recedes and a person cannot see nearby objects comfortably. This defect is called <b>Presbyopia</b>.</p>
<div class="presbyopia-layout">
<div class="figure bifocal-figure">
<img alt="Bifocal lens" class="img-bifocal" onerror="this.style.display='none'" src="images/cbse/class 10/human-eye/bi-focal-lens.png"/>
</div>
<div class="presbyopia-stack">
<div class="pres-box">
<div class="box-title">Causes</div>
<div class="pres-list">
<div class="pres-item"><span class="number-chip">1</span><span>Gradual weakening of the <b>ciliary muscles</b>.</span></div>
<div class="pres-item"><span class="number-chip">2</span><span>Diminishing flexibility of the <b>eye lens</b>.</span></div>
</div>
</div>
<div class="pres-box">
<div class="box-title">Correction</div>
      A person suffering from both myopia and hypermetropia may require <b>bifocal lenses</b>.
    </div>
<div class="pres-box">
<div class="box-title">Structure of bifocal lens</div>
<div class="pres-structure">
<div class="pres-part"><div class="title"><span class="number-chip">1</span><span>Upper portion - Concave lens</span></div>To facilitate distant vision.</div>
<div class="pres-part"><div class="title"><span class="number-chip">2</span><span>Lower portion - Convex lens</span></div>To facilitate near vision.</div>
</div>
</div>
</div>
</div>
</div>
</div><div class="block blue" id="he-topic-6">
<div class="head">Refraction of Light through a Prism</div>
<div class="body media-row">
<ul class="clean">
<li>A triangular glass prism has <b>two triangular bases</b> and <b>three rectangular lateral surfaces</b>.</li>
<li>The angle between its two lateral faces is called the <b>angle of the prism</b>.</li>
<li>The peculiar shape of the prism makes the emergent ray bend at an angle to the incident ray. This is called the <b>angle of deviation</b>.</li>
</ul>
<div class="figure"><img alt="Refraction through prism" class="img-prism" max-width:300px;="" src="images/cbse/class 10/human-eye/refraction-through-prism.svg" width:100%;=""/></div>
</div>
</div><div class="block green" id="he-topic-7">
<div class="head">Refraction through Glass Slab vs Glass Prism</div>
<div class="body">
<table class="refraction-compare">
<tr><th>Point of comparison</th><th>Glass Slab</th><th>Glass Prism</th></tr>
<tr><td>Refracting surfaces</td><td>The two opposite refracting faces are <b>parallel</b>.</td><td>The two refracting faces are <b>inclined</b> to each other.</td></tr>
<tr><td>Emergent ray</td><td>The emergent ray is <b>parallel to the incident ray</b>.</td><td>The emergent ray is <b>not parallel to the incident ray</b>.</td></tr>
<tr><td>Main effect</td><td>The ray suffers a <b>lateral displacement</b>.</td><td>The ray suffers an <b>angular deviation</b>.</td></tr>
<tr><td>Dispersion of white light</td><td>Colours produced at the first face recombine at the second parallel face, so no separated spectrum is seen in the emergent beam.</td><td>Different colours deviate through different angles, so a <b>spectrum</b> can be obtained.</td></tr>
<tr><td>Why?</td><td>Deviation at the second parallel face compensates the angular deviation produced at the first face.</td><td>Because the refracting faces are inclined, the deviations do not cancel.</td></tr>
</table>
</div>
</div><div class="block green" id="he-topic-8">
<div class="head">Dispersion of White Light by a Prism</div>
<div class="body media-row">
<div>
<ul class="clean">
<li>The splitting of light into its component colours is called <b>dispersion</b>.</li>
<li>A prism disperses white light into seven colours: <br/><b>Violet, Indigo, Blue, Green, Yellow, Orange and Red — VIBGYOR</b>.</li>
<li>The band of coloured components of a light beam is called its <b>spectrum</b>.</li>
</ul>
<div class="callout"><b>Cause of Dispersion:</b> Different colours of white light have <b>different wavelengths</b> and therefore bend by <b>different angles</b>.</div>
<div class="dispersion-bend-row">
<div class="dispersion-bend-box"><b>Most bending — Violet</b><br>(less wavelength)</br></div>
<div class="dispersion-bend-box"><b>Least bending — Red</b><br/>(more wavelength)</div>
</div>
</div>
<div class="figure"><img alt="Dispersion through prism" class="img-disp" src="images/cbse/class 10/human-eye/dispersion-by-prism.png"/></div>
</div>
</div><div class="block yellow" id="he-topic-9">
<div class="head">Recombination of the Spectrum of White Light — Newton Experiment</div>
<div class="body media-row">
<ul class="clean">
<li>Isaac Newton used a glass prism to obtain the spectrum of sunlight and tried to split the colours further with another similar prism; he did not get any more colours.</li>
<li>He placed a second identical prism in an <b>inverted position</b> with respect to the first prism.</li>
<li>All colours passed through the second prism and a beam of <b>white light</b> emerged from the other side.</li>
<li>This observation gave Newton the idea that <b>sunlight is made up of seven colours</b>.</li>
</ul>
<div class="figure"><img alt="Newton two prism experiment" class="img-newton" src="images/cbse/class 10/human-eye/recombination-white-light.svg"/></div>
</div>
</div><div class="block pink" id="he-topic-10">
<div class="head">Rainbow Formation</div>
<div class="body media-row">
<div>
<ul class="clean">
<li>Any light that gives a spectrum similar to sunlight is often referred to as <b>white light</b>.</li>
<li>A rainbow is a <b>natural spectrum</b> appearing in the sky after a rain shower.</li>
<li>It is caused by dispersion of sunlight by tiny water droplets in the atmosphere and is formed in a direction <b>opposite to the Sun</b>.</li>
<li>Water droplets act like small prisms: they refract and disperse sunlight, reflect it internally, and finally refract it again as it comes out.</li>
<li>Different colours reach the observer’s eye due to dispersion and internal reflection.</li>
<li>A rainbow may also be seen through a waterfall or water fountain on a sunny day with the <b>Sun behind the observer</b>.</li>
</ul>
<div class="rainbow-layout">
<div class="rainbow-panel">
<div class="rainbow-seq-head">Sequence of the rainbow phenomenon</div>
<div class="sequence-vertical">
<div class="seq-box">Refraction &amp; dispersion</div>
<div class="down-arrow">↓</div>
<div class="seq-box">Internal reflection</div>
<div class="down-arrow">↓</div>
<div class="seq-box">Refraction again</div>
</div>
</div>
<div class="conditions-panel">
<div class="conditions-head">Conditions for Rainbow Formation</div>
<div class="conditions-list">
<div class="condition-item"><span class="number-chip">1</span><span>Tiny <b>water droplets</b> must be present in the atmosphere.</span></div>
<div class="condition-item"><span class="number-chip">2</span><span>The <b>Sun should be behind the observer</b>.</span></div>
</div>
</div>
</div>
</div>
<div class="figure"><img alt="Rainbow formation" class="img-rainbow" src="images/cbse/class 10/human-eye/rainbow_formation.svg"/></div>
</div>
</div><div class="block yellow" id="he-topic-11">
<div class="head">Wavering of Objects in Hot Air</div>
<div class="body">
<ul class="clean">
<li>Random flickering or wavering of objects may be seen through a hot-air stream above a fire or radiator.</li>
<li>Hot air near the fire is lighter and has a <b>lower refractive index</b> than the cooler air above it.</li>
<li>As the air conditions keep changing, the <b>apparent position</b> of the object fluctuates.</li>
<li>This is a small-scale example of <b>atmospheric refraction</b>.</li>
</ul>
</div>
</div><div class="block blue" id="he-topic-12">
<div class="head">Atmospheric Refraction</div>
<div class="body">
<p>The refraction of light by the <b>earth’s atmosphere</b> is called atmospheric refraction.</p>
<div class="atm-apps">
<div class="atm-app">Apparent position of stars</div>
<div class="atm-app">Twinkling of stars</div>
<div class="atm-app">Advance sunrise &amp; delayed sunset</div>
<div class="atm-app">Apparent flattening of the Sun’s disc at sunrise and sunset</div>
</div>
</div>
</div><div class="block green" id="he-topic-13">
<div class="head">Apparent Position of Stars</div>
<div class="body media-row">
<ul class="clean">
<li>The apparent position of stars is due to atmospheric refraction.</li>
<li>As starlight enters the atmosphere, it undergoes <b>continuous refraction</b> through layers of air with gradually changing refractive index.</li>
<li>This bends starlight towards the normal, making a star appear <b>slightly higher than its actual position</b>, especially near the horizon.</li>
</ul>
<div class="figure"><img alt="Apparent position of stars" class="img-atm" src="images/cbse/class 10/human-eye/apparent_position_star.png" style="width: 500x;"/></div>
</div>
</div><div class="block pink" id="he-topic-14">
<div class="head">Twinkling of Stars</div>
<div class="body">
<ul class="clean">
<li>Stars twinkle due to <b>atmospheric refraction of starlight</b>.</li>
<li>Because of continuously changing refractive index, starlight undergoes continuous refraction.</li>
<li>Stars are very distant <b>point sources</b>. Even small changes in the path of light cause their apparent position to fluctuate.</li>
<li>The amount of light entering our eyes changes, so stars appear alternately brighter and fainter — the <b>twinkling effect</b>.</li>
</ul>
<div class="qbox"><b>Why don’t planets twinkle?</b><br/>Planets are much closer and appear as <b>extended sources</b>. They may be considered as collections of many point-sized sources; small variations from different points average out, nullifying the twinkling effect.</div>
</div>
</div><div class="block peach" id="he-topic-15">
<div class="head">Advance Sunrise and Delayed Sunset</div>
<div class="body media-row">
<ul class="clean">
<li>Advance sunrise and delayed sunset occur due to <b>atmospheric refraction</b>.</li>
<li>The Sun appears about <b>2 minutes earlier</b> before actual sunrise and about <b>2 minutes later</b> after actual sunset.</li>
<li>The atmosphere bends sunlight so that the Sun is visible even when it is <b>below the horizon</b>.</li>
<li>The apparent flattening of the Sun’s disc during sunrise and sunset is also caused by the same phenomenon.</li>
</ul>
<div class="figure"><img alt="Advance sunrise and delayed sunset" class="img-atm" src="images/cbse/class 10/human-eye/advance_sunrise.png"/></div>
</div>
</div><div class="block blue" id="he-topic-16">
<div class="head">Scattering of Light</div>
<div class="body">
<ul class="clean">
<li>The phenomenon of change in direction of propagation of light caused by large-sized molecules / colloidal particles is called <b>scattering of light</b>.</li>
<li>The colour of scattered light depends on the <b>size of the scattering particles</b>.</li>
<li>Very fine particles scatter mainly <b>blue light</b>; larger particles scatter light of longer wavelengths. If particles are large enough, the scattered light may even appear <b>white</b>.</li>
<li><b>Applications:</b> blue colour of the sky, colour of water in the deep sea, reddening of the Sun at sunrise and sunset, and the Tyndall effect.</li>
</ul>
</div>
</div><div class="block green" id="he-topic-17">
<div class="head">Tyndall Effect</div>
<div class="body">
<div class="tyndall-text">
<ul class="clean">
<li>The earth’s atmosphere is a heterogeneous mixture containing smoke, tiny water droplets, suspended dust particles and molecules of air.</li>
<li>When a beam of light strikes such fine particles, its path becomes <b>visible</b>. Light reaches us after being reflected diffusely by these particles.</li>
<li>Scattering of light by colloidal particles gives rise to the <b>Tyndall effect</b>.</li>
<li>The path of a beam through a <b>true solution is not visible</b>, but becomes visible in a <b>colloidal solution</b> where particle size is relatively larger.</li>
</ul>
</div>
<div class="tyndall-bottom-row">
<div class="tyndall-main-card">
<img alt="Tyndall effect" src="images/cbse/class 10/human-eye/tyndall_effect_true_vs_colloidal.png"/>
</div>
<div class="tyndall-examples-wrap">
<div class="tyndall-examples-title">Examples</div>
<div class="example-image-row">
<div class="example-card">
<img alt="A fine beam of sunlight entering a smoke-filled room through a small hole" src="images/cbse/class 10/human-eye/tyndall_example_smoky_room.png"/>
<div class="example-cap"><span class="number-chip">1</span><span><b>A fine beam of sunlight entering a smoke-filled room through a small hole</b></span></div>
</div>
<div class="example-card">
<img alt="Sunlight passing through the canopy of a dense forest" src="images/cbse/class 10/human-eye/tyndall_example_forest_canopy.png"/>
<div class="example-cap"><span class="number-chip">2</span><span><b>Sunlight passing through the canopy of a dense forest</b></span></div>
</div>
</div>
</div>
</div>
</div>
</div><div class="block yellow" id="he-topic-18">
<div class="head">Why is the Colour of the Clear Sky Blue?</div>
<div class="body">
<ul class="clean">
<li>Molecules of air and other fine particles in the atmosphere are smaller than the wavelength of visible light and are more effective in scattering light of <b>shorter wavelengths</b> at the blue end than longer wavelengths at the red end.</li>
<li>Red light has a wavelength about <b>1.8 times greater</b> than blue light.</li>
<li>Thus, when sunlight passes through the atmosphere, fine particles scatter <b>blue light more strongly</b> than red light.</li>
<li>The scattered blue light enters our eyes; therefore, the clear sky appears blue.</li>
</ul>
</div>
</div><div class="block pink" id="he-topic-19">
<div class="head">Why Does the Sky Appear Dark at Very High Altitudes?</div>
<div class="body">
<div class="qbox">Very fine atmospheric particles scatter short-wavelength light, mainly blue. At very high altitudes this scattering is not prominent because there is very little atmosphere; therefore, the sky appears <b>dark / black</b>.</div>
</div>
</div><div class="block peach" id="he-topic-20">
<div class="head">Why are Danger Signal Lights Red?</div>
<div class="body">
<p><b>Red light is least scattered by fog or smoke.</b> Therefore, it can be seen in the same colour from a greater distance.</p>
</div>
</div>
  </div>
</div>

  `,
  sections: [
  {
    "heading": "The Human Eye",
    "target": "he-topic-0"
  },
  {
    "heading": "Near Point, Far Point & Range of Human Eye",
    "target": "he-topic-1"
  },
  {
    "heading": "Power of Accommodation",
    "target": "he-topic-2"
  },
  {
    "heading": "Cataract",
    "target": "he-topic-3"
  },
  {
    "heading": "Refractive Defects of Vision",
    "target": "he-topic-4"
  },
  {
    "heading": "3 Presbyopia",
    "target": "he-topic-5"
  },
  {
    "heading": "Refraction of Light through a Prism",
    "target": "he-topic-6"
  },
  {
    "heading": "Refraction through Glass Slab vs Glass Prism",
    "target": "he-topic-7"
  },
  {
    "heading": "Dispersion of White Light by a Prism",
    "target": "he-topic-8"
  },
  {
    "heading": "Recombination of the Spectrum of White Light — Newton Experiment",
    "target": "he-topic-9"
  },
  {
    "heading": "Rainbow Formation",
    "target": "he-topic-10"
  },
  {
    "heading": "Wavering of Objects in Hot Air",
    "target": "he-topic-11"
  },
  {
    "heading": "Atmospheric Refraction",
    "target": "he-topic-12"
  },
  {
    "heading": "Apparent Position of Stars",
    "target": "he-topic-13"
  },
  {
    "heading": "Twinkling of Stars",
    "target": "he-topic-14"
  },
  {
    "heading": "Advance Sunrise and Delayed Sunset",
    "target": "he-topic-15"
  },
  {
    "heading": "Scattering of Light",
    "target": "he-topic-16"
  },
  {
    "heading": "Tyndall Effect",
    "target": "he-topic-17"
  },
  {
    "heading": "Why is the Colour of the Clear Sky Blue?",
    "target": "he-topic-18"
  },
  {
    "heading": "Why Does the Sky Appear Dark at Very High Altitudes?",
    "target": "he-topic-19"
  },
  {
    "heading": "Why are Danger Signal Lights Red?",
    "target": "he-topic-20"
  }
]
};
