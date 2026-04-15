import Form from './components/Form'
import Cards from './components/Cards'
import { useState } from 'react'

const App = () => {
  const localData = JSON.parse(localStorage.getItem("allUsers")) || []

  const [allData, setAllData] = useState(localData)

  return (
    <div className='bg-black min-h-screen w-full'>
      <Form allData={allData} setAllData={setAllData} />
      <Cards allData={allData} setAllData={setAllData} />
    </div>
  )
}

export default App