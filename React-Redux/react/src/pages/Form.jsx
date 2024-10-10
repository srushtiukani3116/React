import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase';
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

export default function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image , setImage] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  // Fetch data from Firestore
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setProducts(productList);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();

    if (editId) {
      const productRef = doc(db, "products", editId);
      await updateDoc(productRef, { name, price, image,category });
      setEditId(null);
    } 
    else {
      await addDoc(collection(db, "products"), { name, price, image ,category });
    }
    setName("");
    setPrice("");
    setImage("");
    setCategory("");
    fetchProducts();
  };

  // Edit data 
  const handleEdit = (item) => {
    setName(item.name);
    setPrice(item.price);
    setImage(item.image);
    setCategory(item.category);
    setEditId(item.id);
  };

  // Delete Data 
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  return (
    <div>
      <div className='form-container'>
      <h1>Product Form</h1>
        <form onSubmit={handleForm}>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Product Name' required/><br /><br />
          <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter Product Price' required/><br /><br />
          <input type='text' value={image} onChange={(e)=>setImage(e.target.value)} placeholder='Enter Image URL'/><br /><br />
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="">--select-category--</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select><br /><br />
            <button type='submit'>{editId ? 'Update' : 'Add'}</button>
        </form>
      </div>

      <div className='product_item'>
        <h2 style={{fontWeight:'bolder'}}>Product List</h2>
          {
            products.map((item)=>{
              return <div  style={{border: '1px solid #948e8e', padding:'20px' , margin:'10px'}} key={item.id}>
                <h1 style={{fontSize:'20px'}}>Product name :- {item.name}</h1>
                <h4 style={{fontSize:'18px'}}>Product Price :- {item.price}</h4>
                <p>Category :- {item.category}</p>
                <button style={{margin : "5px 10px"}} onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            })
          }
      </div>
    </div>
  );
} 