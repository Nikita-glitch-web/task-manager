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

const getPath = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User is not authenticated");
  }
  return `users/${user?.uid}/tasks`;
};

export const addTask = async (task: ITaskData) => {
  try {
    const docRef = await addDoc(collection(db, getPath()), task);
    return { id: docRef.id, ...task };
  } catch (error) {
    console.error("Error adding task: ", error);
    throw error;
  }
};

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, getPath()));
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
    //     const path = [
    // "projects",
    // "task-manager-8e667",
    // "databases",
    // "(default)",
    // "documents",
    // "users",
    // "pkugW9JAG1cLcgC2rdNMQL4hvGq1",
    // "tasks",
    // "0hsAh8HCbcKeW8gRPgcw"]

    const docRef = doc(db, getPath(), id);
    console.log("Document reference:", docRef);
    console.log(updatedFields);
    await updateDoc(docRef, updatedFields);
    return { id, ...updatedFields };
  } catch (error) {
    console.error("Error updating task: ", error);
    throw error;
  }
};

export const deleteTask = async (id: string) => {
  try {
    const docRef = doc(db, getPath(), id);
    console.log(docRef);
    await deleteDoc(docRef);
    return id;
  } catch (error) {
    console.error("Error deleting task: ", error);
    throw error;
  }
};
