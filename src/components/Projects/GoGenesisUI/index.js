import "./index.scss";
import Loader from "react-loaders";
import ArrowToTop from "../../ArrowToTop";
import { Link } from "react-router-dom";
import Tutorials from "../../../assets/portfolio-imgs/GenesisUI/MockTutorials.png";
import PageDesign1 from "../../../assets/portfolio-imgs/GenesisUI/createAccount.png";
import genesisMockup from "../../../assets/portfolio-imgs/GenesisUI/GenesisMockupTwo.jpg";
import CloserLookLogin from "../../../assets/portfolio-imgs/GenesisUI/acloserlook-spacing.jpg";
// import homeScreen from "../../../assets/portfolio-imgs/GenesisUI/tutorial1.png";
// import tutorialScreen2 from "../../../assets/portfolio-imgs/GenesisUI/tutorial2.png";
// import tutorialScreen3 from "../../../assets/portfolio-imgs/GenesisUI/tutorial3.png";
// import accountPage from "../../../assets/portfolio-imgs/GenesisUI/accountPage.png";
// import mainPageDelivery from "../../../assets/portfolio-imgs/GenesisUI/mainPageDelivery.png";
// import chosenMeal from "../../../assets/portfolio-imgs/GenesisUI/chosenMeal.png";

// import chosenMeal2 from "../../../assets/portfolio-imgs/GenesisUI/chosenMeal2.png";
// import drawings from "../../../assets/portfolio-imgs/GenesisUI/flowDiagram.jpg";
// import homeIcon from "../../../assets/portfolio-imgs/GenesisUI/dockicons/HomeIcon.png";
// import searchIcon from "../../../assets/portfolio-imgs/GenesisUI/dockicons/SearchIcon.png";
// import basketIcon from "../../../assets/portfolio-imgs/GenesisUI/dockicons/BasketIcon.png";
// import accountIcon from "../../../assets/portfolio-imgs/GenesisUI/dockicons/AccountIcon.png";
// import deliveryToggle from "../../../assets/portfolio-imgs/GenesisUI/elements/togglegraphic.png";
// import collectToggle from "../../../assets/portfolio-imgs/GenesisUI/elements/togglegraphic2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Ideation = () => {
  const logos = [
    {
      name: "McDonald's U.K.",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png",
    },
    {
      name: "KFC",
      url: "https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
    },
    {
      name: "Burger King",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png",
    },
    {
      name: "Dominoes",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png",
    },
  ];

  const logoList = logos.map((logo) => (
    <li className="grow">
      <img src={logo.url} className="logo" alt={logo.name.replace(" ", "")} />
      {logo.name}
    </li>
  ));

  return (
    <div className="project-detail">
      <div className="header-zone">
        <h1>Ideation</h1>
      </div>
      <div className="overview-col">
        <div className="message">
          <p>
            After setting out the company key objectives for the project, I
            started by looking at existing implementations of food delivery apps
            in other established Restuarant/Fast-food businesses. I looked at:
          </p>
          <ul className="cool-list">{logoList}</ul>
          <p>
            What sets Genesis Group Ltd. apart from the list presented is the
            fact that the fast-food offers a variety of cuisines. Unlike how KFC
            focuses on chicken and how Dominoes focuses on Pizza for example.
            Genesis offers fully balanced meals both Nigerian and Chinese
            cuisines, a Pastry menu, a Burgers, Pizzas and Sharwarmas menu as
            well as sides and drinks.
          </p>
          <p>
            So regarding the scale of options available, this also needed to be
            considered in the design and implementation of our food delivery
            application.
          </p>
        </div>
        <div className="wrapper">
          <div className="message">
            <h3>Project setup</h3>
            <p>
              I worked on this project end-to-end as a UI designer and Frontend
              Developer in team of 3 other developers. And begun my process
              drawing out the flows on paper and discussing my design thinking
              before translating them into Figma designs. The quicker I got this
              done the quicker we could move onto the development of the
              application.
            </p>
            <p> So I started out with Tutorial pages.</p>
          </div>
          <div className="message">
            <h3>Colour and Alliteration</h3>
            <p>
              It was important that these initial <b>Tutorial-like</b> pages
              were <b>engaging</b> and <b>communicative</b> of the company's
              services not only through the graphics/visuals but also through
              the use of language/text.
            </p>
            <p>
              I used short <b>alliterative</b> phrases such as "Click and
              Collect" and "Drive to Deliver" in my design to achieve this.
              Whilst repeating the colour style for each header and spacing
              between each element
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

      <div
        className="wrapper"
        style={{ flexDirection: "row", justifyContent: "center" }}
      >
        <img src={PageDesign1} className="subphoto" alt="accountPage" />
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
          <img src={CloserLookLogin} className="zoomedimg" alt="acloserlook1" />
        </div>
      </div>

      {/* <div className="overview-col">
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

        <div className="message">
          <h3>Gestalt Principle: Law of similarity</h3>
          <p>
            Continuing on my use of spacing, this was paramount to allow my user
            to be able to percieve certain elements as a group in the
            application. Hence creating a more readable interface since all the
            elements that are similar/function together are grouped together.
          </p>
        </div>
      </div> */}
    </div>
  );
};

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

        <Ideation />
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
