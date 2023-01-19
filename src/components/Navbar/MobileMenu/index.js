import "./index.scss";
import { useState } from "react";
import { Link as LinkRoute } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavLinks = () => {
  return (
    <div className="link-container">
      <ul className="nav-links">
        <LinkRoute to="about">About Me</LinkRoute>
        <LinkRoute to="contact">Contact Me</LinkRoute>
        <LinkRoute to="projects">All Projects</LinkRoute>
      </ul>
    </div>
  );
};

const MobileMenuButton = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = <FontAwesomeIcon className="hamburger-menu grow" icon={faHamburger} />;
  const closeIcon = <FontAwesomeIcon className="hamburger-menu grow" icon={faTimes} />

  return (
    <>
      <div onClick={() => setOpen(!open)}>
        {open ? closeIcon : hamburgerIcon}
      </div>
      {open && <NavLinks />}
    </>
  );
};

export default MobileMenuButton;
