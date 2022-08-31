
import "./Item.css";
import { Link } from "react-router-dom";

export default function Item({ marca, modelo, precio, imagen, Id }) {



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
  );
}
