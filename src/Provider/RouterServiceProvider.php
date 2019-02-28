<?php
namespace CodeExperts\Provider;

use Pimple\Container;
use Pimple\ServiceProviderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class RouterServiceProvider implements ServiceProviderInterface
{
    public function register(Container $app)
    {
	    $verifyToken = function(Request $request, Container $app){
		    $token =  $request->headers->get('Authorization');
		    $token = str_replace('Bearer ', '', $token);

		    try {
			    $app['jwt']->validateToken($token);
		    } catch (\Exception $e) {
			    return $app->json(['msg'=> 'Invalid Token!'], 401);
		    }
	    };

	    /**
	     * Auth
	     */
	    $app->post('/auth/login', 'auth:login');


	    /**
	     * User Routes
	     */
	    $app->get('/users', 'user:index');
	    $app->get('/users/events', 'user:userEvents')->before($verifyToken);
	    $app->get('/users/{id}', 'user:get');
	    $app->post('/users', 'user:save');
	    $app->put('/users', 'user:update');
	    $app->delete('/users/{id}', 'user:delete');

	    /**
	     * Events Routes
	     */
	    $app->get('/events', 'event:index');
	    $app->get('/events/{id}', 'event:get');
	    $app->post('/events', 'event:save')->before($verifyToken);
	    $app->put('/events', 'event:update');
	    $app->delete('/events/{id}', 'event:delete');

	    /**
	     * Noticias Routes
	     */
	    $app->get('/noticias', 'noticia:index');
	    $app->get('/noticias/{id}', 'noticia:get');
	    $app->post('/noticias', 'noticia:save');//->before($verifyToken);
	    $app->put('/noticias', 'noticia:update');
	    $app->delete('/noticias/{id}', 'noticia:delete');

	    /**
	     * Subscription
	     */
	    $app->post('/events/{event_id}/subscription', 'subscription:index')->before($verifyToken);

	    $app["cors-enabled"]($app);
    }
}