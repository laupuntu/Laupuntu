/* Fijar menu en la parte de arriba cuando se haga scroll a la pagina */
window.onscroll = function() {fixedtop()};
function fixedtop() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) 
  {
    document.querySelector(".menu").style.position = "fixed";
    document.querySelector(".menu").style.top = 0;
    document.querySelector(".menu").style.zIndex = "1000";
    document.querySelector(".menu").style.backgroundColor = "#666666";
    document.querySelector(".menu").style.boxShadow = "0px 3px 10px 1px rgba(0, 0, 0, 0.75)";
    document.querySelector(".menu").style.width = "100%";
    document.querySelector(".menu").style.padding = "0 10%";
    document.querySelector(".login").style.display = "none";
    document.querySelector("#login").style.display = "block";
  } 
  else 
  {
    document.querySelector(".menu").style.top = "initial";
    document.querySelector(".menu").style.position = "initial";
    document.querySelector(".menu").style.backgroundColor = "initial";
    document.querySelector(".menu").style.width = "80%";
    document.querySelector(".menu").style.padding = "0";
    document.querySelector(".menu").style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0)";
    document.querySelector(".login").style.display = "block";
    document.querySelector("#login").style.display = "none";
  }
}
//fin menu
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
       document.getElementById("precio").innerHTML= "$300.000<p>(mas IVA)</p>";
       document.querySelector("#tar").style.color = "#f5c400";
       document.querySelector("#precio").style.fontSize = "28px";
       document.querySelector("#precio").style.display = "block";
}
function cambiaprecio1() {
        // body...
       document.getElementById("precio1").innerHTML= "$600.000<p>(mas IVA)</p>";
       document.querySelector("#tar1").style.color = "#f5c400";
       document.querySelector("#tar2").style.color = "#fff";
       document.querySelector("#precio1").style.fontSize = "28px";
       document.querySelector("#precio2").style.display = "none";
       document.querySelector("#precio1").style.display = "block";
}
function cambiaprecio2() {
        // body...
       document.getElementById("precio2").innerHTML= "$1.000.000<p>(mas IVA)</p>";
       document.querySelector("#tar2").style.color = "#f5c400";
       document.querySelector("#tar1").style.color = "#fff";
       document.querySelector("#precio2").style.fontSize = "28px";
       document.querySelector("#precio1").style.display = "none";
       document.querySelector("#precio2").style.display = "block";
       document.querySelector("#precio2").style.transition = "All 2s";
}
function cambiaprecio3() {
        // body...
       document.getElementById("precio3").innerHTML= "$1.500.000<p>(mas IVA)</p>";
       document.querySelector("#tar3").style.color = "#f5c400";
       document.querySelector("#tar4").style.color = "#fff";
       document.querySelector("#precio3").style.fontSize = "28px";
       document.querySelector("#precio").style.display = "none";
       document.querySelector("#precio3").style.display = "block";
}
function cambiaprecio4() {
        // body...
       document.getElementById("precio4").innerHTML= "$5.000.000<p>(mas IVA)</p>";
       document.querySelector("#tar4").style.color = "#f5c400";
       document.querySelector("#tar3").style.color = "#fff";
       document.querySelector("#precio4").style.fontSize = "28px";
       document.querySelector("#precio3").style.display = "none";
       document.querySelector("#precio4").style.display = "block";
}
//funciones cambia precios y color letras planes consultor financiero

