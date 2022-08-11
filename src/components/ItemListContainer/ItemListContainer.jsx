import "./ItemListContainer.css";
import React, { useEffect, useState } from 'react'
import ItemsData from '../../data/data'
import ItemList from '../ItemList/ItemList'
import { useParams}  from "react-router-dom";




export default function ItemListContainer({ greeting }) {

  // PROMISE 
  function getProductos() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(ItemsData), 2000)
    })
  };

  const [data, setData] = useState([])


const Categoria =  useParams().idCategorias;

  useEffect(() => {
    getProductos().then((respuesta) => {
      let filtrados =  respuesta.filter(elemento => elemento.car_make == Categoria );


      Categoria === undefined ?  setData(respuesta) : 

     setData(filtrados);

    }).catch((e) => e)
  }, [])


  return (
    <div className="ItemListContainer">
      <h2 className="greeting">{greeting}</h2>
      <div className="containerProducts">
        <ItemList
          data={data} />
       
      </div>
    </div>
  );
}
