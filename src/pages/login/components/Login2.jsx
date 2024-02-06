import React, { useState } from 'react';

const Login2 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = () => {
    // Foydalanuvchi ma'lumotlari
    const userData = {
      username,
      password,
    };

    // Saqlangan foydalanuvchi ma'lumotlarni lokal saqlashdan olish
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    // Foydalanuvchi haqida ma'lumotlarni tekshirish
    if (storedUserData && storedUserData.username === userData.username && storedUserData.password === userData.password) {
      console.log('User logged in:', storedUserData);
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogIn}>Log In</button>
    </div>
  );
};

export default Login2;