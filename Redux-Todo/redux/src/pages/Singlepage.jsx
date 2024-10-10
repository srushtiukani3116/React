import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Singlepage() {

    const { id } = useParams()
    const [singleProduct , setSingleProduct]= useState([])

    useEffect(()=>{
        fetch(`http://localhost:9000/productsData/${id}`)
       .then(response => response.json())
       .then(data => setSingleProduct(data))
    },[])

  return (
    <div>
        <h1>SinglePage-Product</h1>
        <div className='single-item'>
            <img src={singleProduct.image} width='200px' height='200px' alt={singleProduct.name} />
            <h2>Name: {singleProduct.name}</h2>
            <h3>Price: {singleProduct.price}</h3>
            <h4>Quantity: {singleProduct.quantity}</h4>
            <h5>Description: {singleProduct.des}</h5>
            <p>Category: {singleProduct.category}</p>
            <button>ADD_TO_CART</button>
        </div>
    </div>
  )
}
