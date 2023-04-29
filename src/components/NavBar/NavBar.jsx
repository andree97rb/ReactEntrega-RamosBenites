import CartWidget from '../CartWidget/CartWidget';
import Avatar from '../Avatar/Avatar';
import Logo from '../../assets/img/logo.png'
import './NavBar.css'
import CategoryList from '../Categories/Categories';

const NavBar = ({ username, avatarUrl, onLogout }) => {
  const categories = [
    { id: 1, name: 'Gaming' },
    { id: 2, name: 'Casa' },
    { id: 3, name: 'Oficina' }
  ];

  const handleCategorySelect = (category) => {
    console.log(`Selected category: ${category.name}`);
  };

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
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Carrito</a>
            </li>
            <li className="nav-item">
              <CategoryList categories={categories} onCategorySelect={handleCategorySelect} />
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
