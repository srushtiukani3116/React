import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/Form'>Form</Link>
      <Link to='/Products'>Products</Link>
      <Link to='/Cart'>Cart</Link>
    </div>
  )
}
