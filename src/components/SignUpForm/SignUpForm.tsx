import React, { useState } from "react";
import { TextField, FormGroup, Box } from "@mui/material";
import { ButtonUsage } from "../Button/Button";
import { useAuthStore } from "../../store/useAuthStore";

interface Credentials {
  email: string;
  password: string;
}

export const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const signUp = useAuthStore((state) => state.signUp);

  const handleSubmit = async (e: React.FormEvent) => {
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

    // Створюємо об'єкт credentials
    const credentials: Credentials = { email, password };

    try {
      // Викликаємо функцію signUp з переданим об'єктом credentials
      await signUp(credentials);
      console.log("User signed up successfully");
    } catch (err) {
      setError("Failed to sign up. Please try again.");
      console.error(err);
    }
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
      <FormGroup>
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
        />
      </FormGroup>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      <ButtonUsage type="submit">Sign Up</ButtonUsage>
    </Box>
  );
};

export default SignUpForm;
