// src/components/Form/Form.jsx

import { useState } from 'react';
import axios from 'axios';
import '../Form/form.scss';

const Form = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://auth-server-2eag.onrender.com/auth/signin', credentials);
      console.log('User authenticated!', response.data);
      // Handle successful login (e.g., store token in localStorage, update state, etc.)
      // For example, assuming your API returns a token:
      localStorage.setItem('token', response.data.token); // Store token in localStorage
      // Optionally, you can redirect the user or update state to reflect authentication success
    } catch (error) {
      console.error('Sign-in failed:', error);
      setError('Invalid credentials. Please try again.'); // Display error message to user
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      {error && <p className="error">{error}</p>} {/* Display error message if authentication fails */}
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Form;
