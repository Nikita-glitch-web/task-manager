import React from "react";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import ThemeSwitcher from "../components/ThemeToggle/ThemeToggle";
import { ThemeContextProvider } from "../theme/ThemeContext";

const TaskPage: React.FC = () => {
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

export default TaskPage;
