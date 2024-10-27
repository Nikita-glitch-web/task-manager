// store/useTaskStore.ts
import { create } from "zustand";
import { ITask } from "../types/task";

interface TaskStore {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (taskId: string) => void;
  updateTask: (updatedTask: ITask) => void;
  clearTasks: () => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

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
