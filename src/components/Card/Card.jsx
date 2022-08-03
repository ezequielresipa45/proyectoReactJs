import ItemCount from "../ItemCount/ItemCount";
import "./Card.css";
import React, { useState } from "react";

export default function Card({ producto, imagen, addCard, cant }) {
  const [count, setCount] = useState(1);

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
      <ItemCount cantidad={cant} count={count} setCount={setCount} />
      <button onClick={() => addCard(producto, count)}>
        {" "}
        Añadir al Carrito{" "}
      </button>
    </div>
  );
}
