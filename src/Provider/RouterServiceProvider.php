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
	    $app->post('/events', 'event:save');
	    $app->post('/pegaEmail', 'event:pegaEmail');
	    $app->post('/eventosedit', 'event:update');
	    $app->post('/events/{id}', 'event:delete');

	    /**
	     * Noticias Routes
	     */
	    $app->get('/noticias', 'noticia:index');
	    $app->get('/noticias/{id}', 'noticia:get');
	    $app->post('/noticias', 'noticia:save');
	    $app->post('/pegaEmailNoticia', 'noticia:pegaEmailNoticia');
	    $app->post('/noticiasedit', 'noticia:update');
	    $app->post('/noticias/{id}', 'noticia:delete');

	    /**
	     * Contato Routes
	     */
	    $app->post('/contato', 'contato:save');



	    /**
	     * Subscription
	     */
	    $app->post('/events/{event_id}/subscription', 'subscription:index')->before($verifyToken);

	    $app["cors-enabled"]($app);
    }
}