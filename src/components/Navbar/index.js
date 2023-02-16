import "./index.scss";
import MobileMenuButton from "./MobileMenu";
import { Link as LinkRoute } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <LinkRoute to="/" className="home-icon grow">
          <FontAwesomeIcon icon={faHome} />
        </LinkRoute>
        <LinkRoute to="/" className="home-text">
          Home
        </LinkRoute>

        <div className="navbar-container">
          <LinkRoute className="to-section" to="projects">
            Projects
          </LinkRoute>
          <LinkRoute className="to-section" to="contact">
            Contact
          </LinkRoute>
          <a
            className="to-section"
            href="https://www.linkedin.com/in/kamsiyonnaorazulike"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            className="to-section"
            href="https://github.com/kamsiOrazulike"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <MobileMenuButton />
      </div>
    </>
  );
};

export default Navbar;
