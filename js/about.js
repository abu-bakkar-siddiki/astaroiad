var bug = 1;
nobug(bug);

function plusDivs(n) {
  nobug(bug += n);
}

function currentDiv(n) {
  nobug(bug = n);
}

function nobug(n) {
  var i;
  var x = document.getElementsByClassName("myShishir");
  var dots = document.getElementsByClassName("khan");
  if (n > x.length) {bug = 1}    
  if (n < 1) {bug = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[bug-1].style.display = "block";  
  dots[bug-1].className += " w3-red";
}