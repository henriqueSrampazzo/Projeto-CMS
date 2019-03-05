<?php
namespace CodeExperts\Controller;

use CodeExperts\Entity\Event;
use CodeExperts\Service\EMService;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class EventController extends BaseController
{
	public function index()
	{
		$events = $this->app['orm.em']
			->getRepository('CodeExperts\Entity\Event')
			->findAll();

		$build = SerializerBuilder::create()->build();

		$response  = new Response($build->serialize(
			$events,
			'json',
			SerializationContext::create()->setGroups(array('list'))), 200);

		$response->headers->set('Content-Type', 'application/json');

		return $response;
	}

	public function get($id)
	{
		$id = (int) $id;

		$event = $this->app['orm.em']
			->getRepository('CodeExperts\Entity\Event')
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

		$event = new Event();

		$event->setTitle($data['title']);
		$event->setDataEvent($data['dataevent']);
	    $event->setPhoto($data['photo']);

		$em = new EMService($this->app['orm.em']);

		if(!$em->create($event)) {
			return $this->app->json(['msg' => 'Error to created a new event'], 401);
		}

		return $this->app->json(['msg' => 'Event created with success'], 200);
	}

	public function update(Request $request)
	{
		$data = $request->request->all();

		$event = $this->app['orm.em']
			->getRepository('CodeExperts\Entity\Event')
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
			->getRepository('CodeExperts\Entity\Event')
			->find($id);

		$em = new EMService($this->app['orm.em']);

		if(!$em->delete($user)) {
			return $this->app->json(['msg' => 'Error to delete event'], 401);
		}

		return $this->app->json(['msg' => 'Event deleted with success'], 200);
	}
}