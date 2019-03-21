<?php
namespace CMS\Security;

use Lcobucci\JWT\Parser;

class ExtractUser
{
	/**
	 * @var Parser
	 */
	private $parser;

	public function __construct(Parser $parser)
	{
		$this->parser = $parser;
	}

	public function extract(string $token)
	{
		$token = str_replace('Bearer ', '',  $token);

		$parser = $this->parser->parse((string) $token);

		return $parser->getClaims();
	}
}