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
        if (document.body.scrollHeight - document.body.scrollTop < 700) {
            document.querySelector(".location").style.transition = "all 1s";
            document.querySelector(".location").style.opacity = "1";
        } else {
            document.querySelector(".location").style.transition = "all 1s";
            document.querySelector(".location").style.opacity = "0";
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
        document.querySelector("#sub").style.display = "none";
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
var acc = document.getElementsByClassName("accordion1");
acc[0].addEventListener("click", function(){
        this.classList.toggle("active1");
        this.nextElementSibling.classList.toggle("show1");
        acc[1].nextElementSibling.classList.remove("show1");
        acc[1].classList.toggle("active",false);
        acc[2].nextElementSibling.classList.remove("show1");
        acc[2].classList.toggle("active",false);
        acc[3].nextElementSibling.classList.remove("show1");
        acc[3].classList.toggle("active",false);
        acc[4].nextElementSibling.classList.remove("show1");
        acc[4].classList.toggle("active",false);
 	 });
acc[1].addEventListener("click", function(){
        this.classList.toggle("active1");
        this.nextElementSibling.classList.toggle("show1");
        acc[0].nextElementSibling.classList.remove("show1");
        acc[0].classList.toggle("active1",false);
        acc[2].nextElementSibling.classList.remove("show1");
        acc[2].classList.toggle("active",false);
        acc[3].nextElementSibling.classList.remove("show1");
        acc[3].classList.toggle("active",false);
        acc[4].nextElementSibling.classList.remove("show1");
        acc[4].classList.toggle("active",false);
 	 });
acc[2].addEventListener("click", function(){
        this.classList.toggle("active1");
        this.nextElementSibling.classList.toggle("show1");
        acc[0].nextElementSibling.classList.remove("show1");
        acc[0].classList.toggle("active",false);
        acc[1].nextElementSibling.classList.remove("show1");
        acc[1].classList.toggle("active",false);
        acc[3].nextElementSibling.classList.remove("show1");
        acc[3].classList.toggle("active",false);
        acc[4].nextElementSibling.classList.remove("show1");
        acc[4].classList.toggle("active",false);
 	 });
acc[3].addEventListener("click", function(){
        this.classList.toggle("active1");
        this.nextElementSibling.classList.toggle("show1");
        acc[0].nextElementSibling.classList.remove("show1");
        acc[0].classList.toggle("active",false);
        acc[1].nextElementSibling.classList.remove("show1");
        acc[1].classList.toggle("active",false);
        acc[2].nextElementSibling.classList.remove("show1");
        acc[2].classList.toggle("active",false);
        acc[4].nextElementSibling.classList.remove("show1");
        acc[4].classList.toggle("active",false);
 	 });
acc[4].addEventListener("click", function(){
        this.classList.toggle("active1");
        this.nextElementSibling.classList.toggle("show1");
        acc[2].nextElementSibling.classList.remove("show1");
        acc[2].classList.toggle("active1",false);
        acc[0].nextElementSibling.classList.remove("show1");
        acc[0].classList.toggle("active",false);
        acc[1].nextElementSibling.classList.remove("show1");
        acc[1].classList.toggle("active",false);
        acc[3].nextElementSibling.classList.remove("show1");
        acc[3].classList.toggle("active",false);
 	 });