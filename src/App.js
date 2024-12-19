import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  return (
    <div>
      <AddTask taskInput={taskInput} setTaskInput={setTaskInput} handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
