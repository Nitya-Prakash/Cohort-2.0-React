import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center text-3xl'>
            <h1 className='mt-10'>About</h1>
            <Link className='w-full flex flex-start text-lg text-blue-500' to="employee">See who works with us</Link>
            <Outlet />
        </div>
    )
}

export default About