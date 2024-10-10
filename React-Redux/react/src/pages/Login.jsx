import React from 'react';
import '../App'; // Make sure to import the CSS file

export default function Login() {
  return (
    <div className="signup-container">
      <h1>Login</h1>
      <form className="signup-form">
        <input type='text' placeholder='Enter UserName' className="input-field" /><br/><br/>
        <input type='email' placeholder='Enter Email' className="input-field" /><br/><br/>
        <input type='password' placeholder='Enter Password' className="input-field" /><br/><br/>
        <button type="submit" className="signup-button">LOGIN</button>
      </form>
    </div>
  );
}
