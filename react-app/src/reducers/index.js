// Ce fichier permet de combiner les reducers. Il est utilisé dans le fichier react-app/src/index.js pour créer le store Redux. Il est utilisé dans le fichier react-app/src/pages/Alltour.js pour récupérer les tours depuis le state Redux. Il est utilisé dans le fichier react-app/src/actions/tour.action.js pour définir le type de l'action. Il est utilisé dans le fichier react-app/src/reducers/tour.reducer.js pour définir le reducer.

// On importe les reducers 
import { combineReducers } from "redux";
import tourReducer from "./tour.reducer";
import oneTourReducer from "./onetour.reducer";
import menuReducer from "./menu.reducer";

// On combine les reducers
export default combineReducers({
    tourReducer,
    oneTourReducer,
    menuReducer,
});