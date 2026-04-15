import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Men = () => {
    return (
        <div>
            <div className='relative top-0 left-[50%] -translate-x-[50%] text-3xl mt-5'>Mens' Products</div>
            <Outlet />
        </div>
    )
}

export default Men