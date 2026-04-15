import React from 'react'

const NotEligible = (props) => {
  return (
    <div className='px-10 py-7 bg-red-700 w-fit rounded-lg'>
        <h1 className='text-2xl'>Hii {props.name},you are not eligible !</h1>
    </div>
  )
}

export default NotEligible