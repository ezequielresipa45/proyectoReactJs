import React, { useEffect, useState } from 'react'
import ItemsData from '../data/data'
import Item from '../Item/Item'
import Swal from "sweetalert2";
import './ItemList.css'
import Spinner from '../Spinner/Spinner'


const addCard = (producto, cantidad) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: `Has añadido ${cantidad} ${producto} al carrito`,
    showConfirmButton: false,
    timer: 1500,
  });
};

// PROMISE 
function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ItemsData), 2000)
  })
};

export default function ItemList() {

  const [data, setData] = useState([])

  useEffect(() => {
    getProductos().then((respuesta) => {
      setData(respuesta)
    }).catch((e) => e)
  }, [])

  return (
    <div className='shoppingProductos'>
      {data.length === 0 ? <Spinner /> :
        data.map((productos) =>
          <Item
            addCard={addCard}
            marca={productos.car_make}
            modelo={productos.car_model}
            precio={productos.price}
            imagen={productos.img}
            cant={5}
            key={productos.id}
          />
        )
      }
    </div>
  )
}
