import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Contactbann from "../components/Contactbann";
import Toursearchengine from "../components/Toursearchengine";
import Activities from "../components/Activities";
import { useNavigate } from 'react-router-dom';

// home.scss
const Home = () => {
  const history = useNavigate();

  const goto = (destination) => {
    history(`/${destination}`);
  }

  // _activities.scss
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
              <h2>Su socio de confianza para sus viajes a Madagascar.</h2>
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

        <div id="textbann">
          <div className="internbann">
            <div className="leftpart">
              <p>Descubre los tesoros ocultos de la naturaleza ...</p>
            </div>
            <div className="rightpart">
              <div>
                <h2>¿Por qué ir a Madagascar?</h2>
                <p>
                  Madagascar es un destino ideal para sus vacaciones, su luna de
                  miel, o también viaje con niños. Los paisajes y las
                  atracciones turísticas son variadas, si elija un viaje al
                  norte de Madagascar, un viaje al sur de Madagascar, un viaje
                  al este de Madagascar, o un viaje al oeste de Madagascar. En
                  general, los paquetes turísticos le permiten descubrir la
                  cultura y la población malgache, según los grupos étnicos de
                  las regiones que cruzamos, parques nacionales, lugares
                  turísticos espléndidos, para terminar en hermosas playas
                  costeras. Sin embargo, es posible elegir solo una estancia en
                  la playa, un circuito de aventura, … según sus intereses.
                </p>
              </div>
            </div>
          </div>
        </div>

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
                      Descubre el norte de Madagascar, un destino encantador con
                      paisajes variados y atractivos turísticos únicos. Desde
                      exuberantes selvas hasta impresionantes costas, la región
                      ofrece una experiencia inolvidable. Sumérgete en la
                      biodiversidad única y disfruta de la hospitalidad local en
                      esta joya del Índico.{" "}
                    </p>
                    <button onClick={() => goto('norte')}>Descubrir</button>
                  </div>
                </div>
              </div>
              <div className="surecentro">
                <div className="insidetext">
                  <div className="imgctnr"></div>
                  <div className="textctnr">
                    <h3>El Sur</h3>
                    <p>
                      Descubre el corazón y el sur de Madagascar en una
                      experiencia única que combina ricos paisajes y una
                      fascinante cultura. Desde las tierras altas centrales
                      hasta la asombrosa Reserva de Isalo, sumérgete en la
                      diversidad geográfica y la hospitalidad malgache. Explora
                      paisajes cársticos, cañones y la rica historia de esta
                      región única.{" "}
                    </p>
                    <button onClick={() => goto('sur')}>Descubrir</button>
                  </div>
                </div>
              </div>
              <div className="este">
                <div className="insidetext">
                  <div className="imgctnr"></div>
                  <div className="textctnr">
                    <h3>El Este</h3>
                    <p>
                      Embárcate en una aventura única en el este de Madagascar,
                      donde la exuberante selva tropical se encuentra con playas
                      prístinas. Descubre la biodiversidad única del Parque
                      Nacional de Andasibe-Mantadia, hogar de lémures y especies
                      singulares. Explora las maravillas naturales y culturales
                      de esta región fascinante del Índico.{" "}
                    </p>
                    <button onClick={() => goto('este')}>Descubrir</button>
                  </div>
                </div>
              </div>
              <div className="oeste">
                <div className="insidetext">
                  <div className="imgctnr"></div>
                  <div className="textctnr">
                    <h3>El Oeste</h3>
                    <p>
                      Explora el oeste de Madagascar, un paraíso para los
                      amantes de la naturaleza con sus paisajes impresionantes y
                      biodiversidad única. Desde el Parque Nacional de Baobabs
                      hasta las reservas marinas, esta región ofrece una
                      experiencia inolvidable. Descubre los baobabs centenarios
                      y la cultura local en esta fascinante parte de la isla.{" "}
                    </p>
                    <button onClick={() => goto('oeste')}>Descubrir</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="thematicsbanner">
          <div className="thematicscontainer">
            <h2>Viajes temáticos</h2>
            <p>
              Madagascar es un destino turístico completo que conviene a todos
              los gustos. Aventura, balneario, naturaleza, cultura, … todos los
              argumentos se reúnen para que disfruta de todo lo que ofrece la
              gran isla desde el norte hasta el sur.
            </p>
            <div className="thematicsgrid">
              <div className="clasico">
                <a href="http://localhost:3000/classique/general">
                  {/* <span> */}
                  <h3>Circuitos clasicos</h3>
                  <p>Descubre nuestras rutas clásicas</p>
                  {/* </span> */}
                </a>
              </div>
              <div className="naturaleza">
                <a href="http://localhost:3000/thematique/nature">
                  {/* <div> */}
                  <h3>Naturaleza e vida sylvestre</h3>
                  <p>
                    Descubre nuestras rutas bajo el signo de la exploración de
                    la naturaleza
                  </p>
                  {/* </div> */}
                </a>
              </div>
              <div className="playas">
                <a href="http://localhost:3000/thematique/balneaire">
                  {/* <div> */}
                    <h3>Balneario</h3>
                    <p>Descubre las playas más hermosas de Madagascar.</p>
                  {/* </div> */}
                </a>
              </div>
              <div className="lunademiel">
                <a href="http://localhost:3000/thematique/balneaire">
                  {/* <div> */}
                    <h3>Luna de miel</h3>
                    <p>Haz que tu luna de miel sea la más original de todas.</p>
                  {/* </div> */}
                </a>
              </div>
              <div className="aventura">
                <a href="http://localhost:3000/thematique/aventure">
                  {/* <div> */}
                    <h3>Aventura</h3>
                    <p>¿Listos para la aventura? Sigan al guía.</p>
                  {/* </div> */}
                </a>
              </div>
              <div className="senderismo">
                <a href="http://localhost:3000/thematique/culturel">
                  {/* <div> */}
                    <h3>Cultural</h3>
                    <p>
                      Explora las maravillas de Madagascar en profundidad con
                      nuestros circuitos de trekking.
                    </p>
                  {/* </div> */}
                </a>
              </div>
            </div>
          </div>
        </div>

        <Activities />

        <Contactbann />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
