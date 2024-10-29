import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import { ITask } from "../../types/task";
import { CheckBox } from "../RadioButton/CheckBox";

interface ITaskItemProps {
  task: ITask;
  onChange: (task: ITask) => void;
}

export const TaskItem: React.FC<ITaskItemProps> = ({
  task,
  onChange,
}: ITaskItemProps) => {
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
    task.toggleCompleted();
    setSelected(task.completed);
    onChange(task);
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
          id={""}
          errorMessage={undefined}
          placeholder={""}
        />
      );
    }
    return (
      <>
        <CheckBox
          name="radioTask"
          value={task.completed ? "1" : ""}
          checked={selected}
          onChange={handleRadioChange}
          label={""}
        />
        <span onDoubleClick={handleDoubleClick}>
          {task.text || "Double-click to edit"}
        </span>
      </>
    );
  };

  return <div>{renderContent()}</div>;
};
