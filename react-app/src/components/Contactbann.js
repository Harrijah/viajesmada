import React, { useState, useEffect } from "react";



const Contactbann = () => {
  const [makakposition, setMakakposition] = useState(-10);
  const [baobabposition, setBaobabposition] = useState(110);
  const [scrollvalue, setScrollvalue] = useState(0);

  // _settings.scss
  const handleScroll = () => {
    const scrollpos = window.scrollY;
    const newScrollValue =
      (scrollpos + window.innerHeight) / document.body.offsetHeight;
    setScrollvalue(newScrollValue);

    if (newScrollValue > 0.89) {
      setMakakposition(10);
      setBaobabposition(72);
    } else if (newScrollValue < 0.97) { 
      setMakakposition(-25);
      setBaobabposition(110);
    }
    
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  console.log(scrollvalue);

  return (
    <div className="contactbann">
      <div className="insidecontact">
        <div className="principcontact">
          <h2>Viajar a Madagascar</h2>
          <p>
            Nuestra agencia local y todo el equipo le dan la bienvenida a esta
            página web. Si planea viajar a Madagascar pronto, estamos aquí para
            ayudarle, ofrecerle paquetes turísticos, viajes personalizados o
            solo consejos, si planea viajar por su cuenta. <br />
            No dude en contactarnos a través de los formularios o mensajes
            instantáneos, nos encantaría responderle
          </p>
          <a href="/contacto">Contactarnos</a>
        </div>
        <div className="imageafter" style={{ position: "absolute", left: `${makakposition}%` }}>
          <img src="https://tours.viajes-madagascar.mg/static/Makak.fw_-150x150.png" alt="" />
      </div>
        <div className="imageafter02" style={{ position: "absolute", left: `${baobabposition}%` }}>
          <img src="https://tours.viajes-madagascar.mg/static/12.png" alt="" />
      </div>
      </div>
    </div>
  );
};

export default Contactbann;
