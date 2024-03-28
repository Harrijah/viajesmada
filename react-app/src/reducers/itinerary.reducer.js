import { GET_ITINERARY } from "../actions/itinerary.action";

const initialState = {}

export default function itineraryReducer(state=initialState, action) {
    switch (action.type) {
        case GET_ITINERARY:
            return action.payload;
        default:
            return state;
        }
}