import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const cloths = useParams();
    return (
        <div className='relative top-0 left-[50%] -translate-x-[50%] text-3xl mt-5 capitalize whitespace-nowrap'>{cloths.anycloths} Details</div>
    )
}

export default Details