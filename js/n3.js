
function movethree() {
  var elem = document.getElementById("three");   
  var width = 1;
  var id = setInterval(frame, 3 );
  function frame() {
    if (width >= 45) {
    ;
    } else {
      width++; 
      elem.style.width = width + '%'; 
	   elem.innerHTML = width * 1  + '%';
      elem.style.pointerEvents = "none";
elem.style.pointerEvents = "auto";
}
  }
}