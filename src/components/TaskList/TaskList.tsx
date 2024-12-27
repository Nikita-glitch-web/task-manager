import { ITask } from "../../types/task";
import { TaskItem } from "../TaskItem/TaskItem";
import { useTaskStore, useFilteredTasks } from "../../store/useTaskStore";
import Filter from "../Filter/Filter";
import { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";

export const TaskList = () => {
  const { updateTask, removeTask, loadTasks, clearTasks } = useTaskStore();
  const filteredTasks = useFilteredTasks();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleUpdate = (updatedTask: ITask) => {
    console.log("111", updatedTask);
    updateTask(updatedTask); // Оновлення задачі в глобальному стані
  };

  const handleDelete = (taskId: string) => {
    removeTask(taskId); // Видалення задачі з глобального стану
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        await loadTasks(); // Завантаження задач
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred.";
        setError(errorMessage); // Обробка помилок
      } finally {
        setIsLoading(false);
      }
    };

    clearTasks(); // Очистка задач перед завантаженням нових

    fetchData();
  }, [loadTasks, clearTasks]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Alert severity="error">{error}</Alert> {/* Виведення помилки */}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: 4,
        boxShadow: "0px 3px 9px 2px rgba(0, 0, 0, 0.21)",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "0 auto",
        bgcolor: "white",
        marginTop: "20px",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Task List
      </Typography>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task: ITask) => (
          <Box
            key={task.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #ddd",
              py: 2,
            }}
          >
            <TaskItem
              task={task}
              onChange={handleUpdate} // Передаємо функцію оновлення до TaskItem
              onDelete={handleDelete} // Передаємо функцію для видалення
            />
          </Box>
        ))
      ) : (
        <Typography variant="body1" sx={{ mt: 3, textAlign: "center" }}>
          No tasks available. Add some tasks to get started!
        </Typography>
      )}
      <Box sx={{ mt: 3 }}>
        <Filter />
      </Box>
    </Box>
  );
};
