import Item from '../Item/Item'
import Swal from "sweetalert2";
import './ItemList.css'
import Spinner from '../Spinner/Spinner'


export default function ItemList({ data }) {
  
  const addCard = (producto, cantidad) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Has añadido ${cantidad} ${producto} al carrito`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className='shoppingProductos'>
      {data.length === 0 ? <Spinner /> :
        data.map((productos) =>
          <Item
            addCard={addCard}
            marca={productos.car_make}
            modelo={productos.car_model}
            precio={productos.price}
            imagen={productos.img}
            cant={5}
            key={productos.id}
          />
        )
      }
    </div>
  )
}
