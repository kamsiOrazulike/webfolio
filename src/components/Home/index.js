import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

import About from '../About'
import Contact from '../Contact'
import ProfileImg from '../../assets/imgs/Me3.png'
import Project1 from '../../assets/portfolio-imgs/SouncloudHome.png'
import Project2 from '../../assets/portfolio-imgs/SouncloudHome.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  //use state hook to define state of my const CharClass
  const [CharClass, setLetterClass] = useState('animate-text')
  const nameLetterArray = [' ', 'K', 'a', 'm', 's', 'i']
  const jobLetterArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  setTimeout(() => {
    setLetterClass('animate-text-hover')
  }, 4000)

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <LinkScroll
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src={ProfileImg} alt="me" className="myImage shrink" />
          </LinkScroll>
          <h1 className="introduction" id="home">
            <span className={CharClass}>H</span>
            <span className={`${CharClass} _12`}>i</span>
            <span className={`${CharClass} _13`}>,</span>
            <span className={`${CharClass} _14`}> </span>
            <span className={`${CharClass} _15`}>I</span>
            <span className={`${CharClass} _16`}>'</span>
            <span className={`${CharClass} _17`}>m</span>

            <AnimatedLetters
              CharClass={CharClass}
              CharArray={nameLetterArray}
              indx={16}
            />
            <br />
            <AnimatedLetters
              CharClass={CharClass}
              CharArray={jobLetterArray}
              indx={22}
            />
          </h1>
          <h2 className="shrink">Frontend Developer | Graphic Design</h2>
          <br />
          <LinkScroll
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flat-button"
          >
            GET IN TOUCH
          </LinkScroll>
        </div>

        <Link to="/project1">
          <img
            src={Project1}
            className="project1 slidepop-left"
            alt="project1"
          />
        </Link>
        <Link to="/project2">
          <img
            src={Project2}
            className="project2 slidepop-right"
            alt="project2"
          />
        </Link>
      </div>
      <About />
      <Contact />
    </>
  )
}

export default Home
