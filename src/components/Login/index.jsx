// src/Components/Login/index.jsx
import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/Auth';
import './form.scss';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { handleLogin } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-server-nlr5.onrender.com/auth/login', credentials, {
        headers: { 'Content-Type': 'application/json' },
      });
      handleLogin(response.data.token);
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
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
      </div>
    </div>
  );
};

export default Login;
