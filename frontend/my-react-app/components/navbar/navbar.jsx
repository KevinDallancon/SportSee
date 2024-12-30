

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img alt="SportSee" className="logo" />
        <div className="nav-links">
          <a href="/" className="nav-link">Accueil</a>
          <a href="/profile" className="nav-link">Profil</a>
          <a href="/settings" className="nav-link">Réglage</a>
          <a href="/community" className="nav-link">Communauté</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;