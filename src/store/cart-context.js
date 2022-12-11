import React from "react";

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addOneItem: (item) => {},
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
