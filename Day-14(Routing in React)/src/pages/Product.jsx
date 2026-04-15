import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <div className='relative top-0 left-[50%] -translate-x-[50%] text-3xl mt-5'>Product</div>
            <Link to="men" className='text-xl cursor-pointer text-blue-400 underline mr-3'>Mens' Products</Link>
            <Link to="women" className='text-xl cursor-pointer text-blue-400 underline'>Womens' Products</Link>
            <Outlet />
        </div>
    )
}

export default Product