<?php

namespace App\Controllers;

use App\Models\Circuitmodel;
$model = model(Circuitmodel::class);
helper(['form', 'url']);

class Circuit extends BaseController
{
    public function entreecircuit()
    {
        $model = model(Circuitmodel::class);
        // Récupération des données
        $map = $this->request->getFiles('map'); 
        $diapo01 = $this->request->getFiles('diapo01');
        $diapo02 = $this->request->getFiles('diapo02');
        $diapo03 = $this->request->getFiles('diapo03');
        $diapo04 = $this->request->getFiles('diapo04');
        $diapo05 = $this->request->getFiles('diapo05');

        // Règles de validation
        $validationRules = [
            'nomcircuit' => 'required',
            // 'descripcourt' => 'required',
            // 'nombrejours' => 'required',
            // 'inclus' => 'required',
        ];

        // Add file validation rules only if files are uploaded
        if ($this->request->getMethod() == 'post') {
            // Règles de validation
            if (!empty($map['map']->name)) {
                $validationRules['map'] = [
                    'uploaded[map]',
                    'mime_in[map,image/jpg,image/jpeg,image/gif,image/png]',
                ];
            }
            // Règles de validation
            if (!empty($diapo01['diapo01']->name)) {
                $validationRules['diapo01'] = [
                    'uploaded[diapo01]',
                    'mime_in[diapo01,image/jpg,image/jpeg,image/gif,image/png]',
                ];
            }

            if (!empty($diapo02['diapo02']->name)) {
                $validationRules['diapo02'] = [
                    'uploaded[diapo02]',
                    'mime_in[diapo02,image/jpg,image/jpeg,image/gif,image/png]',
                ];
            }

            if (!empty($diapo03['diapo03']->name)) {
                $validationRules['diapo03'] = [
                    'uploaded[diapo03]',
                    'mime_in[diapo03,image/jpg,image/jpeg,image/gif,image/png]',
                ];
            }

            if (!empty($diapo04['diapo04']->name)) {
                $validationRules['diapo04'] = [
                    'uploaded[diapo04]',
                    'mime_in[diapo04,image/jpg,image/jpeg,image/gif,image/png]',
                ];
            }

            if (!empty($diapo05['diapo05']->name)) {
                $validationRules['diapo05'] = [
                    'uploaded[diapo05]',
                    'mime_in[diapo05,image/jpg,image/jpeg,image/gif,image/png]',
                ];
            }
        }

        // Validation des données
        if ($this->validate($validationRules)) {
            // Enregistrement des images
            if ($map['map']->isValid() && !$map['map']->hasMoved()) {
                $map['map']->move(WRITEPATH . '../public/uploads');
            }
            
            if ($diapo01['diapo01']->isValid() && !$diapo01['diapo01']->hasMoved()) {
                $diapo01['diapo01']->move(WRITEPATH . '../public/uploads');
            }
            
            if ($diapo02['diapo02']->isValid() && !$diapo02['diapo02']->hasMoved()) {
                $diapo02['diapo02']->move(WRITEPATH . '../public/uploads');
            }
            
            if ($diapo03['diapo03']->isValid() && !$diapo03['diapo03']->hasMoved()) {
                $diapo03['diapo03']->move(WRITEPATH . '../public/uploads');
            }
            
            if ($diapo04['diapo04']->isValid() && !$diapo04['diapo04']->hasMoved()) {
                $diapo04['diapo04']->move(WRITEPATH . '../public/uploads');
            }
            
            if ($diapo05['diapo05']->isValid() && !$diapo05['diapo05']->hasMoved()) {
                $diapo05['diapo05']->move(WRITEPATH . '../public/uploads');
            }

            // Enregistrement des données
            $model->addcircuit();
            echo('Formulaire soumis avec succès');
        } else {
            echo("Une erreur s'est malheureusement produite");
        }
        return redirect()->to('http://localhost:3000/');
    }

    public function affichercircuit() 
    {
        $model = model(Circuitmodel::class);
        $data = $model->getcircuit();
        return $this->response->setHeader('Access-Control-Allow-Origin', '*')->setStatusCode(200)->setJSON($data);
    }

    public function affichercircuitbyid($id) 
    {
        $model = model(Circuitmodel::class);
        $data = $model->getcircuitbyid($id);
        return $this->response->setHeader('Access-Control-Allow-Origin', '*')->setStatusCode(200)->setJSON($data);
    }
}
