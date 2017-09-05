import React from 'react';
import PropTypes from 'prop-types';

import { TodoItem } from './';

export const TodoList = ({ todos }) => (
  <div className="Todo-List">
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};
