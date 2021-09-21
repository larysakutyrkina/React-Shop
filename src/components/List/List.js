import React from "react";
import Card from "../Card/Card";
import style from "./List.module.scss";

const List = ({
  products,
  favArr,
  onFavClick,
  title,
}) => {
  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      <div className={style.cards__wrapper}>
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            isFav={favArr.includes(product.id)}
            actionFav={() => onFavClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
