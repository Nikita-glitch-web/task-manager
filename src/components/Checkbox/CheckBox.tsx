import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface CheckBoxProps {
  type: "radio";
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  value,
  checked,
  onChange,
  label,
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
      }
      label={label}
    />
  );
};
