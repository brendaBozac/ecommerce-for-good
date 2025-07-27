import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartContextProvider = ( {children}) => {


    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState([1])


    const agregarAlCarrito = (producto) => {
        const productoDuplicado = cart.find((p) => p.id === producto.id)

        if (productoDuplicado) {
            setCart(cart.map((p) => {
                p.id === producto.id ? {...p, quantity: p.quantity + producto.quantity} : p
            }))
        } else {
            setCart([...cart, producto])
        }
    }


    const reiniciarCantidad = () => {
        setQuantity(1);
    }


    const eliminarProducto = (id) => {
        const newCart = cart.filter(e => e.id !== id);
        setCart(newCart);
    }


    return (

        <CartContext.Provider value={{cart, quantity, setQuantity, reiniciarCantidad, eliminarProducto}}>
            {children}
        </CartContext.Provider>
    )

}