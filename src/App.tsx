import React, { useEffect, useState } from "react";
import "./styles/index.scss";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import ThemeSwitcher from "./components/ThemeToggle/ThemeToggle";
import { ThemeContextProvider } from "./theme/ThemeContext";
import { LoginForm } from "./components/LoginForm";
import { useAuthStore } from "./store/useAuthStore";
import { IAuthCredentials } from "./types/types";

const App: React.FC = () => {
  const { user, login } = useAuthStore((state) => ({
    user: state.user,
    login: state.login,
  }));

  const [isUserReady, setIsUserReady] = useState(false);

  useEffect(() => {
    if (user !== null) {
      setIsUserReady(true);
    }
  }, [user]);

  const loginHandler = async (credentials: IAuthCredentials) => {
    try {
      await login(credentials);
    } catch (error) {
      console.error("Login error", error);
    }
  };

  if (!user) {
    return <LoginForm onSubmit={loginHandler} />;
  }

  if (!isUserReady) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-wrapper">
      <ThemeContextProvider>
        <div>
          <ThemeSwitcher />
          <main>
            <TaskForm />
            <TaskList />
          </main>
          <footer className="app-footer">
            <p>© 2024 Task App. All rights reserved.</p>
          </footer>
        </div>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
