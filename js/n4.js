
function movefour() {
  var elem = document.getElementById("four");   
  var width = 1;
  var id = setInterval(frame, 4);
  function frame() {
    if (width >=55) {
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
