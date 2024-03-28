import { React, useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { isEmpty } from "../components/Utils";
import { Carousel } from "react-responsive-carousel";

import { useSelector, useDispatch } from "react-redux";
import { getOneTour } from "../actions/tour.action";
import Tour from "../components/Tour";
import Regionmap from "../components/Regionmap";

// components/region.scss
const Norte = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tourReducer);
  // const mytour = useSelector((state) => state.oneTourReducer);
  const activities = useSelector((state) => state.activityReducer);
  const pics = useSelector((state) => state.picsReducer);
  const [index, setIndex] = useState(0);
  const previousactivity = () => {
    const listactivity = activities.filter(
      (activity) => activity.region == "Norte"
    );
    setIndex((index - 1 + listactivity.length) % listactivity.length);
    console.log(index);
  };
  const nextactivity = () => {
    const listactivity = activities.filter(
      (activity) => activity.region == "Norte"
    );
    setIndex((index + 1) % listactivity.length);
    console.log(index);
  };

  useEffect(() => {
    const getmyone = async () => {
      dispatch(getOneTour("16"));
    };
    getmyone();
  }, []);

  return (
    <div>
      <Navigation />
      <div id="regioncontainer">
        <div className="regionimage"></div>
        {/* Première partie */}
        <div id="regionintrocontainer">
          <div>
            <h1>El norte de Madagascar</h1>

            <p className="instruct">
                Sobrevuele el mapa con su ratón para obtener más detalles sobre
                las ciudades.
              </p>
            <div id="tourpartone">
              <div className="toprightcol">
                <h2>Población e historia</h2>
                <p id="tourdescript">
                  El Norte de Madagascar, una región rica en historia y
                  diversidad cultural, ofrece una fascinante narrativa de
                  influencias ancestrales y coloniales. Desde tiempos antiguos,
                  esta área ha sido habitada por diversas comunidades étnicas,
                  incluidos los Antakarana, los Sakalava y los Betsimisaraka,
                  cada uno dejando su huella en la región. Durante la era
                  colonial, el Norte fue testigo de la llegada de europeos,
                  principalmente franceses, que dejaron un legado arquitectónico
                  y cultural aún presente en ciudades como Diego Suárez y Nosy
                  Be. Además, la región alberga sitios históricos
                  significativos, como la isla de Nosy Komba, conocida por su
                  herencia de comercio de esclavos y su vínculo con la realeza
                  malgache. Con su rica historia y su encanto cultural, el Norte
                  de Madagascar ofrece a los visitantes una experiencia única
                  llena de descubrimientos y fascinantes relatos del pasado.
                </p>
                <h2>Geografía y clima</h2>
                <p>
                  La geografía del Norte de Madagascar es un espectáculo
                  impresionante de biodiversidad y contrastes. La región alberga
                  una variedad de paisajes que van desde extensas llanuras
                  costeras hasta montañas imponentes. Nosy Be, una isla situada
                  en la costa noroeste, destaca por sus playas de arena blanca y
                  aguas cristalinas, convirtiéndola en un paraíso tropical.
                  Hacia el interior, se encuentran las montañas de Amber, un
                  paisaje montañoso cubierto de exuberantes bosques tropicales y
                  cascadas pintorescas. La región norte también es hogar de
                  reservas naturales, como la Reserva Especial de Ankarana,
                  famosa por sus formaciones cársticas y su diversidad biológica
                  única. En cuanto al clima, el Norte de Madagascar disfruta de
                  un clima tropical, con estaciones secas e húmedas. La
                  temporada de lluvias, que va de noviembre a marzo, trae
                  consigo una exuberante vegetación y temperaturas cálidas,
                  mientras que la temporada seca, de abril a octubre, ofrece
                  condiciones más frescas y propicias para explorar la
                  diversidad natural de la región. Esta combinación de paisajes
                  variados y condiciones climáticas hacen del Norte de
                  Madagascar un destino fascinante para los amantes de la
                  naturaleza y la aventura.
                </p>
              </div>
              <div className="topleftcol">
                {/* <h2>Algunas fotos</h2> */}
                

                <Regionmap />
              </div>
            </div>
          </div>

          <div className="regioncol">
            <div className="leftcol">
              <h2>Puntos de interés turístico</h2>

              <div className="activitymap">
                <div className="button01" onClick={() => previousactivity()}>
                  <i className="fa fa-chevron-left"></i>
                </div>
                <div id="interestcontainer">
                  {!isEmpty(activities) &&
                    activities
                      .filter((activity) => activity.region == "Norte")
                      .map((activity, i) => (
                        <div
                          key={i}
                          className={
                            index === i ? "activitycontainer" : "hideme"
                          }
                        >
                          <div className="thumnimg">
                            <div>
                              <img
                                src={`https://tours.viajes-madagascar.mg/uploads/${activity.image}`}
                                alt={activity.title}
                              />
                            </div>
                            <h3>{activity.title}</h3>
                          </div>
                          <div className="activityinfos">
                            <p>{activity.description}</p>
                          </div>
                        </div>
                      ))}
                </div>
                <div className="button02" onClick={() => nextactivity()}>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </div>
            </div>
            <div id="rightcol">
              <h2>Algunas fotos</h2>

              <Carousel
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
                autoPlay={true}
                infiniteLoop={true}
              >
                {!isEmpty(pics) &&
                  pics
                    .filter((region) => region.region == "Norte")
                    .map((pic) => (
                      <div key={pic.id}>
                        <img
                          className="carouselimageradius"
                          src={`https://tours.viajes-madagascar.mg/uploads/${pic.image}`}
                        />
                        {/* <p className="legend">Legend 1</p> */}
                      </div>
                    ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="searchbann">
        <div className="filtercontainer">
          <div className="filterbox">
            <h2>Algunos circuitos que cubren el Norte de Madagascar</h2>
            <div id="hometourfilter">
              {!isEmpty(tours) &&
                tours
                  .filter((region) => region.region == "Norte")
                  .filter((tour) => tour.nombrejours !== '50')
                  .map((tour) => <Tour tour={tour} key={tour.id} />)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Norte;
