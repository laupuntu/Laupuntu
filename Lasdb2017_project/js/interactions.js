/* Configuracion Carrusel Owl*/
		$(document).ready(function() {
 
		$("#owl-demo").owlCarousel({
 
	    autoPlay: false, //Set AutoPlay to 3 seconds
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
 
  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

