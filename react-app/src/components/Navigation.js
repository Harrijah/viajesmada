import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { setMenu } from "../actions/menu.action";
import { isEmpty } from "./Utils";

// Navigation.scss
const Navigation = () => {
  const menustate = useSelector((state) => state.menuReducer.tour);
  const prefix = useParams();
  const dispatch = useDispatch();
  const [descubrir, setDescubrir] = useState(false);
  const tours = useSelector((state) => state.tourReducer);
  const [showmymenu, setShowmymenu] = useState(false);
  const [showcircuitos, setShowcircuitos] = useState(false);
  const [showregion, setShowregion] = useState(false);
  useEffect(() => {
    if (
      prefix.tours ||
      prefix.themat ||
      prefix.classique ||
      prefix.thematique ||
      prefix.id
      // prefix.norte
    ) {
      dispatch(setMenu(true));
    } else {
      dispatch(setMenu(false));
    }
    if (
      prefix.norte ||
      prefix.sur ||
      prefix.este ||
      prefix.oeste ||
      prefix.descubrir
    ) {
      setDescubrir(true);
    } else {
      setDescubrir(false);
    }
  }, [prefix]); // dépendance à `prefix`

  const mobilemenu = () => {
    setShowmymenu(!showmymenu);
  }
  const mobilecircuitos = () => {
    setShowcircuitos(!showcircuitos);
  }
  const mobileregion = () => {
    setShowregion(!showregion);
  }

  // _ navigation.scss
  return (
    <div id="navigationcontainer">
      <div id="navigation">
        <NavLink to="/">
          <img
            className="logomenu"
            src="https://viajes-madagascar.mg/logoviajesmada.png"
            alt="Logo Viajes a Madagascar"
          />
        </NavLink>
        <ul>
          <li className="menu01">
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Inicio
            </NavLink>
          </li>
          <li className="menu02">
            <NavLink to="/tours" className={menustate ? "nav-active" : ""}>
              Nuestros circuitos
            </NavLink>
            <ul className="sousmenu01">
              <li className="sousmenu02">
                <div className="testo">
                  <NavLink
                    to="/classique/general"
                    // className={(nav) => (menustate.tour ? activtour() : "")}
                  >
                    Clásicos
                  </NavLink>
                </div>
                <ul className="sousmenu03">
                  {!isEmpty(tours) &&
                    tours
                      .filter((tour) => tour.categorie01 == "classique")
                      .map((tour) => (
                        <li className="sousmenu04" key={tour.id}>
                          <NavLink to={`/classique/${tour.id}`}>
                            {tour.nomcircuit}
                          </NavLink>
                        </li>
                      ))}
                </ul>
              </li>
              <li className="sousmenu02">
                <div className="testo">
                  <NavLink to="/thematique/global">Temáticos</NavLink>
                </div>
                <ul className="sousmenu03">
                  <li className="sousmenu04">
                    <NavLink to={`/thematique/aventure`}>Aventura</NavLink>
                  </li>
                  <li className="sousmenu04">
                    <NavLink to={`/thematique/balneaire`}>Balneario</NavLink>
                  </li>
                  <li className="sousmenu04">
                    <NavLink to={`/thematique/nature`}>Naturaleza</NavLink>
                  </li>
                  <li className="sousmenu04">
                    <NavLink to={`/thematique/culturel`}>Cultural</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="menu02">
            <NavLink
              className={descubrir ? "nav-active" : ""}
              to="/descubrir/descubrir"
            >
              Descubrir
            </NavLink>
            <ul className="sousmenu01">
              <li className="sousmenu02">
                <div className="testo">
                  <NavLink to="/norte/norte">El norte</NavLink>
                </div>
              </li>
              <li className="sousmenu02">
                <div className="testo">
                  <NavLink to="/sur/sur">El sur</NavLink>
                </div>
              </li>
              <li className="sousmenu02">
                <div className="testo">
                  <NavLink to="/este/este">El este</NavLink>
                </div>
              </li>
              <li className="sousmenu02">
                <div className="testo">
                  <NavLink to="/oeste/oeste">El oeste</NavLink>
                </div>
              </li>
            </ul>
          </li>
          <li className="menu01">
            <NavLink
              to="/contacto"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
      <div id="mobilemenu">
        <div id="navigation">
          <NavLink to="/">
            <img
              className="logomenu"
              src="https://viajes-madagascar.mg/logoviajesmada.png"
              alt="Logo Viajes a Madagascar"
            />
          </NavLink>

          <div id="menumenu">
            <div className="menubar" onClick={() => mobilemenu()}>
              <div id="bar01"className={showmymenu ? 'inversebar01' : ''}></div>
              <div id="bar02"className={showmymenu ? 'inversebar02' : ''}></div>
              <div id="bar03"className={showmymenu ? 'inversebar03' : ''}></div>
            </div>
            <ul className={showmymenu ? 'showmymenu' : 'hidemymenu'}>
              <li className="menu01">
                <NavLink
                  to="/"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  Inicio
                </NavLink>
              </li>
              <li className="menu02">
                <NavLink to="/tours" className={menustate ? "nav-active" : ""}>
                  Nuestros circuitos
                </NavLink>
                <button onClick={() => mobilecircuitos()} >
                  <i className="fa fa-chevron-right" style={{ transform: showcircuitos ? "rotate(90deg)" : "" }}></i>
                </button>
                <ul className={showcircuitos ? "sousmenu01" : "hideme"}>
                  <li className="sousmenu02">
                    <div className="testo">
                      <NavLink
                        to="/classique/general"
                        // className={(nav) => (menustate.tour ? activtour() : "")}
                      >
                        Clásicos
                      </NavLink>
                    </div>
                  </li>
                  <li className="sousmenu02">
                    <div className="testo">
                      <NavLink to="/thematique/global">Temáticos</NavLink>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="menu02">
                <NavLink
                  className={descubrir ? "nav-active" : ""}
                  to="/descubrir/descubrir"
                >
                  Descubrir
                </NavLink>
                <button onClick={() => mobileregion()} >
                  <i className="fa fa-chevron-right" style={{ transform: showregion ? "rotate(90deg)" : "" }}></i>
                </button>
                <ul className={showregion ? "sousmenu01" : "hideme"}>
                  <li className="sousmenu02">
                    <div className="testo">
                      <NavLink to="/norte/norte">El norte</NavLink>
                    </div>
                  </li>
                  <li className="sousmenu02">
                    <div className="testo">
                      <NavLink to="/sur/sur">El sur</NavLink>
                    </div>
                  </li>
                  <li className="sousmenu02">
                    <div className="testo">
                      <NavLink to="/este/este">El este</NavLink>
                    </div>
                  </li>
                  <li className="sousmenu02">
                    <div className="testo">
                      <NavLink to="/oeste/oeste">El oeste</NavLink>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="menu01">
                <NavLink
                  to="/contacto"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
