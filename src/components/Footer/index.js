import './index.scss'
import { Link as LinkRoute } from 'react-router-dom'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

  return (
    <>
      <div className="container footer-page">
        <div className="text-zone">
          <p>Made using React and CSS/SCSS</p>
          <div className='link-container'>
          <LinkRoute
            className="footer-link"
            to="https://www.linkedin.com/in/kamsiyonnaorazulike"
            spy="true"
            smooth="true"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </LinkRoute>
          <LinkRoute
            className="footer-link"
            to=""
            spy="true"
            smooth="true"
          >
            <FontAwesomeIcon icon={faGithub} />
          </LinkRoute>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
