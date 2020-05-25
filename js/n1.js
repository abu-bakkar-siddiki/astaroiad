function moveone() {
  var elem = document.getElementById("one");   
  var width = 1;
  var id = setInterval(frame, 3 );
  function frame() {
    if (width >= 87) {
      clearInterval(one);
    } else {
      width++; 
      elem.style.width = width + '%'; 
	   elem.innerHTML = width * 1  + '%';
      elem.style.pointerEvents = "none";
	elem.style.pointerEvents = "block";
}
  }
}