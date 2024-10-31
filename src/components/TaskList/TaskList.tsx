import { ITask } from "../../types/task";
import { TaskItem } from "../TaskItem/TaskItem";
import { useTaskStore, useFilteredTasks } from "../../store/useTaskStore";

export const TaskList = () => {
  const updateTask = useTaskStore((state) => state.updateTask);
  const filteredTasks = useFilteredTasks();

  const handleUpdate = (task: ITask) => {
    updateTask(task);
  };

  return (
    <>
      {filteredTasks.map((task: ITask) => (
        <TaskItem task={task} key={task.id} onChange={handleUpdate} />
      ))}
    </>
  );
};
