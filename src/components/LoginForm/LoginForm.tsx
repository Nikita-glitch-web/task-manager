import React, { useState, useCallback } from "react";
import { TextField, Box } from "@mui/material";
import { IAuthCredentials } from "../../types/types";
import { ButtonUsage } from "../Button/Button";
import { useAuthStore } from "../../store/useAuthStore";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const login = useAuthStore((state) => state.login);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!email || !password) {
        setError("Please fill in both fields.");
        return;
      }

      setError(null);

      const credentials: IAuthCredentials = { email, password };

      try {
        await login(credentials);
        console.log("User logged in successfully");
      } catch (err) {
        setError("Login failed. Please try again.");
        console.error("Login error:", err);
      }
    },
    [email, password, login]
  );

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
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        error={!!error && !email}
        helperText={!email && error}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        error={!!error && !password}
        helperText={!password && error}
      />
      {error && !(!email || !password) && (
        <Box sx={{ color: "red", textAlign: "center" }}>{error}</Box>
      )}
      <ButtonUsage type="submit">Login</ButtonUsage>
    </Box>
  );
};
