import React from "react";
import { isEmpty } from "../components/Utils";
useSelector
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";




const Contacto = () => {
    const mytour = useSelector((state) => state.oneTourReducer);
    const pics = useSelector((state) => state.picsReducer);

  return (
    <div>
      <Navigation />
      <div id="tourlistcontainer">
        <div className="randomimage"></div>
        <div id="tourintrocontainer">
          <div>
            <h1>Contactarnos</h1>
          </div>
          <p style={{textAlign: "left"}}>
            Viajes Mada es un Tour Operador con un enfoque humano, cuyo objetivo
            es organizar para usted un viaje exitoso en la gran isla. Con
            nuestra experiencia, tanto en productos turísticos como en servicios
            ofrecidos, todas nuestras prestaciones y nuestro trabajo convergen
            hacia una única visión: ofrecerle una estancia agradable y memorable
            en el país.
          </p>
          <p style={{textAlign: "left"}}>
            Nuestro equipo está compuesto por profesionales del turismo, desde
            agentes de viaje en la oficina central hasta guías/choferes
            acompañantes que se encargarán de su satisfacción y bienestar
            durante todo su tiempo de vacaciones en Madagascar. Y dado que el
            éxito de cualquier viaje comienza con una buena organización, Viajes
            Madagascar no pasa por alto ningún detalle que marque la diferencia:
            desde nuestra flota de vehículos hasta la selección de los mejores
            hoteles, pasando por la elaboración del programa y la programación
            de las actividades según el ritmo y los intereses de cada uno.
          </p>
        </div>

        <div id="insidecontainer" className="">
            <div className="carousel">
              <img className="contact" style={{borderRadius: "5px",  margin: "20px auto 30px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"}} src="https://tours.viajes-madagascar.mg/uploads/IMG_20181104_091536.jpg" alt="" />
            </div>
          <div id="tourform" style={{marginBottom: "30px"}}>
            <h2>Pedir información</h2>
            <div className="mytourform">
      <form action="https://tours.viajes-madagascar.mg/getinfos" method="post">
            <input
              type="hidden"
              name="tourid"
              value='0'
            />
            <input
                type="hidden"
                name="abouttour"
                value='Page de contact'
            />
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Ejemplo: Paolo" />
            <label htmlFor="correo">Correo</label>
            <input type="email" name="correo" id="correo" placeholder="Ejemplo: paolo@mail.com" />
            <label htmlFor="whatsapp">Telefono / Whatsapp</label>
            <input type="text" name="whatsapp" id="whatsapp" placeholder="Ejemplo: +32 0 01 02 03 04" />
            {/* <label htmlFor="numeropersonas">Número de personas *</label> */}
            <input type="hidden" name="numeropersonas" id="numeropersonas" value='0' placeholder="Ejemplo: 4" />
            {/* <label htmlFor="salida">Fecha de salida *</label> */}
            <input type="hidden" name="salida" value='0' id="salida" />
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
                name="mensaje"
                id=""
                cols="30"
                rows="5"
                placeholder="Escriba su mensaje aquí."
            ></textarea>
            <input type="submit" value="Enviar" />
        </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
