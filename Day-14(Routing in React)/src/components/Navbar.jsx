import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='px-8 py-5 bg-pink-600 flex items-center justify-between'>
            <h1 className='text-3xl'>Logo</h1>
            <div className='flex gap-6'>
                <Link to="/" className='text-2xl cursor-pointer'>Home</Link>
                <Link to="/about" className='text-2xl cursor-pointer'>About</Link>
                <Link to="/product" className='text-2xl cursor-pointer'>Product</Link>
            </div>
        </div>
    )
}

export default Navbar