import { useEffect } from "react";
import { ITask } from "../../types/task";
import { TaskItem } from "../TaskItem/TaskItem";
import { useTaskStore } from "../../store/useTaskStore";

export const TaskList = () => {
  const { tasks, addTask, updateTask } = useTaskStore();

  useEffect(() => {
    addTask({ id: "1234", text: "task 1", completed: true });
    addTask({ id: "1235", text: "task 2", completed: false });
  }, [addTask]);

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
