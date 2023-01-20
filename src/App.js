import './App.scss'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import SoundCloudProject from './components/Projects/SoundCloudUI'
import GoGenesisProject from './components/Projects/GoGenesisUI'
import Projects from './components/Projects'
import GraphicDesigns from './components/Projects/GraphicDesign'
import HeirsOfNakamoto from './components/Projects/HeirsProject'
import LBC from './components/Projects/LBCPage'
import Oasis from './components/Projects/OasisPage'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projectsoundcloud" element={<SoundCloudProject />} />
        <Route path="projectgogenesis" element={<GoGenesisProject />} />
        <Route path="projects" element={<Projects />} />
        <Route path="designs" element={<GraphicDesigns />} />
        <Route path="projectnakamoto" element={<HeirsOfNakamoto />} />
        <Route path="londonbodycontour" element={<LBC />} />
        <Route path="oasisproject" element={<Oasis />} />
      </Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
