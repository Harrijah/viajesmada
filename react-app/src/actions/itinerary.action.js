import axios from "axios";
export const GET_ITINERARY = "GET_ITINERARY";

export const getItinerary = () => {
  return (dispatch) => {
    axios.get("https://tours.viajes-madagascar.mg/getitinerary").then((res) => {
      return dispatch({ type: GET_ITINERARY, payload: res.data });
    });
  };
};
