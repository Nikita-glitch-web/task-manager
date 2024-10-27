// store/useTaskStore.ts
import { create } from 'zustand';
import { ITask } from '../types/task';
import { Task } from '../models/Task';

const DEFAULT_TASKS = [new Task('Hello world'), new Task('Hello world2')];

interface TaskStore {
  tasks: ITask[];
  addTask: (taskText: string) => void;
  removeTask: (taskId: string) => void;
  updateTask: (updatedTask: ITask) => void;
  clearTasks: () => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [...DEFAULT_TASKS],
  
  addTask: (taskText: string) => {
    const task = new Task(taskText);
    set((state: TaskStore) => ({
      tasks: [...state.tasks, task],
    }));
  },

  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),

  updateTask: (updatedTask) =>
    set((state) => {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index === -1) return state;

      const updatedTasks = [...state.tasks];
      updatedTasks.splice(index, 1, updatedTask);

      return { tasks: updatedTasks };
    }),

  clearTasks: () => set({ tasks: [] }),
}));
