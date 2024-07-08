import axios from 'axios';

// Ensure you have defined REACT_APP_API_URL in your .env file
const baseURL = import.meta.env.VITE_REACT_APP_API_URL; // Using Vite environment variable syntax

const api = axios.create({
  baseURL,
});

const signIn = async (credentials) => {
  try {
    const response = await api.post('/auth/signin', credentials);
    return response.data;
  } catch (error) {
    console.error('Sign-in failed:', error);
    throw error;
  }
};

const getTodos = async (authToken) => {
  try {
    const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};
    const response = await api.get('/api/v1/todo', { headers });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch todos:', error);
    throw error;
  }
};

export { signIn, getTodos };
