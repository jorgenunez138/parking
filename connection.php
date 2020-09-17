<?php

class connection {
	private $server = '127.0.0.1';
	private $user = 'root';
	private $password = '';
	private $database = 'parqueadero';


	public function connection(){
		$conn = new mysqli($this->server, $this->user, $this->password, $this->database);

		if ($conn->connect_error) {
		  	die("Connection failed: " . $conn->connect_error);
		}else{
			return $conn;
		} 

	}
}