import React, { useState } from 'react';
import { useTaskStore } from '../../store';
import { Task } from '../../models/Task';

export const TaskForm: React.FC = () => {
  const [newTask, setNewTask] = useState<string>('');
  const { addTask } = useTaskStore();

  const addTaskHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className='task-form-container'>
      <h1>Task Manager</h1>
      <form onSubmit={addTaskHandler} className='task-input'>
        <input
          type='text'
          placeholder='What needs to be done?'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type='submit'>Add Task</button>
      </form>
    </div>
  );
};
