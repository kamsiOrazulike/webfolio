import './App.scss'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Project1 from './components/Featured/Project1'
import Project2 from './components/Featured/Project2'
import Projects from './components/Projects'


import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="featured1" element={<Project1 />} />
        <Route path="featured2" element={<Project2 />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
