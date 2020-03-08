var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

function checkTime(i) {return (i < 10) ? "0" + i : i;}

function startTime() {
	var today = new Date(),
	    h = checkTime(today.getHours()),
	    m = checkTime(today.getMinutes()),
	    s = checkTime(today.getSeconds());
	    if (h>12){ h -=12; }
	document.getElementById('time').innerHTML = "Current Time, using Javascript: " + h + ":" + m + ":" + s;	
}
setInterval(startTime, 1000);
