import React, { useState } from "react";
import Input from "../Input/Input"; // Імпорт компонента Input

interface TaskProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  updateTask: (id: number, newText: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, updateTask }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(task.text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    updateTask(task.id, editedText);
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      {isEditing ? (
        <Input
          type="text"
          value={editedText}
          onChange={handleInputChange}
          onBlur={handleBlur}
          autoFocus
          placeholder="Edit task"
          name={`task-${task.id}`}
          id={`input-${task.id}`}
          errorMessage={undefined}
        />
      ) : (
        <span onDoubleClick={handleDoubleClick}>{task.text}</span>
      )}
    </li>
  );
};

export default Task;
