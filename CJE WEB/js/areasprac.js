var logocliente = new Array ();
var nombrecliente = new Array ();
var fotoequipo = new Array ();
var nomequipo = new Array ();
var cargoequi = new Array ();
var paginaweb = new Array ();
var numero = Math.random();
var numero2 = Math.random();
//Llenado Arreglo logocliente
logocliente[0] = "imagenes/logos_clientes/logo_cinte_color_200px.jpg";
logocliente[1] = "imagenes/logos_clientes/logo_smart_color_200px.jpg";
logocliente[2] = "imagenes/logos_clientes/logo_primavera_color_200px.jpg";
logocliente[3] = "imagenes/logos_clientes/logo_Usmigration_color_200px.jpg";
logocliente[4] = "imagenes/logos_clientes/logo_ERC_color_200px.jpg";
logocliente[5] = "imagenes/logos_clientes/logo_winalite_color_200px.jpg";
logocliente[6] = "imagenes/logos_clientes/logo_ecosmart_color_200px.jpg";
logocliente[7] = "imagenes/logos_clientes/logo_creo_color_200px.jpg";
logocliente[8] = "imagenes/logos_clientes/logo_sanquim_color_200px.jpg";
logocliente[9] = "imagenes/logos_clientes/logo_UAndes_color_200px.jpg";
logocliente[10] = "imagenes/logos_clientes/logo_colsdb_color_200px.jpg";
logocliente[11] = "imagenes/logos_clientes/logo_asegurate_color_200px.jpg";
//Llenado Arreglo nombrecliente
nombrecliente[0] = "GRUPO CINTE";
nombrecliente[1] = "SMART BUSINESS";
nombrecliente[2] = "PRIMAVERA";
nombrecliente[3] = "US INMIGRATION";
nombrecliente[4] = "ERC";
nombrecliente[5] = "WINALITE";
nombrecliente[6] = "ECOSMART";
nombrecliente[7] = "CREO";
nombrecliente[8] = "SAN QUIN";
nombrecliente[9] = "UNIANDES";
nombrecliente[10] = "COLSDB";
nombrecliente[11] = "ASEGÚRATE";
//Llenado Arreglo fotoequipo
fotoequipo[0] = "imagenes/abogado_andres.jpg";
fotoequipo[1] = "imagenes/abogado1.jpg";
fotoequipo[2] = "imagenes/abogado2.jpg";
fotoequipo[3] = "imagenes/rodrigo arenas.jpg";
fotoequipo[4] = "imagenes/abogado4.jpg";
fotoequipo[5] = "imagenes/Angelica_Malo.jpg";
fotoequipo[6] = "imagenes/Cristina Prieto2.jpg";
fotoequipo[7] = "imagenes/abogado3.jpg";
fotoequipo[8] = "imagenes/Luis_Felipe_Reyes.jpg";
fotoequipo[9] = "imagenes/Santiago_Tellez.jpg";
fotoequipo[10] = "imagenes/JuanManuel Erazo.jpg";
//Llenado Arreglo nomequipo
nomequipo[0] = "ANDRES JURADO";
nomequipo[1] = "MAURICIO BELTRAN";
nomequipo[2] = "JUAN F. GRANADOS";
nomequipo[3] = "RODRIGO ARENAS";
nomequipo[4] = "YVONNE OSORIO";
nomequipo[5] = "ANGELICA MALO";
nomequipo[6] = "MARIA CRISTINA PRIETO";
nomequipo[7] = "PEDRO MARTINEZ";
nomequipo[8] = "LUIS FELIPE REYES";
nomequipo[9] = "SANTIAGO TELLEZ";
nomequipo[10] = "JUAN MANUEL ERAZO";
//Llenado Arreglo nomequipo
cargoequi[0] = "Dir. Derecho Corporativo";
cargoequi[1] = "Dir. Derecho Ambiental";
cargoequi[2] = "Dir. Derecho Laboral";
cargoequi[3] = "Gerente Comercial";
cargoequi[4] = "Soporte Legal";
cargoequi[5] = "Gerencia de Proyectos";
cargoequi[6] = "Derecho Administrativo";
cargoequi[7] = "Soporte Judicial";
cargoequi[8] = "Estr. Financiera";
cargoequi[9] = "Derecho financiero";
cargoequi[10] = "Dir. Estr. Financiera";
//Llenado Arreglo paginaweb
paginaweb[0] = "profesional1.html";
paginaweb[1] = "profesional2.html";
paginaweb[2] = "profesional3.html";
paginaweb[3] = "profesional4.html";
paginaweb[4] = "profesional5.html";
paginaweb[5] = "profesional6.html";
paginaweb[6] = "profesional7.html";
paginaweb[7] = "profesional8.html";
paginaweb[8] = "profesional9.html";
paginaweb[9] = "profesional10.html";
paginaweb[10] = "profesional11.html";
//Funcion Clientes y Profesionales Aleatorios en Areas de Practica
function arealogo() {
	numero = numero * logocliente.length;
	numero = Math.floor(numero);
	//numero2 = numero2 * fotoequipo.length;
	//numero2 = Math.floor(numero2);
    document.getElementById("cinte").setAttribute("src",logocliente[numero]);
    document.getElementById("textcliente").innerHTML = nombrecliente[numero];
    //document.getElementById("esp").setAttribute("src",fotoequipo[numero2]);
    //document.getElementById("nombrequip").innerHTML = nomequipo[numero2];
    //document.getElementById("cargoequip").innerHTML = cargoequi[numero2];
    //document.getElementById("web").setAttribute("href",paginaweb[numero2]);
 }
 
