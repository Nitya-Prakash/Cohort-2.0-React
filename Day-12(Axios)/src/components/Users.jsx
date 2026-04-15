import React, { useEffect, useState } from 'react'

const Users = ({ elem }) => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return (
        <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }} className='w-60 h-60 flex flex-col items-center justify-center text-xl text-white rounded-lg'>
            <h2>{elem.name}</h2>
            <h3>{elem.website}</h3>
        </div>
    )
}

export default Users