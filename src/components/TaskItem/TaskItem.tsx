import React, { useState, useEffect } from "react";
import { TextField, Box } from "@mui/material";
import { ITask } from "../../types/task";
import { CheckBox } from "../Checkbox/CheckBox";
import { CustomButton } from "../Button/Button";
import style from "./TaskItem.module.scss";

interface ITaskItemProps {
  task: ITask;
  onChange: (task: ITask) => void; // Це функція, яку викликає батьківський компонент для оновлення задачі
  onDelete: (taskId: string) => void;
}

export const TaskItem: React.FC<ITaskItemProps> = ({
  task,
  onChange,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [labelText, setLabelText] = useState<string>(task.text);
  const [selected, setSelected] = useState<boolean>(task.completed);

  useEffect(() => {
    setLabelText(task.text); // Синхронізація тексту при зміні task
    setSelected(task.completed); // Синхронізація статусу чекбоксу
  }, [task]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabelText(e.target.value);
  };

  const handleBlur = () => {
    if (labelText.trim() !== task.text) {
      const updatedTask = { ...task, text: labelText.trim() }; // Оновлення тексту задачі
      onChange(updatedTask); // Відправка змін в батьківський компонент
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleBlur();
    }
  };

  const handleRadioChange = () => {
    const updatedTask = { ...task, completed: !task.completed };
    setSelected(!selected);
    onChange(updatedTask); // Оновлення статусу завершення задачі в глобальному стані
  };

  const handleDelete = () => {
    onDelete(task.id); // Видалення задачі
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <Box sx={{ width: "100%" }}>
          <TextField
            value={labelText}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            placeholder="What should be done?"
            variant="standard"
            fullWidth
            InputProps={{
              style: {
                fontSize: "16px",
                padding: "5px 0",
              },
            }}
            InputLabelProps={{
              style: {
                color: "#9e9e9e",
              },
            }}
          />
        </Box>
      );
    }
    return (
      <>
        <CheckBox
          type="radio"
          name={`task-${task.id}`}
          value={task.completed ? "1" : ""}
          checked={selected}
          onChange={handleRadioChange}
          label=""
        />
        <span className={style.task_text} onDoubleClick={handleDoubleClick}>
          {task.text || "Double-click to edit"}
        </span>
        <CustomButton onClick={handleDelete}>Delete</CustomButton>
      </>
    );
  };

  return <div className={style.task_item}>{renderContent()}</div>;
};
