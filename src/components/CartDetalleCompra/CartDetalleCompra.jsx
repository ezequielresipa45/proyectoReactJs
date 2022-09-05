import React, { useContext } from 'react'
import { cartContext } from '../../store/cartContex.js'
import './CartDetalleCompra.css'
import Swal from 'sweetalert2'
import UserForm from '../UserForm/UserForm.jsx'

export default function CartDetalleCompra () {
  const { cart, setCart } = useContext(cartContext)

  const clear = () => setCart([])

  const removeItems = (itemId) => {
    const newRemoveItemsForId = cart.filter((item) => item.id !== itemId)
    setCart(newRemoveItemsForId)
  }
  const redirijir = () => { setTimeout(function () { window.location.href = '/' }, 1000) }

  const redirijirConAlert = () => {
    let timerInterval

    Swal.fire({
      title: 'SIN PRODUCTOS EN EL CARRITO',
      html: 'Lo redireccionaremos a la página principal.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })

    redirijir()
  }

  if (cart.length === 0) {
    return redirijirConAlert()
  }

  // ITERADOR PARA SACAR EL TOTAL DE LA COMPRA DE LOS PRODUCTOS

  let totalCantidadProductos = 0

  for (const iterador in cart) {
    totalCantidadProductos += cart[iterador].quantity * cart[iterador].price.slice(1)
  }

  return (

    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h2>Detalle de compras del carrito</h2>
      <div>
        <button className="btnBorrarTodo" onClick={() => clear()} > Borrar Todo </button>
      </div>
      <div className="containerProductsCompra">
        {cart.map((producto) => <div key={producto.id}>
          <p>{`Vehículo: ${producto.item}`}</p>
          <p>{`Cantidad: ${parseInt(producto.quantity)}`}</p>
          <p>{`Precio: $ ${parseFloat(producto.price.slice(1))}`}</p>
          <p>{`Total: $ ${parseInt(producto.quantity) * parseFloat(producto.price.slice(1))} `}</p>
          <button onClick={() => removeItems(producto.id)}>Eliminar</button>
        </div>)}
        <h4>{`TOTAL GENERAL: $ ${totalCantidadProductos.toFixed(2)}`}</h4>
      </div>
      <UserForm
      cart={cart}
      cantidad = {totalCantidadProductos}
      />
    </div>

  )
}
