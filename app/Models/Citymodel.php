<?php
    Namespace App\Models;
    Use CodeIgniter\Model;

    class Citymodel extends Model
    {
        protected $table = "city"; 
        protected $allowedFields = ["title", "region", "description", "image"];


        public function addcity()
        {
             $image = isset($_FILES['image']['name']) ? $_FILES['image']['name'] : null;
            $data = [
                "title" => ($_POST["title"]),
                "region" => ($_POST["region"]),
                "description" =>  ($_POST["description"]),
                "image" => ($image),
            ];
            return $this->insert($data);
        }

        public function getcity()
        {
            return $this->findAll();
        }
    }