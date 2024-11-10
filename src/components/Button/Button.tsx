import { FC } from "react";
import Button from "@mui/material/Button";

interface ButtonUsageProps {
  onClick?: () => void;
  children: string;
}

export const ButtonUsage: FC<ButtonUsageProps> = ({ onClick, children }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
};
