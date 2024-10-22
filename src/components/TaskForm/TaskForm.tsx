import React, { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars


export const TaskForm: React.FC = () => {
  const [newTask, setNewTask] = useState<string>("");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      console.log({ id: Date.now(), text: newTask, completed: false });
      setNewTask("");
    }
  };

  return (
    <div className="task-form-container">
      <h1>Task Manager</h1>
      <form onSubmit={addTask} className="task-input">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};


