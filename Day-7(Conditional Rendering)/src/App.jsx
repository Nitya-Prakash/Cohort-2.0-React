import React from 'react'
import Navbar from './components/Navbar'
import Eligible from './components/Eligible'
import NotEligible from './components/NotEligible'

const App = () => {
  const person = {
    name: "Nitya",
    age: 16
  }

  let x = 0;
  const btnClicked = (x) => {
    console.log("Downloaded !", x)
  }

  return (
    <div className='px-5 py-3'>
      {/* <Navbar title="Comapny 1" color="red" links={["Home", "About", "Services", "Contact"]} />
      <Navbar title="Comapny 2" color="green" links={["Home", "Products", "Services", "Contact"]} />
      <Navbar title="Comapny 3" color="blue" links={["Home", "About", "Courses", "Contact"]} /> */}

      {/* {person.age >= 18 ? <Eligible name={person.name} /> : <NotEligible name={person.name} />} */}

      {/* <button onClick={btnClicked} className='px-10 py-5 bg-green-600 text-3xl rounded-lg cursor-pointer active:scale-95'>Click to console</button> */}
      <button onClick={() => {
        btnClicked(x++)
      }} className='px-10 py-5 bg-green-600 text-3xl rounded-lg cursor-pointer active:scale-95'>Click to console</button>
    </div>
  )
}

export default App