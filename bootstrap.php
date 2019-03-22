<?php
require 'vendor/autoload.php';

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\Driver\AnnotationDriver;
use Doctrine\Common\Annotations\AnnotationReader;
use Doctrine\Common\Annotations\AnnotationRegistry;

$isDevMode = false;

$paths = array(__DIR__ . '/src/Entity');

$dbParams = array(
	'driver'   => 'pdo_pgsql',
	'user'     => 'postgres',
	'password' => 'root',
	'dbname'   => 'db_inovadora_noticias',
	'host'     => 'localhost'
);

// $dbParams = array(
// 	'driver'   => 'pdo_mysql',
// 	'user'     => 'root',
// 	'password' => '',
// 	'dbname'   => 'db_inovadora_noticias',
// 	'host'     => '127.0.0.1'
// );

$config = Setup::createConfiguration($isDevMode);

$driver = new AnnotationDriver(new AnnotationReader(), $paths);

$config->setMetadataDriverImpl($driver);

AnnotationRegistry::registerFile(
	__DIR__ . '/vendor/doctrine/orm/lib/Doctrine/ORM/Mapping/Driver/DoctrineAnnotations.php'
);

AnnotationRegistry::registerAutoloadNamespace(
	'JMS\Serializer\Annotation',
	__DIR__ . "/vendor/jms/serializer/src"
);

$entityManager = EntityManager::create($dbParams, $config);