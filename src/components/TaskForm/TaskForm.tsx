import React, { useState } from "react";
import { useTaskStore } from "../../store";
import { TextField, Box } from "@mui/material";
import style from "./TaskFom.module.scss";

export const TaskForm: React.FC = () => {
  const [newTask, setNewTask] = useState<string>(""); // Стан для нової задачі
  const { addTask } = useTaskStore(); // Додавання задачі зі стану

  // Обробник додавання задачі
  const addTaskHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask(""); // Очистка інпуту
    }
  };

  return (
    <Box
      className={style.task_form_container}
      sx={{
        mt: 4,
        py: 2,
        boxShadow: "0px 3px 9px 2px rgba(0, 0, 0, 0.21)",
        maxWidth: "600px",
        margin: "0 auto",
        borderRadius: "8px",
        bgcolor: "white",
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop: "25px",
      }}
    >
      <form
        onSubmit={addTaskHandler}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px",
        }}
      >
        <TextField
          variant="standard" // Нижнє підкреслення
          placeholder="What should be done?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          sx={{
            width: "600px", // Ширина інпуту
            input: {
              textAlign: "left",
              fontSize: "24px",
            },
          }}
        />
      </form>
    </Box>
  );
};
