import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SecondaryNavbar = () => {
    const navigate = useNavigate()

    return (
        <div className='px-10 py-5 bg-gray-400 flex items-center justify-between'>
            <h1 className='text-3xl'>e-Commerce</h1>
            <div className='flex gap-5'>
                <button onClick={() => {
                    navigate(-1)
                }} className='text-xl hover:text-gray-600 cursor-pointer'><i className="ri-arrow-go-back-fill"></i> Back</button>
            </div>
        </div>
    )
}

export default SecondaryNavbar