<?php
namespace CodeExperts\Entity;

use CodeExperts\Entity\Contract\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping AS ORM;

use JMS\Serializer\Annotation as JMS;

/**
 * @ORM\Table("events")
 * @ORM\Entity
 */
class Event implements Entity
{
    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(name="id", type="integer")
     */
    private $id;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="title", type="string")
     */
    private $title;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="description", type="string")
     */
    private $description;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="content", type="text")
     */
    private $content;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="venue", type="string")
     */
    private $venue;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="address", type="string")
     */
    private $address;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="start_date", type="string")
     */
    private $startDate;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="end_date", type="string")
     */
    private $endDate;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="start_time", type="string")
     */
    private $startTime;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="end_time", type="string")
     */
    private $endTime;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="is_active", type="boolean")
     */
    private $isActive;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="created_at", type="datetime")
     */
    private $createdAt;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="updated_at", type="datetime")
     */
    private $updatedAt;

	/**
	 * @var ArrayCollection
	 * @ORM\ManyToMany(targetEntity="User", inversedBy="eventCollection", cascade={"ALL"})
	 */
	private $userCollection;

	/**
	 * Event constructor.
	 */
	public function __construct()
	{
		$this->userCollection = new ArrayCollection();
	}

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @return mixed
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param mixed $content
     */
    public function setContent($content)
    {
        $this->content = $content;
    }

    /**
     * @return mixed
     */
    public function getVenue()
    {
        return $this->venue;
    }

    /**
     * @param mixed $venue
     */
    public function setVenue($venue)
    {
        $this->venue = $venue;
    }

    /**
     * @return mixed
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * @param mixed $address
     */
    public function setAddress($address)
    {
        $this->address = $address;
    }

    /**
     * @return mixed
     */
    public function getStartDate()
    {
        return $this->startDate;
    }

    /**
     * @param mixed $startDate
     */
    public function setStartDate($startDate)
    {
        $this->startDate = $startDate;
    }

    /**
     * @return mixed
     */
    public function getEndDate()
    {
        return $this->endDate;
    }

    /**
     * @param mixed $endDate
     */
    public function setEndDate($endDate)
    {
        $this->endDate = $endDate;
    }

    /**
     * @return mixed
     */
    public function getStartTime()
    {
        return $this->startTime;
    }

    /**
     * @param mixed $startTime
     */
    public function setStartTime($startTime)
    {
        $this->startTime = $startTime;
    }

    /**
     * @return mixed
     */
    public function getEndTime()
    {
        return $this->endTime;
    }

    /**
     * @param mixed $endTime
     */
    public function setEndTime($endTime)
    {
        $this->endTime = $endTime;
    }

    /**
     * @return mixed
     */
    public function getIsActive()
    {
        return $this->isActive;
    }

    /**
     * @param mixed $isActive
     */
    public function setIsActive($isActive)
    {
        $this->isActive = $isActive;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * @param mixed $createdAt
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;
    }

    /**
     * @return mixed
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * @param mixed $updatedAt
     */
    public function setUpdatedAt($updatedAt)
    {
        $this->updatedAt = $updatedAt;
    }

	/**
	 * @return ArrayCollection
	 */
	public function getUserCollection()
	{
		return $this->userCollection;
	}

	/**
	 * @param ArrayCollection $userCollection
	 * @return ArrayCollection/Event
	 */
	public function setUserCollection($userCollection)
	{
		if($this->userCollection->contains($userCollection)) {
			return;
		}

		$this->userCollection->add($userCollection);

		return $this;
	}
}