import cars from '../../images/logo-cars.png'
import cash from '../../images/cash.svg'
import profile from '../../images/myprofile.svg'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import React from 'react'

function NavBar () {
  return (
    <div className="navBar">
      <Link to="/">
        <img className="logo" src={cars} alt="cars-logo" />
      </Link>
      <div className="contenedorParrafos">
        <p className="solicitarTarjeta">
          <img src={cash} alt="Cash" />
          Solicitá tu Crédito Personal
        </p>
        <p>|</p>
        <p className="haceteCliente">
          <img src={profile} alt="MyProfile" />
          Hacete Cliente
        </p>
      </div>
      <ul>
        <li>
        <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/categorias/Porsche">Categorias PORSCHE </Link>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </div>
  )
}

export default NavBar
