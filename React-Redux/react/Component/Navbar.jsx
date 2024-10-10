import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to='/'>Home</Link>
      <Link to='/Form'>Form</Link>
      <Link to='/Product'>Product</Link>
      <Link to='/Signup'>Signup</Link>
      <Link to='/Login'>Login</Link>  
    </div>
  )
}
