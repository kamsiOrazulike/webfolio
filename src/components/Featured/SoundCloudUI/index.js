import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import homeScreen from "../../../assets/portfolio-imgs/SouncloudHome.png";
import originalHome from "../../../assets/portfolio-imgs/originalHomeScreen.png";
// import titleScreen from "../../../assets/portfolio-imgs/TitleScreen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import AnimatedLetters from "../../AnimatedLetters";

const SoundCloudProject = () => {
  const [CharClass, setLetterClass] = useState("animate-text");
  const TitleArray = [
    "S",
    "o",
    "u",
    "n",
    "d",
    "c",
    "l",
    "o",
    "u",
    "d",
    " ",
    "U",
    "I",
    " ",
    "R",
    "e",
    "d",
    "e",
    "s",
    "i",
    "g",
    "n",
  ];

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="container project1-page">
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
        <img src={homeScreen} className="project1" alt="project1" />

        <div className="overview">
          <div className="role">
            <h3 className="overview-subheaders">Role</h3>
            <ul style={{ "list-style": "none" }}>
              <li>
                <b>UX Designer: </b> Idea Generation, Design, Wireframing
              </li>
            </ul>
          </div>
          <div className="tools">
            <h3 className="overview-subheaders">Tools</h3>
            <ul style={{ "list-style": "none" }}>
              <li>
                <FontAwesomeIcon icon={faFigma} /> &nbsp; Figma
              </li>
            </ul>
          </div>

          <div className="goals">
            <h3 className="overview-subheaders">Goals</h3>
            <ul style={{ "list-style": "numbers" }}>
              <li>
                To deliver a holistic, valuable and user-centric experience that
                guides both Soundcloud artists and listeners through the
                application
              </li>
              <li>
                To maximise time spent for new users to navigate the application
                and prioritise the finding of new artists by adopting the
                twitter style formatting
              </li>
            </ul>
          </div>
        </div>

        <div className="overview-ctxt">
          <div className="message">
            <h3 className="overview-subheaders">About the Project</h3>
            <ul style={{ "list-style": "none" }}>
              <li>
                Rudo, a musician and avid Souncloud user, wishes that it was
                easier for her to to find out what her friends listen to and
                post. Her friends are also musicians, who use Souncloud to post
                their music and follow the sound of their community. <br />
              </li>
              <hr />
              <li>
                Rudo asked me if it were possible that the Souncloud interface
                was redesigned to make it easier to find other playlist and/or
                musicians.
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
              src={originalHome}
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

export default SoundCloudProject;
