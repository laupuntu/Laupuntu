<?
	$mail_cliente=$_POST ["email"];
	$mensaje="Email del Cliente: ".$mail_cliente."\r\nEste cliente se ha contactado";
	$cabecera="From:Auriga Website <comercial@aurigaingenieria.com>";
	


	if(mail("comercial@aurigaingenieria.com", "Mensaje desde Auriga website", $mensaje, $cabecera)){
		echo "Mensaje enviado exitosamente. Muy pronto nos contactaremos con usted. Gracias";
	}
else{
		echo "Error en el envio del mensaje. Vuelva a intentarlo";
	}	
?>