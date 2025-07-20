import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {

  const {id, price, image, title, description, category, rating} = producto

  return (
    <div className="prod-car">
      <h3>{title}</h3>
      <img className="img-item" src={image} alt={`foto del producto ${title}`} />
      <p>{description}</p>
      <p>{price}</p>
      <Link to={`/item/${id}`} className='btn' >ver detalles</Link>

      

    </div>
    
  )
}

export default Item