<?php
namespace CMS\Controller;
use CMS\Entity\Event;
use CMS\Service\EMService;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use CMS\Service\PasswordService;

class EventController extends BaseController
{
	public function index()
	{
		$events = $this->app['orm.em']
		->getRepository('CMS\Entity\Event')
		->findAll();

		$build = SerializerBuilder::create()->build();

		$response  = new Response($build->serialize(
			$events,
			'json',
			SerializationContext::create()->setGroups(array('list'))), 200);

		$response->headers->set('Content-Type', 'application/json');

		return $response;
	}

	public function pegaEmail(Request $request)
	{
		$email = $request->request->all();
		$emailfinal = (array) $email;

		for ($i=0; $i < 200; $i++) { 
			$email = "$email"."$emailfinal[$i]";
		};

		$email = substr($email, 5);		

		$events = $this->app['orm.em']
		->getRepository('CMS\Entity\Event')
		->findBy(array('id_user' => $email));

		$build = SerializerBuilder::create()->build();

		$response  = new Response($build->serialize(
			$events,
			'json',
			SerializationContext::create()->setGroups(array('list'))), 200);

		$response->headers->set('Content-Type', 'application/json');

		return $response;
		return $this->app->json(['msg' => $email],200);
	}

	public function get($id)
	{
		$id = (int) $id;

		$event = $this->app['orm.em']
		->getRepository('CMS\Entity\Event')
		->find($id);

		$build = SerializerBuilder::create()->build();

		$response = new Response($build->serialize(
			$event,
			'json',
			SerializationContext::create()->setGroups(array('list'))), 200);

		$response->headers->set('Content-Type', 'application/json');

		return $response;
	}

	public function save(Request $request)
	{
		$data = $request->request->all();

		$password = new PasswordService();
		$password = $password->setPassword($data['eventpassword'])
		->generate();

		$event = new Event();

		$event->setTitle($data['title']);
		$event->setDataEvent($data['dataevent']);
		$event->setPhoto1($data['photo1']);
		$event->setPhoto2($data['photo2']);
		$event->setPhoto3($data['photo3']);
		$event->setPhoto4($data['photo4']);
		$event->setPhoto5($data['photo5']);
		$event->setIdUser($data['id_user']);
		$event->setNomeUser($data['nome_user']);
		$event->setEventPassword($data['eventpassword']);

		$em = new EMService($this->app['orm.em']);

		if(!$em->create($event)) {
			return $this->app->json(['msg' => 'Error to create a new event'], 401);
		}

		return $this->app->json(['msg' => 'Event created with success'], 200);
	}

	public function update(Request $request)
	{
		$data = $request->request->all();

		$event = $this->app['orm.em']
		->getRepository('CMS\Entity\Event')
		->find($data['id']);

		foreach ($data as $key=>$value) {
			$set = "set" . ucfirst($key);
			$event->$set($value);
		}

		$em = new EMService($this->app['orm.em']);

		if(!$em->update($event)) {
			return $this->app->json(['msg' => 'Error to update event'], 401);
		}

		return $this->app->json(['msg' => 'Event updated with success'], 200);
	}

	public function delete($id)
	{
		$id = (int) $id;

		$user = $this->app['orm.em']
		->getRepository('CMS\Entity\Event')
		->find($id);

		$em = new EMService($this->app['orm.em']);

		if(!$em->delete($user)) {
			return $this->app->json(['msg' => 'Error to delete event'], 401);
		}

		return $this->app->json(['msg' => 'Event deleted with success'], 200);
	}
}