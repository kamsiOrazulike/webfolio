import { Link as LinkRoute } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="navbar-container">
          <LinkRoute
            className='home-link'
            to="/"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <FontAwesomeIcon icon={faHome} />
          </LinkRoute>
          <LinkScroll
            className="to-top"
            to="home"
            spy={true}
            smooth={true}
            offset={-320}
            duration={500}
          >
          <FontAwesomeIcon icon={faCircleArrowUp}/>
          </LinkScroll>
          <FontAwesomeIcon icon={faBars} className="mobile-icon" />
          <div className="nav-menu">
            <ul>
              <li className="nav-item">
                <LinkScroll
                  className="nav-links"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About Me
                </LinkScroll>
              </li>
              <li className="nav-item">
                <LinkScroll
                  className="nav-links"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact Me
                </LinkScroll>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
