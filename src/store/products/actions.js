import {SET_FAV, SET_CART, GET_PRODUCTS, EMPTY_CART} from "./types";

export const setFav = (favArr) => ({
    type: SET_FAV, payload: favArr
});

export const setCart = (cartArr) => ({
    type: SET_CART, payload: cartArr
});

export const emptyCart = () => ({
    type: EMPTY_CART});

export const getProducts = () => (dispatch) => {
    fetch("products.json")
        .then((res) => res.json())
        .then((products) => dispatch({type: GET_PRODUCTS, payload: products}))
};


