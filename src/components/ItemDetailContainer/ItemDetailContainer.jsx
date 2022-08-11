import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemsData from '../../data/data'
import '../ItemDetailContainer/ItemDetailContainer.css'

import Swal from "sweetalert2";

import { useParams}  from "react-router-dom";


export default function ItemDetailContainer() {

    const Id = useParams().id;

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
        return new Promise((resolve,reject) => {

            let itemRequired = ItemsData.find(elemente => elemente.id == Id);

            itemRequired === undefined ? reject('No se encontro el Item solicitado') :
            setTimeout(() => resolve(itemRequired), 2000)
        })
    };

    const [data, setData] = useState([])

    useEffect(() => {

        getDetail().then((respuesta) => {
            setData(respuesta)
        }).catch((e) => alert(e));

    }, [])

    return (

        
        data.length === 0 ? 'Cargando...' : 
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
