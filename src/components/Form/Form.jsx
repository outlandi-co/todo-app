import  { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit }) => {
  const [newTodo, setNewTodo] = useState({ text: '', assignee: '', difficulty: 1 });

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit(newTodo);
    setNewTodo({ text: '', assignee: '', difficulty: 1 });
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
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
