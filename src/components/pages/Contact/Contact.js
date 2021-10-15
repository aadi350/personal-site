import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedinIn,
  faDev,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div class="contactcontainer">
      <div class="main">
        <div class="maintext">Get in touch</div>
        <div class="contactbtn">
          <a href="mailto:a.aadi380@gmail.com" target="_blank">
            <button class="btn draw-border">Say Hi</button>
          </a>
        </div>
        <div class="social">
          <a
            href="https://www.linkedin.com/in/aadidev-sooknanan-043142166/"
            target="_blank">
            <FontAwesomeIcon id="sociallinkedin" className="socialicon draw-icon-border" icon={faLinkedinIn} />
          </a>
          <a href="https://twitter.com/_aadiDev" target="_blank">
            <FontAwesomeIcon id="socialtwitter" className="socialicon draw-icon-border" icon={faTwitter} />
          </a>
          <a href="https://dev.to/_aadidev" target="_blank">
            <FontAwesomeIcon id="socialdev" className="socialicon draw-icon-border" icon={faDev} />
          </a>
          <a href="https://github.com/aadi350/" target="_blank">
            <FontAwesomeIcon id="socialgithub" className="socialicon draw-icon-border" icon={faGithub} />
          </a>
        </div>

        
      </div>
    </div>
  );
};

export default Contact;
