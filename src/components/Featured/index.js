import "./index.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import homeScreen from "../../assets/portfolio-imgs/SoundcloudUI/SoundcloudHome.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
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
            <h2> Project duration: 1 month (ongoing) </h2>
          </div>

          <img src={homeScreen} className="project" alt="project1" />

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
                  To deliver a holistic, valuable and user-centric experience
                  that guides both Soundcloud artists and listeners through the
                  application
                </li>
                <li>
                  To minimise time spent for new users to navigate the
                  application and prioritise the finding of new artists by
                  adopting the twitter style formatting
                </li>
              </ul>
            </div>
            <Link to="/projects" className="button-link"> See more </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
