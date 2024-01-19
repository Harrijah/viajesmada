export const SET_MENU = 'SET_MENU';


export const setMenu = (data) => {
    return (dispatch) => {
        return dispatch({ type: SET_MENU, payload: data });
    }
}