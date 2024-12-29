import React, { createContext, useState, ReactNode } from "react";
import { ThemeProvider, Theme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";

export interface ThemeContextProps {
  toggleTheme: () => void;
  theme: Theme;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>
        <div
          style={{
            height: "100vh",
            transition: "background-color 0.3s ease",
            backgroundColor: isDarkMode
              ? "#747474"
              : theme.palette.background.default,
          }}
        >
          {children}
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
