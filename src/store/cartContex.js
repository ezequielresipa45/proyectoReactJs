import { createContext, useState } from "react";

export const cartContext = createContext();

export default function CartProvider({ children }) {

  const [prueba, setPrueba] = useState(0);

  const [cart, setCart] = useState([]);

  function addItem(item, quantity, id, price) {
    if (isInCart(item)) {
    } else {
      let copyCart = [...cart];
      copyCart.push({ id, item, quantity, price });
      setCart(copyCart);
    }
  }

  function isInCart(item) {
    return cart.some((itemInCart) => itemInCart.item === item);
  }

  return (
    <cartContext.Provider value={{ cart, addItem, setCart, setPrueba, prueba }}>
      {children}
    </cartContext.Provider>
  );
}
