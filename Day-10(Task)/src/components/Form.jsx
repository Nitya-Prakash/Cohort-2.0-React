import React, { useState } from 'react'

const Form = ({ setAllData }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [image, setImage] = useState("")

    function submitHandler(e) {
        e.preventDefault()
        setAllData(prev => [...prev, { image, name, email, number }])
        setImage("")
        setName("")
        setEmail("")
        setNumber("")
    }

    return (
        <div className='px-5 py-5 border-b border-b-green text-white flex items-center justify-center'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-col items-center gap-5 text-white w-[90%]'>
                <input value={image} onChange={(e) => {
                    setImage(e.target.value)
                }} required className='w-full px-3 py-2 text-lg border border-white bg-transparent rounded-md outline-none' type="url" placeholder='Image URL' />
                <div className='w-full flex gap-5'>
                    <input value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} required className='w-1/3 px-3 py-2 text-lg border border-white bg-transparent rounded-md outline-none' type="text" placeholder='Enter your name' />
                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} required className='w-1/3 px-3 py-2 text-lg border border-white bg-transparent rounded-md outline-none' type="email" placeholder='Enter your email' />
                    <input value={number} onChange={(e) => {
                        setNumber(e.target.value)
                    }} required className='w-1/3 px-3 py-2 text-lg border border-white bg-transparent rounded-md outline-none' type="number" placeholder='Enter your phone number' />
                </div>
                <button className='px-30 py-2 bg-green-700 rounded-md text-lg cursor-pointer' type="submit">Create Card</button>
            </form>
        </div>
    )
}

export default Form