import { useEffect } from "react";
import { ITask } from "../../types/task";
import { TaskItem } from "../TaskItem/TaskItem";
import { useTaskStore } from "../../store/useTaskStore";

export const TaskList = () => {
  const { tasks, updateTask } = useTaskStore();

  const handleUpdate = (task: ITask) => {
    updateTask(task);
  };

  return (
    <>
      {tasks.map((task: ITask) => (
        <TaskItem task={task} key={task.id} onChange={handleUpdate} />
      ))}
    </>
  );
};
