import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Contactbann from "../components/Contactbann";
import Toursearchengine from "../components/Toursearchengine";
import Activities from "../components/Activities";

const Home = () => {

  return (
    <div>
      <Navigation />
      <div id="principalcontainer">
        <div id="ppltitle">
          <div id="principalimage">
            <div id="maintitle">
              <h1>
                Viajes <span>a Madagascar</span>
              </h1>
              <h2>
                Votre partenaire de confiance pour vos voyages à Madagascar
              </h2>
            </div>
            {/* <div className="leftpart">
              <div>
                <p>
                  <span>
                    <i className="fa fa-map-marker-alt"></i>
                  </span>
                  Nuestra agencia local y todo el equipo le dan la bienvenida a
                  esta pagina web. Si planea viajar a Madagascar pronto, estamos
                  aquí para ayudarle, ofrecerle paquetes turísticos, viajes
                  personalizados o solo consejos, si planea viajar por su
                  cuenta.
                </p>
              </div>
            </div>
            <div className="rightpart"></div> */}
          </div>
        </div>
      </div>
      <div className="stdcontainer">
        <Toursearchengine />

        <div id="whattosee">
          <div className="whattoseecontainer">
            <h2>¿Qué ver a Madagascar?</h2>
            <div className="regioncontainer">
              <div className="norte">
                <div className="insidetext">
                  <div className="imgctnr"></div>
                  <div className="textctnr">
                    <h3> El Norte</h3>
                    <p>
                      Madagascar es un destino ideal para sus vacaciones, su
                      luna de miel, o también viaje con niños. Los paisajes y
                      las atracciones turísticas son variadas, si elija un viaje
                      al norte de Madagascar, un viaje al sur de Madagascar, un
                      viaje al este de Madagascar, o un viaje al oeste de
                      Madagascar.{" "}
                    </p>
                    <button>Découvrir</button>
                  </div>
                </div>
              </div>
              <div className="surecentro">
                <div className="insidetext">
                  <div className="imgctnr"></div>
                  <div className="textctnr">
                    <h3>El Sur</h3>
                    <p>
                      Madagascar es un destino ideal para sus vacaciones, su
                      luna de miel, o también viaje con niños. Los paisajes y
                      las atracciones turísticas son variadas, si elija un viaje
                      al norte de Madagascar, un viaje al sur de Madagascar, un
                      viaje al este de Madagascar, o un viaje al oeste de
                      Madagascar.{" "}
                    </p>
                    <button>Découvrir</button>
                  </div>
                </div>
              </div>
              <div className="este">
                <div className="insidetext">
                  <div className="imgctnr"></div>
                  <div className="textctnr">
                    <h3>El Este</h3>
                    <p>
                      Madagascar es un destino ideal para sus vacaciones, su
                      luna de miel, o también viaje con niños. Los paisajes y
                      las atracciones turísticas son variadas, si elija un viaje
                      al norte de Madagascar, un viaje al sur de Madagascar, un
                      viaje al este de Madagascar, o un viaje al oeste de
                      Madagascar.{" "}
                    </p>
                    <button>Découvrir</button>
                  </div>
                </div>
              </div>
              <div className="oeste">
                <div className="insidetext">
                  <div className="imgctnr"></div>
                  <div className="textctnr">
                    <h3>El Oeste</h3>
                    <p>
                      Madagascar es un destino ideal para sus vacaciones, su
                      luna de miel, o también viaje con niños. Los paisajes y
                      las atracciones turísticas son variadas, si elija un viaje
                      al norte de Madagascar, un viaje al sur de Madagascar, un
                      viaje al este de Madagascar, o un viaje al oeste de
                      Madagascar.{" "}
                    </p>
                    <button>Découvrir</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="thematicsbanner">
          <div className="thematicscontainer">
            <h2>Voyages à thème</h2>
            <p>Madagascar es un destino turístico completo que conviene a todos los gustos. Aventura, balneario, naturaleza, cultura, … todos los argumentos se reúnen para que disfruta de todo lo que ofrece la gran isla desde el norte hasta el sur.</p>
            <div className="thematicsgrid">
              <div className="clasico">
                <div>
                  <h3>Circuitos clasicos</h3>
                  <p>Découvrez nos circuits classiques</p>
                </div>
              </div>
              <div className="naturaleza">
                <div>
                  <h3>Naturaleza e vida sylvestre</h3>
                  <p>Découvrez nos circuits sous le signe de la découverte de la nature</p>
                </div>
              </div>
              <div className="playas">
                <div>
                  <h3>Balneario</h3>
                  <p>Découvrez les plus belles plages de Madagascar</p>
                </div>
              </div>
              <div className="lunademiel">
                <div>
                  <h3>Luna de miel</h3>
                  <p>Faites de votre lune de miel, la plus belle de toutes</p>
                </div>
              </div>
              <div className="aventura">
                <div>
                  <h3>Aventura</h3>
                  <p>Prêt pour l'aventure ? Suivez le guide</p>
                </div>
              </div>
              <div className="senderismo">
                <div>
                  <h3>Senderismo</h3>
                  <p>Découvrez les merveilles de Madagascar en profondeur avec nos circuits trekking</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="textbann">
          <div className="internbann">
            <div className="leftpart">
              <p>Découvrez les trésors de la nature ...</p>
            </div>
            <div className="rightpart">
              <div>
              <h2>¿Por qué ir a Madagascar?</h2>
              <p>Madagascar es un destino ideal para sus vacaciones, su luna de miel, o también viaje con niños. Los paisajes y las atracciones turísticas son variadas, si elija un viaje al norte de Madagascar, un viaje al sur de Madagascar, un viaje al este de Madagascar, o un viaje al oeste de Madagascar. En general, los paquetes turísticos le permiten descubrir la cultura y la población malgache, según los grupos étnicos de las regiones que cruzamos, parques nacionales, lugares turísticos espléndidos, para terminar en hermosas playas costeras. Sin embargo, es posible elegir solo una estancia en la playa, un circuito de aventura, … según sus intereses.</p>
            </div>
              </div>
          </div>
        </div>

        <Activities />

        {
          <Contactbann />
        }
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
