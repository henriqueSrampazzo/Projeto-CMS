<?php
namespace CodeExperts\Service;

use CodeExperts\UnitTestCase;
use CodeExperts\Entity\User;
use CodeExperts\Service\PasswordService;

class EMServiceTest extends UnitTestCase
{
	private $er;

	public function setUp()
	{
		$this->er = $this->getDoctrineEntityRepositoryMock();

		$this->er->expects($this->any())
		         ->method('getRepository')
		         ->will($this->returnValue($this->er));

		$this->er->expects($this->any())
		         ->method('find')
		         ->will($this->returnValue(new User()));
	}

	public function testInsertANewUser()
	{
		$password = new PasswordService();
		$password = $password->setPassword('123456')
		                     ->generate();

		$user = new User();

		$user->setName("Son Goku");
		$user->setEmail("goku@dbz.jp");
		$user->setUsername("goku");
		$user->setPassword($password);
		$user->setIsActive(true);
		$user->setCreatedAt(new \DateTime("now", new \DateTimeZone("America/Sao_Paulo")));
		$user->setUpdatedAt(new \DateTime("now", new \DateTimeZone("America/Sao_Paulo")));

		$userService = new EMService($this->getDoctrineEntityManagerMock());
		$insert = $userService->create($user);

		$this->assertInstanceOf("CodeExperts\\Entity\\User", $insert);
	}

	/**
	 * @expectedException InvalidArgumentException
	 * @expectedExceptionMessage Parameter invalid must be a CodeExperts\Entity\Contract\Entity instance
	 */
	public function testInvalidUserCreate()
	{
		$user = (object) [];

		$userService = new EMService($this->getDoctrineEntityManagerMock());

		$insert = $userService->create($user);
	}

	public function testUpdateANewUser()
	{
		$password = new PasswordService();
		$password = $password->setPassword('123456')
		                     ->generate();

		$user = $this->er->getRepository('CodeExperts\App\Entity\User')->find(1);

		$user->setName("Son Goku Edited");
		$user->setEmail("goku@dbz.jp");
		$user->setUsername("goku");
		$user->setPassword($password);
		$user->setIsActive(true);
		$user->setCreatedAt(new \DateTime("now", new \DateTimeZone("America/Sao_Paulo")));
		$user->setUpdatedAt(new \DateTime("now", new \DateTimeZone("America/Sao_Paulo")));

		$userService = new EMService($this->getDoctrineEntityManagerMock());
		$update      = $userService->update($user);

		$this->assertInstanceOf("CodeExperts\Entity\User", $update);
	}

	/**
	 * @expectedException InvalidArgumentException
	 * @expectedExceptionMessage Parameter invalid must be a CodeExperts\Entity\Contract\Entity instance
	 */
	public function testInvalidUserUpdate()
	{
		$user = (object) [];

		$userService = new EMService($this->getDoctrineEntityManagerMock());

		$insert = $userService->update($user);
	}

	public function testIfDeletedUserHasBeenSuccess()
	{
		$user = $this->er->getRepository('CodeExperts\Entity\User')->find(1);

		$userService = new EMService($this->getDoctrineEntityManagerMock());

		$this->assertTrue($userService->delete($user));
	}


	/**
	 * @expectedException InvalidArgumentException
	 * @expectedExceptionMessage Parameter invalid must be a CodeExperts\Entity\Contract\Entity instance
	 */
	public function testInvalidUserDelete()
	{
		$user = (object) [];

		$userService = new EMService($this->getDoctrineEntityManagerMock());

		$insert = $userService->delete($user);
	}
}