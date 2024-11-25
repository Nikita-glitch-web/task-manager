import { FC } from "react";
import { Button as MUIButton } from "@mui/material";
import { Link } from "react-router-dom"; // Імпортуємо Link для внутрішніх посилань

interface ButtonProps {
  onClick?: () => void;
  children: string;
  type?: "button" | "submit" | "reset"; // Тип кнопки
  href?: string; // Для зовнішнього посилання
  to?: string; // Для внутрішнього посилання (React Router)
}

export const Button: FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
  href, // Посилання для зовнішніх сайтів
  to, // Шлях для внутрішньої навігації
}) => {
  // Якщо передано href, то це зовнішнє посилання
  if (href) {
    return (
      <MUIButton
        variant="contained"
        onClick={onClick}
        type={type}
        component="a"
        href={href}
        target="_blank"
      >
        {children}
      </MUIButton>
    );
  }

  if (to) {
    return (
      <MUIButton
        variant="contained"
        onClick={onClick}
        type={type}
        component={Link}
        to={to}
      >
        {children}
      </MUIButton>
    );
  }

  return (
    <MUIButton variant="contained" onClick={onClick} type={type}>
      {children}
    </MUIButton>
  );
};
