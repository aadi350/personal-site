import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <input type="checkbox" class="toggle" id="nav-toggle"></input>
      <label for="nav-toggle" id="nav-toggle-label">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </label>
      <nav>
        <div class="logo">
          <Link class="logotext" to="/">
            adi
          </Link>
        </div>

        <ul class="menu-items">
          <li class="menu-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li class="menu-item">
            <Link to="/skills">Skills</Link>
          </li> 
          <li class="menu-item">
            <a href="http://www.linkedin.com/in/aadidev-sooknanan-043142166/#experience-section">Experience</a>
          </li>
          <li class="menu-item">
            <a href="https://gist.github.com/aadi350" target="_blank">Gists</a>
          </li>

          <li class="menu-item">
            <a href="https://dev.to/_aadidev" target="_blank">Writing</a>
          </li>
          <li class="menu-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* <div class="menu-item effect-underline">
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
        </div> */}
    </header>
  );
};

export default Navbar;
