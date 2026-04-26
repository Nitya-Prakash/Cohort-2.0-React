import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)
    return (
        <div className='flex gap-5 items-center p-5 bg-blue-900'>
            <h2 className='text-2xl'>Footer</h2>
            <p className='text-lg capitalize'>{theme}</p>
        </div>
    )
}

export default Footer