import { Link as LinkRoute } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Title from "../../assets/imgs/Orazulike.png";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="navbar-container">
          <LinkRoute
            className="home-link"
            to="/"
            spy="true"
            offset={-70}
            duration={500}
          >
            <FontAwesomeIcon icon={faHome} />
          </LinkRoute>
          <LinkScroll
            className="to-section"
            to="top"
            spy={true}
            smooth={true}
            offset={-400}
            duration={500}
          >
            <img src={Title} className="nav-img" alt="Orazulike-text" />
          </LinkScroll>
          
          <LinkRoute className="to-section" to="projects">
            Projects
          </LinkRoute>

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
