/* Fijar menu en la parte de arriba cuando se haga scroll a la pagina */
window.onscroll = function() {fixedtop()};
function fixedtop() {
	if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
		document.querySelector(".navbar").style.transition = "all 1s";
		document.querySelector(".navbar").style.top = 0;
		document.querySelector(".navbar").style.backgroundColor = "rgba(77,77,77,0.8)";
		document.querySelector(".navbar").style.zIndex = "1";
	} else {
		document.querySelector(".navbar").style.top = "initial";
		document.querySelector(".navbar").style.backgroundColor = "transparent";
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

