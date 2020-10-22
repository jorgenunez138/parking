<?php

class Users_model extends Connection
{
    function __construct()
    {
        parent::__construct();
    }

    function getRoles(){
        return $response = $this->db->select("*","roles",null,null);
    }
}