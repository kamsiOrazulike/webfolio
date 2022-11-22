import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
// import ThisIsMe from '../../assets/imgs/Me1.png'
import { useState } from 'react'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import CranleighCrest from '../../assets/imgs/Cranleigh-crest.png'
import QMULCrest from '../../assets/imgs/QMULCrest.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const [CharClass, setLetterClass] = useState('animate-text')

  setTimeout(() => {
    setLetterClass('animate-text-hover')
  }, 3000)

  return (
    <>
      <div className="container about-page" id="about">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              CharClass={CharClass}
              CharArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              indx={15}
            />
          </h1>
          <div className="container-flex">
            <div className="section">
              <div className="school-emb-container shrink">
                <img
                  src={CranleighCrest}
                  className="school-emb"
                  alt="Cranleigh emb"
                />
              </div>

              <div className="grades hide">
                <h3>Cranleigh School</h3>
                <span className="certification">A-Levels</span>: Mathematics,
                Physics, Chemistry, Extended Project Qualification <br />
                <span className="certification">IGCSEs</span>: Mathematics (A*),
                English Language (A), English Literature (A), Physics,
                Chemistry, Biology, Art, Product Design, Geography, French,
                Drama
              </div>
            </div>

            <div className="section">
              <div className="">
                <img
                  src={QMULCrest}
                  className="school-emb-container shrink"
                  alt="QM emb"
                />
              </div>

              <div className="grades hide">
                <h3>Queen Mary University of London</h3>
                <span className="certification">First class</span>: BEng Design,
                Innovation and Creative Engineering
              </div>
            </div>
          </div>

          <p>
            I'm a Frontend Developer based in London with skills predominantly
            in
            <span className="hover-link"> JavaScript</span>,
            <span className="hover-link"> CSS</span>,
            <span className="hover-link"> HTML</span> and
            <span className="hover-link"> React</span>. However, picking up a
            new framework/ learning new development programs is not a problem.
          </p>
          <p>
            I have 1-2 years development experience in full stack due to my work
            experience at
            <span className="hover-link"> Berenberg Bank </span>
            and 2-3 years frontend development and design experience working on
            my own personal
            <span className="hover-link"> projects</span>.
          </p>
          <p>
            My mission is to utilise my knowledge of the design principles I
            learnt studying my University degree and skills picked up during my
            work experience to provide the best User experience when it comes to
            naviagating web applications.
          </p>
        </div>

        <div className="cube-container">
          <div className="frontendcube cube1">
            <div className="box face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="box face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="box face3">
              {/* <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" /> */}
            </div>
            <div className="box face4">
              {/* <FontAwesomeIcon icon={faFigma} color="#fff" /> */}
            </div>
            <div className="box face5">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="box face6">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
          </div>
        </div>

        <div className="content-zone">
          {/* <h1>
            <AnimatedLetters
              CharClass={CharClass}
              CharArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
              indx={15}
            />
          </h1> */}
        </div>
      </div>
    </>
  )
}

export default About
