import React from 'react'
import Navbar from "./components/Navbar"
import AllSections from './components/AllSections'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      {/* We can do this also. With this we cam pass children values. You can get the values through props */}
      {/* <Navbar name="Nityaprakash">
        <h1>Hello</h1>
      </Navbar> */}
      <Navbar />
      <AllSections />
      <Footer />
    </div>
  )
}

export default App