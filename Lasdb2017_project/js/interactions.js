/* Configuracion Carrusel Owl*/
/*		$(document).ready(function() {
 
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
*/
/* Funcion que permite tomar textos desde el servidor e inyectarlos en html*/
loadText();
function loadText() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			document.querySelector("#text1").innerHTML = xhttp.responseText;		
		}
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			document.querySelector("#text2").innerHTML = xhttp.responseText;		
		}
	};
	xhttp.open("GET","textos/noticia_resumenes.txt", true);
	xhttp.send();

	var xhttp2 = new XMLHttpRequest();
	xhttp2.onreadystatechange = function() {
		if (xhttp2.readyState == 4 && xhttp2.status == 200) {
			document.querySelector("#text2").innerHTML = xhttp2.responseText;		
		}
	};
	xhttp2.open("GET","textos/noticia_inscripciones.txt", true);
	xhttp2.send();

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
		if (w > 768) {
			document.querySelector(".navimg").style.display = "block";
		}
	} else {
		document.querySelector(".navbar").style.top = "initial";
		document.querySelector(".navbar").style.backgroundColor = "transparent";
		document.querySelector(".navimg").style.display = "none";
	}
}
/*Funcion para cambiar por dia el programa de expositores*/
var speakers = new Array();
var time = new Array();
var workday = ["Coffe Brake", "Lunch"];
//Asignando Speakers
speakers[0] = "Sir John B. Gurdon";
speakers[1] = "Maria Barna";
speakers[2] = "Jesus Chimal Monroy";
speakers[3] = "Miguel Concha";
speakers[4] = "Robb Krumlauf";
speakers[5] = "Carole LaBonne";
speakers[6] = "Roberto Mayor";
speakers[7] = "Alejandro Sánchez-Alvarado";
speakers[8] = "Joachim Wittbrodt";
speakers[9] = "Shioban Brady";
speakers[10] = "Veronica DiStilio";
speakers[11] = "Cristina Ferrandiz";
speakers[12] = "Vivian Irish";
speakers[13] = "Robert Sablowski";
speakers[14] = "Miltos Tsiantis";
speakers[15] = "Enrique Amaya";
speakers[16] = "Karen Echeverri";
speakers[17] = "Patricia Ferreti";
speakers[18] = "Brigitte Galliot";
speakers[19] = "José García Arrarás";
speakers[20] = "Tsonis Panagiotis";
speakers[21] = "Sylvain Marcellini";
speakers[22] = "Rodrigo Nunes Da Fonseca ";
speakers[23] = "Sylvain Marcellini";
speakers[24] = "Robert Reed";
speakers[25] = "Igor Schneider";
speakers[26] = "Karen Sears";
speakers[27] = "Joseph Arboleda Velasquez";
speakers[28] = "Mariane Bronner";
speakers[29] = "M. Angela Nieto";
speakers[30] = "Lee Niswander";
speakers[31] = "Fernando Camargo";
//Asignando Horas
time[0] = "08:30 am";
time[1] = "11:00 am";
time[2] = "01:30 pm";
time[3] = "03:30 pm";
time[4] = "09:00 am";
time[5] = "11:30 am";
time[6] = "02:00 pm";
time[7] = "04:00 pm";
time[8] = "09:30 am";
time[9] = "12:00 pm";
time[10] = "02:30 pm";
time[11] = "04:30 pm";
time[12] = "10:30 am";
time[13] = "12:30 pm";
time[14] = "03:00 pm";
time[15] = "05:00 pm";

//Funcion Asignacion Speakers y Horas 
function programme() {
	var cell = document.getElementsByClassName("divTableCell");
	for (var i = 0; i < cell.length; i++) {
		if (i == 12 || i == 3) {
			cell[i].innerHTML = time[i] + " " + workday[0];	
		} else if (i == 13) {
			cell[i].innerHTML = time[i] + " " + workday[1];
		} else
		cell[i].innerHTML = time[i] + " " + speakers[i];
	}
}
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
 
  $("#owl-demo1").owlCarousel({
 
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

