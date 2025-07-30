import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom"

const ItemDetail = ({producto, mostrarAnterior, mostrarSiguiente}) => {

  const {id, price, image, title, description, category, rating} = producto
  const { agregarAlCarrito, quantity, reiniciarCantidad } = useContext(CartContext)


  const pulsarComprar = (quantity) => {
    agregarAlCarrito({...producto, quantity: quantity })
  }

  const funcionalidadBotonPrev = () => {
    reiniciarCantidad();
    mostrarAnterior();
  }

  const funcionalidadBotonNext = () => {
    reiniciarCantidad();
    mostrarSiguiente();
  }


  return (
    <div className="prod-car">
      <h3>{title}</h3>
      <img className="img-item" src={image} alt={`foto del producto ${title}`} />
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={() => funcionalidadBotonPrev()}>ver Anterior</button>
      <button onClick={() => funcionalidadBotonNext()}>ver Siguiente</button>

      <ItemCount id={id} pulsarComprar={pulsarComprar}/>

    </div>
    
  )
}

export default ItemDetail