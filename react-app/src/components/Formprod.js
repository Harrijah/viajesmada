import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const Formprod = () => {
  const itineraries = useSelector((state) => state.itineraryReducer);
  return (
    <div>
      <form
        action="https://tours.viajes-madagascar.mg/entreecircuit"
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
        
        <select name="jour1" id="jour1">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour2" id="jour2">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour3" id="jour3">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour4" id="jour4">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour5" id="jour5">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour6" id="jour6">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour7" id="jour7">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour8" id="jour8">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour9" id="jour9">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour10" id="jour10">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour11" id="jour11">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour12" id="jour12">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour13" id="jour13">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour14" id="jour14">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour15" id="jour15">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour16" id="jour16">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour17" id="jour17">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour18" id="jour18">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour19" id="jour19">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <select name="jour20" id="jour20">
          <option key={"0"} value={"0"}>
            Null
          </option>
          {!isEmpty(itineraries) &&
            itineraries.map((itinerary) => (
              <option key={itinerary.id} value={itinerary.id}>
                {itinerary.daytitle}
              </option>
            ))}
        </select>
        <input type="submit" value="Valider" id="submitmycirc" />
        {/* <input type="submit" value="Enviar" /> */}
      </form>
    </div>
  );
};

export default Formprod;
