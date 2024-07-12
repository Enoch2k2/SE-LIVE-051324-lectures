import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/books">Book List</Link></li>
      <li><Link to="/books/new">Create Book</Link></li>
    </ul>
  )
}

export default Navbar