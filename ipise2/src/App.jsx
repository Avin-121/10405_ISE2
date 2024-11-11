import React, { useState, useEffect } from 'react';
import './App.css';
import ActionList from './components/ActionList';
import ImpactSummary from './components/ImpactSummary';

function App() {
  const [trackedActions, setTrackedActions] = useState(() => {
    const savedActions = localStorage.getItem('trackedActions');
    return savedActions ? JSON.parse(savedActions) : [];
  });

  useEffect(() => {
    localStorage.setItem('trackedActions', JSON.stringify(trackedActions));
  }, [trackedActions]);

  const handleAddAction = (action) => {
    setTrackedActions((prevActions) => {
      const existingAction = prevActions.find((a) => a.id === action.id);
      if (existingAction) {
        return prevActions.map((a) =>
          a.id === action.id ? { ...a, count: a.count + 1 } : a
        );
      } else {
        return [...prevActions, { ...action, count: 1 }];
      }
    });
  };

  const handleDeleteAction = (actionId) => {
    setTrackedActions((prevActions) =>
      prevActions.filter((action) => action.id !== actionId)
    );
  };

  const handleClearActions = () => {
    setTrackedActions([]);
  };

  const totalReduction = trackedActions.reduce(
    (total, action) => total + action.reduction * action.count,
    0
  );

  return (
    <div>
      <h1>Eco-Friendly Actions</h1>
      <ActionList onAddAction={handleAddAction} />
      <ImpactSummary
        trackedActions={trackedActions}
        totalReduction={totalReduction}
        onClear={handleClearActions}
        onDeleteAction={handleDeleteAction}
      />
    </div>
  );
}

export default App;
