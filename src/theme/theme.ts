import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#04A3ED",
    },
    secondary: {
      main: "#EEBF3D",
    },
    error: {
      main: red[600],
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    h1: {
      color: "#EEBF3D",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "37.5px",
      textAlign: "center",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      textAlign: "left",
      textTransform: "none",
    },
    body2: {
      fontsize: "16px",
      fontweight: 400,
      lineheight: "18.75px",
      color: "#747474",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1E88E5",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFC107",
      contrastText: "#000000",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF", // Білий колір для основного тексту
      secondary: "#FFFFFF", // Білий колір для вторинного тексту
    },
  },
  typography: {
    h1: {
      color: "#FFC107",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "37.5px",
      textAlign: "center",
    },
    h5: {
      fontSize: "32px",
      color: "white",
    },
    body1: {
      color: "#FFFFFF", //Забезпечуємо білий колір для body1 тут також, для більшої впевненості
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      textAlign: "left",
    },
    body2: {
      color: "#FFFFFF", //Забезпечуємо білий колір для body2 тут також, для більшої впевненості
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
    },
  },
});

export const CustomButton = styled(Button)(({ theme }) => ({
  color: "#FFFFFF",
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
