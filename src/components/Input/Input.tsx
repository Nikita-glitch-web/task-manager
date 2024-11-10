import { FC } from "react";
import TextField from "@mui/material/TextField";
import styles from "./Input.module.scss";
import { InputProps } from "./types";

export const Input: FC<InputProps> = ({
  errorMessage,
  value,
  type = "text",
  placeholder,
  onFocus,
  onBlur,
  onChange,
  name,
  autoFocus,
  id = `${name}-${Math.ceil(Math.random() * 999)}`,
}) => {
  return (
    <div className={styles.input_wrapper}>
      <TextField
        type={type}
        id={id}
        label={placeholder}
        variant="outlined"
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        autoFocus={autoFocus}
        error={!!errorMessage}
        helperText={errorMessage}
        fullWidth
      />
    </div>
  );
};

export default Input;
