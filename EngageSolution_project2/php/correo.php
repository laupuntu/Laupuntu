<?php

$msg = null;

      if (isset($_POST["correo"]))
     {
        
    $nombre = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $email_to = "dagaravito37@misena.edu.co";
    $asunto = "Join Our Team";
    $mensaje = "Nombre: $nombre<br>Email: $email";
    $adjunto = $_FILES["attach"];
        
        require "../phpmailer/class.phpmailer.php";
    
          $mail = new PHPMailer;
      
      //indico a la clase que use SMTP
       //   $mail->IsSMTP();
      
          //permite modo debug para ver mensajes de las cosas que van ocurriendo
          //$mail->SMTPDebug = 2;

      //Debo de hacer autenticación SMTP
         // $mail->SMTPAuth = true;
          //$mail->SMTPSecure = "ssl";

      //indico el servidor de Gmail para SMTP
        $mail->Host = "localhost";

      //indico el puerto que usa Gmail
          //$mail->Port = 465;

      //indico un usuario / clave de un usuario de gmail
        //  $mail->Username = "anyone@anyone.com";
         // $mail->Password = "anyonep#password";
       
          $mail->From = "name@email.com";
        
          $mail->FromName = "Administrator";
        
          $mail->Subject = $asunto;
        
          $mail->addAddress($email_to, $nombre);
        
          $mail->MsgHTML($mensaje);
        
    
       if ($adjunto ["size"] > 0)
      {
           
          $mail->addAttachment($adjunto ["tmp_name"], $adjunto ["name"]);
   }
    
        
          if($mail->Send())
        {
    header("Location: ../careers.html");
    }
        else
        {
    $msg = "Lo siento, ha habido un error al enviar el mensaje a $email_to";
    }
 }
?>
