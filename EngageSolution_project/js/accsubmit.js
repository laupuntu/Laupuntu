var acc1 = document.getElementsByClassName("accordion1");
var i;
for (i = 0; i < acc1.length; i++) {
    acc1[i].onclick = function(){
        this.classList.toggle("active1");
        this.nextElementSibling.classList.toggle("show1");
    }
}