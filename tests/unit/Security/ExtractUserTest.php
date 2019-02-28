<?php
namespace CodeExperts\Security;

use Lcobucci\JWT\Parser;
use Silex\WebTestCase;

class ExtractUserTest extends WebTestCase
{
	public function createApplication()
	{
		$app = require __DIR__ . '/../../../app.php';
		return $app;
	}

	public function testExtractUserDataBasedInAToken()
	{

		$token = $this->app['jwt'];

		$token->setApplication($this->app);

		$token->setPayloadData([
			'username' => 'email@gmail.com'
		]);

		$token = (string) $token->generateToken();

		$extractUser = new ExtractUser(new Parser());
		$data = $extractUser->extract($token);

		$this->assertArrayHasKey('username', $data);
		$this->assertEquals('email@gmail.com', $data['username']->getValue());
	}
}