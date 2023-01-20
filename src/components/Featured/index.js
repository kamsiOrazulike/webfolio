import "./index.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import soundcloudHome from "../../assets/portfolio-imgs/SoundcloudUI/SoundcloudHome.png";
import genesisHome from "../../assets/portfolio-imgs/GenesisUI/mainPageDelivery.png";
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
          </div>
          <div className="flex-box">
            <div className="overview">
              <h2> Project duration: 1 month (ongoing) </h2>

              <div className="goals">
                <h3>Goal</h3>
                <p>
                  To deliver a holistic, valuable and user-centric experience
                  that guides both Soundcloud artists and listeners through the
                  application
                  <br /> <br />
                  To minimise time spent for new users to navigate the
                  application and prioritise the finding of new artists by
                  adopting the twitter style formatting
                </p>
              </div>

              <div className="wrapper">
                <div className="role">
                  <h3>Role</h3>
                  <p>
                    UI Design <br /> Idea Generation <br /> Prototyping <br />
                    Wireframing
                  </p>
                </div>
                <div className="tools">
                  <h3>Tools</h3>
                  <p>
                    <FontAwesomeIcon icon={faFigma} /> &nbsp; Figma
                  </p>
                </div>
              </div>

              <Link to="/projects" className="button-link">
                To all Projects
              </Link>
            </div>
            <img src={soundcloudHome} className="project" alt="project1" />
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
                    UI Design <br /> Idea Generation <br /> Prototyping <br />
                    Wireframing
                  </p>
                </div>
                <div className="tools">
                  <h3>Tools</h3>
                  <p>
                    <FontAwesomeIcon icon={faFigma} /> &nbsp; Figma
                  </p>
                </div>
              </div>

              <Link to="/projects" className="button-link">
                To all Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
