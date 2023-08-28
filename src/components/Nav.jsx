import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src="./assets/logo.png"></img>
        <div className="route-links">
          <NavLink to="/" className="navlink">
            HOME
          </NavLink>
          <NavLink to="/about" className="navlink">
            ABOUT
          </NavLink>
          {/* <NavLink to="/portfolio" className="navlink">
            PORTFOLIO
          </NavLink> */}
          <NavLink to="/quote" className="navlink">
            REQUEST QUOTE
          </NavLink>
          <NavLink to="/contact" className="navlink">
            CONTACT
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
