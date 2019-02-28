<?php
namespace CodeExperts\Functional\Controller;

use CodeExperts\FunctionalTestCase;

class SubscriptionControllerTest extends FunctionalTestCase
{
	public function testInserANewSubscription()
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

		$users = $client->request('GET', '/users');

		$data = array(
			'title' => '8.PHP - Fórum Nacional de Profissionais PHP do MA',
			'content' => 'Fórum Nacional de Profissionais PHP - MA',
			'description' => 'Fórum Nacional de Profissionais PHP - MA',
			'venue' => 'LOCAL',
			'address' => 'ENDERECO',
			'start_date' => '2016-11-09',
			'end_date' => '2016-11-10',
			'start_time' => '09:00',
			'end_time' => '22:00'
		);

		$response = $client->request('POST', '/events', [
			'form_params' => $data,
			'headers' => [
				'Authorization' => 'Bearer ' . $token
			]
		]);

		$event = $client->request('GET', '/events');

		$eventId = json_decode($event->getBody())[0]->id;

		$response = $client->request('POST', '/events/' . $eventId . '/subscription', [
			'headers' => [
				'Authorization' => 'Bearer ' . $token
			]
		]);

		$this->assertEquals(200, $response->getStatusCode());
		$this->assertEquals('Subscription with success!', json_decode($response->getBody())->msg);

	}
}