function cambiaprecio5() {
        // body...
       document.getElementById("precio5").innerHTML= "$800.000<p>(mas IVA)</p>";
       document.querySelector("#tar5").style.color = "#f5c400";
       document.querySelector("#tar6").style.color = "#fff";
       document.querySelector("#tar7").style.color = "#fff";
       document.querySelector("#precio5").style.fontSize = "28px";
       document.querySelector("#precio6").style.display = "none";
       document.querySelector("#precio7").style.display = "none";
       document.querySelector("#precio5").style.display = "block";
}
function cambiaprecio6() {
        // body...
       document.getElementById("precio6").innerHTML= "$2.500.000<p>(mas IVA)</p>";
       document.querySelector("#tar6").style.color = "#f5c400";
       document.querySelector("#tar5").style.color = "#fff";
       document.querySelector("#tar7").style.color = "#fff";
       document.querySelector("#precio6").style.fontSize = "28px";
       document.querySelector("#precio5").style.display = "none";
       document.querySelector("#precio7").style.display = "none";
       document.querySelector("#precio6").style.display = "block";
}
function cambiaprecio7() {
        // body...
       document.getElementById("precio7").innerHTML= "$5.000.000<p>(mas IVA)</p>";
       document.querySelector("#tar7").style.color = "#f5c400";
       document.querySelector("#tar5").style.color = "#fff";
       document.querySelector("#tar6").style.color = "#fff";
       document.querySelector("#precio7").style.fontSize = "28px";
       document.querySelector("#precio5").style.display = "none";
       document.querySelector("#precio6").style.display = "none";
       document.querySelector("#precio7").style.display = "block";
}
function cambiaprecio8() {
        // body...
       document.getElementById("precio8").innerHTML= "$3.000.000<p>(mas IVA)</p>";
       document.querySelector("#tar8").style.color = "#f5c400";
       document.querySelector("#tar9").style.color = "#fff";
       document.querySelector("#tar10").style.color = "#fff";
       document.querySelector("#precio8").style.fontSize = "28px";
       document.querySelector("#precio9").style.display = "none";
       document.querySelector("#precio10").style.display = "none";
       document.querySelector("#precio8").style.display = "block";
}
function cambiaprecio9() {
        // body...
       document.getElementById("precio9").innerHTML= "$7.000.000<p>(mas IVA)</p>";
       document.querySelector("#tar9").style.color = "#f5c400";
       document.querySelector("#tar10").style.color = "#fff";
       document.querySelector("#tar8").style.color = "#fff";
       document.querySelector("#precio9").style.fontSize = "28px";
       document.querySelector("#precio8").style.display = "none";
       document.querySelector("#precio10").style.display = "none";
       document.querySelector("#precio9").style.display = "block";
}
function cambiaprecio10() {
        // body...
       document.getElementById("precio10").innerHTML= "$12.000.000<p>(mas IVA)</p>";
       document.querySelector("#tar10").style.color = "#f5c400";
       document.querySelector("#tar9").style.color = "#fff";
       document.querySelector("#tar8").style.color = "#fff";
       document.querySelector("#precio10").style.fontSize = "28px";
       document.querySelector("#precio9").style.display = "none";
       document.querySelector("#precio8").style.display = "none";
       document.querySelector("#precio10").style.display = "block";
}
function cambiaprecio11() {
        // body...
       document.getElementById("precio11").innerHTML= "$3.000.000<p>(mas IVA)</p>";
       document.querySelector("#tar11").style.color = "#f5c400";
       document.querySelector("#tar12").style.color = "#fff";
       document.querySelector("#tar13").style.color = "#fff";
       document.querySelector("#precio11").style.fontSize = "28px";
       document.querySelector("#precio12").style.display = "none";
       document.querySelector("#precio13").style.display = "none";
       document.querySelector("#precio11").style.display = "block";
}
function cambiaprecio12() {
        // body...
       document.getElementById("precio12").innerHTML= "$7.000.000<p>(mas IVA)</p>";
       document.querySelector("#tar12").style.color = "#f5c400";
       document.querySelector("#tar11").style.color = "#fff";
       document.querySelector("#tar13").style.color = "#fff";
       document.querySelector("#precio12").style.fontSize = "28px";
       document.querySelector("#precio13").style.display = "none";
       document.querySelector("#precio11").style.display = "none";
       document.querySelector("#precio12").style.display = "block";
}
function cambiaprecio13() {
        // body...
       document.getElementById("precio13").innerHTML= "$12.000.000<p>(mas IVA)</p>";
       document.querySelector("#tar13").style.color = "#f5c400";
       document.querySelector("#tar11").style.color = "#fff";
       document.querySelector("#tar12").style.color = "#fff";
       document.querySelector("#precio13").style.fontSize = "28px";
       document.querySelector("#precio12").style.display = "none";
       document.querySelector("#precio11").style.display = "none";
       document.querySelector("#precio13").style.display = "block";
}

//Codigo para introducir indicadores economicos
/*
document.querySelector("#trm").innerHTML="$ 2,853.99";
document.querySelector("#dtf").innerHTML="6.91%";
document.querySelector("#idagric").innerHTML="Proximamente";*/






