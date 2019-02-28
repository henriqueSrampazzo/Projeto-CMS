<?php
namespace CodeExperts\Entity;

use CodeExperts\Entity\Contract\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping AS ORM;

use JMS\Serializer\Annotation as JMS;

/**
 * @ORM\Table("noticias")
 * @ORM\Entity
 */
class Noticia implements Entity
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
     * @ORM\Column(name="photo1", type="text")
     */
    private $photo1;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="photo2", type="text")
     */
    private $photo2;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="photo3", type="text")
     */
    private $photo3;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="photo4", type="text")
     */
    private $photo4;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="photo5", type="text")
     */
    private $photo5;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="postDate", type="string")
     */
    private $postDate;

	public function __construct()
	{
		
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
    public function getPhoto1()
    {
        return $this->photo1;
    }

    /**
     * @param mixed $photo1
     */
    public function setPhoto1($photo1)
    {
        $this->photo1 = $photo1;
    }


    /**
     * @return mixed
     */
    public function getPhoto2()
    {
        return $this->photo2;
    }

    /**
     * @param mixed $photo2
     */
    public function setPhoto2($photo2)
    {
        $this->photo2 = $photo2;
    }

    /**
     * @return mixed
     */
    public function getPhoto3()
    {
        return $this->photo3;
    }

    /**
     * @param mixed $photo3
     */
    public function setPhoto3($photo3)
    {
        $this->photo3 = $photo3;
    }

    /**
     * @return mixed
     */
    public function getPhoto4()
    {
        return $this->photo4;
    }

    /**
     * @param mixed $photo4
     */
    public function setPhoto4($photo4)
    {
        $this->photo4 = $photo4;
    }

    /**
     * @return mixed
     */
    public function getPhoto5()
    {
        return $this->photo5;
    }

    /**
     * @param mixed $photo5
     */
    public function setPhoto5($photo5)
    {
        $this->photo5 = $photo5;
    }
    /**
     * @return mixed
     */
    public function getPostDate()
    {
        return $this->postDate;
    }

    /**
     * @param mixed $venue
     */
    public function setPostDate($postDate)
    {
        $this->postDate = $postDate;
    }

}