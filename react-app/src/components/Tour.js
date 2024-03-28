import React from "react";

// CSS : Tourthumbs.scss
const Tour = ({ tour }) => {
  return (
    <div className="tourcontainer">
      <div className="thumnimg" id={tour.id}>
        <a href={`/tourpage/${tour.id}`}>
          <div>
            <img
              className="imgthumb"
              src={`https://tours.viajes-madagascar.mg/uploads/${tour.diapo01}`}
              alt={tour.nomcircuit}
            />
          </div>
          <h3>{tour.nomcircuit}</h3>
        </a>
      </div>
      <div className="tourinfos">
        <div className="tourcolone">
          <p>
            Région : <span>{tour.region}</span>
          </p>
          {/* <p>
            Tema : <span>{tour.thematique}</span>
          </p> */}
          <p>
            Etiquetas : <span>{tour.tags}</span>
          </p>
          {/* <p>Dificultad : <span>
            <img className='difficultyclass' src={`https://tours.viajes-madagascar.mg/public/icons/${tour.difficulty}`} alt="difficulté" />
          </span>
          </p> */}
        </div>
        <div className="tourcoltwo">
          <div>
            <p>
              <span className="daynumber">{tour.nombrejours}</span> dias
            </p>
            <p>
              Desde <span className="tourprice"><br />{tour.prix} €</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <a href={`/tourpage/${tour.id}`} className="tourbtn">
        Más detalles
      </a>
    </div>
  );
};

export default Tour;
