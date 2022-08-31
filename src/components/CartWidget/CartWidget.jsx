import shoppingCard from "../../images/shopping-card-outline.gif";
import "./CartWidget.css";
import { useContext,useEffect } from "react";
import { cartContext } from "../../store/cartContex.js";
import { Link } from "react-router-dom";

export default function CartWidget() {

  const { cart, prueba, setPrueba } = useContext(cartContext);
  let quantityProductos = 0;

  for (let iterador in cart) {
    quantityProductos += cart[iterador].quantity;
  }

  useEffect(() => {
    setPrueba(quantityProductos === 0 ? '' : quantityProductos);
  });
  

  return (
    <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center' }}>
      <Link to="/CartDetalleCompra"><img className="shoppingCard" src={shoppingCard} alt="Shopping Card" /> </Link>
      <p style={{ color: 'white' }}>{prueba}</p>
    </div>
  );
}
