import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from './about'
import What from './what'
import Contact from './contact'


const App = () => {
  return (
    <Router>
    <div>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/what" element={<What/>} />
        <Route path="/contact" element={<Contact />} />
        
        
      </Routes>
  </div>
  </Router>
  )
}

export default App
