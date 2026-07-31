/* Games & Puzzles - Motion and Time | Grade 7 */
window.gamesData = [
  {
    title: "Speed Calculator Quiz",
    icon: "🧮",
    description: "Calculate speed from given distance and time",
    type: "Quiz",
    html: `<div style="padding:10px;"><div id="q" style="font-size:14px;margin-bottom:15px;color:#fff;"></div><input type="text" id="ans" style="padding:8px;border-radius:5px;border:1px solid #4a5568;background:#1a1f35;color:#fff;width:150px;" placeholder="Your answer"><button onclick="check()" style="margin-left:10px;padding:8px 16px;border-radius:8px;border:none;background:#4f46e5;color:#fff;cursor:pointer;">Submit</button><div id="res" style="margin-top:15px;font-weight:700;"></div></div>`,
    init: function(area) {
      const qs = [{d:100,t:10,ans:10},{d:200,t:5,ans:40},{d:150,t:3,ans:50}];
      let qi=0,score=0;
      function next(){if(qi>=qs.length){area.querySelector('#res').innerHTML='🎉 Complete! Score:'+score+'/'+qs.length;return;}
        area.querySelector('#q').textContent=(qi+1)+'. Object travels '+qs[qi].d+'m in '+qs[qi].t+'s. Find speed:';
        area.querySelector('#ans').value='';area.querySelector('#res').textContent='';}
      area.check=function(){const u=parseFloat(area.querySelector('#ans').value);if(u===qs[qi].ans){score++;area.querySelector('#res').textContent='✅ Correct!';}else area.querySelector('#res').textContent='❌ Wrong! Ans:'+qs[qi].ans;setTimeout(()=>{qi++;next();},1000);};
      next();
    }
  }
];
