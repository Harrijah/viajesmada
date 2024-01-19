import React from "react";

const Formprod = () => {
  return (
    <div>
      <form
        action="http://localhost:8080/entreecircuit"
        method="post"
        encType="multipart/form-data"
        id="entreeprod"
      >
        <input
          type="text"
          name="nomcircuit"
          id="nomcircuit"
          placeholder="Nom du circuit"
        />
        <input
          type="number"
          name="nombrejours"
          id="nombrejours"
          placeholder="Nombre de jours"
        />
        <input type="number" name="prix" id="prix" placeholder="Tarif" />{" "}


        <select name="basepax" id="basepax">
          <option value="1">2 personnes</option>
          <option value="2">3 personnes</option>
          <option value="3">4 personnes</option>
          <option value="4">5 personnes</option>
          <option value="5">6 personnes</option>
          <option value="6">7 personnes</option>
          <option value="7">8 personnes</option>
          <option value="8">groupe</option>
        </select>
        

        <select name="saison" id="saison">
          <option value="toutesaison">toutesaison</option>
          <option value="1">Novembre à Avril</option>
          <option value="2">Mai à Octobre</option>
        </select>


        


        <label htmlFor="categorie01" id="labelcategorie01">
          Catégorie
        </label>
        <select name="categorie01" id="categorie01">
          <option value="classique">classique</option>
          <option value="thematique">thematique</option>
          <option value="organise">organise</option>
        </select>
        <label htmlFor="thematique" id="labelthematique">
          Thématique
        </label>
        <select name="thematique" id="thematique">
          <option value="classique">classique</option>
          <option value="nature">nature et découverte</option>
          <option value="culturel">culturel</option>
          <option value="balneaire">balnéaire</option>
          <option value="luxe">luxe</option>
          <option value="aventure">aventure</option>
          <option value="birdwatching">birdwatching</option>
          <option value="lunedemiel">lune de miel</option>
        </select>
        <input
          type="text"
          name="inclus"
          id="inclus"
          placeholder="Todo incluido ?"
        />
        <input
          type="text"
          name="options01"
          id="options01"
          placeholder="Option 1"
        />
        <input
          type="text"
          name="options02"
          id="options02"
          placeholder="Option 2"
        />
        <input
          type="text"
          name="options03"
          id="options03"
          placeholder="Option 3"
        />
        <textarea
          name="descripcourt"
          id="descripcourt"
          placeholder="Descriptif"
        ></textarea>
        <textarea name="tags" id="tags" placeholder="tags"></textarea>
        {/* // Rajout inputs */}
        {/* // Saisir les régions du circuit */}
        <textarea name="region" id="region" placeholder="Region"></textarea>
        {/* //Sélectionner la difficulté */}
        <select name="difficulty" id="difficulty">
          <option value="easy.fw.png">Facile</option>
          <option value="moderate.fw.png">Modéré</option>
          <option value="beforemax.fw.png">Avancé</option>
          <option value="max.fw.png">Dificile</option>
        </select>
        {/* // Les activités  */}
        <select name="activity01" id="activity01">
          <option value="">null</option>
          <option value="hotel.png">hotel</option>
          <option value="icons8-animal-50.png">Oiseau</option>
          <option value="randonnee.png">Randonnée</option>
          <option value="parc-national.png">Parc national</option>
          <option value="patte.png">Animal</option>
          <option value="plage.png">Plage</option>
          <option value="population.png">Social</option>
          <option value="icons8-rivière-100.png">Fleuve</option>
          <option value="icons8-tente-64.png">Bivouac</option>
        </select>
        <select name="activity02" id="activity02">
          <option value="">null</option>
          <option value="hotel.png">hotel</option>
          <option value="icons8-animal-50.png">Oiseau</option>
          <option value="randonnee.png">Randonnée</option>
          <option value="parc-national.png">Parc national</option>
          <option value="patte.png">Animal</option>
          <option value="plage.png">Plage</option>
          <option value="population.png">Social</option>
          <option value="icons8-rivière-100.png">Fleuve</option>
          <option value="icons8-tente-64.png">Bivouac</option>
        </select>
        <select name="activity03" id="activity03">
          <option value="">null</option>
          <option value="hotel.png">hotel</option>
          <option value="icons8-animal-50.png">Oiseau</option>
          <option value="randonnee.png">Randonnée</option>
          <option value="parc-national.png">Parc national</option>
          <option value="patte.png">Animal</option>
          <option value="plage.png">Plage</option>
          <option value="population.png">Social</option>
          <option value="icons8-rivière-100.png">Fleuve</option>
          <option value="icons8-tente-64.png">Bivouac</option>
        </select>
        <select name="activity04" id="activity04">
          <option value="">null</option>
          <option value="hotel.png">hotel</option>
          <option value="icons8-animal-50.png">Oiseau</option>
          <option value="randonnee.png">Randonnée</option>
          <option value="parc-national.png">Parc national</option>
          <option value="patte.png">Animal</option>
          <option value="plage.png">Plage</option>
          <option value="population.png">Social</option>
          <option value="icons8-rivière-100.png">Fleuve</option>
          <option value="icons8-tente-64.png">Bivouac</option>
        </select>
        {/* <select name="activity05" id="activity05">
              <option value="0">null</option>
              <option value="icons8-animal-50.png">Oiseau</option>
              <option value="randonnee.png">Randonnée</option>
              <option value="parc-national.png">Parc national</option>
              <option value="patte.png">Animal</option>
              <option value="plage.png">Plage</option>
              <option value="population.png">Social</option>
              <option value="icons8-rivière-100.png">Fleuve</option>
              <option value="icons8-tente-64.png">Bivouac</option>
            </select> */}
        <label htmlFor="map" id="labelmap">
          Carte
        </label>
        <input type="file" name="map" id="map" />
        <label htmlFor="diapo01" id="labeldiapo01">
          Diapo 01
        </label>
        <input type="file" name="diapo01" id="diapo01" />
        <label htmlFor="diapo02" id="labeldiapo02">
          Diapo 02
        </label>
        <input type="file" name="diapo02" id="diapo02" />
        <label htmlFor="diapo03" id="labeldiapo03">
          Diapo 03
        </label>
        <input type="file" name="diapo03" id="diapo03" />

        <label htmlFor="diapo04" id="labeldiapo04">
          Diapo 04
        </label>
        <input type="file" name="diapo04" id="diapo04" />
        
        <label htmlFor="diapo05" id="labeldiapo05">
          Diapo 05
        </label>
        <input type="file" name="diapo05" id="diapo05" />
        

        <span id="x0"></span>

        <input
          type="text"
          name="jour01title"
          id="jour01title"
          placeholder="Jour 01"
        />
        <textarea
          name="jour01desc"
          id="jour01desc"
          placeholder="jour01desc"
        ></textarea>
        <input
          type="text"
          name="jour02title"
          id="jour02title"
          placeholder="Jour 02"
        />
        <textarea
          name="jour02desc"
          id="jour02desc"
          placeholder="jour02desc"
        ></textarea>
        <input
          type="text"
          name="jour03title"
          id="jour03title"
          placeholder="Jour 03"
        />
        <textarea
          name="jour03desc"
          id="jour03desc"
          placeholder="jour03desc"
        ></textarea>
        <input
          type="text"
          name="jour04title"
          id="jour04title"
          placeholder="Jour 04"
        />
        <textarea
          name="jour04desc"
          id="jour04desc"
          placeholder="jour04desc"
        ></textarea>
        <input
          type="text"
          name="jour05title"
          id="jour05title"
          placeholder="Jour 05"
        />
        <textarea
          name="jour05desc"
          id="jour05desc"
          placeholder="jour05desc"
        ></textarea>
        <input
          type="text"
          name="jour06title"
          id="jour06title"
          placeholder="Jour 06"
        />
        <textarea
          name="jour06desc"
          id="jour06desc"
          placeholder="jour06desc"
        ></textarea>
        <input
          type="text"
          name="jour07title"
          id="jour07title"
          placeholder="Jour 07"
        />
        <textarea
          name="jour07desc"
          id="jour07desc"
          placeholder="jour07desc"
        ></textarea>
        <input
          type="text"
          name="jour08title"
          id="jour08title"
          placeholder="Jour 08"
        />
        <textarea
          name="jour08desc"
          id="jour08desc"
          placeholder="jour08desc"
        ></textarea>
        <input
          type="text"
          name="jour09title"
          id="jour09title"
          placeholder="Jour 09"
        />
        <textarea
          name="jour09desc"
          id="jour09desc"
          placeholder="jour09desc"
        ></textarea>
        <input
          type="text"
          name="jour10title"
          id="jour10title"
          placeholder="Jour 10"
        />
        <textarea
          name="jour10desc"
          id="jour10desc"
          placeholder="jour10desc"
        ></textarea>
        <input
          type="text"
          name="jour11title"
          id="jour11title"
          placeholder="Jour 11"
        />
        <textarea
          name="jour11desc"
          id="jour11desc"
          placeholder="jour11desc"
        ></textarea>
        <input
          type="text"
          name="jour12title"
          id="jour12title"
          placeholder="Jour 12"
        />
        <textarea
          name="jour12desc"
          id="jour12desc"
          placeholder="jour12desc"
        ></textarea>
        <input
          type="text"
          name="jour13title"
          id="jour13title"
          placeholder="Jour 13"
        />
        <textarea
          name="jour13desc"
          id="jour13desc"
          placeholder="jour13desc"
        ></textarea>
        <input
          type="text"
          name="jour14title"
          id="jour14title"
          placeholder="Jour 14"
        />
        <textarea
          name="jour14desc"
          id="jour14desc"
          placeholder="jour14desc"
        ></textarea>
        <input
          type="text"
          name="jour15title"
          id="jour15title"
          placeholder="Jour 15"
        />
        <textarea
          name="jour15desc"
          id="jour15desc"
          placeholder="jour15desc"
        ></textarea>
        <input
          type="text"
          name="jour16title"
          id="jour16title"
          placeholder="Jour 16"
        />
        <textarea
          name="jour16desc"
          id="jour16desc"
          placeholder="jour16desc"
        ></textarea>
        <input
          type="text"
          name="jour17title"
          id="jour17title"
          placeholder="Jour 17"
        />
        <textarea
          name="jour17desc"
          id="jour17desc"
          placeholder="jour17desc"
        ></textarea>
        <input
          type="text"
          name="jour18title"
          id="jour18title"
          placeholder="Jour 18"
        />
        <textarea
          name="jour18desc"
          id="jour18desc"
          placeholder="jour18desc"
        ></textarea>
        <input
          type="text"
          name="jour19title"
          id="jour19title"
          placeholder="Jour 19"
        />
        <textarea
          name="jour19desc"
          id="jour19desc"
          placeholder="jour19desc"
        ></textarea>
        <input
          type="text"
          name="jour20title"
          id="jour20title"
          placeholder="Jour 20"
        />
        <textarea
          name="jour20desc"
          id="jour20desc"
          placeholder="jour20desc"
        ></textarea>
        <input type="submit" value="Valider" id="submitmycirc" />
        {/* <input type="submit" value="Enviar" /> */}
      </form>
    </div>
  );
};

export default Formprod;
