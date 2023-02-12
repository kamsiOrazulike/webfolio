import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import ArrowToTop from "../../ArrowToTop";
import { Link } from "react-router-dom";
import homeScreen from "../../../assets/portfolio-imgs/GenesisUI/tutorial1.png";
import tutorialScreen2 from "../../../assets/portfolio-imgs/GenesisUI/tutorial2.png";
import tutorialScreen3 from "../../../assets/portfolio-imgs/GenesisUI/tutorial3.png";
import accountPage from "../../../assets/portfolio-imgs/GenesisUI/accountPage.png";
import mainPageDelivery from "../../../assets/portfolio-imgs/GenesisUI/mainPageDelivery.png";
import chosenMeal from "../../../assets/portfolio-imgs/GenesisUI/chosenMeal.png";
// import chosenMeal2 from "../../../assets/portfolio-imgs/GenesisUI/chosenMeal2.png";
import drawings from "../../../assets/portfolio-imgs/GenesisUI/flowDiagram.jpg";
import login from "../../../assets/portfolio-imgs/GenesisUI/login.png";
import closerLook1 from "../../../assets/portfolio-imgs/GenesisUI/acloserlook-spacing.png";
import homeIcon from "../../../assets/portfolio-imgs/GenesisUI/dockicons/HomeIcon.png";
import searchIcon from "../../../assets/portfolio-imgs/GenesisUI/dockicons/SearchIcon.png";
import basketIcon from "../../../assets/portfolio-imgs/GenesisUI/dockicons/BasketIcon.png";
import accountIcon from "../../../assets/portfolio-imgs/GenesisUI/dockicons/AccountIcon.png";
import deliveryToggle from "../../../assets/portfolio-imgs/GenesisUI/elements/togglegraphic.png";
import collectToggle from "../../../assets/portfolio-imgs/GenesisUI/elements/togglegraphic2.png";
import createAccount from "../../../assets/portfolio-imgs/GenesisUI/createAccount.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import AnimatedLetters from "../../AnimatedLetters";

const OpeningScreen = () => {
  return (
    <div className="project-detail">
      <div className="header-zone">
        <h1>Opening Screens</h1>
      </div>
      <div className="overview-col">
        <img src={drawings} className="sketches" alt="mySketches" />
        <p className="figuretext">
          Keeping the company goals in mind, I started sketching my ideas.{" "}
        </p>
        <div className="wrapper">
          <div className="message">
            <h3>Project setup</h3>
            <p>
              I worked on this project end-to-end as a UX designer and Frontend
              Developer in a 3 developer team. And begun my process drawing out
              the flows on paper and discussing my design thinking before
              translating them into Figma designs.
            </p>
          </div>
          <div className="vd"></div>
          <div className="message">
            <h3>Colour and Alliteration</h3>
            <p>
              It was important that these initial <b>tutorial-like</b> pages
              were <b>engaging</b> and <b>memorable</b> not only through the
              graphics/visuals but also through the use of language/text.
            </p>
            <p>
              I used short alliterative phrases such as "Click and Collect" and
              "Drive to Deliver" in my design to achieve this. Whilst repeating
              the colour style for each header and spacing between each element
            </p>
          </div>
        </div>
        <div className="wrapper">
          <img src={homeScreen} className="subphoto" alt="homeScreen" />
          <img
            src={tutorialScreen2}
            className="subphoto"
            alt="tutorialScreen2"
          />
          <img
            src={tutorialScreen3}
            className="subphoto"
            alt="tutorialScreen3"
          />
        </div>
      </div>
    </div>
  );
};

