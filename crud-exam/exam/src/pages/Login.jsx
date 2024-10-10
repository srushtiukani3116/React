import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider';
import PrivateRoutes from '../Routes/PrivateRoutes';

export default function Login() {

  const [name , setName] = useState("");
  const [email,setEmail] = useState("");
  const [pass , setPass] = useState("");
  const [token , setToken] = useState("");
  const navigate = useNavigate();
  const { Login } = useContext(AuthContext);


  const handleSubmit = (e)=>{
    e.preventDefault();

    var singname = localStorage.getItem(name);
    var singemail = localStorage.getItem(email);
    var singpass = localStorage.getItem(pass);

    if(!name || !email || !pass){
      alert("All Filed Are Required");
    }

    if(singname === name && singemail === email && singpass === pass){
      alert("Login successfully");
      setToken("Valid Token....😀");
      Login(token);
      navigate("/Form")
      return
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
        <button>Login</button>
      </form>

      <div>
        <PrivateRoutes token={token}/>
      </div>
    </div>
  )
}
