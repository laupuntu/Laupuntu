/* Fijar menu en la parte de arriba cuando se haga scroll a la pagina */
window.onscroll = function() {fixedtop()};
function fixedtop() {
	if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
		document.querySelector(".navbar").style.transition = "all 1s";
		document.querySelector(".navbar").style.top = 0;
		document.querySelector(".navbar").style.backgroundColor = "rgba(77,77,77,1)";
		document.querySelector(".navbar").style.boxShadow = "0px 3px 10px 1px rgba(0, 0, 0, 0.75)";
		document.querySelector("nav").style.paddingtop = "0";
		document.querySelector("nav").style.paddingBottom = "10px";
		document.querySelector("nav ul").style.paddingTop = "0";
		document.querySelector(".navimg").style.width = "15%";
		document.querySelector(".navimg").style.marginTop = "-20px";
		document.querySelector(".navbar hr").style.display = "none";
		document.querySelector("#sub").style.display = "block";
		document.querySelector("nav ul li:last-child").style.marginRight = "0";
		if (document.body.scrollHeight - document.body.scrollTop < 1000) {
			document.querySelector(".location").style.transition = "all 1s";
			document.querySelector(".location").style.opacity = "1";
		}
	} else {
		document.querySelector(".navbar").style.top = "initial";
		document.querySelector(".navbar").style.backgroundColor = "transparent";
		document.querySelector("nav").style.paddingtop = "30px";
		document.querySelector("nav").style.paddingBottom = "0";
		document.querySelector("nav ul").style.paddingTop = "45px";
		document.querySelector(".navimg").style.width = "initial";
		document.querySelector(".navimg").style.marginTop = "0";
		document.querySelector(".navbar hr").style.display = "block";
		document.querySelector("nav ul li:last-child").style.marginRight = "-55px";
		document.querySelector(".location").style.opacity = "0";
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