<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'; 
>>>>>>> 12ead7e765aebaa0996dd3f08b4bb317d1060e61
import Navbar from './components/navbar';
import About from './pages/about';
import Projects from "./components/Projects";
import Contact from './pages/Contact';
<<<<<<< HEAD

import './style.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router> {/* Ganti ke HashRouter */}
=======
import './style.css';  
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  // Memeriksa jika aplikasi berjalan di localhost atau GitHub Pages
  const basename = window.location.hostname === 'localhost' ? '' : '/portfolio';

  return (
    <Router basename={basename}>  {/* Menetapkan basename secara dinamis */}
>>>>>>> 12ead7e765aebaa0996dd3f08b4bb317d1060e61
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
