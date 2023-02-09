import "./index.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import inHandy from "../../assets/portfolio-imgs/inHandy/mainpage.png";
import genesisHome from "../../assets/portfolio-imgs/GenesisUI/mainPageDelivery.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import procreate from "../../assets/portfolio-imgs/procreateIcon.png";

import {
  faFigma,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedLetters from "../AnimatedLetters";

const FeaturedProject = () => {
  const [CharClass, setLetterClass] = useState("animate-text");
  const TitleArray = ["F", "e", "a", "t", "u", "r", "e", "d"];

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="featured-page" id="featured">
        <div className="header-zone">
          <div className="title">
            <h1 id="top">
              <AnimatedLetters
                CharArray={TitleArray}
                CharClass={CharClass}
                indx={15}
              />
            </h1>
          </div>
          <div className="flex-box" style={{ margin: "7rem 0" }}>
            <img src={inHandy} className="project" alt="project1" />
            <div className="overview">
              <h2> Project duration: 8 months</h2>

              <div className="goals">
                <h3>Goal</h3>
                <p>
                  inHandy is a platform that provides users with a brief and
                  engaging method to learning British Sign Language. It will
                  provide this by focusing mainly on:
                  <ul>
                    <li>Effective visual communication </li>
                    <li>Contextual learning </li>
                    <li>Gamified Learning </li>
                  </ul>
                </p>
              </div>

              <div className="wrapper">
                <div className="role">
                  <h3>Role</h3>
                  <p>
                    User Research <br />
                    Product Designer <br />
                    Graphic Designer <br />
                    Character Designer <br />
                    Analysis <br />
                  </p>
                </div>
                <div className="tools">
                  <h3>Tools</h3>
                  <p>
                    <FontAwesomeIcon icon={faFigma} /> &nbsp; Figma
                  </p>
                  <p style={{ display: "flex", alignItems: "center" }}>
                    <img src={procreate} className="iconimg" alt="procreate" />{" "}
                    &nbsp; Procreate <br />
                  </p>
                </div>
              </div>

              <Link to="/inhandy" className="button-link">
                View inHandy
              </Link>
            </div>
          </div>

          <div className="flex-box">
            <img src={genesisHome} className="project" alt="project1" />
            <div className="overview">
              <h2> Project duration: 1 month (ongoing) </h2>

              <div className="goals">
                <h3>Goal</h3>
                <p>
                  To design and develop a mobile food delivery application to
                  create another avenue for customers to make orders
                  <br /> <br />
                  The application must be focused on creating a memorable user
                  experience. It must be easy to use, to navigate and through
                  design, must allow for users to want to become members of the
                  restaurant giving them access to more.
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
                    Usability Testing <br />
                  </p>
                </div>
                <div className="tools">
                  <h3>Tools</h3>
                  <p>
                    <FontAwesomeIcon icon={faFigma} /> &nbsp; Figma <br />
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />{" "}
                    &nbsp;CSS/SCSS
                    <br />
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" /> &nbsp;
                    HTML5
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

              <Link to="/gogenesis" className="button-link">
                View Go Genesis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
