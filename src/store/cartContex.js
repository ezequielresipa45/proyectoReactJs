import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const cartContext = createContext()

export default function CartProvider ({ children }) {
  const [prueba, setPrueba] = useState(0)

  const [cart, setCart] = useState([])

  const copyCart = [...cart]

  function addItem (item, quantity, id, price, data) {
    if (isInCart(data.id)) {
      const itemIndex = findItem(data.id)
      itemIndex.quantity += quantity
      setCart(copyCart)
    } else {
      copyCart.push({ id, item, quantity, price })
      setCart(copyCart)
    }
  }

  function isInCart (id) {
    return (copyCart.some(itemInCart => itemInCart.id === id))
  }

  // funcion para buscar un item en base a su id
  function findItem (id) {
    return (copyCart.find(item => item.id === Number(id)))
  }

  return (
    <cartContext.Provider value={{ cart, addItem, setCart, setPrueba, prueba }}>
      {children}
    </cartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.string.isRequired
}
