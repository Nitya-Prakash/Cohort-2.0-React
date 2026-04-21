import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Footer = () => {
    const user = useContext(userDataContext)
    console.log(user)

    return (
        <div className='w-full h-[15vh] bg-blue-400 text-4xl p-5'>Footer</div>
    )
}

export default Footer