import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "../Card/Card";
import Button from "../Button/Button";
import style from "./List.module.scss";

const List = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [])
    const [favArr, setFavArr] = useState(localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")) : []);
    useEffect(() => {
        axios('products.json')
            .then(res =>
                setProducts(res.data)
            )
    }, [])

    const addToCart = (id) => {
        const arr = [...cart, id]
        setCart(arr)
        localStorage.setItem('cart', JSON.stringify(arr))
    }

    const delFromCart = (id) => {
        const arr = cart.filter(item => {
            return item !== id
        })
        setCart([...arr]);
        localStorage.setItem('cart', JSON.stringify([...arr]))
    }

    function onFavClick(id) {
        let fav;

        if (favArr.includes(id)) {
            fav = favArr.filter((n) => n !== id);
        } else {
            fav = [...favArr, id];
        }
        setFavArr(fav);
        localStorage.setItem("fav", JSON.stringify(fav));
    }

    return (
        <div>
            <h1 className={`${style.cards__header}`}>Welcome to the Planet Shop!</h1>
            <div className={`${style.cards__wrapper}`}>
                {products.map(product => (
                    <Card key={product.id} product={product} addToCart={addToCart}
                          delFromCart={delFromCart} isFav={favArr.includes(product.id)} actionFav={() => onFavClick(product.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default List;