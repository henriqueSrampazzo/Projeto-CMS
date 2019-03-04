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
     * @ORM\Column(name="postDate", type="datetime")
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


    // $uploaddir = './pasta';
    // $uploadfile = $uploaddir.basename($_FILES['photo1'][$photo1]);

    // // Move the uploaded file to the new location on the server. The move_uploaded_file returns true if successful or false if not, hence the if-else statement
    // if (move_uploaded_file($_FILES['avatar']['tmp_name'], $uploadfile)) {
    //     echo "File is valid, and was successfully uploaded.";
    // } else {
    //     echo "Error uploading file!";
    // }
        if (empty($photo1)) {
                $photovazia="";
                $this->photo1=$photovazia;     
        } else{
       $this->photo1 = $photo1;
       move_uploaded_file($photo1, "/pasta");
        $photomod1;
        $photomod1 = substr($photo1, 12);
        $this->photo1 = "../../.././assets/".time().mt_rand().$photomod1;
}
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
        if (empty($photo2)) {
                $photovazia="";
                $this->photo2=$photovazia;     
        } else{
        $this->photo2 = $photo2;
        $photomod2;
        $photomod2 = substr($photo2, 12);
        $this->photo2 = "../../.././assets/".time().mt_rand().$photomod2;
    }
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
        if (empty($photo3)) {
        $photovazia="";
        $this->photo3=$photovazia;     
        } else{
        $this->photo3 = $photo3;
        $photomod3;
        $photomod3 = substr($photo3, 12);
        $this->photo3 = "../../.././assets/".time().mt_rand().$photomod3;
    }
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

        if (empty($photo4)) {
        $photovazia="";
        $this->photo4=$photovazia;     
        } else{


        $this->photo4 = $photo4;
        $photomod4;
        $photomod4 = substr($photo4, 12);
        
        $images  = $_FILES[$photo4]; // pega imformações de todas imagens    
        // $uploaddir  = './../.././eventos-cel/src/assets'; //endereço onde vai salvar os arquivos
        // $uploadfile = $uploaddir . basename($_FILES['userfile']['name']);


        $this->photo4 = "../../.././assets/".time().mt_rand().$photomod4;
    }
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
        if (empty($photo5)) {
        $photovazia="";
        $this->photo5=$photovazia;     
        } else{
        $this->photo5 = $photo5;
        $photomod5;
        $photomod5 = substr($photo5, 12);
        $this->photo5 = "../../.././assets/".time().mt_rand().$photomod5;
    }
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