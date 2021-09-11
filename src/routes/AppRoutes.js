import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import List from "../components/List/List";
import axios from "axios";

function AppRoutes() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const [favArr, setFavArr] = useState(
    localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")) : []
  );

  useEffect(() => {
    axios("products.json").then((res) => setProducts(res.data));
  }, []);

  const addToCart = (id) => {
    const arr = [...cart, id];
    setCart(arr);
    localStorage.setItem("cart", JSON.stringify(arr));
  };

  const delFromCart = (id) => {
    const arr = cart.filter((item) => {
      return item !== id;
    });
    setCart([...arr]);
    localStorage.setItem("cart", JSON.stringify([...arr]));
  };

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
              products={products.filter((product) => cart.includes(product.id))}
              addToCart={addToCart}
              delFromCart={delFromCart}
              favArr={favArr}
              isFav={favArr}
              onFavClick={onFavClick}
              title={"Cart"}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default AppRoutes;
