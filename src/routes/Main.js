import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import List from "../components/List/List";
import {useDispatch, useSelector} from "react-redux";
import {productsSelectors} from "../store/products";
import {setFav, setCart, getProducts} from "../store/products/actions";
import Modal from "../components/Modal/Modal";
import {modalSelectors} from "../store/modal";
import {hideModal} from "../store/modal/actions";
import CheckOutForm from "../components/CheckOutForm/CheckOutForm";

const Main = () => {

  const dispatch = useDispatch();

  const products = useSelector(productsSelectors.getProducts());
  const cartArr = useSelector(productsSelectors.cartArr());
  const favArr = useSelector(productsSelectors.favArr())
  const isModalOpen = useSelector(modalSelectors.isModalOpen())


  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  const addToCart = (id) => {
    const arr = [...cartArr, id];
    dispatch(setCart(arr));
    localStorage.setItem("cart", JSON.stringify(arr));
  };

  const delFromCart = (id) => {
    const arr = cartArr.filter((item) => {
      return item !== id;
    });
    dispatch(setCart([...arr]));
    localStorage.setItem("cart", JSON.stringify([...arr]));
  };

  function onFavClick(id) {
    let fav;

    if (favArr.includes(id)) {
      fav = favArr.filter((n) => n !== id);
    } else {
      fav = [...favArr, id];
    }
    dispatch(setFav(fav));
    localStorage.setItem("fav", JSON.stringify(fav));
  }

  const closeModal = () => {
    dispatch(hideModal());
  }

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <List
              products={products}
              favArr={favArr}
              addToCart={addToCart}
              delFromCart={delFromCart}
              isFav={favArr}
              onFavClick={onFavClick}
              title={"Planets"}
            />
          )}
        />
        <Route path="/favorites">
          <List
            products={products.filter((product) => favArr.includes(product.id))}
            addToCart={addToCart}
            delFromCart={delFromCart}
            favArr={favArr}
            isFav={favArr}
            onFavClick={onFavClick}
            title={"Favorites"}
          />
        </Route>
        <Route path="/cart">
          <List
              products={products.filter((product) => cartArr.includes(product.id))}
              addToCart={addToCart}
              delFromCart={delFromCart}
              favArr={favArr}
              isFav={favArr}
              onFavClick={onFavClick}
              title={"Cart"}
          />
          <CheckOutForm />
        </Route>
      </Switch>
      {isModalOpen && isModalOpen.actionType === 'firstModal' && (
          <Modal
              backgroundColor={"#3704c4"}
              header={"Are you sure you want to add this to cart?"}
              closeButton={"x"}
              onHide={closeModal}
              text={"You can always remove it."}
              actionCart={() => {
                addToCart(isModalOpen.id)
                closeModal()
              }}
          />
      )}
      {isModalOpen && isModalOpen.actionType === 'secondModal' && (
          <Modal
              backgroundColor={"#0c5155"}
              header={'Are you sure you want to delete this from cart?'}
              closeButton={"x"}
              onHide={closeModal}
              text={"You can always add it back"}
              actionCart={() => {
                delFromCart(isModalOpen.id)
                closeModal()
              }}
          />
      )}
    </div>
  );
}

export default Main;
