var hellonews = 0;
news();
function news() {
  var i;
  var x = document.getElementsByClassName("news");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  hellonews++;
  if (hellonews > x.length) {hellonews = 1}    
  x[hellonews-1].style.display = "block";  
  setTimeout(news, 3000); // Change image every 2 seconds
}
var hellohello = 0;
newsnews();
function newsnews() {
  var i;
  var x = document.getElementsByClassName("hello");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  hellohello++;
  if (hellohello > x.length) {hellohello = 1}    
  x[hellohello-1].style.display = "block";  
  setTimeout(newsnews, 4000); // Change image every 2 seconds
}