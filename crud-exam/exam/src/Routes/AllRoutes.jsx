import React from 'react'
import Login from '../pages/Login'
import Form from '../pages/Form'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import { Route,  Routes } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'

export default function AllRoutes() {
  return (
    <div>
      <Routes>
            <Route path='/' element={
              <PrivateRoutes>
                <Home/>
              </PrivateRoutes>
              } />
            <Route path='/Form' element={
              <PrivateRoutes>
                <Form/>
              </PrivateRoutes>
              } />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Signup' element={<Signup/>} />
      </Routes>
    </div>
  )
}

