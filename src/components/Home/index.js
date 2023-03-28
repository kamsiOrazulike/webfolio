import { useState } from "react";
import "./index.scss";
import Me from "../../assets/imgs/Me5.png";
import { Link } from "react-router-dom";
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
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import ArrowToTop from "../ArrowToTop";

const About = () => {
  const skills = [
    {
      icon: <FontAwesomeIcon icon={faReact} color="#5ED4F4" />,
      name: "React",
    },
    {
      icon: <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />,
      name: "JavaScript",
    },
    {
      icon: <FontAwesomeIcon icon={faReact} color="#5ED4F4" />,
      name: "TypeScript",
    },
    {
      icon: <FontAwesomeIcon icon={faHtml5} color="#F06529" />,
      name: "HTML",
    },
    {
      icon: <FontAwesomeIcon icon={faCss3} color="#28A4D9" />,
      name: "CSS",
    },
    {
      icon: <FontAwesomeIcon icon={faPython} />,
      name: "Python",
    },
  ];

  const skillList = skills.map((skill, key) => (
    <li key={key} className="grow">
      {skill.icon} &nbsp; {skill.name}
    </li>
  ));

  return (
    <div className="about-page">
      <div className="box">
        <img src={Me} alt="me" className="profile-img" />
        <h2>
          Kamsi - <i className="highlight">Kam-see</i>
        </h2>
        <div className="goals">
          <i>
            "I aim to use my skills to develop products that meet and surpass
            the requests of the user."
          </i>
        </div>
        <div className="education">
          <div className="border-list">
            <h1>Queen Mary University of London</h1>
            <h2>September 2018 - June 2021</h2>
            <p>
              First Class BEng
              <span> Design, Innovation and Creative Engineering</span>
            </p>
          </div>

          <div className="border-list">
            <h1>Cranleigh School, Surrey</h1>
            <h2 className="highlight">September 2013 - June 2018</h2>
            <p>A Levels: Mathematics, Physics, Chemistry, Extended Project</p>
            <p>
              Qualification IGCSEs: Mathematics (A*), English Language (A),
              English Literature (A)
            </p>
          </div>
        </div>
      </div>
      <div className="overview-bio">
        <div className="message">
          <p>
            My passion is to create beautiful and functional solutions that have
            an direct positive impact on User Experience when using a digital
            product. Using a cross-disciplinary approach to design, I am able to
            think outside the box by combining UX design principles with my
            growing experience in Software Development, UI, Visual and Digital
            Design.
          </p>
          <p>
            I'm a Software Developer based in London with 2 years experience
            using tech stacks:
          </p>
          <ul className="ui-list">{skillList}</ul>

          <Link className="button-link" to="/about">
            + Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [CharClass, setLetterClass] = useState("animate-text");
  const nameLetterArray = [" ", "K", "a", "m", "s", "i"];

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="home-page">
        <div className="header-zone">
          <h1 id="top">
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
          <div className="link-group">
            <Link
              to="/projects"
              style={{ margin: "0 2rem" }}
              className="grow button-link"
            >
              Projects
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/kamsiOrazulike"
              className="grow button-link"
              style={{ margin: "0 2rem" }}
            >
              MY GITHUB
            </a>
          </div>
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
      <About />

      <ArrowToTop />
    </>
  );
};

export default Home;
