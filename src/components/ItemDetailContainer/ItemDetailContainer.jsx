import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemsData from '../../data/data'
import '../ItemDetailContainer/ItemDetailContainer.css'
import Spinner from '../Spinner/Spinner'
import Swal from "sweetalert2";


export default function ItemDetailContainer() {


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
    function getDetail() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(ItemsData[0]), 2000)
        })
    };

    const [data, setData] = useState([])

    useEffect(() => {

        getDetail().then((respuesta) => {
            setData(respuesta)
        }).catch((e) => e);

    }, [])

    return (

        data.length === 0 ? <Spinner /> :
            <div className='ItemDetailContainer'>
                <h1>Detalles del {data.car_make}</h1>
                <ItemDetail
                    addCard={addCard}
                    marca={data.car_make}
                    detalles={data.detalles}
                    images={data.img}
                    modelo={data.car_model}
                    key={data.id}
                    price={data.price}
                    cant={5}
                />
            </div>


    )
}
