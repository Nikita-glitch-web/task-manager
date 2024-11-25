import { PropsWithChildren, createContext, useContext, useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

interface IAuthContext {
  user: unknown;
  login: unknown;
  signUp: unknown;
  logout: unknown;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const authStore = useAuthStore();

  if (!authStore) {
    throw new Error('useAuthStore did not return the expected object.');
  }

  const { user, login, signUp, logout, fetchCurrentUser } = authStore;

  useEffect(() => {
    fetchCurrentUser();
  }, []);


  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
