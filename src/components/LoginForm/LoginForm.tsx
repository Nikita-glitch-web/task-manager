import React, { useState } from "react";
import { TextField, FormGroup, Box } from "@mui/material";
import { ButtonUsage } from "../Button/Button";

interface Credentials {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (credentials: Credentials) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>(""); // Изменено username на email
  const [password, setPassword] = useState<string>("");
  const [, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setError(null);
    onSubmit({ email, password }); // Передаем email вместо username
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth: 400,
        margin: "auto",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <FormGroup>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
      </FormGroup>
      <FormGroup>
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
      </FormGroup>
      <ButtonUsage type="submit">Login</ButtonUsage>
    </Box>
  );
};

export default LoginForm;
