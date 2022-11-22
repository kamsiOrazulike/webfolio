import './App.scss'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Project1 from './components/Portfolio/Project1'
import Project2 from './components/Portfolio/Project2'


import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project1" element={<Project1 />} />
        <Route path="project2" element={<Project2 />} />
      </Route>
      
    </Routes>
    <Footer />
    </>
  );
}

export default App;
