import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { getAllProducts } from '../api/ProductApi';
export const ProductDataContext = createContext()

const ProductContext = ({ children }) => {
    const [allProducts, setAllProducts] = useState([])

    const setData = async () => {
        const data = await getAllProducts()
        setAllProducts(data)
    }

    useEffect(() => {
        setData()
    }, [])

    return (
        <div>
            <ProductDataContext.Provider value={allProducts}>
                {children}
            </ProductDataContext.Provider>
        </div>
    )
}

export default ProductContext