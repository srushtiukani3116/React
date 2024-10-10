import React, { useEffect, useState } from 'react'

export default function Form() {

    const [name , setName] = useState("");
    const [price , setPrice] = useState("");
    const [Product , setProduct] = useState([]);
    const [editid , setEditid] = useState(null);

    const fetchFun = ()=>{
        fetch("http://localhost:8000/product")
        .then((res)=>res.json())
            .then((data)=>{
                setProduct(data);
                console.log("Data Add Successfully",data)
            })
            .catch((err) => console.log("Something is Wrong",err));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(editid){
            fetch("http://localhost:8000/product/"+editid,{
                method : "PATCH",
                body : JSON.stringify({name , price}),
                headers : {"content-type" : "application/json; charset=UTF-8"},
            })
                .then((res)=>res.json())
                .then((data)=>{
                    fetchFun();
                    console.log("Data Add Successfully",data)
                    setEditid(null);
                })
                .catch((err) => console.log("Something is Wrong",err));
        }
        else{
            fetch("http://localhost:8000/product",{
                method : "POST",
                body : JSON.stringify({name , price}),
                headers : {"content-type" : "application/json; charset=UTF-8"},
            })
                .then((res)=>res.json())
                .then((data)=>{
                    fetchFun();
                    console.log("Data Add Successfully",data)
                })
                .catch((err) => console.log("Something is Wrong",err));
        }

        setName("")
        setPrice("")
    }

    const handleDelete = (id)=>{
        fetch(`http://localhost:8000/product/${id}`,{
          method : "DELETE"
        })
        .then((res)=>res.json())
        .then((data) =>{ 
          fetchFun();
          console.log("Data Add Successfully",data)
        })
        .catch((err)=>console.log("Something is Wrong",err))
    }

    const handleEdit = (item)=>{
        setName(item.name);
        setPrice(item.price);
        setEditid(item.id);
    }

    useEffect(()=>{
        fetchFun();
    },[])

  return (
    <>
      <div className='pform'>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <label>Product-name:-</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Product-Name'/><br/><br/>
            <label>Price:-</label>
            <input type='text' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Your Price'/><br/><br/>
            <button>{editid ? "Update" : "Add"}</button>
        </form>

        <div>
            {
                Product.map((item)=>{
                    return <div key={item.id} style={{border:'1px solid black'}}>
                        <p>Id :- {item.id}</p>
                        <h1>Name :- {item.name}</h1>
                        <h2>Price:- {item.price}</h2>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                        <button onClick={()=>handleEdit(item)}>Edit</button>
                    </div>
                })
            }
        </div>
      </div>
    </>
  )
}