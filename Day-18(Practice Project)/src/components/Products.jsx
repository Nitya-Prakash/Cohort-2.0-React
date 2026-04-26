import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {

    const productData = useContext(ProductDataContext)

    let renderData = ""
    if (productData.length > 0) {
        renderData = productData.map((prod, idx) => {
            return <Link to={`/products/${prod.id}`} key={idx} className='w-[22vw]  rounded-lg p-4 bg-white'>
                <div className='card h-[60%] w-full bg-[#F0F0F0] rounded-lg overflow-hidden relative'>
                    <img className='cardImg h-full w-full object-cover cursor-pointer' src={prod.images[0]} alt="" />
                    <p className='cardDesc'>{prod.description}</p>
                </div>
                <div className='mt-3 flex flex-col gap-3'>
                    <div className='flex justify-between'>
                        <h2 className='bg-[#F0F0F0] text-[#707070] font-semibold rounded-md px-3 capitalize'>{prod.category}</h2>
                        <h2 style={{ backgroundColor: prod.rating > 3 ? "green" : "orange" }} className='px-1 rounded-md font-semibold text-white'>{prod.rating} <i className="ri-star-s-fill"></i></h2>
                    </div>
                    <h1 className='text-lg font-semibold'>{prod.title}</h1>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <h2 className='text-lg font-semibold'>${prod.price}</h2>
                            <h2 className='text-sm text-green-700 font-medium'>{Math.floor(prod.discountPercentage)}% off</h2>
                        </div>
                        <h2 style={{ backgroundColor: prod.stock > 40 ? "blue" : "#c94609" }} className='text-sm px-2 text-white rounded-md'>{prod.stock} left</h2>
                    </div>
                    <h2 style={{ color: prod.returnPolicy == "No return policy" ? "red" : "gray" }} className='text-sm'>* {prod.returnPolicy}</h2>
                </div>
            </Link>
        })
    } else {
        renderData = <div className='h-[80vh] w-full text-2xl flex items-center justify-center'>
            <h1>Loading ...</h1>
        </div>
    }

    return (
        <div className='flex flex-wrap gap-5'>
            {renderData}
        </div>
    )
}

export default Products