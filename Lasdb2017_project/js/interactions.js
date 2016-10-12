/* Configuracion Carrusel Owl*/
		$(document).ready(function() {
 
		$("#owl-demo").owlCarousel({
 
	    autoPlay: 5000, //Set AutoPlay to 3 seconds
	    items : 1,
	    itemsDesktop : [1199,1],
	    itemsDesktopSmall : [979,1],
	    itemsTablet : [768,1],
	    itemsMobile : [479,1],
	    itemsScaleUp : true,
    	afterInit : function(elem){
     		 var that = this
    		  that.owlControls.prependTo(elem)
    		},
    	transitionStyle : "backSlide"
  		});
 
		});

/* Funcion que permite tomar textos desde el servidor e inyectarlos en html*/
loadText();
function loadText() {
	var xhttp3 = new XMLHttpRequest();
	xhttp3.onreadystatechange = function() {
		if (xhttp3.readyState == 4 && xhttp3.status == 200) {
			document.querySelector("#text3").innerHTML = xhttp3.responseText;		
		}
	};
	xhttp3.open("GET","textos/lasdb2017_meeting.txt", true);
	xhttp3.send();

	var xhttp4 = new XMLHttpRequest();
	xhttp4.onreadystatechange = function() {
		if (xhttp4.readyState == 4 && xhttp4.status == 200) {
			document.querySelector("#text4").innerHTML = xhttp4.responseText;		
		}
	};
	xhttp4.open("GET","textos/meeting_venue.txt", true);
	xhttp4.send();

	var xhttp5 = new XMLHttpRequest();
	xhttp5.onreadystatechange = function() {
		if (xhttp5.readyState == 4 && xhttp5.status == 200) {
			document.querySelector("#text5").innerHTML = xhttp5.responseText;		
		}
	};
	xhttp5.open("GET","textos/welcome_medellin.txt", true);
	xhttp5.send();
}
/* Fijar menu en la parte de arriba cuando se haga scroll a la pagina */
var w = window.innerWidth;
window.addEventListener("resize", pagewidth);
function pagewidth() {
	w = window.innerWidth;
}
window.onscroll = function() {fixedtop()};
function fixedtop() {
	if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
		document.querySelector(".navbar").style.transition = "all 1s";
		document.querySelector(".navbar").style.top = 0;
		document.querySelector(".navbar").style.backgroundColor = "rgba(0,136,170,1)";
		document.querySelector(".navbar").style.zIndex = "1";
		document.querySelector(".contactUp2").style.display = "flex";
		if (w > 768) {
			document.querySelector(".navimg").style.display = "block";
		}
	} else {
		document.querySelector(".navbar").style.top = "initial";
		document.querySelector(".navbar").style.backgroundColor = "transparent";
		document.querySelector(".navimg").style.display = "none";
		document.querySelector(".contactUp2").style.display = "none";
	}
}
/*Funcion para cambiar por dia el programa de expositores*/

/*para el header de navegacion*/
$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				right: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				right: '-100%'
			});
		}
 
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}
$(function(){

     $('.lnks').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }

   });

});
/*Conteo Regresivo*/
timer();
function timer()
{

var futureDate =  new Date("Oct 09 2017 008:00:00 GMT-0500 (BDT)");
var date = new Date();
var presentTime = date.getTime();
var timelapse = futureDate - presentTime;
var days = timelapse / (3600*1000*24);
var floor_days = Math.floor(days);

document.getElementById('date').innerHTML = floor_days;

var hours = (days - floor_days) * 24;
var floor_hours = Math.floor(hours);
document.getElementById('hour').innerHTML = floor_hours;

var mins = (hours - floor_hours) * 60;
var floor_mins = Math.floor(mins);
document.getElementById('min').innerHTML = floor_mins;

}
setInterval(timer,1000);

/* Configuracion Carrusel Owl 2*/
$(document).ready(function() {
 
  $("#owl-demo1").owlCarousel1({
 
      autoPlay: 5000, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});
/* Configuracion Program #6f6f6f */
document.addEventListener("DOMContentLoaded",
  function (event) {
var day = document.getElementsByClassName("days");
var	h = document.getElementsByClassName("programa");
day[0].style.color = "#da1418";
h[0].style.display = "flex";
day[0].addEventListener("click", function(){
	h[0].style.display = "flex";
	h[0].style.marginBottom = "30px";
	h[1].style.display = "none";
	h[2].style.display = "none";
	h[3].style.display = "none";
	h[4].style.display = "none";
	day[0].style.color = "#da1418";
	day[1].style.color = "#6f6f6f";
	day[2].style.color = "#6f6f6f";
	day[3].style.color = "#6f6f6f";
	day[4].style.color = "#6f6f6f";
 });
day[1].addEventListener("click", function(){
	day[1].style.color = "#da1418";
	day[0].style.color = "#6f6f6f";
	day[2].style.color = "#6f6f6f";
	day[3].style.color = "#6f6f6f";
	day[4].style.color = "#6f6f6f";
	h[0].style.display = "none";
	h[1].style.display = "flex";
	h[1].style.transition = "all 1s";
	h[1].style.marginBottom = "30px";
	h[2].style.display = "none";
	h[3].style.display = "none";
	h[4].style.display = "none";
 });
day[2].addEventListener("click", function(){
	day[2].style.color = "#da1418";
	day[0].style.color = "#6f6f6f";
	day[1].style.color = "#6f6f6f";
	day[3].style.color = "#6f6f6f";
	day[4].style.color = "#6f6f6f";
	h[0].style.display = "none";
	h[1].style.display = "none";
	h[2].style.display = "flex";
	h[2].style.transition = "all 1s";
	h[2].style.marginBottom = "30px";
	h[3].style.display = "none";
	h[4].style.display = "none";
 });
day[3].addEventListener("click", function(){
	day[3].style.color = "#da1418";
	day[0].style.color = "#6f6f6f";
	day[1].style.color = "#6f6f6f";
	day[2].style.color = "#6f6f6f";
	day[4].style.color = "#6f6f6f";
	h[0].style.display = "none";
	h[1].style.display = "none";
	h[2].style.display = "none";
	h[3].style.display = "flex";
	h[3].style.transition = "all 1s";
	h[3].style.marginBottom = "30px";
	h[4].style.display = "none";
 });
day[4].addEventListener("click", function(){
	day[4].style.color = "#da1418";
	day[0].style.color = "#6f6f6f";
	day[1].style.color = "#6f6f6f";
	day[2].style.color = "#6f6f6f";
	day[3].style.color = "#6f6f6f";
	h[0].style.display = "none";
	h[1].style.display = "none";
	h[2].style.display = "none";
	h[3].style.display = "none";
	h[4].style.display = "flex";
	h[4].style.transition = "all 1s";
	h[4].style.marginBottom = "30px";
 });
}
);
/*var acc = document.getElementsByClassName("accordion");

acc[0].addEventListener("click", function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
        acc[1].nextElementSibling.classList.remove("show");
        acc[1].classList.toggle("active",false);
 	 });
acc[1].addEventListener("click", function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
        acc[0].nextElementSibling.classList.remove("show");
        acc[0].classList.toggle("active",false);
 	 });*/