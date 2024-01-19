import React from "react";

const Tour = ({ tour }) => {
  return (
    <div className="tourthumbcontainer">
      <div className="thumnimg">
        <a href={`/tourpage/${tour.id}`}>
          <img
            className="imgthumb"
            src={`http://localhost:8080/uploads/${tour.diapo01}`}
            alt={tour.nomcircuit}
          />
          <h3>{tour.nomcircuit}</h3>
        </a>
      </div>
      <div className="tourinfos">
        <div className="tourcolone">
          <p>Région : {tour.region}</p>
          <p>Thème : <span>{tour.thematique}</span></p>
          <p>Tags : <span>{tour.tags}</span></p>
        </div>
        <div className="tourcoltwo">
          <p><span className="daynumber">{tour.nombrejours}</span> dias</p>
          <a href={`/tourpage/${tour.id}`} className="tourbtn"> Plus de détails</a>
        </div>
      </div>
    </div>
  );
};

export default Tour;