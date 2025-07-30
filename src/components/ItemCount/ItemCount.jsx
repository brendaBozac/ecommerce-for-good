import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import './ItemCount.css'
import { Link } from 'react-router-dom'


const ItemCount = ({pulsarComprar}) => {

    const { quantity, setQuantity, cart} = useContext(CartContext)

    const increment = () => {
        if (quantity >= 1) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    

  return (
    <div className='item-count'>

        <h4 className='tituloDeCantiidad'>Cantidad</h4>

        <div className='controls'>

            <button onClick={decrement}>-</button>

            <h4>{quantity}</h4>

            <button onClick={increment}>+</button>

        </div>

        <div className='botonesAlCarrito'>

            <button className='botonGeneral' onClick={ () => pulsarComprar(quantity)}>Agregar al Carrito</button>

            {cart.length > 0 && 
            <Link to='/Cart/Cart'>
                <button className='botonSecundario'>Ir al Carrito</button>
            </Link>
            }

        </div>

       

    </div>
  )
}

export default ItemCount