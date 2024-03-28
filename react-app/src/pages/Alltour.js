import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Tour from "../components/Tour";
import { useSelector } from "react-redux";
import { isEmpty } from "../components/Utils";
import Footer from "../components/Footer";
import TourSearch from "../components/TourSearch";
import Contactbann from "../components/Contactbann";
import Spots from "../components/Spots";

// CSS : _tour.css
const Alltour = () => {
  const tours = useSelector((state) => state.tourReducer);

  return (

    <div>
      <Navigation />
      <div id="tourlistcontainer">
        <div className="randomimage">

        </div>
        <h1>Todos los circuitos</h1>
        <div id="tourintrocontainer">
          <p>
          Nuestra agencia de viajes se complace en darle la bienvenida y ayudarle a preparar para su próxima estancia en Madagascar. Ofrecemos paquetes al mejor precio, dependiendo de la elección de su viaje o del tema de su viaje. Ofrecemos tours clásicos, que siempre hacen nuestras mejores ventas en Madagascar, pero también viajes a medida y rutas combinadas, según la duración de sus vacaciones, su presupuesto y sus intereses
          </p>
        </div>
        <TourSearch />
        {/* <div id="insidecontainer">
          {!isEmpty(tours) &&
            tours.map((tour) => <Tour tour={tour} key={tour.id} />)}
        </div> */}
      </div>
      
      <Spots />
      <Contactbann />
      <Footer />
    </div>
  );
};

export default Alltour;
