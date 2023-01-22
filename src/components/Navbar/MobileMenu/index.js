import "./index.scss";
import { useState } from "react";
import { Link as LinkRoute } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavLinks = (props) => {
  return (
    <div className="link-container">
      <ul className="nav-links">
        <LinkRoute
          to="projects"
          onClick={() => props.isMobile && props.closeMobileMenu()}
          style={{ width: "100%" }}
        >
          All Projects
        </LinkRoute>
        <LinkRoute
          to="about"
          onClick={() => props.isMobile && props.closeMobileMenu()}
          style={{ width: "100%" }}
        >
          About Me
        </LinkRoute>
        <LinkRoute
          to="contact"
          onClick={() => props.isMobile && props.closeMobileMenu()}
          style={{ width: "100%" }}
        >
          Contact Me
        </LinkRoute>
      </ul>
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
