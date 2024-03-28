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
const Este = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tourReducer);
  // const mytour = useSelector((state) => state.oneTourReducer);
  const pics = useSelector((state) => state.picsReducer);
  const activities = useSelector((state) => state.activityReducer);
  const [index, setIndex] = useState(0);
  const previousactivity = () => {
    const listactivity = activities.filter(
      (activity) => activity.region == "Este"
    );
    setIndex((index - 1 + listactivity.length) % listactivity.length);
    console.log(index);
  };
  const nextactivity = () => {
    const listactivity = activities.filter(
      (activity) => activity.region == "Este"
    );
    setIndex((index + 1) % listactivity.length);
    console.log(index);
  };

  useEffect(() => {
    const getmyone = async () => {
      dispatch(getOneTour("24"));
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
            <h1>El Este de Madagascar</h1>
            <p className="instruct">
                Sobrevuele el mapa con su ratón para obtener más detalles sobre
                las ciudades.
              </p> 
            <div id="tourpartone">
              <div className="toprightcol">
                <h2>Población e historia</h2>
                <p id="tourdescript">
                  La región Este de Madagascar es un cautivador crisol de
                  historia y diversidad étnica que ha dejado una profunda huella
                  en esta parte de la isla. Con una rica historia que se remonta
                  a la llegada de los primeros colonizadores y exploradores,
                  esta zona ha sido testigo de la interacción entre diversos
                  grupos étnicos, como los Betsimisaraka, Antambahoaka y Merina.
                  Los antiguos reinos y la influencia de las rutas comerciales
                  han dado forma a la identidad cultural única de esta región
                  costera. La población del Este de Madagascar refleja esta
                  diversidad, con comunidades que han conservado sus tradiciones
                  y modos de vida a lo largo de los siglos. Desde los pescadores
                  Betsimisaraka hasta los agricultores Antambahoaka, cada grupo
                  étnico aporta su perspectiva única a la rica tapestry de la
                  vida en esta parte de la isla. Los visitantes pueden
                  sumergirse en la vibrante cultura local, explorar antiguos
                  sitios históricos y disfrutar de la hospitalidad de la
                  población mientras descubren la fascinante mezcla de historia
                  y vida cotidiana en el Este de Madagascar.
                </p>
                <h2>Geografía y clima</h2>
                <p>
                  La región Este de Madagascar presenta una geografía
                  cautivadora y diversa que se extiende desde la costa hasta las
                  tierras altas, ofreciendo una variedad de paisajes
                  impresionantes. Con una mezcla de exuberantes selvas
                  tropicales, ríos serpenteantes y playas de arena blanca, esta
                  zona es hogar de una biodiversidad excepcional. Los parques
                  nacionales como Andasibe-Mantadia y Ranomafana albergan una
                  rica variedad de flora y fauna endémicas, incluidos lémures,
                  camaleones y especies de aves únicas. En cuanto al clima, el
                  Este de Madagascar disfruta de un clima tropical, con
                  temperaturas cálidas y precipitaciones estacionales. Los meses
                  de noviembre a marzo son generalmente más húmedos, creando un
                  entorno propicio para la exuberante vegetación. Los visitantes
                  pueden experimentar la belleza de la naturaleza en su máximo
                  esplendor durante este período, mientras exploran las reservas
                  naturales y se sumergen en la biodiversidad única que define
                  la geografía y el clima del Este de Madagascar.
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
                      .filter((activity) => activity.region == "Este")
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
                  {
                    !isEmpty(pics) && pics.filter((region) => region.region == "Este").map((pic) => (
                      <div key={pic.id}>
                        <img
                          className="carouselimageradius"
                          src={`https://tours.viajes-madagascar.mg/uploads/${pic.image}`}
                        />
                        {/* <p className="legend">Legend 1</p> */}
                      </div>
                    ))
                  }
                </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="searchbann">
        <div className="filtercontainer">
          <div className="filterbox">
            <h2>Algunos circuitos que cubren el Este de Madagascar</h2>
            <div id="hometourfilter">
              {!isEmpty(tours) &&
                tours
                  .filter((region) => region.region == "Este")
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

export default Este;
