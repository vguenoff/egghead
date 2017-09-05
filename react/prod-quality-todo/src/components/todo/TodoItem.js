import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ isComplete, name }) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} />{name}
  </li>
);

TodoItem.propTypes = {
  name: PropTypes.string,
  isComplete: PropTypes.bool.isRequired,
  // id: PropTypes.number.isRequired
};
