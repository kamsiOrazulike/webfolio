import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import homeScreen from "../../../assets/portfolio-imgs/GenesisLogin.png";
import paymentScreen from "../../../assets/portfolio-imgs/PaymentPage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedLetters from "../../AnimatedLetters";

const Project1 = () => {
  const [CharClass, setLetterClass] = useState("animate-text");

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="project1-page">
        <div className="text-zone">
          <h2 className="large-header" id="home">
            <AnimatedLetters
              CharArray={[
                "P",
                "a",
                "g",
                "e",
                " ",
                "D",
                "e",
                "s",
                "i",
                "g",
                "n",
                " ",
                "I",
                "n",
                " ",
                "P",
                "r",
                "o",
                "g",
                "r",
                "e",
                "s",
                "s",
              ]}
              CharClass={CharClass}
              indx={15}
            />
          </h2>
          <h1> Genesis GO! </h1>
          <h2> Project duration: 1 year </h2>
        </div>
        <img src={homeScreen} className="project2" alt="project2" />

        <div className="overview">
          <div className="role">
            <h3 className="overview-subheaders">Role</h3>
            <ul style={{ "list-style": "none" }}>
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
            <ul style={{ "list-style": "numbers" }}>
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
            <ul style={{ "list-style": "none" }}>
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

export default Project1;
