<?php
namespace CodeExperts\Provider;

use CodeExperts\Controller\AuthController;
use CodeExperts\Controller\EventController;
use CodeExperts\Controller\SubscriptionController;
use Pimple\Container;
use Pimple\ServiceProviderInterface;
use CodeExperts\Controller\UserController;

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

	    $app['subscription'] = function(Container $app) {
		    return new SubscriptionController($app);
	    };
    }
}