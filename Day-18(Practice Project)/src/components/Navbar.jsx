import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    // console.log(location)

    const navigate = useNavigate();

    return (
        <div className='px-10 py-5 bg-gray-400 flex items-center justify-between'>
            <h1 className='text-3xl'>e-Commerce</h1>
            <div className='flex gap-5'>
                {location.pathname != "/" ? <button onClick={() => {
                    navigate("/")
                }} className='text-xl hover:text-gray-600 cursor-pointer'><i className="ri-arrow-go-back-fill"></i> Back to Home</button> : null}
                <NavLink to="/products/category/beauty" className={({ isActive }) => {
                    return `black text-xl ${isActive ? "text-gray-200" : "black"} hover:text-gray-600`
                }} >Beauty</NavLink>
                <NavLink to="/products/category/fragrances" className={({ isActive }) => {
                    return `black text-xl ${isActive ? "text-gray-200" : "black"} hover:text-gray-600`
                }}>Fragrances</NavLink>
                <NavLink to="/products/category/furniture" className={({ isActive }) => {
                    return `black text-xl ${isActive ? "text-gray-200" : "black"} hover:text-gray-600`
                }}>Furniture</NavLink>
                <NavLink to="/products/category/groceries" className={({ isActive }) => {
                    return `black text-xl ${isActive ? "text-gray-200" : "black"} hover:text-gray-600`
                }}>Groceries</NavLink>
            </div>
        </div>
    )
}

export default Navbar