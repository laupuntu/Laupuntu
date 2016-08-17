/* Configuracion Carrusel Owl*/

		$(document).ready(function() {
 
		$("#owl-demo").owlCarousel({
 
	      navigation : false, // Show next and prev buttons
	      slideSpeed : 1000,
	      paginationSpeed : 1000,
	      singleItem:true,
	      autoPlay:true,
	      pagination:false,
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
		if (xhttp2.readyState == 4 && xhttp3.status == 200) {
			document.querySelector("#text3").innerHTML = xhttp3.responseText;		
		}
	};
	xhttp3.open("GET","textos/lasdb2017_meeting.txt", true);
	xhttp3.send();
}

