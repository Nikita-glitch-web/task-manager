import React from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "../components/Button/Button";
import { Link } from "react-router-dom";

export const AuthPage: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 250,
        margin: "auto",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-beetwen",
        gap: 2,
      }}
    >
      <Typography
        variant="h1"
        component="h2"
        sx={{
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        You can Login or SignUp
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/login">
          <CustomButton>Login</CustomButton>
        </Link>
        <Link to="/signup">
          <CustomButton>SignUp</CustomButton>
        </Link>
        .
      </Box>
    </Box>
  );
};
