import './App.css';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
// import Social from "./components/Social";
import Project from "./components/Project";
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-full h-screen  bg-[url('./assets/girl2.avif')] opacity-80 bg-cover bg-blend-overlay">
      <Navbar />
      <Routes>
        <Route path="/" element={<div><Title /></div>} />
        <Route path="/title" element={<div><Title /></div>} />
        <Route path="/project" element={<div><Project /></div>} />
        <Route path="/about" element={<div><About /></div>} />
        <Route path="/resume" element={<div><Resume /></div>} />
        <Route path="/contact" element={<div><Contact /></div>} />
      </Routes>
    </div>
  );
}

export default App;


