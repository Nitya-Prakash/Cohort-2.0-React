import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)
    console.log(theme)

    function changeTheme() {
        if (theme == "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <div className='p-5 flex items-center justify-between bg-gray-400'>
            <h1 className='text-2xl'>Navbar</h1>
            <p className='text-2xl capitalize'>{theme}</p>
            <button onClick={changeTheme} className='text-xl px-5 py-2 rounded-md bg-green-600 cursor-pointer'>Change Theme</button>
        </div>
    )
}

export default Navbar