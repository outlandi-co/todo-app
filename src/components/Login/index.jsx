// src/components/Login/index.jsx
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth';

const Login = () => {
  const { login, logout, user } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login - replace this with actual login logic
    const token = 'mock-jwt-token'; // Replace with your actual token from backend
    login(token); // Call login function with token
  };

  return (
    <div>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="username" placeholder="Username" onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
