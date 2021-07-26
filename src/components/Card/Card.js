import React, {useState} from 'react';
import style from './Card.module.scss';
import Button from "../Button/Button";
import Favorite from "../Favorite/Favorite";
import Modal from "../Modal/Modal";

const Card = ({product, actionFav, addToCart, delFromCart, isFav}) => {

    const {imgUrl, id, name, color, cost} = product;

    const [btnState, setBtn] = useState(null);

    function hideModal(){
        setBtn("null")
    }

    return (
            <div className={`${style.card}`}>
                <img className={`${style.card__img}`} src={imgUrl} alt="Star"/>
                <div className={`${style.card__info}`}>
                    <h4 className={`${style.card__title}`}>{name} </h4>
                    <Favorite isFav={isFav} onSetFav={actionFav}/>
                    <p className={`${style.card__color}`}> Color: {color} </p>
                    <p className={`${style.card__cost}`}> Price: {cost} </p>
                </div>
                <Button
                    children="Add to Cart"
                    backgroundColor={"#2e009f"}
                    onClick={() => setBtn('firstModal')}
                />

                <Button
                    children="Delete from Cart"
                    backgroundColor={"#0b484b"}
                    onClick={() => setBtn('secondModal')}
                />

                {btnState === 'firstModal' && (
                    <Modal
                        backgroundColor={"#3704c4"}
                        header={"Are you sure you want to add this to cart?"}
                        closeButton={"x"}
                        onHide={hideModal}
                        text={"You can always remove it."}
                        actionCart={() => {
                            addToCart(id)
                            hideModal()
                        }}
                    />
                )}
                {btnState === 'secondModal' && (
                    <Modal
                        backgroundColor={"#0c5155"}
                        header={'Are you sure you want to delete this from cart?'}
                        closeButton={"x"}
                        onHide={hideModal}
                        text={"You can always add it back"}
                        actionCart={() => {
                            delFromCart(id)
                            hideModal()
                        }}
                    />
                )}
            </div>
    );
  };

export default Card;