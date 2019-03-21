<?php
namespace CMS\Provider;

use CMS\Controller\AuthController;
use CMS\Controller\EventController;
use CMS\Controller\SubscriptionController;
use CMS\Controller\NoticiaController;
use CMS\Controller\ContatoController;
use Pimple\Container;
use Pimple\ServiceProviderInterface;
use CMS\Controller\UserController;

class ControllerServiceProvider implements ServiceProviderInterface
{
	public function register(Container $app)
	{
		$app['auth'] = function(Container $app) {
			return new AuthController($app);
		};
		$app['user'] = function(Container $app) {
			return new UserController($app);
		};
		$app['event'] = function(Container $app) {
			return new EventController($app);
		};
		$app['noticia'] = function(Container $app) {
			return new NoticiaController($app);
		};
		$app['contato'] = function(Container $app) {
			return new ContatoController($app);
		};
		$app['subscription'] = function(Container $app) {
			return new SubscriptionController($app);
		};
	}
}