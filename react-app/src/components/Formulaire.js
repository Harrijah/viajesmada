import React from "react";

const Formulaire = ({ tour }) => {
  return (
    <div className="mytourform">
      <form action="https://tours.viajes-madagascar.mg/getinfos" method="post">
      <input
        type="hidden"
        name="tourid"
        value={tour.id}
      />
      <input
        type="hidden"
        name="abouttour"
        value={"Nom circuit : " + tour.nomcircuit}
      />
      <label htmlFor="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre" placeholder="Ejemplo: Paolo" />
      <label htmlFor="correo">Correo</label>
      <input type="email" name="correo" id="correo" placeholder="Ejemplo: paul@mail.com" />
      <label htmlFor="whatsapp">Telefono / Whatsapp</label>
      <input type="text" name="whatsapp" id="whatsapp" placeholder="Ejemplo: +32 0 01 02 03 04" />
      <label htmlFor="numeropersonas">Número de personas *</label>
      <input type="text" name="numeropersonas" id="numeropersonas" placeholder="Ejemplo: 4" />
      <label htmlFor="salida">Fecha de salida *</label>
      <input type="date" name="salida" id="salida" />
      <label htmlFor="mensaje">Mensaje</label>
      <textarea
        name="mensaje"
        id="mensaje"
        cols="30"
        rows="5"
        placeholder="Escriba su mensaje aquí."
      ></textarea>
        <input type="submit" value="Enviar" />
        </form>
    </div>
  );
};

export default Formulaire;
