import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav>
        <h1>Soy la marca-brand</h1>

        <ul>
            <li>categ 1</li>
            <li>categ 2</li>
            <li>categ 3</li>
            <li>categ 4</li>
        </ul>

        <CardWidget />

    </nav>
  )
}

export default Navbar