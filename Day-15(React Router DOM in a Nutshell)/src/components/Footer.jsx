import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-between absolute w-full bottom-0 mb-4 px-5'>
            <h2 className='text-lg text-white'>Footer</h2>
            <button onClick={() => {
                navigate("/about")
            }} className='px-7 py-2 text-lg bg-green-800 border-none rounded-lg cursor-pointer'>About Us</button>
        </div>
    )
}

export default Footer