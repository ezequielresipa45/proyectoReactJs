import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Inicio from "./components/Inicio/Inicio";
import CartProvider from "./store/cartContex";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import CartProvisorio from "./components/CartProvisorio/CartProvisorio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route
              path="/productos"
              element={<ItemListContainer greeting="¡LOS MEJORES PRECIOS!" />}
            />
            <Route
              path="/categorias/:idCategorias"
              element={<ItemListContainer />}
            />
            <Route path="/detalles/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartProvisorio />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
