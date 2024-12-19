import { useState } from 'react';

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return {
    tasks,
    addTask,
    removeTask,
  };
};

export default useTaskManager;
