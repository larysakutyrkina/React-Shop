import {OPEN_MODAL, ClOSE_MODAL, HIDE_MODAL} from "./types";

export const addModal = (id) => (dispatch) => {
    dispatch({ type: OPEN_MODAL, payload: { id: id, actionType : 'firstModal' } });
};
export const delModal = (id) => (dispatch) => {
    dispatch({ type: ClOSE_MODAL, payload: { id: id, actionType : 'secondModal' }  });
};
export const hideModal = () => (dispatch) => {
    dispatch({type: HIDE_MODAL, payload: null});
};
