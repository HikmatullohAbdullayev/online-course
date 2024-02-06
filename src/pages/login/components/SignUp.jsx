import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSignUp = () => {
    const userData = {
      fullName,
      username,
      password,
    };
     toast("hammasi joyda")

    localStorage.setItem('userData', JSON.stringify(userData));
      
    console.log('User signed up:', userData);
  };

  return (
    <section>
<h2>Sign Up</h2>
<input
  type="text"
  placeholder="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
<input
  type="text"
  placeholder="Username"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
/>
<input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
<button onClick={handleSignUp} ><Link  to="/">Sign Up</Link></button> 


   
    </section>
  );
};

export default SignUp;






