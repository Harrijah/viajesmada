<?php
    Namespace App\Controllers;
    Use App\Models\Picmodel;

    helper(['url', 'form']);

    class Pic extends BaseController
    {
        public function addpic()
        {
            $model = model(Picmodel::class);
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
            // Check if the 'image' key exists in the $image array
            if(isset($image['image']) && $image['image']->isValid() && !$image['image']->hasMoved()){
                $image['image']->move(WRITEPATH . '../public/uploads');
            }
        } else {
            echo "Quelque chose n\'a pas fonctionné";
        }

            $model->addpic();

            return redirect()->to('http://localhost:3000/enterobjects');
        }

        public function getpic()
        {
        $model = model(Picmodel::class);
        $data = $model->getpic();
        return $this->response->setHeader('Access-Controll-Allow-Origin', '*')->setStatusCode(200)->setJSON($data);
        }

    }
