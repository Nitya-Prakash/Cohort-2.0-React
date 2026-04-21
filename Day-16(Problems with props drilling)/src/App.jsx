import React, { useState } from 'react'
import Home from "./components/Home";

const App = () => {
  const [theme, setTheme] = useState("Light")

  function changeTheme(newTheme) {
    setTheme(newTheme)
  }

  return (
    <div>
      <h1 className='text-3xl p-5'>This is {theme}</h1>
      <Home changeTheme={changeTheme} />
    </div>
  )
}

export default App