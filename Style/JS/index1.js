AOS.init({
    duration: 2000,
  })
 var conf = document.querySelectorAll(".fa-2x");
 
 for(let i=0;i<conf.length;i++)
 {
   conf[i].classList.add('c'+i);
  //  conf[i].classList.remove('fa-2x');
  //  conf[i].classList.add('fa-3x')
 }
 //top-nav
 function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var theDate = new Date("Jun 26, 2021 09:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var difference = theDate - now;
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  // console.log('0'+days.toString().length);

  days = days.toString();
  if(days.length == 1)
  {
    days = '0' + days;
    // console.log(days);
  }
  
  document.getElementById("daysLeft").innerHTML = days + '<span class="april">days</span><div class="rem-kid1">We will see You in</div>';
  
document.querySelector('.theDate').innerHTML = "<h3>We will see you in <br><div id='countDown'>"+days+"</div><span> days</span></h3>"
  
  if (difference < 0) {
    clearInterval(x);
    document.getElementsByClassName("blink").innerHTML = "WELCOME";
    
  }
}, 10);


//wie code 2.0 nosifer
// all quicksand
// sub heading dela gothic
// navbar dela gothic