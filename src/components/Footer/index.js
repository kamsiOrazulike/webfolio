import "./index.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        This project was made using React, Node, SCSS, HTML and Git/GitHub
        &nbsp;
        {`Copyright © Kamsiyonna Orazulike - Webfolio ${year}`}
        <div className="footer-link-container">
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/kamsiyonnaorazulike"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className="footer-link"
            href="https://github.com/kamsiOrazulike"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
