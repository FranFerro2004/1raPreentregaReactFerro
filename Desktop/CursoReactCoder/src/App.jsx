import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./assets/ItemListContainer";
import NavMenu from "./assets/NavMenu";
import React from "react";
import ProductDetail from "./assets/ProductDetail";

const App = () => {

  return (

    <BrowserRouter>

    <NavMenu/>

    <Routes>

    <Route exact path='/' element={<ItemListContainer/>} />
    
    <Route exact path='/product/:id' element={<ProductDetail/>}/>

    <Route exact path='/category/:category' element={<ItemListContainer/>} />


    </Routes>

    </BrowserRouter>
  );
}

export default App;
