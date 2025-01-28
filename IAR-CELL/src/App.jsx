import React from 'react'
// import { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

import ScrollToTop from "./components/ScrollToTop/ScrollToTop"

function App() {

  return (

    <Router>
      <ScrollToTop/>

      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
       
        </Routes>
      </Router>
      
          
          
      
    
  )
}

export default App
