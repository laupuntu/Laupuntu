/*var acc1 = document.getElementsByClassName("accordion1");
var i;
for (i = 0; i < acc1.length; i++) {
    acc1[i].onclick = function(){
        this.classList.toggle("active1");
        this.nextElementSibling.classList.toggle("show1");
    }
}*/
var acc1 = document.getElementsByClassName("accordion1");

acc1[0].addEventListener("click", function(){
        this.classList.toggle("active1");
        this.nextElementSibling.classList.toggle("show1");
        acc[1].nextElementSibling.classList.remove("show1");
        acc[1].classList.toggle("active1",false);
 	 });
acc1[1].addEventListener("click", function(){
        this.classList.toggle("active1");
        this.nextElementSibling.classList.toggle("show1");
        acc[0].nextElementSibling.classList.remove("show1");
        acc[0].classList.toggle("active1",false);
 	 });
acc1[2].addEventListener("click", function(){
        this.classList.toggle("active1");
        this.nextElementSibling.classList.toggle("show1");
        acc[3].nextElementSibling.classList.remove("show1");
        acc[3].classList.toggle("active1",false);
 	 });
acc1[3].addEventListener("click", function(){
        this.classList.toggle("active1");
        this.nextElementSibling.classList.toggle("show1");
        acc[2].nextElementSibling.classList.remove("show1");
        acc[2].classList.toggle("active1",false);
 	 });
acc1[4].addEventListener("click", function(){
        this.classList.toggle("active1");
        this.nextElementSibling.classList.toggle("show1");
        acc[1].nextElementSibling.classList.remove("show1");
        acc[1].classList.toggle("active1",false);
 	 });