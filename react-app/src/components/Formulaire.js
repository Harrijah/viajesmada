import React, { useEffect, useState } from "react";

const Formulaire = ({ tour }) => {


  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [numeropersonas, setNumeropersonas] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [formok, setFormok] = useState(false);

  
  useEffect(() => {
    if (nombre.length > 3 && correo.length > 10 && whatsapp.length > 6 && numeropersonas.length > 0 && mensaje) {
      setFormok(true);
    } else {
      setFormok(false);
    }
  }, [nombre, correo, whatsapp, numeropersonas, mensaje]);
  

  return (
    <div className="mytourform">
      <form>
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
      <label htmlFor="nombre">Nombre</label>*
      <input type="text" name="nombre" id="nombre" onChange={(e) => setNombre(e.target.value)} placeholder="Ejemplo: Paolo" />
      <label htmlFor="correo">Correo</label>*
      <input type="email" name="correo" id="correo" onChange={(e) => setCorreo(e.target.value)}  placeholder="Ejemplo: paul@mail.com" />
      <label htmlFor="whatsapp">Telefono / Whatsapp</label>*
      <input type="text" name="whatsapp" id="whatsapp" onChange={(e) => setWhatsapp(e.target.value)}  placeholder="Ejemplo: +32 0 01 02 03 04" />
      <label htmlFor="numeropersonas">Número de personas </label>*
      <input type="text" name="numeropersonas" id="numeropersonas" onChange={(e) => setNumeropersonas(e.target.value)} placeholder="Ejemplo: 4" />
      <label htmlFor="salida">Fecha de salida </label>
      <input type="date" name="salida" id="salida" />
      <label htmlFor="mensaje">Mensaje</label>*
      <textarea
        name="mensaje"
        id="mensaje"
        cols="30"
        rows="5"
        onChange={(e) => setMensaje(e.target.value)} 
        placeholder="Escriba su mensaje aquí."
      ></textarea>
        {(formok) ? <input type="submit" value="Enviar" /> : <span style={{ display:'block', width: '100%', minHeight: '55px', background: '#e6d7b1', color:'grey', textAlign: 'center', paddingTop: '15px', borderRadius: '5px'}}>Por favor, llene los campos con *</span>}
        </form>
    </div>
  );
};

export default Formulaire;
