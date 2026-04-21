import React from 'react'
import Nav from './components/Nav'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import { Routes, Route } from "react-router-dom";
import Employees from './components/Employees'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path='employee' element={<Employees />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App