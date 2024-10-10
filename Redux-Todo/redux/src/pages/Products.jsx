import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_TODO, GET_TODO } from '../Redux/ActionType';
import { Link } from 'react-router-dom';

export default function Products() {

  const productsData = useSelector((store)=>store.product);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    fetch("http://localhost:9000/productsData",{
      method : "GET"
    })
    .then((res)=>res.json())
    .then((data)=>{
       dispatch({type : GET_TODO, payload : data})
       console.log(data)
     })
   .catch((err)=>console.log("Something is Wrong",err));
  },[dispatch])

  const handleDelete = (id)=>{
    fetch("http://localhost:9000/productsData/"+id,{
      method : "DELETE"
    })
     .then((res)=>res.json())
     .then((data)=>{
        dispatch({type : DELETE_TODO, payload : id})
        console.log(data)
    })
   .catch((err)=>console.log("Something is Wrong",err));
  }

  return (
    <div>
      <div className='product-list'>
        {productsData.map((item) => (
          <div className='product-item' key={item.id}>
            <Link to={`/Singlepage/${item.id}`}>
              <img src={item.image} width='200px' height='200px' alt={item.name} />
              <h2>Name: {item.name}</h2>
              <h3>Price: {item.price}</h3>
              <h4>Quantity: {item.quantity}</h4>
              <h5>Description: {item.des}</h5>
              <p>Category: {item.category}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button>ADD_TO_CART</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
