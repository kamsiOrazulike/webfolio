import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import ArrowToTop from "../../ArrowToTop";
import { Link } from "react-router-dom";
import NHSLogo from "../../../assets/portfolio-imgs/inHandy/NHSLogo.png";
import homeScreen from "../../../assets/portfolio-imgs/inHandy/openingPage1.png";
import drawings from "../../../assets/portfolio-imgs/inHandy/Project_Plan.jpg";
import mainCharacter from "../../../assets/portfolio-imgs/inHandy/maincharacter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import AnimatedLetters from "../../AnimatedLetters";

const Introduction = () => {
  return (
    <div className="project-detail">
      <div className="header-zone">
        <h1>Introduction</h1>
      </div>

      <div className="rowDiv">
        <div className="overview-col">
          <img src={drawings} className="drawnplan" alt="mySketches" />
          <p className="figuretext">
            <i>My design manifesto.</i>
          </p>

          <div className="divRow">
            <div className="wrapper">
              <div className="message">
                <p>
                  Having a cousin that was born and grew up deaf and without
                  proper treatment is something I’m reminded of every time I
                  come home. The issue of accessibility and/or awareness of
                  methods to provide help rendered his ability to communicate
                  limited to loud hums and hand movements that are most times
                  difficult to understand. This communication barrier between
                  him and I prompted me to ask the question, “Why wasn’t aid
                  possible as he was growing up?”
                </p>
              </div>
              <img src={mainCharacter} className="subphoto" alt="mySketches" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Research = () => {
  return (
    <>
      <div className="wrapper">
        <div className="overview-col">
          <div className="header-zone">
            <h1>Research</h1>
          </div>
          <div className="wrapper">
            <div className="message">
              <p>
                Some of the most popular methods for treating hearing impairment
                involve:
                <ul
                  style={{
                    padding: "2rem 3rem",
                    listStyle: "none",
                  }}
                >
                  <li>Earwax treatment</li>
                  <li>Purchasing hearing aids or hearing implants</li>
                  <li>Assistive Listening Devices (ALD’s) </li>
                  <li>Sign Language and Lip reading</li>
                </ul>
              </p>
            </div>
            <div className="message">
              <p>
                These are all in many ways, effective alternative solutions to
                bridging the communication gap between individuals that are
                hearing impared and those that are not. However not all
                solutions are accessible, and some are not as known.
              </p>
              <a
                className="button-link"
                href="https://www.nhsinform.scot/illnesses-and-conditions/ears-nose-and-throat/hearing-loss#about-hearing-loss"
                target="_blank"
                rel="noreferrer"
              >
                Source &nbsp;{" "}
                <img src={NHSLogo} className="logo" alt="nhslogo" />
              </a>
            </div>
          </div>

          <div className="hd"></div>

          <div className="rowDiv">
            <div className="wrapper">
              <div className="message">
                <h3>Earwax treatment</h3>
                <p>
                  According to the NHS, the presence of lumps of Earwax is known
                  to be a cause of temporary hearing loss. Earwax treatment
                  involves either self-medication (using ear drops) or a
                  hospital procedure. This is dependent on the severity of the
                  case for the individual.
                </p>
              </div>

              <div className="message">
                <h3>Hearing aids/Hearing Implants</h3>
                <p>
                  Hearing aids are one of the most popular and recommended
                  solutions for hearing loss. It is estimated that between
                  90-95% of people with hearing loss can be treated with hearing
                  aids. They work by receiving and converting real sounds into
                  digital signals. These signals can be amplified (Depending on
                  preference and comfortability) to give the user a better
                  hearing experience.
                </p>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="message">
              <h3>ASSISTIVE listening devices</h3>
              <p>
                Assistive Listening Devices are just regular devices developed
                to support individuals with hearing loss. For mobile phones it
                became a legal requirement for manufacturers to make them
                compatible with hearing aids. Other device examples include
                vibrating alarms, device haptics and the use of visual cues such
                as lights.
              </p>
              <p>
                The focus on individuals with hearing loss transforms the focus
                of the product design to place more emphasis on visual and
                physical feedback.
              </p>
            </div>

            <div className="message">
              <h3>Sign Language/Lip reading</h3>
              <p>
                Sign Language is a popular method of establishing communication
                between the deaf and the hearing. Learning Sign Language comes
                with many benefits such as
                <ul>
                  <li>Enhancing language and listening skills</li>
                  <li>
                    Learning Sign Language can help with all aspects of
                    communicating effectively because it has to also do with
                    gestures, facial expressions and body language.{" "}
                  </li>
                  <li>Breaking down communication barriers, </li>
                  <li>
                    Promotion of awareness and sensitivity towards the deaf
                    community and an appreciation for deaf culture.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const InHandy = () => {
  const [CharClass, setLetterClass] = useState("animate-text");
  const TitleArray = ["i", "n", "H", "a", "n", "d", "y"];

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="projects-page inhandy">
        <div className="header-zone" id="top">
          <h1 id="top">
            <AnimatedLetters
              CharArray={TitleArray}
              CharClass={CharClass}
              indx={15}
            />
          </h1>
          <h2> Project duration: 8 months </h2>
        </div>
        <div className="rowDiv">
          <img src={homeScreen} className="project-img" alt="projectimage" />
          <div className="overview">
            <div className="message">
              <h3> Overview </h3>
              <p>
                With Sign Language being the 4th most popular language in the
                UK, it is only fair that it should have learning content as
                accessible as the other languages like French, German, or
                Spanish.
                <br /> <br />
                inHandy is a platform that will provide people (users) with a
                brief, engaging and accessible introduction to the British Sign
                Language. It will provide this by focusing mainly on:
                <ul>
                  <li>Effective visual communication </li>
                  <li>Contextual learning </li>
                </ul>
                The aim of this project is to combine these two concepts to
                provide a more engaging learning experience of the language for
                users. Providing them with the conversational basics and the
                choice to pursue their learning further as well as how to do so.
                The company is going through a phase where more innovative and
                creative business solutions are paramount. I was hired to work
                alongside the Innovative Strategy team made up of two Software
                developers and one Operations manager. We also worked in
                conjunction with the Marketing team of the company.
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
                </p>
              </div>
            </div>
            <div className="link-group">
              <a
                className="button-link"
                href="https://www.figma.com/file/IUecsg1rFqXbgknkNw6CDr/Genesis-Applications?node-id=833%3A913&t=MUCc3DqDO7iThoSY-1"
              >
                Check out on Figma!
              </a>
            </div>
          </div>
        </div>

        <div className="hd"></div>
        <Introduction />
        <Research />

        <div className="buttonlink-group">
          <Link className="button-link" to={"contact"}>
            Contact me
          </Link>
          <Link className="button-link" to={"../projects"}>
            Back to All Projects
          </Link>
        </div>

        <ArrowToTop />
      </div>
      <Loader type="ball-pulse" />
    </>
  );
};

export default InHandy;
