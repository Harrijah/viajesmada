<?php 
    Namespace App\Models;
    use CodeIgniter\Model;

    class Circuitmodel extends Model
    {
        protected $table = ['circuit'];
        protected $allowedFields = ['nomcircuit', 'region', 'nombrejours', 'prix', 'difficulty', 'categorie01', 'thematique', 'inclus', 'options01', 'options02', 'options03', 'descripcourt', 'tags', 'activity01', 'activity02', 'activity03', 'activity04', 'activity05', 'map', 'diapo01', 'diapo02', 'diapo03', 'diapo04', 'diapo05', 'jour1', 'jour2', 'jour3', 'jour4', 'jour5', 'jour6', 'jour7', 'jour8', 'jour9', 'jour10', 'jour11', 'jour12', 'jour13', 'jour14', 'jour15', 'jour16', 'jour17', 'jour18', 'jour19', 'jour20'];

        public function addcircuit()
        {
            // $fileurl = base_url() . 'public/uploads/' . $_FILES['map']['name'];
            $map = $_FILES['map']['name'];
            $diapo01 = $_FILES['diapo01']['name'];
            $diapo02 = $_FILES['diapo02']['name'];
            $diapo03 = $_FILES['diapo03']['name'];
            $diapo04 = $_FILES['diapo04']['name'];
            $diapo05 = $_FILES['diapo05']['name'];
            
            $data = [
                'nomcircuit' => ($_POST['nomcircuit']),
                'region' => ($_POST['region']),
                'nombrejours' => ($_POST['nombrejours']),
                'prix' => ($_POST['prix']),
                'difficulty' => ($_POST['difficulty']),
                'categorie01' => ($_POST['categorie01']),
                'thematique' => ($_POST['thematique']),
                'inclus' => ($_POST['inclus']),
                'options01' => ($_POST['options01']),
                'options02' => ($_POST['options02']),
                'options03' => ($_POST['options03']),
                'descripcourt' => ($_POST['descripcourt']),
                'tags' => ($_POST['tags']),
                'activity01' => ($_POST['activity01']),
                'activity02' => ($_POST['activity02']),
                'activity03' => ($_POST['activity03']),
                'activity04' => ($_POST['activity04']),
                // 'activity05' => ($_POST['activity05']),
                'map' => ($map),
                'diapo01' => ($diapo01),
                'diapo02' => ($diapo02),
                'diapo03' => ($diapo03),
                'diapo04' => ($diapo04),
                'diapo05' => ($diapo05),
                'jour1'  => isset($_POST['jour1']) ? $_POST['jour1'] : null,
                'jour2'  => isset($_POST['jour2']) ? $_POST['jour2'] : null,
                'jour3'  => isset($_POST['jour3']) ? $_POST['jour3'] : null,
                'jour4'  => isset($_POST['jour4']) ? $_POST['jour4'] : null,
                'jour5'  => isset($_POST['jour5']) ? $_POST['jour5'] : null,
                'jour6'  => isset($_POST['jour6']) ? $_POST['jour6'] : null,
                'jour7'  => isset($_POST['jour7']) ? $_POST['jour7'] : null,
                'jour8'  => isset($_POST['jour8']) ? $_POST['jour8'] : null,
                'jour9'  => isset($_POST['jour9']) ? $_POST['jour9'] : null,
                'jour10' => isset($_POST['jour10']) ? $_POST['jour10'] : null,
                'jour11' => isset($_POST['jour11']) ? $_POST['jour11'] : null,
                'jour12' => isset($_POST['jour12']) ? $_POST['jour12'] : null,
                'jour13' => isset($_POST['jour13']) ? $_POST['jour13'] : null,
                'jour14' => isset($_POST['jour14']) ? $_POST['jour14'] : null,
                'jour15' => isset($_POST['jour15']) ? $_POST['jour15'] : null,
                'jour16' => isset($_POST['jour16']) ? $_POST['jour16'] : null,
                'jour17' => isset($_POST['jour17']) ? $_POST['jour17'] : null,
                'jour18' => isset($_POST['jour18']) ? $_POST['jour18'] : null,
                'jour19' => isset($_POST['jour19']) ? $_POST['jour19'] : null,
                'jour20' => isset($_POST['jour20']) ? $_POST['jour20'] : null,
            ];

            return $this->insert($data);
            
        }

        public function getcircuit()
        {
            return $this->findAll();
        }

        public function getcircuitbyid($id)
        {
            return $this->where('id', $id)->first();
        }
        public function getcircuitbynale($tourname)
        {
            return $this->where('nomcircuit', $tourname)->first();
        }

    }