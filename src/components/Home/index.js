import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import About from "../About";
import Contact from "../Contact";
import Featured from "../Featured/SoundCloudUI";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faFigma,
  faGitAlt,
  faPython,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ProfileImg from "../../assets/imgs/Me3.png";
// import Project1 from "../../assets/portfolio-imgs/SouncloudHome.png";
// import Project2 from "../../assets/portfolio-imgs/GenesisLogin.png";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [CharClass, setLetterClass] = useState("animate-text");
  const nameLetterArray = [" ", "K", "a", "m", "s", "i"];

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="home-page">
        <div className="text-zone">
          <h1 className="introduction" id="top">
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
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="shrink contact-btn"
          >
            VIEW RESUME
          </LinkScroll>
          <br />
          <Link to="/projects" className="shrink projects-btn">
            PROJECTS
          </Link>
        </div>

        <div className="cube-container">
          <div className="frontendcube cube1">
            <div className="box face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="box face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="box face3" />
            <div className="box face4" />
            <div className="box face5">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="box face6">
              <FontAwesomeIcon icon={faFigma} color="#FFFFFF" />
            </div>
          </div>
          <div className="backendcube cube2">
            <div className="box face1">
              <FontAwesomeIcon icon={faPython} color="#646464" />
            </div>
            <div className="box face2">
              <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
            </div>
            <div className="box face3" />
            <div className="box face4" />
            <div className="box face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="box face6">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
          </div>
        </div>
      </div>
      <LinkScroll
        to="top"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
        className="grow to-top"
      >
        <FontAwesomeIcon icon={faArrowCircleUp} />
      </LinkScroll>

      <Featured />
      <About />
      <Contact />
    </>
  );
};

export default Home;
