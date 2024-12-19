import React, { useState } from 'react';
import { useTasks } from './TaskContext';

function AddTask() {
  const { addTask } = useTasks();
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput) {
      addTask(taskInput);
      setTaskInput('');
    }
  };

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
