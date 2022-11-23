import "./index.scss";
import { useRef, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import contact from '../../assets/imgs/contactsign.png'

const Contact = () => {
  const [CharClass, setLetterClass] = useState("animate-text");
  const form = useRef();

  setTimeout(() => {
    setLetterClass("animate-text-hover");
  }, 4000);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_q145by3", form.current, "rnmLytGS0mDYkzlp6")
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page" id="contact">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              CharArray={["L", "e", "t", "s", " ", "T", "a", "l", "k", "!"]}
              CharClass={CharClass}
              indx={15}
            />
            <p>
              I am mostly interested in Frontend Design and Development
              opportunities from full-time, permanent roles to shorter term
              contracts.
            </p>
            <p>
              You can also email me at &nbsp;
              <a
                href="mailto:kamsi_orazulike@icloud.com"
                className="hover-link grow"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp;kamsi _orazulike@icloud.com
              </a>
              &nbsp;or make use of the form below!
            </p>
          </h1>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        {/* <img src={contact} alt="contactMeme" className="imageMeme" /> */}
      </div>
    </>
  );
};

export default Contact;
