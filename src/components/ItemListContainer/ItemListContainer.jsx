import {  useEffect,  useState } from 'react'
import './ItemListContainer.css'
/* import { getProductos } from '../../asynckMock' */
import Item from '../Item/Item'
import './ItemListContainer.css'


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {

    /* getProductos()
      .then((res) => setProductos(res))
      .catch()
      .finally(() => setCargando(false)) */

    fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then((res) => setProductos(res))
            .finally(() => setCargando(false))
  }, [])

/* console.log(productos) */


/* patron de retorno anticipado  -  retorno temprano */

if(cargando){ return ( 
  <h2>
    Cargando...
  </h2>

)}
  return (
    <div className='item-list-container'>

    {productos.map((el) => {
      return (
        <Item key={el.id} producto={el} />
      )
    })}


    </div>
  )
}

export default ItemListContainer