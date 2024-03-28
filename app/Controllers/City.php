<?php
    Namespace App\Controllers;
    Use App\Models\Citymodel;

    helper(['url', 'form']);

    class City extends BaseController
    {
        public function addcity()
        {
            $model = model(Citymodel::class);
            $image = $this->request->getFiles('image');

            $validationRules = [
                'title' => 'required',
            ];

            if($this->request->getMethod() == 'post'){
                if(!empty($image['image']->name)) {
                    $validationRules['image'] = [
                        'uploaded[image]',
                        'mime_in[image,image/jpg,image/jpeg,image/gif,image/png]'
                    ];
                }
            }
            if($this->validate($validationRules)){
            if(isset($image['image']) && $image['image']->isValid() && !$image['image']->hasMoved()){
                $image['image']->move(WRITEPATH . '../public/uploads');
            }
        } else {
            echo "Quelque chose n\'a pas fonctionné";
        }
            $model->addcity();

            return redirect()->to('http://localhost:3000/enterobjects');
        }

        public function getcity()
        {
        $model = model(Citymodel::class);
        $data = $model->getcity();
        return $this->response->setHeader('Access-Controll-Allow-Origin', '*')->setStatusCode(200)->setJSON($data);
        }

    }
