import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";
import Avatar from '../Avatar/Avatar';
import Logo from '../../asstes/img/logo.png'
import './NavBar.css'

const NavBar = ({ username, avatarUrl, onLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid container-nav">
                <img src={Logo} className='logo' alt="logo" />
                <a className="navbar-brand" href="#">RoyalComerce</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`/categoria/1`}>Gammers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`/categoria/2`} >Oficina</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`/categoria/3`} >Fiesta</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`/categoria/4`} >Accesorios</NavLink>
                        </li>
                    </ul>
                    {username && avatarUrl && onLogout && <Avatar username={username} avatarUrl={avatarUrl} onLogout={onLogout} />}
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
