import React, { useState } from 'react'

export default function Signup() {

  const [name , setName] = useState("");
  const [email,setEmail] = useState("");
  const [pass , setPass] = useState("");

  const handleSubmit = (e)=>{
    e.PreventDefault();

    localStorage.setItem("name",name);
    localStorage.setItem("email".email);
    localStorage.setItem("pass",pass);

    if(!name || !email || !pass){
      alert("All Filed Are Required");
    }
  }

  return (
    <div className='pform'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:-</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name'/><br/><br/>
        <label>Email:-</label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'/><br/><br/>
        <label>Password:-</label>
        <input type='password' value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='Enter Your Password'/><br/><br/>
        <button>Signup</button>
      </form>
    </div>
  )
}
