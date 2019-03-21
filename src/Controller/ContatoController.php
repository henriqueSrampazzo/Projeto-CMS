<?php

namespace CMS\Controller;

use CMS\Entity\Contato;
use CMS\Service\EMService;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use PHPMailer\PHPMailer\PHPMailer;

class ContatoController extends BaseController
{
	public function save(Request $request)
	{
		$data = $request->request->all();

		$contato = new Contato();

		$contato->setNome($data['nome']);
		$contato->setEmail($data['email']);
		$contato->setMensagem($data['mensagem']);
		$contato->setCreatedAt(new \DateTime("now", new \DateTimeZone("America/Sao_Paulo")));

		$em = new EMService($this->app['orm.em']);

		if(!$em->create($contato)) {
			return $this->app->json(['msg' => 'Mensagem não enviada! Tente novamente mais tarde'], 401);
		}

		$this->enviaEmail($data['nome'],$data['email'], $data['mensagem']);


		return $this->app->json(['msg' => 'Mensagem enviada com sucesso!'], 200);

		//return $this->app->json(['msg' => 'Mensagem enviada com sucesso!'], 200);

	}

	public function enviaEmail($nome, $email, $mensagem){

//Create a new PHPMailer instance
		$mail = new PHPMailer; 

//Tell PHPMailer to use SMTP
		$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
		$mail->SMTPDebug = 0;

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
		$mail->addReplyTo($email, utf8_decode($nome));

//Set who the message is to be sent to
		$mail->addAddress('henrique@inovadora.com.br', 'Administrador');
		//$mail->addAddress('petrymateus@hotmail.com', 'Administrador');

//Set the subject line
		$mail->Subject = utf8_decode('Mensagem de '. utf8_decode($nome));

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
		$mail->msgHTML($mensagem);

//Replace the plain text body with one created manually
		$mail->AltBody = $mensagem;

//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors

		$em = new EMService($this->app['orm.em']);

		if ($mail->send()) {

			return $this->app->json(['msg' => 'Mensagem não enviada! Tente novamente mais tarde'], 401);

		} else {

			echo "Message sent!";

		}

	}

}