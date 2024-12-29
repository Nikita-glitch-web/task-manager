import React, { useState, useCallback } from "react";
import { TextField, Box, Typography } from "@mui/material";
import { IAuthCredentials } from "../../types/types";
import { CustomButton } from "../../theme/theme";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const signUp = useAuthStore((state) => state.signUp);
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!email || !password || !confirmPassword) {
        setError("All fields are required");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      setError(null);

      const credentials: IAuthCredentials = { email, password };

      try {
        await signUp(credentials);
        console.log("User signed up successfully");
        navigate("/tasks"); // Перенаправление на страницу /tasks
      } catch (err) {
        setError("Failed to sign up. Please try again.");
        console.error("Sign-up error:", err);
      }
    },
    [email, password, confirmPassword, signUp, navigate]
  );

  const handleLoginRedirect = () => {
    navigate("/login"); // Перенаправление на страницу входа
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
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
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Тень для формы
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h1" sx={{ textAlign: "center", marginBottom: 2 }}>
          Sign Up
        </Typography>

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

        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          error={!!error && !confirmPassword}
          helperText={!confirmPassword && error}
        />

        {error && <Box sx={{ color: "red", textAlign: "center" }}>{error}</Box>}

        <CustomButton type="submit">Sign Up</CustomButton>
        <CustomButton onClick={handleLoginRedirect}>Login</CustomButton>
      </Box>
    </Box>
  );
};
