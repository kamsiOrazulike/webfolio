import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import Me from "../../assets/imgs/Me1.png";
import { useState } from "react";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
// import CranleighCrest from "../../assets/imgs/Cranleigh-crest.png";
// import QMULCrest from "../../assets/imgs/QMULCrest.png";
// import { faFigma } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  const [CharClass, setLetterClass] = useState("animate-text");

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 3000);

  return (
    <>
      <div className="container about-page" id="about">
        <div className="text-zone">
          <div className="box">
            <h1>
              <AnimatedLetters
                CharClass={CharClass}
                CharArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                indx={15}
              />
            </h1>
            <img src={Me} alt="me" className="profile-img" />
            <h2>
              Kamsi - <i className="highlight">Kam-see</i>{" "}
            </h2>
            <div className="goals">
              <p>
                "I want to use my design and dev skills in an industry that
                creates products that makes the lives of others easier."
                <br />
              </p>
            </div>
          </div>

          <div className="overview-bio">
            <div className="message">
              <h3 className="overview-subheaders">Bio:</h3>
              <ul style={{ "list-style": "none", "text-align": "left" }}>
                <li>
                  I'm a Software Developer based in London with skills
                  predominantly in <span className="highlight">JavaScript</span>
                  , <span className="highlight">HMTL</span>,
                  <span className="highlight"> CSS/SCSS</span> and
                  <span className="highlight"> React/TypeScript</span> and a
                  love for Frontend design & animations.
                  <br />
                </li>
                <li>
                  As a
                  <span className="highlight">
                    &nbsp;Design, Innovation and Creative Engineering&nbsp;
                  </span>
                  graduate (What a mouthful!). I understand the process of
                  creating meaningful experiences for users. I empathise with
                  the user stepping into their shoes in order to discover
                  problems and design creative solutions.
                  <br />
                </li>
                <li>
                  My passion is to create beautiful and functional solutions
                  that have an overall positive impact on User Experience when
                  using a digital product.
                  <br />
                </li>
              </ul>
            </div>
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
            <div className="box face3">
              {/* <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" /> */}
            </div>
            <div className="box face4">
              {/* <FontAwesomeIcon icon={faFigma} color="#fff" /> */}
            </div>
            <div className="box face5">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="box face6">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
          </div>
        </div>

        <div className="content-zone">
          {/* <h1>
            <AnimatedLetters
              CharClass={CharClass}
              CharArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
              indx={15}
            />
          </h1> */}
        </div>
      </div>
    </>
  );
};

export default About;
