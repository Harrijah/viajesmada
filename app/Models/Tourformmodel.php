<?php
    namespace App\Models;
    use CodeIgniter\Model;

    class Tourformmodel extends Model
    {
        protected $table = 'mails';
        protected $allowedFields = ['tourid', 'abouttour', 'nombre', 'correo', 'whatsapp', 'numeropersonas', 'salida', 'mensaje'];

        public function getinfos()
        {
            $data = [
                'tourid' => ($_POST['tourid']),
                'abouttour' => ($_POST['abouttour']),
                'nombre' => ($_POST['nombre']),
                'correo' => ($_POST['correo']),
                'whatsapp' => ($_POST['whatsapp']),
                'numeropersonas' => ($_POST['numeropersonas']),
                'salida' => ($_POST['salida']),
                'mensaje' => ($_POST['mensaje']),
            ];
            
            return $this->insert($data);
        }
    }