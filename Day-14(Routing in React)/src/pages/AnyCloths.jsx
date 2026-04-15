import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';

const AnyCloths = () => {
    const cloths = useParams();
    // console.log(cloths)
    return (
        <div>
            <div className='relative top-0 left-[50%] -translate-x-[50%] text-3xl mt-5 capitalize whitespace-nowrap'>{cloths.anycloths} page</div>
            <Link to="details" className='text-xl cursor-pointer text-blue-400 underline'>Details</Link>
            <Outlet />
        </div>
    )
}

export default AnyCloths