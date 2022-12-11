import React from "react";
import classes from "./Header.module.css";
import CartButton from "./CartButton";
function Header(props) {
  return (
    <header className={classes.header}>
      <h1>Bobastic</h1>
      <CartButton onClick={props.onShowCart} />
    </header>
  );
}
export default Header;
