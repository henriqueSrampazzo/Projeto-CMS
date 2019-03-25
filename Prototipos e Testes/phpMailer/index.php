<?php
/**
 * This example shows settings to use when sending via Google's Gmail servers.
 * This uses traditional id & password authentication - look at the gmail_xoauth.phps
 * example to see how to use XOAUTH2.
 * The IMAP section shows how to save this message to the 'Sent Mail' folder using IMAP commands.
 */

//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;

require './vendor/autoload.php';

$mensagem = utf8_decode("Esse é o tal jogo que é melhor que o god of war 4 de usuário para ter uma ideia de como fazer um orçamento para limpar o nome da empresa para que eu possa fazer um novo anúncio");

$email = "usuario@gmail.com";

//Create a new PHPMailer instance
$mail = new PHPMailer; 

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 1;

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "nao.respondawits@gmail.com";

//Password to use for SMTP authentication
$mail->Password = "naorespondausuario";

//Set who the message is to be sent from
$mail->setFrom('nao.respondawits@gmail.com', 'Inovadora Noticias');

//Set an alternative reply-to address
$mail->addReplyTo($email, utf8_decode("Usuário"));

//Set who the message is to be sent to
$mail->addAddress('henriquesr5899@gmail.com', 'Administrador');
//$mail->addAddress('petrymateus@hotmail.com', 'Administrador');

//Set the subject line
$mail->Subject = utf8_decode('Mensagem de Usuário');

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML($mensagem);

//Replace the plain text body with one created manually
$mail->AltBody = $mensagem;

//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
    //Section 2: IMAP
    //Uncomment these to save your message in the 'Sent Mail' folder.
    #if (save_mail($mail)) {
    #    echo "Message saved!";
    #}
}