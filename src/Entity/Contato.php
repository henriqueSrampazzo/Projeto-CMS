<?php
namespace CodeExperts\Entity;

use CodeExperts\Entity\Contract\Entity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping AS ORM;
use JMS\Serializer\Annotation as JMS;

/**
 * @ORM\Table("contato")
 * @ORM\Entity
 */
class Contato implements Entity
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
     * @ORM\Column(name="email", type="string")
     */
    private $email;

     /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="nome", type="string")
     */
    private $nome;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="mensagem", type="text")
     */
    private $mensagem;

    /**
     * @JMS\Groups({"list"})
     *
     * @ORM\Column(name="created_at", type="datetime")
     */
    private $createdAt;

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
    public function getNome()
    {
        return $this->nome;
    }

    /**
     * @param mixed $nome
     */
    public function setNome($nome)
    {
        $this->nome = $nome;
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
     public function getMensagem()
     {
        return $this->mensagem;
    }

    /**
     * @param mixed $mensagem
     */
    public function setmensagem($mensagem)
    {
        $this->mensagem = $mensagem;
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
}