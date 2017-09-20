import React from 'react';
import PropTypes from 'prop-types';

import { partial } from '../../lib/utils';

export const TodoItem = ({ isComplete, name, id, handleToggle, handleRemove }) => {
  const handleToggleChange = () => handleToggle(id);
  const handleRemoveClick = e => handleRemove(id, e);
  // const handleToggleChange = handleToggle.bind(null, id); // replace this with the partial utils function
  return (
    <li>
      <span className="delete-item">
        <a href="#" onClick={handleRemoveClick}>X</a>
      </span>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={handleToggleChange}
      />{name}
      {/* onChange={partial(handleToggle, id)} */}
    </li>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string,
  isComplete: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};
