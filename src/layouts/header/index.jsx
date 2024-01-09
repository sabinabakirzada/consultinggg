import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import { Navbar } from "./styled.js";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <Navbar>
          <h1>
            <img
              src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png"
              alt=""
            />
          </h1>

          <ul>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Contact
            </NavLink>
            <NavLink
              to="/add"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Add
            </NavLink>
          </ul>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
