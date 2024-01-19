import React from "react";

const Tour = ({ tour }) => {
  return (
    <div className="tourcontainer">
      <div className="thumnimg">
        <a href={`/tourpage/${tour.id}`}>
          <div>
            <img
              className="imgthumb"
              src={`http://localhost:8080/uploads/${tour.diapo01}`}
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
          <p>
            Thème : <span>{tour.thematique}</span>
          </p>
          <p>
            Tags : <span>{tour.tags}</span>
          </p>
          {/* <p>Difficulté : <span>
            <img className='difficultyclass' src={`http://localhost:8080/icons/${tour.difficulty}`} alt="difficulté" />
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
        Plus de détails
      </a>
    </div>
  );
};

export default Tour;
