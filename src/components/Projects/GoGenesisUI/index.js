import "./index.scss";
import Loader from "react-loaders";
import ArrowToTop from "../../ArrowToTop";
import { Link } from "react-router-dom";
import Tutorials from "../../../assets/portfolio-imgs/GenesisUI/MockTutorials.png";
import PageDesign1 from "../../../assets/portfolio-imgs/GenesisUI/createAccount.png";
import genesisMockup from "../../../assets/portfolio-imgs/GenesisUI/GenesisMockupTwo.png";
import CloserLookLogin from "../../../assets/portfolio-imgs/GenesisUI/acloserlook-spacing.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckDouble,
  faClock,
  faCoins,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

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
    {
      name: "Chicken Republic",
      url: "https://www.chicken-republic.com/wp-content/uploads/2020/04/ChickenRepublic_Favicon.png",
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
            fact that the fast-food service offers a variety of cuisines. Unlike
            how KFC focuses on chicken and how Dominoes focuses on Pizza for
            example. Genesis offers fully balanced meals both Nigerian and
            Chinese cuisines, a Pastry menu, a Burgers, Pizzas and Sharwarmas
            menu as well as sides and drinks.
          </p>
          <p>
            So regarding the scale of options available, this also needed to be
            considered in the design and implementation of our food delivery
            application.
          </p>
        </div>

        <div className="message">
          <h3>Research Summary</h3>
          <p>
            The purpose of this research project is to investigate the potential
            market for a food delivery service in the fast food space in
            Nigeria, and to develop a comprehensive plan for launching and
            promoting the service through the digital application. The
            objectives of this research are to identify the target market,
            assess their preferences and needs, and to develop a digital product
            and consider the logistics that will effectively reach and engage
            this audience.
          </p>
          <div className="border-list">
            <h3>
              What are the current food delivery options available in the local
              market?
            </h3>
            <div
              className="border-list"
              style={{ borderLeft: "4px solid #42FF60" }}
            >
              <p>
                Some of the popular food delivery services in Nigeria include
                Jumia Food, Uber Eats, Bolt Food, and Foodpanda. Many quick
                service restaurants partner with third-party delivery services
                to provide their customers with delivery options.
              </p>
            </div>
          </div>
          <div className="border-list">
            <h3>
              What are the characteristics and preferences of potential
              customers for a food delivery service?
            </h3>
            <div
              className="border-list"
              style={{ borderLeft: "4px solid #42FF60" }}
            >
              <p>
                The characteristics of customers can vary depending on their
                lifestyle, demographic and location. However a few of the most
                common characteristics include:
              </p>
              <ul className="detailed">
                <li>
                  <FontAwesomeIcon icon={faCheckDouble} color="#42FF60" />
                  Convenience: Many customers value convenience and the ability
                  to order food from the comfort of their homes or offices
                  without having to go out.
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} color="#18BAFF" />
                  Speed of delivery: Customers often prefer fast delivery times
                  and may be more likely to order from services that can deliver
                  their food quickly.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCoins} color="#FFD772" />
                  Pricing: Pricing is also an important factor for many
                  customers, with many looking for affordable and
                  value-for-money options.
                </li>
                <li>
                  <FontAwesomeIcon icon={faGamepad} color="#9B6BFF" />
                  Loyalty programs and promotions: Customers may also be
                  attracted to food delivery services that offer loyalty
                  programs or promotions, such as discounts and freebies, to
                  encourage repeat purchases.
                </li>
              </ul>
            </div>
          </div>
          <div className="border-list">
            <h3>
              What are the barriers to using a food delivery service and how can
              they be addressed?
            </h3>
            <div
              className="border-list"
              style={{ borderLeft: "4px solid #42FF60" }}
            >
              <p>
                There can be several barriers to using a food delivery service,
                which can vary depending on aspects such as location, culture,
                and customer preferences. Some of the common barriers include:
              </p>
              <ul className="detailed">
                <li>
                  Lack of trust: Customers may be hesitant to use a food
                  delivery service if they are unsure about the quality of the
                  food or the reliability of the delivery service.
                </li>
                <li>
                  High delivery fees: Customers may be deterred by high delivery
                  fees or minimum order requirements.
                </li>
                <li>
                  Long delivery times: Customers may be frustrated with long
                  delivery times, which can be a result of traffic congestion or
                  other challenges facing logistics of the application.
                </li>
              </ul>
              <p>
                To address these barriers, food delivery services can pay more
                attention to:
              </p>
              <ul className="cool-list">
                <li>Building customer trust in the brand</li>
                <li>Offering affordable delivery options</li>
                <li>Improving delivery logistics</li>
              </ul>
            </div>
          </div>
          <p>
            You can contact me if you wish to receive a more detailed research
            report, let's get to some design!
          </p>
        </div>
        <div className="link-group">
          <Link className="button-link" to={"../../contact"}>
            Contact me
          </Link>
        </div>

        <div className="hd"></div>

        <div className="header-zone">
          <h1>Opening Tutorial pages</h1>
        </div>

        <img src={Tutorials} className="title-graphic" alt="tutorialScreen2" />
        <div className="overview-col">
          <i>Tutorial design pages designed by me to present to the team</i>
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
              between each element. It can and has been used in marketing and UI
              design to create a catchy and memorable tagline or brand name. For
              example, "Coca-Cola," "Krispy Kreme," and "Best Buy", use
              alliteration to create a memorable brand name. Alliteration can
              also be used in headlines, slogans, and other marketing copy to
              create a sense of rhythm and make the message more memorable.
            </p>
          </div>
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

      <div
        className="wrapper"
        style={{ flexDirection: "column", justifyContent: "center" }}
      >
        <img src={PageDesign1} className="subphoto" alt="accountPage" />
        <div className="overview-col">
          <i style={{ margin: "2rem 0" }}>
            Tutorial design pages designed by me to present to the team
          </i>
        </div>
      </div>

      <div className="overview-col">
        <div className="wrapper">
          <div className="message">
            <h3>Primary CTA (Call to action)</h3>
            <p>
              This is the most critical element in design as they guide users to
              take specific actions that are important to achieving the goals of
              the product. Primary CTAs help users navigate the product or
              service by indicating what steps they need to take to achieve
              their goals. By making the CTAs prominent and visually appealing,
              users are more likely to take the desired actions.
            </p>
            <p>
              I made the options to Sign in or log in the primary CTA's because
              I aim to encourage the user to become a member of the Brand
              through the of the elements they engage with.
            </p>
            <p>
              I chose to group the elements where:
              <div className="border-list">
                <p>The user can decide to become a member</p>
              </div>
              <div className="border-list">
                <p>
                  The User login inputs or the option to continue as a guest.
                </p>
              </div>
              <div className="border-list">
                <p>
                  The user can sign in using details provided by a third party
                  application
                </p>
              </div>
            </p>
            <p>
              Upon grouping the main elements, it was easier for me to order
              each group by CTA's that would I like the user to see and interact
              with first.
            </p>
          </div>
          <img
            src={CloserLookLogin}
            className="zoomedimg"
            style={{ margin: "auto" }}
            alt="acloserlook1"
          />
        </div>
      </div>
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
              href="https://www.figma.com/proto/IUecsg1rFqXbgknkNw6CDr/Genesis-QSR-Application?page-id=833%3A913&node-id=1060%3A12052&viewport=-1374%2C946%2C0.73&scaling=scale-down&starting-point-node-id=833%3A936"
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
          <div className="wrapper" style={{flexDirection: 'row'}}>
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
                Genesis Group wish to re-valuate their user group in order to
                keep consistent in providing them with an experience of
                affordable luxury fast-food dining. Defining the user group will
                be paramount in making my design decisions.
              </p>
            </div>
            <div className="border-list">
              <p>
                The company currently has a working website that customers can
                make orders from. However, they are looking to expand their
                arsenal to the ecommerce front to provide more ways in which
                they can get orders to their customers.
              </p>
            </div>
            <div className="border-list">
              <p>
                The product should include some form of gamification to keep
                customers entertained and engaged with the brand. Through
                membership benefits and/or loyalty points/programs.
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
            Back
          </Link>
        </div>

        <ArrowToTop />
      </div>
      <Loader type="ball-pulse" />
    </>
  );
};

export default GoGenesisProject;
