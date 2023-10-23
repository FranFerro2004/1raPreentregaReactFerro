import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ productos }) => {
        
    return (
        <>
            <ItemList productos={productos} />
        </>
    );
}

export default ItemListContainer;
