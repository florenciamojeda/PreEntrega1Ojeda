import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
 
     return (
      <nav className="navbar">
        <Link to="/" className="brand-navbar">
          <img className="icon-navbar" src="/img/logo.jpg" />
        </Link>
  
        <ul className="categories-navbar">
          <Link to="/category/accesorios" className="categorie-navbar">
          Accesorios
          </Link>
          <Link to="/category/alimentos" className="categorie-navbar">
          Alimentos
          </Link>
          <Link to="/category/abrigos" className="categorie-navbar">
          Abrigos
          </Link>
          <Link to="/category/servicios" className="categorie-navbar">
          Servicios
          </Link>
        </ul>
        <CartWidget />
      </nav>
    );
  
};

export default NavBar;