import React from "react";
import "./styles/index.scss";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";

const App: React.FC = () => {
  return (
    <div className="page-wrapper">
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
