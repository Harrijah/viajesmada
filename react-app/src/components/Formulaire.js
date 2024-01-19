import React from "react";

const Formulaire = (tour) => {
  return (
    <div className="mytourform">
      <input
        type="hidden"
        name="abouttour"
        value={"id circuit: " + tour.id + ", nom circuit : " + tour.nomcircuit}
      />
      <label htmlFor="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre" />
      <label htmlFor="correo">Correo</label>
      <input type="email" name="correo" id="correo" />
      <label htmlFor="whatsapp">Whatsapp</label>
      <input type="email" name="whatsapp" id="whatsapp" />
      <label htmlFor="numeropersonas">Número de personas *</label>
      <input type="text" name="numeropersonas" id="numeropersonas" />
      <label htmlFor="salida">Fecha de salida *</label>
      <input type="date" name="salida" id="salida" />
      <label htmlFor="mensaje">Mensaje</label>
      <textarea
        name="Mensaje"
        id=""
        cols="30"
        rows="5"
        placeholder="Escriba su mensaje aquí."
      ></textarea>
      <input type="submit" value="Enviar" />
    </div>
  );
};

export default Formulaire;
