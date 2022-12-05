import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import Me from "../../assets/imgs/Me5.png";
import { useState } from "react";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

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
                "I aim to use my skills to develop products that meet and
                surpass the requests of the user."
                <br />
              </p>
            </div>
          </div>

          <div className="overview-bio">
            <div className="message">
              <h3 className="overview-subheaders">Summary:</h3>
              <ul>
                <li>
                  I'm a Software Developer based in London with skills
                  predominantly in <span className="highlight">JavaScript</span>
                  , <span className="highlight">HMTL</span>,
                  <span className="highlight"> CSS/SCSS</span> and
                  <span className="highlight"> React/TypeScript</span> and a
                  love for Frontend design & animations.
                </li>
                <br />
                <li>
                  As a
                  <span className="highlight">
                    &nbsp;Design, Innovation and Creative Engineering&nbsp;
                  </span>
                  graduate (What a mouthful!). I understand the process of
                  product development and have a passion for creating meaningful
                  experiences for my user. I empathise with the user, stepping
                  into their shoes in order to discover problems and design
                  creative solutions.
                </li>
                <br />
                <li>
                  My passion is to create beautiful and functional solutions
                  that have an overall positive impact on User Experience when
                  using a digital product.
                  <br />
                </li>
              </ul>
            </div>
            <div className="message">
              <h3 className="overview-subheaders">Education:</h3>
              <ul>
                <li>
                  <h4>Queen Mary University of London</h4>
                  <h5 className="highlight">September 2018 - June 2021</h5>
                  <p>
                    First Class BEng: &nbsp;
                    <span>Design, Innovation and Creative Engineering</span>
                  </p>
                  <br />
                </li>
                <li>
                  <h4>Cranleigh School, Surrey</h4>
                  <h5 className="highlight">September 2018 - June 2021</h5>
                  <p>
                    A Levels: Mathematics, Physics, Chemistry, Extended Project
                  </p>
                  <p>
                    Qualification IGCSEs: Mathematics (A*), English Language
                    (A), English Literature (A)
                  </p>
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
      </div>
    </>
  );
};

export default About;
