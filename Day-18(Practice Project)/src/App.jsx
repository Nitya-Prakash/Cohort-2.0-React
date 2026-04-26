import React from 'react'
// import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import ProductDetails from './pages/ProductDetails'
import CategoryBasedProduct from './pages/CategoryBasedProduct'
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import AllProducts from './pages/AllProducts';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllProducts />} />
          <Route path='/products/category/:category' element={<CategoryBasedProduct />} />
        </Route>
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App