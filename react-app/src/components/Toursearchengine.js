import React, { useRef, useState } from 'react';
import { useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";
import Tour from "../components/Tour";


const Toursearchengine = () => {
    const tours = useSelector((state) => state.tourReducer);
    const [theme, setTheme] = useState("nature");
    const [duree, setDuree] = useState(30);
    const [prix, setPrix] = useState(5000);
    const themeRef = useRef();
    const dureeRef = useRef();
    const prixRef = useRef();
  
    const filteredTours =
      !isEmpty(tours) &&
      tours
        .filter((tour) => tour.thematique == theme)
        .filter((tour) => tour.prix <= prix)
        .filter((tour) => tour.nombrejours <= duree);
    return (
        <div className="firstbann">
          <div className="filtercontainer">
            <div className="filterbox">
              <h2>Choisissez un circuit</h2>
              <p className="introtext">Con sus 18 etnias repartidas en 22 regiones, Madagascar es un lugar dónde podemos gozar del turismo cultural, turismo de aventura y del ecoturismo. La historia de sus reyes y sus reinos sucesivos le interesará sin duda. Varias actividades turísticas son posibles en Madagascar, asi como: visitas de parques y reservas naturales y sitios turísticos, observación de aves, ballenas, caminatas, deportes acuáticos, buceo, kitesurf, windsurf y muchos más …
              </p>
              <div className="searchinputs">
                <div className="input01">
                  <label htmlFor="interest">Thème</label>
                  <select
                    name="interest"
                    id="interest"
                    ref={themeRef}
                    onChange={() => setTheme(themeRef.current.value)}
                  >
                    <option value="nature">Nature</option>
                    <option value="aventure">Aventure</option>
                    <option value="classique">Classique</option>
                    <option value="balneaire">Balnéaire</option>
                    {/* {Array.from(tours).map((tour) => (
                      <option value={tour.thematique} key={tour.id}>
                        {tour.thematique}
                      </option>
                    ))} */}
                  </select>
                </div>
                <div className="input02">
                  <label htmlFor="duree">Durée</label>
                  <input
                    type="range"
                    name="duree"
                    id="duree"
                    max="30"
                    defaultValue={duree}
                    ref={dureeRef}
                    onChange={() => setDuree(Number(dureeRef.current.value))}
                  />
                  <span className="daynumbers">
                    <span style={{ color: "#e6d7b1", fontWeight: "600" }}>
                      {duree}
                    </span>{" "}
                    jours
                  </span>
                </div>
                <div className="input03">
                  <label htmlFor="prix">Prix max</label>
                  <input
                    type="range"
                    name="prix"
                    id="prix"
                    max="5000"
                    defaultValue={prix}
                    ref={prixRef}
                    onChange={() => setPrix(Number(prixRef.current.value))}
                  />
                  <span className="daynumbers">
                    <span style={{ color: "#e6d7b1", fontWeight: "600" }}>
                      {prix}
                    </span>{" "}
                    €
                  </span>
                </div>
              </div>
              <div id="hometourfilter">
                {!isEmpty(tours) && filteredTours.length > 0 ? (
                  filteredTours.map((tour) => (
                    <Tour tour={tour} key={tour.id} />
                  ))
                ) : (
                  <div className="emptyform">
                    <div className="beforeform">
                      <p>
                        Aucun circuit touristique ne correspond à vos paramètres
                        de recherche.
                      </p>
                      <span>Faites une nouvelle recherche ou ...</span>
                      <h2>Obtenez une cotation gratuite </h2>{" "}
                      <span>en remplissant le formulaire suivant</span>
                      <form action="#" method="post">
                        <div className="formblock">
                          <div>
                            <label className="label01" htmlFor="interest">
                              Ce que vous aimeriez voir
                            </label>
                            <input
                              type="text"
                              name="interest"
                              id="interest"
                              defaultValue={`Exemple :  ${theme}`}
                            />
                            <label className="label02" htmlFor="yourduration">
                              Durée du circuit souhaité
                            </label>
                            <input
                              type="number"
                              name="yourduration"
                              id="yourduration"
                              min="0"
                              defaultValue={duree}
                            />
                            <span> jours</span>
                            <label className="label03" htmlFor="yourbudget">
                              Budget max par personne
                            </label>
                            <input
                              type="number"
                              name="yourbudget"
                              id="yourbudget"
                              min="0"
                              defaultValue={prix}
                            />
                            <span> €</span>
                            <label className="label04" htmlFor="nombrepax">
                              Nombre de personnes
                            </label>
                            <input
                              type="number"
                              name="nombrepax"
                              id="nombrepax"
                              min="0"
                              defaultValue={Number(3)}
                            />
                            <span> pax</span>
                          </div>
                          <div>
                            <input
                              type="text"
                              name="yourname"
                              id="yourname"
                              placeholder="Votre nom"
                            />
                            <input
                              type="email"
                              name="youremail"
                              id="youremail"
                              placeholder="Votre email"
                            />
                            <input
                              type="tel"
                              name="yourphone"
                              id="yourphone"
                              placeholder="Votre téléphone"
                            />
                            <textarea
                              name=""
                              id=""
                              // cols="30"
                              rows="5"
                              placeholder="Racontez-nous ce qui vous intéresse ou ce que vous aimeriez voir pendant ce voyage ..."
                            ></textarea>
                          </div>
                        </div>
                        <input type="submit" value="Envoyer" />
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
    );
};

export default Toursearchengine;