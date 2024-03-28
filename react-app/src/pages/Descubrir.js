import React from "react";
import Navigation from "../components/Navigation";
import { Carousel } from "react-responsive-carousel";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";

// _region.scss
const Descubrir = () => {
    const pics = useSelector((state) => state.picsReducer)
  return (
    <div>
      <div>
        <Navigation />
        <div id="regioncontainer">
          <div className="regionimage"></div>
          {/* Première partie */}
          <div id="regionintrocontainer">
            <div style={{textAlign: "left"}}>
              <h1>Informaciones prácticas.</h1>       
              <h2>Visas y Vuelos</h2>

              <p className="instruct" style={{textAlign: "left"}}>
                Los visados turísticos se emiten ya sea a la llegada al aeropuerto internacional de Ivato (Antananarivo) o a través de las representaciones diplomáticas o consulares en su país. Su tarifa varía según la duración de la estadía. El pasaporte debe tener una validez de 6 meses más allá de la fecha prevista de finalización de la estadía en Madagascar.
                En vuelos de larga distancia, se permiten 2 piezas de equipaje de 23 kg en bodega. Para vuelos regionales, los pasajeros en clase económica tienen permitido un peso total de equipaje facturado de 23 kg.
              </p>
              <h2>Clima</h2>

              <p className="instruct" style={{textAlign: "left"}}>
                En general, Madagascar tiene dos estaciones: una estación húmeda
                y cálida de noviembre a abril, y una estación seca y fresca de
                mayo a octubre. Debido a la geografía de la isla, el clima de
                Madagascar varía según la región:
              </p>
              <div id="tourpartfour">
                <div className="toprightcol">
                  <h2>En las tierras altas, el centro de la isla</h2>
                  <p id="tourdescript">
                    Llueve de mediados de noviembre a finales de marzo con una temperatura media de 23 a 26 grados centígrados. La estación seca (invierno) se extiende de marzo a octubre. Las temperaturas pueden ser muy frescas. Prevea un suéter para las noches. La temperatura a veces desciende a alrededor de 5 grados en las cercanías de Antsirabe, la ciudad más fresca de la isla.
                </p>
                {/* <a href="">Más información</a> */}
                </div>
                <div className="topleftcol">
                    <img style={{borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"}} src="https://tours.viajes-madagascar.mg/uploads/37743367_1897043773667919_794556288196411392_n-272x182.jpg" alt="Antananarivo" />    
                </div>
              </div>
              <div id="tourpartfive">
                <div className="topleftcol">
                    <img style={{borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"}} src="https://tours.viajes-madagascar.mg/uploads/Diapo-1.jpg" alt="Antananarivo" />    
                </div>
                <div className="toprightcol">
                  <h2>La costa oeste</h2>
                  <p id="tourdescript">
                  Es la costa más soleada. Las lluvias son escasas y se concentran entre enero y abril. En el sur, alrededor de Tuléar, el clima es semiárido. En el norte, el clima es templado y cálido durante todo el año. Solo llueve en verano, pero la lluvia solo cae al final del día.
                  </p>
                <a href="https://viajes-madagascar.mg/oeste/oeste">Más información</a>
                </div>
              </div>
              <div id="tourpartfour">
                <div className="toprightcol">
                  <h2>La costa este</h2>
                  <p id="tourdescript">
                    Llueve todo el año, con menos precipitaciones de septiembre a noviembre. La selva tropical se encuentra en esta parte de la isla. La temperatura es bastante cálida.
                  </p>
                <a href="https://viajes-madagascar.mg/este/este">Más información</a>
                </div>
                <div className="topleftcol">
                    <img style={{borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"}} src="https://tours.viajes-madagascar.mg/uploads/Diapo-Est-1.jpg" alt="Antananarivo" />    
                </div>
              </div>
              <div id="tourpartfive">
                <div className="topleftcol">
                    <img style={{borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"}} src="https://tours.viajes-madagascar.mg/uploads/Diapo-accueil-3.jpg" alt="Antananarivo" />    
                </div>
                <div className="toprightcol">
                  <h2>Clima en el sur de Madagascar:</h2>
                  <p id="tourdescript">
                  <b>Temporada seca</b>: De abril a octubre, con cielos soleados y temperaturas cálidas que oscilan entre los 20°C y los 30°C. La humedad es baja, lo que hace que el clima sea agradable y seco.
                    </p>
                    <p><b>Temporada húmeda</b>:De noviembre a marzo, con lluvias abundantes y temperaturas cálidas que oscilan entre los 25°C y los 35°C. La humedad es alta, lo que puede hacer que el clima sea incómodo para algunas personas.</p>
                <a href="https://viajes-madagascar.mg/sur/sur">Más información</a>
                </div>
            </div>
              <div id="tourpartfour">
                <div className="toprightcol">
                  <h2>La costa norte</h2>
                  <p id="tourdescript">
                    El clima en el norte de Madagascar es tropical, caracterizado por altas temperaturas y una estación de lluvias durante los meses de verano. Las precipitaciones son abundantes, lo que contribuye a la exuberante vegetación y la diversidad de la vida silvestre en la región.
                  </p>
                <a href="https://viajes-madagascar.mg/norte/norte">Más información</a>
                </div>
                <div className="topleftcol">
                    <img style={{borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"}} src="https://tours.viajes-madagascar.mg/uploads/Diapo-Nord-3.jpg" alt="Antananarivo" />    
                </div>
              </div>
                   
            </div>

            <div className="regioncol">
              <div className="leftcol">
                    <h2>A diario</h2>
                    <p style={{textAlign: "left"}}>Los cajeros automáticos están presentes en todas las principales ciudades de la isla, y los grandes hoteles aceptan el pago con tarjeta Bleu o MasterCard. Hay oficinas de cambio en el aeropuerto de la capital, donde el valor de las monedas como el Euro y el Dólar varía según las fluctuaciones de los tipos de cambio. La moneda nacional utilizada en Madagascar es el Ariary (equivalente a 5 antiguos francos malgaches). En los mercados locales, regatear es todavía común, por lo que es preferible llevar billetes pequeños, tanto para pequeñas compras como para propinas diversas.</p><br />
                    <p style={{textAlign: "left"}}>Siempre es preferible viajar ligero pero protegido del sol, especialmente para hacer senderismo. No olvides tu botiquín de primeros auxilios, además de tus medicamentos habituales, incluyendo antihistamínicos, antibióticos, analgésicos, protectores solares, repelentes y calmantes.</p>

                <div className="activitymap"></div>
              </div>
              <div id="rightcol">
                <h2>Algunas fotos de camino</h2>

                <Carousel
                  showThumbs={true}
                  showStatus={false}
                  showIndicators={false}
                  autoPlay={true}
                  infiniteLoop={true}
                >
                  {!isEmpty(pics) &&
                      pics
                        // .filter((region) => region.region == "Norte")
                        .map((pic) => (
                          <div key={pic.id}>
                            <img
                              className="carouselimageradius"
                              src={`https://tours.viajes-madagascar.mg/uploads/${pic.image}`}
                            />
                          </div>
                        ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        
        <Footer />
      </div>
    </div>
  );
};

export default Descubrir;
