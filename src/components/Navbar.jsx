import React from 'react'
import {NavLink} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className='navbar' >
      <NavLink
       to = "/"
       className={({isActive}) =>
          isActive? "active" : ""}
      >
        Home
      </NavLink> {" | "}
      <NavLink
       to = "/about"
       className={({isActive}) =>
        isActive ? "active": ""}
       >
        About
      </NavLink> {" | "}
      <NavLink
       to = "/services"
       className={({isActive}) =>
        isActive ? "active": ""}
      >
        Services
      </NavLink> {" | "}
      <NavLink
       to = "/contact"
       className={({isActive}) =>
        isActive ? "active": ""
      }
       >
        Contact
      </NavLink>
        {" | "}
      <NavLink
        to= "/login"
        className={({isActive}) =>
          isActive ? "active": ""}
       >
        Login
      </NavLink> {" | "}
    </nav>
  );
}
export default Navbar;