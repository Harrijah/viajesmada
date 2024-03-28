import { CITY_DETAILS } from "../actions/citydetails.action";

const initialState = {}

export default function citydetailsReducer(state = initialState, action) {
    switch (action.type) {
        case CITY_DETAILS:
            return (action.payload);
        default:
            return state;
    }
}

