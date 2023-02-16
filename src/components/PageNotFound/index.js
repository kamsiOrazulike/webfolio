import "./index.scss";
import bigBaby from "../../assets/imgs/404Baby.png";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="no-page-found">
        <h1>Oops! This page doesn't exist yet! </h1>
        <img src={bigBaby} alt="thinkingBaby" />
        <div className="link-group">
          <Link to="/" className="button-link">
            Head to home?
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
