
function movetwo() {
  var elem = document.getElementById("two");   
  var width = 1;
  var id = setInterval(frame, 3 );
  function frame() {
    if (width >= 65) {;
    } else {
      width++; 
      elem.style.width = width + '%'; 
	   elem.innerHTML = width * 1  + '%';
      elem.style.pointerEvents = "none";
elem.style.pointerEvents = "auto";
}
  }
}