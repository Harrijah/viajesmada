const initialState = {}
import { GET_ACTIVITY } from "../actions/activity.action";

export default function activityReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ACTIVITY:
            return action.payload;
        default:
            return state;
    }
}