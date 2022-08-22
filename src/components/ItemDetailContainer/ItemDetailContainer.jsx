import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemsData from '../../data/data'
import '../ItemDetailContainer/ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import Spinner from '../Spinner/Spinner'

export default function ItemDetailContainer() {
    const Id = useParams().id;
    // PROMISE 
    function getDetail() {
        return new Promise((resolve, reject) => {

            let itemRequired = ItemsData.find(elemente => elemente.id == Id);

            itemRequired === undefined ? reject('No se encontro el Item solicitado') :
                setTimeout(() => resolve(itemRequired), 2000)
        })
    };

    const [data, setData] = useState({})

    useEffect(() => {
        getDetail().then((respuesta) => {
            setData(respuesta)
        }).catch((e) => alert(e));

    }, [])





    return (
        <div className='ItemDetailContainer'>
            {Object.entries(data).length === 0 ? <div className="alertSpinner"> <Spinner /></div> :
                <div className='ItemDetailContainer_Interior'>
                    <h1>Detalles del {data.car_make}</h1>
                    <ItemDetail
                        data = {data}
                        marca={data.car_make}
                        detalles={data.detalles}
                        images={data.img}
                        modelo={data.car_model}
                        key={data.id}
                        id={data.id}
                        price={data.price}
                        cant={5}
                    /></div>}
        </div>
    )
}
