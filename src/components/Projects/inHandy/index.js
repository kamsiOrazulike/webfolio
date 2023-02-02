import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import ArrowToTop from "../../ArrowToTop";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import NHSLogo from "../../../assets/portfolio-imgs/inHandy/NHSLogo.png";
import homeScreen from "../../../assets/portfolio-imgs/inHandy/openingPage1.png";
// import mainPage from "../../../assets/portfolio-imgs/inHandy/mainpage1.png";
import drawings from "../../../assets/portfolio-imgs/inHandy/Project_Plan.jpg";
import appscreenshot from "../../../assets/portfolio-imgs/inHandy/screenshots/AppScreenshot.jpg";
import appscreenshot2 from "../../../assets/portfolio-imgs/inHandy/screenshots/AppScreenshot2.jpg";
import appscreenshot3 from "../../../assets/portfolio-imgs/inHandy/screenshots/AppScreenshot3.jpg";
import YoutubeScreenshot from "../../../assets/portfolio-imgs/inHandy/screenshots/YTScreenshot.jpg";
// import handDrawings from "../../../assets/portfolio-imgs/inHandy/handDesign.png";
// import mainCharacter from "../../../assets/portfolio-imgs/inHandy/maincharacter.png";
import Charles from "../../../assets/portfolio-imgs/inHandy/character.png";
import Karen from "../../../assets/imgs/Character1.png";
import procreate from "../../../assets/portfolio-imgs/procreateIcon.png";
import storyBoard from "../../../assets/portfolio-imgs/inHandy/StoryboardComics.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma, faAppStore } from "@fortawesome/free-brands-svg-icons";
import {
  faMobileAndroid,
  faUsd,
  faTimes,
  faCheckDouble,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedLetters from "../../AnimatedLetters";

const Introduction = () => {
  return (
    <div className="project-detail">
      <div className="header-zone">
        <h1>Introduction</h1>
      </div>

      <div className="overview-col">
        <img src={drawings} className="drawnplan" alt="mySketches" />
        <p className="figuretext">
          <i>My design manifesto.</i>
        </p>

        <div className="divRow">
          <div className="wrapper">
            <p style={{ textAlign: "center" }}>
              Having a cousin that was born and grew up deaf and without proper
              treatment is something I’m reminded of every time I come home. The
              issue of accessibility and/or awareness of methods to provide help
              rendered his ability to communicate limited to loud hums and hand
              movements that are most times difficult to understand. This
              communication barrier between him and I prompted me to ask the
              question, “Why wasn’t aid possible as he was growing up?”
            </p>
          </div>
        </div>
      </div>

      <div className="overview-col">
        <div className="wrapper">
          <div className="message">
            <p>
              Some of the most popular methods for treating hearing impairment
              involve:
              <ul className="cool-list">
                <li>Earwax treatment</li>
                <li style={{ background: "#c8e6ff", color: "black" }}>
                  <LinkScroll
                    to="whybsl"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={700}
                    className="track-link"
                  >
                    Sign Language and Lip reading
                  </LinkScroll>
                </li>
                <li>Assistive Listening Devices (ALD’s) </li>
                <li>Purchasing hearing aids or hearing implants</li>
              </ul>
            </p>
          </div>
          <div className="message">
            <p>
              These are all in many ways, effective alternative solutions to
              bridging the communication gap between individuals that are
              hearing impared and those that are not. However not all solutions
              are accessible, and some are not as known.
            </p>
            <a
              className="button-link"
              href="https://www.nhsinform.scot/illnesses-and-conditions/ears-nose-and-throat/hearing-loss#about-hearing-loss"
              target="_blank"
              rel="noreferrer"
            >
              Source &nbsp; <img src={NHSLogo} className="logo" alt="nhslogo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Research = () => {
  return (
    <div className="project-detail">
      {/* <div className="header-zone">
        <h1> Soft research </h1>
        <h2> Understanding existing methods </h2>
      </div> */}
      <div className="overview-col">
        <div className="wrapper">
          <div className="message">
            <h3>Earwax treatment</h3>
            <p>
              According to the NHS, the presence of lumps of Earwax is known to
              be a cause of temporary hearing loss. Earwax treatment involves
              either self-medication (using ear drops) or a hospital procedure.
              This is dependent on the severity of the case for the individual.
            </p>
          </div>

          <div className="message">
            <h3>Hearing aids/Hearing Implants</h3>
            <p>
              Hearing aids are one of the most popular and recommended solutions
              for hearing loss. It is estimated that between 90-95% of people
              with hearing loss can be treated with hearing aids. They work by
              receiving and converting real sounds into digital signals. These
              signals can be amplified (Depending on preference and
              comfortability) to give the user a better hearing experience.
            </p>
          </div>
        </div>

        <div className="wrapper">
          <div className="message">
            <h3>ASSISTIVE listening devices</h3>
            <p>
              Assistive Listening Devices are just regular devices developed to
              support individuals with hearing loss. For mobile phones it became
              a legal requirement for manufacturers to make them compatible with
              hearing aids. Other device examples include vibrating alarms,
              device haptics and the use of visual cues such as lights.
            </p>
            <p>
              The focus on individuals with hearing loss transforms the focus of
              the product design to place more emphasis on visual and physical
              feedback.
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
  );
};

const ProjectBrief = () => {
  return (
    <div className="project-detail">
      <div className="header-zone">
        <h1>Project Brief</h1>
        <h2>Why Sign Language?</h2>
      </div>

      <div className="overview-col">
        <img
          src="https://www.ohio.edu/sites/ohio.edu.news/files/2020-04/ASL_CHSP_Apr2020.jpeg"
          className="drawnplan"
          style={{ height: "200px", objectFit: "cover" }}
          alt="handDrawings1"
        />
        <p className="figuretext">
          <i>From OHIO University News.</i>
        </p>

        <div className="wrapper">
          <p className="wrapper-text">
            I decided which solution to focus on by process of elimination. This
            elimination depended mainly on two factors:
            <ul className="cool-list" style={{ flexDirection: "row" }}>
              <li>
                <FontAwesomeIcon icon={faUsd} /> Cost
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faMobileAndroid}
                  style={{ color: "white" }}
                />
                Accessibility.
              </li>
            </ul>
            This left Sign Language/Lip reading as the solution focus for the
            project as not only is it the cheapest option, but the process of
            learning can be completed from home. Learning Sign language is also
            especially helpful in situations where hearing aids are too pricey
            and a hospital operation is not favourable. It is the easiest
            solution to result to and also the most effective when it comes to
            learning about the d/Deaf community. This is important because not
            only does it act as a bridge for the communication gaps between deaf
            and hearing, it raises awareness of the communities as well. Which
            is necessary in order to avoid unintentional offence or
            discrimination and reach a point of a mutual inclusivity Sign
            Language is also very beneficial for the development of
            communication with children. One of the benefits of children
            learning sign language is that it gives them the ability to
            communicate their needs during their development years. I believe
            that Sign Language has the potential to be a privilege a handful of
            families would benefit from even if it is just learning it to a
            basic level.
          </p>
        </div>
      </div>

      <div className="overview-col">
        <div className="wrapper">
          <div className="message">
            <h3>Goal</h3>
            <p>
              It is paramount to teach Sign Language in a way that is more
              practical and enjoyable in order to allow retainment of the things
              learnt.
              <br />
              <br />
              Some of the issues Sign Language face are awareness, accessibility
              and the teaching method used for it. Different studies show that
              there is not enough understanding or awareness of d/Deaf culture
              and as a result not enough motivation to learn about it. This
              emphasises the need for teaching it in order to eradicate this
              lack of awareness and reduce unintentional discriminations or
              misunderstandings.
            </p>
          </div>

          <div className="message">
            <h3>Common misconceptions</h3>
            <p>
              <ul className="wrong-list">
                <li>
                  <FontAwesomeIcon icon={faTimes} />
                  "Deaf and Dumb" or "Deaf Mute" are the correct ways to define
                  a person with hearing loss." These terms are out-dated and can
                  come across offensive. "Deaf" or "Sign Language User" are more
                  inclusive terms that can be used.
                </li>
                <li>
                  <FontAwesomeIcon icon={faTimes} />
                  "Sign Language is/should be Universal." Different countries
                  have different Sign Language due to the ways different people
                  choose to communicate with one another
                </li>
                <li>
                  <FontAwesomeIcon icon={faTimes} />
                  "You should feel sorry for deaf people." Deafness is not a
                  tragedy and does not require an apology or pity. It is not
                  helpful for the individual.
                </li>
              </ul>
              Learning Sign Language should come with teaching the importance of
              unlearning these misconceptions in order to establish an inclusive
              community.
            </p>
          </div>
        </div>
      </div>

      <div className="overview-col">
        <div className="wrapper">
          <div className="message">
            <h3>How can you learn sign language?</h3>
            <p>
              There are different avenues that can be taken when it comes to
              learning Sign Language. Here are some of these methods:
              <ul className="cool-list">
                <li>Sign language schools</li>
                <li>Paid online course</li>
                <li>YouTube Videos</li>
                <li>Sign Language Applications</li>
              </ul>
              Further analysis of these methods would be important in order to
              develop a product that is useful to my user group.
            </p>
          </div>
          <img
            src={Charles}
            className="character-img"
            style={{ imageRendering: "pixelated" }}
            alt="inhandymain"
          />
        </div>
      </div>

      <div className="header-zone">
        <h1 id="whybsl">
          Pros and Cons &nbsp;{" "}
          <FontAwesomeIcon icon={faBalanceScale} style={{ color: "#1129ff" }} />
        </h1>
        <h2>Looking at what resources exist</h2>
      </div>

      <div className="overview-col">
        <div className="wrapper">
          <div className="message">
            <h3>Sign language schools</h3>
            <p>
              Sign Language is a skill that is a career in itself. It is not
              taught in traditional schools now because of there are specialised
              schools for kids that are Deaf or potential BSL Users. These
              specialised schools are equipped with people who are trained in
              that field to do that job and to teach the students in particular
              way.
            </p>
            <div className="wrapper">
              <ul className="good-list">
                <li>
                  <FontAwesomeIcon icon={faCheckDouble} />
                  Provided sense of community where each student faces a more
                  equal challenge. A sense of community, compassion and
                  understanding.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckDouble} />
                  School curriculum is more flexible to accommodate student
                  abilities.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckDouble} />
                  No 3rd party interpreters are required due to the first
                  language of most students and teachers being Sign Language.
                </li>
              </ul>

              <ul className="wrong-list">
                <li>
                  <FontAwesomeIcon icon={faTimes} />
                  d/Deaf students still excluded from the 'Outside world' where
                  there is less awareness. Education should be more focused on
                  integrating the two communities.
                </li>
                <li>
                  <FontAwesomeIcon icon={faTimes} />
                  Academic standard of specialised schools are at risk of being
                  seen as lower.
                </li>
                <li>
                  <FontAwesomeIcon icon={faTimes} />
                  Not many Sign Language Schools exist in the UK, there are
                  tutors available but they come with a cost.
                </li>
              </ul>
            </div>
          </div>

          <div className="message">
            <h3>YouTube Videos</h3>
            <p>
              YouTube is a vast library of different genres of videos. This
              includes video channels made by Sign Language professionals with
              the purpose of teaching, raising awareness and giving access to
              anyone with the intentions of learning Sign Language.
            </p>
            <img
              src={YoutubeScreenshot}
              className="screenshot"
              alt="appscreenshot"
            />
            <div className="wrapper">
              <ul className="good-list">
                <li>
                  <FontAwesomeIcon icon={faCheckDouble} />
                  Due to the wide range of videos that are accessible on
                  YouTube, it is easier to find videos specific to what the User
                  wants to learn to Sign.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckDouble} />
                  Learning from professionals for free! (Free subscription to
                  professional channels).
                </li>
              </ul>

              <ul className="wrong-list">
                <li>
                  <FontAwesomeIcon icon={faTimes} />
                  "Making myself watch this every day till I remember it all..."
                  - One of the comments left under a YouTube tutorial post on
                  Commanding Signs page/playlist Learning should be fun and
                  memorable as well as repetitive in order for it to be
                  retained.
                </li>
                <li>
                  <FontAwesomeIcon icon={faTimes} />
                  Watching the same video repeatedly may not be an effective way
                  to learn as it can become more difficult to maintain interest
                  the entire time.
                </li>
                <li>
                  <FontAwesomeIcon icon={faTimes} />
                  Not as interactive or engaging for user. This is reason for
                  things learnt not being retained as learning is not memorable.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="wrapper" style={{ margin: "3rem 0" }}>
          <div className="message">
            <h3>Sign Language Applications</h3>
            <p>
              Part of testing of what is classed as ‘State of the art’ was
              downloading British Sign Language (BSL) applications and testing
              the ones with the most reviews/highest ratings. The three
              applications tested were;
              <ul className="cool-list">
                <li className="grow">
                  <FontAwesomeIcon icon={faAppStore} />
                  <Link
                    style={{ color: "white" }}
                    className="track-link"
                    to="https://apps.apple.com/app/id998361466"
                  >
                    Sign BSL by developer Daniel Mitchell
                  </Link>
                </li>
                <li className="grow">
                  <FontAwesomeIcon icon={faAppStore} />
                  <Link
                    style={{ color: "white" }}
                    className="track-link"
                    to="https://apps.apple.com/app/id1154479381https://apps.apple.com/app/id1154479381"
                  >
                    BSL British Sign Language by developer Saeed Bashir
                  </Link>
                </li>
                <li className="grow">
                  <FontAwesomeIcon icon={faAppStore} />
                  <Link
                    style={{ color: "white" }}
                    className="track-link"
                    to="https://apps.apple.com/app/id1320686076https://apps.apple.com/app/id1320686076https://apps.apple.com/app/id1320686076"
                  >
                    BSL Level One - Part 1 by group Deaf Active North West
                  </Link>
                </li>
              </ul>
            </p>
            <div className="wrapper">
              <ul className="good-list">
                <li>
                  <FontAwesomeIcon icon={faCheckDouble} />
                  Comprised of a list of important learning topics that user can
                  navigate and choose from. Great because it has most of what
                  the user would be looking for.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckDouble} />
                  All learning topics in one place to navigate through.
                </li>
              </ul>

              <ul className="wrong-list">
                <li>
                  <FontAwesomeIcon icon={faTimes} />
                  The style of learning was the same as a YouTube video. A
                  majority of the videos on the applications were YouTube
                  videos/YouTube professionals teaching the same thing.
                </li>
                <li>
                  <FontAwesomeIcon icon={faTimes} />
                  Visually draining. Little to no use of stimulating graphics
                  for the design of the applications. It makes it easier for
                  User to lose interest.
                </li>
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={appscreenshot2}
              className="screenshot"
              alt="appscreenshot"
            />
            <img
              src={appscreenshot}
              className="screenshot"
              alt="appscreenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Ideation = () => {
  return (
    <div className="project-detail">
      <div className="header-zone">
        <h1 id="ideation">Ideation Process</h1>
        <h2>Storyboarding</h2>
      </div>

      <div className="overview-col">
        <img src={storyBoard} alt="sketches" className="drawnplan" />

        <div className="wrapper">
          <div className="message">
            <h3>Brief</h3>
            <p>
              "To develop a product that provides a fun and engaging way to
              learn British Sign Language."
            </p>
            <img
              src={Karen}
              className="character-img"
              style={{ imageRendering: "pixelated" }}
              alt="inhandymain"
            />
          </div>

          <div className="message">
            <h3>Analysis Overview</h3>
            <p>
              In my analysis of existing applications/methods of learning BSL,
              most existing applications lacked in:
              <ul className="cool-list">
                <li>
                  Interactivity - To maintain User interest whilst learning
                  Memory
                </li>
                <li>
                  User retention of the information being taught to memory.
                </li>
                <li>
                  Cognitive Overload - Access to too much information can be
                  overwhelming for User.
                </li>
              </ul>
              Organisation and presentation of this information is important
              Studies have shown that students in a classroom regardless of age
              benefit from a more engaging and 'fun' learning experience. Fun in
              learning allows an individual to develop a love for learning,
              having a knock on effect on their motivation levels. Growth
              Engineering mentions an example where the company Volkswagen, as
              part of their Fun theory', turned a staircase into a giant
              functioning piano keyboard. A recorded 66% more people chose the
              piano stairs over the normal one. This study is a prime example of
              how fun, engaging and interactive technologies can transform the
              way people behave in situations that would normally be seen as
              tiring.
            </p>
          </div>
        </div>
      </div>
    </div>
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
                  Product Designer <br />
                  Graphic Designer <br />
                  Character Designer <br />
                  Analysis <br />
                </p>
              </div>
              <div className="tools">
                <h3>Tools</h3>
                <p>
                  <FontAwesomeIcon icon={faFigma} /> &nbsp; Figma <br />
                </p>
                <p style={{ display: "flex", alignItems: "center" }}>
                  <img src={procreate} className="iconimg" alt="procreate" />{" "}
                  &nbsp; Procreate <br />
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
        <div className="hd"></div>
        <ProjectBrief />
        <div className="hd"></div>
        <Ideation />

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
