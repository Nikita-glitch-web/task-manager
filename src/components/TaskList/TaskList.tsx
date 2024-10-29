import { ITask } from "../../types/task";
import { TaskItem } from "../TaskItem/TaskItem";
import { useTaskStore } from "../../store/useTaskStore";

export const TaskList = () => {
  const { filteredTasks, updateTask } = useTaskStore();

  const handleUpdate = (task: ITask) => {
    updateTask(task);
  };

  return (
    <>
      {filteredTasks().map((task: ITask) => (
        <TaskItem task={task} key={task.id} onChange={handleUpdate} />
      ))}
    </>
  );
};
