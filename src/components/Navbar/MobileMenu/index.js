import "./index.scss";
// import { Link as LinkRoute } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

// const menuButton = document.querySelector(".hamburger-menu");
// const openNavLinks = document.querySelector(".toggle");

// menuButton.addEventListener("click", () => {
//     openNavLinks.classList.toggle("active");
// });

const MobileMenuButton = () => {
  return (
    <>
      <div>
        <FontAwesomeIcon className="hamburger-menu grow" icon={faHamburger} />
      </div>
      <ul className="toggle">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
    </>
  );
};

export default MobileMenuButton;
