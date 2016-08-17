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
}

