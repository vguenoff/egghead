import React from 'react';
import PropTypes from 'prop-types';

export const TodoForm = ({ currentTodo, handleInputChange }) => (
  <input
    type="text"
    value={currentTodo}
    onChange={handleInputChange}
  />
);

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};
