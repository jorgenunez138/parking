<?php

class Users extends Controllers
{
    function __construct()
    {
        parent::__construct();
    }

    public function destroySession()
    {
        Session::destroy();
        header("Location:".URL);
    }

    public function users()
    {
        if(null != Session::getSession("User")){
            $this->view->render($this, "users");
        }else{
            header("Location:".URL);
        }
    }

    public function getRoles()
    {
        $data = $this->model->getRoles();
        if(is_array($data)){
            echo json_encode($data);
        }else{
            return $data;
        }
    }

    public function registerUser(){
        $array = array(
            $_POST['name'],
            $_POST['lastname'],
            $_POST['nid'],
            $_POST['phone'],
            $_POST['email'],
            $_POST['password'],
            $_POST['rol'],
            "imagen"
        );
        $data = $this->model->registerUser($this->userClass($array));
        if($data == 1){
            echo "El email ya esta registrado!";
        }else{
            $this->model->sendEmail($_POST['email']);
            echo $data;
        }
    }
}