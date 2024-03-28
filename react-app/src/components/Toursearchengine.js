import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";
import Tour from "../components/Tour";


// Tousearchengine
const Toursearchengine = () => {
  const tours = useSelector((state) => state.tourReducer);
  const [theme, setTheme] = useState("classique");
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
  
  // css : _toursearchengine.scss
  return (
    <div className="firstbann">
      <div className="filtercontainer">
        <div className="filterbox">
          <h2>Elige un circuito</h2>
          <p className="introtext">
            Con sus 18 etnias repartidas en 22 regiones, Madagascar es un lugar
            dónde podemos gozar del turismo cultural, turismo de aventura y del
            ecoturismo. La historia de sus reyes y sus reinos sucesivos le
            interesará sin duda. Varias actividades turísticas son posibles en
            Madagascar, asi como: visitas de parques y reservas naturales y
            sitios turísticos, observación de aves, ballenas, caminatas,
            deportes acuáticos, buceo, kitesurf, windsurf y muchos más …
          </p>
          <div className="searchinputs">
            <div className="input01">
              <label htmlFor="interest">Tema</label>
              <select
                name="interest"
                id="interest"
                ref={themeRef}
                onChange={() => setTheme(themeRef.current.value)}
              >
                <option value="classique">Clásico</option>
                <option value="nature">Naturaleza</option>
                <option value="aventure">Aventura</option>
                <option value="balneaire">Costero</option>
                {/* {Array.from(tours).map((tour) => (
                      <option value={tour.thematique} key={tour.id}>
                        {tour.thematique}
                      </option>
                    ))} */}
              </select>
            </div>
            <div className="input02">
              <label htmlFor="duree">Duración</label>
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
                días
              </span>
            </div>
            <div className="input03">
              <label htmlFor="prix">Precio máximo</label>
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
              filteredTours
                .filter((tour) => tour.nombrejours != '50') // Filtrer les tours où nombrejours n'est pas égal à zéro
                .map((tour) => <Tour tour={tour} key={tour.id} />)
            ) : (
              <div className="emptyform">
                <div className="beforeform">
                  <p>
                    Ningún circuito turístico coincide con tus parámetros de
                    búsqueda.
                  </p>
                  <span>Realiza una nueva búsqueda o ...</span>
                  <h3>Solicita un presupuesto gratuito </h3>{" "}
                  <span>Completando el siguiente formulario.</span>
                  <form action="#" method="post">
                    <div className="formblock">
                      <div>
                        <label className="label01" htmlFor="interest">
                          Lo que te gustaría ver
                        </label>
                        <input
                          type="text"
                          name="interest"
                          id="interest"
                          defaultValue={`Exemple :  naturaleza`}
                        />
                        <label className="label02" htmlFor="yourduration">
                          Duración deseada del circuito
                        </label>
                        <input
                          type="number"
                          name="yourduration"
                          id="yourduration"
                          min="0"
                          defaultValue={duree}
                        />
                        <span> días</span>
                        <label className="label03" htmlFor="yourbudget">
                          Presupuesto máximo por persona
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
                        Número de personas
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
                          placeholder="Tu nombre"
                        />
                        <input
                          type="email"
                          name="youremail"
                          id="youremail"
                          placeholder="Tu correo electrónico"
                        />
                        <input
                          type="tel"
                          name="yourphone"
                          id="yourphone"
                          placeholder="Tu número de teléfono"
                        />
                        <textarea
                          name=""
                          id=""
                          // cols="30"
                          rows="5"
                          placeholder="Cuéntanos lo que te interesa o lo que te gustaría ver durante este viaje ..."
                        ></textarea>
                      </div>
                    </div>
                    <input type="submit" value="Enviar" />
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
