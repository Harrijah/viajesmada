<?php
    namespace App\Controllers;
    use App\Models\Tourformmodel;


    helper(['url', 'form']);

    class Tourform extends BaseController
    {
        public function getinfos()
        {
            $model = model(Tourformmodel::class);
            $email = \Config\Services::Email();

            if($this->request->getMethod() == 'post'){
                $validationRules = [
                    'nombre' => 'required',
                ];
            }
            if(! $this->validate($validationRules)){
                $tourid= $this->request->getPost('tourid');
                $abouttour = $this->request->getPost('abouttour');
                $nombre = $this->request->getPost('nombre');
                $correo = $this->request->getPost('correo');
                $whatsapp = $this->request->getPost('whatsapp');
                $numeropersonas = $this->request->getPost('numeropersonas');
                $salida = $this->request->getPost('salida');
                $mensaje = $this->request->getPost('mensaje');
                $data = [
                    'tourid' => $tourid,
                    'abouttour' => $abouttour,
                    'nombre' => $nombre,
                    'correo' => $correo,
                    'whatsapp' => $whatsapp,
                    'numeropersonas' => $numeropersonas,
                    'salida' => $salida,
                    'mensaje' => $mensaje,
                ];
            } else {
                $tourid = $this->request->getPost('tourid');
                $abouttour = $this->request->getPost('abouttour');
                $nombre = $this->request->getPost('nombre');
                $correo = $this->request->getPost('correo');
                $whatsapp = $this->request->getPost('whatsapp');
                $numeropersonas = $this->request->getPost('numeropersonas');
                $salida = $this->request->getPost('salida');
                $mensaje = $this->request->getPost('mensaje');
                $data = [
                    'tourid' => $tourid,
                    'abouttour' => $abouttour,
                    'nombre' => $nombre,
                    'correo' => $correo,
                    'whatsapp' => $whatsapp,
                    'numeropersonas' => $numeropersonas,
                    'salida' => $salida,
                    'mensaje' => $mensaje,
                ];
                $email->setFrom('sitio@viajes-madagascar.mg', 'Une nouvelle demande');
                $email->setTo('contacto@viajes-madagascar.mg');
                $email->setSubject('Nouveau message de '. $data['nombre']);
                $email->setMessage(
                    $data['abouttour'] . '
                    Message de '. $data['nombre'] .' 
                    Mail : ' . $data['correo'] . ' 
                    Téléphone : '. $data['whatsapp'] . '
                    Nombre de personnes : ' . $data['numeropersonas'] . ' 
                    Date d\'arrivée : '. $data['salida'] . '
                    Message : ' . $data['mensaje']
                );
                $email->send();
                $model->getinfos();
                // $data['nom'] = "";

                return redirect()->to('https://viajes-madagascar.mg');

            }
        }
    }