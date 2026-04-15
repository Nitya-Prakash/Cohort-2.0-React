import React from 'react'

const Navbar = (props) => {
    // console.log(props)
    return (
        <div style={{ backgroundColor: props.color }} className='bg-pink-800 flex items-center justify-between px-5 py-5 mb-2'>
            <h1 className='text-2xl'>{props.title}</h1>
            <div className='flex items-center gap-10'>
                {props.links.map(element => {
                    return <h4 className='text-xl'>{element}</h4>
                })}
            </div>
        </div>
    )
}

export default Navbar