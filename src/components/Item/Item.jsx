import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import React, { useState } from "react";

export default function Item({ marca, modelo, precio, imagen, addCard, cant }) {

  const [count, setCount] = useState(1);

  return (
    <div className="container">
      <div className="container-image">
        <h4>{marca}</h4>
        <h5> {modelo}</h5>
        <img
          className="producto-image"
          src={imagen}
          alt="imagen"
        />
        <p>{precio}</p>
      </div>
      <ItemCount cantidad={cant} count={count} setCount={setCount} />
      <button onClick={() => addCard(marca, count)}>Añadir al Carrito</button>
    </div>
  );
}
