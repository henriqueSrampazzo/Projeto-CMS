<?php
namespace CodeExperts\Controller;

use CodeExperts\Service\PasswordService;
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

 require_once __DIR__  .'/../../vendor/autoload.php';

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

		if(!$user || $data['email'] != $user->getEmail()) {
			return $this->app->json(['msg' => 'error'],401);
		}

		$passwdService = new PasswordService();

		if(!$passwdService->isValidPassword($data['password'], $user->getPassword())) {
			return $this->app->json(['msg' => 'error'], 401);
		}

		$id_token = $data['id_token'];
		$CLIENT_ID = '445974938034-4peubcmgingou7lu7riv09jqdtqevua4.apps.googleusercontent.com';

		$client = new \Google_Client(['client_id' => $CLIENT_ID]);

	 	$payload = $client->verifyIdToken($id_token);

		if ($payload) {

			$userid = $payload['sub'];

			return $this->app->json(['token' => (string) $data['email']], 200);

		} else {

			return $this->app->json(['msg' => 'error'], 401);
		}

		//return $this->app->json(['token' => (string) $jwt->generateToken()], 200);
	}

}