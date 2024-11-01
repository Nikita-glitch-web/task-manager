import React from "react";
import styles from "./CheckBox.module.scss";

interface CheckBoxProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "checkbox" | "radio";
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  value,
  checked,
  onChange,
  label,
  type = "checkbox",
}) => {
  return (
    <label className={styles.label}>
      <input
        type={type}
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
