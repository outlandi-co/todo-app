import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import axios from 'axios';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [difficulty] = useState(1); // Remove setDifficulty since it's unused

  useEffect(() => {
    fetchTodos(); // Fetch todos when component mounts
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://backend-server-nlr5.onrender.com/api/v1/todo'); // Use the correct base URL
      setTodos(response.data); // Update todos state with fetched data
    } catch (error) {
      console.error('Error fetching todos:', error); // Log error if fetch fails
    }
  };

  const handleSubmit = async (newTodo) => {
    try {
      const response = await axios.post('https://backend-server-nlr5.onrender.com/api/v1/todo', newTodo); // Use the correct base URL
      setTodos([...todos, response.data]); // Update todos state with new todo item
    } catch (error) {
      console.error('Error adding todo:', error); // Log error if adding todo fails
    }
  };

  const handleComplete = async (id) => {
    try {
      await axios.put(`https://backend-server-nlr5.onrender.com/api/v1/todo/${id}`, { completed: true }); // Use the correct base URL
      const updatedTodos = todos.filter(todo => todo.id !== id); // Filter out completed todo
      setTodos(updatedTodos); // Update todos state with filtered list
    } catch (error) {
      console.error('Error completing todo:', error); // Log error if completing todo fails
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Form handleSubmit={handleSubmit} difficulty={difficulty} /> {/* Remove handleChange if not needed */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text} - {todo.assignee} - Difficulty: {todo.difficulty}
            {!todo.completed && <button onClick={() => handleComplete(todo.id)}>Complete</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
