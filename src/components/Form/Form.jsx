import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Form = ({ handleSubmit }) => {
  const [newTodo, setNewTodo] = useState({ text: '', assignee: '', difficulty: 1 });
  const [error, setError] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have an authentication token stored in localStorage
      const token = localStorage.getItem('token');
      const response = await axios.post('https://backend-server-nlr5.onrender.com/todos', newTodo, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Todo added!', response.data);
      handleSubmit(newTodo); // Pass newTodo to parent component
      setNewTodo({ text: '', assignee: '', difficulty: 1 }); // Reset form fields after submission
    } catch (error) {
      console.error('Failed to add todo:', error);
      setError('Failed to add todo. Please try again.'); // Display error message to user
    }
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="text">Text:</label>
      <input
        type="text"
        id="text"
        value={newTodo.text}
        onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
        required
      />
      <label htmlFor="assignee">Assignee:</label>
      <input
        type="text"
        id="assignee"
        value={newTodo.assignee}
        onChange={(e) => setNewTodo({ ...newTodo, assignee: e.target.value })}
        required
      />
      <label htmlFor="difficulty">Difficulty:</label>
      <input
        type="number"
        id="difficulty"
        value={newTodo.difficulty}
        onChange={(e) => setNewTodo({ ...newTodo, difficulty: parseInt(e.target.value) })}
        required
      />
      <button type="submit">Add Todo</button>
      {error && <p>{error}</p>}
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
