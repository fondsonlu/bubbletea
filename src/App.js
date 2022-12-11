import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Image from "./components/Image/Image";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Image />
      <main>
        <Menu />
      </main>
    </CartProvider>
  );
}

export default App;
