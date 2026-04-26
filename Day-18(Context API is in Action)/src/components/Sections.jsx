import React, { useContext } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import { ThemeDataContext } from '../context/ThemeContext'

const Sections = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)
    return (
        <div className='p-5 flex items-center justify-between bg-orange-900'>
            <Section1 />
            <p className='text-lg capitalize'>{theme}</p>
            <Section2 />
        </div>
    )
}

export default Sections