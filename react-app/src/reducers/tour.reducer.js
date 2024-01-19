// Ce fichier contient le reducer pour les tours. Il permet de mettre à jour le state de l'application en fonction des actions. Il est combiné avec les autres reducers dans le fichier react-app/src/reducers/index.js. Il contient un switch qui permet de définir les actions à effectuer en fonction du type d'action. Dans notre cas, nous n'avons qu'une action GET_TOURS qui permet de mettre à jour le state avec les tours récupérés depuis l'API. Le state initial est un objet vide. Le reducer retourne le state par défaut si l'action n'est pas reconnue. Sinon, il retourne le payload de l'action. Le payload est la donnée envoyée avec l'action. Dans notre cas, c'est la liste des tours récupérés depuis l'API.

import { GET_ALLTOURS } from "../actions/tour.action";

// Initial state
const initialState = {}

// On exporte le reducer
export default function tourReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALLTOURS:
            return action.payload;
        default:
            return state;
    }
}