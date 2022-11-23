import "./index.scss";
import { Link as LinkRoute } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        {`Copyright © Kamsiyonna Orazulike - Webfolio ${year}`} <br />
        <div className="footer-link-container">
          <LinkRoute
            className="footer-link"
            to="https://www.linkedin.com/in/kamsiyonnaorazulike"
            spy="true"
            smooth="true"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </LinkRoute>
          <LinkRoute className="footer-link" to="" spy="true" smooth="true">
            <FontAwesomeIcon icon={faGithub} />
          </LinkRoute>
        </div>
      </footer>
    </>
  );
};

export default Footer;
