import React from "react";



// for the tour page
const Tour = ({ tour }) => {
  return (
    <div className="tourthumbcontainer">
      <div className="thumnimg">
        <a href={`/tourpage/${tour.id}`}>
          <img
            className="imgthumb"
            src={`https://tours.viajes-madagascar.mg/uploads/${tour.diapo01}`}
            alt={tour.nomcircuit}
          />
          <h3>{tour.nomcircuit}</h3>
        </a>
      </div>
      <div className="tourinfos">
        <div className="tourcolone">
          <p>Région : {tour.region}</p>
          {/* <p>Tema : <span>{tour.thematique}</span></p> */}
          <p>
            Etiquetas : <span>{tour.tags}</span>
          </p>
        </div>
        <div className="tourcoltwo">
          <p>
            <span className="daynumber">{tour.nombrejours}</span> dias
          </p>
          <a href={`/tourpage/${tour.id}`} className="tourbtn">
            {" "}
            Más detalles
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tour;
