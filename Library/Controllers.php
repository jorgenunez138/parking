<?php

class Controllers extends Anonymous
{
    public function __construct() {
        Session::start();
        $this->view = new Views();
        $this->loadClassModels();
    }

    public function loadClassModels()
    {
        $model = get_class($this).'_model';
        $path = 'Models/'.$model.'.php';
        if(file_exists($path)){
            require $path;
            $this->model = new $model();
        }
    }
}