import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import { isEmpty } from "../components/Utils";
import Tour from "../components/Tour";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Spots from "../components/Spots";

const Categotour = ({ categorie }) => {
  const id = useParams();
  // console.log(id);

  const tours = useSelector((state) => state.tourReducer);
  return (
    <div>
      <Navigation />
      <div id="tourlistcontainer">
        <div className="randomimage">

        </div>
        <div id="tourintrocontainer">
          <div><h1>Viajar a Madagascar</h1></div>
          <p>
          Aventura, naturaleza, cultura, playas, viaje de novios, … Conoce la belleza de la isla de Madagascar de acuerdo a sus intereses. Disfruta de sus vacaciones en Madagascar para revivir sus pasiones: deportes acuáticos, buceo, senderismo, campamentos, visitas de la población local, descubrimiento de la naturaleza, …  . Discubra nuestros paquetes de viaje todo incluido.
          </p>
        </div>

        <div id="insidecontainer">
          {!isEmpty(tours) &&
            tours
              .filter((tour) => tour.categorie01 == categorie)
              .filter((tour) => tour.nombrejours != '0') 
              .map((tour) => <Tour tour={tour} key={tour.id} />)}
        </div>
      </div>
      <Spots />
      <Footer />
    </div>
  );
};

export default Categotour;
