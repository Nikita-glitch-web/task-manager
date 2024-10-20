import React from "react";
import "./styles/index.scss";
import Task from "./components/Task/Task";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Task App</h1>
      </header>

      <main>
        <Task
          task={{
            id: 0,
            text: "",
            completed: false,
          }}
          updateTask={function (id: number, newText: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </main>

      <footer className="app-footer">
        <p>© 2024 Task App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
