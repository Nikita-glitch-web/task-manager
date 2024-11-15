import { FC, useState } from "react";
import { FormGroup } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ButtonUsage } from "../Button/Button";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
  onSubmit: (credentials: { username: string; password: string }) => void;
}

export const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username) {
      setUsernameError("Username is required");
    } else {
      setUsernameError(null);
    }

    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError(null);
    }

    if (username && password) {
      onSubmit({ username, password });
    }
  };

  return (
    <FormGroup onSubmit={handleSubmit} className={styles.form_wrapper}>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={!!usernameError}
        helperText={usernameError}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!passwordError}
        helperText={passwordError}
        fullWidth
        margin="normal"
      />
      <ButtonUsage>Login</ButtonUsage>
    </FormGroup>
  );
};

export default LoginForm;
