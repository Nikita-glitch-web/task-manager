// need to add component
import { useState } from 'react';
import { ITask } from '../../types/task';
import { TaskItem } from '../TaskItem/TaskItem';

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: '1234', text: 'task 1', completed: true },
    { id: '1235', text: 'task 2', completed: false },
  ]);

  //  { id: '1234', text: 'task 1 asdasdasd', completed: true },
  const handleUpdate = (task: ITask) => {
    const index = tasks.findIndex((item) => {
      return item.id === task.id;
    });
    console.log(index, task);
    tasks.splice(index, 1, task);
    console.log(tasks);
    setTasks([...tasks]);
  };

  return (
    <>
      {tasks.map((task: ITask) => (
        <TaskItem task={task} key={task.id} onChange={handleUpdate} />
      ))}
    </>
  );
};
