import axios from 'axios';
import { useState } from 'react';
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
      const response = await axios.post('https://auth-server-2eag.onrender.com/auth/signin', credentials, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('User authenticated!', response.data);
      localStorage.setItem('token', response.data.token); // Store token in localStorage
    } catch (error) {
      console.error('Sign-in failed:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        setError(error.response.data.message || 'Invalid credentials. Please try again.');
      } else if (error.request) {
        console.error('No response received:', error.request);
        setError('No response from server. Please try again later.');
      } else {
        console.error('Error:', error.message);
        setError('An error occurred. Please try again.');
      }
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
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
        required
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Form;
