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
      main: "#90caf9",
    },
    background: {
      default: "#121212",
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
      color: "#FFFFFF",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      textAlign: "center",
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
