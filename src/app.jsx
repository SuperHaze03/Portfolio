import React from 'react'; // Pastikan React diimpor
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/about';
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import Contact from './pages/Contact';
import './style.css';  // Impor file CSS
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
