import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = ({id}) => {

    const [count, setCount] = useState(1);

    const incrementar = () => {
        if (count < 12) {
            setCount(count + 1)
        }
    }

    const decrementar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const comprar = () => {
        console.log(`compraste ${count} unidades del producto ${id}`)
    }

  return (
    <div className='item-count'>
        <button onClick={decrementar}>-</button>

        <span>{count}</span>

        <button onClick={incrementar}>+</button>

        <button onClick={comprar}>Comprar</button>

    </div>
  )
}

export default ItemCount