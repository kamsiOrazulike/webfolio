import "./index.scss";
import Loader from "react-loaders";
import ArrowToTop from "../../ArrowToTop";
import { Link } from "react-router-dom";
// import homeScreen from "../../../assets/portfolio-imgs/GenesisUI/tutorial1.png";
// import tutorialScreen2 from "../../../assets/portfolio-imgs/GenesisUI/tutorial2.png";
// import tutorialScreen3 from "../../../assets/portfolio-imgs/GenesisUI/tutorial3.png";
// import accountPage from "../../../assets/portfolio-imgs/GenesisUI/accountPage.png";
// import mainPageDelivery from "../../../assets/portfolio-imgs/GenesisUI/mainPageDelivery.png";
// import chosenMeal from "../../../assets/portfolio-imgs/GenesisUI/chosenMeal.png";
import genesisMockup from "../../../assets/portfolio-imgs/GenesisUI/GenesisMockupTwo.jpg";
import Tutorials from "../../../assets/portfolio-imgs/GenesisUI/MockTutorials.png";
// import chosenMeal2 from "../../../assets/portfolio-imgs/GenesisUI/chosenMeal2.png";
import drawings from "../../../assets/portfolio-imgs/GenesisUI/flowDiagram.jpg";
import login from "../../../assets/portfolio-imgs/GenesisUI/login.png";
import closerLook1 from "../../../assets/portfolio-imgs/GenesisUI/acloserlook-spacing.png";
// import homeIcon from "../../../assets/portfolio-imgs/GenesisUI/dockicons/HomeIcon.png";
// import searchIcon from "../../../assets/portfolio-imgs/GenesisUI/dockicons/SearchIcon.png";
// import basketIcon from "../../../assets/portfolio-imgs/GenesisUI/dockicons/BasketIcon.png";
// import accountIcon from "../../../assets/portfolio-imgs/GenesisUI/dockicons/AccountIcon.png";
// import deliveryToggle from "../../../assets/portfolio-imgs/GenesisUI/elements/togglegraphic.png";
// import collectToggle from "../../../assets/portfolio-imgs/GenesisUI/elements/togglegraphic2.png";
import createAccount from "../../../assets/portfolio-imgs/GenesisUI/createAccount.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const OpeningScreen = () => {
  return (
    <div className="project-detail">
      <div className="header-zone">
        <h1>Opening Screens</h1>
      </div>
      <div className="overview-col">
        <img src={drawings} className="sketches" alt="mySketches" />
        <p className="figuretext">
          Keeping the company goals in mind, I started sketching my ideas.
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
        <img src={Tutorials} className="title-graphic" alt="tutorialScreen2" />
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
            <b> consistency</b> and <b>harmony</b> to the UI.
          </p>
          <p>
            I mainly closely followed spacing values 4, 8, 12, 16, 32, 48... and
            so on.
          </p>
        </div>

        <div className="wrapper" style={{ flexDirection:'row', justifyContent: "center" }}>
          <img src={createAccount} className="subphoto" alt="accountPage" />
          <img src={login} className="subphoto" alt="accountPage" />
        </div>

        <div className="message">
          <h3>Gestalt Principle: Law of similarity</h3>
          <p>
            Continuing on my use of spacing, this was paramount to allow my user
            to be able to percieve certain elements as a group in the
            application. Hence creating a more readable interface since all the
            elements that are similar/function together are grouped together.
          </p>
        </div>
      </div>

      <div className="overview-col">
        <div className="wrapper">
          <div className="message">
            <h3>Designing for attention</h3>
            <p>
              Intentionally, the
              <b> continue as guest</b> option from a design perspective was
              given less attention in order to bring my users attention to other
              elements on the page such as Becoming a member, signing in as an
              existing user or signing in using other applications to fill in
              user details.
            </p>
            <p>
              I chose to group the elements where:
              <div className="border-list">
                <p>The user can decide to become a member</p>
              </div>
              <div className="border-list">
                <p>
                  The user puts in their login details or
                  <b> continues as a guest</b>
                </p>
              </div>
              <div className="border-list">
                <p>The user signs in using another application</p>
              </div>
            </p>
            <p>
              These were the main element groups that I need the user to focus
              on. It was then easier for me to order each grouped element by
              actions with the highest priority - which would I like the user to
              see and interact with first.
            </p>
          </div>
          <img src={closerLook1} className="zoomedimg" alt="acloserlook1" />
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

// const OrderDetails = () => {
//   return (
//     <div className="project-detail">
//       <div className="header-zone">
//         <h1>Order creation </h1>
//       </div>
//       <div className="overview-col">
//         <div className="wrapper">
//           <div className="message" style={{ top: "20%" }}>
//             <h3>Overview</h3>
//             <p>
//               The next stage in the user journey after they have selected the
//               order on the main page is for them to input further details
//               creating their order exactly as they want it.
//             </p>

//             <p>
//               <b>Goal</b>: Design to make item suggestions to the user. Making
//               the option to purchase more available to them.
//             </p>
//           </div>
//           <img src={chosenMeal} className="subphoto" alt="mainPageDelivery" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const MainPages = () => {
//   return (
//     <>
//       <div className="header-zone">
//         <h1>Main page</h1>
//       </div>
//       <div className="rowDiv">
//         <img
//           src={mainPageDelivery}
//           className="project-img"
//           alt="mainPageDelivery"
//         />

//         <div className="overview">
//           <div className="message">
//             <h3> Toggle graphic </h3>
//             <p>
//               A delivery man and collection item graphic drawn using the
//               Illustrator tool.
//             </p>
//             <div className="wrapper">
//               <img
//                 src={deliveryToggle}
//                 style={{ padding: "4rem" }}
//                 className="zoomedimg"
//                 alt="deliverytoggle"
//               />
//               <img
//                 src={collectToggle}
//                 style={{ padding: "4rem" }}
//                 className="zoomedimg"
//                 alt="deliverytoggle"
//               />
//             </div>
//           </div>
//           <div className="hd"></div>
//         </div>
//       </div>
//     </>
//   );
// };

// const DockItems = () => {
//   return (
//     <div className="project-detail">
//       <div className="header-zone">
//         <h1>Dock Items</h1>
//       </div>
//       <div className="overview-col">
//         <div className="wrapper">
//           <div className="message">
//             <h3>Simplicity</h3>
//             <p>
//               In general, navigation through an application is made easier using
//               a dock with components that specify what the user should expect
//               after interacting with a specific component. I chose to use a dock
//               for this project because the user would require access to
//               different pages on the app.
//             </p>
//           </div>
//           <div className="vd"></div>
//           <div className="message">
//             <h3>Modes</h3>
//             <p>
//               Each of these elements have:
//               <ul>
//                 <li> Light mode version.png </li>
//                 <li> Dark mode version.png - below</li>
//                 <li>
//                   Selected version.png (Highlighted Red) as can view in the
//                   prototypes.
//                 </li>
//               </ul>
//             </p>
//           </div>
//         </div>

//         <div className="wrapper">
//           <img src={homeIcon} className="iconphoto" alt="dockicons" />
//           <img src={searchIcon} className="iconphoto" alt="dockicons" />
//           <img src={basketIcon} className="iconphoto" alt="dockicons" />
//           <img src={accountIcon} className="iconphoto" alt="dockicons" />
//         </div>
//       </div>
//     </div>
//   );
// };

const GoGenesisProject = () => {
  return (
    <>
      <div className="projects-page go-genesis">
        <div className="header-backdrop">
          <div className="header-zone" id="top">
            <h1 id="top"> Go Genesis!</h1>
            <h2> Project duration: 1 month (ongoing) </h2>
          </div>
        </div>
        <div className="overview-col">
          <img
            src={genesisMockup}
            className="title-graphic"
            alt="projectimage"
          />
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
          <div className="message">
            <h3> Overview </h3>
            <p>
              Genesis Group is a Hospitality and Entertainment conglomerate in
              Nigeria, with business interests in Hotels, Restaurants, Cinemas,
              Shopping Malls, Property Development, Outdoor Catering, Industrial
              Catering/Camp Management and Food Production.
            </p>
            <p>
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
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> &nbsp;CSS/SCSS
                <br />
                <FontAwesomeIcon icon={faHtml5} color="#F06529" /> &nbsp; HTML5
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
          <div className="message">
            <h3> Key Objectives </h3>
            <div className="border-list">
              <p>
                Genesis Group is attempting to re-valuate their user group in
                order to keep consistent in providing them with that luxury
                experience. Defining the user group will be paramount in making
                my design decisions.
              </p>
            </div>
            <div className="border-list">
              <p>
                The company currently has a working website that customers can
                make orders from. However, they are looking to expand their
                arsenal and provide the customers with more ways to make an
                order in order to generate more profits on the ecommerce front.
              </p>
            </div>
            <div className="border-list">
              <p>
                The product suite should include some form of gamification to
                keep customers entertained and engaged with the brand. First
                idea that comes to mind is creating a Loyalty membership program
                that allows our customers to get a certain amount of points per
                purchase.
              </p>
            </div>
          </div>
        </div>

        <OpeningScreen />
        <AccountPages />
        

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
