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
     * @ORM\Column(name="description", type="text")
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
     * @ORM\Column(name="postdata", type="datetime")
     */
    private $postdata;

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
    $photomod1 = substr($photo1, 23);
    $photo1mod1 = str_replace(" ", "+", $photomod1);
    $this->photo1= $photo1mod1;
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
    $photomod2 = substr($photo2, 23);
    $photo2mod2 = str_replace(" ", "+", $photomod2);
    $this->photo2= $photo2mod2;
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
    $photomod3 = substr($photo3, 23);
    $photo3mod3 = str_replace(" ", "+", $photomod3);
    $this->photo3= $photo3mod3;
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
    $photomod4 = substr($photo4, 23);
    $photo4mod4 = str_replace(" ", "+", $photomod4);
    $this->photo4= $photo4mod4;
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
    $photomod5 = substr($photo5, 23);
    $photo5mod5= str_replace(" ", "+", $photomod5);
    $this->photo5= $photo5mod5;
}
    /**
     * @return mixed
     */
    public function getPostData()
    {
        return $this->postdata;
    }

    /**
     * @param mixed $venue
     */
    public function setPostData($postdata)
    {
        $this->postdata = $postdata;
    }

}