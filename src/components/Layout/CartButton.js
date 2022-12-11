import React, { useContext } from "react";
import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

function CartButton(props) {
  const cartCtx = useContext(CartContext);

  const numItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numItems}</span>
    </button>
  );
}

export default CartButton;
