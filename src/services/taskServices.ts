import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../store/firebase.config";

export const addTask = async (task: { title: string; completed: boolean }) => {
  try {
    const docRef = await addDoc(collection(db, "tasks"), task);
    return { id: docRef.id, ...task };
  } catch (error) {
    console.error("Error adding task: ", error);
    throw error;
  }
};

export const fetchTasks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
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
    await deleteDoc(docRef);
    return id;
  } catch (error) {
    console.error("Error deleting task: ", error);
    throw error;
  }
};
