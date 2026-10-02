/* =====================================================
   Magnetic Effects of Electric Current | Grade 10 Notes
   Continuous full-width rendering from attached HTML
   ===================================================== */
window.chapterNotes = {
  title: "Magnetic Effects of Electric Current",
  grade: "10",
  icon: "🧲",
  exactHtmlMode: true,
  continuousMode: true,
  exactStyle: `

/* Print-safe revision: all essential title/footer content is kept >=7-8 mm inside A4 edges. */
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
.inner{height:100%;padding:8mm 8mm 17mm}
.page1 .inner{height:calc(100% - 20mm);padding-top:2mm}

/* only chapter title on first page */
.chapter-title{height:13mm;margin:7mm 8mm 0;display:flex;align-items:center;justify-content:center;background:linear-gradient(110deg,#63336d,#8d448d 55%,#a7529f);color:#fff;font-weight:900;font-size:15pt;letter-spacing:.25px;text-transform:uppercase;border-radius:2.4mm}

/* footer: chapter at extreme left + colourful page medallion at extreme right */
.footer{position:absolute;left:8mm;right:8mm;bottom:7mm;display:flex;align-items:center;justify-content:space-between;color:#5f6974;font-size:7.2pt;font-weight:800;z-index:5}
.page-badge{width:9.5mm;height:9.5mm;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:8.2pt;font-weight:900;letter-spacing:.15px;background:linear-gradient(145deg,#693675,#a94e9f 60%,#d35f91);border:1.2px solid #f3c86a;box-shadow:0 1.2mm 2mm rgba(91,42,97,.20), inset 0 0 0 1px rgba(255,255,255,.32)}

.block{margin:1mm 0 0;border-radius:2.1mm;overflow:hidden;break-inside:avoid}
.block .head{display:inline-block;margin-left:3.4mm;transform:translateY(-.7mm);padding:.9mm 2.8mm;border-radius:1.7mm;color:#fff;font-size:9.7pt;line-height:1.08;font-weight:800;letter-spacing:.05px}
.block .body{padding:0 3.1mm 1.7mm;font-size:8.8pt;line-height:1.32}
.block.blue{background:var(--cyan-soft)} .block.blue .head{background:var(--cyan)}
.block.pink{background:var(--pink-soft)} .block.pink .head{background:var(--pink)}
.block.green{background:var(--green-soft)} .block.green .head{background:var(--green)}
.block.yellow{background:var(--amber-soft)} .block.yellow .head{background:var(--amber)}
.block.peach{background:var(--peach-soft)} .block.peach .head{background:var(--peach)}

p{margin:.6mm 0}
ul.clean,ol.clean{margin:.2mm 0 0;padding-left:4.5mm}
ul.clean li,ol.clean li{margin:.34mm 0}
b{font-weight:800}
.small{font-size:8.5pt}.tiny{font-size:7.8pt}

/* make use of horizontal A4 space; diagrams may sit beside text */
.media-row{display:grid;grid-template-columns:minmax(0,1.62fr) minmax(48mm,.78fr);gap:2.3mm;align-items:center}
.media-row.wide-text{grid-template-columns:minmax(0,1.8fr) minmax(44mm,.72fr)}
.media-row.equal{grid-template-columns:1.18fr .82fr}
.media-row.force{grid-template-columns:minmax(0,1.52fr) minmax(58mm,.92fr);align-items:center}
.media-row.domestic-top{grid-template-columns:minmax(0,1.05fr) minmax(82mm,.95fr);gap:2.5mm;align-items:center}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:2mm;align-items:start}
.three-col{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5mm;align-items:stretch}

.figure{padding:0;text-align:center;line-height:1}
.figure img{display:block;margin:0 auto;max-width:100%;height:auto;object-fit:contain;filter:drop-shadow(0 1.1px 1.6px rgba(30,40,55,.12))}
.figcap{margin-top:.3mm;font-size:7.35pt;color:#536572;line-height:1.24;font-weight:700}
.img-compass{max-height:40mm}.img-field{max-height:46mm}.img-thumb{max-height:48mm}.img-wire{max-height:49mm}.img-loop{max-height:49mm}.img-solenoid{max-height:49mm}.img-fleming{max-height:55mm}.img-force{max-height:84mm}.img-domestic{max-height:66mm}

.formula-row{display:grid;grid-template-columns:1fr 1fr;gap:1.4mm;margin-top:.85mm}
.formula{background:rgba(255,255,255,.9);border:1px solid #c8d7df;border-radius:1.6mm;padding:.85mm 1.2mm;text-align:center;font-weight:800;font-size:9.5pt;color:#2d5f70}
.formula span{display:block;font-size:7.15pt;font-weight:700;color:#617986;margin-top:.2mm;line-height:1.22}
.callout{margin:.45mm 0 0;border-left:2.5px solid var(--purple);background:rgba(255,255,255,.9);padding:.7mm 1.3mm;border-radius:0 1.4mm 1.4mm 0;font-size:8.15pt;line-height:1.29}

.note-box{border:1px dashed #c08568;background:rgba(255,255,255,.76);border-radius:1.4mm;padding:.7mm 1.3mm;font-size:8.05pt;line-height:1.28;margin-top:.45mm}
.properties-list{margin:.3mm 0 0;padding-left:4.5mm}.properties-list>li{margin:.45mm 0}.properties-list>li::marker{font-weight:800;color:var(--purple)}

.rule-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:1mm;margin-top:.55mm}
.rule-pill{
  background:#fff;
  border:1px solid #d2d8df;
  border-radius:1.5mm;
  padding:.65mm .5mm;
  text-align:center;
  font-size:7.5pt;
  font-weight:800;
  line-height:1.22;
}
.rule-pill em{
  display:block;
  font-style:normal;
  font-size:8.6pt;
  color:#6a3c73;
  margin-bottom:.1mm;
}
.chips{display:grid;grid-template-columns:repeat(5,1fr);gap:1mm;margin-top:.35mm}.chip{background:rgba(255,255,255,.9);border:1px solid #d4dde3;border-radius:1.5mm;text-align:center;padding:.6mm .4mm;font-size:7pt;font-weight:800;line-height:1.20;min-height:10.5mm}.chip span{display:block;font-size:10pt;margin-bottom:.1mm}

table{width:100%;border-collapse:separate;border-spacing:0;border:1px solid #d4dadd;border-radius:1.6mm;overflow:hidden;font-size:8.15pt}
th{background:#ead3e9;color:#522f55;font-weight:800;padding:.9mm 1.15mm;text-align:left}
td{padding:.72mm 1.15mm;border-top:1px solid #e2d9e1;background:#fff;vertical-align:top;line-height:1.27}tr:nth-child(even) td{background:#fcf8fc}

/* domestic circuits structured sub-sections */
.domestic-sub{background:rgba(255,255,255,.72);border:1px solid rgba(123,63,128,.18);border-radius:1.8mm;padding:1.25mm 1.7mm}
.domestic-sub h3{margin:0 0 .5mm;color:var(--purple);font-size:9.2pt;line-height:1.18}
.domestic-sub p{margin:.35mm 0}
.wire-card{position:relative;border-radius:1.6mm;padding:1.05mm 1.15mm 1.05mm 8.5mm;color:#26323b;text-align:left;font-weight:700;font-size:8pt;line-height:1.25;min-height:17mm;display:flex;flex-direction:column;justify-content:center;border:1.15px solid #5d6670;box-shadow:0 .5mm 1mm rgba(20,30,40,.06)}
.wire-card b{font-size:8.35pt;letter-spacing:.15px}
.wire-card span:not(.wire-code){font-weight:650;color:#44515c;margin-top:.25mm}
.wire-code{position:absolute;left:1.55mm;top:50%;transform:translateY(-50%);width:5.5mm;height:5.5mm;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#fff;color:#111;border:1.35px solid #111;font-weight:900;font-size:7.9pt;box-shadow:inset 0 0 0 .45mm #fff}
/* Monochrome-friendly wire cards: identity remains clear even in B&W photocopies. */
.wire-live{background:linear-gradient(135deg,#fff 0 78%,#e9e9e9 78% 100%);border-left:3px solid #111}
.wire-neutral{background:repeating-linear-gradient(0deg,#fff 0 4px,#f0f0f0 4px 8px);border-left:4px double #333}
.wire-earth{background:repeating-linear-gradient(135deg,#fff 0 6px,#ececec 6px 8px);border-left:3px dashed #333}
.number-chip{display:inline-flex;align-items:center;justify-content:center;width:5.3mm;height:5.3mm;border-radius:50%;background:var(--purple);color:#fff;font-weight:900;margin-right:1mm;font-size:7.5pt;vertical-align:middle}
.domestic-points{margin:.15mm 0 0;padding-left:4.6mm}
.domestic-points li{margin:.38mm 0}
.domestic-label{display:inline-block;font-weight:900;color:var(--purple);margin-right:.7mm}
.domestic-note{background:#fff;border:1px solid #d9d9d9;border-radius:1.5mm;padding:.75mm 1.2mm;margin-top:.55mm;font-size:8.15pt;line-height:1.28}
.p4 .img-domestic{max-height:55mm}
.p4 .block{margin-top:.85mm}
.p4 .block .body{padding-bottom:2mm}
.p4 .domestic-sub{padding:1.15mm 1.5mm}
.p4 .domestic-sub h3{margin-bottom:.4mm}


.p1 .block{margin-top:1.05mm}
.p2 .block{margin-top:1.1mm}
.p3 .block{margin-top:1.2mm}
.p4 .block{margin-top:1.15mm}
.p4 .domestic-sub{font-size:8.8pt;line-height:1.32;padding:1.35mm 1.65mm}
.p4 .two-col{gap:2.2mm}
.p4 .domestic-sub h3{font-size:9.4pt}
.p4 .block .body{padding-bottom:2.1mm}


.stack-wide .body{display:block}
.stack-wide .figure{margin-top:1mm}
.stack-wide .figure img{margin-left:auto;margin-right:auto}
.p1 .stack-wide .figure img{max-height:46mm}
.p2 .stack-wide .figure img{max-height:54mm}
.p3 .stack-wide .figure img{max-height:62mm}
.p4 .stack-wide .figure img{max-height:72mm}
.p3 .chips .chip{min-height:16mm}


/* Slightly more breathing room in text, while preserving the 4-page A4 layout. */
.p1 .block{margin-top:.72mm}
.p1 .img-compass{max-height:35mm}
.p1 .img-field{max-height:40mm}
.p1 .img-thumb{max-height:42mm}
.p2 .block{margin-top:.8mm}
.p2 .img-wire{max-height:45mm}
.p2 .img-loop{max-height:45mm}
.p2 .img-solenoid{max-height:45mm}


/* Student easy-reading rhythm: slightly wider space between text lines, not larger paragraph gaps. */
.block .body, .domestic-sub{line-height:1.32;}
.callout,.memory,.note-box,.domestic-note{line-height:1.29;}
td{line-height:1.27;}
.figcap{line-height:1.24;}


/* ===== Revision 14: print-safe content + aligned rule/force/device sections ===== */
/* Keep all main content safely inside the printable area; footer/page-number styling is retained. */
.inner{padding-left:8.5mm;padding-right:8.5mm;padding-bottom:18mm;}
.page1 .inner{padding-left:8.5mm;padding-right:8.5mm;padding-bottom:18mm;}
.chapter-title{margin-left:8.5mm;margin-right:8.5mm;}
.block{max-width:100%;}
.block .body{overflow-wrap:break-word;word-break:normal;}
.figure img{max-width:100%;}

/* Right-hand thumb rule: statement first; hint boxes on the left and diagram on the right. */
.thumb-statement{margin:0 0 .7mm 0;font-size:8.35pt;line-height:1.30;}
.thumb-lower{
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(46mm,.82fr);
  gap:2.2mm;
  align-items:center;
}
.thumb-hints{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:1.2mm;
  align-items:stretch;
}
.thumb-hints .rule-pill{
  width:100%;
  min-width:0;
  max-width:none;
  min-height:13mm;
  padding:.9mm 1mm;
}
.thumb-lower .figure{align-self:center;}
.thumb-lower .img-thumb{max-height:31mm;}

/* Fleming: statement first; compact rule + note cards on one side, diagram on the other. */
.fleming-statement{margin:0 0 .9mm 0;}
.fleming-lower{display:grid;grid-template-columns:minmax(0,1.18fr) minmax(54mm,.82fr);gap:2.5mm;align-items:center;}
.fleming-info{min-width:0;}
.fleming-info .rule-strip{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1.1mm;margin:.2mm 0 .9mm;}
.fleming-info .rule-pill{width:100%;min-width:0;max-width:none;min-height:14mm;padding:.8mm .8mm;}
.fleming-note-grid{display:grid;grid-template-columns:1fr 1fr;gap:1mm;}
.fleming-note{background:rgba(255,255,255,.84);border:1px dashed #a978aa;border-radius:1.4mm;padding:.8mm 1mm;font-size:7.7pt;line-height:1.3;}
.fleming-note b{color:#6b3f72;}
.fleming-lower .img-fleming{max-height:54mm;}

/* Force section: source points expressed as a clean comparison table. */
.force-intro{margin:0 0 .7mm;padding-left:4.5mm;}
.force-intro li{margin:.35mm 0;}
.force-table{font-size:7.65pt;margin-top:.6mm;}
.force-table th{padding:.75mm 1mm;}
.force-table td{padding:.62mm 1mm;line-height:1.27;}
.force-table .group{font-weight:900;color:#6f3e55;white-space:nowrap;}
.p3 .media-row.force{grid-template-columns:minmax(0,1.58fr) minmax(52mm,.76fr);gap:2.2mm;align-items:center;}
.p3 .img-force{max-height:69mm;}

/* Devices: all five cards on one single aligned row. */
.p3 .chips{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:1.15mm;margin-top:.45mm;align-items:stretch;}
.p3 .chip,.p3 .chip:nth-child(4),.p3 .chip:nth-child(5){grid-column:auto;min-width:0;min-height:15mm;padding:1mm .65mm;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.35mm;font-size:7.2pt;line-height:1.17;}
.p3 .chip span{display:block;font-size:10.2pt;margin:0;}

/* Keep the page-3 stack compact enough to stay clear of the fixed footer. */
.p3 .block{margin-top:.78mm;}
.p3 .block .body{padding-bottom:1.7mm;}
@media print{html,body{background:#fff}.page{margin:0;box-shadow:none}.chapter-title{margin-top:7mm}.footer{bottom:7mm;left:8mm;right:8mm}}


/* ===== Refinements requested for byjus12 ===== */
/* 1) Student-readable line spacing inspired by byjus1, without making the page look loose. */
.block .body{line-height:1.40;}
ul.clean li,ol.clean li{line-height:1.38;margin:.38mm 0;}
.callout,.memory,.note-box,.domestic-note{line-height:1.36;}
.domestic-sub{line-height:1.38;}
td{line-height:1.34;}
.figcap{line-height:1.28;}
p{line-height:1.38;}

/* 2) Compact content-width boxes: no stretched empty-looking pills. */
.formula-row{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:stretch;
  gap:1.5mm 2mm;
  margin-top:1mm;
}
.formula{
  flex:0 1 auto;
  width:max-content;
  min-width:47mm;
  max-width:76mm;
  padding:1mm 2.2mm;
}

.rule-strip{
  display:flex;
  flex-wrap:wrap;
  justify-content:flex-start;
  align-items:stretch;
  gap:1.2mm 1.5mm;
  margin-top:.8mm;
}
.rule-pill{
  flex:0 0 auto;
  width:max-content;
  min-width:27mm;
  max-width:48mm;
  padding:.9mm 2mm;
  line-height:1.25;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
.rule-pill em{font-size:8.7pt;margin-bottom:.25mm;}


/* Devices: balanced 3 + 2 card layout, centred and evenly spaced. */
.chips{
  display:grid;
  grid-template-columns:repeat(6,1fr);
  gap:1.6mm 2mm;
  margin-top:.8mm;
  align-items:stretch;
}
.chip{
  grid-column:span 2;
  min-height:13.8mm;
  padding:1.2mm 1.5mm;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:1mm;
  text-align:center;
  font-size:7.6pt;
  line-height:1.22;
  border-radius:1.8mm;
}
.chip:nth-child(4){grid-column:2 / span 2;}
.chip:nth-child(5){grid-column:4 / span 2;}
.chip span{display:inline-block;font-size:11pt;margin:0;line-height:1;flex:0 0 auto;}

/* Page number: byjus1-inspired purple tab, now at the safe bottom-right extreme. */
.footer{left:8mm;right:7mm;bottom:6.5mm;padding-right:15mm;min-height:8mm;justify-content:flex-start;}
.page-badge{
  position:absolute;
  right:0;
  bottom:-1.2mm;
  width:12mm;
  height:9mm;
  border-radius:4.5mm 0 0 4.5mm;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  font-size:8.8pt;
  font-weight:900;
  letter-spacing:.25px;
  background:linear-gradient(145deg,#713577,#9b4d9a 72%,#b65aa9);
  border:0;
  box-shadow:0 1mm 2mm rgba(71,37,78,.20), inset 0 0 0 1px rgba(255,255,255,.20);
}

/* Small vertical tightening only where needed to preserve the intended 4-page A4 flow. */
.p3 .block{margin-top:.8mm;}
.p3 .block .body{padding-bottom:1.55mm;}
.p3 .note-box{margin-top:.55mm;}
.p3 .chips{margin-top:.55mm;}



/* ===== Update: rule boxes + comparison table ===== */
.rule-feature{display:grid;grid-template-columns:minmax(44mm,.92fr) minmax(0,1fr);gap:2.4mm;align-items:center;margin-top:.6mm;}
.rule-feature .figure{margin:0;}
.thumb-feature .img-thumb{max-height:36mm;}
.fleming-feature .img-fleming{max-height:50mm;}
.rule-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.2mm;align-items:stretch;}
.rule-card{background:#fff;border:1px solid #d7dbe3;border-radius:2mm;overflow:hidden;box-shadow:0 .4mm .9mm rgba(20,30,40,.05);}
.rule-card-head{padding:.85mm 1.2mm;color:#fff;font-size:8.1pt;font-weight:800;line-height:1.15;text-align:center;}
.rule-card-body{padding:1.2mm 1.35mm;font-size:8pt;line-height:1.28;text-align:center;color:#22323f;min-height:11mm;display:flex;align-items:center;justify-content:center;}
.rule-card.amber .rule-card-head{background:linear-gradient(145deg,#cf8d1d,#e4a93c);}
.rule-card.cyan .rule-card-head{background:linear-gradient(145deg,#3ea6c6,#63bfd9);}
.rule-cards.three .span-two{grid-column:1 / -1;}
.rule-note{margin:.6mm 0 .85mm;border-style:dashed;}
.rule-note ol{margin:.6mm 0 0;padding-left:4.8mm;}
.rule-note li{margin:.28mm 0;line-height:1.3;}
.field-compare{font-size:7.7pt;}
.field-compare th{padding:.85mm 1mm;vertical-align:middle;}
.field-compare td{padding:.72mm .95mm;line-height:1.28;}
.field-compare td:first-child{font-weight:800;color:#5b3770;white-space:nowrap;}
.p4a .block{margin-top:1.05mm;}
.p4a .block .body{padding-bottom:1.8mm;}
.p4a .field-compare td ul{margin:.2mm 0 0;padding-left:3.5mm;}
.p4a .field-compare td li{margin:.18mm 0;line-height:1.25;}



/* ===== Requested layout update: thumb boxes side by side, diagram beside them ===== */
.thumb-feature{display:grid;grid-template-columns:minmax(0,1fr) minmax(34mm,.66fr);gap:2mm;align-items:center;margin-top:.55mm;}
.thumb-cards{display:grid;grid-template-columns:1fr 1fr;gap:1.5mm;align-items:stretch;}
.thumb-cards .rule-card{min-width:0;}
.thumb-cards .rule-card-body{white-space:nowrap;min-height:9.5mm;padding:1mm 1.5mm;}
.thumb-diagram{margin-top:0;text-align:center;}
.thumb-diagram .img-thumb{max-height:31mm;margin-left:auto;margin-right:auto;}


/* ===== Continuous full-width web-notes mode ===== */
.he-continuous-shell.magnetic-effects-continuous{
  width:100% !important;
  max-width:none !important;
  min-width:0 !important;
  margin:0 !important;
  padding:5px 8px 24px !important;
  overflow-x:hidden !important;
  background:#fff !important;
  color:var(--ink);
  font-family:"Segoe UI",Arial,sans-serif;
}
.magnetic-effects-continuous .he-continuous-notes{
  width:100% !important;
  max-width:none !important;
  min-width:0 !important;
  margin:0 !important;
  padding:0 !important;
}
.magnetic-effects-continuous .block{
  width:100% !important;
  max-width:none !important;
  margin:8px 0 10px !important;
}
.magnetic-effects-continuous .block .body{
  width:100% !important;
  max-width:none !important;
  overflow:visible !important;
}
.magnetic-effects-continuous .media-row,
.magnetic-effects-continuous .two-col,
.magnetic-effects-continuous .three-col,
.magnetic-effects-continuous .formula-row,
.magnetic-effects-continuous .thumb-feature,
.magnetic-effects-continuous .rule-feature,
.magnetic-effects-continuous .fleming-feature,
.magnetic-effects-continuous .chips,
.magnetic-effects-continuous .defect-compare{
  width:100% !important;
  max-width:none !important;
}
.magnetic-effects-continuous table{
  width:100% !important;
  max-width:none !important;
}
.magnetic-effects-continuous .figure img{
  max-width:100% !important;
  height:auto !important;
}
.magnetic-effects-continuous .block[id]{
  scroll-margin-top:105px;
}
@media(max-width:760px){
  .he-continuous-shell.magnetic-effects-continuous{padding:4px 4px 18px !important;}
  .magnetic-effects-continuous .media-row,
  .magnetic-effects-continuous .media-row.wide-text,
  .magnetic-effects-continuous .media-row.equal,
  .magnetic-effects-continuous .media-row.force,
  .magnetic-effects-continuous .media-row.domestic-top,
  .magnetic-effects-continuous .two-col,
  .magnetic-effects-continuous .three-col,
  .magnetic-effects-continuous .thumb-feature,
  .magnetic-effects-continuous .rule-feature,
  .magnetic-effects-continuous .fleming-feature{
    grid-template-columns:1fr !important;
  }
  .magnetic-effects-continuous .thumb-cards,
  .magnetic-effects-continuous .rule-cards{
    grid-template-columns:1fr 1fr !important;
  }
  .magnetic-effects-continuous .chips{
    grid-template-columns:repeat(2,minmax(0,1fr)) !important;
  }
  .magnetic-effects-continuous .chip,
  .magnetic-effects-continuous .chip:nth-child(4),
  .magnetic-effects-continuous .chip:nth-child(5){
    grid-column:auto !important;
  }
}

  `,
  rawHtml: `

<div class="he-continuous-shell magnetic-effects-continuous">
  <div class="he-continuous-notes" id="magneticEffectsContinuousNotes">
    <div class="block pink" id="mag-topic-0">
<div class="head">Introduction</div>
<div class="body">
<ul class="clean">
<li>In <b>1820</b>, <b>Hans Christian Oersted</b> accidentally discovered that compass needle got deflected when an electric current passed through a metallic wire placed nearby.</li>
<li>An electric current-carrying wire behaves like a <b>magnet</b>.</li>
<li>The electric current through a conductor produces a <b>magnetic effect</b>.</li>
<li>An electric current carrying a metallic conductor produces a <b>magnetic field around it</b>.</li>
<li>Electricity and Magnetism are linked to each other. This is known as <b>Electromagnetism</b>.</li>
</ul>
</div>
</div><div class="block green" id="mag-topic-1">
<div class="head">Magnetic Compass:</div>
<div class="body media-row">
<ul class="clean">
<li>It is a small device which is used for <b>navigation (used by sailors)</b>.</li>
<li>Its needle itself a small <b>bar magnet</b>.</li>
<li>The compass needle gets deflected when brought near a bar magnet.</li>
<li>The ends of the compass needle point approximately towards <b>north</b> and <b>south</b> directions.</li>
<li>The end pointing towards north is called <b>north seeking or north pole</b>. The end pointing towards south is called <b>south seeking or south pole</b>.</li>
<li><b>Like poles repel</b>, while <b>unlike poles</b> of magnets attract each other.</li>
</ul>
<div class="figure"><img alt="Magnetic Compass" class="img-compass" src="/images/cbse/class%2010/magnetic-effects/top_view_magnetic_compass.svg"/><div class="figcap"></div></div>
</div>
</div><div class="block blue" id="mag-topic-2">
<div class="head">Magnetic Field</div>
<div class="body">
<ul class="clean">
<li>The region surrounding a magnet, in which the force of the magnet can be detected, is said to have a <b>magnetic field</b>.</li>
<li>The magnet exerts its influence in the region surrounding it.</li>
<li>Magnetic field is a quantity that has both <b>direction</b> and <b>magnitude</b>.</li>
<li>The direction of the magnetic field is taken to be the direction in which a <b>north pole of the compass needle</b> moves inside it.</li>
<li>The magnitude (strength) of the magnetic field produced at a given point increases as the <b>current through the wire increases</b></li>
<li>The magnetic field produced by a current-carrying straight wire depends inversely on the <b>distance</b> from it.</li>
</ul>
<div class="formula-row"><div class="formula">B ∝ I<span>current increases → magnetic field increases</span></div><div class="formula">B ∝ 1/r<span>distance increases → magnetic field decreases</span></div></div>
</div>
</div><div class="block blue stack-wide" id="mag-topic-3">
<div class="head">Magnetic Field lines &amp; Properties</div>
<div class="body">
<div>
<ul class="clean"><li>Field lines are used to represent a <b>magnetic field</b>.</li></ul>
<ol class="properties-list">
<li><b>The magnetic field lines are closed curves.</b><div class="callout">By convention, the field lines emerge from the <b>north pole</b> and merge at the <b>south pole</b>. Inside the magnet, the direction of field lines is from its <b>south pole to its north pole</b>. Thus, the magnetic field lines are <b>closed curves</b>.</div></li>
<li><b>No two field-lines are found to cross each other.</b><div class="callout">If two field-lines crossed each other, then at the point of intersection the compass needle would point towards two directions, which is not possible.</div></li>
</ol>
</div>
<div class="figure"><img alt="Field lines around a bar magnet" class="img-field" src="/images/cbse/class%2010/magnetic-effects/barmagnet.png"/><div class="figcap"></div></div>
</div>
</div><div class="block yellow" id="mag-topic-4">
<div class="head">Right-Hand Thumb Rule (Maxwell’s Corkscrew Rule)</div>
<div class="body">
<p class="thumb-statement">Hold a current-carrying straight conductor in the right hand such that the <b>thumb points towards the direction of current</b>, then the fingers curl around the conductor in the direction of the <b>magnetic field lines</b>.</p>
<div class="thumb-feature">
<div class="rule-cards thumb-cards">
<div class="rule-card amber">
<div class="rule-card-head">Thumb</div>
<div class="rule-card-body">Direction of <b>current (I)</b></div>
</div>
<div class="rule-card amber">
<div class="rule-card-head">Curled fingers</div>
<div class="rule-card-body">Direction of <b>magnetic field (B)</b></div>
</div>
</div>
<div class="figure thumb-diagram">
<img alt="Right-Hand Thumb Rule" class="img-thumb" src="/images/cbse/class%2010/magnetic-effects/right-hand-thumb-rule1.png"/>
</div>
</div>
</div>
</div><div class="block blue stack-wide" id="mag-topic-5">
<div class="head">Magnetic Field due to a current-carrying straight conductor</div>
<div class="body">
<ul class="clean">
<li>The concentric circles representing the magnetic field around a current-carrying straight wire become <b>larger and larger</b> as we move away from it.</li>
<li>The magnetic field produced by a current-carrying wire at a given point depends directly on the <b>current</b>.</li>
<li>The magnetic field produced by a given current in the conductor <b>decreases as the distance from it increases</b>.</li>
</ul>
<div class="figure"><img alt="Magnetic field due to straight current-carrying conductor" class="img-wire" src="/images/cbse/class%2010/magnetic-effects/filed-due-to-current-carrying-wire.png"/></div>
</div>
</div><div class="block green stack-wide" id="mag-topic-6">
<div class="head">Magnetic Field due to a current through a circular Loop</div>
<div class="body">
<ul class="clean">
<li>At every point of a current-carrying circular loop, the concentric circles representing the magnetic field around it would become larger and larger as we move away from the wire.</li>
<li>By the time we reach at the centre of the circular loop, the arcs of these big circles would appear as <b>straight lines</b>.</li>
<li>Every point on the wire carrying current would give rise to the magnetic field appearing as straight lines at the center of the loop.</li>
<li>By applying the right-hand thumb rule, it is easy to check that every section of the wire contributes to the magnetic field lines in the <b>same direction within the loop</b>.</li>
</ul>
<div class="figure"><img alt="Magnetic field due to current through circular loop" class="img-loop" src="/images/cbse/class%2010/magnetic-effects/field-due-to-current-carrying-circular-loop1.png"/></div>
</div>
</div><div class="block green stack-wide" id="mag-topic-7">
<div class="head">Solenoid &amp; Magnetic Field due to a Current in a Solenoid</div>
<div class="body">
<ul class="clean">
<li>A coil of many circular turns of insulated copper wire wrapped closely in the shape of a <b>cylinder</b> is called a <b>solenoid</b>.</li>
<li>The pattern of the magnetic field produced by a current-carrying solenoid is similar to the field produced by a <b>magnet</b>.</li>
<li>One end of the solenoid behaves as a magnetic <b>north pole</b>, while the other behaves as the <b>south pole</b>.</li>
<li>The field lines inside the solenoid are in the form of <b>parallel straight lines</b>.</li>
<li>This indicates that the magnetic field is the same at all points inside the solenoid. That is, the field is <b>uniform inside the solenoid</b>.</li>
</ul>
<div class="figure"><img alt="Solenoid magnetic field" class="img-solenoid" src="/images/cbse/class%2010/magnetic-effects/solenoid1.png"/></div>
</div>
</div><div class="block pink" id="mag-topic-8">
<div class="head">Electromagnet</div>
<div class="body"><p>A strong magnetic field produced inside a solenoid can be used to magnetise a piece of magnetic material, like <b>soft iron</b>, when placed inside the coil. The magnet so formed is called an <b>electromagnet</b>.</p></div>
</div><div class="block blue" id="mag-topic-9">
<div class="head">Fleming’s Left Hand Rule</div>
<div class="body">
<p class="fleming-statement">Stretch the <b>thumb, forefinger and middle finger</b> of your left hand such that they are <b>mutually perpendicular</b>. If the forefinger points in the direction of magnetic field and the middle finger in the direction of current, then the thumb will point in the direction of <b>motion / force</b> acting on the conductor.</p>
<div class="note-box rule-note">
<b>Note:</b>
<ol>
<li>Fleming’s Left Hand Rule is applicable only to <b>positive charge</b>. If a negative charge is given, take the <b>opposite direction</b> and then apply the rule.</li>
<li><b>Proton, alpha particle and positron</b> are considered as <b>positive charges</b>.</li>
</ol>
</div>
<div class="rule-feature fleming-feature">
<div class="figure"><img alt="Fleming's Left Hand Rule" class="img-fleming" src="/images/cbse/class%2010/magnetic-effects/fleming-left-hand-rule.png"/></div>
<div class="rule-cards three">
<div class="rule-card cyan">
<div class="rule-card-head">Forefinger</div>
<div class="rule-card-body">Direction of <b>magnetic field (B)</b></div>
</div>
<div class="rule-card cyan">
<div class="rule-card-head">Middle finger</div>
<div class="rule-card-body">Direction of <b>current (I)</b></div>
</div>
<div class="rule-card cyan span-two">
<div class="rule-card-head">Thumb</div>
<div class="rule-card-body">Direction of <b>motion / force</b> on the conductor</div>
</div>
</div>
</div>
</div>
</div><div class="block peach" id="mag-topic-10">
<div class="head">Force on a current-carrying conductor in a Magnetic Field</div>
<div class="body">
<div>
<ul class="clean force-intro">
<li>A current-carrying rod experiences a force perpendicular to its length and the magnetic field.</li>
<li>When current flows through an aluminium rod placed between poles of a magnet, it experiences a force due to magnetic field and gets displaced towards <b>left</b>.</li>
</ul>
<div class="figure"><img alt="Force on current-carrying conductor" class="img-force" src="/images/cbse/class%2010/magnetic-effects/force-on-current-carrying-wire-placed-in-field1.png"/><div class="figcap"></div></div>
<table class="force-table">
<tr><th>Point</th><th>Condition</th><th>Effect / Direction</th></tr>
<tr><td class="group">The direction of force depends</td><td>1. Direction of current<br/>2. Direction of magnetic field</td><td>Changing either one changes the force direction.</td></tr>
<tr><td class="group" rowspan="3">On reversing</td><td>Direction of current only</td><td><b>Force reverses direction</b> → right.</td></tr>
<tr><td>Direction of magnetic field only</td><td><b>Force reverses direction</b> → right.</td></tr>
<tr><td>Both current and magnetic field</td><td><b>Force direction remain same</b> → left.</td></tr>
<tr><td class="group">Maximum</td><td>Current is <b>perpendicular</b> to magnetic field</td><td>Maximum displacement (force).</td></tr>
<tr><td class="group">Minimum</td><td>Current is <b>parallel</b> to magnetic field</td><td>Minimum displacement — <b>no force</b>.</td></tr>
</table>
</div>
</div>
</div><div class="block green" id="mag-topic-11">
<div class="head">Devices that use current-carrying conductors and magnetic fields</div>
<div class="body"><div class="chips"><div class="chip"><span>⚙️</span>Electric motor</div><div class="chip"><span>🔋</span>Electric generator</div><div class="chip"><span>🔊</span>Loudspeakers</div><div class="chip"><span>🎙️</span>Microphones</div><div class="chip"><span>📐</span>Measuring instruments</div></div></div>
</div><div class="block pink stack-wide" id="mag-topic-12">
<div class="head">Domestic Electric Circuits</div>
<div class="body">
<div class="domestic-sub">
<h3>Supply</h3>
<ul class="clean domestic-points">
<li>Electric power reaches our homes through the <b>main supply (mains)</b>, either by overhead electric poles or underground cables.</li>
<li>At the meter-board, the supply passes through a <b>main fuse</b> into the <b>electricity meter</b>.</li>
<li>Through the <b>main switch</b>, it is connected to the line wires that supply the separate circuits in the house.</li>
</ul>
</div>
<div class="figure"><img alt="Domestic electric circuit" class="img-domestic" src="/images/cbse/class%2010/magnetic-effects/domestic-circuits1.png"/><div class="figcap">Common domestic electric circuit.</div></div>
</div>
</div><div class="block blue" id="mag-topic-13">
<div class="head">Wires - 3 wires</div>
<div class="body">
<div class="three-col">
<div class="wire-card wire-live"><span class="wire-code">L</span><b>LIVE WIRE</b><span>Red insulation • Positive</span></div>
<div class="wire-card wire-neutral"><span class="wire-code">N</span><b>NEUTRAL WIRE</b><span>Black insulation • Negative</span></div>
<div class="wire-card wire-earth"><span class="wire-code">E</span><b>EARTH WIRE</b><span>Green insulation • Safety wire</span></div>
</div>
<ul class="clean domestic-points">
<li>The potential difference between the <b>live</b> and <b>neutral</b> wires is <b>220 V</b> in our country.</li>
<li>The <b>earth wire</b> is a safety wire connected to the metallic body of appliances and to earth.</li>
</ul>
</div>
</div><div class="block green" id="mag-topic-14">
<div class="head">Circuits - 2 circuits</div>
<div class="body">
<table>
<tr><th>Current rating</th><th>Used for</th></tr>
<tr><td><b>15 A circuit</b></td><td>Appliances with higher power ratings such as <b>geysers, air coolers, etc.</b></td></tr>
<tr><td><b>5 A circuit</b></td><td>Lower-power appliances such as <b>bulbs, fans, etc.</b></td></tr>
</table>
</div>
</div><div class="block yellow" id="mag-topic-15">
<div class="head">Safety measures</div>
<div class="body two-col">
<div class="domestic-sub">
<h3><span class="number-chip">1</span>Fuse</h3>
<ul class="clean domestic-points">
<li>An electric <b>fuse</b> protects the domestic circuit and appliances from unduly high current.</li>
<li>When current becomes too large, <b>Joule heating</b> melts the fuse wire and <b>breaks the circuit</b>.</li>
<li>Thus, the fuse helps protect the circuit during <b>short-circuiting or overloading</b>.</li>
</ul>
</div>
<div class="domestic-sub">
<h3><span class="number-chip">2</span>Earth wire</h3>
<ul class="clean domestic-points">
<li>The <b>earth wire</b> has green insulation and is connected to a metal plate deep in the earth near the house.</li>
<li>It provides a <b>low-resistance conducting path</b> for leakage current from metallic-bodied appliances.</li>
<li>This keeps the appliance body at earth potential and helps prevent a severe <b>electric shock</b>.</li>
</ul>
</div>
</div>
</div><div class="block peach" id="mag-topic-16">
<div class="head">Connection - Parallel</div>
<div class="body">
<ul class="clean domestic-points">
<li>Different appliances are connected <b>in parallel</b> across the live and neutral wires.</li>
<li><b>Why preferred?</b> Each appliance gets the <b>same potential difference</b>.</li>
<li>Each appliance has its <b>own separate switch</b>, so its current can be switched ON/OFF independently.</li>
</ul>
</div>
</div><div class="block yellow" id="mag-topic-17">
<div class="head">Overloading</div>
<div class="body">
<ol class="clean domestic-points">
<li><b>Short-circuiting:</b> if the live and neutral wires come into direct contact, the current abruptly increases.</li>
<li>An accidental <b>hike in supply voltage</b> can cause overloading.</li>
<li>Connecting <b>too many appliances to a single socket</b> can also cause overloading.</li>
</ol>
<div class="domestic-note"><b>Fuse action during excessive current:</b> Joule heating melts the fuse wire and breaks the electric circuit, preventing possible damage.</div>
</div>
</div><div class="block pink" id="mag-topic-18">
<div class="head">Comparison Table: Magnetic Field due to Straight Wire, Circular Loop and Solenoid</div>
<div class="body">
<table class="field-compare">
<tr>
<th style="width:18%">Current-carrying conductor</th>
<th style="width:28%">Field pattern</th>
<th style="width:24%">Rule used to determine the direction of field</th>
<th style="width:30%">Factors on which the strength of the field depends</th>
</tr>
<tr>
<td>Straight wire</td>
<td>Magnetic field lines are <b>concentric circles</b> around the wire. The circles become larger as we move away from the wire.</td>
<td><b>Right-Hand Thumb Rule</b> — thumb gives the direction of current and the curled fingers show the direction of magnetic field.</td>
<td>
<ul>
<li><b>Current</b> through the wire</li>
<li><b>Distance</b> from the wire</li>
</ul>
</td>
</tr>
<tr>
<td>Circular loop / coil</td>
<td>Field lines around each part of the loop are circular. At the <b>centre of the loop</b>, the field lines appear almost <b>straight</b> and are in the <b>same direction</b>.</td>
<td><b>Right-Hand Thumb Rule</b> is applied to the current in the loop to find the direction of the magnetic field at the centre.</td>
<td>
<ul>
<li><b>Current</b> through the loop</li>
<li><b>Number of turns</b> in the coil</li>
<li><b>Distance</b> from the centre / wire</li>
</ul>
</td>
</tr>
<tr>
<td>Solenoid</td>
<td>Field pattern is similar to a <b>bar magnet</b>. Inside the solenoid, the field lines are <b>parallel straight lines</b>, showing a <b>uniform magnetic field</b>.</td>
<td><b>Right-Hand Thumb Rule</b> — when fingers curl in the direction of current through the turns, the thumb points towards the <b>north pole</b> / field direction.</td>
<td>
<ul>
<li><b>Current</b> through the solenoid</li>
<li><b>Number of turns per unit length</b></li>
<li>Presence of a <b>soft iron core</b></li>
</ul>
</td>
</tr>
</table>
</div>
</div>
  </div>
</div>

  `,
  sections: [
  {
    "heading": "Introduction",
    "target": "mag-topic-0"
  },
  {
    "heading": "Magnetic Compass:",
    "target": "mag-topic-1"
  },
  {
    "heading": "Magnetic Field",
    "target": "mag-topic-2"
  },
  {
    "heading": "Magnetic Field lines & Properties",
    "target": "mag-topic-3"
  },
  {
    "heading": "Right-Hand Thumb Rule (Maxwell’s Corkscrew Rule)",
    "target": "mag-topic-4"
  },
  {
    "heading": "Magnetic Field due to a current-carrying straight conductor",
    "target": "mag-topic-5"
  },
  {
    "heading": "Magnetic Field due to a current through a circular Loop",
    "target": "mag-topic-6"
  },
  {
    "heading": "Solenoid & Magnetic Field due to a Current in a Solenoid",
    "target": "mag-topic-7"
  },
  {
    "heading": "Electromagnet",
    "target": "mag-topic-8"
  },
  {
    "heading": "Fleming’s Left Hand Rule",
    "target": "mag-topic-9"
  },
  {
    "heading": "Force on a current-carrying conductor in a Magnetic Field",
    "target": "mag-topic-10"
  },
  {
    "heading": "Devices that use current-carrying conductors and magnetic fields",
    "target": "mag-topic-11"
  },
  {
    "heading": "Domestic Electric Circuits",
    "target": "mag-topic-12"
  },
  {
    "heading": "Wires - 3 wires",
    "target": "mag-topic-13"
  },
  {
    "heading": "Circuits - 2 circuits",
    "target": "mag-topic-14"
  },
  {
    "heading": "Safety measures",
    "target": "mag-topic-15"
  },
  {
    "heading": "Connection - Parallel",
    "target": "mag-topic-16"
  },
  {
    "heading": "Overloading",
    "target": "mag-topic-17"
  },
  {
    "heading": "Comparison Table: Magnetic Field due to Straight Wire, Circular Loop and Solenoid",
    "target": "mag-topic-18"
  }
]
};
