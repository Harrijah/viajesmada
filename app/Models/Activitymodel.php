<?php
    Namespace App\Models;
    Use CodeIgniter\Model;

    class Activitymodel extends Model
    {
        protected $table = "activity"; 
        protected $allowedFields = ["title", "description", "image"];


        public function addactivity()
        {
            $image = $_FILES['image']['name'];
            // $image = isset($_FILES['image']['name']) ? $_FILES['image']['name'] : null;
            $data = [
                "title" => ($_POST["title"]),
                "description" =>  ($_POST["description"]),
                "image" => ($image),
            ];
            return $this->insert($data);
        }

        public function getactivity()
        {
            return $this->findAll();
        }
    }