// Ce fichier est le plus important de l'application. Il permet de créer le store Redux. Il permet de rendre l'application dans la div root. Il permet de charger les tours au démarrage de l'application. Il permet de combiner les reducers. Il permet de définir les dépendances et composants REDUX. Il permet de définir les dépendances et composants React. Il permet de définir les dépendances et composants SCSS.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import Fontawesome


import "./styles/index.scss";

// Dépendances et composants REDUX
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { getAllTours } from "./actions/tour.action";
import { setMenu } from "./actions/menu.action";

// On crée le store Redux
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
store.dispatch(getAllTours());
store.dispatch(setMenu(false));

// On utilise la nouvelle API React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// On rend l'application dans la div root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
