import "./ItemListContainer.css";
import Swal from "sweetalert2";
import Card from "../Card/Card";

export default function ItemListContainer({ greeting }) {
  const addCard = (producto) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Has añadido ${producto} al carrito`,
      showConfirmButton: false,
      timer: 1500,
    }); 
  };

  return (
    <div className="ItemListContainer">
      <h2 className="greeting">{greeting}</h2>
      <div className="containerProducts">
        <Card
          cant={10}
          producto="Conjunto Impermeable"
          imagen="conjunto-termico.jpg"
          addCard={addCard}
        />

        <Card
          cant={5}
          producto="Camiseta Nike Jag Dry Rep"
          imagen="remera-nike.jpg"
          addCard={addCard}
        />

        <Card
          cant={15}
          producto="Zapatillas adidas 4d Fwd Pulse"
          imagen="zapatillas-adidas.jpg"
          addCard={addCard}
        />
      </div>
    </div>
  );
}
