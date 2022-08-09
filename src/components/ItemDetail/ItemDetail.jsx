import React from 'react'
import '../ItemDetail/ItemDetail.css'

export default function ItemDetail({ price, images, modelo, marca, detalles }) {

  return (
    <div className='item-detail'>
      <h3>{marca} {modelo}</h3>
      <div className='containerDetailsImg'>
        <img src={images} alt='images-car' />
        <div className='item-detail-price'>
          <p>{detalles}</p>
          <p>Cuando se trata de manejar tu {marca} {modelo} no hay tiempo que perder. Su sistema de desbloqueo y arranque automático que detecta las llaves por proximidad hacen todo mucho más simple.</p>
          <p>El interior del {marca} {modelo} fue diseñado especialmente para que disfrutes el espacio amplio y para que accedas fácilmente a todos los accesorios.</p>
          <p>Adquieralo solo por <span>{price}</span></p>
        </div>
      </div>




      
    </div>
  )
}
