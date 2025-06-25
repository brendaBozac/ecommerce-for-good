import {  useEffect,  useState } from 'react'
import './ItemListContainer.css'
/* import { getProductos } from '../../asynckMock' */
import Item from '../Item/Item'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {

    /* getProductos()
      .then((res) => setProductos(res)) 
      .catch()
      .finally(() => setCargando(false)) */


    const url = categoryId
      ? `https://fakestoreapi.com/products/category/${categoryId}`
      : 'https://fakestoreapi.com/products'


    fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then((res) => setProductos(res))
            .finally(() => setCargando(false))
  }, [categoryId])

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