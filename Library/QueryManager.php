<?php

class QueryManager
{
    private $pdo;
    function __construct($HOST, $USER, $PASS, $DB)
    {
        try{
            $this->pdo = new PDO('mysql:host='.$HOST.';dbname='.$DB.';charset=utf8',$USER,$PASS,
                [
                    PDO::ATTR_EMULATE_PREPARES => false,
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
                ]
            );
        }catch(PDOException $e){
            print "¡Error!: ". $e->getMessage();
            die();
        }
    }

    function select ($attr, $table, $where, $param)
    {
        try{
            if($where == ""){
                $query = "SELECT ".$attr." FROM ". $table;
            }else{
                $query = "SELECT ".$attr." FROM ". $table." WHERE " .$where;
            }
            $sth = $this->pdo->prepare($query);
            $sth->execute($param);
            $response = $sth->fetchAll(PDO::FETCH_ASSOC);
            return array("results" => $response);
        }catch(PDOException $e){
            return $e->getMessage();
        }
        $pdo = null;
    }
}