import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import SoundcloudUI from "../../assets/portfolio-imgs/SoundcloudUI/SouncloudHome.png";
import GoGenesisUI from "../../assets/portfolio-imgs/GenesisUI/GenesisLogin.png";
import HON from "../../assets/imgs/cardbackdesign.png";
import Oasis from "../../assets/imgs/OasisFinal.png";
import LBC from "../../assets/imgs/LBCLogo.png";
import ByKamsi from "../../assets/imgs/Me6.png";
import ArrowToTop from "../ArrowToTop";

const Projects = () => {
  const [CharClass, setLetterClass] = useState("animate-text");

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              CharArray={[
                "M",
                "y",
                " ",
                "P",
                "r",
                "o",
                "j",
                "e",
                "c",
                "t",
                "s",
              ]}
              CharClass={CharClass}
              indx={15}
            />
          </h1>
          <div className="container">

            <div className="project-overview">
              <h1> Soundcloud UI Redesign </h1>
              <h2> Project duration: 1 month (ongoing) </h2>
              <Link to="/featured1">
                <img src={SoundcloudUI} className="cover" alt="project1" />
              </Link>
            </div>

            <div className="project-overview">
              <h1> Go Genesis! UI Design </h1>
              <h2> Project duration: 1 year </h2>
              <Link to="/featured2">
                <img src={GoGenesisUI} className="cover" alt="project1" />
              </Link>
            </div>

            <div className="project-overview">
              <h1> Oasis Community </h1>
              <h2> Project duration: 1 year (ongoing) </h2>
              <Link to="#">
                <img src={Oasis} className="cover" alt="project1" />
              </Link>
            </div>

            <div className="project-overview">
              <h1> London Body Contour </h1>
              <h2> Project duration: 8 months (ongoing) </h2>
              <Link to="#">
                <img src={LBC} className="cover" alt="project1" />
              </Link>
            </div>

            <div className="project-overview">
              <h1> Heirs of Nakamoto </h1>
              <h2> Project duration: 2 months (ongoing) </h2>
              <Link to="#">
                <img src={HON} className="cover" alt="project1" />
              </Link>
            </div>

            <div className="project-overview">
              <h1> My Illustrations </h1>
              <h2> Project duration: 3+ years (ongoing)</h2>
              <Link to="#">
                <img src={ByKamsi} className="cover" alt="project1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
      <ArrowToTop />
      <Loader type="ball-pulse" />
    </>
  );
};

export default Projects;
