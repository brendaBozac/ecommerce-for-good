import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

const Item = ({producto}) => {

  const {id, price, image, title, description, category, rating} = producto

  return (
    <div className="prod-car">
      <h3>{title}</h3>
      <img className="img-item" src={image} alt={`foto del producto ${title}`} />
      <p>{description}</p>
      <p>{price}</p>
      <button>ver detalles</button>


    </div>
    
  )
}

export default Item