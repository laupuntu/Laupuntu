/* Fijar menu en la parte de arriba cuando se haga scroll a la pagina */
window.onscroll = function() {fixedtop()};
function fixedtop() {
	if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
		document.querySelector("body").style.marginTop = "0px";
		document.querySelector(".navbar").style.transition = "all 1s";
		document.querySelector(".navbar").style.top = 0;
		document.querySelector(".navbar").style.backgroundColor = "rgba(77,77,77,1)";
		document.querySelector(".navbar").style.boxShadow = "0px 3px 10px 1px rgba(0, 0, 0, 0.75)";
		document.querySelector("nav").style.paddingtop = "10px";
		document.querySelector("nav").style.paddingBottom = "15px";
		document.querySelector("nav ul").style.paddingTop = "0";
		document.querySelector(".navimg").style.width = "15%";
		document.querySelector(".navimg").style.marginTop = "-10px";
		document.querySelector(".navbar hr").style.display = "none";
	} else {
		document.querySelector(".navbar").style.top = "initial";
		document.querySelector(".navbar").style.backgroundColor = "transparent";
		document.querySelector("nav").style.paddingtop = "15px";
		document.querySelector("nav").style.paddingBottom = "0";
		document.querySelector("nav ul").style.paddingTop = "30px";
		document.querySelector(".navimg").style.width = "initial";
		document.querySelector(".navimg").style.marginTop = "0";
		document.querySelector(".navbar hr").style.display = "block";
		document.querySelector(".navbar").style.boxShadow = "none";
		document.querySelector("body").style.marginTop = "0";
	}
}
/* Hover cambio de imagenes iconos About Us */
$("#mission img").mouseover(function(){
	$("#mission img").attr("src","imagenes/iconos/mission_hover.png");
});
$("#mission img").mouseout(function(){
	$("#mission img").attr("src","imagenes/iconos/mission.png");
});
$("#vision img").mouseover(function(){
	$("#vision img").attr("src","imagenes/iconos/vision_hover.png");
});
$("#vision img").mouseout(function(){
	$("#vision img").attr("src","imagenes/iconos/vision.png");
});
$("#values img").mouseover(function(){
	$("#values img").attr("src","imagenes/iconos/values_hover.png");
});
$("#values img").mouseout(function(){
	$("#values img").attr("src","imagenes/iconos/values.png");
});
/* Hover cambio de imagenes iconos Solutions */
$("#item1").mouseover(function(){
	$("#item1 img").attr("src","imagenes/iconos/flood_hover.png");
});
$("#item1").mouseout(function(){
	$("#item1 img").attr("src","imagenes/iconos/flood.png");
});
$("#item2").mouseover(function(){
	$("#item2 img").attr("src","imagenes/iconos/catastrophe_hover.png");
});
$("#item2").mouseout(function(){
	$("#item2 img").attr("src","imagenes/iconos/catastrophe.png");
});
$("#item3").mouseover(function(){
	$("#item3 img").attr("src","imagenes/iconos/casualty_hover.png");
});
$("#item3").mouseout(function(){
	$("#item3 img").attr("src","imagenes/iconos/casualty.png");
});
$("#item4").mouseover(function(){
	$("#item4 img").attr("src","imagenes/iconos/TPA_hover.png");
});
$("#item4").mouseout(function(){
	$("#item4 img").attr("src","imagenes/iconos/TPA.png");
});
$("#item5").mouseover(function(){
	$("#item5 img").attr("src","imagenes/iconos/daily_hover.png");
});
$("#item5").mouseout(function(){
	$("#item5 img").attr("src","imagenes/iconos/daily.png");
});
$("#item6").mouseover(function(){
	$("#item6 img").attr("src","imagenes/iconos/reinspections_hover.png");
});
$("#item6").mouseout(function(){
	$("#item6 img").attr("src","imagenes/iconos/reinspections.png");
});
$("#item7").mouseover(function(){
	$("#item7 img").attr("src","imagenes/iconos/appraisal_hover.png");
});
$("#item7").mouseout(function(){
	$("#item7 img").attr("src","imagenes/iconos/appraisal.png");
});
/*Carga contenido automatico en Values*/
var values = ["imagenes/iconos/values_modal_full.png","imagenes/iconos/values_modal_2hover.png","imagenes/iconos/values_modal_3hover.png","imagenes/iconos/values_modal_4hover.png","imagenes/iconos/values_modal_5hover.png","imagenes/iconos/values_modal_1hover.png"];
var title1 = ["","Integrity","Quality","Innovation","Teamwork","Passion"];
var text1 = ["","Do the right thing, always","What we do, we do best","Change is constant","Leverage collective genius","Committed in heart and mind"];
var htext = document.querySelector('.textmodal h2');
var ptext = document.querySelector('.textmodal p');
var vimg = document.querySelector('#valuesmodal img');
var actual =0;
function cambiarvalues(){
$('#valuesmodal').ready(function(){
	if (actual == values.length){
		actual = 0;
	}
	$('#valuesmodal h2').text(title1[actual]);
	$('#valuesmodal p').text(text1[actual]);
	$('#valuesmodal img').attr("src",values[actual]);
	actual++;
});
}
setInterval(cambiarvalues,1500);
/*-----*/

$(document).ready(intro);

	function intro(){
		$('#intro h1').animate({fontSize: "33px"},1000);
		$('#intro strong').animate({fontSize: "45px"},1000);
	}
/* Click en logo principal lleva a index */
function home() {
    location.href = "index.html";
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









