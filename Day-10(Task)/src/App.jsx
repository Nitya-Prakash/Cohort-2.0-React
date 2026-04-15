import React, { useState } from 'react'
import Form from './components/Form'
import Cards from './components/Cards'

const App = () => {
  const [allData, setAllData] = useState([])
  return (
    <div className='bg-black min-h-screen w-full'>
      <Form allData={allData} setAllData={setAllData} />
      <Cards allData={allData} setAllData={setAllData} />
    </div>
  )
}

export default App