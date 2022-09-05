import './Item.css'
import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

export default function Item ({ marca, modelo, precio, imagen, Id }) {
  return (
    <div className="container">
      <div className="container-image">
        <h4>{marca}</h4>
        <h5> {modelo}</h5>
        <img
          className="producto-image"
          src={imagen}
          alt="imagen"
        />
        <p>{precio}</p>
        <Link to={`/detalles/${Id}`}>Ver Más</Link>
      </div>
    </div>
  )
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  modelo: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  imagen: PropTypes.string.isRequired,
  Id: PropTypes.number.isRequired
}
