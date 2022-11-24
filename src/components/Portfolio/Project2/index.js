import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import homeScreen from "../../../assets/portfolio-imgs/GenesisLogin.png";
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
      <div className="container project1-page">
        <div className="text-zone">
          <h1 className="large-header">
            <AnimatedLetters
              CharArray={[
                "P",
                "a",
                "g",
                "e",
                " ",
                "i",
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
          </h1>

          <h2> Project duration: 7 months </h2>
        </div>
        <div className="overview">
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
                guidelines of what was possible for our team to develop.
                <br />
              </li>
            </ul>
          </div>
          <div className="role">
            <h3 className="overview-subheaders">Role</h3>
            <ul style={{ "list-style": "none" }}>
              <li>
                <b>UX Designer |</b> Idea Generation, Design, Wireframing
              </li>
            </ul>
          </div>
          <div className="tools">
            <h3 className="overview-subheaders">Tools</h3>
            <ul className="icon-list" >
              <li>
                <FontAwesomeIcon icon={faFigma} /> &nbsp; Figma
              </li>
              <li>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9"/> &nbsp; CSS/SCSS
              </li>
              <li>
                <FontAwesomeIcon icon={faHtml5} color="#F06529"/> &nbsp; HTML5
              </li>
              <li>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/> &nbsp; JavaScript
              </li>
              <li>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4"/> &nbsp; React
              </li>
            </ul>
          </div>
        </div>
        <img src={homeScreen} className="project1" alt="project1" />

        <div className="overview-ctxt">
          <div className="message">
            <h3 className="overview-subheaders">About the Project</h3>
            <ul style={{ "list-style": "none" }}>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse" />
    </>
  );
};

export default Project1;
