import React from 'react';

function AddTask({ taskInput, setTaskInput, handleAddTask }) {
  return (
    <div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Добавьте задачу"
      />
      <button onClick={handleAddTask}>Добавить задачу</button>
    </div>
  );
}

export default AddTask;
