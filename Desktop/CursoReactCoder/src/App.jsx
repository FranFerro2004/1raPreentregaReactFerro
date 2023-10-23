import ItemListContainer from "./assets/ItemListContainer";
import NavMenu from "./assets/NavMenu";
import { useState, useEffect } from 'react';
import React from "react";

const App = () => {
  const buscarProductos = async () => {
    const respuesta = await fetch("https://fakestoreapi.com/products");
    const datos = await respuesta.json();
    return datos;
  }

  const [productosFijos, setProductosFijos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaElegida, setCategoriaElegida] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    buscarProductos().then((p) => {
      setProductos(p);
      setProductosFijos(p);

      const categorias = Array.from(new Set(p.map((producto) => producto.category)));
      setCategorias(categorias);
    });
  }, []);

  useEffect(() => {
    if (categoriaElegida === "Todas") {
      const productosPorCategoria = productosFijos;

      const productosFiltrados = productosPorCategoria.filter(p => p.title.toLowerCase().includes(busqueda.toLowerCase()));
      setProductos(productosFiltrados);
    } else {
      
      const productosPorCategoria = productosFijos.filter(p => p.category === categoriaElegida);
    
      const productosFiltrados = productosPorCategoria.filter(p => p.title.toLowerCase().includes(busqueda.toLowerCase()));
      setProductos(productosFiltrados);
    }
  }, [categoriaElegida, busqueda]);

  const filtrarCategoria = (c) => {
    setCategoriaElegida(c);
  }

  const todasCategorias = () => {
    setCategoriaElegida("Todas");
  }

  const actualizarBusqueda = (b) => {
    setBusqueda(b);
  }

  return (
    <div>
      <NavMenu categorias={categorias} filtrarCategoria={filtrarCategoria} todasCategorias={todasCategorias} actualizarBusqueda={actualizarBusqueda} />
      <ItemListContainer productos={productos} />
    </div>
  );
}

export default App;
