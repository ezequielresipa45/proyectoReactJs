import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App"> 
      


    <BrowserRouter>
    <NavBar />
      <Routes>

    <Route path="/productos" element={<ItemListContainer greeting="¡LOS MEJORES PRECIOS!" />} />
    <Route path="/categorias/:idCategorias" element={<ItemListContainer />} />
    <Route path="/detalles/:id" element={<ItemDetailContainer />} />
     
     

      </Routes>

    </BrowserRouter>


    </div>
  );
}

export default App;
