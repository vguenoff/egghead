import React from 'react';
import PropTypes from 'prop-types';

import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, handleToggle, handleRemove }) => (
  <div className="Todo-List">
    <ul>
      {todos.map(todo => (
        <TodoItem
          {...todo}
          key={todo.id}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
        />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};
