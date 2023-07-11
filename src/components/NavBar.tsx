import "./NavBar.css";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/">
        <img className="logo-img" src={logo} alt="logo" />
      </a>

      <div>search</div>
      <div>toggler</div>
    </nav>
  );
};

export default NavBar;
