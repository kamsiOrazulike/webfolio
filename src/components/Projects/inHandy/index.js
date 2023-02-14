import "./index.scss";
import { useState } from "react";
import Loader from "react-loaders";
import ArrowToTop from "../../ArrowToTop";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import NHSLogo from "../../../assets/portfolio-imgs/inHandy/NHSLogo.png";
import drawings from "../../../assets/portfolio-imgs/inHandy/Project_Plan.jpg";
import allPages from "../../../assets/portfolio-imgs/inHandy/allPages.png";
import pagesketch1 from "../../../assets/portfolio-imgs/inHandy/pageDesign.png";
import mainpageinitial from "../../../assets/portfolio-imgs/inHandy/mainpage1.png";
import mainpagedeveloped from "../../../assets/portfolio-imgs/inHandy/mainpage.png";
import pagesketch3 from "../../../assets/portfolio-imgs/inHandy/pageDesign3.png";
import pagesketch4 from "../../../assets/portfolio-imgs/inHandy/pageDesign4.png";
import pagesketch5 from "../../../assets/portfolio-imgs/inHandy/pageDesign5.jpg";
// import pagedesign1 from "../../../assets/portfolio-imgs/inHandy/testexample1.png";
import pagedesign2 from "../../../assets/portfolio-imgs/inHandy/gamePage.png";
import pagedesign3 from "../../../assets/portfolio-imgs/inHandy/gamePageFail.png";
import inHandyMock from "../../../assets/portfolio-imgs/inHandy/inHandyPhoneMock.jpg";
// import pagedesign4 from "../../../assets/portfolio-imgs/inHandy/scenariotest.png";
// import pagedesign5 from "../../../assets/portfolio-imgs/inHandy/scenariotest2.png";
import appscreenshot from "../../../assets/portfolio-imgs/inHandy/screenshots/AppScreenshot.jpg";
import appscreenshot2 from "../../../assets/portfolio-imgs/inHandy/screenshots/AppScreenshot2.jpg";
import netflixscreenshot from "../../../assets/portfolio-imgs/inHandy/screenshots/screenshotnetflix.jpg";
import YoutubeScreenshot from "../../../assets/portfolio-imgs/inHandy/screenshots/YTScreenshot.jpg";
import handDesigns from "../../../assets/portfolio-imgs/inHandy/handDesign.png";
import alphabet2 from "../../../assets/portfolio-imgs/inHandy/alphabettone.jpg";
import characterDesigns from "../../../assets/portfolio-imgs/inHandy/characterInspiration.jpg";
import characterDesign1 from "../../../assets/portfolio-imgs/inHandy/characterdesign2.png";
import karenTony from "../../../assets/portfolio-imgs/inHandy/characterDesign.png";
import Elliot from "../../../assets/portfolio-imgs/inHandy/character3.png";
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
  faCoins,
  faTurnUp,
  faDoorOpen,
  faFilm,
  faArrowRight,
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

        <div className="wrapper">
          <p style={{ textAlign: "left" }}>
            Having a cousin that was born and grew up deaf and without proper
            treatment is something I’m reminded of every time I come home. The
            issue of accessibility and/or awareness of methods to provide help
            rendered his ability to communicate limited to loud hums and hand
            movements that are most times difficult to understand. This
            communication barrier between him and I prompted me to ask the
            question, “Why wasn’t aid possible as he was growing up?”
          </p>
        </div>

        <div className="wrapper">
          <div className="message">
            <p>
              Some of the most popular methods for treating hearing impairment
              involve:
            </p>
            <div className="border-list">
              <p>Earwax treatment</p>
            </div>
            <div className="border-list">
              <p>Assistive Listening Devices (ALD’s)</p>
            </div>
            <div className="border-list">
              <p>Purchasing hearing aids or hearing implants</p>
            </div>
            <div className="border-list">
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
            </div>
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

        <div className="wrapper" style={{ flexDirection: "row-reverse" }}>
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
              <div className="border-list">
                <p>Enhancing language and listening skills</p>
              </div>
              <div className="border-list">
                <p>Breaking down communication barriers</p>
              </div>
              <div className="border-list">
                <p>
                  Learning Sign Language can help with all aspects of
                  communicating effectively because it has to also do with
                  gestures, facial expressions and body language
                </p>
              </div>
              <div className="border-list">
                <p>
                  Promotion of awareness and sensitivity towards the deaf
                  community and an appreciation for deaf culture
                </p>
              </div>
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
          Pros and Cons &nbsp;
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

        <div className="shortdivider"></div>

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
      <div className="header-zone" style={{ margin: "0" }}>
        <h1 id="ideation">Ideation</h1>
      </div>

      <div className="overview-col">
        <div className="wrapper">
          <div className="message">
            <h3>Refined Brief</h3>
            <p>
              "To develop a product that provides a <b>fun</b> and
              <b> engaging</b> way to learn British Sign Language."
            </p>
            <h3>Analysis Overview</h3>
            <p>
              In my analysis of existing applications/methods of learning BSL,
              most existing applications lacked in:
              <ul className="cool-list">
                <li className="vibrate">
                  Interactivity - To maintain User interest whilst learning
                  Memory
                </li>
                <li className="vibrate">
                  User retention of the information being taught to memory.
                </li>
                <li className="vibrate">
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

      <div className="shortdivider" style={{ margin: "2rem 0 2rem 0" }}></div>

      <div className="overview-col">
        <div className="wrapper">
          <div className="message">
            <h3>Contextual Learning</h3>
            <p>
              Imagine Learning Sign Language through the use of imagery and
              videos. Demonstrating the language being used in real world
              scenarios.
            </p>
            <p>
              It is a common misconception that memory techniques only work when
              it comes to learning vocabulary. Studies have shown that once a
              memory technique formula is created and understood, one can apply
              the same formulae and use them to learn more.
            </p>
            <img
              src="https://files.tofugu.com/articles/japanese/2014-09-03-learn-katakana/%E3%82%AA-opera.jpg"
              className="character-img"
              alt="tofuguimage"
            />
            <div className="link-group">
              <p className="figuretext">
                オ is the katakana for お (o). Looks like an Opera singer.
              </p>
              <a
                className="button-link"
                href="https://www.tofugu.com/"
                target="_blank"
                rel="noreferrer"
              >
                Source - Tofugu
              </a>
            </div>

            <p>
              When learning and memorising the Japanese writing styles Hiragana
              and Katakana. A popular method used to teach these writing styles
              is known as Visual Mnemonics.
            </p>
            <p>
              This memory technique involves choosing a word or term that you
              want to memorise and associating that word with an object or
              character that you imagine sounds like the word you want to
              memorise. Visual Mnemonics associate words with visual clues and
              make them easier to memorise or learn.
            </p>
            <p>
              The use of Visual Mnemonics in teaching highlights the importance
              of developing a visually stimulating learning experience for the
              user in order for them to retain what they have learnt as well as
              hold their interest.
            </p>
            <p>
              When it comes to learning Sign Language it is important to
              consider the way in which the elements are designed. Designing to
              simplify the process of making reasonable connections in the
              language is key to developing a valuable learning experience.
            </p>
          </div>

          <div className="message">
            <h3>
              Language & Movies{" "}
              <FontAwesomeIcon icon={faFilm} style={{ color: "#A2A2A2" }} />
            </h3>
            <p>
              Another example of how the use of a visual stimulus improves the
              User learning experience is in foreign movies.
            </p>
            <p>
              Watching a foreign movie with subtitles is known as a good way to
              pick up certain words or phrases in that foreign language.
              Examples include the screenshot above taken from the TV series
              'Lupin' which was originally filmed in French. Watching the series
              on Netflix gives the option to watch in French with English
              subtitles which is great for both English individuals trying to
              learn French and French individuals trying to learn English.
            </p>
            <img
              src={netflixscreenshot}
              className="character-img"
              alt="netflixscreenshot"
              style={{ width: "600px", objectFit: "cover" }}
            />
            <p>
              Studies demonstrate that one of the main benefits of films in a
              foreign language is the fact that it provides the most authentic
              example of the language being used in a real-world scenario. It
              exposes the natural expressions and conversational cues hence
              placing the user in an environment where information can be
              received and retained in a more engaging manner.
            </p>
          </div>
        </div>
      </div>

      <div className="shortdivider"></div>

      <div className="overview-col">
        <div className="wrapper">
          <div className="message">
            <h3>Gamified Learning</h3>
            <p>
              The definition of gamification when it comes to learning is the
              use of elements of game-design and game principals to teach a
              subject or topic.
            </p>
            <p>
              An example would be the in-game principals and themes such as
              acquiring virtual ‘points’ used in the language application
              'Duolingo'. Points that are acquired through completing series of
              tasks or activities in order to unlock access to the next level.
              This learning experience provides more fun and stimulation for the
              User.
            </p>
          </div>

          <div className="message">
            <h3>Duolingo</h3>
            <img
              src="https://1000logos.net/wp-content/uploads/2020/10/Duolingo-logo.png"
              className="character-img vibrate"
              style={{ width: "100px" }}
              alt="duolingo"
            />
            <p>
              The popular language learning application, '<b>Duolingo</b>' is
              the perfect example of how teaching using game-design and game
              principles is an effective way for a user to learn an entirely new
              language.
            </p>
            <p>
              The screenshot on the left displays the formatting of a test like
              question providing graphics that are also visually stimulating.
              This keeps any user active and engaged throughout the learning
              experience.
            </p>
            <p>
              <b>Feedback</b> on the User progress can also be noticed at the
              top. This is incredibly helpful in informing the user of exactly
              how much work they are doing and can act as either a source of
              motivation or discouragement.
            </p>
          </div>
        </div>

        <div className="wrapper">
          <div className="message" style={{ width: "80%" }}>
            <h3>The importance of feedback</h3>
            <p>
              Adopting certain game elements in learning allows the user to
              learn effectively. Elements such as the way feedback is displayed
              to the user can remind them of their personal goals, targets or
              achievements. Elements such as;
              <ul className="cool-list" style={{ flexDirection: "row" }}>
                <li className="shrink">
                  <FontAwesomeIcon icon={faTurnUp} />
                  Levelling up
                </li>
                <li className="shrink">
                  <FontAwesomeIcon icon={faCoins} />
                  Gathering of points
                </li>
                <li className="shrink">
                  <FontAwesomeIcon icon={faDoorOpen} />
                  Unlocking of new levels
                </li>
              </ul>
            </p>
            <p>
              All act as important feedback points that continually inform the
              user of their progress in the experience. The aim of these
              game-like elements is to allow the user to perceive these goals in
              a way that they learner still view as fun and engaging.
            </p>
            <p>
              All act as important feedback points that continually inform the
              user of their progress in the experience. The aim of these
              game-like elements is to allow the user to perceive these goals in
              a way that they learner still view as fun and engaging.
            </p>
            <p>
              Game-like elements/Design are very important to incorporate in the
              product design as it would be a powerful way to connect the user
              to the learning experience. The process of learning Sign Language
              does not have to be limited to watching a professional repeat
              signs on a screen, it can be made enjoyable and more interactive
              in order to maintain the user interest.
            </p>
            <div className="shortdivider"></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <img
                src="https://www.mymaths.co.uk/assets/images/big/Tug-of-war-year-3.png"
                className="character-img"
                style={{ margin: "auto", padding: "40px 0 20px 0" }}
                alt="myimaths"
              />

              <p className="figuretext">
                Above is a screenshot of a Maths game from the application
                'MyiMaths' which is a web platform used by teachers to give
                children class and homework in Mathematics.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="header-zone">
        <h1 id="ideation">User Research</h1>
        <h2> Storyboarding + Low Fidelity Prototypes</h2>
      </div>

      <div className="overview-col">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={storyBoard} alt="drawings" className="drawnplan" />
          <p className="figuretext" style={{ margin: " 0 8rem" }}>
            It was important for me to figure out the most engaging way for my
            user to learn BSL. Using the two main concepts I researched -
            Gamified and Contextual Learning; I tried placing some of my product
            ideas in a User Storyboard.
          </p>
        </div>
        <div className="wrapper">
          <div className="message">
            <h3>Context - Based Learning</h3>
            <p>
              One of the learning styles mentioned above is the use of
              animations to display sign language conversations in real world
              scenarios.
            </p>
            <p>
              For example: Ordering coffee at a coffee shop using Sign Language.
            </p>
            <p>
              The aim is to use this form of expression to expose the
              conversational cues taken in the real world. Informing the user of
              how and when they should use certain phrases. Placing the user
              where they see the language being used in context (like how movies
              do) will provide a more immersive and engaging learning experience
              in the application.
            </p>

            <img
              src={pagesketch3}
              style={{
                width: "300px",
                margin: "auto",
                background: "#FFFFFF",
                borderRadius: "8px",
              }}
              alt="sketch1"
            />
          </div>

          <div className="message">
            <h3>Use of a Physical product to assist learning </h3>
            <p>
              In order to incorporate game elements into the learning
              experience, these physical products were formed.
            </p>
            <p>
              The goal of this is to provide a more immersive and interactive
              game-like experience for the user.
            </p>

            <h3>Assistance of Physical Product Analysis</h3>
            <img
              src={storyBoard}
              alt="drawings"
              className="drawnplan grow"
              style={{
                width: "300px",
                height: "300px",
                margin: "auto",
                objectFit: "cover",
                objectPosition: "100% 0",
              }}
            />
            <p>
              This will work by detecting finger joint movement using motion
              sensors inside the glove.
            </p>
            <p>
              The User would be tasked with making different signs and would be
              given performance feedback based on their responses.
            </p>
            <p>
              The assistance of a physical product would be a great idea,
              however it does not fit into my <b>brief</b>.
              <ul className="wrong-list">
                <li>
                  <FontAwesomeIcon icon={faTimes} /> Not Accessible for all
                  users
                </li>
              </ul>
            </p>
            <p>
              The addition of a physical product would limit my user group to
              individuals that can purchase this physical product. InHandy would
              become less accessible than existing methods of learning Sign
              Language.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Prototypes = () => {
  return (
    <div className="project-detail">
      <div className="header-zone">
        <h1> Lo-Fi Prototypes </h1>
        <p style={{ margin: "2rem 8rem" }}>
          To align my product more with the goals of being as accessible as
          existing methods and also due to the time we also had on this project.
          I decided not to pursue the assistance of a physical product method
          and instead put more focus on making inHandy a mobile application.
        </p>
      </div>
      <div className="overview-col">
        <img src={allPages} className="drawnplan" alt="allpageslofisketch" />

        <div className="shortdivider"></div>

        <div className="wrapper" style={{ flexDirection: "row" }}>
          <img
            src={pagesketch1}
            className="screenshot"
            style={{ margin: "auto", background: "#ffffff" }}
            alt="opening"
          />

          <div className="message">
            <h3>Opening Screen + Loader</h3>
            <p>
              To maintain the interest of the User the interface must display
              interesting and captivating graphic design elements.
            </p>
            <p>
              The image on the right is a sketch prototype of what the loading
              screen would look like upon opening the application.
            </p>
            <p>
              Unlike the existing applications that lack this feature; InHandy
              would capture the users attention by opening with a loading screen
              or a short animation.
            </p>
            <p>
              Both the loading screen and/or animation would be used to maximise
              awareness by displaying facts about d/Deaf culture.
            </p>
          </div>
        </div>

        <div className="wrapper" style={{ flexDirection: "row-reverse" }}>
          <img
            src={pagesketch3}
            className="screenshot"
            style={{ margin: "auto", background: "#fff" }}
            alt="opening"
          />

          <div className="message">
            <h3>Situational Context Based learning</h3>
            <p>
              Based on research done, one of the best ways to learn or pick up a
              new language is through seeing the language being used in context.
            </p>
            <p>
              Exposing the conversational cues would give the user a better
              understanding of when to use a particular word of phrase.
            </p>
            <p>
              InHandy would do this by having the user select the '
              <b>correct</b>' response option in order to progress in the
              animated short. This provides a <b>visually engaging</b> way to
              learn as it places the user in a situation as opposed to a
              professional behind a screen repeating a sign.
            </p>
          </div>
        </div>

        <div className="wrapper">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <img
              src={pagesketch4}
              style={{
                width: "250px",
                objectFit: "cover",
                objectPosition: "100% 100%",
                background: "#fff",
              }}
              alt="opening"
            />
            <img
              src={pagesketch5}
              style={{
                width: "250px",
                objectFit: "cover",
                objectPosition: "100% 100%",
                imageRendering: "pixelated",
              }}
              alt="opening"
            />
          </div>

          <div className="message">
            <h3>
              Gamification &nbsp;
              <FontAwesomeIcon icon={faCoins} style={{ color: "#FFA722" }} />
            </h3>
            <p>
              Inspired by the similar set up of the '<b>Duolingo</b>' language
              learning application, <b>InHandy</b> will use similar game-like
              testing methods to keep the user engaged through the learning
              experience.
            </p>
            <p>
              One of the in-app games InHandy would provide is a test to
              determine the User knowledge of British Sign Language. The
              interface would be programmed to unlock access to the game only
              after the User has completed the topic learning stage.
            </p>
            <p>
              The next step is the product development stage. However I need to
              ensure effective/engaging visual communication throughout the
              interface design of InHandy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CharacterDesign = () => {
  return (
    <div className="project-detail">
      <div className="header-zone">
        <h1>Character Design</h1>
        <p style={{ margin: "2rem 8rem" }}>
          To ensure effective visual communication, the low fidelity prototypes
          needed development. Starting from the development of characters for
          both stills and animations that will be a part of InHandy's learning
          experience.
        </p>
      </div>
      <div className="overview-col">
        <div className="wrapper">
          <div className="message">
            <h3>Style guide</h3>
            <p>
              There are many important aspects to consider when it comes to
              character design such as
              <b> Colour</b>,<b> Concept</b>,<b> Shape</b>,<b> Simplicity</b>{" "}
              and
              <b> Repeatability</b>.
            </p>
            <p>
              The qualities of a character being developed for a learning
              application should be reflective of the experience. The design is
              important as it determines how effective learning using the
              application would be.
            </p>

            <p>
              When it comes to Character design for Sign Language it is
              important to consider:
              <ul className="cool-list">
                <li>Gestures - Hand placement and movement </li>
                <li>
                  Facial Expression - Expression using facial features mainly
                  the eyes and mouth.
                </li>
              </ul>
            </p>
          </div>

          <img src={Karen} alt="Karen" className="character-img" />
        </div>

        <div className="wrapper">
          <img
            src="https://blog.minifigures.com/wp-content/uploads/2019/09/emmet.jpg"
            alt="legoimages"
            className="character-img"
          />
          <div className="message">
            <h3>Simplicity</h3>
            <p>
              So when designing characters to go with the learning experience
              InHandy will provide, it is important to make them as simple as
              possible not only for repeatability and cohesiveness but also to
              give learners a feeling of ease.
            </p>
            <p>
              The purpose of simple character design would also be reflective of
              the idea that the learning is easy and that the learning
              experience InHandy will provide is as easy as the characters
              designed to be a part of the application.
            </p>
            <p>
              To make the characters as simple as possible, inspiration of
              simple block like shapes and colour was taken from the existing
              products, <b>Lego toys</b>.
            </p>
          </div>
        </div>

        <div className="shortdivider"></div>
        <img
          src={characterDesigns}
          className="drawnplan"
          alt="charactersketches"
        />
        <div className="wrapper">
          <div className="message">
            <h3>Friendly design</h3>
            <p>
              The purpose of friendly character design is to provide a feeling
              of ease and warmth to the User. The aim is to help the the user
              feel welcome regardless of their existing knowledge.
            </p>
            <p>
              Combining the concepts of;
              <ul className="cool-list">
                <li>Simple design - for repeatability and cohesiveness</li>
                <li>
                  Friendly design - to emphasise that feeling of ease for user
                </li>
              </ul>
              I believed it is necessary for developing characters that emulate
              the learning experience of InHandy.
            </p>
            <p>
              The successful language learning platform Duolingo also makes use
              of character design to create and emphasise that feeling of
              welcome and simplicity to the User
            </p>
          </div>
          <img
            src={characterDesign1}
            alt="characterdesign2"
            className="character-img vibrate"
          />
        </div>

        <div className="wrapper">
          <img
            src={Elliot}
            alt="karenandtony"
            className="character-img vibrate"
          />
          <img src={karenTony} alt="karenandtony" className="character-img" />
          <img
            src={Charles}
            alt="karenandtony"
            className="character-img vibrate"
          />
        </div>

        <div className="shortdivider"></div>

        <div className="header-zone">
          <h1>Hand design</h1>
          <p style={{ margin: "2rem 8rem" }}>
            These hand drawings were developed for the "Guess the sign" game.
            Graphic design must maintain the effective visual communication
            principle mentioned in the brief. Challenge: Designing hands that
            still emulate the simplicity in the graphic design for a complex
            language.
          </p>
        </div>

        <img
          src={handDesigns}
          alt="handdesigns"
          className="project-img"
          style={{ background: "#fff" }}
        />

        <div className="wrapper">
          <div className="message">
            <h3>Final design</h3>
            <p>
              I chose the bright golden Yellow colour because inspires a good
              mood and transmits positive feelings like joy, happiness and high
              energy.
            </p>
            <p>
              Some of the signs required directional arrows to show movement
              while others remained static 'poses'
            </p>
          </div>
          <img
            src={alphabet2}
            alt="handdesigns"
            style={{ margin: "auto" }}
            className="character-img"
          />
        </div>
      </div>
    </div>
  );
};

const DevelopedPrototype = () => {
  return (
    <div className="project-detail">
      <div className="header-zone">
        <h1> Final product </h1>
        <p style={{ margin: "2rem 8rem" }}>
          The final presentation for this project was my 50 page report with my
          research and a PowerPoint presentation. These are also available upon
          request!
        </p>
      </div>

      <div className="overview-col">
        <div className="wrapper">
          <div className="message">
            <h3>Opening + Login Page</h3>
            <p>
              The colours of the home screen were chosen as Blue for continuity
              and consistency. As the title screen is already a shade of blue.
              But also because blue is a color that is inspiring. It brings
              feelings of tranquility and serenity and sets the tone for
              learning.
            </p>
            <p>
              It's the colour of success, relaxation and professionalism. I felt
              it would be the perfect colour to represents productivity in
              learning. According to Shift Disruptive Learning, blue in general
              is a relaxing colour with the lighter shades appearing more
              friendly and the darker shades more serious.
            </p>
            <a
              className="button-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/proto/iLR6o7KWBJGeLR4lMQquv5/inHandy-Mobile?page-id=0%3A1&node-id=0%3A72&viewport=316%2C376%2C0.59&scaling=scale-down&starting-point-node-id=0%3A72&show-proto-sidebar=1"
            >
              <FontAwesomeIcon icon={faFigma} /> &nbsp; Figma Initial Prototype
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={mainpageinitial}
              className="screenshot"
              alt="pagedesign"
            />
            <FontAwesomeIcon icon={faArrowRight} />
            <img
              src={mainpagedeveloped}
              className="screenshot vibrate"
              alt="pagedesign"
            />
          </div>
        </div>

        <div className="wrapper">
          <div className="message">
            <h3>Guess the sign game</h3>
            <p>Using my developed hand designs.</p>
            <p>
              The design of the guess the sign page was to fulfil the job of
              retaining the images to memory. By making the colours pop a bright
              golden yellow through each pastel yellow background would work
              perfectly.
            </p>
            <p>
              Game elements like a Progression bar and timer were important to
              implement in my design as well.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <img src={pagesketch5} className="screenshot" alt="pagedesign" />
            <FontAwesomeIcon icon={faArrowRight} />
            <img
              src={pagedesign2}
              className="vibrate screenshot"
              alt="pagedesign"
            />
            <img src={pagedesign3} className="screenshot " alt="pagedesign" />
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
        <div className="header-backdrop">
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
        </div>

        <div className="overview-col">
          <img src={inHandyMock} className="title-graphic" alt="projectimage" />
          <div className="message">
            <h3> Overview </h3>
            <p>
              With Sign Language being the 4th most popular language in the UK,
              it is only fair that it should have learning content as accessible
              as the other languages like French, German, or Spanish.
            </p>
            <p>
              inHandy is a platform that will provide people (users) with a more
              engaging way to learn British Sign Language. It will provide this
              by focusing mainly on:
            </p>
            <div className="border-list">
              <p>Effective visual communication</p>
            </div>
            <div className="border-list">
              <p>Contextual learning</p>
            </div>
            <p>
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
                Product Analysis <br />
                Graphic Designer <br />
                Character Illustrator <br />
              </p>
            </div>
            <div className="tools">
              <h3>Tools</h3>
              <p>
                <FontAwesomeIcon icon={faFigma} /> &nbsp; Figma <br />
              </p>
              <p style={{ display: "flex", alignItems: "center" }}>
                <img src={procreate} className="iconimg" alt="procreate" />
                &nbsp; Procreate <br />
              </p>
            </div>
          </div>
        </div>

        <Introduction />
        <ProjectBrief />
        <Ideation />
        <Prototypes />
        <CharacterDesign />
        <DevelopedPrototype />
        {/* <NextSteps /> */}

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
