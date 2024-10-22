import React, { useState } from 'react';
import RadioButton from '../RadioButton/RadioButton';
import Input from '../Input/Input';
import { ITask } from '../../types/task';


interface ITaskItemProps {
  task: ITask;
  onChange: (task: ITask) => void;
}
export const TaskItem: React.FC<ITaskItemProps> = ({task, onChange}: ITaskItemProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [labelText, setLabelText] = useState<string>(task.text);
  const [selected, setSelected] = useState<boolean>(false);

  // test changes
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabelText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    const updatedTask = {...task, text: labelText};
    onChange(updatedTask)
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.checked);
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <Input
          type='text'
          value={labelText}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          name='editableLabel'
          id={''}
          errorMessage={undefined}
          placeholder={''}
        />
      );
    }
    return (
      <>
        <RadioButton
          name='radioTask'
          value={task.completed ? '1' : ''}
          checked={selected}
          onChange={handleRadioChange}
          label={''}
        />
        <span onDoubleClick={handleDoubleClick}>
          {task.text || 'Double-click to edit'}
        </span>
      </>
    );
  };

  return <div>{renderContent()}</div>;
};
