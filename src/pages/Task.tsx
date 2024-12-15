import React from "react";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import ThemeSwitcher from "../components/ThemeToggle/ThemeToggle";
import { Box } from "@mui/material";

const TaskPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            background: "#FBBC04",
            height: "80px",
            width: "100",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <ThemeSwitcher />
        </Box>
        <main>
          <TaskForm />
          <TaskList />
        </main>
        <footer className="app-footer">
          <p>© 2024 Task App. All rights reserved.</p>
        </footer>
      </Box>
    </div>
  );
};

export default TaskPage;
