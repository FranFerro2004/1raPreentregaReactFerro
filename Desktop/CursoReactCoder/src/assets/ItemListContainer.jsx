import React from 'react'
import {useState , useEffect} from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {


    const buscarProductos = async() => {
            const respuesta = await fetch ("https://fakestoreapi.com/products")
            const dato = await respuesta.json()
            return dato
        }

        const [productos, setProductos] = useState([])

        useEffect( () => {
            buscarProductos().then((p) => setProductos(p))
        },[]
        )


    return (
        <>
        <ItemList> productos = {['productos']} </ItemList>
        </>
    )
    
}

export default ItemListContainer