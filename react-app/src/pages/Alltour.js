import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Tour from "../components/Tour";
import { useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";
import Footer from "../components/Footer";

const Alltour = () => {
  const tours = useSelector((state) => state.tourReducer);

  return (
    <div>
      <Navigation />
      <div id="tourlistcontainer">
        <h1>Tous les circuits</h1>
        <div id="tourintrocontainer">
          <p>
            Madagascar es un destino turístico completo que conviene a todos los gustos. Aventura, balneario, naturaleza, cultura, … todos los argumentos se reúnen para que disfruta de todo lo que ofrece la gran isla desde el norte hasta el sur.
            Póngase en contacto con nuestro agente de viajes local para preparar
            su propia excursión a medida en Madagascar. Le proporcionamos toda
            la información necesaria y un presupuesto gratuito según la duración
            de su estadía y el presupuesto de su viaje.
          </p>
        </div>
        <div id="insidecontainer">
          {!isEmpty(tours) &&
            tours.map((tour) => <Tour tour={tour} key={tour.id} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Alltour;
