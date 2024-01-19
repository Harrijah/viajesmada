import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { isEmpty } from "../components/Utils";

import { useDispatch, useSelector } from "react-redux";
import { getOneTour } from "../actions/tour.action";
import Itineraire from "../components/Itineraire";
import Formulaire from "../components/Formulaire";
import Footer from "../components/Footer";
import Tourthumbnails from "../components/Tourthumbnails";

const Tourpage = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const mytour = useSelector((state) => state.oneTourReducer);
  const tours = useSelector((state) => state.tourReducer);

  useEffect(() => {
    const getmyone = async () => {
      dispatch(getOneTour(id.id));
    };

    getmyone();
  }, [id]);

  return (
    <div>
      <Navigation />
      <div className="tourpagecontainer">
        <div className="mytourcontainer">
          <h1>{mytour && mytour.nomcircuit}</h1>

          {/* Première partie */}
          <div id="tourpartone">
            <div className="topleftcol">
              <Carousel
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
                autoPlay={true}
                infiniteLoop={true}
              >
                {
                  Array.from({ length: 5 }, (_, i) => i + 1).map((i) => {
                  
                  })
                }
                <div>
                  <img
                    className="carouselimageradius"
                    src={`http://localhost:8080/uploads/${mytour.diapo01}`}
                  />
                  {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                  <img
                    className="carouselimageradius"
                    src={`http://localhost:8080/uploads/${mytour.diapo02}`}
                  />
                  {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                  <img
                    className="carouselimageradius"
                    src={`http://localhost:8080/uploads/${mytour.diapo03}`}
                  />
                  {/* <p className="legend">Legend 3</p> */}
                </div>
                
                {mytour && mytour.diapo04 && (
                  <div>
                    <img
                      className="carouselimageradius"
                      src={`http://localhost:8080/uploads/${mytour.diapo04}`}
                      alt="Diapo 04"
                    />
                    <p className="legend">Legend 4</p>
                  </div>
                )}
                  
                  
                  
              </Carousel>
            </div>
            <div className="toprightcol">
              <h2>A propos du circuit</h2>
              <p id="tourdescript">{mytour && mytour.descripcourt}</p>
              <div id="tourspecs">
                <div id="touroptions">
                  <ul>
                    {mytour && !mytour.options01 == "" ? (
                      <li className="option">{mytour.options01}</li>
                    ) : (
                      ""
                    )}
                    {mytour && !mytour.options02 == "" ? (
                      <li className="option">{mytour.options02}</li>
                    ) : (
                      ""
                    )}
                    {mytour && !mytour.options03 == "" ? (
                      <li className="option">{mytour.options03}</li>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
                <div id="diasincluido">
                  <span className="option1">
                    {mytour && mytour.nombrejours} dias{" "}
                    {mytour && mytour.inclus}{" "}
                  </span>
                </div>
                <div id="tourprice">
                  <span>desde </span>
                  <span className="option1">
                    {mytour && mytour.prix}
                    <span className="option2"> €</span>
                  </span>
                </div>
              </div>
              <div id="tourspecfoot">
                <div className="activitydifficulty">
                  <p>Difficulté : </p>
                  <img
                    className="difficultyclass"
                    src={`http://localhost:8080/icons/${mytour.difficulty}`}
                    alt="difficulté"
                  />
                </div>
                <div className="activitylist">
                  <p>Activités : </p>
                  <div>
                    {mytour && !mytour.activity01 == "" ? (
                      <img
                        className="activityimg"
                        src={`http://localhost:8080/icons/${mytour.activity01}`}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {mytour && !mytour.activity02 == "" ? (
                      <img
                        className="activityimg"
                        src={`http://localhost:8080/icons/${mytour.activity02}`}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {mytour && !mytour.activity03 == "" ? (
                      <img
                        className="activityimg"
                        src={`http://localhost:8080/icons/${mytour.activity03}`}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {mytour && !mytour.activity04 == "" ? (
                      <img
                        className="activityimg"
                        src={`http://localhost:8080/icons/${mytour.activity04}`}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <a href="#">Reservar</a>
            </div>
          </div>

          {/* Deuxième partie */}
          <div id="tourparttwo">
            <div id="middleleftcol">
              <h2>Programa</h2>
              <Itineraire mytour={mytour} />
            </div>
            <div id="middlerightcol">
              <h2>Carte</h2>
              <img
                className="tourmap"
                src={`http://localhost:8080/uploads/${mytour.map}`}
                alt="map"
              />
            </div>
          </div>

          {/* Troisièmepartie */}
          <div id="tourpartthree">
            <div id="tourincluido">
              <h2>Este Viaje incluye :</h2>
              <div>
                <ul>
                  <li>Alquiler del vehículo con conductor</li>
                  <li>Combustible durante el circuito</li>
                  <li>Impuestos y seguro de automóvil</li>
                  <li>
                    Estancias en media pensión (habitaciones dobles + desayuno y
                    cena)
                  </li>
                  <li>Viñetas turísticas e impuesto de visitantes</li>
                  <li>
                    Tickets y entrada con guías locales en los parques durante
                    su estadía
                  </li>
                  <li>Vuelo nacional</li>
                </ul>

                <h3>Observaciones</h3>
                <ul>
                  <li>
                    El recorrido se puede combinar con hoteles de 2 o 3
                    estrellas
                  </li>
                  <li>Esta tarifa es válida para un grupo de 2 a 3 personas</li>
                </ul>

                <h3>No están incluidos:</h3>
                <ul>
                  <li>Bebidas y almuerzos durante el viaje</li>
                  <li>Actividades en la playa</li>
                  <li>Cualquier servicio no mencionado en el programa</li>
                  <li>Seguro multirriesgos</li>
                  <li>Vuelos externos</li>
                </ul>
              </div>
            </div>

            <div id="tourform">
              <h2>Obtener un presupuesto personalizado.</h2>
              <Formulaire tour={mytour} />
            </div>
          </div>
        </div>
      </div>

      <h2 className="similartitle">Circuits similaires</h2>
      <div id="similartour">
        {!isEmpty(tours) &&
          tours
            .filter((tour) => tour.thematique == mytour.thematique)
            .map((tour) => <Tourthumbnails tour={tour} key={tour.id} />)}
      </div>
      <Footer />
    </div>
  );
};

export default Tourpage;
