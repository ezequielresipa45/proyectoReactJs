import  React, { useContext } from "react";
import { cartContext } from "../../store/cartContex.js";
import './CartDetalleCompra.css'

export default function CartDetalleCompra() {


  const { cart } = useContext(cartContext);

  let mapeo = cart.map((producto) => producto)

console.log(mapeo)



  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", color: "blue" }}>
      <h2>Sector donde se va a ver el detalle de compras del carrito</h2>

             <div className="containerProductsCompra">
                  {cart.map((producto) => <div>

                    <p>{`Producto: ${producto.item}`}</p>
                    <p>{`Cantidad: ${producto.quantity}`}</p>



                  </div>  )}
                  
             </div>
    </div>
  );
}



{/* <p>{`Producto: ${producto.item} Precio: ${producto.quantity}`}</p> */}