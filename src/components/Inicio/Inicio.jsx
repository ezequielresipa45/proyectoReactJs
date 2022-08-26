import React from 'react'
import './Inicio.css'
import cars from '../../images/logo-cars.png'

// import {saveProductsToFirebase} from '../../services/firebase'

export default function Inicio() {
    return (
        <div className="containerInicio">
            <h2>Bienvenidos a la tienda lider de autos</h2>
            <img className="img-cars" src={cars}  alt = "img-cars"/>
            {/* <button onClick={saveProductsToFirebase} > BOTON BD</button>  */}
        </div>
    )
}
