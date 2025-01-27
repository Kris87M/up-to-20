import { Link } from "react-router";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <ul>
        <li><Link to="/addition" className="nav-link">Dodawanie</Link></li>
        <li><Link to="/substraction" className="nav-link">Odejmowanie</Link></li>
      </ul>
    </>
  )
}

export default NavBar;
