import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import { isEmpty } from "../components/Utils";
import Tour from "../components/Tour";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Spots from "../components/Spots";

// _tour.scss
const Thematour = () => {
  const tours = useSelector((state) => state.tourReducer);
  const thema = useParams();
  // console.log(thema);
  return (
    <div>
      <Navigation />
      <div id="tourlistcontainer">
        <div className="randomimage">

        </div>
        <h1>Circuitos temáticos</h1>
        <div id="tourintrocontainer">
          <p>Aventura, naturaleza, cultura, playas, viaje de novios, … Conoce la belleza de la isla de Madagascar de acuerdo a sus intereses. Disfruta de sus vacaciones en Madagascar para revivir sus pasiones: deportes acuáticos, buceo, senderismo, campamentos, visitas de la población local, descubrimiento de la naturaleza, …  . Discubra nuestros paquetes de viaje todo incluido.</p>
        </div>
        <div id="insidecontainer">
          {!isEmpty(tours) &&
            tours
              .filter((tour) => tour.thematique == thema.themat)
              .filter((tour) => tour.nombrejours !== '50') // Filtrer les tours où nombrejours n'est pas égal à zéro
              .map((tour) => <Tour tour={tour} key={tour.id} />)}
          
        </div>
      </div>
      <Spots />
      <Footer />
    </div>
  );
};

export default Thematour;
