<?php

class Index_model extends Connection
{
    function __construct()
    {
        parent::__construct();
    }

    function userLogin($email, $password)
    {
        $where = "email = :email";
        $param = array('email' => $email);
        $response = $this->db->select("*","users",$where,$param);
        if(is_array($response)){
            $response = $response['results'][0];
            if(password_verify($password, $response["password"])){
                $data = array(
                    "id" => $response["id"],
                    "name" => $response["name"],
                    "email" => $response["email"],
                );
                Session::setSession("User",$data);
                return $data;
            }else{
                $data = array(
                    "id" => 0
                );
                return $data;
            }
        }else{
            echo $response;
       }
    }
}