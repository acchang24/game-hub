import logo from "../assets/logo.svg";
import Search from "./Search";
import "./css/NavBar.css";

// Returns a navbar component
const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/">
        <img className="logo-img" src={logo} alt="logo" />
      </a>
      <Search></Search>
    </nav>
  );
};

export default NavBar;
