import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Form from '../pages/Form'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Singlepage from '../pages/Singlepage'

export default function Allroutes() {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Form' element={ <Form/> }/>
            <Route path='/Products' element={<Products/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Singlepage/:id' element={<Singlepage/>}/>
      </Routes>
    </div>
  )
}
