<?

$msg = null;

      if (isset($_POST["phpmailer"]))
     {
        
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $asunto =htmlspecialchars( $_POST["asunto"]);
    $mensaje = $_POST["mensaje"];
    $adjunto = $_FILES["adjunto"];
        
        require "phpmailer/class.phpmailer.php";
    
          $mail = new PHPMailer;
      
      //indico a la clase que use SMTP
          $mail->IsSMTP();
      
          //permite modo debug para ver mensajes de las cosas que van ocurriendo
          //$mail->SMTPDebug = 2;

      //Debo de hacer autenticación SMTP
          $mail->SMTPAuth = true;
          $mail->SMTPSecure = "ssl";

      //indico el servidor de Gmail para SMTP
          $mail->Host = "smtp.gmail.com";

      //indico el puerto que usa Gmail
          $mail->Port = 465;

      //indico un usuario / clave de un usuario de gmail
          $mail->Username = "danielgaravito@gmail.com";
          $mail->Password = "ragnarok84G4r4v1t0";
       
          $mail->From = "danielgaravito@gmail.com";
        
          $mail->FromName = "Administrador";
        
          $mail->Subject = $asunto;
        
          $mail->addAddress($email, $nombre);
        
          $mail->MsgHTML($mensaje);
        
    
       if ($adjunto ["size"] > 0)
      {
           
          $mail->addAttachment($adjunto ["tmp_name"], $adjunto ["name"]);
   }
    
        
          if($mail->Send())
        {
    $msg= "En hora buena el mensaje ha sido enviado con exito a $email";
    }
        else
        {
    $msg = "Lo siento, ha habido un error al enviar el mensaje a $email";
    }
 }
?>
 