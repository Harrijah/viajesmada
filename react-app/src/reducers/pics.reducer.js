import { GET_PICS } from "../actions/pics.action";
const initialState = {};

export default function picsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PICS:
      return action.payload;
    default:
      return state;
  }
}
