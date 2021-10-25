import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav id="menu">
      <div class="logo">
          <Link class="logotext" to="/">adi</Link>
      </div>

      
      <div class="menu-items">
        <div class="menu-item effect-underline">
          <Link  to="/projects">Projects</Link>
        </div>
        <div class="menu-item">
          <Link to="/skills">Skills</Link>
        </div>
        <div class="menu-item">
          <Link to="/experience">Experience</Link>
        </div>
        <div class="menu-item">
          <Link to="/writing">Writing</Link>
        </div>
        <div class="menu-item">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
