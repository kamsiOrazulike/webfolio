import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";

const Projects = () => {
  const [CharClass, setLetterClass] = useState("animate-text");

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h5 id="home">You are viewing</h5>
          <h2>
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
          </h2>
        </div>
      </div>
      <Loader type="ball-pulse" />
    </>
  );
};

export default Projects;
