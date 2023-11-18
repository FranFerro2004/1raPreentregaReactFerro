import { createContext, useState } from "react";

export const CartContext = createContext({
    carrito: []
})

export const CartProvider = ({
    children}) => {

        const [carrito, setCarrito] = useState([])

        const agregarAlCarrito = (id, cantidad, nombre, precio) => {
            if (cantidad > 0) {
            
                const productoExistente = carrito.find((producto) => producto.id === id);
            
                if (productoExistente) {
                    
                    const nuevoCarrito = carrito.map((producto) =>
                    producto.id === id ? { ...producto, cantidad: producto.cantidad + cantidad } : producto
                    );
                    setCarrito(nuevoCarrito);
                } else {

                    const nuevoProducto = { id, nombre, precio, cantidad};
                    setCarrito([...carrito, nuevoProducto]);
                }
            
            }
        };




        return(
            <>
                <CartContext.Provider value={{agregarAlCarrito}}>
                    {children}
                </CartContext.Provider>
            </>
        )
    }

export default CartProvider