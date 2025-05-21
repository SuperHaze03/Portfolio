import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './pages/About';


import './style.css';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <main>
        <section id="about"><About /></section>

      </main>
    </HashRouter>
  );
}

export default App;
