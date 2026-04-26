import React from 'react'
import Products from '../components/Products'
import { useParams } from 'react-router-dom'

const AllProducts = () => {
    return (
        <div className='px-10 py-5'>
            <h1 className='text-3xl'>All Products</h1>
            <Products />
        </div>
    )
}

export default AllProducts