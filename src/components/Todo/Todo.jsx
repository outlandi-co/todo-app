import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import axios from 'axios';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [difficulty] = useState(1); // You can remove setDifficulty since it's unused

  useEffect(() => {
    fetchTodos();
  }, []); // Fetch todos on component mount

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://backend-server-nlr5.onrender.com/api/v1/todo'); // Adjust base URL as needed
      setTodos(response.data); // Update todos state with fetched data
    } catch (error) {
      console.error('Error fetching todos:', error); // Log error if fetch fails
    }
  };

  const handleSubmit = async (newTodo) => {
    try {
      const response = await axios.post('https://backend-server-nlr5.onrender.com/api/v1/todo', newTodo); // Adjust base URL as needed
      setTodos([...todos, response.data]); // Update todos state with new todo item
    } catch (error) {
      console.error('Error adding todo:', error); // Log error if adding todo fails
    }
  };

  const handleComplete = async (id) => {
    try {
      await axios.put(`https://backend-server-nlr5.onrender.com/api/v1/todo/${id}`, { completed: true }); // Adjust base URL as needed
      const updatedTodos = todos.map(todo =>
        todo._id === id ? { ...todo, completed: true } : todo
      ); // Update completed status locally
      setTodos(updatedTodos); // Update todos state with filtered list
    } catch (error) {
      console.error('Error completing todo:', error); // Log error if completing todo fails
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Form handleSubmit={handleSubmit} difficulty={difficulty} />
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.text} - {todo.assignee} - Difficulty: {todo.difficulty}
            {!todo.completed && <button onClick={() => handleComplete(todo._id)}>Complete</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
