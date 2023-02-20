import "./index.scss";
import SelfPortrait from "../../assets/imgs/Me5.png";
import SelfPortrait2 from "../../assets/imgs/Me3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateBack,
  faLightbulb,
  faContactCard,
  faObjectGroup,
  faPencil,
  faSearch,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

const AboutFull = () => {
  return (
    <>
      <div className="fulldetails-page">
        <div className="header-backdrop">
          <div
            style={{ display: "flex", width: "100px", height: "100px" }}
          ></div>
        </div>
        <div className="overview-col" id="top">
          <div className="message">
            <h1 id="top"> Kamsi Orazulike</h1>
            <h2> Web developer and UI designer based in London and Nigeria </h2>
            <p>
              As a graduate of
              <b> Design, Innovation and Creative Engineering</b>. I understand
              the process of product development and have a strong desire to
              design useful products for my user. My course always prioritised
              teaching the importance of user-centred design and how to conduct
              research to design solutions in line with your specified user’s
              needs. I utilised these skills when communicating with clients
              that I had to design products for while within the freelance space
              and will prioritise bringing a creative and user focused approach
              when deriving solutions.
            </p>
            <p>
              I developed extensive analytical skills when finding trends in
              specific user groups, my ability to empathise and be flexible with
              my user to deliver to their expectations and my resourcefulness in
              asking for feedback to improve. My main approach is to empathise
              with the user, stepping into their shoes in order to get to the
              root of problems and therefore design creative solutions to them.
            </p>
          </div>
          <div className="message">
            <div className="shortdivider"></div>

            <h3> My approach </h3>
            <p>
              Thinking about the problem and a potential solutions surrounding
              that. Then, create a roadmap, establish the project architecture
              and begin user and market research to define the audience and
              ideate potential solutions before designing the product.
            </p>
            <ul className="ui-list">
              <li className="grow">
                <FontAwesomeIcon icon={faLightbulb} color="#FFC700" />
                &nbsp;Ideation
              </li>
              <li className="grow">
                <FontAwesomeIcon icon={faContactCard} />
                &nbsp;User Research
              </li>
              <li className="grow">
                <FontAwesomeIcon icon={faSearch} />
                &nbsp;Market Research
              </li>
              <li className="grow">
                <FontAwesomeIcon icon={faPencil} />
                &nbsp;Sketch Prototypes
              </li>
              <li className="grow">
                <FontAwesomeIcon icon={faFigma} />
                &nbsp;High Fidelity Prototypes
              </li>
              <li className="grow">
                <FontAwesomeIcon icon={faObjectGroup} />
                &nbsp;Product Development
              </li>
              <li className="grow">
                <FontAwesomeIcon icon={faTree} color="#00ff80" />
                &nbsp;Synthesis
              </li>
              <li className="grow">
                <FontAwesomeIcon icon={faArrowRotateBack} color="#B0D5FF" />
                &nbsp; Feedback
              </li>
            </ul>
          </div>
        </div>

        <div className="overview-col">
          <div className="wrapper" style={{ alignItems: "center" }}>
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img
                    src={SelfPortrait2}
                    className="myimage"
                    alt="selfportrait"
                  />
                </div>
                <div className="flip-box-back">
                  <img
                    src={SelfPortrait}
                    className="myimage"
                    alt="selfportrait"
                  />
                </div>
              </div>
            </div>

            <div className="statgroup">
              <h3>Attribute points</h3>

              <div className="points">
                <label for="file">Ambitious</label>
                <progress id="file" value="90" max="100">
                  32%
                </progress>
              </div>
              <div className="points">
                <label for="file">Team player</label>
                <progress id="file" value="80" max="100">
                  32%
                </progress>
              </div>
              <div className="points">
                <label for="file">Effective Communicator</label>
                <progress id="file" value="80" max="100">
                  32%
                </progress>
              </div>
              <div className="points">
                <label for="file">Product Design</label>
                <progress id="file" value="70" max="100">
                  32%
                </progress>
              </div>
              <div className="points">
                <label for="file">UI & Visual Design</label>
                <progress id="file" value="80" max="100">
                  32%
                </progress>
              </div>
              <div className="points">
                <label for="file">Graphic Design</label>
                <progress id="file" value="90" max="100">
                  32%
                </progress>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="overview-col">
          <div className="message">
            <h3> My Experience </h3>
            <div className="border-list">
              <h4 style={{ margin: "1rem 0" }}>
                Berenberg Bank, London | Graduate Software Developer
              </h4>
              <h4 style={{ margin: "0", color: "#00ff80" }}>
                September 2021 - December 2022
              </h4>
            </div>
            <div className="border-list">
              <h4 style={{ margin: "1rem 0" }}>
                Genesis Group Ltd, Nigeria | Frontend Developer
              </h4>
              <h4 style={{ margin: "0", color: "#00ff80" }}>
                June 2019 - August 2021
              </h4>
            </div>
          </div>
        </div> */}

        <div className="header-backdrop">
          <div
            style={{ display: "flex", width: "100px", height: "100px" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default AboutFull;
