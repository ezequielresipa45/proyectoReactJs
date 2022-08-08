import "./ItemListContainer.css";
import React, { useEffect, useState } from 'react'
import ItemsData from '../data/data'
import ItemList from '../ItemList/ItemList'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'



export default function ItemListContainer({ greeting }) {

  // PROMISE 
  function getProductos() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(ItemsData), 2000)
    })
  };

  const [data, setData] = useState([])

  useEffect(() => {
    getProductos().then((respuesta) => {
      setData(respuesta)
    }).catch((e) => e)
  }, [])


  return (
    <div className="ItemListContainer">
      <h2 className="greeting">{greeting}</h2>
      <div className="containerProducts">
        {/* <ItemList
          data={data} /> */}
        <ItemDetailContainer/>
      </div>
    </div>
  );
}
