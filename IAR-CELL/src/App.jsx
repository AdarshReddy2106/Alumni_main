// ?import React from 'react'
<<<<<<< HEAD
// import { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import About from "./pages/About"
=======
import { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
>>>>>>> 1f4d2fee108ee5162d929b18a98ba32efc7b5ec0

function App() {

  return (

    <Router>
      <ScrollToTop/>

      
      <Routes>
        
        <Route path="/" element={<Home/>}/>
<<<<<<< HEAD
        <Route path="/about" element={<About />} />

=======
>>>>>>> 1f4d2fee108ee5162d929b18a98ba32efc7b5ec0
       
        </Routes>
      </Router>
      
          
          
      
    
  )
}

export default App
