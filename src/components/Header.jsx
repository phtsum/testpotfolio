import "../styles/Header.scss";

const Header = () => {
  return (
    <nav className="main-header">
      <div className="logo">ABUBEKER NASSIR</div>
      <ul className="nav-links">
        <li><a href="#highlights">HIGHLIGHTS</a></li>
        <li><a href="#gallery">GALLERY</a></li>
        <li><a href="#club">CLUB</a></li>
        
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Header;
