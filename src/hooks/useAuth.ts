import { useState } from "react";

export interface Credentials {
  username: string;
  password: string;
}

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (credentials: Credentials) => {
    if (
      credentials.username === "admin" &&
      credentials.password === "password"
    ) {
      console.log("Login successful");
      setIsAuthenticated(true);
    } else {
      console.log("Invalid credentials");
      alert("Invalid username or password");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    console.log("User logged out");
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};
