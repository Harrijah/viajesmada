import axios from "axios";
export const GET_PICS = "GET_PICS";

export const getPics = () => {
  return (dispatch) => {
    axios.get("https://tours.viajes-madagascar.mg/getpictures").then((res) => {
      dispatch({ type: GET_PICS, payload: res.data });
    });
  };
};

