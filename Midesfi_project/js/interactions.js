//Menu Plan Emprender
var acc = document.getElementsByClassName("accordion");
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
 	 });

var acc = document.getElementsByClassName("accordion");
acc[2].addEventListener("click", function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
        acc[3].nextElementSibling.classList.remove("show");
        acc[3].classList.toggle("active",false);
 	 });
acc[3].addEventListener("click", function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
        acc[2].nextElementSibling.classList.remove("show");
        acc[2].classList.toggle("active",false);
 	 });

var acc = document.getElementsByClassName("accordion");
acc[4].addEventListener("click", function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
        acc[5].nextElementSibling.classList.remove("show");
        acc[5].classList.toggle("active",false);
 	 });
acc[5].addEventListener("click", function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
        acc[4].nextElementSibling.classList.remove("show");
        acc[4].classList.toggle("active",false);
 	 });