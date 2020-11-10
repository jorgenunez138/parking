<?php

class Anonymous
{
    public function userClass($array){
        return new Class($array)
        {
            public $name;
            public $lastname;
            public $nid;
            public $phone;
            public $email;
            public $password;
            public $rol;
            public $img;

            function __construct($array)
            {
                $this->name = $array[0];
                $this->lastname = $array[1];
                $this->nid = $array[2];
                $this->phone = $array[3];
                $this->email = $array[4];
                $this->password = $array[5];
                $this->rol = $array[6];
                $this->img = "Imagen";
            }
        };    
    }
}