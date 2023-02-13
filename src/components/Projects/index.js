import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import MockUp from "../../assets/portfolio-imgs/inHandy/Mockup.jpg";
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
        <div className="header-backdrop">
          <div className="header-zone">
            <h1 id="top">
              <AnimatedLetters CharArray={titleArray} CharClass={CharClass} indx={15} />
            </h1>
            <h2>Selected Work</h2>
          </div>
        </div>

        <div className="container">
          <div className="card">
            <img src={MockUp} alt="project3" />

            <h1> inHandy </h1>
            <h2> Research, UX/UI, Product Design </h2>
            <p>
              A more engaging way to learn British Sign Language focusing on
              effective visual stimulation.
            </p>
            <Link to="/inhandy" className="button-link">
              View Project
            </Link>
          </div>

          <div className="card">
            <img src={GenesisMockUp} alt="project3" />
            <h1> GO! Genesis </h1>
            <h2> UI Design, Market Analysis, Frontend development </h2>
            <p>
              A new & improved Food Delivery application for Genesis Group Ltd.
              and their customers.
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
