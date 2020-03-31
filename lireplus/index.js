var i=0;
function lire() {
   var le = document.getElementById('more');
   var pts = document.getElementById('dots');
   var btn = document.getElementById('btn');
  if (!i) 
  {
    le.style.display="inline";
    pts.style.display="none";
    btn.innerHTML="Voir moins";
    i=1;
  }
  else
  {
    le.style.display="none";
    pts.style.display="inline";
    btn.innerHTML="Voir plus";
    i=0;
  } 
}