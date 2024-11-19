import React from "react";
import "./styles/index.scss";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import ThemeSwitcher from "./components/ThemeToggle/ThemeToggle";
import { ThemeContextProvider } from "./theme/ThemeContext";
import { LoginForm } from "./components/LoginForm";
import { useAuth } from "./hooks/useAuth";

const App: React.FC = () => {
  const { isAuthenticated, login } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm onSubmit={login} />;
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
