import React from "react";

const Footer = () => {
  return (
    <div id="footercontainer">
      <div className="footerrs">
        <a href="https://www.facebook.com/">
          <i className="fab fa-facebook footerfa"></i>
        </a>
        <a href="https://www.linkedin.com/">
          <i className="fab fa-linkedin footerfa"></i>
        </a>
      </div>

      <div className="footergrid">
        <div className="footertours">
          <h3>Viajes a Madagascar</h3>
          <ul>
            <li>
              <a href="#">Viajes tematicos</a>
            </li>
            <li>
              <a href="#">Circuitos clasicos</a>
            </li>
            <li>
              <a href="#">Viaje a medida</a>
            </li>
            <li>
              <a href="#">Viajes organizados</a>
            </li>
          </ul>
        </div>
        <div className="footerdestinations">
          <h3>Hoteles a Madagascar</h3>
          <ul>
            <li>
              <a href="#">Visitar al Norte</a>
            </li>
            <li>
              <a href="#">Visitar al Este</a>
            </li>
            <li>
              <a href="#">Visitar al Sur</a>
            </li>
            <li>
              <a href="#">Visitar al Oeste</a>
            </li>
          </ul>
        </div>
        <div className="footercontact">
          <h3> Agencia de viajes - Viajes Mada</h3>
          <h4>Tour Operador receptivo</h4>
          <p>
            Licencia n° 018 – MINTOUR / SG / DGDT / DAIT / SAT – EDBM.18 Nif:
            2002862118 – Stat: 79120112017006666
          </p>
          <ul>
            <li><span style={{fontWeight: 'bold'}}>Dirección :</span> Lot IAV 310 C Iavoloha Antananarivo 102</li>
            <li><span >Madagascar</span></li>
            <li><span style={{ fontWeight: 'bold'}}>Teléfono :</span> +261 (0)32 12 667 33</li>
            <li><span style={{fontWeight: 'bold'}}>E-mail :</span> office@viajes-mada.com</li>
            <li><span style={{fontWeight: 'bold'}}>Whatsapp :</span> +261 (0)34 45 844 92</li>
            <li><span style={{fontWeight: 'bold'}}>Skype :</span> Viajes Mada</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
