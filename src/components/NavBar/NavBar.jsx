import { Link } from "react-router";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <ul>
        <li><Link to="/addition" className="nav-link">Dodawanie</Link></li>
        <li><Link to="/substraction" className="nav-link">Odejmowanie</Link></li>
        <li><Link to="/multiplication" className="nav-link">Mnożenie</Link></li>
        <li><Link to="/division" className="nav-link">Dzielenie</Link></li>
      </ul>
    </>
  )
}

export default NavBar;
