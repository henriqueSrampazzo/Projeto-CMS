<?php
namespace CMS\Controller;

use Silex\Application;

class BaseController
{
	/**
	 * @var Application
	 */
	protected $app;

	public function __construct(Application $app)
	{
		$this->app = $app;
	}
}