
function movefive() {
  var elem = document.getElementById("five");   
  var width = 1;
  var id = setInterval(frame, 3 );
  function frame() {
  if (width >=79){} else {
      width++; 
      elem.style.width = width + '%'; 
	  elem.innerHTML = width * 1  + '%';
    elem.style.pointerEvents = "none";
elem.style.pointerEvents = "auto";
	}
  	}
	}
