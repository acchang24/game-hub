import "./NavBar.css";
import logo from "../assets/logo.svg";
import Search from "./Search";

// onSubmit prop to send search queries to App component
interface Props {
  onSubmit: (searchQuery: string) => void;
}

// Returns a navbar component
const NavBar = ({ onSubmit }: Props) => {
  return (
    <nav className="nav">
      <a href="/">
        <img className="logo-img" src={logo} alt="logo" />
      </a>
      <Search onSubmit={onSubmit}></Search>
    </nav>
  );
};

export default NavBar;
