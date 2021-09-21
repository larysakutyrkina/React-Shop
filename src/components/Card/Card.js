import React from 'react';
import style from './Card.module.scss';
import Button from "../Button/Button";
import Favorite from "../Favorite/Favorite";
import {useDispatch, useSelector} from "react-redux";
import {addModal, delModal} from "../../store/modal/actions";
import {setCart} from "../../store/products/actions";
import {productsSelectors} from "../../store/products";


const Card = ({product, actionFav, isFav}) => {

    const dispatch = useDispatch()
    const {imgUrl, id, name, color, cost} = product;

    const cartArr = useSelector(productsSelectors.cartArr());

    return (
        <div className={style.card}>
            <img className={style.card__img} src={imgUrl} alt="Star"/>
            <div className={style.card__info}>
                <h4 className={style.card__title}>{name} </h4>
                <Favorite isFav={isFav} onSetFav={actionFav}/>
                <p className={style.card__color}> Color: {color} </p>
                <p className={style.card__cost}> Price: {cost} </p>
            </div>

            {!cartArr.includes(id) && (
                <Button
                    children="Add to Cart"
                    backgroundColor={"#2e009f"}
                    onClick={() => dispatch(addModal(id))}
                />
            )}

            {cartArr.includes(id) && (
            <Button
                children="Delete from Cart"
                backgroundColor={"#0b484b"}
                onClick={() => dispatch(delModal(id))}
            />
            )}
        </div>
    )
}

export default Card;