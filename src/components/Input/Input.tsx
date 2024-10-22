import { FC } from "react";
import styles from "./Input.module.scss";
import { InputProps } from "./types";

export const Input: FC<InputProps> = ({
  errorMessage,
  value,
  type,
  placeholder,
  onFocus,
  onBlur,
  onChange,
  name,
  autoFocus,
  id = `${name}-${Math.ceil(Math.random() * 999)}`, // Генеруємо id, якщо його не передали
}) => {
  return (
    <div className={styles.input_wrapper}>
      <div className={styles.form_group}>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onFocus={onFocus}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          autoFocus={autoFocus} // Додаємо підтримку autoFocus
        />
      </div>
      {errorMessage && (
        <span className={styles.error_message}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
