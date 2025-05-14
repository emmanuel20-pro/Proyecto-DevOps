import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Brands from "./components/Brands";
import BrandProducts from "./components/BrandProducts";
import Account from "./components/Account";
import BottomNav from './components/BottomNav';
import "./App.css";

// Ejemplo de productos por marca
const productosPorMarca = {
  Puma: [
    {
      id: 1,
      nombre: "Puma RS-X3 Puzzle Sneakers",
      precio: 110,
      imagen: "https://via.placeholder.com/120",
      descripcion: "Zapatillas deportivas con un diseño inspirado en el estilo retro, combinando materiales como cuero, malla y gamuza. Su suela gruesa ofrece gran comodidad y soporte.",
      genero: "Unisex"
    }
    // ...otros productos
  ],
  Nike: [
    {
      id: 2,
      nombre: "Nike Air Max",
      precio: 120,
      imagen: "https://via.placeholder.com/120",
      descripcion: "Zapatillas Nike Air Max, máxima comodidad y estilo.",
      genero: "Unisex"
    }
    // ...otros productos
  ]
  // ...otras marcas
};

export const AppContext = React.createContext();

function App() {
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  return (
    <AppContext.Provider value={{
      marcaSeleccionada,
      setMarcaSeleccionada,
      agregarAlCarrito,
      productosPorMarca,
      carrito
    }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marcas" element={<Brands />} />
          <Route path="/cuenta" element={<Account />} />
        </Routes>
        <BottomNav />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
