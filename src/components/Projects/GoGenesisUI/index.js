import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import homeScreen from "../../../assets/portfolio-imgs/GenesisUI/GenesisLogin.png";
import paymentScreen from "../../../assets/portfolio-imgs/GenesisUI/PaymentPage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedLetters from "../../AnimatedLetters";

const GoGenesisProject = () => {
  const [CharClass, setLetterClass] = useState("animate-text");
  const TitleArray = [
    "G",
    "o",
    " ",
    "G",
    "e",
    "n",
    "e",
    "s",
    "i",
    "s",
    "!",
  ];

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="projects-page">
        <div className="text-zone">
          <h1 id="top">
            <AnimatedLetters
              CharArray={TitleArray}
              CharClass={CharClass}
              indx={15}
            />
          </h1>
          <h2> Project duration: 1 year (ongoing) </h2>
        </div>
        <img src={homeScreen} className="project-img" alt="projectimage" />

        <div className="overview">
          <div className="role">
            <h3 className="overview-subheaders">Role</h3>
            <ul style={{ "listStyle": "none" }}>
              <li>
                <b>UI Designer: </b> Idea Generation, Design, Wireframing <br />
                <b>Frontend Developer: </b> Programmer
              </li>
            </ul>
          </div>
          <div className="tools">
            <h3 className="overview-subheaders">Tools</h3>
            <ul className="icon-list">
              <li>
                <FontAwesomeIcon icon={faFigma} /> &nbsp; Figma
              </li>
              <li>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> &nbsp;
                CSS/SCSS
              </li>
              <li>
                <FontAwesomeIcon icon={faHtml5} color="#F06529" /> &nbsp; HTML5
              </li>
              <li>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> &nbsp;
                JavaScript
              </li>
              <li>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> &nbsp; React
              </li>
            </ul>
          </div>
          <div className="goals">
            <h3 className="overview-subheaders">Goals</h3>
            <ul style={{ "listStyle": "numbers" }}>
              <li>
                Company saw huge traffic coming into the website that wasn't
                reflected in ticket purchases.
                <br />
              </li>
              <li>
                The goal was to design a web/mobile GUI that stayed within the
                guidelines of what was possible for our team to develop while
                minimising user interactions in the purchase process.
                <br />
              </li>
            </ul>
          </div>
        </div>

        <div className="overview-ctxt">
          <div className="message">
            <h3 className="overview-subheaders">About the Project</h3>
            <ul style={{ "listStyle": "none" }}>
              <li>
                I begun this project while on a contract as a Frontend Developer
                with Genesis Group Ltd.
              </li>
              <br />
              <li>
                As the team was full of developers and because of I already had
                experience using Figma I took on the challenge of designing the
                application frontend.
              </li>
            </ul>
          </div>
          <>
            <img
              src={homeScreen}
              className="subphoto"
              alt="originalHomeScreen"
            />
            <img
              src={paymentScreen}
              className="subphoto"
              alt="originalHomeScreen"
            />
          </>
        </div>
      </div>
      <Loader type="ball-pulse" />
    </>
  );
};

export default GoGenesisProject;
