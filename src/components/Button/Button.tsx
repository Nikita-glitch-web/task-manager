import { FC } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"; // Імпортуємо Link для внутрішніх посилань

interface ButtonUsageProps {
  onClick?: () => void;
  children: string;
  type?: "button" | "submit" | "reset"; // Тип кнопки
  href?: string; // Для зовнішнього посилання
  to?: string; // Для внутрішнього посилання (React Router)
}

export const ButtonUsage: FC<ButtonUsageProps> = ({
  onClick,
  children,
  type = "button",
  href, // Посилання для зовнішніх сайтів
  to, // Шлях для внутрішньої навігації
}) => {
  // Якщо передано href, то це зовнішнє посилання
  if (href) {
    return (
      <Button
        variant="contained"
        onClick={onClick}
        type={type}
        component="a"
        href={href}
        target="_blank"
      >
        {children}
      </Button>
    );
  }

  if (to) {
    return (
      <Button
        variant="contained"
        onClick={onClick}
        type={type}
        component={Link}
        to={to}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button variant="contained" onClick={onClick} type={type}>
      {children}
    </Button>
  );
};
