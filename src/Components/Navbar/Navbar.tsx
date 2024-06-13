import "./Navbar.scss";
import logo from "../../assets/knu-logo.png";
import { Link } from "react-router-dom";
import Faculties from "../pages/Faculties/Faculties";
import Institutes from "../pages/Institutes/Institutes";
import Home from "../pages/Home/Home";

const Navbar = () => {
  return (
    <>
      <div className="brand-bar">.</div>
      <div className="navbar">
        <Link className="logo-link" to="/home" element={<Home />}>
          <div className="logos">
            <img src={logo} alt="" className="logo" />
            <h1>KNU</h1>
          </div>
        </Link>
        <ul>
          <li>
            <Link className="link" to="/faculties" element={<Faculties />}>
              Факультеттер
            </Link>
          </li>
          <li>
            <Link className="link" to="/institutes" element={<Institutes />}>
              Институттар
            </Link>
          </li>
          <li>
            <Link className="contact-us">Байланышуу</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
