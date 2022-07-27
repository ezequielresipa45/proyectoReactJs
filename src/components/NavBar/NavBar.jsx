import logo from "../../images/bbva-logo.png";
import cash from "../../images/cash.svg";
import profile from "../../images/myprofile.svg";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <div className="navBar">
      <a href="index.html">
        <img className="logo" src={logo} alt="bbva-logo" />
      </a>
      <div className="contenedorParrafos">
        <p className="solicitarTarjeta">
          <img src={cash} alt="Cash" />
          Solicitá tu Tarjetas de Crédito
        </p>

        <p>|</p>

        <p className="haceteCliente">
          <img src={profile} alt="MyProfile" />
          Hacete Cliente
        </p>
      </div>
      <ul>
        <li>
          <a href="clientes.html">Clientes</a>
        </li>
        <li>
          <a href="nosotros.html">Sobre Nosotros</a>
        </li>
        <li>
          <a href="contacto.html">Contacto</a>
        </li>

        <li>
          <CartWidget />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
