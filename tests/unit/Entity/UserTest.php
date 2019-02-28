<?php
namespace CodeExperts\Entity;

use CodeExperts\Entity\User;

class UserTest extends \PHPUnit_Framework_TestCase
{
    public function assertPreConditions()
    {
          $this->assertTrue(class_exists($class = 'CodeExperts\Entity\User'),
                            'Class not found: ' . $class);
    }

    public function testIfGettersAndSetterHasWorking()
    {
        $user = new User();

        $user->setName("Name Test");
        $user->setEmail("email@email.com");
        $user->setPassword("123456");
        $user->setUsername("nameTest");
        $user->setIsActive(true);
        $user->setCreatedAt(new \DateTime("now", new \DateTimeZone("America/Sao_Paulo")));
        $user->setUpdatedAt(new \DateTime("now", new \DateTimeZone("America/Sao_Paulo")));

        $this->assertEquals("Name Test", $user->getName());
        $this->assertEquals("email@email.com", $user->getEmail());
        $this->assertEquals("123456", $user->getPassword());
        $this->assertEquals("nameTest", $user->getUsername());

        $this->assertTrue($user->getIsActive());

        $this->assertInstanceOf("\\DateTime", $user->getCreatedAt());
        $this->assertInstanceOf("\\DateTime", $user->getUpdatedAt());
    }
}