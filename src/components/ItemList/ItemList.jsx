import Item from '../Item/Item'

import './ItemList.css'
import Spinner from '../Spinner/Spinner'


export default function ItemList({ data }) {
  

  return (
    <div className='shoppingProductos'>
      {data.length === 0 ? <Spinner /> :
        data.map((productos) =>
          <Item
            Id = {productos.id}
            marca={productos.car_make}
            modelo={productos.car_model}
            precio={productos.price}
            imagen={productos.img}
            key={productos.id}
          />
        )
      }
    </div>
  )
}
