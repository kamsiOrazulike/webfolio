import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import inHandyMockUp from "../../assets/portfolio-imgs/inHandy/Mockup.jpg";
import GenesisMockUp from "../../assets/portfolio-imgs/GenesisUI/GenesisMockup.jpg";
// import HON from "../../assets/imgs/cardbackdesign.png";
// import Oasis from "../../assets/imgs/OasisFinal.png";
// import LBC from "../../assets/imgs/LBCLogo.png";
// import ByKamsi from "../../assets/imgs/Me6.png";
import ArrowToTop from "../ArrowToTop";

const Projects = () => {
  const [CharClass, setLetterClass] = useState("animate-text");
  const titleArray = ["M", "y", " ", "P", "r", "o", "j", "e", "c", "t", "s"];

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="projects-page">
        <div className="projects-backdrop">
          <div className="header-zone">
            <h1 id="top">
              <AnimatedLetters
                CharArray={titleArray}
                CharClass={CharClass}
                indx={15}
              />
            </h1>
            <h2>Selected Work</h2>
          </div>
        </div>

        <div className="container">
          <div className="card">
            <Link to="/inhandy">
              <img src={inHandyMockUp} alt="project3" />
            </Link>

            <h1> inHandy </h1>
            <h2> Research, UX/UI, Graphic Design, Product Design </h2>
            <p>A brief, fun and engaging way to learn British Sign Language.</p>
            <Link to="/inhandy" className="button-link">
              View Project
            </Link>
          </div>

          <div className="card">
            <Link to="/gogenesis">
              <img src={GenesisMockUp} alt="project3" />
            </Link>

            <h1> GO! Genesis </h1>
            <h2> UX/UI, Market Analysis, Frontend development </h2>
            <p>
              A new & improved Food Delivery application for Genesis Group Ltd.
            </p>
            <Link to="/gogenesis" className="button-link">
              View Project
            </Link>
          </div>
        </div>
      </div>
      <ArrowToTop />
      <Loader type="ball-pulse" />
    </>
  );
};

export default Projects;
