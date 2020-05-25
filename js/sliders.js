var hi = 0;
			carousel();

			function carousel() {
			  var i;
			  var x = document.getElementsByClassName("my");
			  for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";  
			  }
			  hi++;
			  if (hi > x.length) {hi = 1}    
			  x[hi-1].style.display = "block";  
			  setTimeout(carousel, 2000);
			}