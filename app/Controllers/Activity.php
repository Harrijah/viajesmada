<?php
    Namespace App\Controllers;

    Use App\Model\Activitymodel;


    helper(['url', 'form']);

    class Activity extends BaseController
    {
        public function addactivity()
        {
            $model = model(Activitymodel::class);
            $image = $this->request->getFiles('image');

            $validationRules = [
                'title' => 'required',
            ];

            if($this->request->getMethod() == 'post'){
                if(!empty($image['image']->name)){
                    $validationRules['image'] = [
                        'uploaded[image]',
                        'mime_in[image,image/jpg,image/jpeg,image/gif,image/png]',
                    ];
                }
            }

            if($this->validate($validationRules)){
                if($image['image']->isValid() && !$image['image']->hasMoved()){
                    $image['image']->move(WRITEPATH . '../public/uploads');
                }
            } else {
                echo "Quelque chose n\'a pas fonctionné";
            }

            $model->addactivity();

            return redirect()->to('http://localhost:3000/enterobjects');
        }

        public function getactivity()
        {
        $model = model(Activitymodel::class);
        $data = $model->getactivity();
        return $this->response->setHeader('Access-COntroll-Allow-Origin', '*')->setStatusCode(200)->setJSON($data);
        }

    }
