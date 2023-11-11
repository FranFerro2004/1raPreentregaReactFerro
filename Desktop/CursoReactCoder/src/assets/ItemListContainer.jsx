import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import NavMenu from './NavMenu';

const ItemListContainer = ({}) => {
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
            console.log("respuesta de api", p)
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

    console.log(productosFijos)
    console.log(productos)
    console.log(categorias)

    return (
        <>
            <ItemList productos={productos} />

            <NavMenu categorias={categorias} filtrarCategoria={filtrarCategoria} todasCategorias={todasCategorias} actualizarBusqueda={actualizarBusqueda} />
        </>
    );
}

export default ItemListContainer;
