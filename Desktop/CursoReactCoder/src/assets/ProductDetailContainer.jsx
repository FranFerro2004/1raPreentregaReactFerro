import React, { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';
import { useParams } from 'react-router-dom';

const ProductDetailContainer = () => {
    const buscarProductos = async () => {
        const respuesta = await fetch("https://fakestoreapi.com/products");
        const datos = await respuesta.json();
        return datos;
    }

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        buscarProductos().then((p) => {
            setProductos(p);
        });
    }, []);

    console.log(productos)

    return (
        <>
            {
                productos.map((p) => {
                    return(
                        <ProductDetail 
                        key={p.id}
                        id={p.id}
                        nombre={p.title}
                        descripcion={p.description}
                        precio={p.price}
                        imagen={p.image}
                        />
                    )
                })
                    
            }
        </>
    );
}

export default ProductDetailContainer;
