import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDataContext } from '../context/ProductContext'
import SecondaryNavbar from '../components/SecondaryNavbar'

const ProductDetails = () => {
    const product = useParams()
    // console.log(product)

    const data = useContext(ProductDataContext)
    const singleProduct = data.find((elem) => elem.id == product.id)
    // console.log(singleProduct)

    let singleProductData = "";
    if (singleProduct != undefined) {
        singleProductData = <div className='px-10 py-5 flex gap-5'>
            <div className='w-[40vw] h-[70vh] rounded-lg'>
                <img className='w-full object-cover' src={singleProduct?.images?.[0]} alt="" />
            </div>
            <div className='w-[55vw] h-[70vh] rounded-lg flex gap-6 flex-col px-5 py-5'>
                <h2 className='text-3xl font-semibold'>{singleProduct.title}</h2>
                <p className='text-lg line leading-6'>{singleProduct.description}</p>
                <div className='flex items-center justify-between'>
                    <h3 className='bg-[#F0F0F0] text-[#393939] text-lg font-semibold rounded-md px-3 capitalize'>{singleProduct.category}</h3>
                    <h3 style={{ backgroundColor: singleProduct.rating > 3 ? "green" : "orange" }} className='px-2 rounded-md font-semibold text-lg text-white'>{singleProduct.rating} <i className="ri-star-s-fill"></i></h3>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <h2 className='text-xl font-semibold'>${singleProduct.price}</h2>
                        <p className='text-md text-green-700 font-medium'>{Math.floor(singleProduct.discountPercentage)}% off</p>
                    </div>
                    <h4 style={{ backgroundColor: singleProduct.stock > 40 ? "blue" : "#c94609" }} className='text-md px-2 text-white rounded-md'>{singleProduct.stock} left</h4>
                </div>
                <p style={{ color: singleProduct.returnPolicy == "No return policy" ? "red" : "gray" }} className='text-md'>*{singleProduct.returnPolicy}</p>
            </div>
        </div>
    } else {
        singleProductData = <div className='h-[80vh] w-full text-2xl flex items-center justify-center'>
            <h1>Loading ...</h1>
        </div>
    }


    return (
        <div>
            <SecondaryNavbar />
            {singleProductData}
        </div>
    )
}

export default ProductDetails