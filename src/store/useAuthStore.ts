import { create } from "zustand";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "./firebase.config";

interface IAuthStore {
  user: User | null;
  login: ({ email, password }: IAuthCredentials) => Promise<void>;
  signUp: ({ email, password }: IAuthCredentials) => Promise<void>;
}

interface IAuthCredentials {
  email: string;
  password: string;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  user: null,

  login: async ({ email, password }: IAuthCredentials) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      set((state) => {
        if (state.user?.uid !== user.uid) {
          return { user };
        }
        return {};
      });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },

  signUp: async ({ email, password }: IAuthCredentials) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      set({ user });
    } catch (error) {
      console.error("Sign up failed:", error);
      throw error;
    }
  },
}));
