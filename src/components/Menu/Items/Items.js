import React, { useContext } from "react";
import classes from "./Items.module.css";
import ItemForm from "./ItemForm";

import CartContext from "../../../store/cart-context";

function Items(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.drink}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.category}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default Items;
