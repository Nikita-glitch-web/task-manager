import React from "react";
import styles from "./RadioButton.module.scss";

interface CheckBoxProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "checkbox" | "radio"; // Добавляем type с двумя возможными значениями
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  value,
  checked,
  onChange,
  label,
  type = "checkbox", // значение по умолчанию
}) => {
  return (
    <label className={styles.label}>
      <input
        type={type} // Устанавливаем тип, переданный в пропсах
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
