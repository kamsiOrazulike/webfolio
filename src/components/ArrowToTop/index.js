import "./index.scss";
import { Link as LinkScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

const ArrowToTop = () => {
  return (
    <>
      <LinkScroll
        to="top"
        spy={true}
        smooth={true}
        offset={-500}
        duration={500}
        className="grow to-top"
      >
        <FontAwesomeIcon icon={faArrowCircleUp} />
      </LinkScroll>
    </>
  );
};

export default ArrowToTop;
