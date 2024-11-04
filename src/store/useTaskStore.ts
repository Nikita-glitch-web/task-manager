import { create } from "zustand";
import { ITask } from "../types/task";
import { Task } from "../models/Task";

const DEFAULT_TASKS = [new Task("Hello world"), new Task("Hello world2")];

const loadTasksFromLocalStorage = (): ITask[] => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : DEFAULT_TASKS;
};

const saveTasksToLocalStorage = (tasks: ITask[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

interface TaskStore {
  tasks: ITask[];
  filter: "all" | "active" | "completed";
  addTask: (taskText: string) => void;
  removeTask: (taskId: string) => void;
  updateTask: (updatedTask: ITask) => void;
  clearTasks: () => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
}

const filterTasks = (tasks: ITask[], filter: string): ITask[] => {
  if (filter === "completed") return tasks.filter((task) => task.completed);
  if (filter === "active") return tasks.filter((task) => !task.completed);
  return tasks;
};

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: loadTasksFromLocalStorage(),
  filter: "all",

  addTask: (taskText: string) => {
    const task = new Task(taskText);
    set((state) => {
      const updatedTasks = [...state.tasks, task];
      saveTasksToLocalStorage(updatedTasks);
      return { tasks: updatedTasks };
    });
  },

  removeTask: (taskId: string) =>
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== taskId);
      saveTasksToLocalStorage(updatedTasks);
      return { tasks: updatedTasks };
    }),

  updateTask: (updatedTask) =>
    set((state) => {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index === -1) return state;

      const updatedTasks = [...state.tasks];
      updatedTasks.splice(index, 1, updatedTask);
      saveTasksToLocalStorage(updatedTasks);

      return { tasks: updatedTasks };
    }),

  clearTasks: () => {
    saveTasksToLocalStorage([]);
    set({ tasks: [] });
  },

  setFilter: (filter) => set({ filter }),
}));

export const useFilteredTasks = () => {
  const { tasks, filter } = useTaskStore();
  return filterTasks(tasks, filter);
};
