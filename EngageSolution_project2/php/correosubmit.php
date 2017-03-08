<?php

$msg = null;

      if (isset($_POST["correosubmit"]))
     {
        
    $company = htmlspecialchars($_POST["company"]);
    $cAddress = htmlspecialchars($_POST["cAddress"]);
    $cPlace = htmlspecialchars($_POST["cPlace"]);
    $cAdjname = htmlspecialchars($_POST["cAdjname"]);
    $cAdjemail = htmlspecialchars($_POST["cAdjemail"]);
    $cPhone = htmlspecialchars($_POST["cPhone"]);
    $cExt = htmlspecialchars($_POST["cExt"]);
    $cFax = htmlspecialchars($_POST["cFax"]);
    $insured = htmlspecialchars($_POST["insured"]);
    $iAddress = htmlspecialchars($_POST["iAddress"]);
    $iPlace = htmlspecialchars($_POST["iPlace"]);
    $iPhone = htmlspecialchars($_POST["iPhone"]);
    $iPhone1 = htmlspecialchars($_POST["iPhone1"]);
    $iPhone2 = htmlspecialchars($_POST["iPhone2"]);
    $claim = htmlspecialchars($_POST["claim"]);
    $clAddress = htmlspecialchars($_POST["clAddress"]);
    $clPlace = htmlspecialchars($_POST["clPlace"]);
    $clPhone = htmlspecialchars($_POST["clPhone"]);
    $clPhone1 = htmlspecialchars($_POST["clPhone1"]);
    $clPhone2 = htmlspecialchars($_POST["clPhone2"]);
    $coClaimNum = htmlspecialchars($_POST["coClaimNum"]);
    $coPolicyNum = htmlspecialchars($_POST["coPolicyNum"]);
    $coPlace = htmlspecialchars($_POST["coPlace"]);
    $coEffecDate = htmlspecialchars($_POST["coEffecDate"]);
    $coCoveAmounts = htmlspecialchars($_POST["coCoveAmounts"]);
    $coA = htmlspecialchars($_POST["coA"]);
    $coB = htmlspecialchars($_POST["coB"]);
    $coC = htmlspecialchars($_POST["coC"]);
    $coD = htmlspecialchars($_POST["coD"]);
    $coDeduct = htmlspecialchars($_POST["coDeduct"]);
    $coLienHol = htmlspecialchars($_POST["coLienHol"]);
    $lDate = htmlspecialchars($_POST["lDate"]);
    $lPlace = htmlspecialchars($_POST["lPlace"]);
    $lDescpLoss = htmlspecialchars($_POST["lDescpLoss"]);
    $lSpecInstruc = htmlspecialchars($_POST["lSpecInstruc"]);
    $lFullAdj = htmlspecialchars($_POST["lFullAdj"]);
    $lAgreApra = htmlspecialchars($_POST["lAgreApra"]);
    $email_to = "diego.garavito@laupuntu.com";
    $asunto = "New Claim Assignment";
    $mensaje = "Client information<br><br>Company: $company<br>Address: $cAddress<br>City, State & Zip: $cPlace<br>Adjuster Name: $cAdjname<br>Adjuster Email: $cAdjemail<br>Phone: $cPhone<br>Extension: $cExt<br>Fax: $cFax<br><br>";
    $mensaje1 = "Insured Information<br><br>Insured: $insured<br>Address: $iAddress<br>City, State & Zip: $iPlace<br>Phone: $iPhone<br>Phone: $iPhone1<br>Phone2: $iPhone2<br><br>";
    $mensaje2 = "Claimant Information<br><br>Claim: $claim<br>Address: $clAddress<br>City, State & Zip: $clPlace<br>Phone: $clPhone<br>Phone: $clPhone1<br>Phone2: $clPhone2<br><br>";
    $mensaje3 = "Coverage Information<br><br>Claim #: $coClaimNum<br>Policy #: $coPolicyNum<br>Type of Policy: $coPlace<br>Effective Date: $coEffecDate<br>Coverage Amounts: $coCoveAmounts<br>A: $coA<br>B: $coB<br>C: $coC<br>D: $coD<br>Deductible: $coDeduct<br>Lien Holder: $coLienHol<br><br>";
    $mensaje4 = "Loss Information<br><br>Loss Date: $lDate<br>Loss Location: $lPlace<br>Description of loss: $lDescpLoss<br>Special Instruction: $lSpecInstruc<br>Full Adjustment: $lFullAdj<br>Agreed Apraisal: $lAgreApra<br><br>";
    $cuerpo = $mensaje . $mensaje1 . $mensaje2 . $mensaje3 . $mensaje4;

    if (array_key_exists('userfile', $_FILES)) {
        
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
       
          $mail->From = "diego.garavit0@laupuntu,com";
        
          $mail->FromName = "Administrator";
        
          $mail->Subject = $asunto;
        
          $mail->addAddress($email_to, $nombre);
        
          $mail->MsgHTML($cuerpo);
        
    
//Attach multiple files one by one
    for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
        $filename = $_FILES['userfile']['name'][$ct];
        if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }
    }
    
        
          if($mail->Send())
        {
    header("Location: ../submit.html");
    }
        else
        {
    $msg = "Lo siento, ha habido un error al enviar el mensaje a $email_to";
    }
  }
 
 }

?>
