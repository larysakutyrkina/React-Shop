import {OPEN_MODAL, ClOSE_MODAL, HIDE_MODAL} from "./types";

const initialState = {
    isModalOpen: null,
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL :
            return {...state, isModalOpen: action.payload};
        case ClOSE_MODAL :
            return {...state, isModalOpen: action.payload};
        case HIDE_MODAL:
            return {...state, isModalOpen: action.payload};
        default:
            return state;
    }
};

export default modalReducer;


