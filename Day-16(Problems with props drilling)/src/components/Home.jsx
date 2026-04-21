import React from 'react'
import Navbar from "./Navbar"
import AllSections from "./AllSections"
import Footer from "./Footer"
import { useState } from 'react'

const Home = ({ changeTheme }) => {
    const [newTheme, setNewTheme] = useState("")

    return (
        <div className='p-5'>
            <form onSubmit={(e) => {
                e.preventDefault()
                setNewTheme("")
            }} className='flex gap-5'>
                <input value={newTheme} onChange={(e) => {
                    setNewTheme(e.target.value)
                }} className='bg-gray-500 border-none rounded-md px-5 py-2 text-xl outline-none' type="text" />
                <button onClick={() => {
                    changeTheme(newTheme)
                }} type="submit" className='px-5 py-2 text-xl bg-blue-300 rounded-md cursor-pointer'>Submit</button>
            </form>

            {/* <Navbar />
            <AllSections />
            <Footer /> */}
        </div>
    )
}

export default Home