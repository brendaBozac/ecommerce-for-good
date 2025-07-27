import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartContextProvider = ( {children}) => {


    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState([1])

    return (

        <CartContext.Provider value={{cart, quantity, setQuantity}}>
            {children}
        </CartContext.Provider>
    )

}