<?php

class Users extends Controllers
{
    function __construct()
    {
        parent::__construct();
        $this->getRoles();
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
            return json_encode($data);
        }else{
            return $data;
        }
    }
}