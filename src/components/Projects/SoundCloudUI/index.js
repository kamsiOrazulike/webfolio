import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import homeScreen from "../../../assets/portfolio-imgs/SoundcloudUI/SoundcloudHome.png";
// import originalHome from "../../../assets/portfolio-imgs/SoundcloudUI/originalHomeScreen.png";
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
        <div className="header-zone">
          <h1 id="top">
            <AnimatedLetters
              CharArray={TitleArray}
              CharClass={CharClass}
              indx={15}
            />
          </h1>
          <h2> Project duration: 1 month (ongoing) </h2>
        </div>

        <div className="overview">
          <div className="message">
            <h3> Overview </h3>
            <p>
              Rudo, a musician and avid Souncloud user, wishes that it was
              easier for her to to find out what her friends listen to and post.
              Her friends are also musicians, who use Souncloud to post their
              music and follow the sound of their community.
              <br /> <br />
              Rudo asked me if it were possible that the Souncloud interface was
              redesigned to make it easier to find other playlist and/or
              musicians.
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
              </p>
            </div>
          </div>
        </div>

        <img src={homeScreen} className="project-img" alt="project1" />

        {/* <div className="overview-col">
          <div className="message">
            <h3 className="overview-subheaders">About the Project</h3>
          </div>
          <div className="wrapper">
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
          </div>
        </div> */}

        <Link className="button-link" to={"../projects"}>
          Back to All Projects
        </Link>
      </div>
      <Loader type="ball-pulse" />
    </>
  );
};

export default SoundCloudProject;
