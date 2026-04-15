import { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  // const [content, setContent] = useState("")
  // const [counterInc, setCounterInc] = useState(0)
  // const [counterDec, setCounterDec] = useState(0)

  // const increaseCounter = () => {
  //   setCounterInc(counterInc + 1)
  // }

  // const decreaseCounter = () => {
  //   setCounterDec(counterDec - 1)
  // }

  // So basically useEffect is for rendering the data in the UI, whenever a data is needed to insert, it will insert it on the time of reloading.

  // useEffect(() => {
  //   console.log("useEffect is running ...")
  // }) // Here as there is no dependencies passed, it will run on every interaction in the page. As react renders the page on every single interaction. So it will render on change of the input field and on change of the values of the counter as well.

  // useState(() => {
  //   console.log("useEffect is running ...")
  // }, []) // Here you passed a empty dependecies array. So basically means it has no dependencies. So it will render only once. Not on every interaction.

  // useEffect(() => {
  //   console.log("useEffect is running ...")
  // }, [content]) // Now you have passed a dependecy. Now it will run on change of the content variable which is the input field. The benefit is that now this console will not rerender untill the change of the input field. It will render only when it is needed. You can pass multiple dependencies as well.


  const [number, setNumber] = useState(0);
  const [randomUser, setRandomUser] = useState("");

  async function getUser() {
    const res = await axios.get("https://randomuser.me/api/")
    setRandomUser((res.data.results[0].name.first) + " " + (res.data.results[0].name.last))
  }

  useEffect(() => {
    getUser()
  }, [number])

  return (
    <div className='p-10'>
      {/* <input value={content} onChange={(e) => {
        setContent(e.target.value)
      }} className='outline-none border border-amber-500 px-2 py-1 text-xl rounded-md mb-10' type="text" placeholder='Write ...' />

      <h1 className='text-4xl'>{counterInc}</h1>
      <button onClick={increaseCounter} className='px-6 py-2 border-none bg-blue-400 text-xl rounded-md mt-2 cursor-pointer'>Increase</button>

      <h1 className='text-4xl mt-10'>{counterDec}</h1>
      <button onClick={decreaseCounter} className='px-6 py-2 border-none bg-blue-400 text-xl rounded-md mt-2 cursor-pointer'>Decrease</button> */}

      <h1 className='text-3xl mb-3'>{randomUser ? randomUser : "___"}</h1>

      <h2 className='text-2xl mb-2'>{number}</h2>
      <button onClick={() => {
        setNumber(Math.floor(Math.random() * 100));
      }} className='px-6 py-2 border-none bg-blue-400 text-xl rounded-md mt-2 cursor-pointer'>Change</button>

    </div>
  )
}

export default App