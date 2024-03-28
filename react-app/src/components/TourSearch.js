import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";
import Tour from "../components/Tour";

const TourSearch = () => {
  const tours = useSelector((state) => state.tourReducer);
  const [keyword, setKeyword] = useState("");
  const [duree, setDuree] = useState(30);
  const [prix, setPrix] = useState(5000);
  const themeRef = useRef();
  const dureeRef = useRef();
  const prixRef = useRef();
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filteredTours =
    !isEmpty(tours) &&
    tours
      // .filter((tour) => tour.nombrejours !== 0) 
      .filter((tour) =>
        keyword
          ? removeAccents(tour.nomcircuit.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.descripcourt.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.tags.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour1.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour2.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour3.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour4.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour5.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour6.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour7.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour8.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour9.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour10.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour11.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour12.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour13.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour14.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour15.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour16.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour17.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour18.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour19.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.jour20.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            ) ||
            removeAccents(tour.tags.toLowerCase()).includes(
              removeAccents(keyword.toLowerCase())
            )
          : true
      )
      .filter((tour) => tour.prix <= prix)
      .filter((tour) => tour.nombrejours <= duree);
  
  
  
  
  
  // _toursearch.scss
  return (
    <div className="searchbann">
      <div className="filtercontainer">
        <div className="filterbox">
          <div className="searchinputs">
            <div className="input01">
              <label htmlFor="keyword">Palabra clave</label>
              <input
                type="text"
                name="keyword"
                id="keyword"
                placeholder="Ingrese un término de búsqueda"
                onChange={(e) => setKeyword(e.target.value)}
              />
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
              .slice(0, 12)
              .map((tour) => <Tour tour={tour} key={tour.id} />)
            ) : (
              <div className="emptyform">
                <div className="beforeform">
                  <p>
                    Ningún circuito turístico coincide con tus parámetros de
                    búsqueda.
                  </p>
                  <span>Realiza una nueva búsqueda o ...</span>
                  <h2>Solicita un presupuesto gratuito </h2>{" "}
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

export default TourSearch;
