import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductDataContext } from '../context/ProductContext'

const CategoryBasedProduct = () => {
    const product = useParams()
    // console.log(product)

    const products = useContext(ProductDataContext)
    // console.log(products)

    const selectedProduct = products.filter((elem) => {
        if (elem.category === product.category) {
            return elem;
        }
    })
    // console.log(selectedProduct)

    return (
        <div className='flex flex-wrap gap-5'>{selectedProduct.map((prod, idx) => {
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
        })}
        </div>
    )
}

export default CategoryBasedProduct