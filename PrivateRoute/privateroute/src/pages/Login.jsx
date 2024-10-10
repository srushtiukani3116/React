import React, { useState } from 'react'

export default function Login() {

    const [email , setemail] = useState("");
    const [password , setpassword] = useState("");

    const handleLogin = ()=>{
        if(email == email && password == password){
            alert("Login successfully");
        }
        
        axios.POST("https://reqres.in/api/login",{email,password})
          .then((res)=>{
              console.log(res.data.token);
          })
    }


  return (
    <div>
      <h1>Login-Page</h1>
        <label> Email :- </label>
        <input type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>setemail(e.target.value)}/><br/><br/>
        <label>Password :- </label>
        <input type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>setpassword(e.target.value)}/><br/><br/>
      <button type='submit' onClick={handleLogin}>Login</button>
    </div>
  )
}
