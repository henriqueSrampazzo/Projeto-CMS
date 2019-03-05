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
     * @ORM\Column(name="dataevent", type="string")
     */
    private $dataevent;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="photo", type="text")
     */

    private $photo;

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
    public function getDataEvent()
    {
        return $this->dataevent;
    }

    /**
     * @param mixed $dataEvent
     */
    public function setDataEvent($dataevent)
    {
        $this->dataevent = $dataevent;
    }

    /**
     * @return mixed
     */
    public function getPhoto()
    {
        return $this->photo;
    }

    /**
     * @param mixed $photo
     */
    public function setPhoto($photo)
    {
        if (empty($photo)) {
                $photovazia="";
                $this->photo=$photovazia;     
        } else{
        $this->photo = $photo;
        $photomod;
        $photomod = substr($photo, 12);
        $this->photo = "../../.././assets/eventos/".time().mt_rand().$photomod;
    }
}



//	/**
//	 * @return ArrayCollection
//	 */
//	public function getUserCollection()
//	{
//		return $this->userCollection;
//	}

//	/**
//	 * @param ArrayCollection $userCollection
//	 * @return ArrayCollection/Event
//	 */
//	public function setUserCollection($userCollection)
//	{
//		if($this->userCollection->contains($userCollection)) {
//			return;
//		}

//		$this->userCollection->add($userCollection);

//		return $this;
//	}
}
