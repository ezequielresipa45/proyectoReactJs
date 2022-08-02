import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Card.css";

export default function Card({ producto, imagen, addCard, cant }) {
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
      <ItemCount cantidad={cant} />
      <button onClick={() => addCard(producto)}> Añadir al Carrito </button>
    </div>
  );
}
