import React, { useState } from "react";
import { useTaskStore } from "../../store";
import { Input } from "../Input";
import { CustomButton } from "../Button/Button";
import style from "./TaskFom.module.scss";

export const TaskForm: React.FC = () => {
  const [newTask, setNewTask] = useState<string>("");
  const { addTask } = useTaskStore();

  const addTaskHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className={style.task_form_container}>
      <h1>Task Manager</h1>
      <form className="task-input" onSubmit={addTaskHandler}>
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="What needs to be done?"
          type="text"
          name="task"
          id={""}
          errorMessage={undefined}
        />
        <CustomButton type="submit">Add Task</CustomButton>
      </form>
    </div>
  );
};
