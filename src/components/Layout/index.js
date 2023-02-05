import "./index.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import ScrollToTop from "../ScrollToTop";

const Layout = () => {
  return (
    <>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <div className="page">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
