import React from 'react';

const carbons = [
{ id: 1, name: "Use a reusable water bottle", co2Reduction: 0.5 },
{ id: 2, name: "Take public transport", co2Reduction: 2.6 },
{ id: 3, name: "Eat a plant-based meal", co2Reduction: 0.8 },
{ id: 4, name: "Use energy-efficient light bulbs", co2Reduction: 0.1 },
{ id: 5, name: "Recycle paper", co2Reduction: 0.2 },
]
function ActionList({ onAddAction }) {
  const eventAdd = (carbon) => {
    onAddAction({
        id: carbon.id,
        name: carbon.name,
        reduction: carbon.co2Reduction
    }); };

  return (
    <>   
    <h1>ECO Action TrACKER</h1>
    <h2>Eco Friendly Actions</h2>
    <ul>
      {carbons.map((carbon) => (
        <li key={carbon.id}>
            {carbon.name}
            {carbon.co2Reduction}
          <button onClick={() => eventAdd(carbon)}>Add</button>
        </li>
      ))}
    </ul>
    </>
  );
}

export default ActionList;
