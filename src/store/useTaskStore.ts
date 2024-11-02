import { create } from "zustand";
import { ITask } from "../types/task";
import { Task } from "../models/Task";

const DEFAULT_TASKS = [new Task("Hello world"), new Task("Hello world2")];

interface TaskStore {
  tasks: ITask[];
  filter: "all" | "active" | "completed";
  addTask: (taskText: string) => void;
  removeTask: (taskId: string) => void;
  updateTask: (updatedTask: ITask) => void;
  clearTasks: () => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
}

// Функция для фильтрации задач
const filterTasks = (tasks: ITask[], filter: string): ITask[] => {
  if (filter === "completed") return tasks.filter((task) => task.completed);
  if (filter === "active") return tasks.filter((task) => !task.completed);
  return tasks;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [...DEFAULT_TASKS],
  filter: "all",

  addTask: (taskText: string) => {
    const task = new Task(taskText);
    set((state) => ({
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

  setFilter: (filter) => set({ filter }),
}));

// Создаем селектор для получения отфильтрованных задач
export const useFilteredTasks = () =>
  useTaskStore((state) => filterTasks(state.tasks, state.filter));
