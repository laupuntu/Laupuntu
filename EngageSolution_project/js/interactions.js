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
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("item1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
