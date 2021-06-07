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
