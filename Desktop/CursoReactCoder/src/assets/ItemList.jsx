import React from 'react'
import ItemListContainer from './ItemListContainer'
import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <div>
            {
                productos.map((p) => {
                    return(
                        <Item  
                        key={p.id}
                        nombre={p.title}
                        descripcion={p.description}
                        precio={p.price}
                        imagen={p.image}
                        />
                    )
                })
                    
            }
        </div>
    )
}

export default ItemList