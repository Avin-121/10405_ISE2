import React, { useState } from 'react';

const GoalTracker = ({ totalReduction }) => {
  const [goal, setGoal] = useState(0); 

  const handleGoalChange = (event) => {
    setGoal(Number(event.target.value));
  };

  const goalPercentage = goal > 0 ? (totalReduction / goal) * 100 : 0;

  return (
    <div className="goal-tracker-container">
      <h2>Set Your CO₂ Reduction Goal</h2>
      <input
        type="number"
        value={goal}
        onChange={handleGoalChange}
        placeholder="Enter your CO₂ reduction goal in kg"
        className="goal-input"
      />
      {goal > 0 && (
        <div className="goal-progress">
          <p>
            <strong>Progress:</strong> {goalPercentage.toFixed(2)}% of your goal achieved.
          </p>
          <div className="goal-bar">
            <div
              className="goal-progress-bar"
              style={{ width: `${goalPercentage}%`, backgroundColor: goalPercentage >= 100 ? 'green' : 'orange' }}
            />
          </div>
        </div>
      )}
      {goal <= 0 && <p>Please set a goal to track your progress.</p>}
    </div>
  );
};

export default GoalTracker;
