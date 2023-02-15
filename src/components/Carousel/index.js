import "./index.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SlideShow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].path})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div style={{ height: "100%", position: "relative" }}>
        <div>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="left-arrow"
            onClick={goToPrevious}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="right-arrow"
            onClick={goToNext}
          />
        </div>
        <div className="slideshow" style={slideStyle}></div>
      </div>
    </>
  );
};

export default SlideShow;
