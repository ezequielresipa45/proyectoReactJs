import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

import '../ItemDetailContainer/ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import Spinner from '../Spinner/Spinner'
import firestoreDB from "../../services/firebase";
import { collection, doc, getDoc } from "firebase/firestore";



function getDetail(id) {

    return new Promise((resolve, reject) => {

        const productosCollection = collection(firestoreDB, "vehiculos");
        const docRef = doc(productosCollection, id);
        getDoc(docRef).then(snapshot => {
            resolve(

                { ...snapshot.data(), id: snapshot.id }
            )
        });
    })
}

export default function ItemDetailContainer() {

    const Id = useParams().id;

    const [data, setData] = useState({})

    useEffect(() => {
        getDetail(Id).then((respuesta) => {
            setData(respuesta)
        }).catch((e) => alert(e));

    }, [])

    return (
        <div className='ItemDetailContainer'>
            {Object.entries(data).length === 0 ? <div className="alertSpinner"> <Spinner /></div> :
                <div className='ItemDetailContainer_Interior'>
                    <h1>Detalles del {data.car_make}</h1>
                    <ItemDetail
                        data={data}
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
