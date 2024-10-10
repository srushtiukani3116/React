import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'

export default function Allrouters() {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path='/About' element={<About/>}/>

            <Route path='/Contact' element={<Contact/>}/>
            
            <Route path='/Login' element={<Login/>}/>
      </Routes>
    </div>
  )
}
