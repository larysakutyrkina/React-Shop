import {combineReducers} from "redux";
import productsReducer from "./products";
import modalReducer from "./modal";

const reducer = combineReducers({
    products: productsReducer,
    modal: modalReducer
})

export default reducer;