
  
var countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
 
var x = setInterval(function() {
 
  var currentTime = new Date().getTime();
 
  var timeLeft = countDownDate - currentTime;
 
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  if (timeLeft < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 