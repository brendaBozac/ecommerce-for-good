import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    const [prodId, setProdId] = useState(1)


    const mostrarSiguiente = () => {
        setProdId(prodId + 1)
    }
 

    const mostrarAnterior = () => {
        setProdId(prodId - 1)
    }


    useEffect( () => {
        const fetchProducto = async () => {
            try {
                const res = await fetch (`https://fakestoreapi.com/products/${prodId}`)
                const data = await res.json()
                setProducto(data)

            } catch(error) {
                setError(error)
            } finally {
                setCargando(false)
            }
        }
        fetchProducto()
    }, [prodId])

    /* console.log(producto) */
  return (

    <>
    {
    cargando ?
    <h3>cargando.....</h3>
    :
    <ItemDetail producto={producto} mostrarSiguiente = {mostrarSiguiente} mostrarAnterior= {mostrarAnterior} />
    }
    </>
    
  )
}

export default ItemDetailContainer