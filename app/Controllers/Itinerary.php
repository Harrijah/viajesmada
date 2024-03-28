<?php
    Namespace App\Controllers;
    Use App\Model\Itinerarymodel;

    helper(['url', 'form']);

    class Itinerary extends BaseController
    {
        public function additinerary()
        {
            $model = model(Itinerarymodel::class);
            $validationRules = [
                'daytitle' => 'required',
            ];
			if ($this->validate($validationRules)) {
            
            $model->additinerary();
			}
            return redirect()->to('http://localhost:3000');
        }

        public function getitinerary()
        {
        $model = model(Itinerarymodel::class);
        $data = $model->getitinerary();
        return $this->response->setHeader('Access-COntroll-Allow-Origin', '*')->setStatusCode(200)->setJSON($data);
        }

    }
