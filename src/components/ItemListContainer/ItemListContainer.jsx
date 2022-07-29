import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  return (
    <div className="ItemListContainer">
      <h2 className="greeting">{greeting}</h2>

      <div className="containerProducts">
        <ItemCount
          cantidad={10}
          producto="Conjunto Impermeable"
          imagen="conjunto-termico.jpg"
        />

        <ItemCount
          cantidad={5}
          producto="Camiseta Nike Jag Dry Rep"
          imagen="remera-nike.jpg"
        />

        <ItemCount
          cantidad={15}
          producto="Zapatillas adidas 4d Fwd Pulse"
          imagen="zapatillas-adidas.jpg"
        />
      </div>
    </div>
  );
}
