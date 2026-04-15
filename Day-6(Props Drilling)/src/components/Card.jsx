import React from 'react'

const Card = (props) => {
    console.log(props)

  return (
    <div>
        <div className='h-44 w-60 rounded-xl bg-amber-500 p-10'>
            <h1 className='text-2xl font-semibold'>Name: {props.name}</h1>
            <h3 className='text-xl font-semibold mt-5'>Age: {props.age}</h3>
        </div>
    </div>
  )
}

export default Card