<?php

namespace App\Models;

use CodeIgniter\Model;

class Itinerarymodel extends Model
{
    protected $table = "itineraire"; 
    protected $allowedFields = ["daytitle", "daydesc", "km", "carrent", "boat", "plane", "nbnuitee", "hotel", "city", "activity01", "activity02", "activity03", "activity04"];

    public function addItinerary()
    {
        // Perform input validation if needed

        $data = [
            "daytitle" => ($_POST["daytitle"]),
                "daydesc" =>  ($_POST["daydesc"]),
                "km" =>  ($_POST["km"]),
                "carrent" => isset($_POST["carrent"]) ? $_POST["carrent"] : 'off',
                "boat" =>  isset($_POST["boat"]) ? $_POST["boat"] : 'off',
                "plane" => isset($_POST["plane"]) ? $_POST["plane"] : 'off',
                "nbnuitee" => ($_POST["nbnuitee"]),
                "hotel" => $_POST["hotel"],
                "city" =>  ($_POST["city"]),
                "activity01" => ($_POST["activity01"]),
                "activity02" => ($_POST["activity02"]),
                "activity03" => ($_POST["activity03"]),
                "activity04" => ($_POST["activity04"]),
        ];

        // Insert data into the table
        $result = $this->insert($data);

        // Check if the insertion was successful
        if (!$result) {
            // Handle the error, log, or throw an exception
            log_message('error', 'Error inserting data into the database.');
        }

        return $result;
    }

    public function getItinerary()
    {
        return $this->findAll();
    }
}
