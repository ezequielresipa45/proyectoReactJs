import '../ItemDetail/ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useContext } from 'react';
import {cartContext} from '../../store/cartContex.js'


export default function ItemDetail({ price, images, modelo, marca, detalles, cant }) {

 const {addItem} = useContext(cartContext);

  const [state, setState] = useState(0);

  const addCard = (producto, cantidad) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Has añadido ${cantidad} ${producto} al carrito`,
      showConfirmButton: false,
      timer: 1500,
    });

    setState(cantidad)
    addItem(producto,cantidad);
  };

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
            {state === 0 ?
              <ItemCount cantidad={cant} addCard={addCard} marca={marca} />
              :
              <a href="/cart">Ir al carrito</a>
            }
          </div>
        </div>
      </div>
    </div>
  )
}


