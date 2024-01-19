import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { setMenu } from "../actions/menu.action";

const Navigation = () => {
  const menustate = useSelector((state) => state.menuReducer.tour);
  const prefix = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      prefix.tours ||
      prefix.themat ||
      prefix.classique ||
      prefix.thematique ||
      prefix.id
    ) {
      dispatch(setMenu(true));
    } else {
      dispatch(setMenu(false));
    }
  }, [prefix]); // dépendance à `prefix`

  return (
    <div id="navigationcontainer">
      <div id="navigation">
        <NavLink to="/">
          <img
            className="logomenu"
            src="http://localhost:3000/logoviajesmada.png"
            alt="Logo Viajes a Madagascar"
          />
        </NavLink>
        <ul>
          <li className="menu01">
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li className="menu02">
            <NavLink to="/tours" className={menustate ? "nav-active" : ""}>
              Nos circuits
            </NavLink>
            <ul className="sousmenu01">
              <li className="sousmenu02">
                <div className="testo">
                  <NavLink
                    to="/classique/general"
                    // className={(nav) => (menustate.tour ? activtour() : "")}
                  >
                    Classiques
                  </NavLink>
                </div>
                <ul className="sousmenu03">
                  <li className="sousmenu04">
                    <NavLink
                      to="/classique/14"
                      // className={(nav) => (menustate ? activtour() : '')}
                    >
                      Ruta Oeste
                    </NavLink>
                  </li>
                  <li className="sousmenu04">
                    <NavLink
                      to="/classique/16"
                      // className={(nav) => (menustate ? activtour() : '')}
                    >
                      Ruta Antakarana
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="sousmenu02">
                <div className="testo">
                  <NavLink
                    to="/thematique/global"
                    // className={(nav) => (menustate ? activtour() : "")}
                  >
                    Thématiques
                  </NavLink>
                </div>
                <ul className="sousmenu03">
                  <li className="sousmenu04">
                    <NavLink
                      to="/thematique/aventure"
                      // className={(nav) => (menustate ? activtour() : "")}
                    >
                      Aventura
                    </NavLink>
                  </li>
                  <li className="sousmenu04">
                    <NavLink
                      to="/thematique/balneaire"
                      // className={(nav) => (menustate ? activtour() : "")}
                    >
                      Balneairo
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="menu01">
            <NavLink
              to="/entreeprod"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Entrée
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
