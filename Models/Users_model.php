<?php

class Users_model extends Connection
{
    function __construct()
    {
        parent::__construct();
    }

    function getRoles()
    {
        return $response = $this->db->select("*","roles",null,null);
    }

    function registerUser($user)
    {
        $where = "email = :email";
        $param = array('email' => $user->email);
        $response = $this->db->select("*","users",$where,$param);
        if(is_array($response)){
            $response = $response['results'];
            if(0 == count($response)){
                $value = "(name,lastname,nid,phone,email,password,rol,img) VALUES (:name,:lastname,:nid,:phone,:email,:password,:rol,:img)";
                $data = $this->db->insert("users", $user, $value);
                if($data == true){
                    return 0;
                }else{
                    return $data;
                }
            }else{
                return 1;
            }
        }else{
            return $response;
        }
    }

    function sendEmail($email)
    {   
        $subject = 'Registro Correo Exitoso';
        $message = 'Su cuenta para Parking a sido Exitosa.';
        $headers = 'From: <grupophp@example.com>' . "\r\n";
        mail($email,$subject,$message,$headers);

    }
}