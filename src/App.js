import React from 'react';
import Navbar from './components/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Routes/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='App'>
        <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </Router>
    <Footer/>
      </div>
  );
}