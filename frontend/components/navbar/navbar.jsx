import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <header >
        <NavLink className="nav-link" to="/">
          <img alt="SportSee" className="logo" src='../../assets/logo.png' />
        </NavLink>
        <NavLink className="nav-link" to="/" >Accueil</NavLink>
        <NavLink className="nav-link" to="/profile" >Profil</NavLink>
        <NavLink className="nav-link" to="/settings" >Réglage</NavLink>
        <NavLink className="nav-link" to="/community">Communauté</NavLink>
    </header>
  );
};

export default Navbar;