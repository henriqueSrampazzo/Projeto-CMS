<?php
namespace CodeExperts\Functional\Controller;

use CodeExperts\FunctionalTestCase;

class UserControllerTest extends FunctionalTestCase
{
	public function testAInsertNewUser()
	{
		$response = $this->makeLogin();

		$token = json_decode($response->getBody())->token;

		$client = $this->createClient();

		$data = array(
			'name' => 'User Test',
			'email' => 'emailTest@email.com',
			'username' => 'userTest',
			'password' => '123456'
		);

		$response = $client->request('POST', '/users', [
			'form_params' => $data,
			'headers' => [
				'Authorization' => 'Bearer ' . $token
			]
		]);

		$this->assertEquals(200, $response->getStatusCode());
		$this->assertEquals('User created with success', json_decode($response->getBody())->msg);
	}

	public function testGetAllUsers()
	{
		$client = $this->createClient();

		$response = $client->request('GET', '/users');

		$this->assertEquals(200, $response->getStatusCode());

		$this->assertObjectHasAttribute('name', json_decode($response->getBody())[0]);
		$this->assertObjectHasAttribute('email', json_decode($response->getBody())[0]);
		$this->assertObjectHasAttribute('username', json_decode($response->getBody())[0]);
	}

	public function testGetASpecificUser()
	{
		$client = $this->createClient();

		$users = $client->request('GET', '/users');

		$id    = json_decode($users->getBody())[0]->id;

		$response = $client->request('GET', '/users/' . $id);

		$this->assertEquals(200, $response->getStatusCode());

		$this->assertObjectHasAttribute('name', json_decode($response->getBody()));
		$this->assertObjectHasAttribute('email', json_decode($response->getBody()));
		$this->assertObjectHasAttribute('username', json_decode($response->getBody()));
	}

	public function testUpdateAUser()
	{
		$client = $this->createClient();

		$users = $client->request('GET', '/users');

		$id    = json_decode($users->getBody())[0]->id;

		$dataUpdate = array(
			'name' => 'User Test Edited',
			'email' => 'emailTest@email.com',
			'username' => 'userTest',
			'password' => '123456',
			'id'       => $id
		);

		$response = $client->request('PUT', '/users', [
			'form_params' => $dataUpdate
		]);

		$this->assertEquals(200, $response->getStatusCode());
		$this->assertEquals('User updated with success', json_decode($response->getBody())->msg);
	}

	public function testDeleteAUser()
	{
		$client = $this->createClient();


		$users = $client->request('GET', '/users');

		$id    = json_decode($users->getBody())[0]->id;


		$response = $client->request('DELETE', '/users/' . $id);

		$this->assertEquals(200, $response->getStatusCode());
		$this->assertEquals('User deleted with success', json_decode($response->getBody())->msg);
	}

	public function testGetUserEvents()
	{
		$response = $this->makeLogin();

		$client = $this->createClient();

		$token = json_decode($response->getBody())->token;

		$event = $client->request('GET', '/events');

		$eventId = json_decode($event->getBody())[0]->id;

		$response = $client->request('POST', '/events/' . $eventId . '/subscription', [
			'headers' => [
				'Authorization' => 'Bearer ' . $token
			]
		]);

		$response = $client->request('GET', '/users/events', [
			'headers' => [
				'Authorization' => 'Bearer ' . $token
			]
		]);

		$this->assertEquals(200, $response->getStatusCode());

		$this->assertObjectHasAttribute('title', json_decode($response->getBody())[0]);
		$this->assertObjectHasAttribute('content', json_decode($response->getBody())[0]);
		$this->assertObjectHasAttribute('description', json_decode($response->getBody())[0]);
		$this->assertObjectHasAttribute('venue', json_decode($response->getBody())[0]);
		$this->assertObjectHasAttribute('address', json_decode($response->getBody())[0]);
		$this->assertObjectHasAttribute('start_date', json_decode($response->getBody())[0]);
		$this->assertObjectHasAttribute('end_date', json_decode($response->getBody())[0]);
		$this->assertObjectHasAttribute('start_time', json_decode($response->getBody())[0]);
		$this->assertObjectHasAttribute('end_time', json_decode($response->getBody())[0]);
		$this->assertObjectHasAttribute('is_active', json_decode($response->getBody())[0]);
		$this->assertObjectHasAttribute('created_at', json_decode($response->getBody())[0]);
	}
}