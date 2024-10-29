import React from "react";
import styles from "./RadioButton.module.scss";

interface CheckBoxProps {
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
