import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import About from "../About";
import Contact from "../Contact";
import ProfileImg from "../../assets/imgs/Me3.png";
import Project1 from "../../assets/portfolio-imgs/SouncloudHome.png";
import Project2 from "../../assets/portfolio-imgs/GenesisLogin.png";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  //use state hook to define state of my const CharClass
  const [CharClass, setLetterClass] = useState("animate-text");
  const nameLetterArray = [" ", "K", "a", "m", "s", "i"];

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="container home-page">
        <div className="project-container">
          <img src={Project1} className="project1" alt="project1" />
          <div className="card">
            <Link to="/featured1">
              <h3>
                Soundcloud <FontAwesomeIcon icon={faArrowRight} />
              </h3>
            </Link>
          </div>
        </div>

        <div className="text-zone">
          <LinkScroll
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src={ProfileImg} alt="me" className="myImage shrink" />
          </LinkScroll>
          <h1 className="introduction" id="home">
            <span className={CharClass}>H</span>
            <span className={`${CharClass} _12`}>i</span>
            <span className={`${CharClass} _13`}>,</span>
            <span className={`${CharClass} _14`}> </span>
            <span className={`${CharClass} _15`}>I</span>
            <span className={`${CharClass} _16`}>'</span>
            <span className={`${CharClass} _17`}>m</span>

            <AnimatedLetters
              CharClass={CharClass}
              CharArray={nameLetterArray}
              indx={16}
            />
            <br />
          </h1>
          <h2> Web Developer | UI Designer</h2>
          <br />
          <LinkScroll
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="contact-btn"
          >
            GET IN TOUCH
          </LinkScroll>
          <br />
          <Link to="/projects" className="projects-btn">
            PROJECTS
          </Link>
        </div>

        <div className="project-container">
          <img src={Project2} className="project2" alt="project2" />
          <div className="card">
            <Link to="/featured2">
              <h3>
                Genesis GO! <FontAwesomeIcon icon={faArrowRight} />
              </h3>
            </Link>
          </div>
        </div>
      </div>

      <About />
      <Contact />
    </>
  );
};

export default Home;
