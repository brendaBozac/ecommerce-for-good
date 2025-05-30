import { useEffect, useState } from 'react'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect( () => {

        const fetchProducto = async () => {

            try {
                const res = await fetch ('https://fakestoreapi.com/products/1')
                const data = await res.json()
                setProducto(data)

            } catch(error) {
                setError(error)
            } finally {

                setCargando(false)
            }
        }

        fetchProducto()

    }, [])


    /* console.log(producto) */

  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer