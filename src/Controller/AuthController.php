<?php
namespace CodeExperts\Controller;

use CodeExperts\Service\PasswordService;
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

		// require './../vendor/google/apiclient/src/Google/Client.php';



class AuthController
{
	private $app;

	/**
	 * AuthController constructor.
	 * @param Application $app
	 */
	public function __construct(Application $app)
	{
		$this->app = $app;
	}

	public function login(Request $request)
	{
		$data = $request->request->all();

		$user = $this->app['orm.em']
		->getRepository('CodeExperts\Entity\User')
		->findOneByEmail($data['email']);

		if(!$user
			|| $data['email'] != $user->getEmail()) {
			return $this->app->json(['msg' => 'Usuário ou senha incorretos!'],
				401);
		}

		$passwdService = new PasswordService();

		if(!$passwdService->isValidPassword($data['password'], $user->getPassword())) {
			return $this->app->json(['msg' => 'Usuário ou senha incorretos!'], 401);
		}

		$jwt = $this->app['jwt'];

		$jwt->setApplication($this->app);

		$jwt->setPayloadData([
			'username' => $user->getEmail()
		]);

		// $this->validaToken($data['id_token']);


		return $this->app->json(['token' => (string) $data['email']], 200);

	}






	// public function validaToken($id_token){

	// 	$CLIENT_ID = '445974938034-4peubcmgingou7lu7riv09jqdtqevua4.apps.googleusercontent.com';

	// 	$client = new Google_Client(['client_id' => $CLIENT_ID]);







	// 	$payload = $client->verifyIdToken($id_token);

	// 	if ($payload) {
	// 		$userid = $payload['sub'];

	// 		return $this->app->json(['msg' => 'token válido'], 200);

	// 	  // If request specified a G Suite domain:
	// 	  //$domain = $payload['hd'];
	// 	} else {

	// 	  // Invalid ID token
	// 		return $this->app->json(['msg' => 'Token inválido'], 200);

	// 	}

	// }

}