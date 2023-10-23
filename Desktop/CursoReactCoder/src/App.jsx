import ItemListContainer from "./assets/ItemListContainer"
import NavMenu from "./assets/NavMenu"
import {useState , useEffect, useCallback, useImperativeHandle} from 'react'
import React from "react"




const App = () => {
  const buscarProductos = async () => {
    const respuesta = await fetch("https://fakestoreapi.com/products");
    const datos = await respuesta.json();
    return datos;
  }

  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    buscarProductos().then((p) => {
      setProductos(p);

      
      const categorias = Array.from(new Set(p.map((producto) => producto.category)));
      setCategorias(categorias);
    });
  }, []);

  const filtrarCategoria = () => {
      console.log(c)
    }



  return (
    <div>
      <NavMenu categorias={categorias} filtrarCategoria={filtrarCategoria}/>
      
      <ItemListContainer productos={productos}/>

      
    </div>
  );
}

export default App;

