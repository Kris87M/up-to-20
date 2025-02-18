import { NavLink } from "react-router";
import NavBar from "../NavBar/NavBar";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          upTo20
        </NavLink>
      </div>
      <h3>Wybierz działanie matematyczne</h3>
      <NavBar />
    </header>
  )
}

export default Header;
