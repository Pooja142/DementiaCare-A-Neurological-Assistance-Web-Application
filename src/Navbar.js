import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import "./NavBar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <HeaderNav />
      <nav className="navbar">
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/quiz"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
             Cognitive
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Caregiver"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
             Caregiver
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/main-page"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Appointment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Dementiatalk"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Demtiatalk
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
