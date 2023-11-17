import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import ItemListContainer from "./assets/ItemListContainer";
import React from "react";
import ProductDetailContainer from "./assets/ProductDetailContainer";
import FormCompra from "./assets/FormCompra";

const App = () => {

  return (

    <BrowserRouter>

    

    <Routes>

    <Route exact path='/' element={<ItemListContainer/>} />
    
    <Route exact path='/product/:id' element={<ProductDetailContainer/>}/>

    <Route exact path='/category/:category' element={<ItemListContainer/>} />

    <Route exact path="/form" element={<FormCompra/>} />

    </Routes>

    </BrowserRouter>
  );
}

export default App;
