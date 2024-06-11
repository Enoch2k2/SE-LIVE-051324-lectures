import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
      <li><NavLink to="/blogs">List Blogs</NavLink></li>
      <li><NavLink to="/blogs/new">Create Blog</NavLink></li>
    </ul>
  )
}

export default Navbar