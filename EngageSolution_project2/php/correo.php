<?php

$msg = null;

      if (isset($_POST["correo"]))
     {
      //Join Our team
    $lname = htmlspecialchars($_POST["lname"]);
    $fname = htmlspecialchars($_POST["fname"]);
    $mi = htmlspecialchars($_POST["mi"]);
    $street = htmlspecialchars($_POST["street"]);
    $city = htmlspecialchars($_POST["city"]);
    $state = htmlspecialchars($_POST["state"]);
    $zip = htmlspecialchars($_POST["zip"]);
    $state = htmlspecialchars($_POST["state"]);
    $hphone = htmlspecialchars($_POST["hphone"]);
    $cphone = htmlspecialchars($_POST["cphone"]);
    $email = htmlspecialchars($_POST["email"]);
      //Experience Info
    $year = htmlspecialchars($_POST["year"]);
    $propertypl = htmlspecialchars($_POST["propertypl"]);
    $propertycl = htmlspecialchars($_POST["propertycl"]);
    $liabilitypl = htmlspecialchars($_POST["liabilitypl"]);
    $liabilitycl = htmlspecialchars($_POST["liabilitycl"]);
    $flood = htmlspecialchars($_POST["flood"]);
    $other = htmlspecialchars($_POST["other"]);
    $hurricane = htmlspecialchars($_POST["hurricane"]);
    $hail = htmlspecialchars($_POST["hail"]);
    $cflood = htmlspecialchars($_POST["cflood"]);
    $earthquake = htmlspecialchars($_POST["earthquake"]);
    $tornado = htmlspecialchars($_POST["tornado"]);
    $fire = htmlspecialchars($_POST["fire"]);
      //Adjuster Licenses
    $alstate = htmlspecialchars($_POST["alstate"]);
    $license = htmlspecialchars($_POST["license"]);
    $type = htmlspecialchars($_POST["type"]);
    $alstate1 = htmlspecialchars($_POST["alstate1"]);
    $license1 = htmlspecialchars($_POST["license1"]);
    $type1 = htmlspecialchars($_POST["type1"]);
    $alstate2 = htmlspecialchars($_POST["alstate2"]);
    $license2 = htmlspecialchars($_POST["license2"]);
    $type2 = htmlspecialchars($_POST["type2"]);
    $alstate3 = htmlspecialchars($_POST["alstate3"]);
    $license3 = htmlspecialchars($_POST["license3"]);
    $type3 = htmlspecialchars($_POST["type3"]);
    $nfip = htmlspecialchars($_POST["nfip"]);
    $nfipnum = htmlspecialchars($_POST["nfipnum"]);
    $aphand = htmlspecialchars($_POST["aphand"]);
      //Other Skills
    $otherap = htmlspecialchars($_POST["otherap"]);
    $otheraptext = htmlspecialchars($_POST["otheraptext"]);
    $otherap1 = htmlspecialchars($_POST["otherap1"]);
    $otheraptext2 = htmlspecialchars($_POST["otheraptext2"]);
    $hsgraduate = htmlspecialchars($_POST["hsgraduate"]);
    $sads = htmlspecialchars($_POST["sads"]);
    $companysas = htmlspecialchars($_POST["companysas"]);
    $datesas = htmlspecialchars($_POST["datesas"]);
    $authoritysas = htmlspecialchars($_POST["authoritysas"]);
    $iia = htmlspecialchars($_POST["iia"]);
    $companyiia = htmlspecialchars($_POST["companyiia"]);
    $dateiia = htmlspecialchars($_POST["dateiia"]);
    $authorityiia = htmlspecialchars($_POST["authorityiia"]);
    $eoc = htmlspecialchars($_POST["eoc"]);
    $tsr = htmlspecialchars($_POST["tsr"]);
    $ccf = htmlspecialchars($_POST["ccf"]);
    $ccftext = htmlspecialchars($_POST["ccftext"]);
    $als = htmlspecialchars($_POST["als"]);
    $alstext = htmlspecialchars($_POST["alstext"]);

    //Email

    $email_to = "myemail@myemail.com";
    $asunto = "Join Our Team";
    $mensaje = "Join Our Team<br><br>Last Name: $lname<br>Firts Name: $fname<br>M.I.: $mi<br>Street: $street<br>City: $city<br>State: $state<br>Zip: $zip<br>home Phone: $hphone<br>Cell Phone: $cphone<br>Email: $email<br><br>Experience Info<br><br>1. I starte adjusting claims on the year: $year<br>2. I have had direct claims experience with the followinf type of claims:<br>Type of Claims<br><br>Property - Personal Lines: $propertypl<br>Property - Comercial Lines: $propertycl<br>Liability - Personal Lines: $liabilitypl<br>Liability - Commercial Lines: $liabilitycl<br>Flood: $flood<br>Other: $other<br><br>3. Types of catastrophes that you have direct claims experience whit:<br>Type of Catastophe<br><br>Hurricane: $hurricane:<br>Flood: $cflood<br>Earthquake: $earthquake<br>Tornado: $tornado<br>Fire: $fire:<br><br>Adjuster Licenses<br><br>State: $alstate<br>License #: $license<br>Type: $type<br>State: $alstate1<br>License #: $license1<br>Type1: $type<br>State: $alstate2<br>License #: $license2<br>Type: $type2<br>State: $alstate3<br>License #: $license3<br>Type: $type3<br>NFIP Certified: $nfip<br>If certified, NFIP #: $nfipnum<br><b>Aproved to handle<br>Residential: $aphand<br><br>OTHER Skills<br>1. Computer Software used: $otherap<br>Other (specify): $otheraptext<br>2. Are you Bilingual: $otherap1<br>Language(s): $otheraptext2<br>3. Your Educational Background: $hsgraduate<br>4. Have you ever been a Staff Adjuster or Supervisor? $sads<br>If yes, please answer:<br>Company: $companysas<br>Dates: datesas$<br>What was your authority? $authoritysas<br>5. Have you ever worked as an “inside” independent adjuster for an insurance company? $iia<br>If yes, please answer:<br>Company: $companyiia<br>Dates: $dateiia<br>What was your role? $authorityiia<br>6. Errors & Omissions Coverage:  Do you have a policy in force? $authorityiia<br>7. Can you carry, set up and use a ladder to inspect a one or two story roof? $tsr<br>8. Have you been convicted of a crime in the last five (5) years (including traffic violations) or have you ever been convicted of a felony? $ccf<br>If yes, please give details: $ccftext<br>9. Have you ever had your adjuster’s license suspended or revoked? $als<br>If yes, please give details: $alstext.";

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
