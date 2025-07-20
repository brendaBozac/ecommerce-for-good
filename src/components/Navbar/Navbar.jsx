import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardWidget from '../CardWidget/CardWidget'
import './Navbar.css'



const Navbar = () => {
 
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res=>res.json())
      .then(json=>setCategorias(json))

  }, [])

  return (
    <nav>
      
      <Link to='/'>
        <h1>Soy la marca-brand</h1>
      </Link>

      <ul className="nav-links">
        {
          categorias.length > 0 && categorias.map(e => <Link key={e} to={`/category/${e}`}>{e + " "}</Link>)
        }
      </ul>

      <CardWidget />

    </nav>
  )
}

export default Navbar