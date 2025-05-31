import React from 'react'

const ItemDetail = ({producto, mostrarAnterior, mostrarSiguiente}) => {

  const {id, price, image, title, description, category, rating} = producto

  return (
    <div className="prod-car">
      <h3>{title}</h3>
      <img className="img-item" src={image} alt={`foto del producto ${title}`} />
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={() => mostrarAnterior()}>ver Anterior</button>
      <button onClick={() => mostrarSiguiente()}>ver Siguiente</button>

      

    </div>
    
  )
}

export default ItemDetail