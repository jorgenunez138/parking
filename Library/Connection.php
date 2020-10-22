<?php

class Connection 
{

	private $server = '127.0.0.1';
	private $user = 'root';
	private $password = '';
	private $database = 'parking';

	function __construct()
	{
		$this->db = new QueryManager($this->server,$this->user,$this->password,$this->database);
	}


}