import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const Signup2 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const navigate = useNavigate()

  const handleSignUp = () => {
    const userData = {
      fullName,
      username,
      password,
    }

    
    localStorage.setItem('userData', JSON.stringify(userData));
    
    console.log('User signed up:', userData);
    
    navigate("/")
    alert("eeee")
  };
  const userDataChek = JSON.parse(localStorage.getItem("userData"))
  return (
    <section>
<h2>Sign Up</h2>
<form >

<input
  type="text"
  placeholder="Username"
  value={username}
  required
  onChange={(e) => setUsername(e.target.value)}
/>
<input
  type="text"
  placeholder="Username"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  required
/>
<input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>
<button  onClick={(e)=>handleSignUp(e)} type='submit' > {userDataChek? <Navigate to="/"/> : "Sign In"}  </button> 

</form>
   
    </section>
  );
};

export default Signup2;






