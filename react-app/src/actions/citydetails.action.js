export const CITY_DETAILS = "CITY_DETAILS";

export const cityDetails = (data) => {
    return (dispatch) => {
        return dispatch({ type: CITY_DETAILS, payload: data }); 
    }
}