/* Configuracion Carrusel Owl*/
		$(document).ready(function() {
 
		$("#owl-demo").owlCarousel({
 
	    autoPlay: true, //Set AutoPlay to 3 seconds
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
window.onscroll = function() {fixedtop()};

function fixedtop() {
	if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
		document.querySelector(".navbar").style.transition = "all 1s";
		document.querySelector(".navbar").style.top = 0;
		document.querySelector(".navbar").style.backgroundColor = "rgba(0,136,170,1)";
		document.querySelector(".navbar").style.zIndex = "1";
		document.querySelector(".navimg").style.display = "block";
	} else {
		document.querySelector(".navbar").style.top = "initial";
		document.querySelector(".navbar").style.backgroundColor = "transparent";
		document.querySelector(".navimg").style.display = "none";
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