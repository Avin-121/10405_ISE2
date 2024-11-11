import React from 'react';
import Action from './Action';

const ImpactSummary = ({ trackedActions, totalReduction, onClear, onDeleteAction }) => {
  const treesSaved = Math.floor(totalReduction / 10);

 const impactMessage = totalReduction >= 100
    ? "ENvironment is Happy!"
    : totalReduction >= 50
    ? "Good Work!"
    : "Nice One Mate";

  const impactStyle = {
    color: totalReduction >= 100 ? 'green' : totalReduction >= 50 ? 'orange' : 'blue'
  };

  return (
    <div>
      <h2>Impact Summary</h2>
      <p>Total CO₂ Reduction: {totalReduction.toFixed(2)} kg</p>
      {totalReduction > 0 && <p style={impactStyle}>{impactMessage} You've saved {treesSaved} trees!</p>}
      <ul>
        {trackedActions.length === 0 ? (
          <p>Add Some Actions!</p>
        ) : (
          trackedActions.map((action) => (
            <Action key={action.id} action={action} onDelete={onDeleteAction} />
          ))
        )}
      </ul>
      {trackedActions.length > 0 && <button onClick={onClear}>Clear All</button>}
    </div>
  );
};

export default ImpactSummary;
