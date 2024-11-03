import { ITask } from "../../types/task";
import { TaskItem } from "../TaskItem/TaskItem";
import { useTaskStore, useFilteredTasks } from "../../store/useTaskStore";
import Filter from "../Filter/Filter";

export const TaskList = () => {
  const { updateTask, removeTask } = useTaskStore();
  const filteredTasks = useFilteredTasks();

  const handleUpdate = (task: ITask) => {
    updateTask(task);
  };

  const handleDelete = (taskId: string) => {
    removeTask(taskId);
  };

  return (
    <>
      {filteredTasks.map((task: ITask) => (
        <div key={task.id}>
          <TaskItem
            task={task}
            onChange={handleUpdate}
            onDelete={handleDelete} // Передаем onDelete в TaskItem
          />
        </div>
      ))}
      <div>
        <Filter />
      </div>
    </>
  );
};
