<?php
namespace CodeExperts\Controller;

use CodeExperts\Entity\User;
use CodeExperts\Security\ExtractUser;
use CodeExperts\Service\EMService;
use CodeExperts\Service\PasswordService;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Lcobucci\JWT\Parser;
use Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class SubscriptionController extends BaseController
{
	public function index($event_id, Request $request)
	{
		$userData = (new ExtractUser(new Parser()))
						->extract($request->headers->get('Authorization'));

		$doctrine = $this->app['orm.em'];

		$userEmail = $userData['username']->getValue();

		$user = $doctrine
			->getRepository('CodeExperts\Entity\User')
			->findOneByEmail($userEmail);

		$event = $doctrine
			->getRepository('CodeExperts\Entity\Event')
			->find($event_id);

		$event->setUserCollection($user);
		$user->setEventCollection($event);

		$doctrine->persist($event);
		$doctrine->persist($user);

		$doctrine->flush();

		return $this->app->json(['msg' => 'Subscription with success!']);
	}
}