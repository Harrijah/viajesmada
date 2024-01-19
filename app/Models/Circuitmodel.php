<?php 
    Namespace App\Models;
    use CodeIgniter\Model;

    class Circuitmodel extends Model
    {
        protected $table = ['circuit'];
        protected $allowedFields = ['nomcircuit', 'region', 'nombrejours', 'prix', 'difficulty', 'categorie01', 'thematique', 'inclus', 'options01', 'options02', 'options03', 'descripcourt', 'tags', 'activity01', 'activity02', 'activity03', 'activity04', 'activity05', 'map', 'diapo01', 'diapo02', 'diapo03', 'diapo04', 'diapo05', 'jour1title', 'jour1desc', 'jour2title', 'jour2desc', 'jour3title', 'jour3desc', 'jour4title', 'jour4desc', 'jour5title', 'jour5desc', 'jour6title', 'jour6desc', 'jour7title', 'jour7desc', 'jour8title', 'jour8desc', 'jour9title', 'jour9desc', 'jour10title', 'jour10desc', 'jour11title', 'jour11desc', 'jour12title', 'jour12desc', 'jour13title', 'jour13desc', 'jour14title', 'jour14desc', 'jour15title', 'jour15desc', 'jour16title', 'jour16desc', 'jour17title', 'jour17desc', 'jour18title', 'jour18desc', 'jour19title', 'jour19desc', 'jour20title', 'jour20desc'];

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
                'jour1title' => ($_POST['jour01title']),
                'jour1desc' => ($_POST['jour01desc']),
                'jour2title' => ($_POST['jour02title']),
                'jour2desc' => ($_POST['jour02desc']),
                'jour3title' => ($_POST['jour03title']),
                'jour3desc' => ($_POST['jour03desc']),
                'jour4title' => ($_POST['jour04title']),
                'jour4desc' => ($_POST['jour04desc']),
                'jour5title' => ($_POST['jour05title']),
                'jour5desc' => ($_POST['jour05desc']),
                'jour6title' => ($_POST['jour06title']),
                'jour6desc' => ($_POST['jour06desc']),
                'jour7title' => ($_POST['jour07title']),
                'jour7desc' => ($_POST['jour07desc']),
                'jour8title' => ($_POST['jour08title']),
                'jour8desc' => ($_POST['jour08desc']),
                'jour9title' => ($_POST['jour09title']),
                'jour9desc' => ($_POST['jour09desc']),
                'jour10title' => ($_POST['jour10title']),
                'jour10desc' => ($_POST['jour10desc']),
                'jour11title' => ($_POST['jour11title']),
                'jour11desc' => ($_POST['jour11desc']),
                'jour12title' => ($_POST['jour12title']),
                'jour12desc' => ($_POST['jour12desc']),
                'jour13title' => ($_POST['jour13title']),
                'jour13desc' => ($_POST['jour13desc']),
                'jour14title' => ($_POST['jour14title']),
                'jour14desc' => ($_POST['jour14desc']),
                'jour15title' => ($_POST['jour15title']),
                'jour15desc' => ($_POST['jour15desc']),
                'jour16title' => ($_POST['jour16title']),
                'jour16desc' => ($_POST['jour16desc']),
                'jour17title' => ($_POST['jour17title']),
                'jour17desc' => ($_POST['jour17desc']),
                'jour18title' => ($_POST['jour18title']),
                'jour18desc' => ($_POST['jour18desc']),
                'jour19title' => ($_POST['jour19title']),
                'jour19desc' => ($_POST['jour19desc']),
                'jour20title' => ($_POST['jour20title']),
                'jour20desc' => ($_POST['jour20desc']),
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