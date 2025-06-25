import React from 'react'
import { Link } from 'react-router-dom'
import CardWidget from '../CardWidget/CardWidget'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav>
        <h1>Soy la marca-brand</h1>

        <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/electronics">Electrónica</Link></li>
        <li><Link to="/category/jewelery">Joyería</Link></li>
        <li><Link to="/category/men's clothing">Ropa de Hombre</Link></li>
        <li><Link to="/category/women's clothing">Ropa de Mujer</Link></li>
      </ul>

        <CardWidget />

    </nav>
  )
}

export default Navbar