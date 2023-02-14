import "./index.scss";
import Me from "../../assets/imgs/Me5.png";
import { Link } from "react-router-dom";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <>
      <div className="about-page" id="about">
        <div className="header-zone">
          <div className="box">
            <img src={Me} alt="me" className="profile-img" />
            <h2>
              Kamsi - <i className="highlight">Kam-see</i>{" "}
            </h2>
            <div className="goals">
              <p>
                "I aim to use my skills to develop products that meet and
                surpass the requests of the user."
                <br />
              </p>
            </div>
            <div className="education">
              <div className="border-list">
                <h1>Queen Mary University of London</h1>
                <h2>September 2018 - June 2021</h2>
                <p>
                  First Class BEng
                  <span> Design, Innovation and Creative Engineering</span>
                </p>
              </div>

              <div className="border-list">
                <h1>Cranleigh School, Surrey</h1>
                <h2 className="highlight">September 2013 - June 2018</h2>
                <p>
                  A Levels: Mathematics, Physics, Chemistry, Extended Project
                </p>
                <p>
                  Qualification IGCSEs: Mathematics (A*), English Language (A),
                  English Literature (A)
                </p>
              </div>
            </div>
          </div>
          <div className="overview-bio">
            <div className="message">
              <p>
                My passion is to create beautiful and functional solutions that
                have an direct positive impact on User Experience when using a
                digital product. Using a cross-disciplinary approach to design,
                I am able to think outside the box by combining UX design
                principles with my growing experience in Software Development,
                UI, Visual and Digital Design.
              </p>
              <p>
                I'm a Software Developer based in London with 2 years experience
                using tech stacks:
                <ul className="ui-list">
                  <li className="grow">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    &nbsp;JavaScript
                  </li>
                  <li className="grow">
                    <FontAwesomeIcon icon={faReact} color="#EFD81D" />
                    &nbsp;TypeScript
                  </li>
                  <li className="grow">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    &nbsp;HTML
                  </li>
                  <li className="grow">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    &nbsp;CSS/SCSS
                  </li>
                  <li className="grow">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    &nbsp;React
                  </li>
                  <li className="grow">
                    <FontAwesomeIcon icon={faPython} />
                    &nbsp;Python
                  </li>
                </ul>
              </p>

              <Link className="button-link" to="/about">
                + Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
