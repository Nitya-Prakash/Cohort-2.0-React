import React from 'react'

const Cards = ({ allData, setAllData }) => {

    function deleteHandler(idx) {
        const newData = [...allData];
        newData.splice(idx, 1)
        setAllData(newData)
    }

    return (
        <div className='px-5 py-5 flex justify-between gap-6 flex-wrap'>
            {allData?.map((elem, idx) => {
                return <div key={idx} className='text-white w-[22%] h-96 bg-white rounded-xl overflow-hidden p-5 flex flex-col justify-between'>
                    <div className='w-full h-[60%] rounded-xl overflow-hidden'>
                        <img className='h-full w-full object-cover object-center' src={elem.image} alt="Image not found" />
                    </div>
                    <div className='h-[35%] w-full flex flex-col items-center justify-between gap-1'>
                        <h2 className='text-xl text-black'>{elem.name}</h2>
                        <h4 className='text-md text-black'>{elem.email}</h4>
                        <h4 className='text-md text-black'>{elem.number}</h4>
                        <button onClick={() => {
                            deleteHandler(idx)
                        }} className='px-20 py-2 bg-red-400 text-lg rounded-lg cursor-pointer'>Delete</button>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Cards