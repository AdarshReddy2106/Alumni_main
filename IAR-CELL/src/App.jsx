// ?import React from 'react'
// import { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import About from "./pages/About"

function App() {

  return (

    <Router>
      <ScrollToTop/>

      
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />

       
        </Routes>
      </Router>
      
          
          
      
    
  )
}

export default App
