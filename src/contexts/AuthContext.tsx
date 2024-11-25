import { PropsWithChildren, createContext, useContext } from "react";
import { useAuthStore } from "../store/useAuthStore";

interface IAuthContext {
  user: ReturnType<typeof useAuthStore>["user"];
  login: ReturnType<typeof useAuthStore>["login"];
  signUp: ReturnType<typeof useAuthStore>["signUp"];
  logout: ReturnType<typeof useAuthStore>["logout"];
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const authStore = useAuthStore();

  if (!authStore) {
    throw new Error("useAuthStore did not return the expected object.");
  }

  const { user, login, signUp, logout } = authStore;

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
