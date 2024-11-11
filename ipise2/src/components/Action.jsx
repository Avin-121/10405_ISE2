import React from 'react';

const Action = ({ action, onDelete }) => (
  <li>
    {action.name} - Total CO2 reduction: {action.reduction * action.count} kg
    <button onClick={() => onDelete(action)}>Delete</button>
  </li>
);

export default Action;
