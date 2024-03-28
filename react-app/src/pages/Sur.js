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
const Sur = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tourReducer);
  const mytour = useSelector((state) => state.oneTourReducer);
  const activities = useSelector((state) => state.activityReducer);
  const pics = useSelector((state) => state.picsReducer);
  const [index, setIndex] = useState(0);
  const previousactivity = () => {
    const listactivity = activities.filter(
      (activity) => activity.region == "Sur"
    );
    setIndex((index - 1 + listactivity.length) % listactivity.length);
    console.log(index);
  };
  const nextactivity = () => {
    const listactivity = activities.filter(
      (activity) => activity.region == "Sur"
    );
    setIndex((index + 1) % listactivity.length);
    console.log(index);
  };

  useEffect(() => {
    const getmyone = async () => {
      dispatch(getOneTour("31"));
    };
    getmyone();
    !isEmpty(mytour) && console.log(mytour);
  }, []);

  return (
    <div>
      <Navigation />
      <div id="regioncontainer">
        <div className="regionimage"></div>
        <div id="regionintrocontainer">
          <div>
            <h1>El Sur de Madagascar</h1>

            <p className="instruct">
                Sobrevuele el mapa con su ratón para obtener más detalles sobre
                las ciudades.
              </p>
            <div id="tourpartone">
              <div className="toprightcol">
                <h2>Población e historia</h2>
                <p id="tourdescript">
                  El Sur de Madagascar, con su rica historia y diversidad de
                  población, presenta una mezcla única de culturas y
                  tradiciones. La población del Sur está compuesta por diversos
                  grupos étnicos, como los Antandroy, Mahafaly y Antanosy, cada
                  uno con sus propias costumbres y prácticas culturales. Estas
                  comunidades han desempeñado un papel crucial en la
                  configuración de la identidad regional a lo largo de los años.
                  En términos históricos, el Sur de Madagascar ha sido testigo
                  de la influencia de diversos grupos y civilizaciones,
                  incluidos los navegantes árabes y las exploraciones europeas.
                  La región ha sido escenario de eventos significativos, desde
                  el comercio de caravanas hasta la presencia de piratas en las
                  costas. Además, la llegada de misioneros y la colonización
                  europea también han dejado una marca en la historia del Sur de
                  Madagascar.
                </p>
                <h2>Geografía y clima</h2>
                <p>
                  El Sur de Madagascar se caracteriza por una geografía
                  asombrosa y un clima diverso que contribuyen a su
                  singularidad. Con vastas extensiones de tierra, la región
                  presenta llanuras extensas, montañas escarpadas y formaciones
                  rocosas únicas, como el Parque Nacional de Isalo, famoso por
                  sus cañones y paisajes de piedra arenisca. Las llanuras del
                  Sur, como el Plateau Mahafaly, ofrecen un escenario
                  impresionante con su vegetación única y la presencia de tumbas
                  decoradas, una expresión distintiva de la cultura Mahafaly. En
                  cuanto al clima, el Sur de Madagascar experimenta un clima
                  tropical con estaciones secas e húmedas. Durante la temporada
                  seca, la región puede presentar paisajes más áridos y una
                  mayor concentración de animales en busca de agua. Por otro
                  lado, la temporada húmeda trae consigo un resurgimiento de la
                  vegetación y una atmósfera más fresca. Además de su belleza
                  natural, la región del Sur tiene una rica historia que se
                  refleja en sus diversas comunidades étnicas, como los
                  Antandroy, Mahafaly y Antanosy. Estas poblaciones han
                  contribuido significativamente a la identidad cultural de la
                  región a lo largo del tiempo. En resumen, el Sur de Madagascar
                  ofrece una combinación única de geografía fascinante y
                  condiciones climáticas que hacen de esta región un destino
                  cautivador para explorar.
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
                      .filter((activity) => activity.region == "Sur")
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
                    !isEmpty(pics) && pics.filter((region) => region.region == "Sur").map((pic) => (
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
            <h2>Algunos circuitos que cubren el Sur de Madagascar</h2>
            <div id="hometourfilter">
              {!isEmpty(tours) &&
                tours
                  .filter((region) => region.region == "Sur")
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

export default Sur;
