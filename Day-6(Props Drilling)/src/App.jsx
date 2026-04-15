import React from 'react'
import Card from './components/Card'

const App = () => {

  // const name = "Nitya";
  // const age = 21;

  return (
    <div className='p-10 flex gap-10'>
      {/* <h1>My name is {name} and I am {age} years old.</h1> */}
      <Card name="Charles" age={28} />
      <Card name="Oscar" age={24} />
      <Card name="Valterri" age={36} />
    </div>
  )
}

export default App