import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends React.Component {
  render() {
    const fb = <FontAwesomeIcon icon={faFacebookF} />;

    const ig = <FontAwesomeIcon icon={faInstagram} />;
    
    const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />;
    
    const twitter = <FontAwesomeIcon icon={faTwitter} />;
    
    return (
      <footer className="container-fluid">
        <address className="flex-parent">
          <div>
            <img src="images/logo.png" alt="logo" className="logo"></img>
          </div>
          <div>
            <div>Showcase</div>
            <div>Supports</div>
            <div>Services</div>
          </div>
          <div>
            <div>About us</div>
            <div>Contact us</div>
            <div>Affiliates</div>
            <div>Resources</div>
          </div>
          <div className="social">
            <span>
              <a href="https://facebook.com">{fb}</a>
            </span>
            <span>
              <a href="https://instagram.com">{ig}</a>
            </span>
            <span>
              <a href="https://linkedin.com/in/">{linkedin}</a>
            </span>
            <span>
              <a href="https://twitter.com">{twitter}</a>
            </span>
          </div>
        </address>
        <div className="copyright">&#169;copyright. All rights reserved.</div>
      </footer>
    );
  }
}
