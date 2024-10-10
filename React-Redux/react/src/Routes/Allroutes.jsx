import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Form from '../pages/Form'
import Product from '../pages/Product'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

export default function Allroutes() {


  return (
    <div>
      <Routes>
        
        <Route path='/' element={<Home/>}/>

        <Route path='/Form' element={<Form/>}/>

        <Route path='/Product' element={<Product/>}/>

        <Route path='/Signup' element={<Signup/>}/>

        <Route path='/Login' element={<Login/>}/>

      </Routes>
    </div>
  )
}
