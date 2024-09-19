import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <ul className="main-nav">
        <NavBar link="/" elemento="Home" />
        <NavBar link="/favorites" elemento="Favoritos" />
        <NavBar link="/peliculas" elemento="Peliculas" />
      </ul>
    </nav>
  );
};

export default Header;
