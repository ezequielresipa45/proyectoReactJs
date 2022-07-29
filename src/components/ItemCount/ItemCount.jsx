import React, { useState } from "react";
import add from "../../images/add.png";
import remove from "../../images/remove.png";
import "./ItemCount.css";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";

export default function ItemCount({ cantidad, producto, imagen }) {
  let stock = cantidad;

  const [count, setCount] = useState(1);

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

  const addCard = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Has añadido ${count} ${producto} al carrito`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="container">
      <div className="container-image">
        <h4>{producto}</h4>
        <img
          className="producto-image"
          src={require(`../../images/${imagen}`)}
          alt="conjunto"
        />
      </div>

      <div className="container-count">
        <img onClick={() => addItems()} src={add} alt="add" />

        <p> {count} </p>

        <img onClick={() => removeItems()} src={remove} alt="remove" />
      </div>

      <button onClick={() => addCard()}> Añadir al Carrito </button>
    </div>
  );
}
