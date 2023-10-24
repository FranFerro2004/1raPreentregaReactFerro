import React, { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';

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


    return (
        <>
            <ProductDetail productos={productos} />
        </>
    );
}

export default ProductDetailContainer;
