import { GET_ONETOUR } from "../actions/tour.action";

// initial state
const initialState = {};

// export reducer
export default function oneTourReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ONETOUR:
            return action.payload;
        default:
            return state;
    }
}