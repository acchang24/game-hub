import "./NavBar.css";
import logo from "../assets/logo.svg";
import Search from "./Search";

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/">
        <img className="logo-img" src={logo} alt="logo" />
      </a>
      <Search></Search>
      <div>Toggler</div>
    </nav>
  );
};

export default NavBar;
