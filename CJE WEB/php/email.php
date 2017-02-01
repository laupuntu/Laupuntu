<?
	$mail_cliente=$_POST ["email"];
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