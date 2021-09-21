const getProducts = () => (state) => state.products.products
const cartArr = () => (state) => state.products.cartArr
const favArr = () => (state) => state.products.favArr

export default {
    getProducts, cartArr, favArr
}