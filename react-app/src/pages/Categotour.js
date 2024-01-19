import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import { isEmpty } from "../components/Utils";
import Tour from "../components/Tour";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const Categotour = ({ categorie }) => {
  const id = useParams();
  // console.log(id);

  const tours = useSelector((state) => state.tourReducer);
  return (
    <div>
      <Navigation />
      <div id="tourlistcontainer">
        <div id="tourintrocontainer">
          <div><h1>Circuits classiques</h1></div>
          <p>
            Tenemos 4 circuitos turísticos clásicos a Madagascar, según los
            puntos cardinales: el circuito clásico del Norte, el circuito
            clásico del Sur, el circuito clásico al Este y el circuito clásico
            al Oeste de Madagascar. En efecto, hemos reunido para usted lo mejor
            de Madagascar a través de estos 4 circuitos turísticos clásicos
            elaborados minuciosamente, adaptados y accesibles para todos.
          </p>
        </div>

        <div id="insidecontainer">
          {!isEmpty(tours) &&
            tours
              .filter((tour) => tour.categorie01 == categorie)
              .map((tour) => <Tour tour={tour} key={tour.id} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categotour;
