import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import { ADD_TODO, GET_TODO } from '../Redux/ActionType';

export default function Form() {

    const [name , setName] = useState("");
    const [price , setPrice] = useState("");
    const [quantity , setQuantity] = useState("");
    const [des , setDes] = useState("");
    const [category , setCategory] = useState("");
    const [image , setImage] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = ()=>{
      fetch("http://localhost:9000/productsData")
       .then((res)=>res.json())
       .then((data)=>{
          dispatch({type : GET_TODO, payload : data})
          console.log(data)
      })
      .catch((err)=>console.log("Something is Wrong",err));
    }

    const handleForm = (e)=>{
      e.preventDefault();

      if (!name || !price || !quantity || !category) {
        alert("Please fill all the fields");
        return;
      }

      const productData = {
        image ,name , price , quantity,des,category
      }

      fetch("http://localhost:9000/productsData",{
        method : "POST",
        body : JSON.stringify(productData),
        headers: { "Content-Type": "application/json" },
      })
        .then((res)=>res.json())
        .then((data)=>{
          dispatch({type : ADD_TODO , payload : productData})
          console.log(productData)
          console.log(data)
        })
        .catch((err)=>console.log("Something is Wrong",err))
        setImage("")
        setName("")
        setPrice("")
        setQuantity("")
        setDes("")
        setCategory("")
    }

  return (
    <div>
      <h1>Form With Redux</h1>
        <div className='form'>
          <div className='form_item'>
            <form onSubmit={handleForm}>
              <label>Image :- </label>
              <input type='text' value={image} onChange={(e)=>setImage(e.target.value)} placeholder='Enter Image'/><br/><br/>
              <label>Name :- </label>
              <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Product Name'/><br/><br/>
              <label>Price :- </label>
              <input type='text' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Product Price'/><br/><br/>
              <label>Quantity :- </label>
              <input type='text' value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder='Enter Product Quantity'/><br/><br/>
              <label>Description</label>
              <input type='text' value={des} onChange={(e)=>setDes(e.target.value)} placeholder='Enter Description'/><br/><br/>
              <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                  <option>--select-category--</option>
                  <option>men</option>
                  <option>woman</option>
                  <option>kid</option>
                  <option>other</option>
              </select><br/><br/>
              <button>Add</button>
            </form>
          </div>
        </div>
    </div>
  )
}