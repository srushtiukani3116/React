import React, { useState } from 'react';
import { auth } from '../../Firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import '../App';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      alert('signup successfully..😀👍');
    } catch (err) {
      console.log("Something is Wrong Please try again 😒🤦‍♀️",err);
    }
    setEmail("")
    setPass("")
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form className="signup-form" onSubmit={handleForm}>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className="input-field" required /><br/><br/>
        <input type='password' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Enter Password' className="input-field" required /><br/><br/>
        <button type="submit" className="signup-button">SIGNUP</button>
      </form>
    </div>
  );
}
