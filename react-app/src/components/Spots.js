import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const Activities = () => {
  const slides = useSelector((state) => state.activityReducer);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imganimation, setImganimation] = useState("");
  const [txtanimation, setTxtanimation] = useState("");

  const prevSlide = () => {
    setTimeout(() => {
      setCurrentSlide((Number(currentSlide) - 1 + slides.length) % slides.length);
    }, 1000);
    setImganimation("return");
    setTxtanimation("showtext");
  };

  const nextSlide = () => {
    setTimeout(() => {
      setCurrentSlide((Number(currentSlide)  + 1) % slides.length);
    }, 1000);
    setImganimation("return");
    setTxtanimation("showtext");
  };

  useEffect(() => {
    setImganimation("imgslide");
    setTxtanimation("txtdrop");
  }, [currentSlide]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 10000); // Change slide every 5 seconds

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, [currentSlide]);


  // _spots.scss
  return (
    <div id="spots">
      <div className="activitycontainer">
        <h2>Algunos puntos de interés turístico en Madagascar</h2>
        <ul>
          <li>
            Madagascar, es más de 100 000 especies faunísticas, 19 000 especies
            florísticas repartidas en la naturaleza y en los parques nacionales,
            con una tasa de endemicidad de más del 80%.
          </li>
          <li>
            Madagascar, es más de 5000 km de costa, playas paradisíacas, islas
            vírgenes y una excepcional biodiversidad submarina.
          </li>
          <li>
            Madagascar es un concentrado de puntos de interés turísticos
            naturales, como el callejón de los baobabs, el Tsingy, las cascadas
            y piscinas naturales, y varias propiedades inscritas en la Lista del
            Patrimonio Mundial de la UNESCO.
          </li>
          <li>
            Madagascar es 18 grupos étnicos, una cultura y productos artesanales
            originales, una gastronomía y muchos más …
          </li>
          <li>
            Madagascar, son varios hoteles de alta gama de 4 y 3 estrellas
            repartidos por toda la isla, proponiendo actividades diversificadas.
          </li>
        </ul>
        <div className="insideactivities">
          <div className="bouton01">
            <button onClick={() => prevSlide()}>
              <i className="fa fa-chevron-left"></i>
            </button>
          </div>
          <div className="persocarousel">
            <div className="slide">
              <div className="leftpart">
                <div className={txtanimation}>
                  <h3>{!isEmpty(slides) && slides[currentSlide].title}</h3>
                  <p>{!isEmpty(slides) && slides[currentSlide].description}</p>
                </div>
              </div>
              <div className="rightpart">
                <img
                  src={`https://tours.viajes-madagascar.mg/uploads/${!isEmpty(slides) && slides[currentSlide].image}`}
                  alt=""
                  className={imganimation}
                />
              </div>
            </div>
          </div>
          <div className="bouton02">
            <button onClick={() => nextSlide()}>
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
