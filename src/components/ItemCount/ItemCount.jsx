import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = () => {

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


  return (
    <div className='item-count'>
        <button onClick={decrementar}>-</button>

        <span>{count}</span>

        <button onClick={incrementar}>+</button>


    </div>
  )
}

export default ItemCount