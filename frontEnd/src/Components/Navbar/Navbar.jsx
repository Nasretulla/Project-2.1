import React, { useContext, useState } from "react";
import "../../Components/Navbar/Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../images/Logo/Logoo.jpeg";
import AuthContext from "../../context/authContext";
import swal from "sweetalert";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const loggoutUser = (event) => {
    event.preventDefault();
    swal({
      title: "Oletko varma, että pääset sisään?",
      icon: "warning",
      buttons: ["Ei", "Kyllä"],
    }).then((result) => {
      if (result) {
        authContext.logout();
        navigate("/login");
      }
    });
  };

  return (
    <nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">KOTI</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">MEISTÄ</NavLink>
        </li>
        <li>
          <NavLink to="/contact">OTA YHTEYTTÄ</NavLink>
        </li>
        <li>
          {
            authContext.isLoggedIn&&(<Link onClick={loggoutUser}>KIRJAUDU ULOS</Link>)
          }
        </li>
        <li>
          {authContext.isLoggedIn ? (
            <p
              className="login-box"
            >{`Tervetollua ${authContext.userInfos.name}`}</p>
          ) : (
            <NavLink to="/login">KIRJAUDU SISÄÄN</NavLink>
          )}
        </li>
        
      </ul>
    </nav>
  );
};
export default Navbar;
