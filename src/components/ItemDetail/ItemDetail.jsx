import '../ItemDetail/ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import React, { useState } from "react";

export default function ItemDetail({ price, images, modelo, marca, detalles, addCard, cant }) {

  const [count, setCount] = useState(1);

  return (
    <div className='item-detail'>
      <h3>{marca} {modelo}</h3>
      <div className='containerDetailsImg'>
        <img src={images} alt='images-car' />
        <div className='item-detail-price'>
          <p>{detalles}</p>
          <p>Cuando se trata de manejar tu {marca} {modelo} no hay tiempo que perder. Su sistema de desbloqueo y arranque automático que detecta las llaves por proximidad hacen todo mucho más simple.</p>
          <p>El interior del {marca} {modelo} fue diseñado especialmente para que disfrutes el espacio amplio y para que accedas fácilmente a todos los accesorios.</p>
          <div className="group-price-count">
            <p>Adquieralo solo por <span>{price}</span></p>
            <ItemCount cantidad={cant} count={count} setCount={setCount} />
            <button onClick={() => addCard(marca, count)}>Añadir al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  )
}
