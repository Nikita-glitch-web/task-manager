import React, { useState, useCallback } from "react";
import { TextField, Box, Typography } from "@mui/material";
import { CustomButton } from "../../theme/theme"; // Імпортуємо з theme.ts
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
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

      try {
        await login({ email, password });
        navigate("/tasks");
        console.log("User logged in successfully");
      } catch (err) {
        setError("Login failed. Please try again.");
        console.error("Login error:", err);
      }
    },
    [email, password, login, navigate]
  );

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        position: "relative",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 400,
          padding: 4,
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h1">My tasks</Typography>
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
        {error && <Box sx={{ color: "red", textAlign: "center" }}>{error}</Box>}
        <CustomButton type="submit">
          <Typography variant="body1">Login</Typography>
        </CustomButton>
        <CustomButton type="submit">
          <Typography variant="body1">Signup</Typography>
        </CustomButton>
      </Box>
    </Box>
  );
};
