/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { ITask } from "../types/task";
import { Task } from "../models/Task";

import {
  addTask as addTaskService,
  fetchTasks as fetchTasksService,
  deleteTask as deleteTaskService,
  updateTask as updateTaskService,
} from "../services/taskServices";

// Оновлений інтерфейс store
interface TaskStore {
  tasks: ITask[];
  filter: "all" | "active" | "completed";
  addTask: (taskText: string) => Promise<void>;
  removeTask: (taskId: string) => Promise<void>;
  updateTask: (updatedTask: ITask) => Promise<void>;
  loadTasks: () => Promise<void>;
  clearTasks: () => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
}

// Функція для фільтрації задач
const filterTasks = (
  tasks: ITask[],
  filter: "all" | "active" | "completed"
): ITask[] => {
  if (filter === "completed") return tasks.filter((task) => task.completed);
  if (filter === "active") return tasks.filter((task) => !task.completed);
  return tasks;
};

// Zustand Store
export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  filter: "all",

  // Завантаження задач з Firestore
  loadTasks: async () => {
    try {
      const tasksFromFirestore = await fetchTasksService();
      const mappedTasks = tasksFromFirestore.map((task: ITask) =>
        Task.fromObject(task)
      ); // Перетворення у Task
      set({ tasks: mappedTasks });
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  },

  // Додавання нової задачі до Firestore
  addTask: async (taskText: string) => {
    try {
      const newTask = await addTaskService({
        text: taskText,
        completed: false,
      });
      const mappedNewTask = Task.fromObject(newTask); // Перетворення у Task
      set((state) => ({ tasks: [...state.tasks, mappedNewTask] }));
    } catch (error) {
      console.error("Error adding task:", error);
    }
  },

  // Видалення задачі з Firestore
  removeTask: async (taskId: string) => {
    try {
      await deleteTaskService(taskId);
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== taskId),
      }));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  },

  // Оновлення задачі в Firestore
  updateTask: async (updatedTask: ITask) => {
    try {
      await updateTaskService(updatedTask.id, {
        text: updatedTask.text,
        completed: updatedTask.completed,
      });
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      }));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  },

  // Очищення задач локально
  clearTasks: () => {
    set({ tasks: [] });
  },

  // Зміна фільтру задач
  setFilter: (filter) => set({ filter }),
}));

// Хук для отримання відфільтрованих задач
export const useFilteredTasks = () => {
  const { tasks, filter } = useTaskStore();
  return filterTasks(tasks, filter);
};
