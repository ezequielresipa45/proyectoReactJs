import add from "../../images/add.png";
import remove from "../../images/remove.png";
import "./ItemCount.css";
import Swal from "sweetalert2";
import React, { useState } from "react";



export default function ItemCount({ cantidad, addCard, marca, id, price}) {

  const [count, setCount] = useState(1);

  let stock = cantidad;

  const addItems = () => {
    count < stock
      ? setCount(count + 1)
      : Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Solo puedes añadir hasta ${stock} productos`,
      });
  };

  const removeItems = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
  };

  return (
    <div className="container-count">
      <img onClick={() => addItems()} src={add} alt="add" />
      <p> {count} </p>
      <img onClick={() => removeItems()} src={remove} alt="remove" />
      <button onClick={() => addCard(marca, count, id, price)}>Añadir al Carrito</button>
    </div>
  );
}
