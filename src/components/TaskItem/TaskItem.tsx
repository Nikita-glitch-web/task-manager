import React, { useState } from "react";
import RadioButton from "../RadioButton/RadioButton";
import Input from "../Input/Input";

const EditableRadioButton: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [labelText, setLabelText] = useState<string>("Default Label");
  const [selected, setSelected] = useState<boolean>(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabelText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.checked);
  };

  return (
    <div>
      <RadioButton
        name="radioTask"
        value={labelText}
        checked={selected}
        onChange={handleRadioChange}
        label={""}
      />
      {isEditing ? (
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
      ) : (
        <span onDoubleClick={handleDoubleClick}>
          {labelText || "Double-click to edit"}
        </span>
      )}
    </div>
  );
};

export default EditableRadioButton;
