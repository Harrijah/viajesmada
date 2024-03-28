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
const Oeste = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tourReducer);
  // const mytour = useSelector((state) => state.oneTourReducer);
  const pics = useSelector((state) => state.picsReducer);
  const activities = useSelector((state) => state.activityReducer);
  const [index, setIndex] = useState(0);
  const previousactivity = () => {
    const listactivity = activities.filter(
      (activity) => activity.region == "Oeste"
    );
    setIndex((index - 1 + listactivity.length) % listactivity.length);
    console.log(index);
  };
  const nextactivity = () => {
    const listactivity = activities.filter(
      (activity) => activity.region == "Oeste"
    );
    setIndex((index + 1) % listactivity.length);
    console.log(index);
  };

  useEffect(() => {
    const getmyone = async () => {
      dispatch(getOneTour("32"));
    };
    getmyone();
  }, []);

  return (
    <div>
      <Navigation />
      <div id="regioncontainer">
        <div className="regionimage"></div>
        <div id="regionintrocontainer">
          <div>
            <h1>El Oeste de Madagascar</h1>

            <p className="instruct">
                Sobrevuele el mapa con su ratón para obtener más detalles sobre
                las ciudades.
              </p>
            <div id="tourpartone">
              <div className="toprightcol">
                <h2>Población e historia</h2>
                <p id="tourdescript">
                  El Oeste de Madagascar está impregnado de una rica historia
                  que se entrelaza con las diversas etnias que han dejado su
                  huella en la región. Con una mezcla cultural única, esta parte
                  de la isla ha sido testigo de la influencia de comunidades
                  como los Sakalava, Mahafaly y Antandroy, cada una
                  contribuyendo a la rica diversidad cultural de la zona. Las
                  tradiciones ancestrales, la música y las festividades
                  coloridas ofrecen a los visitantes una inmersión en la riqueza
                  cultural de esta región. En términos de población, el Oeste de
                  Madagascar alberga comunidades acogedoras y hospitalarias que
                  reflejan la diversidad étnica de la isla. Los habitantes
                  locales, con sus modos de vida tradicionales, comparten con
                  los visitantes historias cautivadoras y muestran una
                  hospitalidad única. Explorar esta región no solo brinda la
                  oportunidad de apreciar la belleza natural, sino también de
                  sumergirse en la historia y la vida cotidiana de las diversas
                  comunidades que llaman hogar al Oeste de Madagascar.
                </p>
                <h2>Geografía y clima</h2>
                <p>
                  El Oeste de Madagascar es una región geográficamente diversa,
                  que abarca desde las extensas llanuras costeras hasta las
                  elevaciones montañosas. La costa occidental presenta playas de
                  arena blanca y aguas cristalinas, ofreciendo paisajes costeros
                  impresionantes. Hacia el interior, se encuentran formaciones
                  montañosas y valles fértiles que sustentan una variada flora y
                  fauna. En cuanto al clima, el Oeste de Madagascar experimenta
                  una diversidad climática influenciada por su topografía. Las
                  zonas costeras disfrutan de un clima tropical con temperaturas
                  cálidas, mientras que las regiones montañosas pueden
                  experimentar variaciones climáticas más frescas. La temporada
                  de lluvias, que generalmente ocurre de noviembre a marzo,
                  contribuye a la exuberante vegetación y a la vitalidad de los
                  paisajes. La combinación de su geografía única y su clima
                  diverso convierte al Oeste de Madagascar en un destino
                  fascinante para los amantes de la naturaleza y la aventura.
                </p>
              </div>
              <div className="topleftcol">
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
                      .filter((activity) => activity.region == "Oeste")
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
                    .filter((region) => region.region == "Oeste")
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
            <h2>Algunos circuitos que cubren el Oeste de Madagascar</h2>
            <div id="hometourfilter">
              {!isEmpty(tours) &&
                tours
                  .filter((region) => region.region == "Oeste")
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

export default Oeste;
