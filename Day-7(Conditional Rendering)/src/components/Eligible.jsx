import React from 'react'

const Eligible = (props) => {
    console.log(props)
  return (
    <div className='px-10 py-7 bg-emerald-700 w-fit rounded-lg'>
        <h1 className='text-2xl'>Hii {props.name},you are eligible to vote.</h1>
    </div>
  )
}

export default Eligible