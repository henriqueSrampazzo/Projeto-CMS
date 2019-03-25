# Projeto-CMS
Repositório do projeto CMS

Tutorial de instalação / execução linux ubuntu

1- Instale o node.js
sudo apt-get install nodejs npm

2- Instale o angular cli
npm install -g angular cli

3- Instale as dependências
npm install

4- Caso necessite mais tarde, instale manualmente o md5
npm i js-md5

5- Crie sua aplicação com 
ng serve

6- Baixe o composer
https://getcomposer.org/download/

7- Instale o arquivo composer.json 
composer install

8- Instale e execute o Xampp ou outro servidor de sua preferência
https://www.edivaldobrito.com.br/como-instalar-o-xampp-no-linux/

9- Instale e configure o MySQL ou Postgre, você que escolhe:
PostgreSQL -> https://www.techrepublic.com/blog/diy-it-guy/diy-a-postgresql-database-server-setup-anyone-can-handle/
MySQL -> https://www.digitalocean.com/community/tutorials/como-instalar-o-mysql-no-ubuntu-18-04-pt

10- Gere o sql do banco
php bin/doctrine orm:schema-tool:create --dump-sql

11- Configure seu banco para PostgreSQL ou para MySQL entrando no diretório Projeto-CMS/bootstrap.php, e alterando o código:

//Para banco PostgreSQL
$dbParams = array(
	'driver'   => 'pdo_pgsql',  //editar esta linha
	'user'     => 'postgres',
	'password' => 'root',
	'dbname'   => 'db_inovadora_noticias',
	'host'     => 'localhost'
);

//Para banco MySQL
$dbParams = array(
	'driver'   => 'pdo_mysql',  //editar esta linha
	'user'     => 'postgres',
	'password' => 'root',
	'dbname'   => 'db_inovadora_noticias',
	'host'     => 'localhost'
);

12- Inicie a aplicação PHP 
php -S localhost:3030 -t public


Obs.: execute os comandos dentro da pasta do projeto (Projeto-CMS).
