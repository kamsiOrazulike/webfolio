import "./index.scss";
import { useState } from "react";
import { Link as LinkRoute } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const NavLinks = (props) => {
  return (
    <div className="link-container">
      <div className="nav-links">
        <LinkRoute
          to="/"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Home
        </LinkRoute>

        <LinkRoute
          to="projects"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          All Projects
        </LinkRoute>

        <LinkRoute
          to="contact"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Contact Me
        </LinkRoute>

        <div className="link-group">
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
      </div>
    </div>
  );
};

const MobileMenuButton = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FontAwesomeIcon className="hamburger-menu grow" icon={faHamburger} />
  );
  const closeIcon = (
    <FontAwesomeIcon className="hamburger-menu grow" icon={faTimes} />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <div onClick={() => setOpen(!open)}>
        {open ? closeIcon : hamburgerIcon}
      </div>
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </>
  );
};

export default MobileMenuButton;
