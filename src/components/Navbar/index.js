import { Link as LinkRoute } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <LinkRoute
          className="home-link"
          to="/"
          spy="true"
          offset={-70}
          duration={500}
        >
          <FontAwesomeIcon icon={faHome} />
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
          <LinkScroll
            className="to-section"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </LinkScroll>
        </div>
      </div>
    </>
  );
};

export default Navbar;
