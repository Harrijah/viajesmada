<?php
    Namespace App\Models;
    Use CodeIgniter\Model;

    class Picmodel extends Model
    {
        protected $table = "pics"; 
        protected $allowedFields = ["title", "region", "image"];


        public function addpic()
        {
             $image = isset($_FILES['image']['name']) ? $_FILES['image']['name'] : null;
            $data = [
                "title" => ($_POST["title"]),
                "region" =>  ($_POST["region"]),
                "image" => ($image),
            ];
            return $this->insert($data);
        }

        public function getpic()
        {
            return $this->findAll();
        }
    }