import React from "react";
import { TaskForm } from "../components/TaskForm";
import { TaskList } from "../components/TaskList";
import ThemeSwitcher from "../components/ThemeToggle/ThemeToggle";
import { Box } from "@mui/material";
import style from "./Task.module.scss";

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
            marginBottom: "20px",
          }}
        >
          <ThemeSwitcher />
        </Box>
        <main>
          <TaskForm />
          <TaskList />
        </main>
        <footer className={style.app_footer}>
          <p>© 2024 Task App. All rights reserved.</p>
        </footer>
      </Box>
    </div>
  );
};

export default TaskPage;
