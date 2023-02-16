import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import AboutFull from "./components/AboutFull";
import PageNotFound from "./components/PageNotFound";

import LBC from "./components/Projects/LBCPage";
import Oasis from "./components/Projects/OasisPage";
import InHandy from "./components/Projects/inHandy";
import HeirsOfNakamoto from "./components/Projects/HeirsProject";
import GraphicDesigns from "./components/Projects/GraphicDesign";
import GoGenesisProject from "./components/Projects/GoGenesisUI";
import SoundCloudProject from "./components/Projects/SoundCloudUI";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutFull />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projectsoundcloud" element={<SoundCloudProject />} />
          <Route path="inhandy" element={<InHandy />} />
          <Route path="gogenesis" element={<GoGenesisProject />} />
          <Route path="projects" element={<Projects />} />
          <Route path="designs" element={<GraphicDesigns />} />
          <Route path="projectnakamoto" element={<HeirsOfNakamoto />} />
          <Route path="londonbodycontour" element={<LBC />} />
          <Route path="oasisproject" element={<Oasis />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
