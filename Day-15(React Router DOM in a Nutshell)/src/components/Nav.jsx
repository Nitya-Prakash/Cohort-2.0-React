import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='flex items-center justify-between p-5 text-2xl'>
            <NavLink style={({ isActive }) => (
                { color: isActive ? "red" : "white" }
            )} to="/">Home</NavLink>
            <NavLink style={({ isActive }) => (
                { color: isActive ? "red" : "white" }
            )} to="/about">About</NavLink>
            <NavLink style={({ isActive }) => (
                { color: isActive ? "red" : "white" }
            )} to="/contact">Contact</NavLink>
        </div >
    )
}

export default Nav