import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import homeScreen from "../../../assets/portfolio-imgs/GenesisUI/tutorial1.png";
import tutorialScreen2 from "../../../assets/portfolio-imgs/GenesisUI/tutorial2.png";
import tutorialScreen3 from "../../../assets/portfolio-imgs/GenesisUI/tutorial3.png";
import accountPage from "../../../assets/portfolio-imgs/GenesisUI/accountPage.png";
import login from "../../../assets/portfolio-imgs/GenesisUI/login.png";
import createAccount from "../../../assets/portfolio-imgs/GenesisUI/createAccount.png";
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
  const TitleArray = ["G", "o", " ", "G", "e", "n", "e", "s", "i", "s", "!"];

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="projects-page">
        <div className="header-zone">
          <h1 id="top">
            <AnimatedLetters
              CharArray={TitleArray}
              CharClass={CharClass}
              indx={15}
            />
          </h1>
          <h2> Project duration: 1 year (ongoing) </h2>
        </div>
        <div className="overview">
          <div className="message">
            <h3> Overview </h3>
            <p>
              Genesis Group is a Hospitality and Entertainment company in
              Nigeria, with business interests in Hotels, Restaurants, Cinemas,
              Shopping Malls, Property Development, Outdoor Catering, Industrial
              Catering/Camp Management and Food Production.
              <br /> <br />
              The company is going through a phase where more innovative and
              creative business solutions are paramount. I was hired to work
              alongside the Innovative Strategy team made up of two Software
              developers and one Operations manager. We also worked in
              conjunction with the Marketing team of the company.
            </p>
          </div>
          <div className="wrapper">
            <div className="role">
              <h3>Role</h3>
              <p>
                User Research <br />
                Visuals <br />
                Interactions <br />
                Prototyping <br />
                Usability <br />
                Testing
              </p>
            </div>
            <div className="tools">
              <h3>Tools</h3>
              <p>
                <FontAwesomeIcon icon={faFigma} /> &nbsp; Figma <br />
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> &nbsp;CSS/SCSS
                <br />
                <FontAwesomeIcon icon={faHtml5} color="#F06529" /> &nbsp; HTML5
                <br />
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> &nbsp;
                JavaScript
                <br />
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> &nbsp;
                React/React Native
                <br />
              </p>
            </div>
          </div>
        </div>
        <img src={homeScreen} className="project-img" alt="projectimage" />

        <div className="header-zone">
          <h1>Opening Screens</h1>
        </div>

        <div className="overview-col">
          <div className="message">
            <h3 className="overview-subheaders">Colour and Alliteration</h3>
            <p>
              It was important that these initial <i>tutorial-like</i> pages
              were engaging and memorable not only through the graphics/visuals
              but also through the use of language/text.
            </p>
          </div>
          <div className="wrapper">
            <img src={homeScreen} className="subphoto" alt="homeScreen" />
            <img
              src={tutorialScreen2}
              className="subphoto"
              alt="tutorialScreen2"
            />
            <img
              src={tutorialScreen3}
              className="subphoto"
              alt="tutorialScreen3"
            />
          </div>
        </div>

        <div className="header-zone">
          <h1>Account pages</h1>
        </div>
        <div className="overview-col">
          <div className="message">
            <h3>The importance of spacing</h3>
            <p>
              When it came to deciding on how much white space was too much
              white space, that was a challenge altogether. It is paramount in
              my design that I use a spacing system that brings about a sense of
              <b> consistency</b> and <b>harmony</b> to the UI. <br /> <br />I
              mainly closely followed spacing values 4, 8, 12, 16, 32, 48... and
              so on.
            </p>
          </div>
          <div className="wrapper">
            <img src={createAccount} className="subphoto" alt="accountPage" />
            <img src={login} className="subphoto" alt="accountPage" />
            <img src={accountPage} className="subphoto" alt="accountPage" />
          </div>
        </div>

        <Link className="button-link" to={"../projects"}>
          Back to All Projects
        </Link>
      </div>
      <Loader type="ball-pulse" />
    </>
  );
};

export default GoGenesisProject;
