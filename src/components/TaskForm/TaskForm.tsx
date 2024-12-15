import React, { useState } from "react";
import { useTaskStore } from "../../store";
import { TextField, Box, Button, Typography } from "@mui/material";
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
      sx={{ textAlign: "center", mt: 4 }}
    >
      <Typography variant="h4" gutterBottom>
        Task Manager
      </Typography>
      <form
        onSubmit={addTaskHandler}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <TextField
          variant="standard" // Нижнє підкреслення
          placeholder="What needs to be done?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          sx={{
            mr: 2, // Відступ справа
            width: "300px", // Ширина інпуту
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            height: "40px",
            mt: "auto", // Вирівнювання по вертикалі
          }}
        >
          Add Task
        </Button>
      </form>
    </Box>
  );
};
