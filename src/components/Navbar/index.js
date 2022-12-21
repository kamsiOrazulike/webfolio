import { Link as LinkRoute } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="navbar-container">
          <LinkRoute
            className="home-link"
            to="/"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <FontAwesomeIcon icon={faHome} />
          </LinkRoute>
          <LinkScroll
            className="to-section"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Me
          </LinkScroll>
          <LinkRoute className="to-section" to="projects">
            Projects
          </LinkRoute>
        </div>
      </div>
    </>
  );
};

export default Navbar;
