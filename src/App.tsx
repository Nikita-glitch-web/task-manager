import React from "react";
import "./styles/index.scss";
import TaskForm from "./components/TaskForm/TaskForm";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Task App</h1>
      </header>

      <main>
        <TaskForm></TaskForm>
        <TaskList></TaskList>
      </main>

      <footer className="app-footer">
        <p>© 2024 Task App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
