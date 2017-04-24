//para el header de navegacion
$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu').click(function(){
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

//para fijar el header de navegacion

$(document).ready(function() {
  var menu = $('header');
  var menu_offset = menu.offset();
  // Cada vez que se haga scroll en la página
  // haremos un chequeo del estado del menú
  // y lo vamos a alternar entre 'fixed' y 'static'.
  $(window).on('scroll', function() {
    if($(window).scrollTop() > menu_offset.top) {
      menu.addClass('fixed');
    } else {
      menu.removeClass('fixed');
    }
  });


});

//para slider principal
    $(document).ready(function() {

    	  //Sort random function
  function random(owlSelector){
    owlSelector.children().sort(function(){
        return Math.round(Math.random()) - 0.5;
    }).each(function(){
      $(this).appendTo(owlSelector);
    });
  }
 
  $("#owl-BigSlide").owlCarousel({
 
    slideSpeed : 1000,
    paginationSpeed : 1500,
    singleItem:true,
    // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
    autoPlay : true,
    stopOnHover : true,
   //transitionStyle : "scaleUp"¨,
    rewindNav :false,
    navigation : true, // Show next and prev buttons
    navigationText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
      ],
        //beforeInit : function(elem){
      //Parameter elem pointing to $("#owl-demo")
      //random(elem);
      //}  
 
     });
 
  });


//anima desplazamiento suave a los marcadores ancla

$(function(){

     $('a[href*=#]').click(function() {

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