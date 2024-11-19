import { FC } from "react";
import Button from "@mui/material/Button";

interface ButtonUsageProps {
  onClick?: () => void;
  children: string;
  type?: "button" | "submit" | "reset"; // Добавляем тип кнопки
}

export const ButtonUsage: FC<ButtonUsageProps> = ({
  onClick,
  children,
  type = "button",
}) => {
  return (
    <Button variant="contained" onClick={onClick} type={type}>
      {children}
    </Button>
  );
};
