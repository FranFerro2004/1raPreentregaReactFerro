import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./assets/ItemListContainer";
import NavMenu from "./assets/NavMenu";
import { useState, useEffect } from 'react';
import React from "react";
import ProductDetailContainer from "./assets/ProductDetailContainer";
import ProductDetail from "./assets/ProductDetail";
import Item from "./assets/Item";

const App = () => {

  return (

    <BrowserRouter>

    <NavMenu/>

    <Routes>

    <Route exact path='/' element={<ItemListContainer/>} />
    
    <Route exact path='/product/:id' element={<ProductDetail/>}/>


    </Routes>

    </BrowserRouter>
  );
}

export default App;
