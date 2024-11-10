// components/ThemeSwitcher.tsx
import React from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { useThemeContext } from "../../theme/useThemeContext"; 

const ThemeSwitcher: React.FC = () => {
  const { toggleTheme } = useThemeContext();
  return (
    <FormControlLabel
      control={<Switch onChange={toggleTheme} />}
      label="Toggle Theme"
    />
  );
};

export default ThemeSwitcher;
