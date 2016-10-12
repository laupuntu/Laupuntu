<?
	// define variables and set to empty values
/*	$company = $cAddress = $cPlace = $cAdjname = $cAdjemail = $cPhone = $cExt = $cFax = $insured = $iAddress = $iPlace = $iPhone = $iPhone1 = $iPhone2 = $claim = $clAddress = $clPlace = $clPhone = $clPhone1 = $clPhone2 = $coClaimNum = $coPolicyNum = $coPlace = $coEffecDate = $coCoveAmounts = $coA = $coB = $coC = $coD = $coDeduct = $coLienHol = $lDate = $lPlace = $lDescpLoss = $lSpecInstruc = $lFullAdj = $lAgreApra = $lAttachfile = $lAttachfile1 = $$lAttachfile2 = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $company = test_input($_POST["company"]);
  $cAddress = test_input($_POST["cAddress"]);
  $cPlace = test_input($_POST["cPlace"]);
  $cAdjname = test_input($_POST["cAdjname"]);
  $cAdjemail = test_input($_POST["cAdjemail"]);
  $cPhone = test_input($_POST["cPhone"]);
  $cExt = test_input($_POST["cExt"]);
  $cFax = test_input($_POST["cFax"]);
  $insured = test_input($_POST["insured"]);
  $iAddress = test_input($_POST["iAddress"]);
  $iPlace = test_input($_POST["iPlace"]);
  $iPhone = test_input($_POST["iPhone"]);
  $iPhone1 = test_input($_POST["iPhone1"]);
  $iPhone2 = test_input($_POST["iPhone2"]);
  $claim = test_input($_POST["claim"]);
  $clAddress = test_input($_POST["clAddress"]);
  $clPlace = test_input($_POST["clPlace"]);
  $clPhone = test_input($_POST["clPhone"]);
  $clPhone1 = test_input($_POST["clPhone1"]);
  $clPhone2 = test_input($_POST["clPhone2"]);
  $coClaimNum = test_input($_POST["coClaimNum"]);
  $coPolicyNum = test_input($_POST["coPolicyNum"]);
  $coPlace = test_input($_POST["coPlace"]);
  $coEffecDate = test_input($_POST["coEffecDate"]);
  $coCoveAmounts = test_input($_POST["coCoveAmounts"]);
  $coA = test_input($_POST["coA"]);
  $coB = test_input($_POST["coB"]);
  $coC = test_input($_POST["coC"]);
  $coD = test_input($_POST["coD"]);
  $coDeduct = test_input($_POST["coDeduct"]);
  $coLienHol = test_input($_POST["coLienHol"]);
  $lDate = test_input($_POST["lDate"]);
  $lPlace = test_input($_POST["lPlace"]);
  $lDescpLoss = test_input($_POST["lDescpLoss"]);
  $lSpecInstruc = test_input($_POST["lSpecInstruc"]);
  $lFullAdj = test_input($_POST["lFullAdj"]);
  $lAgreApra = test_input($_POST["clAgreApra"]);
  $lAttachfile = test_input($_POST["lAttachfile"]);
  $lAttachfile1 = test_input($_POST["lAttachfile1"]);
  $lAttachfile2 = test_input($_POST["lAttachfile2"]);
}
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}*/
/*
$nombre_archivo = $_FILES['lAttachfile']['name'];
$tipo_archivo = $_FILES['lAttachfile']['type'];
$tamano_archivo = $_FILES['lAttachfile']['size'];
 
$MESSAGE_BODY  = "Nombre: ".$_POST["company"]."<br />";
$MESSAGE_BODY .= "Email: ".$_POST["cAdjemail"]."<br />";
$MESSAGE_BODY .= "Telefono: ".$_POST["cPhone"]."<br />";
 
$email        = "dagaravito37@misena.edu.co";
 
$asunto     = "New Claim Assignment";
$mensaje    = utf8_decode($MESSAGE_BODY);
$nombref    = $_FILES["lAttachfile"]["name"];
 
$cabeceras     = "From: ".$_POST["cAdjemail"]."\n";
$cabeceras .= "Reply-To: ".$_POST["cAdjemail"]."\n";
$cabeceras .= "MIME-version: 1.0n";
$cabeceras .= "Content-type: multipart/mixed; ";
$cabeceras .= "boundary=Message-Boundary"."\n";
$cabeceras .= "Content-transfer-encoding: 7BIT"."\n";
$cabeceras .= "X-attachments: ".$nombref;
 
$body_top  = "--Message-Boundary"."\n";
$body_top .= "Content-type: text/html; charset=US-ASCII"."\n";
$body_top .= "Content-transfer-encoding: 7BIT"."\n";
$body_top .= "Content-description: Mail message body"."\n";
 
$cuerpo = $body_top.$mensaje;
 
if($tamano_archivo>0)
{*/
//Leo el fichero
/*   $oFichero = fopen($_FILES["lAttachfile"]["tmp_name"], 'r'); 
   $sContenido = fread($oFichero, filesize($_FILES["lAttachfile"]["tmp_name"]));
   $sAdjuntos .= chunk_split(base64_encode($sContenido));
   fclose($oFichero);
   //Adjunto el fichero
   $cuerpo .= "\n\n"."--Message-Boundary"."\n";
   $cuerpo .= "Content-type: Binary; name=".$nombref."\n";
   $cuerpo .= "Content-Transfer-Encoding: BASE64"."\n";
   $cuerpo .= "Content-disposition: attachment; filename=".$nombref."\n";
   $cuerpo .= $sAdjuntos."\n";
   $cuerpo .= "--Message-Boundary--";
}*/
//Envío el correo
/*mail($email, $asunto, $cuerpo, $cabeceras);
*/

	$mail_cliente=$_POST ["cAdjemail"];
	$mensaje="Email de la persona: ".$mail_cliente."\r\nEsta persona quiere recibir noticias de CJE ";
	$cabecera="From:".$mail_cliente."";
	$enviar=("consulta@cje.com.co", "Mensaje desde CJE website", $mensaje, $cabecera);
	if($enviar){
		echo " Soon will receive information about CJE. Thank you.";
	}
else{
		echo "Error sending the message. Please try again.";
	}	
?>
