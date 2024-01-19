import { SET_MENU } from '../actions/menu.action';

const initialState = { tour : false };

export default function menuReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MENU:
            return { tour: action.payload };
        default:
            return state;
    }
}