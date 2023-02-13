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

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="projects-page">
        <div className="header-zone">
          <h1 id="top">
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

          <div className="card">
            <img src={MockUp} alt="project3" />
            <h1> Soundcloud UI Redesign </h1>
            <h2> Project duration: 2 weeks (ongoing) </h2>
            <Link to="/projectsoundcloud" className="button-link">
              View Project
            </Link>
          </div>

          {/* <div className="project-overview">
              <h1> Oasis Community </h1>
              <h2> Project duration: 1 year (ongoing) </h2>
              <Link to="#">
                <img src={Oasis} className="cover" alt="project1" />
              </Link>
            </div> */}

          {/* <div className="project-overview">
              <h1> London Body Contour </h1>
              <h2> Project duration: 8 months (ongoing) </h2>
              <Link to="#">
                <img src={LBC} className="cover" alt="project1" />
              </Link>
            </div> */}

          {/* <div className="project-overview">
              <h1> Heirs of Nakamoto </h1>
              <h2> Project duration: 3 months (ongoing) </h2>
              <Link to="#">
                <img src={HON} className="cover" alt="project1" />
              </Link>
            </div> */}

          {/* <div className="project-overview">
              <h1> My Illustrations </h1>
              <h2> Project duration: 3+ years (ongoing)</h2>
              <Link to="#">
                <img src={ByKamsi} className="cover" alt="project1" />
              </Link>
            </div> */}
        </div>
      </div>
      <ArrowToTop />
      <Loader type="ball-pulse" />
    </>
  );
};

export default Projects;
