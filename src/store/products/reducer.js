import {SET_FAV, SET_CART, GET_PRODUCTS} from "./types";

const initialState = {
    products: [],
    favArr: localStorage.getItem("fav")
    ? JSON.parse(localStorage.getItem("fav"))
    : [],
    cartArr: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAV:
            return {...state, favArr: action.payload};
        case SET_CART:
            return {...state, cartArr: action.payload};
        case GET_PRODUCTS:
            return {...state, products: action.payload};
        default:
            return state;
    }
};

export default productsReducer ;