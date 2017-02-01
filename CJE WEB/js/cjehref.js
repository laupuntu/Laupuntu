/* Click en logo principal lleva a index */
function principal() {
    location.href = "index.html";
 }
 /* Click en clientes en 'nav' lleva a pagina clientes*/
 function clientes() {
    location.href = "clientes.html";
 }
 /* Abre nuevas ventanas para los clientes en clientes*/
 function cinte() {
    window.open("http://www.grupocinte.com", "_blank");
 }
 function smart() {
    window.open("http://www.smartbusiness.es", "_blank");
 }
 function primavera() {
    window.open("http://papelesprimavera.com", "_blank");
 }
 function ice() {
    window.open("https://www.ice.gov", "_blank");
 }
 function erc() {
    window.open("http://ercbelgium.com/main", "_blank");
 }
 function winalite() {
    window.open("http://co.winalite.com", "_blank");
 }
 function ecosmart() {
    window.open("http://www.ecosmartsolutions.org", "_blank");
 }
 function creo() {
    window.open("http://www.creo.org.co", "_blank");
 }
 function sanquin() {
    window.open();
 }
 function andes() {
    window.open("https://cienciasbiologicas.uniandes.edu.co", "_blank");
 }
 function colsdb() {
    window.open("http://www.colsdb.org", "_blank");
 }
 function asegurate() {
    window.open("http://www.aseguratelimitada.com", "_blank");
 }
 function aguas() {
    window.open("http://aguasmocoa.gov.co", "_blank");
 }
 function bolsa() {
    window.open("http://www.bolsamercantil.com.co", "_blank");
 }
 function ani() {
    window.open("http://ani.gov.co", "_blank");
 }
/*Funcion para Menu Responsive*/
$(document).ready(main);
 
var contador = 1;
 
function main () {
    $('.menu_bar').click(function(){
        if (contador == 1) {
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