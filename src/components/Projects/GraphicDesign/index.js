import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import Me from "../../../assets/imgs/Me6.png";
import AnimatedLetters from "../../AnimatedLetters";

const GraphicDesignPage = () => {
  const [CharClass, setLetterClass] = useState("animate-text");

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="container projects-page">
        <div className="header-zone">
          <h1 id="top">
            <AnimatedLetters
              CharArray={["M", "y", " ", "D", "e", "s", "i", "g", "n", "s"]}
              CharClass={CharClass}
              indx={15}
            />
          </h1>
        </div>

        <div className="container">
          <img src={Me} alt="myself" />

          <div className="overview">
            <div className="role">
              <h3 className="overview-subheaders">Role</h3>
              <ul style={{ "list-style": "none" }}>
                <li>
                  <b>Graphic Designer: </b> Character Illustrations & Animations
                </li>
              </ul>
            </div>
            <div className="tools">
              <h3 className="overview-subheaders">Tools</h3>
              <ul style={{ "list-style": "none" }}>
                <li>
                   Procreate
                </li>
              </ul>
            </div>

            <div className="goals">
              <h3 className="overview-subheaders">Goals</h3>
              <ul style={{ "list-style": "numbers" }}>
                <li>
                  To deliver a holistic, valuable and user-centric experience
                  that guides both Soundcloud artists and listeners through the
                  application
                </li>
                <li>
                  To maximise time spent for new users to navigate the
                  application and prioritise the finding of new artists by
                  adopting the twitter style formatting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-pulse" />
    </>
  );
};

export default GraphicDesignPage;
