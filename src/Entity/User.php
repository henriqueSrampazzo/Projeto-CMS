<?php
namespace CMS\Entity;

use CMS\Entity\Contract\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping AS ORM;
use JMS\Serializer\Annotation as JMS;


/**
 * @ORM\Table("users")
 * @ORM\Entity
 */
class User implements Entity
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
     * @ORM\Column(name="name", type="string")
     */
    private $name;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="email", type="string")
     */
    private $email;
    
    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="nivel", type="string")
     */
    private $nivel;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="created_at", type="datetime")
     */
    private $createdAt;

	/**
	 * @var ArrayCollection
	 * @ORM\ManyToMany(targetEntity="Event", mappedBy="userCollection")
	 */
	private $eventCollection;

	public function __construct()
	{
		$this->eventCollection = new ArrayCollection();
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
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }
    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * @return mixed
     */
    public function getNivel()
    {
        return $this->nivel;
    }

    /**
     * @param mixed $nivel
     */
    public function setNivel($nivel)
    {
        $this->nivel = $nivel;
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
	 * @return ArrayCollection
	 */
	public function getEventCollection()
	{
		return $this->eventCollection;
	}

	/**
	 * @param ArrayCollection $eventCollection
	 * @return ArrayCollection/User
	 */
	public function setEventCollection($eventCollection)
	{
		if($this->eventCollection->contains($eventCollection)) {
			return;
		}

		$this->eventCollection->add($eventCollection);

		return $this;
	}
<<<<<<< HEAD

    /**
     * @return mixed
     */
    public function getAdminPassword()
    {
        return $this->adminpassword;
    }

    /**
     * @param mixed $adminpassword
     */
    public function setAdminPassword($adminpassword)
    {
        $this->adminpassword = md5($adminpassword);
    }
    public function setAdminPasswordVazio($adminpassword)
    {
        $letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
        $tamanho = count($letras);

        for ($i=0; $i < 10; $i++) { 
            $selecionaletra = rand(0,$tamanho);
            $letra = $letras[$selecionaletra];
            $senhagerada = $senhagerada.rand(0,9).$letra;
        }
        $this->adminpassword = md5($senhagerada);
    }
=======
>>>>>>> 51be06db3dfadc4a57ffc3183bee869532c746ef
}