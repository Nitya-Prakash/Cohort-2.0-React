import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("")
  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const newAllUsers = [...allUsers];
    newAllUsers.push(name);
    console.log(newAllUsers);

    setAllUsers(newAllUsers);

    console.log(name)
    setName("")
  }

  return (
    <div className='p-10 flex gap-10'>
      <form onSubmit={function (e) {
        submitHandler(e);
      }} className='flex gap-5'>
        <input className='p-2 border-2 outline-none rounded-lg' type="text" placeholder='Enter your name' required value={name}
          onChange={(e) => {
            setName(e.target.value)
          }} />
        <button className='bg-blue-500 px-10 rounded-lg cursor-pointer text-lg active:scale-95'>Submit</button>
      </form>
    </div>
  )
}

export default App