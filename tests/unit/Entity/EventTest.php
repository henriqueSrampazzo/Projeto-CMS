<?php
namespace CodeExperts\Entity;

use CodeExperts\Entity\Event;

class EventTest extends \PHPUnit_Framework_TestCase
{
    public function assertPreConditions()
    {
          $this->assertTrue(class_exists($class = 'CodeExperts\Entity\Event'),
                            'Class not found: ' . $class);
    }

    public function testIfGettersAndSetterHasWorking()
    {
        $event = new Event();

        $event->setTitle("Event Test");
        $event->setDescription("Description Event");
        $event->setContent("Content Event");
        $event->setVenue("Las Vegas");
        $event->setAddress("Address");
        $event->setStartDate("2016-10-10");
        $event->setEndDate("2016-10-10");
        $event->setStartTime("09:00");
        $event->setEndTime("22:00");
        $event->setIsActive(true);
        $event->setCreatedAt(new \DateTime("now", new \DateTimeZone("America/Sao_Paulo")));
        $event->setUpdatedAt(new \DateTime("now", new \DateTimeZone("America/Sao_Paulo")));

        $this->assertEquals("Event Test", $event->getTitle());
        $this->assertEquals("Description Event", $event->getDescription());
        $this->assertEquals("Content Event", $event->getContent());
        $this->assertEquals("Las Vegas", $event->getVenue());
        $this->assertEquals("Address",$event->getAddress());
        $this->assertEquals("2016-10-10",$event->getStartDate());
        $this->assertEquals("2016-10-10",$event->getEndDate());
        $this->assertEquals("09:00",$event->getStartTime());
        $this->assertEquals("22:00",$event->getEndTime());

        $this->assertTrue($event->getIsActive());

        $this->assertInstanceOf("\\DateTime", $event->getCreatedAt());
        $this->assertInstanceOf("\\DateTime", $event->getUpdatedAt());
    }
}