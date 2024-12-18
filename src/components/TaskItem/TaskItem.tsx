import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import { ITask } from "../../types/task";
import { CheckBox } from "../Checkbox/CheckBox";
import { CustomButton } from "../Button/Button";
interface ITaskItemProps {
  task: ITask;
  onChange: (task: ITask) => void;
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
    setSelected(task.completed);
  }, [task.completed]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabelText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    const updatedTask = task.updateText(labelText);
    onChange(updatedTask);
  };

  const handleRadioChange = () => {
    const updatedTask = { ...task, completed: !task.completed };
    setSelected(!selected);
    onChange(updatedTask);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <Input
          type="text"
          value={labelText}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          name="editableLabel"
          id=""
          errorMessage={undefined}
          placeholder=""
        />
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
        <span onDoubleClick={handleDoubleClick}>
          {task.text || "Double-click to edit"}
        </span>
        <CustomButton onClick={handleDelete}>Удалить</CustomButton>
      </>
    );
  };

  return <div>{renderContent()}</div>;
};
