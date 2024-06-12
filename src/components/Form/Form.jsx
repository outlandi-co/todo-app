// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <h2>Add To Do Item</h2>
      <label>
        <span>To Do Item</span>
        <input onChange={props.handleChange} name="text" type="text" placeholder="Item Details" />
      </label>
      <label>
        <span>Assigned To</span>
        <input onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name" />
      </label>
      <label>
        <span>Difficulty</span>
        <input onChange={props.handleChange} defaultValue={props.difficulty} type="range" min={1} max={5} name="difficulty" />
      </label>
      <label>
        <button type="submit">Add Item</button>
      </label>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  difficulty: PropTypes.number.isRequired,
};

export default Form;
