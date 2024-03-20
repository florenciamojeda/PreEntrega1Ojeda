import React from 'react'
import CartWidget from './CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar" >
        <div className="brand">
        <img src="img/logo.jpg" alt="Logo" style={{ width: '150px', height: 'auto' }} />
        </div>
         
        <ul>
            <li>Accesorios</li>
            <li>Alimentos</li>
            <li>Abrigos</li>
            <li>servicios</li>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default NavBar