import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import homeScreen from "../../../assets/portfolio-imgs/SoundcloudUI/SouncloudHome.png";
import originalHome from "../../../assets/portfolio-imgs/SoundcloudUI/originalHomeScreen.png";
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
      <div className="projects-page">
        <div className="text-zone">
          <h1 id="top">
            <AnimatedLetters
              CharArray={TitleArray}
              CharClass={CharClass}
              indx={15}
            />
          </h1>
          <h2> Project duration: 1 month (ongoing) </h2>
        </div>
        <img src={homeScreen} className="project-img" alt="project1" />

        <div className="overview">
          <div className="role">
            <h3 className="overview-subheaders">Role</h3>
            <ul style={{ "listStyle": "none" }}>
              <li>
                <b>UX Designer: </b> Idea Generation, Design, Wireframing
              </li>
            </ul>
          </div>
          <div className="tools">
            <h3 className="overview-subheaders">Tools</h3>
            <ul style={{ "listStyle": "none" }}>
              <li>
                <FontAwesomeIcon icon={faFigma} /> &nbsp; Figma
              </li>
            </ul>
          </div>

          <div className="goals">
            <h3 className="overview-subheaders">Goals</h3>
            <ul style={{ "listStyle": "numbers" }}>
              <li>
                To deliver a holistic, valuable and user-centric experience that
                guides both Soundcloud artists and listeners through the
                interface.
              </li>
              <li>
                To <i>minimise</i> time spent for new users to navigate the
                application and prioritise the finding of new artists. Taking
                inspiration from the twitter application layout.
              </li>
            </ul>
          </div>
        </div>

        <div className="overview-col">
          <div className="message">
            <h3 className="overview-subheaders">About the Project</h3>
            <ul style={{ "listStyle": "none" }}>
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
