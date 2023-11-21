import React, { useState, useEffect, useContext } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemListContainer = ({}) => {

    
        const [data, setData] = useState([])
        const [productos, setProductos] = useState([]);
        const [productosFijos, setProductosFijos] = useState([]);
        const { category } = useParams();



    useEffect(() => {
        const db = getFirestore()

        const itemColeccion = collection(db, "data")

        getDocs(itemColeccion).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setData(docs)
            setProductos(docs)
            setProductosFijos(docs)
        })

    },[])


        useEffect(() => {
            if (category === "todas") {
                setProductos(productosFijos);
            } else {
                const productosFiltrados = category
                    ? data.filter(producto => producto.category === category)
                    : data;
                setProductos(productosFiltrados);
            }
            setProductosFijos(data);
        }, [category]);


    return (
        <>
            <ItemList data={productos} />
        </>
    );
};

export default ItemListContainer;
