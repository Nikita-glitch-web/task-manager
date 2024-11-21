import React, { useState, useCallback } from "react";
import { TextField, Box } from "@mui/material";
import { IAuthCredentials } from "../../types/types";
import { ButtonUsage } from "../Button/Button";
import { useAuthStore } from "../../store/useAuthStore";

export const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const signUp = useAuthStore((state) => state.signUp);

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
      } catch (err) {
        setError("Failed to sign up. Please try again.");
        console.error("Sign-up error:", err);
      }
    },
    [email, password, confirmPassword, signUp]
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
      {error && !email && (
        <Box sx={{ color: "red", textAlign: "center" }}>{error}</Box>
      )}
      <ButtonUsage type="submit">Sign Up</ButtonUsage>
    </Box>
  );
};