const AccountPages = () => {
  return (
    <div className="project-detail">
      <div className="header-zone">
        <h1>Account pages</h1>
      </div>
      <div className="overview-col">
        <div className="message">
          <h3>The importance of spacing</h3>
          <p>
            When it came to deciding on how much white space was too much white
            space, that was a challenge altogether. It is paramount in my design
            that I use a spacing system that brings about a sense of
            <b> consistency</b> and <b>harmony</b> to the UI. <br /> <br />I
            mainly closely followed spacing values 4, 8, 12, 16, 32, 48... and
            so on.
          </p>
        </div>
        <div className="wrapper">
          <img src={createAccount} className="subphoto" alt="accountPage" />
          <img src={login} className="subphoto" alt="accountPage" />
          <img src={accountPage} className="subphoto" alt="accountPage" />
        </div>
      </div>

      <div className="rowDiv">
        <img src={login} className="project-img" alt="mainPageDelivery" />

        <div className="overview">
          <div className="message" style={{ top: "20%" }}>
            <h3>Gestalt Principle: Law of similarity</h3>
            <p>
              Continuing on my use of spacing, this was paramount to allow my
              user to be able to percieve certain elements as a group in the
              application. Hence creating a more readable interface since all
              the elements that are similar/function together are grouped
              together.
            </p>
          </div>
          <div className="wrapper" style={{ margin: "2rem 0" }}>
            <div className="message" style={{ top: "20%" }}>
              <p>
                I chose to group the elements where:
                <ul>
                  <li> The user can decide to become a member. </li>
                  <li>
                    The user puts in their login details or
                    <b> continues as a guest</b>.
                  </li>
                  <li> The user signs in using another application. </li>
                </ul>
              </p>
            </div>
            <img src={closerLook1} className="zoomedimg" alt="acloserlook1" />
          </div>
          <div className="message">
            <p>
              - those were the main <b>element groups</b> that I need the user
              to focus on.
              <br />
              It was then easier for me to order each grouped element by actions
              with the highest priority - which would I like the user to see and
              interact with first.
            </p>
          </div>
          <div className="hd"></div>
          <div className="wrapper" style={{ margin: "2rem 0" }}>
            <img src={closerLook1} className="zoomedimg" alt="acloserlook1" />
            <div className="message">
              <h3>Designing for attention</h3>
              <p>
                Intentionally, the
                <b> continue as guest</b> option from a design perspective was
                given less attention in order to bring my users attention to
                other elements on the page such as Becoming a member, signing in
                as an existing user or signing in using other applications to
                fill in user details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const UserJourney = () => {
//   return (
//     <div className="project-detail">
//       <div className="header-zone">
//         <h1>User Journey</h1>
//       </div>
//     </div>
//   );
// };

const OrderDetails = () => {
  return (
    <div className="project-detail">
      <div className="header-zone">
        <h1>Order creation </h1>
      </div>
      <div className="overview-col">
        <div className="wrapper">
          <div className="message" style={{ top: "20%" }}>
            <h3>Overview</h3>
            <p>
              The next stage in the user journey after they have selected the
              order on the main page is for them to input further details
              creating their order exactly as they want it.
            </p>

            <p>
              <b>Goal</b>: Design to make item suggestions to the user. Making
              the option to purchase more available to them.
            </p>
          </div>
          <img src={chosenMeal} className="subphoto" alt="mainPageDelivery" />
        </div>
      </div>
    </div>
  );
};

const MainPages = () => {
  return (
    <>
      <div className="header-zone">
        <h1>Main page</h1>
      </div>
      <div className="rowDiv">
        <img
          src={mainPageDelivery}
          className="project-img"
          alt="mainPageDelivery"
        />

        <div className="overview">
          <div className="message">
            <h3> Toggle graphic </h3>
            <p>
              A delivery man and collection item graphic drawn using the
              Illustrator tool.
            </p>
            <div className="wrapper">
              <img
                src={deliveryToggle}
                style={{ padding: "4rem" }}
                className="zoomedimg"
                alt="deliverytoggle"
              />
              <img
                src={collectToggle}
                style={{ padding: "4rem" }}
                className="zoomedimg"
                alt="deliverytoggle"
              />
            </div>
          </div>
          <div className="hd"></div>
        </div>
      </div>
    </>
  );
};

const DockItems = () => {
  return (
    <div className="project-detail">
      <div className="header-zone">
        <h1>Dock Items</h1>
      </div>
      <div className="overview-col">
        <div className="wrapper">
          <div className="message">
            <h3>Simplicity</h3>
            <p>
              In general, navigation through an application is made easier using
              a dock with components that specify what the user should expect
              after interacting with a specific component. I chose to use a dock
              for this project because the user would require access to
              different pages on the app.
            </p>
          </div>
          <div className="vd"></div>
          <div className="message">
            <h3>Modes</h3>
            <p>
              Each of these elements have:
              <ul>
                <li> Light mode version.png </li>
                <li> Dark mode version.png - below</li>
                <li>
                  Selected version.png (Highlighted Red) as can view in the
                  prototypes.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="wrapper">
          <img src={homeIcon} className="iconphoto" alt="dockicons" />
          <img src={searchIcon} className="iconphoto" alt="dockicons" />
          <img src={basketIcon} className="iconphoto" alt="dockicons" />
          <img src={accountIcon} className="iconphoto" alt="dockicons" />
        </div>
      </div>
    </div>
  );
};

const GoGenesisProject = () => {
  const [CharClass, setLetterClass] = useState("animate-text");
  const TitleArray = ["G", "o", " ", "G", "e", "n", "e", "s", "i", "s", "!"];

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  return (
    <>
      <div className="projects-page go-genesis">
        <div className="header-zone" id="top">
          <h1 id="top">
            <AnimatedLetters
              CharArray={TitleArray}
              CharClass={CharClass}
              indx={15}
            />
          </h1>
          <h2> Project duration: 1 month (ongoing) </h2>
        </div>
        <div className="rowDiv">
          <img src={homeScreen} className="project-img" alt="projectimage" />
          <div className="overview">
            <div className="message">
              <h3> Overview </h3>
              <p>
                Genesis Group is a Hospitality and Entertainment company in
                Nigeria, with business interests in Hotels, Restaurants,
                Cinemas, Shopping Malls, Property Development, Outdoor Catering,
                Industrial Catering/Camp Management and Food Production.
                <br /> <br />
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
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />{" "}
                  &nbsp;CSS/SCSS
                  <br />
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" /> &nbsp;
                  HTML5
                  <br />
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> &nbsp;
                  JavaScript
                  <br />
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> &nbsp;
                  React/React Native
                  <br />
                </p>
              </div>
            </div>
            <div className="link-group">
              <a
                target="_blank"
                rel="noreferrer"
                className="button-link"
                href="https://www.figma.com/file/IUecsg1rFqXbgknkNw6CDr/Genesis-Applications?node-id=833%3A913&t=MUCc3DqDO7iThoSY-1"
              >
                Check out on Figma!
              </a>
            </div>
          </div>
        </div>

        <div className="hd"></div>
        {<OpeningScreen />}
        <div className="hd"></div>
        {<AccountPages />}
        {<MainPages />}
        {/* {<DockItems />} */}
        {/* <div className="hd"></div> */}
        {/* {<OrderDetails />} */}
        {/* <div className="hd"></div> */}
        {/* {<UserJourney />} */}

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

export default GoGenesisProject;
