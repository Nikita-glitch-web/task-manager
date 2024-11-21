import React from "react";
import { Box, Typography } from "@mui/material";
import { ButtonUsage } from "../components/Button/Button";

const TaskPage: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 400,
        margin: "auto",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Typography
        variant="h1"
        component="h2"
        sx={{
          fontSize: "20px",
        }}
      >
        You can Login or SignUp
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <ButtonUsage href="/login">Login</ButtonUsage>
        <ButtonUsage href="/signup">SignUp</ButtonUsage>
      </Box>
    </Box>
  );
};

export default TaskPage;
