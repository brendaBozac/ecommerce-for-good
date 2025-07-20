import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useNavigate, useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()


    const mostrarSiguiente = () => {
        let ruta = id*1 + 1
        navigate(`/item/${ruta}`)
    }
 

    const mostrarAnterior = () => {
        let ruta = id*1 - 1
        navigate(`/item/${ruta}`)
    }


    useEffect( () => {
        const fetchProducto = async () => {
            try {
                const res = await fetch (`https://fakestoreapi.com/products/${id}`)
                const data = await res.json()
                setProducto(data)

            } catch(error) {
                setError(error)
            } finally {
                setCargando(false)
            }
        }
        fetchProducto()
    }, [id])

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