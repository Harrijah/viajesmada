import axios from 'axios';

// On exporte la constante GET_TOURS qui contient le type de l'action
export const GET_ALLTOURS = 'GET_ALLTOURS';
export const GET_ONETOUR = 'GET_ONETOUR';

// Cette fonction permet de récupérer les tours
export const getAllTours = () => {
    return (dispatch) => {
        return axios.get('http://localhost:8080/affichercircuit').then((res) => {
            dispatch({ type: GET_ALLTOURS, payload: res.data });
        });
    }
}

export const getOneTour = (id) => {
    return (dispatch) => {
        return axios.get('http://localhost:8080/affichercircuitbyid/' + id).then((res) => {
            dispatch({ type: GET_ONETOUR, payload: res.data });
        });
    }
}