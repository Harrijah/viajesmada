import axios from "axios";
export const GET_CITY = "GET_CITY";

export const getCity = () => {
  return (dispatch) => {
    axios.get("https://tours.viajes-madagascar.mg/getcity").then((res) => {
      dispatch({ type: GET_CITY, payload: res.data });
    });
  };
};
