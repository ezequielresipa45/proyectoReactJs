import React, { useState } from "react";
import add from "../../images/add.png";
import remove from "../../images/remove.png";
import "./ItemCount.css";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";

export default function ItemCount({ cantidad }) {
  let stock = cantidad;

  const [count, setCount] = useState(1);

  const addItems = () => {
    count < stock
      ? setCount(count + 1)
      : Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Solo puedes añadir hasta ${stock} productos`,
        });
  };

  const removeItems = () => {
    count > 1 ? setCount(count - 1) : setCount(1);
  };

  return (
    <div className="container-count">
      <img onClick={() => addItems()} src={add} alt="add" />
      <p> {count} </p>
      <img onClick={() => removeItems()} src={remove} alt="remove" />
    </div>
  );
}
