<?php
namespace CodeExperts\Service;

use CodeExperts\UnitTestCase;
use CodeExperts\Service\PasswordService;

class PasswordServiceTest extends UnitTestCase
{
	private $password;

	public function setup()
	{
		$this->password = new PasswordService();
	}

	public function testIfPasswordHasBeenGeneratedWithSuccess()
	{
		$password = 'CodeExpertsApps';

		$proccess = $this->password->setPassword($password);

		$hash = $proccess->generate();

		$this->assertTrue($proccess->isValidPassword($password, $hash));
	}
}