import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

    return (
      <BrowserRouter>
        <NavBar />
 
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Almendra Pet Shop te da la bienvenida" />} />
  
          <Route path="/category/:idCategory" element={<ItemListContainer saludo="Almendra Pet Shop te da la bienvenida" />} />
  
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
  
        </Routes>    
      </BrowserRouter>
    );

  
}

export default App
