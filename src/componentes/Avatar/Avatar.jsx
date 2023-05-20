import { useState } from 'react';
import "./Avatar.css"

const Avatar = ({ username, avatarUrl, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsOpen(false);
    onLogout();
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="avatar-dropdown"
        data-bs-toggle="dropdown"
        aria-expanded={isOpen}
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        <img className="avatar-image" src={avatarUrl} alt={`Avatar de ${username}`} />
      </button>
      <ul className="dropdown-menu" aria-labelledby="avatar-dropdown" onMouseLeave={closeDropdown}>
        <li>
          <span className="dropdown-item-text">{username}</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button className="dropdown-item" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;
