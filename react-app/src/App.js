// Ce fichier permet de définir le type de l'action. Il contient les Routes de l'application. Il contient les composants React de l'application.

import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

// Les pages à importer
import Home from "./pages/Home";
import Entreeprod from "./pages/Entreeprod";
import Alltour from "./pages/Alltour";
import Tourpage from "./pages/Tourpage";
import Categotour from "./pages/Categotour";
import Thematour from "./pages/Thematour";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/:tours" element={<Alltour />}></Route>
          <Route path="/:classique/general" element={ <Categotour categorie='classique' />}>Classiques</Route>
          <Route path="/:thematique/global" element={<Categotour categorie='thematique' />}>Thématiques</Route>

          
          // filtrage par deuxième paramètre : thématique
          <Route path="/thematique/:themat" element={<Thematour />}>Thématiques</Route>

          // filtrage par deuxième paramètre : id circuit
          <Route path="/classique/:id" element={<Tourpage />}>Classiques</Route>

          <Route path="/tourpage/:id" element={<Tourpage />}></Route>

          

          // Entrée circuit du backoffice
          <Route path="/entreeprod" element={<Entreeprod />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
