import  { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import './CartItem.css'

const CartItem = ({producto}) => {

   const {eliminarProducto} = useContext(CartContext)
  return (
    <div className='carritoContenedor'>

      <div className='cartItemContainer'>

        <div className='fotoBreack'><img src={producto.imagen} alt="imagen del producto comprado" /></div>
        <div className='textoCarrito'>
          <h2>Producto: {producto.nombre}</h2> 
          <p>Precio (x unid): {producto.precio}</p>
          <p>Cantidad: {producto.quantity}</p>
          <p>Total: ${producto.precio * producto.quantity}</p>
          <button onClick={()=> eliminarProducto(producto.id)} className='botonSecundario btnCard'>Eliminar</button>
        </div>

      </div>

    </div>
  )
}

export default CartItem