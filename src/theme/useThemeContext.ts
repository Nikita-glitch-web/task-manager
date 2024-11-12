// theme/useThemeContext.ts
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeContextProps } from "./ThemeContext";

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};
