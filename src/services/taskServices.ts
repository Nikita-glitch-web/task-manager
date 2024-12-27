import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../store/firebase.config";
import { Task } from "../models/Task";
import { ITaskData } from "../types/task";

export const addTask = async (task: ITaskData) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error("User is not authenticated");
    }

    const docRef = await addDoc(
      collection(db, `users/${user.uid}/tasks`),
      task
    );
    return { id: docRef.id, ...task };
  } catch (error) {
    console.error("Error adding task: ", error);
    throw error;
  }
};

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error("User is not authenticated");
    }
    const querySnapshot = await getDocs(
      collection(db, `users/${user.uid}/tasks`)
    );
    console.log(">>>>>>>>>", querySnapshot.docs);
    return querySnapshot.docs.map((doc) => {
      const rawTask = {
        id: doc.id,
        ...(doc.data() as ITaskData),
      };
      console.log(rawTask);
      return Task.fromObject(rawTask);
    }); // Використання
  } catch (error) {
    console.error("Error fetching tasks: ", error);
    throw error;
  }
};

export const updateTask = async (
  id: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updatedFields: Record<string, any>
) => {
  try {
    console.log(db);
    const docRef = doc(db, "tasks", id);
    await updateDoc(docRef, updatedFields);
    return { id, ...updatedFields };
  } catch (error) {
    console.error("Error updating task: ", error);
    throw error;
  }
};

export const deleteTask = async (id: string) => {
  try {
    const docRef = doc(db, "tasks", id);
    console.log(docRef);
    await deleteDoc(docRef);
    return id;
  } catch (error) {
    console.error("Error deleting task: ", error);
    throw error;
  }
};
