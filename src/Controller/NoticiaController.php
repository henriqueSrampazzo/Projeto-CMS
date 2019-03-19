<?php
namespace CodeExperts\Controller;

use CodeExperts\Entity\Noticia;
use CodeExperts\Service\EMService;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class NoticiaController extends BaseController
{
	public function index()
	{
		$noticias = $this->app['orm.em']
			->getRepository('CodeExperts\Entity\Noticia')
			->findAll();

		$build = SerializerBuilder::create()->build();

		$response  = new Response($build->serialize(
			$noticias,
			'json',
			SerializationContext::create()->setGroups(array('list'))), 200);

		$response->headers->set('Content-Type', 'application/json');

		return $response;
	}

	public function pegaEmailNoticia(Request $request)
	{
		$email = $request->request->all();
		$emailfinal = (array) $email;

		for ($i=0; $i < 100; $i++) { 
			$email = "$email"."$emailfinal[$i]";
		};

		$email = substr($email, 5);		

		$noticias = $this->app['orm.em']
		->getRepository('CodeExperts\Entity\Noticia')
		->findBy(array('id_user' => $email));

		$build = SerializerBuilder::create()->build();

		$response  = new Response($build->serialize(
			$noticias,
			'json',
			SerializationContext::create()->setGroups(array('list'))), 200);

		$response->headers->set('Content-Type', 'application/json');

		return $response;
		return $this->app->json(['msg' => $email],200);
	}

	public function get($id)
	{
		$id = (int) $id;

		$noticia = $this->app['orm.em']
			->getRepository('CodeExperts\Entity\Noticia')
			->find($id);

		$build = SerializerBuilder::create()->build();

		$response = new Response($build->serialize(
			$noticia,
			'json',
			SerializationContext::create()->setGroups(array('list'))), 200);

		$response->headers->set('Content-Type', 'application/json');

		return $response;
	}

	public function save(Request $request)
	{
		
		$data = $request->request->all();

		$noticia = new Noticia();

		$noticia->setTitle($data['title']);
		$noticia->setDescription($data['description']);
		$noticia->setPhoto1($data['photo1']);
		$noticia->setPhoto2($data['photo2']);
		$noticia->setPhoto3($data['photo3']);
		$noticia->setPhoto4($data['photo4']);
		$noticia->setPhoto5($data['photo5']);
		$noticia->setIdUser($data['id_user']);
		$noticia->setNomeUser($data['nome_user']);
		$noticia->setPostData(new \DateTime("now", new \DateTimeZone("America/Sao_Paulo")));
		$noticia->setNoticiaPassword($data['noticiapassword']);

		$em = new EMService($this->app['orm.em']);

		if(!$em->create($noticia)) {
			return $this->app->json(['msg' => 'Error to created a new noticia'], 401);
		}

		return $this->app->json(['msg' => 'Noticia created with success'], 200);
	}

	public function update(Request $request)
	{
		$data = $request->request->all();

		$noticia = $this->app['orm.em']
			->getRepository('CodeExperts\Entity\Noticia')
			->find($data['id']);

		foreach ($data as $key=>$value) {
			$set = "set" . ucfirst($key);
			$noticia->$set($value);
		}

		$em = new EMService($this->app['orm.em']);

		if(!$em->update($noticia)) {
			return $this->app->json(['msg' => 'Error to update noticia'], 401);
		}

		return $this->app->json(['msg' => 'Noticia updated with success'], 200);
	}

	public function delete($id)
	{
		$id = (int) $id;

		$noticia = $this->app['orm.em']
			->getRepository('CodeExperts\Entity\Noticia')
			->find($id);

		$em = new EMService($this->app['orm.em']);

		if(!$em->delete($noticia)) {
			return $this->app->json(['msg' => 'Error to delete noticia'], 401);
		}

		return $this->app->json(['msg' => 'Noticia deleted with success'], 200);
	}
}