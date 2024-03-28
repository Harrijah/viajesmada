import axios from "axios";

export const GET_ACTIVITY = 'GET_ACTIVITY';

export const getActivity = () => {
    return (dispatch) => {
        axios.get('https://tours.viajes-madagascar.mg/getactivity').then((res) => {
            dispatch({ type: GET_ACTIVITY, payload: res.data });
        })
    }
}