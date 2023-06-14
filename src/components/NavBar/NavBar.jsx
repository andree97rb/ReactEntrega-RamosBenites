import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"
import Logo from '../../asstes/img/logo.png'

const NavBar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid nav-contenedor">
        <img src={Logo} className='logo' alt="logo" />
        <a className="navbar-brand" href="#">RoyalComerce</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item">
            <NavLink className="nav-link" to={`/`}>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/categoria/1`}>Gammer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/categoria/2`} >Cómputo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/categoria/3`} >Tv</NavLink>
            </li>
          </ul>    
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default NavBar