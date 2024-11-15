import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.TASK_MANAGER_FIREBASE_API_KEY,
  authDomain: process.env.TASK_MANAGER_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.TASK_MANAGER_FIREBASE_PROJECT_ID,
  storageBucket: process.env.TASK_MANAGER_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.TASK_MANAGER_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.TASK_MANAGER_FIREBASE_APP_ID,
  measurementId: process.env.TASK_MANAGER_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
