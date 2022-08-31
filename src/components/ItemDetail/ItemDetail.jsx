import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import { cartContext } from "../../store/cartContex.js";
import { Link } from "react-router-dom";

export default function ItemDetail({
  price,
  images,
  modelo,
  marca,
  detalles,
  cant,
  id,
  data
}) {
  const {  addItem } = useContext(cartContext);

  const [state, setState] = useState(0);

  console.log(state) // Llamo a este console.log porque sino me tira el warning que el state no es usado

  const addCard = (producto, cantidad, id, price) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Has añadido ${cantidad} ${producto} al carrito`,
      showConfirmButton: false,
      timer: 1500,
    });

    setState(cantidad);
    addItem(producto, cantidad, id, price,data);

  };

  return (
    <div className="item-detail">
      <h3>
        {marca} {modelo}
      </h3>
      <div className="containerDetailsImg">
        <img src={images} alt="images-car" />
        <div className="item-detail-price">
          <p>{detalles}</p>
          <p>
            Cuando se trata de manejar tu {marca} {modelo} no hay tiempo que
            perder. Su sistema de desbloqueo y arranque automático que detecta
            las llaves por proximidad hacen todo mucho más simple.
          </p>
          <p>
            El interior del {marca} {modelo} fue diseñado especialmente para que
            disfrutes el espacio amplio y para que accedas fácilmente a todos
            los accesorios.
          </p>
          <div className="group-price-count">
            <p>
              Adquieralo solo por <span>{price}</span>
            </p>
            {state === 0 ? ( // Le digo que si el producto NO ESTA en el carrito o en el (array cart que me traigo de cartContext) que se muestre el itemCount y si el producto ESTA que el ITEMCOUNT SE OCULTE Y MUESTRE EL IR AL CARRITO...
              <ItemCount cantidad={cant} addCard={addCard} marca={marca} id={id} price={price} />
            ) : (
              <Link to="/CartDetalleCompra">Ir al carrito</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
