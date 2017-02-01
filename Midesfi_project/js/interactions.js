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
//funciones cambia precios y color letras planes acompanamiento financiero

function cambiaprecio() {
        // body...
       document.getElementById("precio").innerHTML= "$300.000";
       document.querySelector("#tar").style.color = "#f5c400";
}
function cambiaprecio1() {
        // body...
       document.getElementById("precio1").innerHTML= "$600.000";
       document.querySelector("#tar1").style.color = "#f5c400";
       document.querySelector("#tar2").style.color = "#fff";
}
function cambiaprecio2() {
        // body...
       document.getElementById("precio1").innerHTML= "$1.000.000";
       document.querySelector("#tar2").style.color = "#f5c400";
       document.querySelector("#tar1").style.color = "#fff";
}
function cambiaprecio3() {
        // body...
       document.getElementById("precio2").innerHTML= "$1.500.000";
       document.querySelector("#tar3").style.color = "#f5c400";
       document.querySelector("#tar4").style.color = "#fff";
}
function cambiaprecio4() {
        // body...
       document.getElementById("precio2").innerHTML= "$5.000.000";
       document.querySelector("#tar4").style.color = "#f5c400";
       document.querySelector("#tar3").style.color = "#fff";
}
//funciones cambia precios y color letras planes consultor financiero

function cambiaprecio5() {
        // body...
       document.getElementById("precio3").innerHTML= "$800.000";
       document.querySelector(".tarifas div:last-child").style.display = "block"; //Estilo para mostrar prefio al hacer click
       document.querySelector("#tar5").style.color = "#f5c400";
       document.querySelector("#tar6").style.color = "#fff";
       document.querySelector("#tar7").style.color = "#fff";
}
function cambiaprecio6() {
        // body...
       document.getElementById("precio3").innerHTML= "$2.500.000";
       document.querySelector("#tar6").style.color = "#f5c400";
       document.querySelector("#tar5").style.color = "#fff";
       document.querySelector("#tar7").style.color = "#fff";
}
function cambiaprecio7() {
        // body...
       document.getElementById("precio3").innerHTML= "$5.000.000";
       document.querySelector("#tar7").style.color = "#f5c400";
       document.querySelector("#tar5").style.color = "#fff";
       document.querySelector("#tar6").style.color = "#fff";
}
function cambiaprecio8() {
        // body...
       document.getElementById("precio4").innerHTML= "$3.000.000";
       document.querySelector("#tar8").style.color = "#f5c400";
       document.querySelector("#tar9").style.color = "#fff";
       document.querySelector("#tar10").style.color = "#fff";
       document.querySelector("#precio4").style.fontSize = "30px";
}
function cambiaprecio9() {
        // body...
       document.getElementById("precio4").innerHTML= "$7.000.000";
       document.querySelector("#tar9").style.color = "#f5c400";
       document.querySelector("#tar10").style.color = "#fff";
       document.querySelector("#tar8").style.color = "#fff";
       document.querySelector("#precio4").style.fontSize = "30px";
}
function cambiaprecio10() {
        // body...
       document.getElementById("precio4").innerHTML= "$12.000.000";
       document.querySelector("#tar10").style.color = "#f5c400";
       document.querySelector("#tar9").style.color = "#fff";
       document.querySelector("#tar8").style.color = "#fff";
       document.querySelector("#precio4").style.fontSize = "28px";
}
function cambiaprecio11() {
        // body...
       document.getElementById("precio5").innerHTML= "$3.000.000";
       document.querySelector(".pruebatar2 div:last-child").style.display = "block"; //Estilo para mostrar prefio al hacer click
       document.querySelector("#tar11").style.color = "#f5c400";
       document.querySelector("#tar12").style.color = "#fff";
       document.querySelector("#tar13").style.color = "#fff";
       document.querySelector("#precio5").style.fontSize = "30px";
}
function cambiaprecio12() {
        // body...
       document.getElementById("precio5").innerHTML= "$7.000.000";
       document.querySelector("#tar12").style.color = "#f5c400";
       document.querySelector("#tar11").style.color = "#fff";
       document.querySelector("#tar13").style.color = "#fff";
       document.querySelector("#precio5").style.fontSize = "30px";
}
function cambiaprecio13() {
        // body...
       document.getElementById("precio5").innerHTML= "$12.000.000";
       document.querySelector("#tar13").style.color = "#f5c400";
       document.querySelector("#tar11").style.color = "#fff";
       document.querySelector("#tar12").style.color = "#fff";
       document.querySelector("#precio5").style.fontSize = "28px";
}
document.querySelector("#tar11").addEventListener("mouseover",animacion1);
document.querySelector("#tar12").addEventListener("mouseover",animacion1);
document.querySelector("#tar13").addEventListener("mouseover",animacion1);
document.querySelector("#tar11").addEventListener("mouseout",animacion2);
document.querySelector("#tar12").addEventListener("mouseout",animacion2);
document.querySelector("#tar13").addEventListener("mouseout",animacion2);

/*function animacion1() {
  // body...
  document.querySelector(".pruebatar2 i").style.marginLeft = "1px";
  document.querySelector(".pruebatar2 i").style.transition = "1s";
  document.querySelector(".pruebatar2 a").style.marginR = "1px";
}
function animacion2() {
  // body...
  document.querySelector(".pruebatar2 i").style.marginLeft = "0";
}*/







