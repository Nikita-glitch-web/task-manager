import React from "react";
import styles from "./RadioButton.module.scss";

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  checked,
  onChange,
  label,
}) => {
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={styles.input}
      />
      {label}
    </label>
  );
};

export default RadioButton;
