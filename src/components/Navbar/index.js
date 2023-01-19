import { Link as LinkRoute } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import MobileMenuButton from "./MobileMenu";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <LinkRoute to="/" spy="true" offset={-70} duration={500} className="home-icon grow" >
          <FontAwesomeIcon icon={faHome} />
        </LinkRoute>
        <LinkRoute to="/" spy="true" offset={-70} duration={500} className="home-text">
          Home
        </LinkRoute>

        <div className="navbar-container">
          <LinkScroll
            className="to-section"
            to="featured"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Projects
          </LinkScroll>
          <LinkRoute
            className="to-section"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </LinkRoute>
          <LinkRoute
            className="to-section"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </LinkRoute>
        </div>

        <MobileMenuButton />
      </div>
    </>
  );
};

export default Navbar;
