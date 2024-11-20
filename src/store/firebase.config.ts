import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  // apiKey: process.env.TASK_MANAGER_FIREBASE_API_KEY,
  // authDomain: process.env.TASK_MANAGER_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.TASK_MANAGER_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.TASK_MANAGER_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.TASK_MANAGER_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.TASK_MANAGER_FIREBASE_APP_ID,
  // measurementId: process.env.TASK_MANAGER_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyBm7nxlX-CR-DGrV9jhnz1lYxua0RldvcQ",
  authDomain: "task-manager-8e667.firebaseapp.com",
  databaseURL:
    "https://task-manager-8e667-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "task-manager-8e667",
  storageBucket: "task-manager-8e667.firebasestorage.app",
  messagingSenderId: "63363482214",
  appId: "1:63363482214:web:f475ba22a09fbc66d223a7",
  measurementId: "G-1KQSETBJGG",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
